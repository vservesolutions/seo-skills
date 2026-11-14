---
name: "metadata-onpage-seo"
description: "Audit and draft on-page SEO fundamentals (titles, meta descriptions, keyphrases) across every indexable page of a client site. Use after the Technical Health agent has confirmed which pages are actually serving correctly. Also use when a client asks for metadata review, title/description drafts, or reports a page ranking poorly."
category: "on-page-seo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "Antoine130676/geo-seo-agent-pipeline"
repo_url: "https://github.com/Antoine130676/geo-seo-agent-pipeline"
source: "https://github.com/Antoine130676/geo-seo-agent-pipeline/blob/HEAD/skills/metadata-onpage-seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Antoine130676/geo-seo-agent-pipeline/HEAD/skills/metadata-onpage-seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · Antoine130676/geo-seo-agent-pipeline · skills/metadata-onpage-seo/SKILL.md · MIT
     Source: https://github.com/Antoine130676/geo-seo-agent-pipeline/blob/HEAD/skills/metadata-onpage-seo/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Metadata & On-Page SEO Agent

## Job
Audit and draft on-page SEO fundamentals across every indexable page.

## Prerequisite
Only run on pages the Technical Health agent has confirmed are serving correctly. Skip pages flagged as broken/blocked until infra is fixed.

## Checklist

- [ ] Enumerate all indexable pages — don't rely on an obvious sitemap list alone. Check for placeholder/test pages that are still live and indexed.
- [ ] For each page, check: focus keyphrase, SEO title, meta description. Flag any that are empty or still on a template default.
- [ ] Verify pixel-width limits on titles/descriptions, not just character counts — the practical limit runs shorter than most platforms' stated character limit.
- [ ] Draft missing/weak metadata, keeping the keyphrase naturally embedded rather than stuffed.
- [ ] Before editing anything, verify the slug matches the intended page. Editing the wrong page's keyphrase because the slug wasn't checked first is an easy, real mistake.
- [ ] Confirm changes are live via out-of-band verification (view-source or an incognito fetch), not just a tool re-fetch.

## Output format

Page-by-page metadata status, plus ready-to-paste drafts for anything missing or weak.

## Handoff
Pass completed/corrected metadata state to the GEO Agent — schema and llms.txt work depends on metadata already being correct.

## Task state (shared store)

Never edit `tasks.json` by hand. Use `tools/tasks_cli.py` (protocol in
`docs/orchestrator/CONVENTIONS.md`), always identifying yourself with `--as metadata-onpage-seo`:

- Start work: `status <id> in_progress --as metadata-onpage-seo`
- Blocked: `status <id> blocked --as metadata-onpage-seo --blocked-reason "<why>"`
- Finished: append a changelog entry (`changelog ...`, with the verification method and the
  side effects you checked), then `status <id> review --as metadata-onpage-seo`.
- **Never mark a task `done`.** Only `project-manager` closes tasks, after checking the safety gate.
  The store refuses `done` from any other agent.
