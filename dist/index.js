// Re-export everything from generated client
export * from "./client/index.js";
// Import client config
import { client } from "./client/client.gen.js";
/**
 * Configure the Benji SDK with your API key
 *
 * @example
 * ```ts
 * import { configure, Todos, Habits } from "benji-sdk";
 *
 * configure({ apiKey: "your-api-key" });
 *
 * // List today's todos
 * const { data } = await Todos.todosList({ body: { screen: "today" } });
 *
 * // Create a habit
 * await Habits.habitsCreate({ body: { name: "Drink water", emoji: "💧" } });
 * ```
 */
export function configure(options) {
    client.setConfig({
        baseUrl: options.baseUrl ?? "https://app.benji.so/api/rest",
        headers: {
            "x-api-key": options.apiKey,
        },
    });
}
export { client };
