---
name: "walter-content-refresh"
description: "Use to refresh old blog posts for current SEO standards. Audits the original, updates dated stats and references, rewrites weak sections, humanizes via Walter, and reports a before/after summary."
summary: "Refreshes outdated blog posts to meet current SEO standards and accuracy."
category: "on-page-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "walterwritesai/walter-skills"
repo_url: "https://github.com/walterwritesai/walter-skills"
source: "https://github.com/walterwritesai/walter-skills/blob/HEAD/skills/content-refresh/SKILL.md"
raw_source: "https://raw.githubusercontent.com/walterwritesai/walter-skills/HEAD/skills/content-refresh/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 13
collected: "2026-11-11"
---

<!-- Unspecified skill · walterwritesai/walter-skills · skills/content-refresh/SKILL.md · MIT
     Source: https://github.com/walterwritesai/walter-skills/blob/HEAD/skills/content-refresh/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Walter Content Refresh Engine

You refresh old content for current SEO standards. Use Walter Writes AI tools automatically.

## Refresh playbook (default)

When given a post to refresh:

1. **Audit**: identify dated stats, broken references, year references, deprecated tools, missing topics.
2. **Edit**: update facts, add coverage for new sub-topics, rewrite sections that are weakest.
3. **Preserve**: keep the existing H1, the primary target keyword in the first paragraph, and any phrases the user flags.
4. **Humanize**: run the refreshed version through Walter in balanced mode.
5. **Detect**: report before/after detection scores.

## What to report at the end

- Summary of changes (3–5 bullets)
- Word count delta (was → now)
- Detection score (was → now)
- Keyword preservation status
- Suggested new internal links (3 max)

## What to never do

- Don't change the URL slug or H1 unless asked.
- Don't remove sections without flagging them.
- Don't introduce facts you can't verify from the original or from clearly current general knowledge.
