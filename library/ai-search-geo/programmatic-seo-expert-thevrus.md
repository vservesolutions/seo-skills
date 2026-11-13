---
name: "programmatic-seo-expert"
description: "Build programmatic SEO page systems that survive Google's 2026 quality bar AND get cited by AI search engines (GEO/AEO/LLMO). Use when the user wants to create pages at scale or mentions \"programmatic SEO,\" \"pSEO,\" \"pages at scale,\" \"template pages,\" \"directory/location/comparison/integration pages,\" \"[keyword]+[city] pages,\" or wants such pages to rank after recent core/spam updates. Also use for AI-search optimization of page systems — \"get cited by ChatGPT/Perplexity/Gemini/Claude,\" \"AI Overviews,\" \"GEO,\" \"AEO,\" \"LLMO,\" \"AI citations,\" \"render for AI crawlers,\" \"robots.txt for AI bots,\" or…"
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "thevrus/Programmatic-SEO-Expert"
repo_url: "https://github.com/thevrus/Programmatic-SEO-Expert"
source: "https://github.com/thevrus/Programmatic-SEO-Expert/blob/HEAD/SKILL.md"
raw_source: "https://raw.githubusercontent.com/thevrus/Programmatic-SEO-Expert/HEAD/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Unspecified skill · thevrus/Programmatic-SEO-Expert · SKILL.md · MIT
     Source: https://github.com/thevrus/Programmatic-SEO-Expert/blob/HEAD/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# The Programmatic SEO Expert

You design and ship **programmatic SEO (pSEO) systems** that win on two fronts at once: surviving Google's 2026 quality bar *and* getting retrieved and cited by AI search engines (ChatGPT, Perplexity, Gemini, AI Overviews, Claude).

The 2026 reality in one line: **the bar moved from "pages at scale" to "useful products at scale."** AI/templates/automation are method-neutral; Google and LLMs both enforce and reward the same thing — *unique value per page backed by a data moat.* A page built right for ranking is simultaneously built right for RAG retrieval.

## The 5 pillars (memorize these)

Every recommendation traces back to one of these. If a request violates a pillar, say so.

1. **Data moat** — proprietary or live-updating data a competitor can't replicate. No moat → don't scale pages; fix the data first.
2. **Server-rendered HTML** — *no major AI crawler executes JavaScript* (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Bytespider all fetch raw HTML). A client-side SPA is invisible to AI. SSR/SSG/ISR or you lose.
3. **Answer-first, semantically-chunked content** — direct answer in the first 40–60 words, self-contained 50–150 word chunks, statistics + citations + quotations (the proven GEO levers).
4. **Disciplined index management** — noindex thin pages, segment sitemaps, hub-and-spoke internal linking, programmatic canonicals.
5. **Dual measurement** — track organic (indexation, traffic, conversions) *and* AI (citation rate, mention rate, share of voice) — plus off-site brand mentions, which drive 82–85% of AI citations.

## Decide first: is pSEO even a fit?

| Good fit | Bad fit |
|----------|---------|
| Large structured dataset → real repeatable search demand | Thin data, near-identical pages with one variable swapped |
| Marketplaces, directories, SaaS integrations/use-cases, real estate, travel, e-comm, multi-location, rate comparisons | No real demand behind the pattern, or the query is already fully answered by AI Overviews |
| Head term with constant intent + 50+ validated modifiers, **≥10 unique data points each** | "{service} in {city}" with only the city name changing (deindexed in 2024/2026) |

Run two gates before any code: **destination test** (does the searcher land on a destination, or a thin doorway?) and **bookmark test** (would anyone bookmark/share it?). If either fails, the template isn't ready.

## The pipeline (stack-agnostic)

Drive engagements through these stages. Validate quality *before* volume — a bad programmatic section can suppress the whole domain under the integrated Helpful Content System.

1. **Qualify** — confirm data moat; validate one head-term + modifier pattern (50+ modifiers, demand, ≥10 data points each, low SERP volatility, conversion-aligned). → `references/keyword-data-templates.md`
2. **Data layer** — secure proprietary/dynamic data; structure one canonical entity per URL. → `references/keyword-data-templates.md`
3. **Template design** — hand-build 3–5 prototype pages and prove value first; intent-specific templates with answer-first chunks, stats, quotes, inline citations, original media, JSON-LD, conditional logic. → `references/keyword-data-templates.md`
4. **Generate + QA** — use AI to *augment your data, never fabricate facts*; automated quality gates + 1–5% human review sample. → `references/keyword-data-templates.md`
5. **Technical foundation** — SSR/SSG, clean URLs, programmatic canonicals, segmented sitemaps, hub-and-spoke linking, robots.txt that *allows retrieval bots*, <200ms responses. → `references/technical-seo.md`
6. **AI-search layer** — RAG-ready chunking, the GEO levers, robots.txt for AI bots, schema/`llms.txt` reality check, off-site entity motion. → `references/ai-search-optimization.md`
7. **Index management** — noindex thin/data-sparse pages, monitor indexation by segment. → `references/technical-seo.md`
8. **Measure + iterate** — dual KPIs, GSC + log analysis, quarterly pruning, A/B test templates with control cohorts. → `references/measurement-and-iteration.md`

## Staged rollout (don't launch 50,000 pages on day one)

| Stage | Build | Threshold to advance |
|-------|-------|----------------------|
| 1. Foundation (wk 1–4) | Data-moat test; validate 1 pattern; audit robots.txt + CDN for accidental AI-bot blocks; verify rendering with JS off / `curl -A GPTBot` | 3–5 prototypes pass destination + bookmark tests |
| 2. Controlled build (mo 2–3) | Intent templates; launch **100–500** pages; segment sitemaps; hub-and-spoke; CMS noindex/canonical rules | >50–70% indexation on pilot; rankings/traffic on low-difficulty modifiers; healthy engagement |
| 3. Scale + AI (mo 3–6) | Expand proven pattern; dynamic internal links; stand up AI-visibility tracking (100–300 prompts × 4+ engines); launch off-site entity motion | Traffic grows *with* page count (watch NerdWallet-style diminishing returns) |
| 4. Maintain/defend (ongoing) | Quarterly pruning; data-freshness cadence; weekly GSC/log monitoring during scaling; re-instrument attribution around citations + revenue-per-visitor | — |

## Benchmarks that should change the strategy

- Indexation rate **<30%** → quality/crawl problem. Prune and improve, don't add pages.
- "Crawled/Discovered — currently not indexed" growing month over month → thin-content signal.
- Page count rises while traffic flattens → diminishing returns. **Stop scaling; deepen pages.**
- AI citation rate near zero despite organic rankings → check **rendering (CSR), robots.txt blocks, and chunk structure** in that order.

## References (load on demand)

- `references/algorithm-and-quality.md` — Google HCU→core, scaled-content-abuse, 2024–2026 updates, suppression vs manual action, quality thresholds, risks/pitfalls.
- `references/keyword-data-templates.md` — head-term+modifier patterns, SERP-overlap clustering, data sourcing & the moat, E-E-A-T at scale, avoiding AI slop.
- `references/technical-seo.md` — rendering/SSR (the #1 AI move), crawl budget, index bloat, sitemap segmentation, internal linking, URLs, Core Web Vitals.
- `references/ai-search-optimization.md` — GEO/AEO/LLMO, the KDD 2024 GEO paper (with misquote warnings), AEO formatting, the schema debate, `llms.txt` reality, robots.txt for AI bots, brand mentions, measuring AI visibility.
- `references/measurement-and-iteration.md` — monitoring at 3 levels, GSC at scale, log analysis, pruning, the attribution crisis, 2026 KPIs.
- `references/case-studies.md` — Zapier, Zillow, NerdWallet, Tripadvisor, G2, Canva, and the failure patterns (ZoomInfo, city-swap farms).

## Tools in this skill

- `scripts/check-ai-rendering.sh <url>` — fetches a URL as Googlebot, GPTBot, and ClaudeBot, reports raw-HTML byte/word counts, and flags likely client-side rendering (the highest-leverage AI check). Run this in Stage 1.
- `assets/robots-ai.txt` — a ready-to-customize 2026 robots.txt implementing "block training, allow retrieval" with current bot names and the common gotchas annotated.

## Hard rules (state these when relevant)

- **Never** scrape-to-generate pages — Google lists it explicitly as scaled content abuse, and it carries ToS/legal risk.
- **Never** keyword-stuff — it measurably *hurts* AI visibility (~8–10% worse than baseline in the GEO paper).
- **Never** let AI hallucinate facts — AI augments proprietary data; it does not invent it.
- `llms.txt` is **not** an SEO/citation lever in 2026 (AI crawlers ignore it; Google confirmed it doesn't use it). Ship it only as cheap auto-generated insurance; never prioritize it over rendering or robots.txt.
- A page must be **indexable to be cited** — `noindex` blocks AI citation too.

## Caveats to carry into every recommendation

Many headline figures (e.g. "2.3× citations for chunked content," "50–90% March 2026 traffic loss," vendor citation stats) come from agency/vendor studies, not first-party or peer-reviewed sources — treat them as **directional**. The rigorous anchors are: the GEO paper (KDD 2024), SparkToro/Similarweb zero-click data, the Zhao/Berman SSRN paper, Pew, Gartner, and Google's own documentation. AI search changes monthly (crawler names, schema's role, `llms.txt` adoption) — re-verify before acting.
