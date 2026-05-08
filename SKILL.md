---
name: benji
description: Use Benji to manage todos, habits, planner data, mood, journal, food, hydration, workouts, contacts, trips, goals, and other personal operating-system data through the official SDK and CLI.
---

# Benji

Use the CLI for quick operations:

```bash
benji --help
benji todos list --screen today --json
benji habits list --json
benji api methods --search trip
benji api call Trips.tripsList --json
```

Use the SDK for scripts:

```ts
import { configure, Todos } from "benji-sdk";

configure({ apiKey: process.env.BENJI_API_KEY! });

const todos = await Todos.todosList({
  body: { screen: "today" },
});
```

Authentication:

- Prefer `BENJI_API_KEY`.
- Optional override: `BENJI_BASE_URL`, default `https://alpha.benji.so/api/rest`.

## Safety

Use read/list/get commands first when you are not sure what data exists. Require explicit confirmation before destructive operations such as deleting todos, projects, journal entries, or bulk records.

## MCP Boundary

This public SDK repo should be SDK + CLI + skill. MCP belongs in the Benji app codebase and should be hosted by the app at `/mcp`, layered over the app API, not shipped as part of the public SDK package.
