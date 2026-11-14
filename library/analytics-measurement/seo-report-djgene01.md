---
name: "seo-report"
description: "Use when generating a full SEO audit report for an ecommerce website."
category: "analytics-measurement"
platforms: ["unspecified"]
platform_source: "none"
repo: "djgene01/ecommerce-toolkit"
repo_url: "https://github.com/djgene01/ecommerce-toolkit"
source: "https://github.com/djgene01/ecommerce-toolkit/blob/HEAD/ecommerce-toolkit/skills/seo-report/SKILL.md"
raw_source: "https://raw.githubusercontent.com/djgene01/ecommerce-toolkit/HEAD/ecommerce-toolkit/skills/seo-report/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · djgene01/ecommerce-toolkit · ecommerce-toolkit/skills/seo-report/SKILL.md · MIT
     Source: https://github.com/djgene01/ecommerce-toolkit/blob/HEAD/ecommerce-toolkit/skills/seo-report/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Ecommerce SEO Report Generator

## Overview
Produce a prioritized, client-readable SEO report for an online store: technical health, on-page quality, content gaps, and a ranked action list with effort estimates.

## When to Use
- "Run an SEO report/audit on my store"
- Monthly reporting cadence for a client

## Workflow

1. **Fetch homepage** — `curl -s <url>` (or web_extract). Record title (≤60 chars), meta description (≤155), H1 count, canonical tag.
2. **robots.txt & sitemap** — fetch `/robots.txt` and sitemap URL; confirm XML sitemap exists, is referenced in robots.txt, and lists product/category pages.
3. **Key page sampling** — check 5-8 representative URLs (home, category, top product, blog post). For each: title, meta, H1, image alt coverage, canonical, structured-data hints (`application/ld+json`, look for Product/Offer schema).
4. **Technical quick checks**
   - HTTP→HTTPS and non-www/www redirect consistency (`curl -sI`)
   - Duplicate title/meta across sampled pages
   - Pagination handling on category pages (rel=canonical pointing to page 1 = common bug)
   - Faceted-filter URL explosion (check for `?color=&size=` indexable URLs)
5. **Score** — Technical /30, On-page /30, Content & structure /25, Trust signals /15 (schema, reviews markup, about/contact presence).
6. **Report format** — Executive summary (3 bullets) → scorecard table → findings by severity (Critical/High/Medium/Low) → prioritized 30-day action plan with Effort(S/M/L) × Impact columns.

## Report Template
Save as markdown; offer HTML conversion. Every finding needs: what's wrong, evidence (URL + actual value), why it matters in one sentence, exact fix.

## Common Pitfalls
- Judging from the homepage alone — category/product templates carry most ecommerce SEO risk.
- Flagging missing hreflang for single-region stores — ask target markets first or mark N/A.
- Reporting raw crawler-style output instead of a decision-ready action plan.

## Verification Checklist
- [ ] ≥6 distinct URLs actually fetched (not assumed)
- [ ] Every finding has evidence + fix
- [ ] Action plan ranked by Impact×Effort, not severity alone
