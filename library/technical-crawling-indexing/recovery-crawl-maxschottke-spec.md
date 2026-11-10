---
name: "recovery-crawl"
description: "Screaming Frog MCP crawl + issue classification. Crawls up to 500 URLs, extracts broken links, redirect chains, missing H1s, canonical errors, and missing meta descriptions. Classifies issues by severity with upgrade rules. Outputs structured issues.json to cache."
summary: "Crawls websites to extract technical SEO issues like broken links and missing metadata."
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "maxschottke-spec/seo-survival-kit"
repo_url: "https://github.com/maxschottke-spec/seo-survival-kit"
source: "https://github.com/maxschottke-spec/seo-survival-kit/blob/HEAD/plugins/seo-rescue/skills/recovery-crawl/SKILL.md"
raw_source: "https://raw.githubusercontent.com/maxschottke-spec/seo-survival-kit/HEAD/plugins/seo-rescue/skills/recovery-crawl/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 11
collected: "2026-11-10"
---

<!-- Claude Code skill · maxschottke-spec/seo-survival-kit · plugins/seo-rescue/skills/recovery-crawl/SKILL.md · MIT
     Source: https://github.com/maxschottke-spec/seo-survival-kit/blob/HEAD/plugins/seo-rescue/skills/recovery-crawl/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Recovery Crawl

Read and follow the full command specification:

1. Read `${CLAUDE_PLUGIN_ROOT}/commands/recovery-crawl.md` for the complete workflow.
2. Use Screaming Frog MCP tools (`sf_crawl`, `sf_crawl_progress`, `sf_generate_bulk_export`, `sf_export_crawl`) as specified.
3. After collecting data, call `node "${CLAUDE_PLUGIN_ROOT}/scripts/recovery-crawl.js"` helper functions to classify issues and write output.
4. Validate output against `${CLAUDE_PLUGIN_ROOT}/schemas/issues.schema.json`.
