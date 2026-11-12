---
name: "seo-geo"
description: "SEO/AEO/GEO optimization skill suite. Currently ships build-phase subset (4 sub-skills): content writing, meta tags, schema markup, GEO content. Research/optimize/monitor phases on roadmap."
category: "ai-search-geo"
platforms: ["claude-code", "codex"]
platform_source: "declared+detected"
repo: "waseemnasir2k26/skynetlabs-all-claude-code"
repo_url: "https://github.com/waseemnasir2k26/skynetlabs-all-claude-code"
source: "https://github.com/waseemnasir2k26/skynetlabs-all-claude-code/blob/HEAD/skills/seo-content-copy/seo-geo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/waseemnasir2k26/skynetlabs-all-claude-code/HEAD/skills/seo-content-copy/seo-geo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-12"
---

<!-- Claude Code, Codex skill · waseemnasir2k26/skynetlabs-all-claude-code · skills/seo-content-copy/seo-geo/SKILL.md · MIT
     Source: https://github.com/waseemnasir2k26/skynetlabs-all-claude-code/blob/HEAD/skills/seo-content-copy/seo-geo/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# seo-geo (build-only subset, v1.0.0-build-only)

Honest scope: this skill currently ships **only the 4 build-phase sub-skills**. The plugin's original `AGENTS.md` / `plugin.json` advertise a 20-skill modular system across Research / Build / Optimize / Monitor / Cross-cutting phases. Those 16 other sub-skill folders exist on disk but are not yet wired into a working flow from this root SKILL.md, so this entrypoint does not route to them. They are listed under `## Roadmap` as future work, not promises.

If you came here expecting research, optimize, monitor, or cross-cutting auditor flows, stop here and use the four build sub-skills below — or escalate to the SkynetLabs `seo-audit-pending-tasks` workstream which uses parallel research agents instead.

## Triggers

Activate this skill when the user says any of:

- `seo audit`, `seo content`, `write seo`, `seo blog`, `seo article`
- `schema markup`, `json-ld`, `structured data`, `rich snippets`, `faq schema`, `howto schema`, `product schema`
- `meta tags`, `title tag`, `meta description`, `open graph`, `og tags`, `twitter card`, `improve ctr`
- `content writer`, `seo copywriting`, `landing page seo`, `featured snippet`
- `geo content`, `aeo`, `geo optimization`, `ai citations`, `chatgpt optimization`, `perplexity optimization`, `ai overviews`, `appear in ai answers`, `ai-quotable`, `llm citations`
- `/seo-geo`

## Routing Table — intent to sub-skill

| User intent | Sub-skill | Path |
|---|---|---|
| Write a blog post / article / landing page targeting a keyword | `seo-content-writer` | `build/seo-content-writer/SKILL.md` |
| Optimize content to be cited by ChatGPT / Perplexity / AI Overviews / Gemini / Claude | `geo-content-optimizer` | `build/geo-content-optimizer/SKILL.md` |
| Write or fix title tag, meta description, OG / Twitter card, improve CTR | `meta-tags-optimizer` | `build/meta-tags-optimizer/SKILL.md` |
| Generate JSON-LD: FAQ, HowTo, Article, Product, LocalBusiness, Recipe, Event, Review | `schema-markup-generator` | `build/schema-markup-generator/SKILL.md` |
| Full on-page audit, technical SEO check, internal linking, content refresh | NOT SHIPPED — see `## Roadmap` | — |
| Keyword research, SERP analysis, competitor analysis, content gap | NOT SHIPPED — see `## Roadmap` | — |
| Rank tracking, backlink analysis, performance reports, alerting | NOT SHIPPED — see `## Roadmap` | — |
| Content quality audit, domain authority audit, entity profiling | NOT SHIPPED — see `## Roadmap` | — |

If the user's intent does not match a row in the "shipped" half, say so plainly and offer the closest available sub-skill or fall back to the SkynetLabs in-house SEO audit workflow.

## Shipped sub-skills (the only 4 that work)

### 1. `seo-content-writer`

**Path:** `build/seo-content-writer/SKILL.md`
**Purpose:** Write SEO-optimized blog posts, articles, landing pages, product descriptions, comparison posts, listicles, ultimate guides — with keyword integration, H1-H6 hierarchy, FAQ for featured snippets, and internal/external link suggestions.

Quick example:
```
Write a 2,000-word SEO article about "email marketing best practices" targeting small businesses. Primary keyword: email marketing for small business. Include FAQ for featured snippets.
```

### 2. `geo-content-optimizer`

**Path:** `build/geo-content-optimizer/SKILL.md`
**Purpose:** Optimize existing content (or write new content) so it is cited by AI engines: ChatGPT, Perplexity, Google AI Overviews, Gemini, Claude, Copilot. Adds quotable definitions, factual density, authority signals, FAQ schema, GEO scoring before/after.

Quick example:
```
Optimize this paragraph for GEO/AI citations: "Email marketing is a good way to reach customers..."
```

### 3. `meta-tags-optimizer`

**Path:** `build/meta-tags-optimizer/SKILL.md`
**Purpose:** Write or improve title tags (50-60 chars), meta descriptions (150-160 chars), Open Graph, Twitter cards, canonical, robots — with A/B variations and CTR-boosting power words.

Quick example:
```
Write title and meta description for a blog post about "how to start a podcast in 2026" targeting first-time creators. Give me 3 A/B variants.
```

### 4. `schema-markup-generator`

**Path:** `build/schema-markup-generator/SKILL.md`
**Purpose:** Generate JSON-LD Schema.org markup: FAQPage, HowTo, Article / BlogPosting / NewsArticle, Product, LocalBusiness, Organization, BreadcrumbList, Event, Recipe, Review, VideoObject — with rich result preview and validation checklist.

Quick example:
```
Generate FAQ schema for these 3 questions about SEO: [Q&A list]
```

## Pairs with

- **`/social-stack`** — once the page-content asset is written here, ship cross-platform social posts (LinkedIn cards, FB news, X pack, Pinterest, carousels) via the `social-stack` skill.
- **`/skynet-site`** — when building a full client website, `/skynet-site` is the master flow; pull this skill in for the SEO/AEO base layer (meta tags + schema + GEO-optimized copy) on each page.

## Roadmap (NOT shipped — do not route to these)

The following 16 sub-skill folders exist on disk under `seo-geo/` but are not validated as working in this build-only release. They appear in the original `AGENTS.md` / `plugin.json` / `CLAUDE.md` skill listing but the root entrypoint does not route to them. Treat as future work, not promises:

**Research phase (4):**
- `research/keyword-research/`
- `research/competitor-analysis/`
- `research/serp-analysis/`
- `research/content-gap-analysis/`

**Optimize phase (4):**
- `optimize/on-page-seo-auditor/`
- `optimize/technical-seo-checker/`
- `optimize/internal-linking-optimizer/`
- `optimize/content-refresher/`

**Monitor phase (4):**
- `monitor/rank-tracker/`
- `monitor/backlink-analyzer/`
- `monitor/performance-reporter/`
- `monitor/alert-manager/`

**Cross-cutting / protocol (4):**
- `cross-cutting/content-quality-auditor/` (advertised as the "publish readiness gate")
- `cross-cutting/domain-authority-auditor/` (advertised as the "citation trust gate")
- `cross-cutting/entity-optimizer/`
- `cross-cutting/memory-management/`

When promoting any of these from roadmap to shipped: (1) verify the sub-skill SKILL.md actually loads in Claude Code, (2) add a routing-table row above, (3) bump version from `1.0.0-build-only` to a real `1.x.x`, (4) update `## Triggers` if needed, (5) remove the entry from this Roadmap section.

## Notes on the original modular system

The original `AGENTS.md` and `CLAUDE.md` describe shared frameworks (CORE-EEAT 80-item benchmark, CITE 40-item domain rating, hot-cache memory, wiki layer, hooks, ClawHub publishing pipeline). These artefacts ship with the skill in `references/` and partially in `memory/` but are not all wired up. The 4 shipped sub-skills above reference them as external links to the upstream GitHub repo, which works regardless of local wiring.
