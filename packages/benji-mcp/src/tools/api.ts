import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { callSdkMethod, listSdkMethods } from "benji-sdk";
import { handleToolError, toolResult } from "./util.js";

export function registerApiTools(server: McpServer): void {
  server.registerTool(
    "list_api_methods",
    {
      description:
        "List generated Benji SDK methods. Use this to discover newly added API endpoints without waiting for dedicated CLI or MCP wrappers.",
      inputSchema: {
        namespace: z
          .string()
          .optional()
          .describe('Optional SDK namespace filter, e.g. "Todos"'),
        search: z
          .string()
          .optional()
          .describe("Case-insensitive substring filter for method names"),
      },
    },
    async ({ namespace, search }) => {
      try {
        return toolResult({
          methods: listSdkMethods({ namespace, search }),
        });
      } catch (error) {
        return handleToolError(error);
      }
    },
  );

  server.registerTool(
    "call_api_method",
    {
      description:
        "Call any generated Benji SDK method by its Namespace.method name. This is the catch-all tool for newly added API endpoints.",
      inputSchema: {
        method: z
          .string()
          .min(1)
          .describe('Generated SDK method name, e.g. "Todos.todosList"'),
        input: z
          .record(z.unknown())
          .optional()
          .describe(
            'SDK options object passed directly to the generated client, e.g. {"body":{"screen":"today"}}',
          ),
      },
    },
    async ({ method, input }) => {
      try {
        const result = await callSdkMethod(method, input ?? {});
        return toolResult(result);
      } catch (error) {
        return handleToolError(error);
      }
    },
  );
}
