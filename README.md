<!-- readme-sync:repo:start -->
# benji\-sdk

Official TypeScript SDK for the Benji API \- Your personal life operating system
<!-- readme-sync:repo:end -->

<!-- readme-sync:header:start -->
<p>
  <a href="https://kitze.io/?ref=kitze%2Fbenji-sdk"><img src="https://unavatar.io/x/thekitze" align="left" hspace="12" width="64" height="64" alt="Kitze"></a>
  <strong>Made by <a href="https://kitze.io/?ref=kitze%2Fbenji-sdk">Kitze</a></strong><br>
  <a href="https://kitze.io/?ref=kitze%2Fbenji-sdk">kitze.io</a> · <a href="https://x.com/thekitze?ref=kitze%2Fbenji-sdk">X</a> · <a href="https://youtube.com/kitze?ref=kitze%2Fbenji-sdk">YouTube</a>
</p>
<br clear="all">


<h3>More projects by Kitze</h3>
<table>
  <tr>
    <td width="50%" valign="top">
      <a href="https://zerotoshipped.com/?ref=kitze%2Fbenji-sdk"><img src="https://zerotoshipped.com/ship.png" width="72" alt="Zero To Shipped logo"></a><br>
      <strong><a href="https://zerotoshipped.com/?ref=kitze%2Fbenji-sdk">Zero To Shipped</a></strong><br>
      A full-stack starter kit for web and mobile apps.
    </td>
    <td width="50%" valign="top">
      <a href="https://sotto.to/?ref=kitze%2Fbenji-sdk"><img src="https://sotto.to/apple-touch-icon.png" width="48" alt="Sotto logo"></a><br>
      <strong><a href="https://sotto.to/?ref=kitze%2Fbenji-sdk">Sotto</a></strong><br>
      Voice-to-text for macOS. Local AI, one-time purchase.
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <a href="https://tinkerer.club/?ref=kitze%2Fbenji-sdk"><img src="https://app.tinkerer.club/brand/tinkerer-logo-128.png" width="48" alt="Tinkerer Club logo"></a><br>
      <strong><a href="https://tinkerer.club/?ref=kitze%2Fbenji-sdk">Tinkerer Club</a></strong><br>
      A private community for builders, self-hosters, and AI tinkerers.
    </td>
    <td width="50%" valign="top">
      <a href="https://sizzy.co/?ref=kitze%2Fbenji-sdk"><img src="https://sizzy.co/apple-touch-icon.png" width="48" alt="Sizzy logo"></a><br>
      <strong><a href="https://sizzy.co/?ref=kitze%2Fbenji-sdk">Sizzy</a></strong><br>
      The browser for web developers.
    </td>
  </tr>
</table>

<h3>Sponsors</h3>
<table>
  <tr>
    <td width="50%" valign="top">
      <a href="https://postiz.com/?ref=kitze%2Fbenji-sdk"><img src="https://media.gifs.so/sponsors/50b4a915f9c47b5328b97281/b08730d86b240100fd72d42b828923856d14d82d50eb5698b99cf8e2ca125288.webp" width="40" alt="Postiz logo"></a><br>
      <strong><a href="https://postiz.com/?ref=kitze%2Fbenji-sdk">Postiz</a></strong><br>
      Schedule social posts with AI agents.
    </td>
    <td width="50%" valign="top">
      <a href="https://www.founderstack.pro/?ref=kitze%2Fbenji-sdk"><img src="https://media.gifs.so/sponsors/bc182e02573bf0e14da0cb0c/f164ca56c7b1d7869e589917f716e58355536eef30854f62c49f711c07a7de96.webp" width="40" alt="FounderStack logo"></a><br>
      <strong><a href="https://www.founderstack.pro/?ref=kitze%2Fbenji-sdk">FounderStack</a></strong><br>
      A SaaS stack for your business, without subscriptions.
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <a href="https://matte.app/?ref=kitze%2Fbenji-sdk"><img src="https://media.gifs.so/sponsors/4193d8ef8f8b0660107703fe/66b20a60c4d9e1da3d999efe862e86f600ebb5a4ffa3a8b63f40a507fef91f66.webp" width="40" alt="Matte logo"></a><br>
      <strong><a href="https://matte.app/?ref=kitze%2Fbenji-sdk">Matte</a></strong><br>
      3D mockups, screen recordings, and video editing.
    </td>
    <td width="50%" valign="top">
      <a href="https://htmlcsstoimage.com/?ref=kitze%2Fbenji-sdk"><img src="https://media.gifs.so/sponsors/f4c20d84da68764c3f7a4f67/167bf23cf98b11e2d55ea9aa69f83052daceb881bdea7b76925ffa185ed66d2b.webp" width="40" alt="HTML/CSS to Image logo"></a><br>
      <strong><a href="https://htmlcsstoimage.com/?ref=kitze%2Fbenji-sdk">HTML/CSS to Image</a></strong><br>
      Turn HTML/CSS into images, PDFs, and screenshots.
    </td>
  </tr>
  <tr>
    <td colspan="2" valign="top">
      <a href="https://namemyventi.com/?ref=kitze%2Fbenji-sdk"><img src="https://media.gifs.so/sponsors/da87180867c3c7451bd30d7b/43ce5be2540cf23d3d7d7104ba829a455a9608861a780e0ec2b35b189695f7ea.webp" width="40" alt="NameMyVenti logo"></a><br>
      <strong><a href="https://namemyventi.com/?ref=kitze%2Fbenji-sdk">NameMyVenti</a></strong><br>
      Get your brand shouted out at Starbucks.
    </td>
  </tr>
</table>

<br>

<hr>

<br>
<!-- readme-sync:header:end -->

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


<!-- readme-sync:footer:start -->
<hr>
<h3>More projects by Kitze</h3>
<h4>Apps &amp; tools</h4>
<table>
  <tr>
    <td width="50%" valign="top">
      <strong><a href="https://gifs.so/?ref=kitze%2Fbenji-sdk">gifs.so</a></strong><br>
      Search, copy, and download reaction GIFs.
    </td>
    <td width="50%" valign="top">
      <strong><a href="https://glink.so/?ref=kitze%2Fbenji-sdk">Glink</a></strong><br>
      Feedback, roadmaps, changelogs, and discussions.
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <strong><a href="https://benji.so/?ref=kitze%2Fbenji-sdk">Benji</a></strong><br>
      Tasks, habits, calendar, health, and routines in one place.
    </td>
    <td width="50%" valign="top">
      <strong><a href="https://dmx.to/?ref=kitze%2Fbenji-sdk">DMX</a></strong><br>
      A focused desktop client for X.
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <strong><a href="https://glink.so/kitze/mindy?ref=kitze%2Fbenji-sdk">Mindy</a></strong><br>
      An AI browser that keeps your work organized.
    </td>
    <td width="50%" valign="top">
      <strong><a href="https://glink.so/kitze/supermac?ref=kitze%2Fbenji-sdk">Supermac</a></strong><br>
      A macOS command center for everyday workflows.
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <strong><a href="https://glink.so/kitze/k67-1787136958277?ref=kitze%2Fbenji-sdk">K67</a></strong><br>
      A fork of T3 Code for working with coding agents.
    </td>
    <td width="50%" valign="top">
      <strong><a href="https://perkz.to/?ref=kitze%2Fbenji-sdk">Perkz</a></strong><br>
      Sell and manage access to private GitHub repositories.
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <strong><a href="https://glink.so/kitze/labz?ref=kitze%2Fbenji-sdk">Labz</a></strong><br>
      A platform for teaching workshops and courses.
    </td>
    <td width="50%" valign="top">
      <strong><a href="https://glink.so/kitze/popcorner-1762890546557?ref=kitze%2Fbenji-sdk">Popcorner</a></strong><br>
      Organize your movies and TV shows.
    </td>
  </tr>
  <tr>
    <td colspan="2" valign="top">
      <strong><a href="https://glink.so/kitze/champions?ref=kitze%2Fbenji-sdk">Champions Online</a></strong><br>
      A free multiplayer card-game platform.
    </td>
  </tr>
</table>

<h4>Open source</h4>
<table>
  <tr>
    <td width="50%" valign="top">
      <strong><a href="https://github.com/kitze/skillbox?ref=kitze%2Fbenji-sdk">Skillbox</a></strong><br>
      A self-hosted, versioned skills library for AI agents.
    </td>
    <td width="50%" valign="top">
      <strong><a href="https://github.com/kitze/unclutter?ref=kitze%2Fbenji-sdk">Unclutter</a></strong><br>
      Remove page clutter with AI-powered, reusable browser rules.
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <strong><a href="https://github.com/kitze/pagegrade?ref=kitze%2Fbenji-sdk">PageGrade</a></strong><br>
      Grade page clarity, writing, and on-page SEO.
    </td>
    <td width="50%" valign="top">
      <strong><a href="https://github.com/kitze/council?ref=kitze%2Fbenji-sdk">Council</a></strong><br>
      Let your coding agents deliberate together before making a plan.
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <strong><a href="https://github.com/kitze/codexmaxx?ref=kitze%2Fbenji-sdk">CodexMaxx</a></strong><br>
      Manage Codex accounts, usage, and active sessions on macOS.
    </td>
    <td width="50%" valign="top">
      <strong><a href="https://github.com/kitze/react-hanger?ref=kitze%2Fbenji-sdk">React Hanger</a></strong><br>
      A collection of useful React hooks.
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <strong><a href="https://github.com/kitze/react-genie?ref=kitze%2Fbenji-sdk">React Genie</a></strong><br>
      Animate React elements as they enter the viewport.
    </td>
    <td width="50%" valign="top">
      <strong><a href="https://github.com/kitze/mobx-router?ref=kitze%2Fbenji-sdk">MobX Router</a></strong><br>
      A simple router for MobX and React apps.
    </td>
  </tr>
</table>

<p><a href="https://kitze.io/projects?ref=kitze%2Fbenji-sdk">All projects</a> · <a href="https://github.com/kitze?ref=kitze%2Fbenji-sdk">GitHub</a> · <a href="https://x.com/thekitze?ref=kitze%2Fbenji-sdk">Follow on X</a> · <a href="https://youtube.com/kitze?ref=kitze%2Fbenji-sdk">YouTube</a></p>
<!-- readme-sync:footer:end -->
