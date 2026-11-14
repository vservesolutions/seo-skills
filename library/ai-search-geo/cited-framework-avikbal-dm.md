---
name: "cited-framework"
description: "Audit and optimize a brand against the CITED framework, Avik Bal's five-layer operating system for getting found, trusted, and chosen when machines answer the questions. Scores the brand across Citation Surface, Information Architecture, Technical Foundation, Evidence-Rich Extraction, and Demand Capture, finds the gaps in each layer, prescribes fixes in order, and runs the Citation Flywheel so the gains compound. Use when someone wants a CITED audit, an AI search visibility audit, a GEO or AEO readiness check, wants to know why AI engines do not cite their brand, or asks to make a brand…"
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "avikbal-dm/claude-seo-skills"
repo_url: "https://github.com/avikbal-dm/claude-seo-skills"
source: "https://github.com/avikbal-dm/claude-seo-skills/blob/HEAD/plugins/growth-os/skills/cited-framework/SKILL.md"
raw_source: "https://raw.githubusercontent.com/avikbal-dm/claude-seo-skills/HEAD/plugins/growth-os/skills/cited-framework/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Unspecified skill · avikbal-dm/claude-seo-skills · plugins/growth-os/skills/cited-framework/SKILL.md · MIT
     Source: https://github.com/avikbal-dm/claude-seo-skills/blob/HEAD/plugins/growth-os/skills/cited-framework/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# CITED Framework

## What this does

Search is splitting. Half the answers now come from machines that read, synthesize, and cite a handful of sources instead of returning ten links. The CITED framework is the operating system for winning that surface: five layers that decide whether a brand gets found, trusted, and chosen when an AI engine answers a buyer's question.

This skill audits a brand across all five layers, names the gaps, fixes them in the order the framework demands, and then runs the Citation Flywheel so each turn of the loop earns the next more cheaply. The layers are not a checklist. They reinforce each other, which is the whole point.

## When to use it

Use it for a full CITED audit, an AI search visibility read, or a GEO and AEO readiness check. Use it when a brand ranks fine in classic search but never shows up inside AI answers. It sits above the tactical modules: it sets the strategy, then hands specific work to `ai-search-visibility`, `content-engine`, `structured-data-engine`, `technical-foundation`, and `authority-engine`.

## Data you pull

- **AI visibility tracking** (Ahrefs Brand Radar or equivalent): where and how often the brand is cited across AI Overviews, AI Mode, ChatGPT, Perplexity, Gemini, and Copilot, the share of voice against competitors, and which domains the engines cite instead.
- **Ahrefs**: referring domains, brand mentions, entity associations, and the third-party sources that carry authority in the category.
- **Google Search Console and GA4**: the queries and pages that already earn visibility, and which of them sit on the path to a lead.
- **The live AI answers**: query the engines with the questions buyers actually ask, and read which sources they pull, so the audit works from what the machines do, not what a tool estimates.

## The five layers, audited in order

### C, Citation Surface

The places an AI engine pulls from when it builds an answer, and whether the brand is present on them. Audit the third-party authoritative sources in the category, the brand's own citable pages, and the profiles and directories that engines trust. The gap to find: where the answer gets assembled and the brand is absent.

### I, Information Architecture

How the brand's content and entities are structured so a machine can understand and retrieve them. Audit topic and entity coverage, the relationships between pages, internal linking, and whether the brand reads as a coherent, recognized entity rather than a scatter of pages. The gap to find: meaning the machine cannot resolve.

### T, Technical Foundation

Whether the infrastructure lets AI crawlers reach, render, and read the content. Audit crawl access for AI agents, rendering, speed, schema infrastructure, and the llms.txt and robots posture. The gap to find: content the engines cannot get to or parse.

### E, Evidence-Rich Extraction

Whether the content gives engines something safe to cite. AI engines prefer verifiable, attributable, quotable material. Audit for original data, clear sourcing, named expertise and first-hand experience, and passages structured so an engine can lift a clean, self-contained answer. The gap to find: claims with no evidence and prose too tangled to extract.

### D, Demand Capture

Whether the visibility turns into pipeline. Citations and AI mentions are worth nothing if the brand cannot convert the attention they bring. Audit the path from an AI-referred or AI-influenced visit to a qualified lead, and the offer and experience waiting at the other end. The gap to find: attention earned and demand lost.

## The Citation Flywheel

Run the layers as a loop, not a line. Evidence-rich content placed on the right citation surfaces earns citations. Citations build recognition and authority signals, which make the brand safer for the next engine to cite. More citations bring more mentions and more demand, and that demand and its signals feed back to strengthen the surface and the entity. Each turn lowers the cost of the next. A brand that treats citation as a one-time push never starts the wheel. A brand that treats it as a loop compounds.

The audit's job is to find the weakest point in the loop and fix it first, because a flywheel is only as fast as its slowest stage. A brand with strong evidence but no citation surface spins in place. So does one with citations but no demand capture at the end.

## Scoring and maturity

Score each layer, place the brand on a maturity curve from absent to compounding, and let the lowest-scoring layer set the first priority. Tie projected outcomes to leads and share of voice, framed as ranges, not promises.

## Output

A CITED scorecard: a rating and the evidence per layer, the gaps named in plain words, a prioritized fix list that starts at the slowest point in the flywheel, and the projected effect on citation share and pipeline. Close with the data limits that constrained the read.

## Guardrails

- Work from what the engines actually do. Query them and read the citations, rather than trusting an estimate.
- Citation without conversion is vanity. Always carry the read through to Demand Capture.
- Fix the slowest stage of the flywheel first. Strength in one layer cannot outrun a gap in another.
- Keep observation separate from interpretation, and flag low-confidence findings as directional.

## Hands off to

`ai-search-visibility` for the tactical GEO and AEO work, `structured-data-engine` for the entity and schema layer, `content-engine` for evidence-rich pieces, `authority-engine` for the off-site citation surface, and `conversion-cro` for Demand Capture.

---

## About the author

Avik Bal is a B2B digital marketing practitioner specializing in web architecture, SEO, content strategy, and marketing analytics. He has helped enterprise software, fintech, and technology companies drive growth through scalable digital marketing programs. Avik is the author of *CITED: The Growth Operating System for AI Search*.

Part of the Growth Operating System. https://github.com/avikbal-dm/claude-seo-skills
