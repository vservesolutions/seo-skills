---
name: "seo-google"
description: "Google SEO APIs: public PSI/CrUX plus optional Search Console Search Analytics and GA4 organic sessions from ~/.config/seoskillsai/gsc_ga4.json."
summary: "Fetches Google PageSpeed, Search Console analytics, and GA4 organic session metrics via APIs."
category: "analytics-measurement"
platforms: ["claude-code", "windsurf", "antigravity"]
platform_source: "declared"
repo: "seoskillsai/seo-skills-ai"
repo_url: "https://github.com/seoskillsai/seo-skills-ai"
source: "https://github.com/seoskillsai/seo-skills-ai/blob/HEAD/skills/seo-google/SKILL.md"
raw_source: "https://raw.githubusercontent.com/seoskillsai/seo-skills-ai/HEAD/skills/seo-google/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 21
collected: "2026-11-14"
---

<!-- Claude Code, Windsurf, Antigravity skill · seoskillsai/seo-skills-ai · skills/seo-google/SKILL.md · MIT
     Source: https://github.com/seoskillsai/seo-skills-ai/blob/HEAD/skills/seo-google/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Google SEO APIs & Real User Metrics

PageSpeed Insights and CrUX work without a user OAuth token. Search Console Search Analytics and GA4 organic sessions require a **local** OAuth client.

Create `~/.config/seoskillsai/gsc_ga4.json` (mode `0o600`) and run `python scripts/google_installed_app.py --setup`. Scopes: `webmasters.readonly`, `analytics.readonly`.

Until that file exists, `python scripts/gsc_query.py` and `python scripts/ga4_report.py` return `{"status": "UNAVAILABLE"}` with **no invented metrics**. MCP tools `seo_gsc` / `seo_ga4` do the same.

Do not wire this public plugin to any private analytics identity database.

---

## Credential gate

| Surface | Required local data | If missing |
| :--- | :--- | :--- |
| PSI / CrUX | none | live public APIs or UNAVAILABLE (never fake scores) |
| GSC Search Analytics | OAuth refresh token | `UNAVAILABLE` |
| GA4 organic sessions | OAuth refresh token **and** `ga4_property_id` | `UNAVAILABLE` |

---

## CLI

```bash
python scripts/google_installed_app.py --setup
python scripts/google_auth.py --status
python scripts/gsc_query.py --site "https://example.com" --filter striking-distance
python scripts/ga4_report.py --days 28
python scripts/crux_history.py --url "https://example.com"
```
