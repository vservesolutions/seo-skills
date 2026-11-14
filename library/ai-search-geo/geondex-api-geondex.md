---
name: "geondex-api"
description: "Base reference for the Geondex API and MCP server - auth with GEONDEX_API_KEY, base URL, every endpoint with its credit cost, the response envelope, error codes and rate limits. Use when the user mentions Geondex, asks to call the Geondex API or MCP tools, asks about their Geondex credits, balance, plan or API key, or when another Geondex skill (check-ai-visibility, find-buyer-prompts, audit-ai-readiness, keyword-and-rank-research) needs the shared details."
category: "ai-search-geo"
platforms: ["claude-code", "windsurf"]
platform_source: "detected"
repo: "Geondex/skills"
repo_url: "https://github.com/Geondex/skills"
source: "https://github.com/Geondex/skills/blob/HEAD/skills/geondex-api/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Geondex/skills/HEAD/skills/geondex-api/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code, Windsurf skill · Geondex/skills · skills/geondex-api/SKILL.md · MIT
     Source: https://github.com/Geondex/skills/blob/HEAD/skills/geondex-api/SKILL.md
     Detected by: detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Geondex API

Geondex asks five AI engines (Perplexity, ChatGPT, Claude, Gemini and Grok) whether they cite a website, and remembers every answer so you can see what changed. It also has Google rank, search volume, robots.txt and structured-data checks. This skill holds the shared facts. The other Geondex skills hold the workflows.

## Setup

1. The user needs an API key from <https://geondex.com/account>. Keys start with `gx_`. The free plan gives 500 credits a month.
2. The key must be in the `GEONDEX_API_KEY` environment variable. Check it before any call:

```bash
test -n "$GEONDEX_API_KEY" && echo "key is set" || echo "GEONDEX_API_KEY is missing"
```

If it is missing, stop. Ask the user to create a key and run `export GEONDEX_API_KEY=gx_...` (or put it in a `.env` file). Never print the key back in full.

## Rules for the agent

- **Check the balance first.** Call `GET /me` (free) before a paid call when you do not know the balance.
- **Say the cost before you spend.** Tell the user how many credits a call will use before you make it. Ask first if a job will use more than about 20 credits.
- **Use free calls first.** `history`, `check_crawlers` and `GET /me` cost nothing.
- **Read `summary` first.** Every response has a one-line `summary`. Show it to the user, then use `data` for details.
- **Branch on `error.code`**, never on the message text.

## Base URL and auth

- REST base URL: `https://geondex.com/api/v1`
- Header: `Authorization: Bearer $GEONDEX_API_KEY` (an `X-API-Key: gx_...` header also works)
- POST bodies need `content-type: application/json`
- Machine-readable spec: `https://geondex.com/api/v1/openapi.json` (no key needed)

Check the key and balance:

```bash
curl -s https://geondex.com/api/v1/me -H "Authorization: Bearer $GEONDEX_API_KEY"
```

Response fields: `userId`, `email`, `engines` (the engines this server can ask: `perplexity`, `openai`, `claude`, `gemini`, `grok`), and `credits` with `plan` (`free`, `starter` or `standard`), `monthlyAllowance`, `allowanceRemaining`, `packRemaining` and `total`. `total` is what the user can spend. Monthly credits are used before pack credits.

## Endpoints and costs

| Tool (MCP name) | REST call | Cost |
| --- | --- | --- |
| `check_visibility` | `POST /check` | Each engine's model credits (2-64), only for engines that answer - all five defaults together are 57. Timeouts are free |
| `history` | `GET /history?domain=` | Free |
| `suggest_prompts` | `POST /prompts/suggest` | 1 credit |
| `check_crawlers` | `GET /crawlers?domain=` | Free |
| `audit_page` | `POST /audit` | 1 credit |
| `google_rank` | `POST /rank` | 1 credit |
| `keyword_volume` | `POST /volume` | 1 credit per 10 distinct keywords, minimum 20 per call (1 to 200 keywords = 20 credits) |
| (account) | `GET /me` | Free |

`check_visibility` accepts an optional `models` object to pick a stronger model per engine instead of that engine's default, for example `{"models":{"openai":"gpt-5.6-sol"}}`. A stronger model costs more credits for that engine; `GET /me`'s response and the OpenAPI spec list every model and its credits.

Which skill to use:

- "Does AI cite my site for this question?" - `check-ai-visibility`
- "What questions should I even check?" - `find-buyer-prompts`
- "Why is my page never cited? Can AI read it?" - `audit-ai-readiness`
- "Google rank, AI Overview, search volume" - `keyword-and-rank-research`

## Response envelope

Every successful call returns:

```json
{ "summary": "one line for the user", "data": { }, "credits": { "charged": 12, "remaining": 188 } }
```

On a free call, `charged` is `0` and `remaining` is `null`. A call that fails is not charged.

## Errors

Every error has this body: `{"error":{"code":"credits_exhausted","message":"..."}}`

| HTTP | `error.code` | What to do |
| --- | --- | --- |
| 400 | `invalid_request` | Bad input or bad JSON. The message names the field. Fix it and retry |
| 400 | `invalid_domain`, `blocked_host` | Use a public domain like `example.com` (no scheme, no path) |
| 400 | `engine_unavailable` | You asked for an engine the server does not have. The message lists the ones it has |
| 401 | `unauthorized` | No key was sent. Check `GEONDEX_API_KEY` |
| 401 | `invalid_api_key` | Wrong or revoked key. The user makes a new one at <https://geondex.com/account> |
| 402 | `credits_exhausted` | Not enough credits. Tell the user the message. They can upgrade or buy a pack at <https://geondex.com/account>. Do not retry |
| 404 | `not_found` | This tool is not available right now. Tell the user |
| 415 | `unsupported_media_type` | Add `-H "content-type: application/json"` to the POST |
| 429 | `rate_limited` | More than 1,000 requests today on this key. Wait the seconds in the `Retry-After` header |
| 429 | `spend_ceiling` | Daily safety limit on checks reached. Try again tomorrow |
| 502 | `upstream_failed`, `fetch_failed`, `site_unreachable`, `suggest_failed` | A site or data source failed. Safe to retry once |
| 502 | `not_configured`, `no_engines` | Server-side setup problem. Retrying will not help |
| 500 | `internal` | Retry once. If it fails again, tell the user |

## Limits

- 1,000 requests per day per key. Over that you get `429` with a `Retry-After` header.
- `check_visibility` can take up to 30 seconds (45 with a stronger model). Use `--max-time 90` with curl. Other calls return in about 10 seconds or less.
- An engine that does not answer within its timeout (30s default, 45s for a stronger model) is marked `timeout` and is not charged.

## REST or MCP

REST with curl works everywhere and needs nothing installed. The MCP server is optional. It gives the agent the same seven tools with the same names and the same JSON.

Install it in Claude Code once, for every project (`--scope user`):

```bash
claude mcp add --scope user --transport http geondex https://geondex.com/mcp --header "Authorization: Bearer $GEONDEX_API_KEY"
```

Setup for Cursor, VS Code, Windsurf, Codex and Claude Desktop: <https://geondex.com/docs/mcp>. When the MCP tools are installed, prefer them over curl. The costs and rules above are the same.

For raw HTTP to `/mcp`, the `accept` header must include both `application/json` and `text/event-stream`, or you get `406`.

## Links

- Docs: <https://geondex.com/docs>
- REST reference with a full example for every call: <https://geondex.com/docs/api>
- Try calls in the browser: <https://geondex.com/playground>
- Pricing: <https://geondex.com/pricing>
