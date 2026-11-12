---
name: "competitor-geo-watch"
description: "Watches a list of competitor URLs and alerts when their GEO readiness score changes. Runs weekly audits via geo-audit-skill and reports changes. Use when tracking competitor AI-search visibility."
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "josezuma/competitor-geo-watch"
repo_url: "https://github.com/josezuma/competitor-geo-watch"
source: "https://github.com/josezuma/competitor-geo-watch/blob/HEAD/SKILL.md"
raw_source: "https://raw.githubusercontent.com/josezuma/competitor-geo-watch/HEAD/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-12"
---

<!-- Unspecified skill · josezuma/competitor-geo-watch · SKILL.md · MIT
     Source: https://github.com/josezuma/competitor-geo-watch/blob/HEAD/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Competitor GEO Watch

Monitors competitor AI-search visibility over time.

## Setup
```bash
pip install requests
python scripts/watch.py --competitors competitors.txt
```

## Output
Weekly delta report: who improved, who declined, who added llms.txt.
