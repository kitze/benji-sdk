# Benji SDK Monorepo

TypeScript SDK, CLI, and MCP server for the [Benji](https://benji.so) API.

## Packages

- `packages/benji-sdk`: publishable ESM SDK generated from the Benji OpenAPI spec
- `packages/benji-cli`: terminal client with curated commands plus a generic API caller
- `packages/benji-mcp`: MCP server with curated tools plus generic API discovery and calling tools

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

The workspace build regenerates the SDK, fixes ESM imports, and compiles the CLI and MCP packages.

## Environment

All packages support the same environment variables:

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

The CLI now exposes every generated SDK method as a first-class command using:

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

Existing hand-written commands still stay in place for the polished/common flows, and the generated commands fill every remaining gap automatically after `pnpm build`.

The generic API command is still available as a low-level escape hatch:

```bash
node packages/benji-cli/dist/index.js api methods --search trip
BENJI_API_KEY=your-key node packages/benji-cli/dist/index.js api call Trips.tripsList --json
BENJI_API_KEY=your-key node packages/benji-cli/dist/index.js api call Todos.todosList --input '{"body":{"screen":"today"}}'
```

`--json` and `--compact` are supported on every command, regardless of where the flags appear.

## MCP

After building, point your MCP client at `packages/benji-mcp/dist/index.js`:

```json
{
  "mcpServers": {
    "benji": {
      "command": "node",
      "args": ["/absolute/path/to/benji-sdk/packages/benji-mcp/dist/index.js"],
      "env": {
        "BENJI_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

The MCP server now auto-registers every generated SDK method as a first-class tool using:

- `<resource>_<action>`

Examples:

- `trips_list`
- `hydration_goals_list`
- `todos_delete_many`

The hand-written curated tools are still registered too, so existing nicer tool names keep working for the common flows.

The generic MCP tools are still available as an escape hatch:

- `list_api_methods`
- `call_api_method`

That means new endpoints are available automatically in three ways after regeneration:

- generated CLI commands
- generated MCP tools
- generic raw method invocation

## Development Notes

- Regenerate only the SDK: `pnpm generate`
- Rebuild everything: `pnpm build`
- Troubleshooting: [`TROUBLESHOOTING.md`](TROUBLESHOOTING.md)

## License

The SDK is licensed under MIT. See [`packages/benji-sdk/LICENSE`](packages/benji-sdk/LICENSE).
