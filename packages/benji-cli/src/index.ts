#!/usr/bin/env node
import { Command, CommanderError } from "commander";
import { createRequire } from "node:module";
import { registerCommands } from "./commands/index.js";
import { handleCommandError } from "./error-handler.js";

const require = createRequire(import.meta.url);
const { version } = require("../package.json") as { version: string };

const program = new Command("benji")
  .version(version)
  .description(
    "CLI for the Benji API — manage todos, habits, health tracking, and more"
  )
  .showHelpAfterError("Run 'benji --help' for available commands")
  .exitOverride();

registerCommands(program);

program.parseAsync(process.argv).catch((error: unknown) => {
  if (
    error instanceof CommanderError &&
    (error.code === "commander.helpDisplayed" ||
      error.code === "commander.version")
  ) {
    return;
  }
  handleCommandError(error);
});
