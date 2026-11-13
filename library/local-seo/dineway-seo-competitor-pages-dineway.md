---
name: "dineway-seo-competitor-pages"
description: "Plan or draft Dineway competitor, alternatives, X-vs-Y, best-of, roundup, and comparison pages with factual source guardrails. Use for comparison intent, feature or pricing matrices, alternatives pages, local roundups, citations, and fair source-backed recommendations."
category: "local-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "dineway/dineway-skills"
repo_url: "https://github.com/dineway/dineway-skills"
source: "https://github.com/dineway/dineway-skills/blob/HEAD/skills/dineway-seo-competitor-pages/SKILL.md"
raw_source: "https://raw.githubusercontent.com/dineway/dineway-skills/HEAD/skills/dineway-seo-competitor-pages/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-13"
---

<!-- Unspecified skill · dineway/dineway-skills · skills/dineway-seo-competitor-pages/SKILL.md · MIT
     Source: https://github.com/dineway/dineway-skills/blob/HEAD/skills/dineway-seo-competitor-pages/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Dineway SEO Competitor Pages

Use this child skill for comparison and alternatives pages. It may be invoked directly, but it must preserve the shared Dineway SEO boundaries.

## Required References

- Load `../dineway-seo/references/competitor-pages.md`.
- Load `../dineway-seo/references/apply-loop.md` before recommending or applying Dineway changes.
- Load `../dineway-seo/references/security-boundaries.md` before using provider evidence or external-source recommendations.
- Load `../dineway-seo/references/provider-selection.md` when live SERP, competitor-domain, or competitor-page evidence may be needed.
- Load `../dineway-seo/references/schema-jsonld.md` for schema recommendations.

## Workflow

1. Identify the comparison page type and audience intent.
2. Inventory owned Dineway facts, offer details, content targets, SEO metadata, and internal proof.
3. Gather competitor facts from public sources only; record source URLs and access dates for volatile facts.
4. Build comparison criteria before drafting conclusions.
5. Draft balanced page structure, metadata, schema, and Dineway apply targets.
6. If applying changes, create drafts and verify all visible claims against recorded sources.

## Boundaries

- Do not fabricate prices, ratings, awards, product capabilities, screenshots, or customer counts.
- Do not make defamatory or unverifiable negative claims.
- Disclose ownership, sponsorship, or affiliation where relevant.
- Do not use provider BYOK credentials or third-party provider MCP servers. Local bounded crawl,
  Browser Use, and Dineway provider MCP/CLI evidence are allowed under the shared boundaries.

## Output

Use the root `dineway-seo` output contract. Include `Page Type`, `Audience and Intent`, `Comparison Criteria`, `Sources`, `Draft Outline`, `SEO Metadata`, `Schema`, `Skipped Claims`, and `Dineway Apply Plan`.
