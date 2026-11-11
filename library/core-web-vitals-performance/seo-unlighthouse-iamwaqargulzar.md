---
name: "seo-unlighthouse"
description: "Run or interpret bounded multi-page Unlighthouse audits for local Lighthouse evidence. Use for site-wide performance, accessibility, best-practice, and SEO regression checks when field data or API quotas are insufficient."
summary: "Runs multi-page Unlighthouse audits for performance, accessibility, and SEO regression checks."
category: "core-web-vitals-performance"
platforms: ["unspecified"]
platform_source: "none"
repo: "iamwaqargulzar/Marketing-Agent-OS"
repo_url: "https://github.com/iamwaqargulzar/Marketing-Agent-OS"
source: "https://github.com/iamwaqargulzar/Marketing-Agent-OS/blob/HEAD/skills/seo-unlighthouse/SKILL.md"
raw_source: "https://raw.githubusercontent.com/iamwaqargulzar/Marketing-Agent-OS/HEAD/skills/seo-unlighthouse/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "Apache-2.0"
stars: 8
collected: "2026-11-11"
---

<!-- Unspecified skill · iamwaqargulzar/Marketing-Agent-OS · skills/seo-unlighthouse/SKILL.md · Apache-2.0
     Source: https://github.com/iamwaqargulzar/Marketing-Agent-OS/blob/HEAD/skills/seo-unlighthouse/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Unlighthouse Site Audit

Treat local Lighthouse results as laboratory measurements, not field Core Web Vitals.

## Workflow

1. Confirm authorization, start URL, device profile, route cap, concurrency, and output location.
2. Verify the current Unlighthouse installation and command from first-party documentation before running it.
3. Preview any package installation or network-intensive crawl and obtain approval.
4. Run in a temporary output directory unless the user requests persistent reports.
5. Report medians and distributions; retain route-level failures instead of dropping them.
6. Separate lab metrics from CrUX or other field data and explain meaningful differences.
7. Route page-level performance remediation to `seo-performance` and crawl/index findings to `seo-technical`.

## Output

Return environment, route count, failed routes, score distributions, worst templates, prioritized fixes, and rerun instructions.
