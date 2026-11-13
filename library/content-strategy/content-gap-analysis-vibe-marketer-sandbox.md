---
name: "content-gap-analysis"
description: "Runs competitive content gap analysis: research a company and competitors, fetch sitemaps, categorize URLs, write strategy reports, and compare gaps. Use when the user asks for content strategy analysis, sitemap analysis, competitor content gaps, or content-gap-analysis."
category: "content-strategy"
platforms: ["codex"]
platform_source: "detected"
repo: "vibe-marketer-sandbox/competitor-content-audit"
repo_url: "https://github.com/vibe-marketer-sandbox/competitor-content-audit"
source: "https://github.com/vibe-marketer-sandbox/competitor-content-audit/blob/HEAD/skills/content-gap-analysis/SKILL.md"
raw_source: "https://raw.githubusercontent.com/vibe-marketer-sandbox/competitor-content-audit/HEAD/skills/content-gap-analysis/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Codex skill · vibe-marketer-sandbox/competitor-content-audit · skills/content-gap-analysis/SKILL.md · MIT
     Source: https://github.com/vibe-marketer-sandbox/competitor-content-audit/blob/HEAD/skills/content-gap-analysis/SKILL.md
     Detected by: detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Content Gap Analysis

Portable **Agent Skill** for any AI agent that can run shell commands and read markdown files.

## Setup (agent does this — do not ask the user to run install commands)

Also follow root [AGENTS.md](../../AGENTS.md) for skill placement (copy/symlink into the current agent's skills directory when applicable).

Before any analysis, ensure the CLI works from the repo/workspace root:

1. If `venv/` does not exist, create it:
   - Mac/Linux: `python3 -m venv venv`
   - Windows: `python -m venv venv`
2. Activate it in the shell you will use for CLI commands:
   - Mac/Linux: `source venv/bin/activate`
   - Windows PowerShell: `.\venv\Scripts\Activate.ps1`
3. Install (or reinstall) the package: `pip install -e .`
4. Verify: `content-gap-analysis --help`

If install fails (e.g. `externally-managed-environment`), use the venv path above — never ask the user to fix Python themselves unless setup is impossible after retry.

Requires **company name** and **domain** from the user (e.g. Clay, clay.com).

## Instructions

1. Complete **Setup** above first.
2. Read [workflows/orchestrator.md](../../workflows/orchestrator.md) and follow it step by step.
3. Run CLI commands from the repo/workspace root (with the venv activated).
4. At every **CHECKPOINT** in the orchestrator, stop and wait for user approval.
5. Read workflow files when needed — do not skip steps:
   - [workflows/research-workflow.md](../../workflows/research-workflow.md)
   - [workflows/strategy-workflow.md](../../workflows/strategy-workflow.md)
   - [workflows/compare-workflow.md](../../workflows/compare-workflow.md)
   - [workflows/guidelines.md](../../workflows/guidelines.md)
   - [references/semantic-categories.md](../../references/semantic-categories.md)

## CLI

```bash
content-gap-analysis init --name "Company" --domain example.com
content-gap-analysis fetch-sitemap --project-slug example --company-type main-company --domain example.com
content-gap-analysis analyze-architecture --sitemap output/example/main-company/sitemap.xml
content-gap-analysis validate-compare --project-slug example
```

Each command prints a `Next:` line — follow it.

## Output

Reports are written to `output/{project-slug}/` using kebab-case folders (`main-company`, `competitor-1`, etc.).

## One-shot prompt

```
Follow AGENTS.md.

Set up this project if needed, then analyze {Company} ({domain}) vs their top 3 competitors.
Stop at each checkpoint for my approval.
```
