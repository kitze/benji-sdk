import { Command } from "commander";
import {
  callSdkMethod,
  listSdkMethods,
  type SdkMethodDescriptor,
} from "benji-sdk";
import { ensureAuth } from "../auth.js";
import { handleCommandError } from "../error-handler.js";
import { getGlobalOptions, outputResult } from "../output.js";
import { parseJsonObject, readStdin, requireForce } from "./shared.js";

type GeneratedCommandOptions = {
  input?: string;
  body?: string;
  path?: string;
  query?: string;
  headers?: string;
  stdin?: boolean;
  force?: boolean;
};

function mergeGeneratedInput(
  base: Record<string, unknown>,
  key: "body" | "path" | "query" | "headers",
  rawValue?: string,
): Record<string, unknown> {
  if (!rawValue) {
    return base;
  }

  return {
    ...base,
    [key]: parseJsonObject(rawValue, key),
  };
}

function isDestructiveMethod(descriptor: SdkMethodDescriptor): boolean {
  return descriptor.action.includes("delete");
}

function getDescription(descriptor: SdkMethodDescriptor): string {
  return (
    descriptor.summary ??
    descriptor.description ??
    `Auto-generated wrapper for ${descriptor.fullName}`
  );
}

function formatOpenApiLine(descriptor: SdkMethodDescriptor): string | undefined {
  if (!descriptor.httpMethod || !descriptor.path) {
    return undefined;
  }

  return `OpenAPI: ${descriptor.httpMethod} ${descriptor.path}`;
}

function formatExampleInput(descriptor: SdkMethodDescriptor): string | undefined {
  if (!descriptor.exampleInput) {
    return undefined;
  }

  return JSON.stringify(descriptor.exampleInput);
}

function buildExamples(descriptor: SdkMethodDescriptor): string {
  const base = `benji ${descriptor.resource} ${descriptor.action}`;
  const force = isDestructiveMethod(descriptor) ? " --force" : "";
  const exampleInput = formatExampleInput(descriptor);
  const lines = [];

  const openApiLine = formatOpenApiLine(descriptor);
  if (openApiLine) {
    lines.push(openApiLine);
  }

  lines.push("Examples:");
  lines.push(`  $ ${base}${force}`);
  lines.push(`  $ ${base}${force} --json`);

  if (exampleInput) {
    lines.push(`  $ ${base}${force} --input '${exampleInput}'`);
    lines.push(`  $ echo '${exampleInput}' | ${base}${force} --stdin`);
  }

  return `\n${lines.join("\n")}`;
}

function getOrCreateResourceCommand(
  program: Command,
  descriptor: SdkMethodDescriptor,
): Command {
  const existing = program.commands.find(
    (command) => command.name() === descriptor.resource,
  );

  if (existing) {
    return existing;
  }

  return program
    .command(descriptor.resource)
    .description(`Auto-generated commands for ${descriptor.namespace}`);
}

function hasSubcommand(command: Command, subcommandName: string): boolean {
  return command.commands.some((subcommand) => subcommand.name() === subcommandName);
}

export function registerGeneratedCommands(program: Command): void {
  for (const descriptor of listSdkMethods()) {
    const resourceCommand = getOrCreateResourceCommand(program, descriptor);
    if (hasSubcommand(resourceCommand, descriptor.action)) {
      continue;
    }

    const generatedCommand = resourceCommand
      .command(descriptor.action)
      .description(getDescription(descriptor))
      .option(
        "--input <json>",
        descriptor.exampleInput
          ? `Full SDK options JSON object. Example: '${JSON.stringify(
              descriptor.exampleInput,
            )}'`
          : "Full SDK options JSON object",
      )
      .option("--body <json>", "JSON object passed as options.body")
      .option("--path <json>", "JSON object passed as options.path")
      .option("--query <json>", "JSON object passed as options.query")
      .option("--headers <json>", "JSON object passed as options.headers")
      .option("--stdin", "Read the full SDK options JSON object from stdin")
      .addHelpText("after", buildExamples(descriptor));

    if (isDestructiveMethod(descriptor)) {
      generatedCommand.option("--force", "Confirm destructive action");
    }

    generatedCommand.action(
      async (options: GeneratedCommandOptions, command: Command) => {
        if (isDestructiveMethod(descriptor)) {
          requireForce(command, descriptor.resource, descriptor.action);
        }

        ensureAuth();
        const outputOptions = getGlobalOptions(command);

        try {
          let input: Record<string, unknown> = {};

          if (options.stdin) {
            input = {
              ...input,
              ...(await readStdin()),
            };
          }

          if (options.input) {
            input = {
              ...input,
              ...parseJsonObject(options.input, "input"),
            };
          }

          input = mergeGeneratedInput(input, "body", options.body);
          input = mergeGeneratedInput(input, "path", options.path);
          input = mergeGeneratedInput(input, "query", options.query);
          input = mergeGeneratedInput(input, "headers", options.headers);

          const result = await callSdkMethod(descriptor.fullName, input);
          outputResult(result, outputOptions);
        } catch (error) {
          handleCommandError(error);
        }
      },
    );
  }
}
