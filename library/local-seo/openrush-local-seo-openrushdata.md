---
name: "openrush-local-seo"
description: "Research location-specific SEO opportunities and local-intent SERPs with OpenRush. Use when a user wants local SEO research for a business, city, region, or service area; location-page priorities; local keyword ideas; or a review of selected local search results."
category: "local-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "OpenRushData/openrush-agents-skills"
repo_url: "https://github.com/OpenRushData/openrush-agents-skills"
source: "https://github.com/OpenRushData/openrush-agents-skills/blob/HEAD/skills/openrush-local-seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/OpenRushData/openrush-agents-skills/HEAD/skills/openrush-local-seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 6
collected: "2026-11-11"
---

<!-- Unspecified skill · OpenRushData/openrush-agents-skills · skills/openrush-local-seo/SKILL.md · MIT
     Source: https://github.com/OpenRushData/openrush-agents-skills/blob/HEAD/skills/openrush-local-seo/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# OpenRush Local SEO

## Before Research

Confirm OpenRush MCP is available and call `describe_capabilities` first. Use `openrush-seo-agent-setup` when OpenRush is not connected.

Ask for the domain, business name, primary city or service area, target market and language, services, priority locations, and known competitors. Confirm whether the user wants a quick scan or deeper review.

## Workflow

1. Call `inspect_domain` to establish domain context.
2. Call `research_keywords` for service and location combinations that match the user's target areas.
3. Shortlist the most relevant local-intent queries.
4. Call `inspect_serp` only for selected local queries where current results will change the recommendation.
5. Optionally call `discover_competitors` to identify organic competitors, then shortlist before deeper comparison.
6. Call `inspect_page` only for selected location or service URLs.

Ask before many keyword, SERP, page, or competitor drilldowns. Prefer broad domain and keyword calls before detailed inspection.

## Report

Return the highest-priority location and service opportunities, supported SERP observations, priority pages to improve, coverage, and next actions.

Use `coverage`, `facts[*].provenance`, `resources`, and `next_actions`. Do not claim Google Business Profile details, map-pack placement, review counts, or local rankings unless OpenRush explicitly returns them. Never invent competitors, traffic, ranking data, or keyword metrics.

## Shared OpenRush References

Read [credits and rate limits](../../lib/CREDITS-AND-RATE-LIMITS.md) before paid work, the [tool reference](../../lib/TOOLS.md) before selecting a tool, [error handling](../../lib/ERRORS.md) for any MCP error, and the [Open Fact Envelope](../../lib/OPEN-FACT-ENVELOPE.md) before interpreting results. A `402` is a hard stop: tell the user to top up at `https://www.openrush.com/dashboard` and make no further OpenRush MCP calls.
