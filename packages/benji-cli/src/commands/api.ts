import { Command } from "commander";
import { callSdkMethod, listSdkMethods } from "benji-sdk";
import { ensureAuth } from "../auth.js";
import { handleCommandError } from "../error-handler.js";
import { getGlobalOptions, outputResult } from "../output.js";
import { parseJsonObject, readStdin } from "./shared.js";

export function registerApiCommand(program: Command): void {
  const cmd = program.command("api").description(
    "Inspect and call generated SDK methods",
  );

  cmd
    .command("methods")
    .description("List generated SDK methods")
    .option("--namespace <name>", "Filter by SDK namespace, e.g. Todos")
    .option("--search <query>", "Filter by method name substring")
    .addHelpText(
      "after",
      `\nExamples:\n  $ benji api methods\n  $ benji api methods --namespace Trips\n  $ benji api methods --search assign --compact`,
    )
    .action((options, command) => {
      const opts = getGlobalOptions(command);
      try {
        const methods = listSdkMethods({
          namespace: options.namespace,
          search: options.search,
        });
        outputResult(methods, opts);
      } catch (error) {
        handleCommandError(error);
      }
    });

  cmd
    .command("call")
    .description("Call any generated SDK method")
    .argument(
      "<method>",
      'SDK method name in "Namespace.method" form, e.g. Todos.todosList',
    )
    .option(
      "--input <json>",
      'Inline JSON SDK options, e.g. \'{"body":{"screen":"today"}}\'',
    )
    .option("--stdin", "Read the SDK options JSON object from stdin")
    .addHelpText(
      "after",
      `\nExamples:\n  $ benji api call Todos.todosList --input '{"body":{"screen":"today"}}'\n  $ echo '{"body":{"id":"todo_123"}}' | benji api call Todos.todosGet --stdin\n  $ benji api call Trips.tripsList --json`,
    )
    .action(async (method, options, command) => {
      ensureAuth();
      const opts = getGlobalOptions(command);

      try {
        if (options.stdin && options.input) {
          throw new Error("Use either --stdin or --input, not both.");
        }

        let input: Record<string, unknown> = {};
        if (options.stdin) {
          input = await readStdin();
        } else if (options.input) {
          input = parseJsonObject(options.input, "input");
        }

        const result = await callSdkMethod(method, input);
        outputResult(result, opts);
      } catch (error) {
        handleCommandError(error);
      }
    });
}
