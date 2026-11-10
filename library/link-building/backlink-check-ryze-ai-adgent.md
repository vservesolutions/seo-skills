---
name: "backlink-check"
description: "Backlink profile for any domain — referring domains, authority, anchors, new/lost links, and a side-by-side vs a competitor. Use when asked \"check my backlinks\", \"backlink profile of X\", \"who links to them\", or \"link gap vs competitor\"."
summary: "Evaluates domain backlink profiles, referring domains, anchor distributions, and competitive link gaps."
category: "link-building"
platforms: ["claude-code"]
platform_source: "detected"
repo: "Ryze-AI-Adgent/open-seo-mcp-skills"
repo_url: "https://github.com/Ryze-AI-Adgent/open-seo-mcp-skills"
source: "https://github.com/Ryze-AI-Adgent/open-seo-mcp-skills/blob/HEAD/skills/backlink-check/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Ryze-AI-Adgent/open-seo-mcp-skills/HEAD/skills/backlink-check/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 8941
collected: "2026-11-10"
---

<!-- Claude Code skill · Ryze-AI-Adgent/open-seo-mcp-skills · skills/backlink-check/SKILL.md · MIT
     Source: https://github.com/Ryze-AI-Adgent/open-seo-mcp-skills/blob/HEAD/skills/backlink-check/SKILL.md
     Detected by: detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Backlink Check

## Requires

The free Ryze MCP connector (`https://connector.get-ryze.ai/mcp`). Claude Code: `claude mcp add ryze --transport http https://connector.get-ryze.ai/mcp`. claude.ai / Desktop / Cursor: add it as a custom connector with the same URL. Setup: https://www.get-ryze.ai/how-to-connect-claude-to-google-meta-ads-mcp?utm_source=github&utm_content=open-seo-mcp-skills

## Workflow

1. **Source.** Use the workspace's DataForSEO Backlinks tools (`native__get_provider_docs`, provider `dataforseo`, for exact request shapes): `summary` for the profile, `referring_domains` for the domain list, `anchors` for anchor distribution. If DataForSEO backlinks aren't exposed, fall back to a connected `ahrefs` or `semrush` provider; if neither, stop and say which connection is missing — never fabricate link counts.
2. **Target profile.** Pull summary + top ~100 referring domains by rank for the user's domain: total backlinks, referring domains, dofollow share, authority distribution.
3. **Competitor (if named).** Same pulls for the competitor. Compute the **link gap**: strong domains linking to them but not to the user — that's the outreach list.
4. **Quality read.** Flag: spammy anchor patterns (exact-match commercial anchors at scale), link velocity spikes, a profile dominated by low-authority domains.
5. **Traffic cross-check (own site only).** `google_analytics__runRawReport` — referral sessions by source; note which linking domains actually send visitors.

## Output

Verdict first (profile strength in one paragraph, and the gap vs the competitor if asked), then: profile summary table, top referring domains, anchor distribution, and — when a competitor was given — the link-gap outreach list (domain, authority, page linking to competitor). All third-party numbers labeled as index estimates.
