---
name: "technical-audit"
description: "Run a 120-point audit across crawl/index, rendering/speed, on-page, content/E-E-A-T, architecture, schema, AI search, local, links, and measurement. Use for site audits and pre-launch checks."
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "detected"
repo: "harryroger798/seo-agent-kit"
repo_url: "https://github.com/harryroger798/seo-agent-kit"
source: "https://github.com/harryroger798/seo-agent-kit/blob/HEAD/skills/technical-audit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/harryroger798/seo-agent-kit/HEAD/skills/technical-audit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Claude Code skill · harryroger798/seo-agent-kit · skills/technical-audit/SKILL.md · MIT
     Source: https://github.com/harryroger798/seo-agent-kit/blob/HEAD/skills/technical-audit/SKILL.md
     Detected by: detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Technical Audit

## When to use

Use when the user asks for a site audit, technical SEO review, pre-launch check, or “why isn’t this page ranking?”

## Process

1. Run `python scripts/audit_url.py <url>` for the surface check.
2. Run `python scripts/sitemap_check.py <url>` for sitemap and status.
3. Open the 120-point checklist: `checklists/technical-audit-120.md`.
4. Score each item pass/fail. Do not average across categories.
5. Identify the top three constraints by impact.
6. Return a fix list: symptom, cause, fix, owner, effort, expected effect.

## Output

- `audit.md` — score, findings, fix list.
- `audit.json` — machine-readable findings.
- `screenshots/` — before evidence where relevant.

## Priority rules

1. Indexability of money pages.
2. Server response time and rendering.
3. Canonicals, duplicates, soft 404s.
4. Internal links to money pages.
5. Content proof and intent match.
6. Schema and entity clarity.
7. Links and local signals.

## QA

- [ ] Money pages indexed.
- [ ] robots.txt and sitemap valid.
- [ ] No accidental noindex or cross-canonical.
- [ ] Primary content in server HTML.
- [ ] LCP/INP/CLS at p75.
- [ ] Internal links to money pages.
- [ ] Schema matches visible facts.
- [ ] No manual actions.
- [ ] Fix list has owners and effort.
- [ ] Evidence captured.

## References

- `checklists/technical-audit-120.md`
- `prompts/10-qa.md`
- `scripts/audit_url.py`
- `scripts/sitemap_check.py`
