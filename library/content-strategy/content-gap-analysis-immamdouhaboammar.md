---
name: "content-gap-analysis"
description: "Use when the user asks to 'find content gaps', '竞品写了什么', or '还应该写什么'; builds a competitor-relative coverage map of missing topics, keyword gaps, and editorial-calendar opportunities. Not for raw keyword demand discovery - use keyword-research."
category: "content-strategy"
platforms: ["claude-code"]
platform_source: "detected"
repo: "imMamdouhaboammar/prepilot-for-marketing"
repo_url: "https://github.com/imMamdouhaboammar/prepilot-for-marketing"
source: "https://github.com/imMamdouhaboammar/prepilot-for-marketing/blob/HEAD/skills/content-gap-analysis/SKILL.md"
raw_source: "https://raw.githubusercontent.com/imMamdouhaboammar/prepilot-for-marketing/HEAD/skills/content-gap-analysis/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 3
collected: "2026-11-14"
---

<!-- Claude Code skill · imMamdouhaboammar/prepilot-for-marketing · skills/content-gap-analysis/SKILL.md · MIT
     Source: https://github.com/imMamdouhaboammar/prepilot-for-marketing/blob/HEAD/skills/content-gap-analysis/SKILL.md
     Detected by: detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Content Gap Analysis

## PrePilot role

This is a deep SEO, GEO, AEO & Discovery specialist inside the free PrePilot for Marketing experience. Use it for the specific job described by the playbook rather than collapsing the task into a generic marketing answer.

Source lineage: aaron-marketing-skills/seo-geo/survey/content-gap-analysis/SKILL.md @ c37b8b823df92f43f695dfc5e03f3cd6044b985d
Source license: Apache-2.0

## Source dependency pack

This Skill includes safe source-relative resources under `upstream/` and explicit omission or missing-resource notes under `upstream-notes/`. Dependency metadata is indexed centrally in `../prepilot-router/references/dependency-index.json`. Copied resources: 6; linked public Skills: 1; omitted runtime helpers: 6; unresolved upstream references: 0.

## Runtime contract

- Use the current conversation, supplied files, and already available connected tools before asking for more input.
- Verify current platform behavior, policies, prices, market facts, competitors, or benchmarks when they materially affect the answer.
- Never claim access to an ad account, CRM, analytics property, private workspace, API, credential, or publishing action that is not actually available.
- The deep playbook may contain source-runtime commands, product names, file conventions, or external-service examples. Treat those as implementation notes. Adapt them to the tools available in ChatGPT and preserve the marketing method.
- The free Plugin must remain useful without paid PrePilot MCP. If connected private data or an external action would improve the job, complete the non-connected analysis first and state the missing dependency precisely.
- Do not invent performance numbers, customer evidence, quotes, tests, rankings, market sizes, account states, or competitor facts.
- Preserve the user's market, language, audience, funnel stage, business model, budget, and risk constraints throughout the work.

## Neural connections

- Domain router: `router-seo-geo`
- Requires: `content-strategy` - Content Strategy
- Feeds: `blog-calendar` - Blog Calendar
- Next best: `content-matrix` - Content Matrix
- Complements: `competitor-analysis` - Competitor Analysis
- Complements: `competitor-analysis-pm` - Competitor Analysis
- Validates with: `co-marketing` - Co Marketing
- Fallback: `serp-analysis` - Serp Analysis
- Parallel: `blog-strategy` - Blog Strategy

Use these connections only when they add a distinct job. A normal request should not expand into the entire graph.

## Operating rules

1. Identify the concrete decision or deliverable this specialist owns.
2. Separate supplied evidence, verified evidence, assumptions, and unknowns before applying the playbook.
3. Follow the detailed method below at full depth. Do not replace it with a short generic checklist.
4. When another specialist owns a downstream job, hand off the relevant artifacts instead of redoing its work.
5. For public, spend-bearing, client-facing, or high-impact output, use the connected validation edge before treating the work as final.
6. Read packaged `upstream/` references when the source playbook points to them. Files under `upstream-notes/` explain resources omitted by the public-distribution safety gate or absent from the pinned source.

## Deep playbook

> Adapted from `aaron-marketing-skills/seo-geo/survey/content-gap-analysis/SKILL.md` under Apache-2.0. Runtime-specific instructions are subordinate to the PrePilot runtime contract above.

# Content Gap Analysis

Identifies content opportunities by comparing your site against competitors and scoring the gaps worth closing first.

## Quick Start

```
Find content gaps between my site [URL] and [competitor URLs]
```

```
What content am I missing compared to my top 3 competitors?
```

## Skill Contract

**Expected output**: a prioritized gap brief plus the standard handoff summary for `memory/research/`.

- **Reads**: your domain, competitor domains, topic/content-type focus, audience, business goals, and any user-provided or tool content inventory.
- **Writes**: a user-facing analysis and reusable summary.
- **Promotes**: durable keyword priorities, competitor facts, and pending strategy decisions to `memory/hot-cache.md`, `memory/open-loops.md`, and `memory/research/`.
- **Done when**: each prioritized gap names the competitor(s) that cover it and you don't; gaps are bucketed into Quick Wins / Strategic Builds / Long-term; and the deliverable includes a dated content calendar entry per Quick Win.
- **Primary next skill**: [content-writer](../content-writer/SKILL.md) when the prioritized gap list is approved.

### Handoff Summary

> Emit the standard shape from [skill-contract.md §Handoff Summary Format](upstream/references/skill-contract.md).

## Data Sources

Optional integrations: ~~SEO tool, ~~search console, ~~analytics, ~~AI monitor. Without tools, ask for site URL, content inventory, competitor URLs, and business goals. See [CONNECTORS.md](upstream-notes/719b0bcdec4b.md).

**Trend-scout as a gap-discovery input (keyless)**: feed the multi-source trend scout - Google Trends RSS plus Hacker News and Reddit, via [`upstream-notes/94d972d32961.md`](upstream-notes/6d5e47ed347d.md) - to surface rising topics your competitors and you may both miss. Treat each hit as a candidate gap, then check it against your and competitor coverage in steps 5-7. Mark these signals **Estimated**. See [CONNECTORS.md](upstream-notes/719b0bcdec4b.md) `~~trend database`.

**Keyless competitor-coverage inventory**: `python3 "${CLAUDE_PLUGIN_ROOT}/upstream-notes/a36a7897857d.md" map <competitor-domain> --search "<topic>" --limit 1000` lists a competitor's URLs ordered by relevance to the topic - a fast **Measured** coverage inventory for steps 5-7 - and `firecrawl.py scrape <url>` reads any candidate page as rendered markdown. robots.txt is pre-flighted locally; a Disallow is refused per [SECURITY.md §Scraping Boundaries](upstream/SECURITY.md). Firecrawl keyless free tier (~1,000 credits/mo). See [upstream-notes/f96b2051b7f6.md](upstream-notes/e795df9e59cc.md).

## Decision Gates

**Stop and ask** - gap analysis is competitor-relative and cannot run on demand alone:

1. No competitor domains given and none inferable from `CLAUDE.md` or prior research → ask the user to name 1-3 competitors, OR offer to switch to [keyword-research](upstream/seo-geo/survey/keyword-research/SKILL.source.md) for demand-side discovery instead.
2. Your own domain/content inventory is unavailable and cannot be fetched → ask for the site URL or a content list, since "gap" requires knowing current coverage.

**Continue silently** - do not stop for: which 3-5 named competitors to deep-dive (pick the closest); missing optional tool data (mark Estimated/N/A and proceed); ambiguous topic scope (analyze the full overlap and flag the broadest clusters).

## Instructions

When a user requests content gap analysis:

1. **Define Analysis Scope** - confirm your site, competitors, topic focus, content types, audience, and business goals.
2. **Audit Your Existing Content** - map indexed pages, content types, topic clusters, winners, and weaknesses.
3. **Analyze Competitor Content** - compare content volume, traffic, type mix, topic coverage, and unique assets.
4. **Identify Keyword Gaps** - group gaps into High Priority, Quick Wins, and Long-term based on volume, difficulty, and relevance.
5. **Map Topic Gaps** - compare topic-cluster coverage and recommend pillar / cluster approaches for missing themes.
6. **Identify Content Format Gaps** - compare guides, tutorials, comparisons, case studies, tools, templates, video, and research.
7. **Analyze GEO / AI Gaps** - identify missing Q&A, definition, and comparison content that competitors get cited for.
8. **Map to Audience Journey** - compare Awareness, Consideration, Decision, and Retention coverage.
9. **Prioritize and Create Action Plan** - deliver an Executive Summary, Prioritized Gap List (Quick Wins / Strategic Builds / Long-term), Content Calendar, and Success Metrics.

Label every metric **Measured** (tool/export), **User-provided**, or **Estimated** (model inference); never present an estimate as measured; if a required metric is unavailable, mark it N/A - do not invent it.

**Quality bar**: every gap names the competitor that covers it, its volume or traffic estimate, and why it is worth closing - never list a bare topic without that evidence.

> **Reference**: See [Analysis Templates](upstream/seo-geo/survey/content-gap-analysis/references/analysis-templates.md) for the compact templates used in each step.

## Example

See [upstream/seo-geo/survey/content-gap-analysis/references/example-report.md](upstream/seo-geo/survey/content-gap-analysis/references/example-report.md) for a full SaaS marketing sample.

## Advanced Analysis

### Competitive Cluster Comparison

```
Compare our topic cluster coverage for [topic] vs top 5 competitors
```

### Temporal Gap Analysis

```
What content have competitors published in the last 6 months that we haven't covered?
```

### Intent-Based Gaps

```
Find gaps in our [commercial/informational] intent content
```

## Save Results

Write path: `memory/research/content-gap-analysis/YYYY-MM-DD-<topic>.md`; promote durable gap priorities and competitor facts to `memory/hot-cache.md`. See [Skill Contract](upstream/references/skill-contract.md) §Save Results Template.

## Reference Materials

- [Analysis Templates](upstream/seo-geo/survey/content-gap-analysis/references/analysis-templates.md) - Gap-analysis templates
- [Gap Analysis Frameworks](upstream/seo-geo/survey/content-gap-analysis/references/gap-analysis-frameworks.md) - Audit and prioritization frameworks
- [Example Report](upstream/seo-geo/survey/content-gap-analysis/references/example-report.md) - Worked sample

## Next Best Skill

Primary: [content-writer](../content-writer/SKILL.md).

## Output contract

- Deliver the actual artifact, analysis, decision, or plan requested by the user, not a summary of this Skill.
- Keep evidence and assumptions distinguishable when they affect the recommendation.
- Include concrete next actions, decision rules, or validation steps when the playbook implies them.
- Preserve useful tables, frameworks, examples, scoring models, templates, and checklists from the deep playbook when they improve the requested output.

## Quality gate

- The result addresses this specialist's exact job rather than giving broad marketing advice.
- Strong claims have evidence, a source, or explicit uncertainty.
- Recommendations respect channel, market, funnel, economic, and operational constraints.
- No unavailable tool, account action, or live data is represented as completed.
- The handoff names the next specialist only when another distinct marketing job remains.

## Handoff

Return the completed Content Gap Analysis output plus only the evidence, assumptions, and decisions needed by the selected `feeds`, `next_best`, or `validates` connection. Do not repeat upstream analysis unless new evidence changes it.
