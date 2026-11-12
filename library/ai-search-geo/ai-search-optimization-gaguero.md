---
name: "ai-search-optimization"
description: "Optimizes content for AI-driven search and answer engines — Google AI Overviews, ChatGPT search, Perplexity, Gemini, Copilot — also called GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization). Makes content extractable and citable: direct up-front answers, clear definitions, comparison tables, genuine FAQs, named entities, and verifiable external authority. Use when someone wants to appear or be cited in AI answers, asks about GEO/AEO, AI Overviews, \"ranking in ChatGPT/Perplexity\", LLM/answer-engine visibility, or zero-click search."
summary: "Optimizes content for AI-driven answer engines and generative search visibility."
category: "ai-search-geo"
platforms: ["any-agent"]
platform_source: "declared"
repo: "gaguero/seo-agent-skills"
repo_url: "https://github.com/gaguero/seo-agent-skills"
source: "https://github.com/gaguero/seo-agent-skills/blob/HEAD/ai-search-optimization/SKILL.md"
raw_source: "https://raw.githubusercontent.com/gaguero/seo-agent-skills/HEAD/ai-search-optimization/SKILL.md"
ref: "HEAD"
discovered_via: "awesome-seo-agent-skills"
license: "MIT"
stars: 0
collected: "2026-11-12"
---

<!-- Any agent skill · gaguero/seo-agent-skills · ai-search-optimization/SKILL.md · MIT
     Source: https://github.com/gaguero/seo-agent-skills/blob/HEAD/ai-search-optimization/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# AI Search Optimization (GEO / AEO)

Answer engines synthesize a response and cite a handful of sources. Your goal is
to be one of those sources. Crucially, the set of cited pages does **not** perfectly
match the classic organic top 10 — so being *citable* is its own discipline on top
of ranking well. This skill assumes the page already passes technical and content
fundamentals (route gaps back to `seo-technical-audit` / `seo-content-brief`).

## How answer engines pick sources (working model)

They favor content that is:
1. **Extractable** — the answer is stated plainly, early, in self-contained units.
2. **Trustworthy** — clear authorship, citations, accuracy, real expertise (E-E-A-T).
3. **Specific & current** — concrete facts, numbers, dates; not vague filler.
4. **Well-structured** — headings, lists, tables, Q&A that map to a sub-question.
5. **Corroborated** — entities and claims that match what other authoritative
   sources say (consensus and external mentions matter).
6. **Accessible to crawlers** — not blocked to AI crawlers you want to allow; key
   content in the initial HTML, not JS-only.

## What to do to a page

### 1. Lead with the answer
For each key question, put a **direct, complete answer in the first 1–2 sentences**
of its section, then expand. Answer-engine extraction grabs the concise statement;
burying it loses the citation.

### 2. Structure for extraction
- One clear H2 per sub-question, phrased the way people ask it.
- Use **definition sentences** ("X is …"), **comparison tables**, **step lists**,
  and **genuine FAQs** (only real Q&A — coordinate with `seo-schema-builder`).
- Keep paragraphs tight and self-contained so a snippet stands alone.

### 3. Make entities & facts unambiguous
- Name people, places, products, organizations explicitly (no vague "we"/"it").
- State facts with numbers, dates, and units. Attribute and **cite primary
  sources** — engines reward verifiable claims and may follow citations.

### 4. Demonstrate authority
- Real, credentialed author + bio. About/contact transparency.
- Earned external mentions/links and consistent entity info across the web
  (NAP, brand name, sameAs) raise the odds of being treated as authoritative.

### 5. Add original value
Answer engines compress the obvious; they cite sources that add something:
first-hand experience, original data/tests, expert judgment, local specifics.
Generic restated content rarely earns a citation.

### 6. Manage crawler access deliberately
Decide which AI crawlers you allow (e.g. `Googlebot` for AI Overviews vs.
`GPTBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`) and set `robots.txt`
intentionally. Allowing them is a prerequisite to being cited by that engine;
blocking is a valid business choice but forfeits that visibility.

## What NOT to do

- Don't fabricate FAQs, stats, quotes, or sources to look citable — answer engines
  and Google's spam systems penalize this, and it's dishonest. (Hard-blocked by
  `seo-quality-gates`.)
- Don't keyword-stuff "for the LLM". Write for the human; structure for extraction.
- Don't assume AEO replaces SEO — it's additive. The same index and trust signals
  feed both.

## Output

An annotated optimization plan or revised page: the up-front answers, the
extraction-friendly structure, entities/facts to make explicit, citations to add,
and crawler-access recommendations. Genuine FAQ/structured data → `seo-schema-builder`;
final check → `seo-quality-gates`.

See [references/answer-engines.md](references/answer-engines.md) for engine-specific
notes and a measurement approach.
