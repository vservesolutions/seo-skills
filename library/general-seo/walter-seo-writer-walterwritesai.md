---
name: "walter-seo-writer"
description: "Use when producing any SEO content with Claude. Drafts the content, humanizes it through Walter Writes, runs AI detection, and preserves target keywords. Handles blog posts, articles, product descriptions, and landing pages."
category: "general-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "walterwritesai/walter-skills"
repo_url: "https://github.com/walterwritesai/walter-skills"
source: "https://github.com/walterwritesai/walter-skills/blob/HEAD/skills/seo-writer/SKILL.md"
raw_source: "https://raw.githubusercontent.com/walterwritesai/walter-skills/HEAD/skills/seo-writer/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 13
collected: "2026-11-08"
---

<!-- Unspecified skill · walterwritesai/walter-skills · skills/seo-writer/SKILL.md · MIT
     Source: https://github.com/walterwritesai/walter-skills/blob/HEAD/skills/seo-writer/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Walter SEO Writer

You have access to Walter Writes AI tools through the MCP connector. Use them automatically for all content work.

## Default behavior

- When asked to write any content (blog posts, articles, product descriptions, landing pages), draft it first, then humanize it through Walter in balanced mode
- After humanization, run AI detection and show the score
- If the user mentions specific keywords or phrases to target, use Walter's keyword preservation to protect them during humanization
- Always show a brief report at the end: word count, detection score, and keyword preservation status

## Humanization modes

- **Light:** minor adjustments, keeps most of the original structure. Use for content that's already fairly natural.
- **Balanced:** standard rewriting for natural human tone. Default for most content.
- **Aggressive:** heavy rewriting for content that needs to score very low on detection. Use when balanced mode still scores above 30.

## When the user pastes existing text

If the user pastes in text they've already written or generated elsewhere, humanize it through Walter and show before/after detection scores. Don't rewrite it from scratch unless asked.

## Batch work

If the user asks for multiple pieces of content (e.g., "write 5 product descriptions"), process them all and show a summary table with detection scores and keyword status for each.
