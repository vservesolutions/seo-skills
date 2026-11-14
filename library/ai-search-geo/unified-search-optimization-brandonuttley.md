---
name: "unified-search-optimization"
description: "Unified SEO + AEO + GEO framework for 2026. Use this whenever the user wants content to rank in Google or Bing AND be cited by AI Overviews, AI Mode, voice assistants, Perplexity, ChatGPT search, Copilot, Claude, or Gemini. Trigger on any mention of \"SEO,\" \"AEO,\" \"GEO,\" \"answer engine,\" \"generative engine,\" \"AI Overviews,\" \"AI Mode,\" \"get cited by ChatGPT/Perplexity,\" \"AI visibility,\" \"AI citations,\" \"LLM citations,\" \"voice search,\" \"featured snippet,\" \"schema for AI,\" \"llms.txt,\" \"structure this page for AI,\" \"content structuring,\" \"audit this page,\" or any request to plan, write…"
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "brandonuttley/unified-search-optimization"
repo_url: "https://github.com/brandonuttley/unified-search-optimization"
source: "https://github.com/brandonuttley/unified-search-optimization/blob/HEAD/SKILL.md"
raw_source: "https://raw.githubusercontent.com/brandonuttley/unified-search-optimization/HEAD/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · brandonuttley/unified-search-optimization · SKILL.md · MIT
     Source: https://github.com/brandonuttley/unified-search-optimization/blob/HEAD/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Unified Search Optimization (SEO · AEO · GEO)

One page. Three retrieval patterns. The same structural work satisfies all of them.

This skill encodes a five-layer framework, four comparison matrices, and an eleven-step
content structuring guide, current as of September 2026. It exists because the 2026
landscape invalidated a lot of advice that still circulates: Google published its own
generative-AI guidance (May 15, 2026), FAQ rich results ended (May 7, 2026), AI Overview
citations decoupled from top-10 rankings, and llms.txt turned out to have near-zero effect
on search. The skill separates what is documented from what is inferred so the user never
mistakes one for the other.

## Evidence labeling (non-negotiable)

Every recommendation carries one of four labels. Use them in every output produced with this
skill, including chat answers, checklists, and documents.

| Label | Meaning |
|---|---|
| **[G]** | Google-confirmed: stated in Google Search Central documentation. |
| **[I]** | Industry-reported: a published third-party study or vendor documentation. Not independently verified. |
| **[P]** | Pattern-based / Inference: a reasonable reading of how retrieval-augmented systems behave. A hypothesis to test. |
| **[S]** | Sourced from an adjacent skill or playbook (for example, the Princeton GEO study via an ai-seo playbook). |

Never present an [I] or [P] claim as fact. Never use "guarantees," "ensures," "eliminates,"
or "will never" unless quoting a source, and then attribute it. If the user pastes a
vendor claim, label it [I] and say whether any primary source supports it. The full
evidence trail is in `references/evidence-register.md`; consult it when a figure needs a
source or a date.

## Determine the mode

Read the request and pick one. Most requests are one mode; a strategy engagement is all five in order.

| Mode | Trigger phrases | Read next |
|---|---|---|
| **1. Strategy / framework** | "build a strategy," "how should we approach AI search," "what matters in 2026" | This file's framework section, then `references/tactic-matrix.md` |
| **2. Structure new content** | "write / structure / outline a page for X," "make this citable" | `references/content-structuring-guide.md`, then `assets/page-template.md` |
| **3. Audit an existing page** | "audit this page," "why aren't we cited," a URL or pasted HTML | `references/content-structuring-guide.md` (Step 11 checklist), then `references/technical-requirements.md` |
| **4. Schema / technical decision** | "which schema," "llms.txt," "robots.txt for AI bots," "do we need FAQ markup" | `references/schema-matrix.md` and `references/technical-requirements.md` |
| **5. Measurement** | "how do we track AI citations," "what's our share of AI voice," "set up reporting" | `references/metrics-matrix.md` |

## The five-layer framework

Built backward from the end goal: *our passage is the one an engine selects.* Each layer is a
precondition for the one above it. Diagnose from the bottom up; fix from the bottom up.

| # | Layer | Condition that must hold | Typical owner |
|---|---|---|---|
| 5 | **Selection** | Our passage answers the query more directly, specifically, and with better sourcing than the alternatives retrieved. | Content lead |
| 4 | **Presence** | The engine's retrieval set includes us, directly or via third-party surfaces it trusts (Reddit, Wikipedia, YouTube, LinkedIn, review sites, industry press). | PR / community |
| 3 | **Authority** | Named author with credentials, organization entity, cited sources, honest dateModified, consistent facts across the web. | Content + brand |
| 2 | **Structure** | Answer in the top third; self-contained 40–75 word passages; one idea per paragraph; real HTML tables; query-shaped headings. | Writers / editors |
| 1 | **Access** | Crawlable, indexed, snippet-eligible, server-rendered, fast, in Google, Bing, Brave, and Perplexity's indexes, with AI bots allowed. | Technical SEO |

Why this order: Google states a page must be indexed and snippet-eligible before it can
appear in generative features [G]. Passage-extraction studies show position and
self-containment decide whether a retrieved page is actually quoted [I]. Authority and
presence break ties.

## What changed in 2026 (state these when relevant)

- Google's May 15, 2026 guide calls AEO and GEO "still SEO," describes AI Overviews and
  AI Mode as RAG grounded in the Search index with query fan-out, and says site owners can
  ignore llms.txt, content chunking, AI-specific rewriting, inauthentic mentions, and
  special schema for Google's AI features [G].
- FAQ rich results ended May 7, 2026. FAQPage markup is still valid and harmless to keep,
  but produces no Google SERP appearance. HowTo rich results ended in 2023 [G].
- Roughly 38% of AI Overview citations rank in the organic top 10 (Ahrefs, May 2026),
  down from ~76% in mid-2025; Ahrefs attributes this to query fan-out [I].
- 55% of cited passages sat in the first 30% of the source page (CXL, March 2026), with the
  same concentration visible in Bing's AI reporting [I].
- 97% of llms.txt files received zero traffic across 137,000 sites (Ahrefs, May 2026).
  The file retains a narrow role for agent documentation, not search [I].

## Workflow

### Mode 1 — Strategy

1. Ask for (or infer from context) the 10–20 queries that matter, the content types the
   site publishes, current schema coverage, and which competitors are cited where the user
   is not. Do not proceed on assumptions if these are unknown; one round of questions is
   cheaper than a wrong plan.
2. Map each query to an owning page or a gap.
3. Classify every gap by layer (Access → Structure → Authority → Presence → Selection).
4. Produce a plan built backward from a day-90 outcome: a measured citation share on a
   fixed prompt set. Use the 90-day skeleton in `references/tactic-matrix.md`.
5. Label every recommendation. Flag anything the user proposed that Google documents as
   unnecessary, and say why.

### Mode 2 — Structure new content

Follow `references/content-structuring-guide.md` in order. The short version:

1. Write the target query and the 20–35 word answer sentence *before* drafting.
2. Build the 40–75 word answer block and place it in the top third of the page.
3. One idea per paragraph; no pronoun openers; every statistic carries value, unit, source, date.
4. H2s phrased as the fan-out sub-questions; H3s only beneath their H2; no skipped levels.
5. Real HTML tables for comparisons, units in headers, caption, source line, and a prose
   summary above (voice assistants cannot read tables).
6. Numbered lists for sequences; verb-first, self-contained steps.
7. Visible FAQ for adjacent questions; FAQPage markup optional.
8. Author byline with credentials, honest dates, numbered sources, one non-commodity element.
9. Run the Step 11 pre-publish checklist and report pass/fail per line.

Use `assets/page-template.md` as the skeleton when drafting from scratch.

### Mode 3 — Audit

1. Fetch or read the page. If only a URL is given and no fetch tool is available, ask for
   the HTML or the visible text plus the JSON-LD.
2. Run the Step 11 checklist from the structuring guide. Report as a table: check, pass/fail,
   what to change, which layer it belongs to.
3. Run the Access checks from `references/technical-requirements.md`: crawler access,
   JS rendering, snippet directives, canonical, dates, schema-to-content match.
4. Prioritize fixes by layer, lowest layer first. An Access failure outranks any Structure fix.
5. End with the three changes most likely to move citation share, each labeled.

### Mode 4 — Schema and technical decisions

Consult `references/schema-matrix.md` for the post-May-2026 status of each type and
`references/technical-requirements.md` for crawler, rendering, and index questions.
Default positions:

- Implement Article (with Person author and Organization publisher), Organization with
  sameAs, Person/ProfilePage for authors, BreadcrumbList site-wide. Product, LocalBusiness,
  VideoObject, Dataset where relevant. All must match visible text [G].
- Keep existing FAQPage and HowTo markup; do not add new FAQ markup expecting a Google
  effect. Visible Q&A content is what gets extracted.
- llms.txt: harmless, optional, and not a search lever. Recommend it only for
  developer-documentation sites serving agents.
- robots.txt: allow Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, PerplexityBot,
  Perplexity-User, ClaudeBot, Claude-SearchBot, Claude-User. Treat GPTBot,
  Google-Extended, and CCBot as a separate training-policy decision.

### Mode 5 — Measurement

Use `references/metrics-matrix.md`. Minimum viable setup: Search Console Generative AI
performance report [G], Bing Webmaster Tools AI Performance report [I], GA4 referrer
segments for chatgpt.com, perplexity.ai, claude.ai, copilot, gemini [I], server-log counts
by AI user agent, and a fixed 20-prompt set run weekly across engines with citations logged
in a sheet. Report share of AI voice, not raw counts.

## Output conventions

- Lead with the answer or the plan; put method and caveats after.
- Use tables for any comparison across surfaces, engines, or schema types.
- When producing a document, follow the structure of the structuring guide itself: answer
  block first, query-shaped headings, sourced figures, checklist at the end.
- For regulated verticals (finance, health), note that balanced, sourced comparison content
  is both more citable and easier to clear for compliance; flag absolute claims before publish.
- Vary sentence length. Avoid stock phrases. Do not open sentences with "It," "This," or
  "These" in any passage meant to be quoted.

## Reference files

- `references/tactic-matrix.md` — 20 tactics × 6 surfaces, rated and labeled, plus the 90-day rollout skeleton.
- `references/technical-requirements.md` — Access-layer requirements per engine: indexes, bots, rendering, directives, feeds, agents.
- `references/schema-matrix.md` — 14 schema types with post-May-2026 Google status, AI-engine relevance, and a recommendation each.
- `references/metrics-matrix.md` — What to measure per surface, where the number comes from, 2026 benchmarks.
- `references/content-structuring-guide.md` — The eleven-step guide with paragraph, heading, table, list, FAQ, voice, authority, and technical rules, plus the pre-publish checklist.
- `references/evidence-register.md` — Every source behind the figures, with dates and what each was used for.
- `assets/page-template.md` — Fill-in page skeleton that enforces the anatomy.
- `evals/evals.json` — Test prompts for verifying the skill.
