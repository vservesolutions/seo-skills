---
name: "gsc-analytics"
description: "Google Search Console SEO analytics assistant. Use this skill for GSC/Search Console data, organic search performance, keyword rankings, page/query analysis, indexation checks, URL Inspection API, sitemap management, CTR opportunities, SEO reporting, and search data visualization for any website."
category: "analytics-measurement"
platforms: ["unspecified"]
platform_source: "none"
repo: "ccccchuck/gsc-analytics-skill"
repo_url: "https://github.com/ccccchuck/gsc-analytics-skill"
source: "https://github.com/ccccchuck/gsc-analytics-skill/blob/HEAD/SKILL.md"
raw_source: "https://raw.githubusercontent.com/ccccchuck/gsc-analytics-skill/HEAD/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-12"
---

<!-- Unspecified skill · ccccchuck/gsc-analytics-skill · SKILL.md · MIT
     Source: https://github.com/ccccchuck/gsc-analytics-skill/blob/HEAD/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Google Search Console Analytics

Use the bundled Python scripts to fetch real Google Search Console data, inspect URLs, manage sitemaps, visualize trends, and turn search data into SEO recommendations.

## Setup Check

Before running GSC scripts, verify:

1. `GSC_SERVICE_ACCOUNT_JSON` or `GOOGLE_APPLICATION_CREDENTIALS` points to a local service account JSON file.
2. `DEFAULT_SITE_URL` is set, or each command passes `--site`.
3. Dependencies are installed:

```bash
python3 -m pip install -r .agents/skills/gsc-analytics/requirements.txt
```

Test access:

```bash
python3 .agents/skills/gsc-analytics/scripts/list_properties.py
```

If this fails, check that the service account email has access to the Search Console property.

## Configuration

Environment variables:

| Variable | Required | Example | Purpose |
|---|---:|---|---|
| `GSC_SERVICE_ACCOUNT_JSON` | yes | `/secure/gsc-service-account.json` | Service account key path |
| `DEFAULT_SITE_URL` | recommended | `sc-domain:example.com` | Default GSC property |
| `GSC_OUTPUT_DIR` | no | `./gsc-output` | JSON/CSV output directory |
| `GSC_CHARTS_DIR` | no | `./gsc-output/charts` | Chart output directory |
| `GSC_API_SCOPES` | no | `https://www.googleapis.com/auth/webmasters.readonly` | Override OAuth scopes |

`GOOGLE_APPLICATION_CREDENTIALS` is also supported as a fallback for the service account JSON path.

## Intent Routing

| User intent | Use |
|---|---|
| List or manage GSC properties | `gsc-site-management` |
| Search analytics, keywords, pages, comparisons, SEO opportunities | `gsc-search-analytics` |
| URL indexing, coverage, robots, canonical, mobile usability | `gsc-indexing` |
| Sitemap listing, detail, submission | `gsc-sitemaps` |
| Charts and visual reports | `gsc-visualize` |
| SEO recommendations | Search analytics scripts + local page/source review when available |

## Core Rules

1. Always prefer API data over estimates when GSC access is configured.
2. GSC data is delayed by roughly 2-3 days; mention this when interpreting recent performance.
3. URL Inspection API has daily quota limits; batch checks should be limited and intentional.
4. Do not hard-code private project paths, site URLs, service account filenames, or output folders.
5. Never commit service account JSON files or exported private GSC data to a public repository.

## Common Workflows

Health check:

```bash
python3 .agents/skills/gsc-analytics/scripts/get_performance_overview.py --days 28
python3 .agents/skills/gsc-analytics/scripts/get_advanced_search_analytics.py --mode opportunities --days 30
```

Page optimization:

```bash
python3 .agents/skills/gsc-analytics/scripts/get_search_by_page_query.py \
  --page "https://www.example.com/blog/example-article" --days 30
```

Index inspection:

```bash
python3 .agents/skills/gsc-analytics/scripts/inspect_url.py \
  --url "https://www.example.com/blog/example-article"
```

Visualization:

```bash
python3 .agents/skills/gsc-analytics/scripts/get_search_analytics.py \
  --dimensions date --days 30 --output json
python3 .agents/skills/gsc-analytics/scripts/visualize.py \
  --input ./gsc-output/gsc_output.json --chart_type trend --metrics clicks,impressions
```
