import { readFile, writeFile } from "node:fs/promises";

const SDK_SOURCE_PATH = new URL("./src/client/sdk.gen.ts", import.meta.url);
const OPENAPI_PATH = new URL("./openapi.json", import.meta.url);
const OUTPUT_PATH = new URL("./src/method-metadata.gen.ts", import.meta.url);

function parseComments(commentLines) {
  const cleaned = commentLines.map((line) => line.trim()).filter(Boolean);
  const summary = cleaned[0];
  const description =
    cleaned.length > 1 ? cleaned.slice(1).join(" ") : undefined;

  return {
    summary,
    description: description && description !== summary ? description : undefined,
  };
}

function parseGeneratedMethods(source) {
  const methods = [];
  const lines = source.split(/\r?\n/);

  let currentNamespace = null;
  let currentComment = [];
  let inComment = false;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index] ?? "";

    const classMatch = line.match(/^export class (\w+) \{$/);
    if (classMatch) {
      currentNamespace = classMatch[1];
      continue;
    }

    if (currentNamespace && line === "}") {
      currentNamespace = null;
      continue;
    }

    if (!currentNamespace) {
      continue;
    }

    if (line.trim() === "/**") {
      inComment = true;
      currentComment = [];
      continue;
    }

    if (inComment) {
      if (line.trim() === "*/") {
        inComment = false;
        continue;
      }

      currentComment.push(line.replace(/^\s*\* ?/, ""));
      continue;
    }

    const methodMatch = line.match(/^\s*public static (\w+)</);
    if (!methodMatch) {
      continue;
    }

    const method = methodMatch[1];
    let httpMethod;
    let path;

    for (let cursor = index; cursor < Math.min(lines.length, index + 40); cursor += 1) {
      const candidate = lines[cursor] ?? "";
      const httpMethodMatch = candidate.match(
        /\.(get|post|put|patch|delete|head|options)</,
      );
      if (httpMethodMatch) {
        httpMethod ??= httpMethodMatch[1];
      }

      const pathMatch = candidate.match(/url:\s+["']([^"']+)["']/);
      if (pathMatch) {
        path ??= pathMatch[1];
      }

      if (httpMethod && path) {
        break;
      }
    }

    methods.push({
      namespace: currentNamespace,
      method,
      fullName: `${currentNamespace}.${method}`,
      httpMethod,
      path,
      ...parseComments(currentComment),
    });

    currentComment = [];
  }

  return methods;
}

function dereference(root, target) {
  if (!target || typeof target !== "object") {
    return target;
  }

  if ("$ref" in target && typeof target.$ref === "string") {
    const refPath = target.$ref.replace(/^#\//, "").split("/");
    let value = root;
    for (const segment of refPath) {
      value = value?.[segment];
    }
    return dereference(root, value);
  }

  if (Array.isArray(target.allOf)) {
    const merged = { type: "object", properties: {}, required: [] };
    for (const item of target.allOf) {
      const resolved = dereference(root, item) ?? {};
      Object.assign(merged.properties, resolved.properties ?? {});
      if (Array.isArray(resolved.required)) {
        merged.required.push(...resolved.required);
      }
    }
    return merged;
  }

  if (Array.isArray(target.anyOf)) {
    const candidate = target.anyOf.find(
      (item) => dereference(root, item)?.type !== "null",
    );
    return dereference(root, candidate ?? target.anyOf[0]);
  }

  if (Array.isArray(target.oneOf)) {
    const candidate = target.oneOf.find(
      (item) => dereference(root, item)?.type !== "null",
    );
    return dereference(root, candidate ?? target.oneOf[0]);
  }

  return target;
}

function exampleStringForName(name, schema) {
  const lowerName = name.toLowerCase();

  if (schema?.format === "date-time") {
    return "2026-03-30T09:00:00Z";
  }

  if (schema?.format === "date" || lowerName.includes("date")) {
    return "2026-03-30";
  }

  if (lowerName.includes("timezone")) {
    return "Europe/Warsaw";
  }

  if (lowerName.endsWith("id") || lowerName === "id" || lowerName.includes("id")) {
    return `${lowerName.replace(/id/g, "").replace(/[^a-z0-9]+/g, "_") || "item"}_123`;
  }

  if (lowerName.includes("email")) {
    return "user@example.com";
  }

  if (lowerName.includes("url") || lowerName.includes("link")) {
    return "https://example.com";
  }

  if (
    lowerName.includes("title") ||
    lowerName.includes("name") ||
    lowerName.includes("content") ||
    lowerName.includes("description") ||
    lowerName.includes("note") ||
    lowerName.includes("search") ||
    lowerName.includes("query")
  ) {
    return "Example";
  }

  return "string";
}

function pickObjectKeys(properties, required) {
  const propertyKeys = Object.keys(properties ?? {});
  if (propertyKeys.length === 0) {
    return [];
  }

  if (required.length > 0) {
    return required.slice(0, 3);
  }

  return propertyKeys.slice(0, 2);
}

function buildExampleValue(root, schema, name = "value", depth = 0) {
  if (!schema || depth > 4) {
    return "value";
  }

  const resolved = dereference(root, schema);
  if (!resolved || typeof resolved !== "object") {
    return "value";
  }

  if (resolved.example !== undefined) {
    return resolved.example;
  }

  if (resolved.default !== undefined) {
    return resolved.default;
  }

  if (Array.isArray(resolved.enum) && resolved.enum.length > 0) {
    return resolved.enum[0];
  }

  if (resolved.const !== undefined) {
    return resolved.const;
  }

  switch (resolved.type) {
    case "string":
      return exampleStringForName(name, resolved);
    case "integer":
    case "number":
      if (name.toLowerCase().includes("hours")) {
        return 16;
      }
      if (name.toLowerCase().includes("mood")) {
        return 4;
      }
      return 1;
    case "boolean":
      return true;
    case "array": {
      const itemExample = buildExampleValue(
        root,
        resolved.items,
        name.replace(/s$/, "") || "item",
        depth + 1,
      );
      return [itemExample];
    }
    case "object":
    default: {
      const properties = resolved.properties ?? {};
      const required = Array.isArray(resolved.required) ? resolved.required : [];
      const keys = pickObjectKeys(properties, required);

      const result = {};
      for (const key of keys) {
        result[key] = buildExampleValue(root, properties[key], key, depth + 1);
      }
      return result;
    }
  }
}

function buildExampleInput(root, pathItem, operation) {
  const input = {};

  const mergedParameters = new Map();
  for (const parameter of [...(pathItem?.parameters ?? []), ...(operation?.parameters ?? [])]) {
    const resolvedParameter = dereference(root, parameter);
    if (!resolvedParameter?.name || !resolvedParameter?.in) {
      continue;
    }
    mergedParameters.set(
      `${resolvedParameter.in}:${resolvedParameter.name}`,
      resolvedParameter,
    );
  }

  const pathParameters = {};
  const queryParameters = {};

  for (const parameter of mergedParameters.values()) {
    const example = buildExampleValue(
      root,
      parameter.schema,
      parameter.name,
      1,
    );

    if (parameter.in === "path") {
      pathParameters[parameter.name] = example;
    }

    if (parameter.in === "query") {
      queryParameters[parameter.name] = example;
    }
  }

  if (Object.keys(pathParameters).length > 0) {
    input.path = pathParameters;
  }

  if (Object.keys(queryParameters).length > 0) {
    input.query = queryParameters;
  }

  const bodySchema =
    operation?.requestBody?.content?.["application/json"]?.schema ?? undefined;
  if (bodySchema) {
    input.body = buildExampleValue(root, bodySchema, "body", 1);
  }

  return Object.keys(input).length > 0 ? input : undefined;
}

function buildMetadata(root, methods) {
  const metadata = {};

  for (const method of methods) {
    if (!method.path || !method.httpMethod) {
      continue;
    }

    const pathItem = root.paths?.[method.path];
    const operation = pathItem?.[method.httpMethod];
    if (!operation) {
      continue;
    }

    metadata[method.fullName] = {
      operationId: operation.operationId,
      summary: operation.summary ?? method.summary,
      description: operation.description ?? method.description,
      httpMethod: method.httpMethod.toUpperCase(),
      path: method.path,
      exampleInput: buildExampleInput(root, pathItem, operation),
    };
  }

  return metadata;
}

const sdkSource = await readFile(SDK_SOURCE_PATH, "utf8");
const openapi = JSON.parse(await readFile(OPENAPI_PATH, "utf8"));
const methods = parseGeneratedMethods(sdkSource);
const metadata = buildMetadata(openapi, methods);

if (methods.length === 0) {
  throw new Error("No SDK methods were parsed from src/client/sdk.gen.ts");
}

if (Object.keys(metadata).length === 0) {
  throw new Error("No method metadata entries were generated from the OpenAPI spec");
}

const output = `// This file is auto-generated by generate-method-metadata.mjs\n\nexport const methodMetadata = ${JSON.stringify(
  metadata,
  null,
  2,
)};\n`;

await writeFile(OUTPUT_PATH, output);

console.log(`Generated metadata for ${Object.keys(metadata).length} SDK methods`);
