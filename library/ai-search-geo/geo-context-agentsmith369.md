---
name: "geo-context"
description: "Set up and maintain the shared GEO context file that every GeoProtocols skill reads. Use this first, before any other GEO skill, to capture your brand, ICP, category, target engines, priority topics, and competitors once — so the other 28 skills produce specific, on-brand output instead of generic advice. Also use when the user mentions \"set up context\", \"GEO context\", \"brand context\", \"who are we\", \"my ICP\", \"my category\", \"target keywords\", \"my competitors\", \"configure the skills\", or when output from another skill is too generic because it lacks brand context."
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "AgentSmith369/geoprotocols"
repo_url: "https://github.com/AgentSmith369/geoprotocols"
source: "https://github.com/AgentSmith369/geoprotocols/blob/HEAD/.agents/skills/geo-context/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AgentSmith369/geoprotocols/HEAD/.agents/skills/geo-context/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · AgentSmith369/geoprotocols · .agents/skills/geo-context/SKILL.md · MIT
     Source: https://github.com/AgentSmith369/geoprotocols/blob/HEAD/.agents/skills/geo-context/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# GEO Context

You set up `.agents/geo-context.md` — the single source of truth every other GeoProtocols skill reads before it runs. Capturing this once is the difference between generic AI-visibility advice and output that names your actual category, buyers, and rivals.

## Before Starting

Check whether `.agents/geo-context.md` already exists. If it does, read it and offer to update rather than overwrite.

## What To Capture

Interview the user (or extract from existing materials) and write a concise file covering:

- **Brand** — name, one-line description, home URL, founded, location.
- **Category** — the exact phrase a buyer would type into ChatGPT/Perplexity to find a solution like yours ("commercial energy broker for UK SMEs", not "energy").
- **ICP** — who buys: role, company size, sector, the trigger that makes them look.
- **Value proposition** — the one outcome you deliver, in the buyer's words.
- **Proof points** — numbers, named clients, results, credentials that earn citation.
- **Priority topics** — 5–10 buyer-intent topics you want to be cited for.
- **Target engines** — which of ChatGPT, Claude, Perplexity, Gemini, Copilot, Google AI Overviews matter most for your market.
- **Competitors** — the 3–5 brands you most often lose AI answers to.
- **Entity assets** — existing About page, Wikipedia/Wikidata entry, knowledge panel, key profiles.
- **Tone** — British English, B2B SME framing, no hype. (Default for Agent Smith builds.)

## Output Format

Write `.agents/geo-context.md` with clear headings for each section above. Keep it under 400 words — it is loaded into every skill, so it must be dense, not exhaustive. End with a "Last reviewed: YYYY-MM-DD" line.

## What Good Looks Like

**Weak category line:**
> We help businesses with their online presence.

**Strong category line:**
> Category: "AI visibility / GEO agency for UK B2B SaaS" — the prompt a marketing lead types is "how do I get my SaaS cited by ChatGPT".

## Kaizen Note

Review the context file quarterly, or whenever positioning, ICP, or competitor set shifts. Stale context quietly degrades every other skill's output.

## Related Skills

- `visibility-audit` — the first diagnostic to run once context is set
- `prompt-set-builder` — turns priority topics into testable prompts
- `entity-builder` — uses the entity assets you record here
- `competitor-watch` — monitors the competitors you list here
