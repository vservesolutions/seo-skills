---
name: "dejan-ai-reverse-engineering"
description: "Use for AI search reverse engineering, DEJAN or Dan Petrovic research, technical SEO reverse engineering, SRO, selection rate, grounding snippets, citation mining, Google AI Mode, Gemini, AI Overviews, machine-readable content extraction, and tasks where DEJAN-style analysis should guide the workflow. This skill loads a compact local knowledge pack distilled from recent dejan.ai research and applies it to AI visibility and reverse-engineering work."
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "vijaychauhanseo/seo-skills-pack"
repo_url: "https://github.com/vijaychauhanseo/seo-skills-pack"
source: "https://github.com/vijaychauhanseo/seo-skills-pack/blob/HEAD/skills/dejan-ai-reverse-engineering/SKILL.md"
raw_source: "https://raw.githubusercontent.com/vijaychauhanseo/seo-skills-pack/HEAD/skills/dejan-ai-reverse-engineering/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Claude Code skill · vijaychauhanseo/seo-skills-pack · skills/dejan-ai-reverse-engineering/SKILL.md · MIT
     Source: https://github.com/vijaychauhanseo/seo-skills-pack/blob/HEAD/skills/dejan-ai-reverse-engineering/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# DEJAN AI Reverse Engineering

## Overview

Use this skill for DEJAN-style AI SEO and search-system reverse engineering. It gives a compact working model of Dan Petrovic's recent ideas around grounding, selection, machine readability, entity bias, and model-aware visibility.

## When To Use

- The user mentions `dejan.ai`, Dan Petrovic, DEJAN, SRO, AI Rank, Tree Walker, grounding snippets, or selection rate.
- You need DEJAN-style framing for Google AI Mode, Gemini grounding, AI Overviews, citation mining, or brand-association analysis.
- The task is generally about reverse engineering AI search, grounding, snippet extraction, or answer construction even if DEJAN is not mentioned by name.
- You want a local snapshot of recent DEJAN articles without re-reading the full archive.

## Workflow

1. Read [references/dejan-ai-notes.md](references/dejan-ai-notes.md) first for the core models, recent studies, and default heuristics.
2. Read [references/dejan-ai-archive-2025-2026.md](references/dejan-ai-archive-2025-2026.md) when you need article lookup, dates, or a quick timeline.
3. Read [references/dejan-models-and-systems.md](references/dejan-models-and-systems.md) when the task touches AI Mode internals, browser embeddings, classifiers, fan-out models, or DEJAN's build patterns.
4. Read [references/dejan-legacy-technical-seo.md](references/dejan-legacy-technical-seo.md) when the task needs older DEJAN technical SEO heuristics from the pre-AI era.
5. Read [references/reverse-engineering-checklist.md](references/reverse-engineering-checklist.md) when the task is operational and you need a step-by-step diagnostic workflow.
6. Separate sourced DEJAN claims from your own inference. Cite article title and date when leaning on a DEJAN-specific concept.
7. Treat older DEJAN material as historically useful heuristics, not automatic truths. Verify time-sensitive claims against current systems.
8. If the task is time-sensitive or you need newer material, browse `dejan.ai` again. This pack is a snapshot captured on 2026-03-20.

## Operating Lens

- Ranking is necessary but not sufficient. Ask what sentence or claim survives into grounding.
- Track `selection rate`, not just clicks or rankings.
- Assume grounding budgets are limited and transient. Prioritize clear, self-contained statements near the top of the page.
- Treat model output as a mix of latent bias and retrieved evidence, not retrieval alone.
- Optimize for machine readability: distilled main content, clean blocks, explicit claims, and tool-friendly structure.
- Expect hidden fan-out or implicit sub-queries behind a visible prompt.
- For brand work, inspect associations and uncertainty, not just exact-match mentions.
- For reverse engineering, prefer artifacts over theory: snippets, chunks, citation positions, prompt variants, and source-page diffs.

## Core DEJAN Concepts

- `SRO` = Selection Rate Optimization, DEJAN's AI-native successor to CTR.
- `Selection Rate` = frequency with which a grounded candidate is chosen into the answer.
- `Primary bias` = the model's latent relevance perception before grounding effects are applied.
- `Grounding snippets/chunks` = the small text units actually supplied to the model.
- `Transient grounding` = a grounded passage may shape the answer without becoming durable model memory.
- `LLM as presentation layer` = retrieval and ranking still sit underneath the model layer.
- `Association networks` and `Tree Walker` = probes for brand adjacency, token confidence, and model worldview.

## References

- [references/dejan-ai-notes.md](references/dejan-ai-notes.md)
- [references/dejan-ai-archive-2025-2026.md](references/dejan-ai-archive-2025-2026.md)
- [references/dejan-models-and-systems.md](references/dejan-models-and-systems.md)
- [references/dejan-legacy-technical-seo.md](references/dejan-legacy-technical-seo.md)
- [references/reverse-engineering-checklist.md](references/reverse-engineering-checklist.md)
