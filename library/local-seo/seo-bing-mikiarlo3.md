---
name: "seo-bing"
description: "Bing Webmaster Tools + IndexNow extension. Microsoft Copilot citations are fed by the Bing index; this skill makes Bing visibility, link data, and IndexNow URL submission first-class."
category: "local-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "mikiarlo3/enso-SEO-GEO"
repo_url: "https://github.com/mikiarlo3/enso-SEO-GEO"
source: "https://github.com/mikiarlo3/enso-SEO-GEO/blob/HEAD/extensions/bing-webmaster/skills/seo-bing/SKILL.md"
raw_source: "https://raw.githubusercontent.com/mikiarlo3/enso-SEO-GEO/HEAD/extensions/bing-webmaster/skills/seo-bing/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 7
collected: "2026-11-10"
---

<!-- Unspecified skill · mikiarlo3/enso-SEO-GEO · extensions/bing-webmaster/skills/seo-bing/SKILL.md · MIT
     Source: https://github.com/mikiarlo3/enso-SEO-GEO/blob/HEAD/extensions/bing-webmaster/skills/seo-bing/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# seo-bing

The non-Google indexing surface. Google still rejects IndexNow (per
Gary Illyes, multiple SOTR episodes 2024-2025), so this skill is
specifically for **Amazon/Bing/Naver/Seznam.cz/Yandex/Yep indexing** and
**Microsoft Copilot AI citation** (which pulls from the Bing index).

## Prerequisites

- Run `extensions/bing-webmaster/install.sh` or `install.ps1`.
- A Bing Webmaster Tools API key.
- Optional: an IndexNow host key (32+ chars) published at the URL
  declared as `INDEXNOW_KEY_LOCATION`.

## Routing

| Command | Underlying script |
|---|---|
| `/seo bing links <url>` | `enso-seo run bing_webmaster.py links <url>` |
| `/seo bing compare <urlA> <urlB>` | `enso-seo run bing_webmaster.py compare <urlA> <urlB>`; both properties must be registered to the API account |
| `/seo bing submit <url>` (single URL) | `enso-seo run indexnow_submit.py --host ... --urls <url>` |
| `/seo bing submit-batch <file>` | `enso-seo run indexnow_submit.py --host ... --urls-file <file>` |
| `/seo bing verify-indexnow` | `enso-seo run indexnow_submit.py --host ... --verify-only` |

## When this skill applies

- The user is publishing new pages and wants Microsoft Copilot
  citation eligibility (Bing index ingestion).
- The user wants to nudge Amazon/Bing/Naver/Seznam.cz/Yandex/Yep indexing for fresh
  URLs.
- The user manages both properties and wants to compare their Bing link data.
  For an arbitrary competitor, route to DataForSEO, Moz, or Common Crawl.

## Cross-skill delegation

- For Google indexing (very different model, sitemap-driven, no
  IndexNow), use `seo-google indexing`.
- For multi-source backlink confidence weighting, fall back to
  `seo-backlinks` which already integrates Bing + Moz + CC.
