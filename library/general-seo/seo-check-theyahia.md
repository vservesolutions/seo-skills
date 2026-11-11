---
name: "seo-check"
description: "Проверка SEO-позиций сайта в Яндексе"
summary: "Checks SEO rankings for websites in Yandex."
category: "general-seo"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "theYahia/YaAll"
repo_url: "https://github.com/theYahia/YaAll"
source: "https://github.com/theYahia/YaAll/blob/HEAD/mcp/yandex-webmaster-mcp/.claude/skills/seo-check/SKILL.md"
raw_source: "https://raw.githubusercontent.com/theYahia/YaAll/HEAD/mcp/yandex-webmaster-mcp/.claude/skills/seo-check/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 12
collected: "2026-11-11"
---

<!-- Claude Code skill · theYahia/YaAll · mcp/yandex-webmaster-mcp/.claude/skills/seo-check/SKILL.md · MIT
     Source: https://github.com/theYahia/YaAll/blob/HEAD/mcp/yandex-webmaster-mcp/.claude/skills/seo-check/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# /seo-check

1. Call get_hosts to find the site and its host_id
2. Call get_popular_search_queries (host_id; date range defaults to the last 7 days)
3. Call get_indexing for indexing status, and get_indexing_history to spot deindexing
4. Format a summary: top queries with positions/shows/clicks, indexed pages, any trend
