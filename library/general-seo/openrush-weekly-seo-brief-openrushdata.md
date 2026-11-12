---
name: "openrush-weekly-seo-brief"
description: "Create a short, scheduled SEO brief with OpenRush. Use when a user wants a weekly SEO plan, a Friday keyword-gap review, a monthly audit reminder, or a concise summary of competitor moves, opportunities, weak pages, and actions."
category: "general-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "OpenRushData/openrush-agents-skills"
repo_url: "https://github.com/OpenRushData/openrush-agents-skills"
source: "https://github.com/OpenRushData/openrush-agents-skills/blob/HEAD/skills/openrush-weekly-seo-brief/SKILL.md"
raw_source: "https://raw.githubusercontent.com/OpenRushData/openrush-agents-skills/HEAD/skills/openrush-weekly-seo-brief/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 6
collected: "2026-11-12"
---

<!-- Unspecified skill · OpenRushData/openrush-agents-skills · skills/openrush-weekly-seo-brief/SKILL.md · MIT
     Source: https://github.com/OpenRushData/openrush-agents-skills/blob/HEAD/skills/openrush-weekly-seo-brief/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# OpenRush Weekly SEO Brief

## Start Small

Confirm OpenRush is connected and call `describe_capabilities` first. Ask for the domain, market and language, this week's priority, known competitors, and whether a quick or deeper review is wanted.

Use the least expensive workflow that answers the brief. Ask before competitor comparisons, exports, or multiple page, keyword, and SERP drilldowns.

## Route the Brief

- Weak pages or technical risks: `inspect_domain`, then `audit_site`.
- Priority-page and content improvements: use `openrush-content-seo`.
- Competitor moves: `discover_competitors`, then selectively inspect a relevant domain if needed.
- Keyword opportunities: `research_keywords`, then shortlist before `inspect_keyword`.
- Keyword gaps: use `compare_keyword_coverage` only after confirming competitors.
- Specific search results: use `inspect_serp` only for the priority queries.

## Output

Keep the brief short. Include the top three to five actions, why each matters, expected impact, and what to measure next. Mark unsupported conclusions as hypotheses. Use `coverage`, `facts[*].provenance`, `resources`, and `next_actions`; do not invent metrics.

## Weekly Prompts

```md
Weekly SEO brief:
Use OpenRush to review {domain}. Find the most important competitor moves, keyword opportunities, weak pages, and actions for this week. Keep it short and prioritize by likely impact.
```

```md
Friday keyword gap review:
Use OpenRush to compare {domain} against its top organic competitors. Find keyword gaps and return the best content opportunities for next week.
```

```md
Monthly site audit:
Use OpenRush to audit {domain}. Focus on technical issues that could affect organic growth. Return the top fixes and what to re-check next month.
```

```md
Launch visibility check:
Use OpenRush to check how {domain} appears for these priority keywords: {keywords}. Summarize rankings, SERP features, competitors, and next actions.
```

## Shared OpenRush References

Read [credits and rate limits](../../lib/CREDITS-AND-RATE-LIMITS.md) before paid work, the [tool reference](../../lib/TOOLS.md) before selecting a tool, [error handling](../../lib/ERRORS.md) for any MCP error, and the [Open Fact Envelope](../../lib/OPEN-FACT-ENVELOPE.md) before interpreting results. A `402` is a hard stop: tell the user to top up at `https://www.openrush.com/dashboard` and make no further OpenRush MCP calls.
