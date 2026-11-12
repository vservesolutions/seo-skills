---
name: "openrush-seo-agent-setup"
description: "Connect OpenRush MCP and route a user to the right OpenRush SEO workflow. Use when a user needs OpenRush setup or connection help in Claude, ChatGPT, Codex, Claude Code, Perplexity, Cursor, or another MCP client; or when an SEO request needs domain, market, goal, competitor, and depth intake before paid OpenRush calls."
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "detected"
repo: "OpenRushData/openrush-agents-skills"
repo_url: "https://github.com/OpenRushData/openrush-agents-skills"
source: "https://github.com/OpenRushData/openrush-agents-skills/blob/HEAD/skills/openrush-seo-agent-setup/SKILL.md"
raw_source: "https://raw.githubusercontent.com/OpenRushData/openrush-agents-skills/HEAD/skills/openrush-seo-agent-setup/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 6
collected: "2026-11-12"
---

<!-- Claude Code skill · OpenRushData/openrush-agents-skills · skills/openrush-seo-agent-setup/SKILL.md · MIT
     Source: https://github.com/OpenRushData/openrush-agents-skills/blob/HEAD/skills/openrush-seo-agent-setup/SKILL.md
     Detected by: detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# OpenRush MCP Setup

## Connect and Confirm

1. Check whether OpenRush MCP tools are available.
2. When available, call `describe_capabilities` first. It is free and confirms the live tool list, costs, defaults, and connection state.
3. When unavailable, guide setup before attempting SEO analysis.

Prefer the current setup instructions at:

https://www.openrush.com/dashboard/connect

Use `https://api.openrush.com/mcp` as the fallback MCP URL.

- Claude and ChatGPT: add OpenRush as a custom connector and approve OAuth.
- Perplexity: add a custom connector, choose Streamable HTTP when prompted, and approve OAuth.
- Claude Code: run `claude mcp add --transport http openrush https://api.openrush.com/mcp`, then `claude mcp login openrush`.
- Codex: add the configuration below, then run `codex mcp login openrush`.

```toml
[mcp_servers.openrush]
url = "https://api.openrush.com/mcp"
```

- Cursor: add OpenRush in MCP settings, reload Cursor, then complete sign-in.
- Other clients: add a remote or custom MCP server with the fallback URL.

After setup, ask the user to retry or list OpenRush capabilities. Do not claim the connection works until `describe_capabilities` succeeds.

## Ask Before Spending Credits

Ask only what is needed:

- Domain.
- Target market and language; use United States and English only as a stated default.
- Goal: audit, competitors, keyword ideas, keyword gaps, SERP checks, page research, or a weekly brief.
- Known competitors, priority pages, or priority keywords when relevant.
- Quick scan or deeper review.

Explain that deeper comparisons and many drilldowns can cost more credits. Route to the matching focused skill after receiving enough answers.

| Goal | Skill |
| --- | --- |
| Technical issues | `openrush-site-audit` |
| Content or priority-page improvements | `openrush-content-seo` |
| Organic competitors or keyword gaps | `openrush-competitor-research` |
| Keyword ideas, SERPs, or rankings | `openrush-keyword-research` |
| Scheduled prioritized plan | `openrush-weekly-seo-brief` |

Use live `describe_capabilities` costs or the OpenRush credits documentation for current pricing. Never invent SEO data or costs.

## Shared OpenRush References

Read [credits and rate limits](../../lib/CREDITS-AND-RATE-LIMITS.md) before paid work, the [tool reference](../../lib/TOOLS.md) before selecting a tool, [error handling](../../lib/ERRORS.md) for any MCP error, and the [Open Fact Envelope](../../lib/OPEN-FACT-ENVELOPE.md) before interpreting results. A `402` is a hard stop: tell the user to top up at `https://www.openrush.com/dashboard` and make no further OpenRush MCP calls.
