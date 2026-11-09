---
name: "seo-technical"
description: "Diagnose crawl access, HTTP responses, canonicals, sitemaps, rendering, and Core Web Vitals using observed site evidence. Use for technical indexing or performance problems; use seo-on-page for copy and seo-analytics for a traffic-loss investigation."
category: "technical-crawling-indexing"
platforms: ["unspecified"]
platform_source: "none"
repo: "ronaldships/foundvia-discovery"
repo_url: "https://github.com/ronaldships/foundvia-discovery"
source: "https://github.com/ronaldships/foundvia-discovery/blob/HEAD/skills/seo-technical/SKILL.md"
raw_source: "https://raw.githubusercontent.com/ronaldships/foundvia-discovery/HEAD/skills/seo-technical/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 30
collected: "2026-11-09"
---

<!-- Unspecified skill · ronaldships/foundvia-discovery · skills/seo-technical/SKILL.md · MIT
     Source: https://github.com/ronaldships/foundvia-discovery/blob/HEAD/skills/seo-technical/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Technical discovery diagnosis

## Establish evidence

Inspect the supplied URL, intended public/private state, actual framework/version, and authorized Search Console history. Fetch initial HTML, robots.txt, response headers, and sitemap; use the Foundvia helper for a bounded preflight. If JavaScript changes the output, compare rendered HTML. A tool failure is not proof of a site failure.

## Investigate in order

1. Confirm status and redirect destination. Preserve intentional authentication and private routes.
2. Distinguish a crawler prohibition from noindex. A blocked crawler cannot read a new noindex directive. Evaluate Googlebot and OAI-SearchBot independently; preserve GPTBot training policy.
3. Compare declared canonical with the intended page and, where available, Google's selected canonical. Query parameters may represent distinct content. Do not canonicalize all child routes to the homepage.
4. Check sitemap URLs against real public routes; include truthful lastmod only. A sitemap is a discovery hint, not proof of indexing.
5. Inspect rendered content and crawlable links. Do not block framework assets such as /_next/ by default.
6. For performance, use field data and a reproducible profile to locate the actual bottleneck. A laboratory score is not a real-user pass. Security headers protect users; do not present HSTS/CSP as ranking requirements.

## Fix and verify

Report URL/file, evidence, consequence, priority, action, and verification. Change code only within the user's scope; check affected routes and the existing build/typecheck. Distinguish local fixes, deployment, and live verification. Do not promise recrawl timing or rank changes.

Read [crawlability](references/crawlability.md), [performance](references/cwv-deep-dive.md), or [security](references/security-headers.md) only for the relevant investigation. Source: [Google robots specification](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec).
