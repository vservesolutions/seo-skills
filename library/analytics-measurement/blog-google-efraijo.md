---
name: "blog-google"
description: "Per-blog-post Google API access for Acme — surface GSC indexation status, search performance (clicks/impressions/CTR/position), and GA4 organic traffic for any individual blog post. Wraps the same backend as `seo-google` but scoped to a single URL/slug for blog-publishing workflows. Use when user says \"is this blog indexed\", \"blog GSC stats\", \"blog organic traffic\", \"submit blog to indexing\", \"url inspection for post\"."
category: "analytics-measurement"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "efraijo/operator-seo-skill"
repo_url: "https://github.com/efraijo/operator-seo-skill"
source: "https://github.com/efraijo/operator-seo-skill/blob/HEAD/skills/monitoring/blog-google/SKILL.md"
raw_source: "https://raw.githubusercontent.com/efraijo/operator-seo-skill/HEAD/skills/monitoring/blog-google/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · efraijo/operator-seo-skill · skills/monitoring/blog-google/SKILL.md · MIT
     Source: https://github.com/efraijo/operator-seo-skill/blob/HEAD/skills/monitoring/blog-google/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Blog Google APIs (Acme)

Per-post wrapper around the [`seo-google`](../../seo/seo-google/SKILL.md) skill.
Same Python scripts; blog-orchestrator routes here for slug-based queries
during the publish workflow.

Vendored from [claude-blog](https://github.com/AgriciDaniel/claude-blog) (MIT)
on 2026-04-27.

## Configuration

Reuses `~/.config/acme-seo/google-api.json` from `seo-google`. No separate
config needed.

## Commands

### `/blog google gsc <slug>`
Search Console stats for a single blog post.
```bash
SLUG="influencer-audience-intelligence"
SILO="network-intelligence"
URL="https://acme.com/blog/$SILO/$SLUG"
${SEO_SKILL_ROOT:-$HOME/.claude/skills/seo}/scripts/venv/bin/python \
  ${SEO_SKILL_ROOT:-$HOME/.claude/skills/seo}/scripts/gsc_query.py acme.com \
  --filter-url "$URL" --days 30
```

### `/blog google inspect <slug>`
URL Inspection — is it indexed? When was it last crawled? Coverage state?
```bash
${SEO_SKILL_ROOT:-$HOME/.claude/skills/seo}/scripts/venv/bin/python \
  ${SEO_SKILL_ROOT:-$HOME/.claude/skills/seo}/scripts/gsc_inspect.py "$URL"
```

### `/blog google index <slug>`
Submit blog post to Indexing API on publish.

**Auto-called by `blog_finalize.py`** on publish — manual invocation rarely needed.

```bash
${SEO_SKILL_ROOT:-$HOME/.claude/skills/seo}/scripts/venv/bin/python \
  ${SEO_SKILL_ROOT:-$HOME/.claude/skills/seo}/scripts/indexing_notify.py "$URL"
```

### `/blog google stats <slug> [--days N]`
Combined GSC + GA4 dashboard for a single post.
```bash
# Convenience wrapper — runs gsc_query + ga4_report scoped to slug
```

## Integration with Publish Workflow (UC-1)

Per the publish-pipeline flow (UC-1):

```
1. Author finalizes article in `intermediate/<slug>.mdx`
2. PostToolUse hook auto-runs `blog_preflight.py` + `/blog factcheck`
3. Author moves to `published/`
4. blog_finalize.py auto-triggers:
   ├─ python indexing_notify.py "https://acme.com/blog/<silo>/<slug>"
   ├─ python drift_baseline.py "https://acme.com/blog/<silo>/<slug>" --label "publish-day"
   └─ python gsc_inspect.py "https://acme.com/blog/<silo>/<slug>" --schedule "+7d"
```

## Critical Design Rules

- **§6.1 Critic reads intake first** — caller must load article frontmatter (`silo`, target keyword) before interpreting indexation status
- **§6.7 Always dry-run** Indexing API submissions (200/day quota)
- **§6.12 GSC URL Inspection** — always force fresh

## Output Paths

```
${WORKSPACE_ROOT:-$HOME/.claude/workspace}/projects/acme/research/seo/raw/
├── inspect-{slug}-{YYYY-MM-DD}.json
└── gsc-{slug}-{YYYY-MM-DD}.json
```
