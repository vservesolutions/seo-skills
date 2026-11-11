---
name: "seo-dataforseo"
description: "DataForSEO live SERP, search volume, backlink, and keyword ranking API connector. Provides enterprise-grade live SERP data without manual browser scraping."
summary: "Connects to live SEO APIs to retrieve search volume, rankings, and backlink data."
category: "keyword-research"
platforms: ["claude-code", "windsurf", "antigravity"]
platform_source: "declared"
repo: "seoskillsai/seo-skills-ai"
repo_url: "https://github.com/seoskillsai/seo-skills-ai"
source: "https://github.com/seoskillsai/seo-skills-ai/blob/HEAD/skills/seo-dataforseo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/seoskillsai/seo-skills-ai/HEAD/skills/seo-dataforseo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 21
collected: "2026-11-11"
---

<!-- Claude Code, Windsurf, Antigravity skill · seoskillsai/seo-skills-ai · skills/seo-dataforseo/SKILL.md · MIT
     Source: https://github.com/seoskillsai/seo-skills-ai/blob/HEAD/skills/seo-dataforseo/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# DataForSEO Live SERP & Keyword Data Connector

Set `DATAFORSEO_LOGIN` and `DATAFORSEO_PASSWORD` in the environment. `python scripts/dataforseo_api.py "<keyword>"` calls the live SERP endpoint. Missing credentials return `UNAVAILABLE` (no sample rows).

This is first-party HTTP in this repo. Ahrefs / SE Ranking / Profound remain third-party MCP servers you install separately.


---

## 🛠️ CLI Commands

```bash
# Fetch live Google SERP for target keyword
python scripts/dataforseo_api.py --query "ai seo tools" --location "United States"

# Pull live backlink summary
python scripts/dataforseo_api.py --domain "example.com" --action "backlinks"
```
