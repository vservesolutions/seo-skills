---
name: "seo-google"
description: "Google SEO APIs for acme.com: Search Console (Search Analytics, URL Inspection), Indexing API v3, CrUX field data with 25-week history, GA4 organic traffic. Provides programmatic access to Google's own SEO data — closes the manual-GSC-checking gap. Use when user says \"search console\", \"GSC\", \"URL inspection\", \"submit to indexing\", \"indexing API\", \"CrUX\", \"core web vitals trend\", \"ga4 organic\", \"field data\"."
category: "analytics-measurement"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "efraijo/operator-seo-skill"
repo_url: "https://github.com/efraijo/operator-seo-skill"
source: "https://github.com/efraijo/operator-seo-skill/blob/HEAD/skills/monitoring/seo-google/SKILL.md"
raw_source: "https://raw.githubusercontent.com/efraijo/operator-seo-skill/HEAD/skills/monitoring/seo-google/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · efraijo/operator-seo-skill · skills/monitoring/seo-google/SKILL.md · MIT
     Source: https://github.com/efraijo/operator-seo-skill/blob/HEAD/skills/monitoring/seo-google/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Google SEO APIs (Acme)

Direct access to Google's own SEO data for acme.com. Bridges the gap between
crawl-based analysis (existing skills/scripts/run-apify-*.sh) and Google's
real-time field data: Chrome user metrics, indexation status, search performance,
organic traffic.

Vendored from [claude-seo](https://github.com/AgriciDaniel/claude-seo) (MIT) on
2026-04-27. Adapted for acme namespace + service account auth.

## Configuration

Config file: `~/.config/acme-seo/google-api.json`

```json
{
  "service_account_path": "~/.config/<slug>-seo/service-account.json",
  "default_property": "sc-domain:acme.com",
  "ga4_property_id": "<acme GA4 property ID>"
}
```

Service account email must be added as User in:
- Search Console (Owner role for Indexing API)
- GA4 property (Viewer role)

## Commands

### `/seo google check`
Verify credentials are configured.
```bash
venv/bin/python scripts/google_auth.py --check --json
```

### `/seo google gsc <domain> [--days N]`
Search Console clicks/impressions/CTR/position by URL or query.
```bash
venv/bin/python scripts/gsc_query.py acme.com --days 30
```

### `/seo google inspect <url>`
URL Inspection API — programmatic indexation status.
```bash
venv/bin/python scripts/gsc_inspect.py "https://acme.com/blog/network-intelligence/influencer-audience-intelligence"
```

### `/seo google index <url>`
Submit URL to Indexing API (200/day quota).
```bash
venv/bin/python scripts/indexing_notify.py "https://acme.com/blog/<silo>/<slug>"
```

### `/seo google crux <url>`
25-week Core Web Vitals field-data trend.
```bash
venv/bin/python scripts/crux_history.py acme.com --weeks 25
```

### `/seo google ga4 <domain> [--days N]`
Organic traffic by landing page from GA4.
```bash
venv/bin/python scripts/ga4_report.py acme.com --days 30
```

## Critical Design Rules (per `~/.claude/rules/seo-constitution.md`)

- **§6.7 Always dry-run** Indexing API submissions (200/day quota)
- **§6.12 GSC URL Inspection** — always force fresh, never trust cached status
- **§6.13 GA4 attribution** — explicitly use Data-Driven model, never default Last-Click
- **§6.3 Raw archive accumulates** — every `gsc_query.py` run saves to
  `${WORKSPACE_ROOT:-$HOME/.claude/workspace}/projects/acme/research/seo/raw/gsc-{property}-{ts}.json`

## Output Paths

```
${WORKSPACE_ROOT:-$HOME/.claude/workspace}/projects/acme/research/seo/raw/
├── gsc-acme-{YYYY-MM-DD}.json
├── inspect-{slug}-{YYYY-MM-DD}.json
├── crux-acme-{YYYY-MM-DD}.json
└── ga4-acme-{YYYY-MM-DD}.json
```

## References

- [Auth setup](references/auth-setup.md)
- [Search Console API](references/search-console-api.md)
- [Indexing API](references/indexing-api.md)
- [PageSpeed + CrUX API](references/pagespeed-crux-api.md)
- [GA4 Data API](references/ga4-data-api.md)
- [Rate limits + quotas](references/rate-limits-quotas.md)
