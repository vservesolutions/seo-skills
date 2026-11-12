---
name: "seo-audit"
description: "Technical SEO audit and health: full technical audit (meta, headings, alt, broken links, sitemap, robots.txt, canonical, URL structure), Core Web Vitals (LCP/CLS/INP, blocking resources, unused CSS/JS, caching), a comprehensive scored report (7 dimensions, weighted 100%), and the autonomous fix agent (P1-P5 prioritization, diff-before-apply). Commands documented in commands/. Triggers: 'seo audit', 'technical audit', 'core web vitals', 'site speed', 'seo report', 'seo fix', 'технический аудит', 'проверка seo', 'скорость сайта'."
category: "technical-crawling-indexing"
platforms: ["unspecified"]
platform_source: "none"
repo: "bestdeejay-design/agent-skills"
repo_url: "https://github.com/bestdeejay-design/agent-skills"
source: "https://github.com/bestdeejay-design/agent-skills/blob/HEAD/skills/seo-audit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/bestdeejay-design/agent-skills/HEAD/skills/seo-audit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 5
collected: "2026-11-12"
---

<!-- Unspecified skill · bestdeejay-design/agent-skills · skills/seo-audit/SKILL.md · MIT
     Source: https://github.com/bestdeejay-design/agent-skills/blob/HEAD/skills/seo-audit/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO Audit — technical site health

Use this skill for the **technical** side of SEO: audit the site, measure Core
Web Vitals, produce a scored report, and apply fixes safely. This is the
"measure and fix" layer of SEO.

## Commands (documented in `commands/`)

| Command | What it does |
|---|---|
| `seo-audit` | Full technical audit: meta, headings, alt, broken links, sitemap, robots.txt, canonical, URL structure |
| `seo-speed` | Core Web Vitals (LCP/CLS/INP), blocking resources, unused CSS/JS, caching |
| `seo-report` | Comprehensive scored report — 7 dimensions, weighted 100%, weekly action plan |
| `seo-fix` | Autonomous fix agent: P1–P5 prioritization, diff-before-apply, safety rules |

Modes: **URL** (external sites) and **File** (local projects).

## When to use

- User asks for "seo audit", "technical audit", "core web vitals", "site speed",
  "seo report", "seo fix", "технический аудит", "проверка seo".
- A site's technical health must be measured, scored and fixed.

## Do NOT use

- For structured data / meta tags / OG — that is `seo-schema`.
- For content / keywords / headings / images — that is `seo-content`.
- For crawlability / linking structure / competitors — that is `seo-crawl`.

## Boundaries

- Do not use for content writing or JSON-LD generation; use `seo-content` or `seo-schema`.

## Audit workflow and evidence

1. Inventory all routes/pages and declare whether the source is URL, static files, or a framework build.
2. Run the technical checks documented in `commands/`, preserving page URLs and source file locations.
3. Score only observed dimensions; mark unavailable Core Web Vitals or crawl data as `not measured`, not zero.
4. Produce a prioritized remediation plan, then ask before applying changes.
5. Re-run the affected checks after any fix and compare before/after results.

## Output gate

Every finding needs page/file, check, evidence, severity, recommended fix, and confidence. Never claim a ranking improvement or a 100/100 score from static inspection alone. For `seo-fix`, show a diff and run the relevant build or test command before claiming success.
