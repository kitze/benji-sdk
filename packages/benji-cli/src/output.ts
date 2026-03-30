import { Command } from "commander";
import {
  formatTable,
  pickTableColumns,
  formatKeyValue,
  formatSuccessMessage,
  formatHumanUnknown,
} from "./formatters.js";

let currentJsonMode = false;

/**
 * Extract global options from process.argv so they work regardless of
 * position (before or after the subcommand).  Commander only parses
 * options defined on the command that owns them, so root-level options
 * like --json and --compact are invisible to leaf commands.
 */
export function getGlobalOptions(cmd: Command): {
  json: boolean;
  compact: boolean;
} {
  let current: Command | null = cmd;
  let json = false;
  let compact = false;

  while (current) {
    const opts = current.opts();
    json = json || opts.json === true;
    compact = compact || opts.compact === true;
    current = current.parent ?? null;
  }

  const result = { json, compact };
  currentJsonMode = result.json;
  return result;
}

export function isJsonMode(): boolean {
  return currentJsonMode || process.argv.includes("--json");
}

function extractId(obj: Record<string, unknown>): string | undefined {
  if ("id" in obj) return String(obj.id);
  return undefined;
}

function extractCompactValue(data: unknown): string | undefined {
  if (data === null || data === undefined) {
    return undefined;
  }

  if (typeof data !== "object") {
    return String(data);
  }

  const obj = data as Record<string, unknown>;
  for (const key of ["id", "fullName", "name", "title"]) {
    const value = obj[key];
    if (value !== null && value !== undefined && value !== "") {
      return String(value);
    }
  }

  return JSON.stringify(obj);
}

/** Print result to stdout with mode-appropriate formatting. */
export function outputResult(
  data: unknown,
  opts: { json: boolean; compact: boolean },
): void {
  if (opts.json) {
    console.log(JSON.stringify(data, null, 2));
    return;
  }

  if (opts.compact) {
    if (Array.isArray(data)) {
      const values = data
        .map(extractCompactValue)
        .filter((value): value is string => Boolean(value));
      console.log(values.join("\n"));
    } else if (typeof data === "object" && data !== null) {
      const id = extractId(data as Record<string, unknown>);
      console.log(id ?? extractCompactValue(data) ?? "");
    } else {
      console.log(String(data ?? ""));
    }
    return;
  }

  if (Array.isArray(data)) {
    if (data.length === 0) {
      console.log("(no results)");
      return;
    }
    if (typeof data[0] === "object" && data[0] !== null) {
      const cols = pickTableColumns(data[0] as Record<string, unknown>);
      console.log(
        formatTable(data as Record<string, unknown>[], cols),
      );
      return;
    }
    console.log(formatHumanUnknown(data));
    return;
  }

  if (typeof data === "object" && data !== null) {
    const obj = data as Record<string, unknown>;
    const success = formatSuccessMessage(obj);
    if (success) {
      console.log(success);
    } else {
      console.log(formatKeyValue(obj));
    }
    return;
  }

  console.log(formatHumanUnknown(data));
}
