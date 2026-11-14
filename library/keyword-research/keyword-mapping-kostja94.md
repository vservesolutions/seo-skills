---
name: "keyword-mapping"
description: "Maps keyword clusters to existing website assets and recommends reuse, improvement, consolidation review or a new page."
summary: "Maps keyword clusters to existing website assets for optimization or consolidation."
category: "keyword-research"
platforms: ["claude-code"]
platform_source: "declared"
repo: "kostja94/marketing-skills"
repo_url: "https://github.com/kostja94/marketing-skills"
source: "https://github.com/kostja94/marketing-skills/blob/HEAD/skills/keyword-mapping/SKILL.md"
raw_source: "https://raw.githubusercontent.com/kostja94/marketing-skills/HEAD/skills/keyword-mapping/SKILL.md"
ref: "HEAD"
discovered_via: "awesome-seo-agent-skills"
license: "MIT"
stars: 1072
collected: "2026-11-14"
---

<!-- Claude Code skill · kostja94/marketing-skills · skills/keyword-mapping/SKILL.md · MIT
     Source: https://github.com/kostja94/marketing-skills/blob/HEAD/skills/keyword-mapping/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Keyword Mapping

Start with the clusters, site inventory and product capabilities. Obtain candidate URLs from a sitemap, navigation, crawl or user inventory. Open the page to verify the action it supports, promised result and conversion path. If inventory is incomplete, mark coverage unknown.

Reuse a page that serves the task. Improve it for a supported task with missing content or discoverability. When multiple pages serve the same task, review overlap before suggesting consolidation. Recommend a new page only for a distinct supported task with no adequate asset. A separate cluster can still fit a distinct mode on an existing tool. Defer unsupported or uncertain tasks.

Return cluster, current URL (or proposed asset type), action, rationale and required verification. Send implementation to the relevant page or content skill. Keep redirects, publishing and content production as separate decisions.

When assets are unavailable, return a provisional map with illustrative relative URLs and stated product assumptions. Group same-page variants under one URL. Explain when a modifier warrants an on-page option versus a dedicated landing page. Assign a blog guide when the user wants instruction and evidence supports that reading. Avoid generating an entire modifier-by-page matrix from an untested pattern.


When an existing site's inventory is missing or uncertain, use [site-structure-inventory](https://github.com/kostja94/vibe-coding/tree/main/skills/site-structure-inventory) to verify live pages, URL families and discovery gaps before making recommendations.
