---
name: "seo-profound"
description: "Profound LLM citation tracker (extension). Time-series brand citation rates across ChatGPT, Perplexity, and other LLMs. Pairs with seo-seranking for triangulated AI visibility coverage."
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "mikiarlo3/enso-SEO-GEO"
repo_url: "https://github.com/mikiarlo3/enso-SEO-GEO"
source: "https://github.com/mikiarlo3/enso-SEO-GEO/blob/HEAD/extensions/profound/skills/seo-profound/SKILL.md"
raw_source: "https://raw.githubusercontent.com/mikiarlo3/enso-SEO-GEO/HEAD/extensions/profound/skills/seo-profound/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 7
collected: "2026-11-14"
---

<!-- Unspecified skill · mikiarlo3/enso-SEO-GEO · extensions/profound/skills/seo-profound/SKILL.md · MIT
     Source: https://github.com/mikiarlo3/enso-SEO-GEO/blob/HEAD/extensions/profound/skills/seo-profound/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# seo-profound

Profound is purpose-built for LLM brand-mention tracking. While
SE Ranking samples prompts on demand, Profound continuously polls and
publishes time-series so trend deltas (week-over-week, month-over-month)
are first-class.

## Prerequisites

- Run `extensions/profound/install.sh` or `install.ps1`.
- Profound API key.
- Before any tool call, check `~/.claude/settings.json` has `env.PROFOUND_API_KEY`.

## Routing

| Command | Purpose |
|---|---|
| `/seo profound citations <brand>` | Current citation rate per LLM + 30-day trend |
| `/seo profound prompts <brand>` | Top prompts that surface (or fail to surface) the brand |
| `/seo profound competitors <brand>` | Brands cited alongside `brand` for the same prompts |
| `/seo profound alerts <brand>` | Spike/drop alerts vs. 7-day baseline |

## Output conventions

- Cite Profound on every metric: "Profound (live, confidence 0.90)".
- Profound covers ChatGPT + Perplexity natively; for Gemini / AI
  Overviews / AI Mode coverage, defer to `seo-seranking`.
- For Google AI Overviews citation rate, also cross-reference
  `seo-dataforseo` AI visibility tools when available.

## Cross-skill delegation

- For end-to-end AI search audit (passage citability + brand mentions + platform-specific tuning), hand back to `seo-geo`.
- For prompt-set design + AI Cleanup pattern detection in cited content, fall back to `seo-content`.
