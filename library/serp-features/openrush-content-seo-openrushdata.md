---
name: "openrush-content-seo"
description: "Improve priority pages and discover evidence-based content opportunities with OpenRush. Use when a user asks for content SEO, page optimization priorities, weak-content review, content briefs, topic ideas, or an ongoing content review for a domain."
category: "serp-features"
platforms: ["unspecified"]
platform_source: "none"
repo: "OpenRushData/openrush-agents-skills"
repo_url: "https://github.com/OpenRushData/openrush-agents-skills"
source: "https://github.com/OpenRushData/openrush-agents-skills/blob/HEAD/skills/openrush-content-seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/OpenRushData/openrush-agents-skills/HEAD/skills/openrush-content-seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 6
collected: "2026-11-13"
---

<!-- Unspecified skill · OpenRushData/openrush-agents-skills · skills/openrush-content-seo/SKILL.md · MIT
     Source: https://github.com/OpenRushData/openrush-agents-skills/blob/HEAD/skills/openrush-content-seo/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# OpenRush Content SEO

## Before Review

Confirm OpenRush MCP is available and call `describe_capabilities` first. Use `openrush-seo-agent-setup` when OpenRush is not connected.

Ask for the domain, market and language, audience, business priorities, and selected pages or topics. For a scheduled review, reuse context already provided but ask whether priorities have changed.

## Workflow

1. Call `inspect_domain` to understand the site and its coverage.
2. Call `research_keywords` for broad content opportunities tied to the user's topics or services.
3. Shortlist the most relevant pages or topics before deeper calls.
4. Call `inspect_page` only for selected priority URLs.
5. Call `inspect_keyword` or `inspect_serp` only for a small shortlist where it will improve the recommendation.

Ask before many page, keyword, or SERP drilldowns. Prefer the broad domain and keyword calls before detailed inspection.

## Report

Return a short content plan with:

1. Priority pages or topics and the reason each matters.
2. Recommended content improvements or new content angles.
3. The next action for each item.
4. Coverage, limitations, and what to check on the next run.

Use `coverage`, `facts[*].provenance`, `resources`, and `next_actions` from OpenRush. Clearly separate source facts from recommendations. Never invent content performance, rankings, traffic, or keyword metrics.

## Shared OpenRush References

Read [credits and rate limits](../../lib/CREDITS-AND-RATE-LIMITS.md) before paid work, the [tool reference](../../lib/TOOLS.md) before selecting a tool, [error handling](../../lib/ERRORS.md) for any MCP error, and the [Open Fact Envelope](../../lib/OPEN-FACT-ENVELOPE.md) before interpreting results. A `402` is a hard stop: tell the user to top up at `https://www.openrush.com/dashboard` and make no further OpenRush MCP calls.
