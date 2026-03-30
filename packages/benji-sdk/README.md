# benji-sdk

Official TypeScript SDK for the [Benji](https://benji.so) API.

The package is generated from the Benji OpenAPI spec and is designed to move with the API, so this README stays intentionally lightweight. Use TypeScript autocomplete or `listSdkMethods()` to explore the current surface area instead of relying on a hand-maintained endpoint list.

## Install

```bash
pnpm add benji-sdk
```

## Configure

```ts
import { configure } from "benji-sdk";

configure({
  apiKey: "your-api-key",
});
```

`baseUrl` is optional. Only pass it when targeting a custom Benji environment.

## Typed Usage

```ts
import { configure, Todos } from "benji-sdk";

configure({ apiKey: "your-api-key" });

const todos = await Todos.todosList({
  body: { screen: "today" },
});
```

## Dynamic Usage

This is useful when the API changes quickly and you want a stable way to reach newly generated methods.

```ts
import { callSdkMethod, listSdkMethods } from "benji-sdk";

const methods = listSdkMethods({ search: "trip" });
const trips = await callSdkMethod("Trips.tripsList");
```

`callSdkMethod()` accepts the same options object shape as the generated client, for example:

```ts
await callSdkMethod("Todos.todosList", {
  body: { screen: "today" },
});
```

## Environment Helper

```ts
import { initializeFromEnv } from "benji-sdk";

initializeFromEnv();
```

This reads:

- `BENJI_API_KEY`
- `BENJI_BASE_URL`

## Errors

`wrapSdkCall()` converts generated client responses into thrown `BenjiApiError` instances for non-success cases:

```ts
import { Todos, wrapSdkCall } from "benji-sdk";

const todo = await wrapSdkCall(
  Todos.todosGet({
    body: { id: "todo_123" },
  }),
);
```

## License

MIT
