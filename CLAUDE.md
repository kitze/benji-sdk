# CLAUDE.md

## Project Overview

pnpm monorepo with two packages plus a public skill:

- **benji-sdk** -- Auto-generated TypeScript SDK for the Benji API. Generated from an OpenAPI spec via `@hey-api/openapi-ts`.
- **benji-cli** -- Commander.js CLI mirroring Benji API domains with `benji <resource> <action> [options]`.
- **SKILL.md** -- Agent-facing usage instructions for SDK, CLI, REST, and the hosted Benji MCP endpoint.

This repo intentionally does not ship an MCP server package. Benji MCP belongs in the Benji app codebase and is hosted by the app at `/api/mcp`.

## Commands

```bash
pnpm install                         # Install dependencies
pnpm build                           # Build all packages (SDK generate + compile, then CLI)
pnpm --filter benji-sdk build        # Rebuild SDK only (generate + metadata + fix-imports + tsc)
pnpm --filter benji-cli build        # Rebuild CLI only (tsc)
pnpm --filter benji-cli dev          # Run CLI in dev mode (tsx, no build needed)
pnpm generate                        # Regenerate SDK from openapi.json (runs in benji-sdk)
```

## Code Generation

The SDK at `packages/benji-sdk/` uses `@hey-api/openapi-ts` to auto-generate TypeScript client code from `packages/benji-sdk/openapi.json`.

Never hand-edit any file under `packages/benji-sdk/src/client/`. The entire directory tree is auto-generated, including `*.gen.ts` files and barrel re-exports.

After generation:

- `generate-method-metadata.mjs` creates method metadata used by the SDK/CLI dynamic method helpers.
- `fix-imports.mjs` adds `.js` extensions to relative imports for ESM compatibility.

To regenerate, update `openapi.json`, then run:

```bash
pnpm --filter benji-sdk build
```

Hand-maintained SDK files:

- `packages/benji-sdk/src/index.ts` -- public API entry, `configure()`, re-exports
- `packages/benji-sdk/src/env.ts` -- `initializeFromEnv()` reads `BENJI_API_KEY` and `BENJI_BASE_URL`
- `packages/benji-sdk/src/errors.ts` -- `BenjiError`, `BenjiConfigError`, `BenjiApiError`
- `packages/benji-sdk/src/wrapper.ts` -- `wrapSdkCall()` normalizes `{ data, error, response }`
- `packages/benji-sdk/src/methods.ts` -- dynamic SDK method discovery and invocation
- `packages/benji-sdk/fix-imports.mjs` -- post-generation ESM import fixer
- `packages/benji-sdk/generate-method-metadata.mjs` -- method metadata generator
- `packages/benji-sdk/openapi-ts.config.ts` -- `@hey-api/openapi-ts` config

## Architecture Constraints

- **pnpm workspace monorepo:** `packages/*` defined in `pnpm-workspace.yaml`.
- **Dependency direction:** `benji-cli` depends on `benji-sdk` via `workspace:*`. Import public SDK exports only. Never reach into `src/client/` internals.
- **MCP boundary:** do not add an MCP package here. The hosted MCP is implemented in the Benji app at `/api/mcp`.
- **Auth:** `BENJI_API_KEY` is read by `initializeFromEnv()` from `benji-sdk`, which calls `configure()`.
- **Optional `BENJI_BASE_URL`:** overrides the default API base `https://alpha.benji.so/api/rest`.
- **All API calls through wrappers:** use `wrapSdkCall()` for generated client calls when command code needs normalized data/errors.
- **Error hierarchy:** `BenjiError` -> `BenjiConfigError`, `BenjiApiError`.
- **CLI:** Commander.js with two-level commands: `benji <resource> <action> [options]`. Global `--json` and `--compact` flags on all leaf commands.

## TypeScript And Module Conventions

- ESM-only: all package `package.json` files have `"type": "module"`.
- Local imports require `.js` extension: `import { foo } from "./bar.js"`.
- TypeScript strict mode is enabled in all packages.
- Compiler target: ES2020.
- Module: ESNext.
- Module resolution: bundler.
- Each package has its own `tsconfig.json`.
- Node.js `>=20.19.0`, pnpm `>=9`.

## Key File Locations

Root:

- `package.json` -- workspace scripts
- `pnpm-workspace.yaml` -- workspace config
- `README.md` -- human-facing docs
- `SKILL.md` -- public agent skill
- `CLAUDE.md` -- this file

benji-sdk:

- `openapi.json` -- API spec input to codegen
- `openapi-ts.config.ts` -- codegen config
- `fix-imports.mjs` -- post-generation ESM import fixer
- `generate-method-metadata.mjs` -- metadata generation for dynamic helpers
- `src/index.ts` -- public entry
- `src/env.ts` -- env var initialization
- `src/errors.ts` -- error classes
- `src/wrapper.ts` -- response normalization
- `src/methods.ts` -- method listing/calling helpers
- `src/client/` -- generated, do not edit

benji-cli:

- `src/index.ts` -- entry point, Commander program setup
- `src/commands/index.ts` -- `registerCommands()`, generated command registration, global option propagation
- `src/commands/<domain>.ts` -- curated domain command files
- `src/commands/generated.ts` -- generated command surface for all SDK methods
- `src/commands/shared.ts` -- CLI parsing helpers
- `src/output.ts` -- output formatting mode helpers
- `src/formatters.ts` -- table, key-value, and success formatters
- `src/error-handler.ts` -- error output with JSON/human modes
- `src/auth.ts` -- `ensureAuth()` wraps `initializeFromEnv()`

## Adding A New CLI Command Domain

1. Create `packages/benji-cli/src/commands/<domain>.ts`.

2. Add imports:

```ts
import { Command } from "commander";
import { wrapSdkCall, <SdkClass> } from "benji-sdk";
import { ensureAuth } from "../auth.js";
import { getGlobalOptions, outputResult } from "../output.js";
import { handleCommandError } from "../error-handler.js";
import {
  readStdin,
  requireForce,
  parseNumber,
  parseDate,
  toTzDate,
  toYmdDate,
  parseCommaSeparated,
} from "./shared.js";
```

3. Export a registration function:

```ts
export function register<Domain>Command(program: Command): void {
  const cmd = program.command("<domain>").description("Manage <domain>");
}
```

4. Add subcommands:

```ts
cmd
  .command("<action>")
  .description("...")
  .option("--flag <value>", "...")
  .action(async (options, command) => {
    ensureAuth();
    const opts = getGlobalOptions(command);
    try {
      const result = await wrapSdkCall(
        SdkClass.sdkMethod({ body: { ... } }),
      );
      outputResult(result, opts);
    } catch (error) {
      handleCommandError(error);
    }
  });
```

5. When using `.argument("<id>", "...")`, the action receives the argument first:

```ts
.action(async (id, options, command) => { ... })
```

6. For delete commands, add `--force` and call `requireForce(command, "<domain>", "delete")` before `ensureAuth()`.

7. For boolean fields, use `--flag` / `--no-flag` pairs and check `command.getOptionValueSource("flag") === "cli"` before including values in the request body.

8. Support `--stdin` for JSON input via `readStdin()` when a command has many fields.

9. Register in `packages/benji-cli/src/commands/index.ts`. The `addGlobalOptionsToLeaves` call at the end of `registerCommands` automatically adds `--json` and `--compact` to all leaf commands.

## Testing

No test framework or test scripts are configured. Build verification is the main check:

```bash
pnpm build
```

The expected result is zero TypeScript compilation errors.
