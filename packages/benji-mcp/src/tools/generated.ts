import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import {
  callSdkMethod,
  listSdkMethods,
  type SdkMethodDescriptor,
} from "benji-sdk";
import { handleToolError, toolResult } from "./util.js";

function getRegisteredToolNames(server: McpServer): Set<string> {
  const registeredTools =
    (
      server as unknown as {
        _registeredTools?: Record<string, unknown>;
      }
    )._registeredTools ?? {};

  return new Set(Object.keys(registeredTools));
}

function buildToolDescription(descriptor: SdkMethodDescriptor): string {
  const parts = [];

  if (descriptor.summary) {
    parts.push(
      descriptor.summary.endsWith(".")
        ? descriptor.summary
        : `${descriptor.summary}.`,
    );
  } else {
    parts.push(`Auto-generated wrapper for ${descriptor.fullName}.`);
  }

  if (descriptor.description && descriptor.description !== descriptor.summary) {
    parts.push(
      descriptor.description.endsWith(".")
        ? descriptor.description
        : `${descriptor.description}.`,
    );
  }

  if (descriptor.httpMethod && descriptor.path) {
    parts.push(`Calls ${descriptor.httpMethod} ${descriptor.path}.`);
  }

  if (descriptor.exampleInput) {
    parts.push(`Example input: ${JSON.stringify(descriptor.exampleInput)}.`);
  }

  return parts.join(" ");
}

export function registerGeneratedTools(server: McpServer): void {
  const registeredToolNames = getRegisteredToolNames(server);

  for (const descriptor of listSdkMethods()) {
    if (registeredToolNames.has(descriptor.toolName)) {
      continue;
    }

    server.registerTool(
      descriptor.toolName,
      {
        description: buildToolDescription(descriptor),
        inputSchema: {
          input: z
            .record(z.unknown())
            .optional()
            .describe(
              descriptor.exampleInput
                ? `Full SDK options object. Example: ${JSON.stringify(
                    descriptor.exampleInput,
                  )}`
                : "Full SDK options object",
            ),
          body: z
            .record(z.unknown())
            .optional()
            .describe("JSON object passed as options.body"),
          path: z
            .record(z.unknown())
            .optional()
            .describe("JSON object passed as options.path"),
          query: z
            .record(z.unknown())
            .optional()
            .describe("JSON object passed as options.query"),
          headers: z
            .record(z.string())
            .optional()
            .describe("String headers passed as options.headers"),
        },
      },
      async ({ input, body, path, query, headers }) => {
        try {
          const result = await callSdkMethod(descriptor.fullName, {
            ...(input ?? {}),
            ...(body ? { body } : {}),
            ...(path ? { path } : {}),
            ...(query ? { query } : {}),
            ...(headers ? { headers } : {}),
          });
          return toolResult(result);
        } catch (error) {
          return handleToolError(error);
        }
      },
    );

    registeredToolNames.add(descriptor.toolName);
  }
}
