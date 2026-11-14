---
name: "engine-monitor"
description: "Monitors the brand''s presence and citations across all target answer engines over time and alerts on drops and wins. Use when the user wants ongoing GEO surveillance, or mentions \"monitor my AI citations\", \"track if I still get cited\", \"alert me when I lose a citation\", \"watch ChatGPT and Perplexity for my brand\", \"set up a citation cadence\", \"did my AI visibility drop\", \"weekly GEO check\", \"am I still in the AI answers\", \"engine monitoring routine\", \"track citations across engines\", \"catch when an answer changes\", \"GEO regression alerts\", or \"log my answer-engine presence\". See also…"
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "AgentSmith369/geoprotocols"
repo_url: "https://github.com/AgentSmith369/geoprotocols"
source: "https://github.com/AgentSmith369/geoprotocols/blob/HEAD/.agents/skills/engine-monitor/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AgentSmith369/geoprotocols/HEAD/.agents/skills/engine-monitor/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · AgentSmith369/geoprotocols · .agents/skills/engine-monitor/SKILL.md · MIT
     Source: https://github.com/AgentSmith369/geoprotocols/blob/HEAD/.agents/skills/engine-monitor/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Engine Monitor

You are a GEO surveillance operator. This skill runs a repeatable monitoring cadence that queries every target engine for the brand's priority topics, logs the result each cycle, and flags drops (lost citations) and wins (new ones) so the brand learns about changes within a cycle rather than a quarter.

## Before Starting
1. Read `.agents/geo-context.md` if it exists — brand, ICP, category, priority topics, target engines, competitors.
2. Ask for (or use from context):
   - The target engines to monitor and any region/locale settings that matter.
   - The 10–20 priority prompts (phrased as a real buyer would ask).
   - Where to persist the log (sheet, CSV, database) and prior runs if any.
   - The alert channel (email, Slack, a digest the user reads) and a drop threshold.

## Core Principles
- Monitor the prompt, not the keyword. Engines answer questions; log the natural-language buyer question, not an SEO keyphrase.
- Consistency beats coverage. A fixed prompt set run on a fixed cadence makes the time series comparable — change the prompts and you reset the baseline.
- Record role, not just yes/no. Being the named source, a linked citation, or a passing mention are different outcomes worth tracking separately.
- Answers are non-deterministic. Run each prompt more than once or accept a presence rate (e.g. cited 3/5 runs) rather than a binary, so noise doesn't masquerade as a drop.
- A drop is a signal, not a verdict. Investigate cause (content went stale, a rival was cited, the engine changed) before reacting.

## The Monitoring Cadence
Set a weekly cycle for priority topics and a monthly sweep for the long tail.

```
For each (prompt × engine):
  1. Run the prompt N times (N=3–5) in a clean session.
  2. Record: cited? (rate), role, position, competitors cited, source URL used.
  3. Compare to last cycle's row for the same prompt × engine.
  4. Classify the change: NEW WIN | HELD | SLIPPED | LOST | STILL ABSENT.
```

Keep one row per prompt × engine × cycle so the sheet is a true time series.

```
date | engine | prompt | cited_rate | role | our_url | rivals_cited | delta
2026-06-26 | perplexity | "best geo audit tool for B2B" | 4/5 | linked | /audit | RivalA | HELD
2026-06-26 | chatgpt    | "best geo audit tool for B2B" | 0/5 | absent | —      | RivalA, RivalB | LOST
```

## Detecting Drops and Wins
Apply rules against the latest delta column:

```
LOST        cited_rate fell from >0 to 0           → high-priority alert
SLIPPED     cited_rate dropped ≥ threshold (e.g. 2/5) → investigate
NEW WIN     absent → cited                          → log the winning page; replicate the pattern
ROLE DECAY  named-source → passing-mention          → content losing authority; refresh candidate
RIVAL SWAP  our citation replaced by a named rival  → route to competitor-watch
```

For every LOST/SLIPPED, capture the *answer text* the engine now gives and which source it used instead — that single artefact usually explains the change (a fresher stat, a clearer answer block, a new entrant).

## Alerting
Produce a short digest each cycle, not a data dump:

```
ENGINE MONITOR — cycle 2026-W26
Wins (1): now cited by Gemini for "geo vs seo difference"
Losses (1): lost ChatGPT citation for "best geo audit tool" → RivalB now named source
Watch (2): role decay on /pricing in Perplexity; Copilot still absent for 3 topics
Recommended actions: refresh /pricing stats; see competitor-watch on RivalB
```

## Output Format
1. A persistent monitoring log (one row per prompt × engine × cycle).
2. The fixed prompt set used, version-stamped.
3. A per-cycle delta report with each row classified.
4. A change digest with wins, losses, and routed actions.
5. Captured answer text + source URL for every LOST/SLIPPED row.

## What Good Looks Like
**Bad (generic):**
> "Checked the AI engines this week, looks like we're still showing up in most of them."

**Good (specific):**
> "Cycle W26: LOST our ChatGPT citation for 'best GEO audit tool for B2B' (4/5 → 0/5). The answer now names RivalB and cites their /comparison page, which added a 2026 benchmark table last week. Our /audit page still cited in Perplexity (4/5, held). Action: refresh /audit with current benchmarks; flagged RivalB to competitor-watch."

## Kaizen Note
Review the prompt set monthly against real buyer questions and search-console queries; retire prompts no buyer actually asks and add emerging ones, version-stamping each change so trend breaks are explainable.

## Related Skills
- `funnel-tracker` — feeds the CITED stage into the full READ→CITED→CLICKED funnel.
- `share-of-model` — turns per-prompt presence into an aggregate visibility share.
- `competitor-watch` — picks up rivals that appear in your monitor's "rivals cited" column.
- `source-targeting` — when a win comes via a third-party source, target more like it.
