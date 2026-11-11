---
name: "seo-aeo-geo"
description: "AI search optimization (AEO/GEO) — AI Overviews, ChatGPT search, Perplexity visibility. Citability, brand-mention strategy, AI crawler access, platform-specific optimization, llms.txt reality check. Use when user says \"AEO\", \"GEO\", \"AI Overviews\", \"AI search visibility\", \"AI citations\", or \"LLM optimization\". Also use when the user asks how to show up in ChatGPT, Perplexity or AI Overviews, how to get cited by AI, or wants an AI-search visibility strategy."
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "meshcode-ai/skills"
repo_url: "https://github.com/meshcode-ai/skills"
source: "https://github.com/meshcode-ai/skills/blob/HEAD/skills/seo-aeo-geo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/meshcode-ai/skills/HEAD/skills/seo-aeo-geo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 4
collected: "2026-11-11"
---

<!-- Claude Code skill · meshcode-ai/skills · skills/seo-aeo-geo/SKILL.md · MIT
     Source: https://github.com/meshcode-ai/skills/blob/HEAD/skills/seo-aeo-geo/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# AEO / GEO — AI Search Optimization

## Framing
Google's official stance: **AI search optimization is just SEO**. Where community strategies conflict with Google, Google wins — and flag the contradiction in the report. Ruled invalid by Google: llms.txt as a ranking factor, chunking tuned for LLMs, rewriting sentences for AI, mention farming.

## Core Signal: Brand Mentions > Backlinks (Ahrefs 2025-12, 75k brands)
YouTube ~0.74 > Reddit/Wikipedia high > LinkedIn mid > DR (backlinks) ~0.27 weak.
Domains cited by both ChatGPT and AI Overviews on the same query: **~11%** → per-platform optimization is mandatory.

## Checklist
1. Citability: answer-first opening, paragraphs quotable without context, concrete numbers, question-form headings
2. Entities: consistent brand representation across site · Wikidata · LinkedIn · YouTube
3. Crawler access: open OAI-SearchBot, Claude-SearchBot, PerplexityBot, Googlebot (→ `seo-technical-audit`)
4. Per-platform: ChatGPT = Bing + Reddit/YouTube / Perplexity = own crawl + citations / AI Overviews = Google index
5. Freshness: dates, updates, and byline shown

## Output
Per-dimension 0-100 scores, per-platform verdict, top 5 fixes ranked by expected citation impact.
