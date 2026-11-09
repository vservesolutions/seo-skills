---
name: "seo-crawl"
description: "Crawlability and site structure for SEO: robots.txt, noindex, canonical, redirect chains, sitemap.xml; internal linking, click depth, orphan pages, URL hierarchy, breadcrumbs; competitor comparison (gaps, overlapping keywords, content gaps). Commands documented in commands/. Triggers: 'seo crawl', 'crawlability', 'robots txt', 'site structure', 'URL structure', 'competitor seo', 'индексация', 'структура сайта', 'конкуренты seo', 'краулинг'."
category: "technical-crawling-indexing"
platforms: ["unspecified"]
platform_source: "none"
repo: "bestdeejay-design/agent-skills"
repo_url: "https://github.com/bestdeejay-design/agent-skills"
source: "https://github.com/bestdeejay-design/agent-skills/blob/HEAD/skills/seo-crawl/SKILL.md"
raw_source: "https://raw.githubusercontent.com/bestdeejay-design/agent-skills/HEAD/skills/seo-crawl/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 5
collected: "2026-11-09"
---

<!-- Unspecified skill · bestdeejay-design/agent-skills · skills/seo-crawl/SKILL.md · MIT
     Source: https://github.com/bestdeejay-design/agent-skills/blob/HEAD/skills/seo-crawl/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO Crawl — crawlability, structure & competitors

Use this skill for the **crawl/visibility** layer of SEO: whether search engines
can reach the site, how it is internally linked, and how it compares to
competitors.

## Commands (documented in `commands/`)

| Command | What it does |
|---|---|
| `seo-crawl` | Crawlability: robots.txt, noindex, canonical, redirect chains, sitemap.xml |
| `seo-structure` | Internal linking, click depth, orphan pages, URL hierarchy, breadcrumbs |
| `seo-compare` | Competitor comparison: gaps, overlapping keywords, content gaps (URL mode) |

Modes: **URL** (external sites) and **File** (local projects); `seo-compare` is URL-only.

## When to use

- User asks for "seo crawl", "crawlability", "robots txt", "site structure",
  "URL structure", "competitor seo", "индексация", "структура сайта".
- Indexation, linking structure or competitor gaps are the task.

## Do NOT use

- For the full technical audit / CWV / reports / fixes — that is `seo-audit`.
- For schema.org / meta tags — that is `seo-schema`.
- For content / keywords / headings / images — that is `seo-content`.

## Boundaries

- Do not use for copy quality or schema authoring; use `seo-content` or `seo-schema`.

## Crawl workflow and safety

Declare crawl scope, user agent, rate limit, robots policy, maximum pages, and whether the input is a local build or a permitted URL. Separate robots exclusions, HTTP failures, canonical conflicts, redirect chains, orphan detection, and competitor observations; do not merge them into one score.

## Output gate

Every finding contains URL/file, HTTP status or source evidence, affected link path, severity, and next action. Report pages not crawled and why. Never bypass robots.txt, authentication, rate limits, or access controls, and never call a competitor gap an observed fact without fetched evidence.
