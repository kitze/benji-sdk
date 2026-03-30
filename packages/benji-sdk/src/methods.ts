import * as generatedClient from "./client/index.js";
import { BenjiApiError } from "./errors.js";
import { methodMetadata } from "./method-metadata.gen.js";
import { wrapSdkCall } from "./wrapper.js";

export interface SdkMethodOptions {
  body?: unknown;
  path?: Record<string, unknown>;
  query?: Record<string, unknown>;
  headers?: Record<string, string>;
  [key: string]: unknown;
}

export interface SdkMethodDescriptor {
  namespace: string;
  method: string;
  fullName: string;
  resource: string;
  action: string;
  toolName: string;
  operationId?: string;
  summary?: string;
  description?: string;
  httpMethod?: string;
  path?: string;
  exampleInput?: Record<string, unknown>;
}

type SdkMethodFn = (
  options?: SdkMethodOptions,
) => Promise<{ data?: unknown; error?: unknown; response: Response }>;

type GeneratedMethodMetadata = Partial<
  Pick<
    SdkMethodDescriptor,
    "operationId" | "summary" | "description" | "httpMethod" | "path" | "exampleInput"
  >
>;

const RESERVED_STATIC_PROPERTIES = new Set(["length", "name", "prototype"]);
const generatedMethodMetadata =
  methodMetadata as Record<string, GeneratedMethodMetadata>;

let cachedDescriptors: SdkMethodDescriptor[] | undefined;
let cachedRegistry: Map<string, SdkMethodFn> | undefined;

function toKebabCase(value: string): string {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .replace(/[_\s]+/g, "-")
    .toLowerCase();
}

function toSnakeCase(value: string): string {
  return toKebabCase(value).replace(/-/g, "_");
}

function getCommonPrefix(values: string[]): string {
  if (values.length === 0) {
    return "";
  }

  let prefix = values[0] ?? "";
  for (const value of values.slice(1)) {
    let index = 0;
    while (
      index < prefix.length &&
      index < value.length &&
      prefix[index] === value[index]
    ) {
      index += 1;
    }
    prefix = prefix.slice(0, index);
    if (!prefix) {
      break;
    }
  }

  return prefix;
}

function buildRegistry(): {
  descriptors: SdkMethodDescriptor[];
  registry: Map<string, SdkMethodFn>;
} {
  const rawDescriptors: Array<{
    namespace: string;
    method: string;
    fullName: string;
  }> = [];
  const registry = new Map<string, SdkMethodFn>();

  for (const [namespace, exportedValue] of Object.entries(generatedClient)) {
    if (typeof exportedValue !== "function") {
      continue;
    }

    const exportedRecord = exportedValue as unknown as Record<string, unknown>;
    const staticMethods = Object.getOwnPropertyNames(exportedValue)
      .filter((method) => !RESERVED_STATIC_PROPERTIES.has(method))
      .filter((method) => typeof exportedRecord[method] === "function")
      .sort();

    if (staticMethods.length === 0) {
      continue;
    }

    for (const method of staticMethods) {
      const fullName = `${namespace}.${method}`;
      const methodFn = exportedRecord[method] as SdkMethodFn;
      registry.set(
        fullName,
        methodFn.bind(exportedValue),
      );
      rawDescriptors.push({ namespace, method, fullName });
    }
  }

  const methodsByNamespace = new Map<string, string[]>();
  for (const descriptor of rawDescriptors) {
    const methods = methodsByNamespace.get(descriptor.namespace) ?? [];
    methods.push(descriptor.method);
    methodsByNamespace.set(descriptor.namespace, methods);
  }

  const descriptors: SdkMethodDescriptor[] = rawDescriptors.map((descriptor) => {
    const methods = methodsByNamespace.get(descriptor.namespace) ?? [];
    const commonPrefix = getCommonPrefix(methods);
    const resource = toKebabCase(descriptor.namespace);
    const rawAction =
      descriptor.method.slice(commonPrefix.length) || descriptor.method;
    const action = toKebabCase(rawAction);

    return {
      ...descriptor,
      resource,
      action,
      toolName: `${toSnakeCase(resource)}_${toSnakeCase(action)}`,
      ...(generatedMethodMetadata[descriptor.fullName] ?? {}),
    };
  });

  descriptors.sort((left, right) => left.fullName.localeCompare(right.fullName));

  return { descriptors, registry };
}

function ensureRegistry(): void {
  if (cachedDescriptors && cachedRegistry) {
    return;
  }

  const { descriptors, registry } = buildRegistry();
  cachedDescriptors = descriptors;
  cachedRegistry = registry;
}

function getDescriptors(): SdkMethodDescriptor[] {
  ensureRegistry();
  return cachedDescriptors ?? [];
}

function getRegistry(): Map<string, SdkMethodFn> {
  ensureRegistry();
  return cachedRegistry ?? new Map<string, SdkMethodFn>();
}

function resolveMethodName(methodName: string): string {
  const registry = getRegistry();
  if (registry.has(methodName)) {
    return methodName;
  }

  const normalized = methodName.toLowerCase();
  const descriptor = getDescriptors().find(
    (entry) => entry.fullName.toLowerCase() === normalized,
  );

  if (descriptor) {
    return descriptor.fullName;
  }

  throw new Error(
    `Unknown SDK method "${methodName}". Use listSdkMethods() to inspect the available generated methods.`,
  );
}

export function listSdkMethods(filters: {
  namespace?: string;
  search?: string;
} = {}): SdkMethodDescriptor[] {
  const namespace = filters.namespace?.trim().toLowerCase();
  const search = filters.search?.trim().toLowerCase();

  return getDescriptors().filter((entry) => {
    if (namespace && entry.namespace.toLowerCase() !== namespace) {
      return false;
    }

    if (
      search &&
      !entry.fullName.toLowerCase().includes(search) &&
      !entry.method.toLowerCase().includes(search) &&
      !entry.summary?.toLowerCase().includes(search) &&
      !entry.description?.toLowerCase().includes(search)
    ) {
      return false;
    }

    return true;
  });
}

export async function callSdkMethod<T = unknown>(
  methodName: string,
  options: SdkMethodOptions = {},
): Promise<T> {
  const resolvedMethodName = resolveMethodName(methodName);
  const method = getRegistry().get(resolvedMethodName);

  if (!method) {
    throw new Error(`SDK method "${resolvedMethodName}" is unavailable.`);
  }

  try {
    const promise = method(options) as Promise<{
      data?: T;
      error?: unknown;
      response: Response;
    }>;
    return await wrapSdkCall<T>(promise);
  } catch (error) {
    if (error instanceof BenjiApiError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new Error(`Failed to call "${resolvedMethodName}": ${error.message}`);
    }
    throw error;
  }
}
