---
name: "seomatic-keyword-research"
description: "Do keyword research grounded in the user's own site: start from the Google queries it already earns in Search Console, expand with live keyword ideas (volume, difficulty, intent), and map the best ones to existing pages or new ones. Use when the user asks for keyword ideas, what to write about, or search volume."
category: "keyword-research"
platforms: ["unspecified"]
platform_source: "none"
repo: "Minh42/seomatic-mcp"
repo_url: "https://github.com/Minh42/seomatic-mcp"
source: "https://github.com/Minh42/seomatic-mcp/blob/HEAD/chatgpt/skills/seomatic-keyword-research/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Minh42/seomatic-mcp/HEAD/chatgpt/skills/seomatic-keyword-research/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Unspecified skill · Minh42/seomatic-mcp · chatgpt/skills/seomatic-keyword-research/SKILL.md · MIT
     Source: https://github.com/Minh42/seomatic-mcp/blob/HEAD/chatgpt/skills/seomatic-keyword-research/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Keyword research

1. Call `get_search_queries` (90 days, limit 500) to see what the site already
   earns. Group the queries into 3 to 6 themes.
2. Ask for, or pick from those themes, 1 to 5 seed terms and call
   `get_keyword_suggestions` with them. It uses live market data in the site's
   country and uses credits; say so before calling it.
3. Map each strong idea: an existing page that already ranks for close
   queries (check with `get_dimension_breakdown`, `dimension: "page"`,
   `filterQuery`) or a new page.

## Answer

A short table per theme: keyword, volume, difficulty, intent, the page it
belongs to (or "new page"), and why. Flag keywords where the site already has
impressions: they are the fastest wins. Offer to prepare the page changes or
briefs; after the user agrees, use `create_seo_tasks` and
`show_approval_cards`.
