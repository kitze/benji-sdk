# Benji SDK Monorepo

TypeScript SDK, CLI, and Codex/Claude skill for the [Benji](https://benji.so) API.

## Packages

- `packages/benji-sdk`: publishable ESM SDK generated from the Benji OpenAPI spec
- `packages/benji-cli`: terminal client with curated commands plus a generic API caller
- `SKILL.md`: public agent skill instructions for using the SDK, CLI, REST API, and hosted Benji MCP

This repo intentionally does not ship an MCP server package. Benji MCP belongs in the Benji app codebase and is hosted by the app at:

```text
https://alpha.benji.so/api/mcp
```

## Requirements

- Node.js `>=20.19.0`
- `pnpm >= 9`

## Quick Start

```bash
git clone https://github.com/kitze/benji-sdk.git
cd benji-sdk
pnpm install
pnpm build
```

The workspace build regenerates the SDK, fixes ESM imports, and compiles the CLI.

## Environment

The SDK and CLI use the same environment variables:

- `BENJI_API_KEY`: required for authenticated requests
- `BENJI_BASE_URL`: optional override for self-hosted, staging, or custom environments

## SDK

Typed usage:

```ts
import { configure, Todos } from "benji-sdk";

configure({ apiKey: process.env.BENJI_API_KEY! });

const todos = await Todos.todosList({
  body: { screen: "today" },
});
```

Dynamic usage for fast-moving API surface:

```ts
import { callSdkMethod, listSdkMethods } from "benji-sdk";

const methods = listSdkMethods({ search: "trip" });
const trips = await callSdkMethod("Trips.tripsList");
```

See [`packages/benji-sdk/README.md`](packages/benji-sdk/README.md) for package-level usage details.

## CLI

Build and inspect the CLI:

```bash
pnpm --filter benji-cli build
node packages/benji-cli/dist/index.js --help
```

Make sure `BENJI_API_KEY` is set before running authenticated commands.

The CLI exposes generated SDK methods as first-class commands using:

```bash
benji <resource> <action>
```

Examples:

```bash
BENJI_API_KEY=your-key node packages/benji-cli/dist/index.js todos list --screen today --json
BENJI_API_KEY=your-key node packages/benji-cli/dist/index.js trips list --json
BENJI_API_KEY=your-key node packages/benji-cli/dist/index.js hydration goals-list --json
BENJI_API_KEY=your-key node packages/benji-cli/dist/index.js todos delete-many --force --input '{"body":{"ids":["todo_123"]}}'
```

Existing hand-written commands stay in place for polished/common flows, and generated commands fill remaining API gaps automatically after `pnpm build`.

The generic API command is still available as a low-level escape hatch:

```bash
node packages/benji-cli/dist/index.js api methods --search trip
BENJI_API_KEY=your-key node packages/benji-cli/dist/index.js api call Trips.tripsList --json
BENJI_API_KEY=your-key node packages/benji-cli/dist/index.js api call Todos.todosList --input '{"body":{"screen":"today"}}'
```

`--json` and `--compact` are supported on every command, regardless of where the flags appear.

## Hosted MCP

Use Benji's hosted MCP endpoint instead of a package from this repo:

```text
https://alpha.benji.so/api/mcp
```

The public SDK repo should stay SDK + CLI + skill only. If MCP tools need to change, make those changes in the Benji app codebase where `/api/mcp` is implemented.

## Development Notes

- Regenerate only the SDK: `pnpm generate`
- Rebuild everything: `pnpm build`
- Troubleshooting: [`TROUBLESHOOTING.md`](TROUBLESHOOTING.md)

## License

The SDK is licensed under MIT. See [`packages/benji-sdk/LICENSE`](packages/benji-sdk/LICENSE).
