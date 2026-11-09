---
name: "aeo-blocks"
description: "Use when you want a content page to get cited by AI answer engines (ChatGPT, Perplexity, Google AI Overviews, Gemini, Copilot). Generates the extractable answer blocks and structured data that get pulled into AI answers: at-a-glance answer block, FAQ, HowTo, comparison table, statistic blocks, llms.txt, and the matching JSON-LD. Trigger on \"AEO\", \"GEO\", \"answer engine optimization\", \"get cited by AI\", \"optimize for ChatGPT/Perplexity\", \"AI Overviews\", \"llms.txt\", or \"AI citations\"."
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "bikram13/citedstack-aeo-blocks"
repo_url: "https://github.com/bikram13/citedstack-aeo-blocks"
source: "https://github.com/bikram13/citedstack-aeo-blocks/blob/HEAD/.claude/skills/aeo-blocks/SKILL.md"
raw_source: "https://raw.githubusercontent.com/bikram13/citedstack-aeo-blocks/HEAD/.claude/skills/aeo-blocks/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 7
collected: "2026-11-09"
---

<!-- Claude Code skill · bikram13/citedstack-aeo-blocks · .claude/skills/aeo-blocks/SKILL.md · MIT
     Source: https://github.com/bikram13/citedstack-aeo-blocks/blob/HEAD/.claude/skills/aeo-blocks/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# AEO Blocks — get the page cited, not just ranked

AI answer engines do not cite pages. They cite **passages**. Your job is to make
every key claim on a page a self-contained passage an LLM can lift verbatim into
an answer, and to describe that page in structured data the engine can parse
without rendering JavaScript.

This skill turns a topic or an existing page into the blocks that actually get
cited, plus the JSON-LD that backs them. It is the exact block system running at
full coverage on a small affiliate site whose #1 referrer is ChatGPT — ahead of
Google Search.

**Traditional SEO gets you ranked. This gets you cited.** A well-structured page
gets cited even when it ranks on page 2, because engines select sources on
extractability and authority, not rank alone.

---

## The one rule that matters most

> **Lead every section with the answer, in 40 to 60 words, phrased so it survives
> being copied out of the page with zero surrounding context.**

If the first sentence under a heading only makes sense after reading the two
paragraphs above it, an LLM cannot lift it, and it will cite a competitor who
front-loaded the answer. Front-load, then elaborate.

---

## What to do

When asked to optimize or generate a page for AI citation, produce these in order.
Do not skip the audit — generating blocks for a page that blocks GPTBot is wasted work.

### 1. Confirm the target query

One page, one primary query, phrased how a human actually asks it:
- `What is [X]?` → definition block
- `Best [X] for [use case]` → ranked list + comparison table
- `[X] vs [Y]` → comparison table (this format wins ~33% of AI citations)
- `How to [X]` → HowTo block + HowTo schema
- `[X] price / cost` → a specific number with a source and a date

Match the H1 and the first H2 to the query wording. Engines pattern-match headings
to prompts.

### 2. Access check (do this before anything else)

An engine cannot cite what its crawler cannot fetch. Verify `robots.txt` does not
`Disallow` these, and that the page is server-rendered (or statically rendered),
not gated or client-only:

| Engine | Bot to allow |
|--------|--------------|
| ChatGPT | `GPTBot`, `ChatGPT-User`, `OAI-SearchBot` |
| Perplexity | `PerplexityBot` |
| Claude | `ClaudeBot`, `anthropic-ai` |
| Google AI Overviews / Gemini | `Google-Extended` |
| Copilot | `Bingbot` |

If any are blocked, flag it as the #1 fix. Nothing else matters until crawlers can read the page.

### 3. Generate the blocks

Use the templates in [references/block-patterns.md](references/block-patterns.md).
For a typical "best X" or "X vs Y" page, generate in this order:

1. **At-a-glance answer block** — the 40 to 60 word direct answer, right under the H1.
   This is the single highest-leverage block. It is what gets quoted.
2. **The pick / verdict block** — one-line answer to "which one", with the reason.
3. **Comparison table** — structured, not prose. Columns are the decision criteria.
4. **Statistic blocks** — every claim with a number gets a source and a date.
   Statistics with sources are the single biggest citation lever (+37 to +40%,
   Princeton GEO study, KDD 2024).
5. **FAQ block** — 4 to 8 real questions in natural language, each answered in
   one self-contained paragraph. Back it with FAQPage JSON-LD.
6. **HowTo block** (only if the query is procedural) — numbered steps, backed by
   HowTo JSON-LD.

### 4. Add the structured data

Emit the JSON-LD from [references/schema-templates.md](references/schema-templates.md)
that matches the blocks you generated. Content with matching schema shows 30 to 40%
higher AI visibility. Rules:

- The JSON-LD **must** match the visible content. Fabricated schema (FAQ entries
  not on the page, ratings with no reviews) is a manipulation signal and a
  compliance risk. If it is not on the page, it is not in the schema.
- Always include `Article`/`BlogPosting` with a real author and a `dateModified`.
- `FAQPage` for the FAQ block, `HowTo` for procedures, `ItemList` for ranked lists,
  `Product` only when the page is genuinely about one product with real, sourced fields.

### 5. Emit the machine-readable files

See [references/machine-readable-files.md](references/machine-readable-files.md).
At minimum generate or update `/llms.txt`. For any product or pricing page, add
`/pricing.md` so AI agents comparing options can parse you without rendering the page.

### 6. Freshness and authority pass

- Put a visible `Last updated: [date]` on the page (and mirror it in `dateModified`).
- Every statistic gets a named source. "According to [source]" framing beats a bare number.
- Name a real author with a real, relevant one-line bio. Anonymous pages lose to attributed ones.
- Do **not** keyword-stuff. Unlike classic SEO where stuffing is merely useless,
  it measurably *reduces* AI citation (about -10%, Princeton GEO).

---

## The nine levers, ranked (Princeton GEO study, Perplexity, KDD 2024)

Apply top-down. The first three account for most of the gain.

| Lever | Visibility boost |
|-------|:----------------:|
| Cite sources (authoritative refs with links) | +40% |
| Add statistics (specific numbers with sources) | +37% |
| Add quotations (expert quotes, named) | +30% |
| Authoritative tone | +25% |
| Improve clarity | +20% |
| Domain-specific terminology | +18% |
| Unique vocabulary / word diversity | +15% |
| Fluency / readability | +15 to +30% |
| Keyword stuffing | **-10% (do not)** |

Best combination: fluency + statistics. Low-authority sites benefit *more* — up to
a ~115% lift from citations, which is why this works on a page-2 site.

---

## Output format

When you run this skill, return:

1. The ready-to-paste content blocks (markdown or JSX, matching the project's stack).
2. A single `<script type="application/ld+json">` block (or a JSON object for the
   project's schema helper) containing all applicable schema.
3. The `llms.txt` (and `pricing.md` if relevant) content.
4. A short checklist of what still needs a human: real author bio, real sources for
   any placeholder stats, and the access/robots fix if one was found.

Never invent a statistic, a source, a price, or a review to fill a template. An
unfilled placeholder marked `[NEEDS REAL SOURCE]` is correct; a fabricated number
is a defect. When a page makes product, price, or factual claims, run the
`factcheck-verifier` agent over it before publishing — getting cited is worthless
if the cited claim is a lie, and one fabricated claim on a money page is how you
lose the citation permanently.
