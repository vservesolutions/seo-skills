---
name: "seo-backlinks"
description: "Backlink profile analysis — referring domains, anchor text distribution, toxic link detection, competitor link gap. Works with free sources (Common Crawl, Moz free tier, Bing Webmaster). Use when user says \"backlinks\", \"link profile\", \"referring domains\", \"anchor text\", \"toxic links\", \"link gap\", \"disavow\", or \"backlink audit\". Also use when the user asks why a competitor outranks them, how to build authority or earn links, or wants an off-page growth plan."
category: "link-building"
platforms: ["claude-code"]
platform_source: "declared"
repo: "meshcode-ai/skills"
repo_url: "https://github.com/meshcode-ai/skills"
source: "https://github.com/meshcode-ai/skills/blob/HEAD/skills/seo-backlinks/SKILL.md"
raw_source: "https://raw.githubusercontent.com/meshcode-ai/skills/HEAD/skills/seo-backlinks/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 4
collected: "2026-11-13"
---

<!-- Claude Code skill · meshcode-ai/skills · skills/seo-backlinks/SKILL.md · MIT
     Source: https://github.com/meshcode-ai/skills/blob/HEAD/skills/seo-backlinks/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Backlink Profile

## Data Sources (Free First)
Common Crawl index (always available), Moz free tier, Bing Webmaster. **Always state which sources you used and their coverage limits** — never present free-source data as complete. Paid APIs only when the user has keys.

## Framework
- Referring domains ÷ total links ratio collapsing = link-scheme smell
- Exact-match anchors >~20% = over-optimization risk
- Toxic links: link networks, irrelevant or spam-adjacent sites → disavow candidates only when evidence exists
- Competitor gap: domains linking to 2+ competitors but not us = outreach targets

Correlation with AI citations is weak (~0.27) vs brand mentions (~0.74) → run alongside `seo-aeo-geo`.

## Output
Health 0-100, anchor distribution table, evidence-backed toxic candidates, top 10 gap domains.
