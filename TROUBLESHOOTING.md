# Troubleshooting Guide

This guide covers environment variable configuration, error codes, and common problems across the Benji SDK and CLI packages.

For setup instructions, see [README.md](README.md). For AI assistant conventions, see [CLAUDE.md](CLAUDE.md).

## Table Of Contents

- [Environment Variables](#environment-variables)
- [Error Code Reference](#error-code-reference)
- [Authentication Errors](#authentication-errors)
- [Network Errors](#network-errors)
- [Validation Errors](#validation-errors)
- [Not Found And Server Errors](#not-found-and-server-errors)
- [CLI Troubleshooting](#cli-troubleshooting)
- [Hosted MCP](#hosted-mcp)
- [Getting Help](#getting-help)

## Environment Variables

### BENJI_API_KEY

Purpose: authenticates API requests to the Benji API.

Get a key from:

```text
https://app.benji.so/settings
```

How it flows:

1. `initializeFromEnv()` reads `process.env.BENJI_API_KEY`.
2. It calls `configure({ apiKey })` from `packages/benji-sdk/src/index.ts`.
3. `configure()` sets the `x-api-key` header on outgoing HTTP requests.

Set it temporarily:

```bash
export BENJI_API_KEY=your-key
```

Set it for one CLI command:

```bash
BENJI_API_KEY=your-key benji todos list --screen today
```

What happens when missing:

```text
BENJI_API_KEY environment variable is required. Get your API key from https://app.benji.so/settings
```

What happens when invalid: the API key is not validated until the first request. The server returns HTTP 401 and the SDK/CLI reports `HTTP_401`.

### BENJI_BASE_URL

Purpose: override the API base URL for self-hosted, development, or staging environments.

Default:

```text
https://alpha.benji.so/api/rest
```

Correct format:

```bash
export BENJI_BASE_URL="https://my-instance.com/api/rest"
```

Avoid missing protocols or trailing slashes.

### Which Packages Read Which Variables

| Package | How it reads env vars | When |
|---|---|---|
| `benji-sdk` | Exports `initializeFromEnv()` from `packages/benji-sdk/src/env.ts`. Consumers may also call `configure()` directly. | When the consumer calls it |
| `benji-cli` | Calls `initializeFromEnv()` via `ensureAuth()` in `packages/benji-cli/src/auth.ts`. | Before each command |

## Error Code Reference

Every error thrown by the SDK is a `BenjiApiError` for API/network errors or a `BenjiConfigError` for missing configuration. The CLI also emits `CONFIG_ERROR` and `UNEXPECTED_ERROR` in JSON mode.

| Code | HTTP Status | Meaning | Common Cause | Fix |
|---|---:|---|---|---|
| `CONFIG_ERROR` | N/A | Missing required config | `BENJI_API_KEY` not set | Export `BENJI_API_KEY` |
| `NETWORK_ERROR` | 0 | Cannot reach API | DNS, network, wrong `BENJI_BASE_URL` | Check connectivity and base URL |
| `HTTP_400` | 400 | Request validation failed | Missing or invalid fields | Read the `issues` array |
| `HTTP_401` | 401 | Authentication failed | Invalid/expired API key | Generate a fresh key |
| `HTTP_404` | 404 | Resource not found | Bad/stale ID | List resources first |
| `HTTP_500` | 500 | Benji server error | Server-side issue | Retry or report |
| `EMPTY_RESPONSE` | 2xx | No response data | API/spec mismatch | Rebuild SDK |
| `UNEXPECTED_ERROR` | N/A | Non-Benji exception | Bug or unexpected runtime failure | Report with full output |

Where these codes come from:

- `CONFIG_ERROR`: `packages/benji-cli/src/error-handler.ts`
- `NETWORK_ERROR`: `packages/benji-sdk/src/wrapper.ts`
- `HTTP_*`: API response status/code, normalized by `wrapSdkCall()`
- `EMPTY_RESPONSE`: `wrapSdkCall()` when a successful response has no data
- `UNEXPECTED_ERROR`: CLI error handler fallback

## Authentication Errors

### Missing API Key

SDK:

```text
BenjiConfigError: BENJI_API_KEY environment variable is required. Get your API key from https://app.benji.so/settings
```

CLI human mode:

```text
Error: BENJI_API_KEY environment variable is required. Get your API key from https://app.benji.so/settings
Example: BENJI_API_KEY=your-key benji todos list
```

CLI JSON mode:

```json
{"error":{"code":"CONFIG_ERROR","message":"BENJI_API_KEY environment variable is required. Get your API key from https://app.benji.so/settings"}}
```

Resolution:

1. Get a key from <https://app.benji.so/settings>.
2. Export it in the shell running the command.
3. Re-run the SDK script or CLI command.

### Invalid API Key

CLI human mode:

```text
Error [401] HTTP_401: <message from API>
```

CLI JSON mode:

```json
{"error":{"code":"HTTP_401","status":401,"message":"..."}}
```

Resolution:

1. Verify the key at <https://app.benji.so/settings>.
2. Generate a new key if needed.
3. Make sure it was copied without extra whitespace.

## Network Errors

Symptom: error code `NETWORK_ERROR` with status `0`.

Common causes:

- No internet connection
- DNS failure
- Wrong `BENJI_BASE_URL`
- Proxy or firewall blocking HTTPS
- Benji API temporarily down

Diagnostics:

```bash
curl -I https://alpha.benji.so/api/rest
curl -I "$BENJI_BASE_URL"
nslookup alpha.benji.so
```

CLI human mode:

```text
Error [0] NETWORK_ERROR: <message>
```

CLI JSON mode:

```json
{"error":{"code":"NETWORK_ERROR","status":0,"message":"..."}}
```

## Validation Errors

Symptom: error code `HTTP_400` with an `issues` array.

Example:

```json
{
  "code": "HTTP_400",
  "message": "Validation failed",
  "issues": [
    { "message": "screen is required" },
    { "message": "Invalid date format, expected YYYY-MM-DD" }
  ]
}
```

Common validation failures:

| Scenario | Cause | Fix |
|---|---|---|
| Missing `screen` in `list_todos` / `benji todos list` | The `screen` parameter is required for listing todos | Add `--screen today` or `{"body":{"screen":"today"}}` |
| Invalid date format | Expected `YYYY-MM-DD` | Use dates like `2026-03-29` |
| Missing required field | Required field like `title` omitted | Check command help or OpenAPI spec |
| Invalid enum value | Value is outside allowed set | Check the API spec |

CLI human mode:

```text
Error [400] HTTP_400: Validation failed
  - screen is required
```

CLI JSON mode:

```json
{"error":{"code":"HTTP_400","status":400,"message":"Validation failed","issues":[{"message":"screen is required"}]}}
```

## Not Found And Server Errors

### HTTP 404

Symptom: error code `HTTP_404` and status `404`.

Common causes:

- Stale ID from a previous session
- Typo in the ID
- Resource deleted by another client

Resolution:

```bash
benji todos list --screen today
benji habits list --date-from 2026-03-01 --date-to 2026-03-31
benji todos update <valid-id> --title "Updated title"
```

### HTTP 500

Symptom: error code `HTTP_500` and status `500`.

This is a Benji server-side error.

Resolution:

1. Wait and retry.
2. Check <https://benji.so>.
3. Report the issue if it persists.

### EMPTY_RESPONSE

Symptom: error code `EMPTY_RESPONSE`.

This means the API returned a 2xx status but no data body. It is rare and can indicate an SDK/spec mismatch.

Resolution:

```bash
pnpm --filter benji-sdk build
pnpm build
```

## CLI Troubleshooting

### `benji: command not found`

Direct execution for development:

```bash
node packages/benji-cli/dist/index.js todos list --screen today
```

pnpm dev mode:

```bash
pnpm --filter benji-cli dev -- todos list --screen today
```

Global linking:

```bash
cd packages/benji-cli
pnpm link --global
```

Build first:

```bash
pnpm --filter benji-cli build
```

### Auth Errors On Every Command

`BENJI_API_KEY` must be exported in the current shell session.

Quick test:

```bash
BENJI_API_KEY=your-key benji todos list --screen today
```

Permanent setup:

```bash
echo 'export BENJI_API_KEY=your-key' >> ~/.zshrc
source ~/.zshrc
```

### JSON And Compact Flags

`--json` and `--compact` should appear after the full subcommand:

```bash
benji todos list --screen today --json
```

They are added to leaf commands by `addGlobalOptionsToLeaves()` in `packages/benji-cli/src/commands/index.ts`.

### Delete Commands Need `--force`

```bash
benji todos delete abc123 --force
```

Without `--force`, the CLI exits with code 1.

### Error Output Goes To stderr

Errors go to stderr and successful output goes to stdout:

```bash
benji todos list --screen today --json 2>/dev/null | jq .
```

## Hosted MCP

This repo no longer contains a local MCP package. Use the app-hosted MCP endpoint instead:

```text
https://alpha.benji.so/api/mcp
```

MCP implementation belongs in the Benji app codebase, layered over the app API, not in the public SDK repo.

## Getting Help

- Setup and configuration: [README.md](README.md)
- AI assistant conventions: [CLAUDE.md](CLAUDE.md)
- Error class source: [`packages/benji-sdk/src/errors.ts`](packages/benji-sdk/src/errors.ts)
- Bug reports: [GitHub Issues](https://github.com/kitze/benji-sdk/issues)
