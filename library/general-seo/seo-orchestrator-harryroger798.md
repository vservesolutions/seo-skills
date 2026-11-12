---
name: "seo-orchestrator"
description: "Routes an SEO request to the right skill and pipeline, runs the three-question intake, checks tool connections, and enforces the two checkpoints. Use when the user asks for SEO help without naming a specific skill."
category: "general-seo"
platforms: ["claude-code", "codex"]
platform_source: "detected"
repo: "harryroger798/seo-agent-kit"
repo_url: "https://github.com/harryroger798/seo-agent-kit"
source: "https://github.com/harryroger798/seo-agent-kit/blob/HEAD/skills/seo-orchestrator/SKILL.md"
raw_source: "https://raw.githubusercontent.com/harryroger798/seo-agent-kit/HEAD/skills/seo-orchestrator/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-12"
---

<!-- Claude Code, Codex skill · harryroger798/seo-agent-kit · skills/seo-orchestrator/SKILL.md · MIT
     Source: https://github.com/harryroger798/seo-agent-kit/blob/HEAD/skills/seo-orchestrator/SKILL.md
     Detected by: detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO Orchestrator

## When to use

Use this skill when the request is broad — “help me with SEO,” “audit my site,” “grow my traffic,” “write me a content plan,” “what should I do next?” — or when the user has not named a specific pipeline.

## What you do

1. Read `kit.json` and confirm the capability list.
2. Ask the three intake questions. Stop.
3. After the answers, choose **one** pipeline:
   - Content → `skills/content-factory/SKILL.md`
   - Silo → `skills/silo-builder/SKILL.md`
   - Repurpose → `skills/repurposer/SKILL.md`
   - Listing → `skills/product-listing/SKILL.md`
   - Directory → `skills/directory-submission/SKILL.md`
   - Paid → `skills/paid-social/SKILL.md`
   - AI visibility → `skills/ai-visibility/SKILL.md`
   - Audit → `skills/technical-audit/SKILL.md`
   - Local → `skills/local-seo/SKILL.md`
4. State the pipeline, the canonical asset, the two checkpoints, and the tools you will use.
5. Run only that pipeline. Do not run three pipelines in one response.

## Intake

Ask exactly:

1. **Site** — domain or product URL.
2. **Outcome** — traffic, citations, listings, conversations, or revenue.
3. **Tools** — Ubersuggest MCP, AnswerThePublic, SpyFu, Mangools, GSC, GA4, or manual/CSV.

If the user says “I don't know,” propose one default based on the site type and ask them to confirm.

## Tool check

Read `mcp/tool-matrix.md`. For each tool:

- **MCP connected** → use it.
- **API key present** → use the API via a script or the operator's client.
- **Nothing** → ask for a CSV or say you will proceed without it. Never invent the data.

Never ask for a password, API key, or cookie in chat.

## Output

```text
Pipeline: <name>
Canonical asset: <article / listing / batch / campaign / report>
Checkpoint 1: brief/plan for approval
Checkpoint 2: publish/submit for approval
Tools: <connected> / <missing>
First action: <one sentence>
```

## Rules

- One pipeline per response.
- Cite or cut.
- No invented experience.
- No keyword density.
- One product link.
- Two checkpoints.
- If the request violates the rules, say so and offer the compliant alternative.

## References

- `AGENTS.md`
- `kit.json`
- `mcp/tool-matrix.md`
- `docs/00-start-here.md`
