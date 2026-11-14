---
name: "site-capture-audit"
description: "Captures a website (raw HTML), cleans pages to markdown, pulls sitemaps and robots.txt, then produces a prioritized 90-day quick-win SEO audit. Use when onboarding a new site, baselining technical SEO and on-page health, or building a ranked P0/P1/P2 fix list across indexability, on-page, content, and conversion."
category: "technical-crawling-indexing"
platforms: ["unspecified"]
platform_source: "none"
repo: "sujanbhuiyan/skills"
repo_url: "https://github.com/sujanbhuiyan/skills"
source: "https://github.com/sujanbhuiyan/skills/blob/HEAD/skills/site-capture-audit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/sujanbhuiyan/skills/HEAD/skills/site-capture-audit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Unspecified skill · sujanbhuiyan/skills · skills/site-capture-audit/SKILL.md · MIT
     Source: https://github.com/sujanbhuiyan/skills/blob/HEAD/skills/site-capture-audit/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Site Capture & Audit

## What this does

Captures a website to local files, then turns that capture into a prioritized,
90-day quick-win audit. The capture step saves raw HTML, a cleaned
text/markdown version of each page, and the site's `sitemap.xml` + `robots.txt`.
The audit step grades the site against a P0/P1/P2 rubric covering technical
SEO (indexability, canonicals, redirects), on-page (titles, meta, headings,
schema, internal links), content depth, Core Web Vitals, and conversion — and
emits a ranked fix list with effort/impact.

## When to use it

- Onboarding a new client/site and you need a fast, evidence-based baseline.
- Auditing technical + on-page SEO before a redesign, migration, or content push.
- Producing a defensible "first 90 days" quick-win list for a stakeholder.

## How to use it

1. Capture the site with the bundled script:
   `python scripts/capture.py https://example.com --max 25 --out ./capture`
   It fetches the homepage, discovers more URLs via `sitemap.xml` / `robots.txt`,
   saves raw HTML to `<out>/raw-html/`, cleaned markdown to `<out>/clean-md/`,
   and `<out>/sitemaps/` (sitemaps + robots.txt). See the script `--help`.
2. Read the cleaned pages in `<out>/clean-md/` and skim the raw HTML `<head>`
   blocks for titles, meta, canonical, robots directives, and JSON-LD.
3. Work through [`references/audit-checklist.md`](references/audit-checklist.md)
   in priority order — P0 indexability first, then P1 on-page, then P2 depth +
   CWV + conversion. Record evidence (the actual title, the missing canonical,
   the redirect chain) for each finding.
4. For each finding assign: **severity** (P0/P1/P2), **impact** (high/med/low),
   **effort** (S/M/L), and the concrete **fix**.
5. Write the audit as a ranked table grouped by priority, with a short
   executive summary and a 90-day sequencing (do P0 in weeks 1–2, etc.).
6. For schema gaps found in the audit, hand off to a `schema-org-sprint` skill;
   for content gaps, hand off to a content-brief skill.

## Inputs

- A base URL (the site to capture and audit).
- Optional: a max page count (`--max`) and output dir (`--out`).
- Optional: access to Google Search Console / analytics to ground impact (the
  audit works from the capture alone, but real query/traffic data sharpens it).

## Output

- A capture folder: `raw-html/`, `clean-md/`, `sitemaps/`.
- A prioritized 90-day quick-win audit (markdown): executive summary, ranked
  P0/P1/P2 findings with evidence + fix + effort/impact, and a week-by-week plan.

## Notes & constraints

- The capture script uses only the Python standard library (`urllib`) plus
  **optional** BeautifulSoup; if BeautifulSoup is absent it falls back to a
  regex tag-strip, so it runs on a stock Python 3. It sets a descriptive
  User-Agent and adds a small delay between requests to be polite.
- It only fetches when **you** invoke it with a URL. Respect `robots.txt`,
  rate limits, and the site owner's terms; capture sites you're authorized to.
- The audit is an expert review against the rubric, not a substitute for live
  Core Web Vitals field data or full crawl tooling — call those out where they'd
  change a conclusion.
- Use forward-slash paths.
