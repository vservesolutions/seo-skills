---
name: "openrush-keyword-research"
description: "Research, shortlist, and validate SEO keyword opportunities with OpenRush. Use when a user asks for keyword ideas, topic opportunities, keyword prioritization, SERP checks, launch visibility checks, or ranking visibility for selected queries."
category: "keyword-research"
platforms: ["unspecified"]
platform_source: "none"
repo: "OpenRushData/openrush-agents-skills"
repo_url: "https://github.com/OpenRushData/openrush-agents-skills"
source: "https://github.com/OpenRushData/openrush-agents-skills/blob/HEAD/skills/openrush-keyword-research/SKILL.md"
raw_source: "https://raw.githubusercontent.com/OpenRushData/openrush-agents-skills/HEAD/skills/openrush-keyword-research/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 6
collected: "2026-11-14"
---

<!-- Unspecified skill · OpenRushData/openrush-agents-skills · skills/openrush-keyword-research/SKILL.md · MIT
     Source: https://github.com/OpenRushData/openrush-agents-skills/blob/HEAD/skills/openrush-keyword-research/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# OpenRush Keyword Research

## Before Research

Confirm OpenRush is connected and call `describe_capabilities` first. Ask for the domain or seed topics, market and language, audience, products or services, and the desired outcome: content ideas, specific SERP checks, or visibility tracking.

## Workflow

1. Call `research_keywords` to produce broad ideas.
2. Shortlist the most relevant opportunities with the user before detailed inspection.
3. Call `inspect_keyword` only for the shortlisted terms.
4. Call `inspect_serp` only for specific queries where live result composition matters.
5. Call `inspect_search_visibility` for a small, explicit keyword set when the user needs ranking visibility.

Ask before inspecting many keywords or SERPs. Keep keyword recommendations tied to the user's audience and goal.

## Report

Return a concise table or list of prioritized themes, recommended pages or content angles, and next steps. Describe the market, language, coverage, and provenance behind the result. Do not invent search volume, CPC, ranking positions, SERP features, or traffic.

## Launch Prompt

```md
Launch visibility check:
Use OpenRush to check how {domain} appears for these priority keywords: {keywords}. Summarize rankings, SERP features, competitors, and next actions.
```

## Shared OpenRush References

Read [credits and rate limits](../../lib/CREDITS-AND-RATE-LIMITS.md) before paid work, the [tool reference](../../lib/TOOLS.md) before selecting a tool, [error handling](../../lib/ERRORS.md) for any MCP error, and the [Open Fact Envelope](../../lib/OPEN-FACT-ENVELOPE.md) before interpreting results. A `402` is a hard stop: tell the user to top up at `https://www.openrush.com/dashboard` and make no further OpenRush MCP calls.
