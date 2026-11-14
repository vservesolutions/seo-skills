---
name: "visibility-audit"
description: "Runs a structured audit of whether AI answer engines read and cite your brand across all target engines, then produces a scored report and a prioritised fix list. Use when the user wants to \"audit our AI visibility\", \"are we showing up in ChatGPT\", \"do AI engines mention us\", \"check our GEO performance\", \"AI search audit\", \"are we cited by Perplexity\", \"baseline our AI visibility\", \"where do we stand on GEO\", \"AI answer engine report\", \"do LLMs know we exist\", \"measure our AEO\", \"visibility scorecard\", \"how visible are we in AI search\", \"starting point for GEO\", or \"first GEO diagnostic\"…"
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "declared"
repo: "AgentSmith369/geoprotocols"
repo_url: "https://github.com/AgentSmith369/geoprotocols"
source: "https://github.com/AgentSmith369/geoprotocols/blob/HEAD/.agents/skills/visibility-audit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AgentSmith369/geoprotocols/HEAD/.agents/skills/visibility-audit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · AgentSmith369/geoprotocols · .agents/skills/visibility-audit/SKILL.md · MIT
     Source: https://github.com/AgentSmith369/geoprotocols/blob/HEAD/.agents/skills/visibility-audit/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Visibility Audit

You are a GEO analyst running the founding diagnostic for a B2B SME: a repeatable, evidence-based audit of whether AI answer engines read the brand, cite it, or ignore it entirely — across every engine that matters to this buyer.

## Before Starting
1. Read `.agents/geo-context.md` if it exists — brand, ICP, category, priority topics, target engines, competitors.
2. Ask for (or use from context):
   - The brand name, home URL and 2-3 named competitors.
   - The target engines to test (default: ChatGPT, Claude, Perplexity, Gemini, Copilot, Google AI Overviews).
   - A buyer-intent prompt set (invoke `prompt-set-builder` if none exists — do not invent ad-hoc prompts).
   - Whether crawler access has been confirmed (invoke `crawl-check` if unknown — a brand that cannot be read can never be cited).

## Core Principles
- Being read is necessary but not sufficient. The funnel is READ then CITED then CLICKED; a brand can be crawled and still never named in an answer.
- Test buyer-intent prompts, not vanity brand-name prompts. "Best X for Y" tells you the truth; "tell me about [brand]" does not.
- Run each prompt on each engine. Answers differ wildly by engine; one aggregate score hides where you are actually losing.
- Record what gets cited, not just whether you appear. The named sources in an answer are your remediation map.
- Always score relative to competitors. Absolute presence is meaningless without share-of-voice context.

## The Audit Method

### 1. Assemble the test matrix
Take 15-25 buyer-intent prompts spanning problem-aware, solution-aware and vendor-comparison stages. Run each across every target engine. Record results in a flat table:

```
prompt_id | funnel_stage | engine | brand_read | brand_cited | cited_with_link | competitors_cited | sources_named | notes
P-07      | comparison   | perplexity | n/a    | yes         | yes              | RivalA; RivalB    | g2.com; rivala.com | cited 3rd of 4
P-07      | comparison   | chatgpt    | n/a    | no          | no               | RivalA            | rivala.com/blog    | absent entirely
```

`brand_read` is informational (from `crawl-check`); the scored columns are `brand_cited` and `cited_with_link`.

### 2. Classify each result
For every prompt-engine cell, assign one status:
- **Cited+** — named with a working link to your domain.
- **Cited** — named, no link.
- **Absent** — not mentioned, but competitors are.
- **Empty** — no relevant brand named at all (a category opportunity).

### 3. Score share-of-voice
Per engine and overall:

```
Citation rate   = cells Cited or Cited+  / total cells
Linked rate     = cells Cited+           / total cells
Share-of-voice  = your citations / (your + all competitor citations)
Engine spread   = which engines carry you vs which drop you
```

Roll into a 0-100 visibility score: 40% citation rate, 30% share-of-voice, 20% linked rate, 10% engine spread. Record the baseline date.

### 4. Build the prioritised fix list
For every Absent or Empty cell, log the gap and rank by **buying intent x winnability**. High intent + a weak competitor source you can beat = top priority. Map each fix to the skill that resolves it (e.g. comparison prompt lost to a rival listicle then `comparison-page`; absent because uncrawled then `crawl-check`).

## Output Format
1. A scored visibility report: overall 0-100 score, per-engine breakdown, citation/linked/share-of-voice rates, baseline date.
2. The full result matrix table (every prompt x engine cell with status).
3. A ranked remediation list: gap, intent score, winnability, and the recommended skill to deploy.
4. A one-paragraph executive summary in plain British English for a non-technical decision-maker.

## What Good Looks Like
**Bad (generic):**
> Your AI visibility could be improved. You appear in some searches but not others. Consider creating more content.

**Good (specific):**
> Visibility score 34/100 (baseline 26 Jun). Strong on Perplexity (cited in 9/12 comparison prompts) but absent from ChatGPT on 8/12 — every loss cites RivalA's pricing guide. Share-of-voice 18% vs RivalA 41%. Top fix: build a comparison page for "X vs RivalA" (high intent, winnable — their source is a thin 2023 blog).

## Kaizen Note
Re-run the identical prompt set quarterly to track the score as a trend, not a snapshot. Keep the prompt set versioned so audits stay comparable; add new prompts to a v-next set rather than editing the baseline.

## Related Skills
- `citation-gap` — drills into the specific prompts where rivals beat you
- `prompt-set-builder` — supplies and versions the test prompts this audit needs
- `crawl-check` — confirms engines can read you before you blame the content
- `funnel-tracker` — turns audit baselines into ongoing READ/CITED/CLICKED tracking
