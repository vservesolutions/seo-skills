---
name: "aeo"
description: "Answer Engine Optimization (AEO) best practices for getting content cited by AI systems (ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews and AI Mode, Copilot) rather than just ranking in traditional search. Use when writing or auditing content for AI-search visibility, implementing FAQ/Article/HowTo schema for AI extraction, setting up robots.txt for AI crawlers, building llms.txt, structuring pages for citation, or evaluating E-E-A-T signals. Triggers on \"AEO\", \"GEO\", \"answer engine optimization\", \"generative engine optimization\", \"optimize for ChatGPT\", \"get cited by AI\", \"AI…"
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "zeke/aeo-skill"
repo_url: "https://github.com/zeke/aeo-skill"
source: "https://github.com/zeke/aeo-skill/blob/HEAD/skills/aeo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/zeke/aeo-skill/HEAD/skills/aeo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-12"
---

<!-- Unspecified skill · zeke/aeo-skill · skills/aeo/SKILL.md · MIT
     Source: https://github.com/zeke/aeo-skill/blob/HEAD/skills/aeo/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Answer Engine Optimization (AEO)

AEO is the practice of structuring and evidencing content so AI systems (ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews/AI Mode, Copilot) select and cite it as the authoritative answer, rather than optimizing purely for click-through search rankings.

This skill distills the consensus practices confirmed across the top AEO-related skills on skills.sh, and flags the few points where sources disagree or rely on unverified specifics. See `references/audit-methodology.md` for how this skill was compiled.

## AEO vs SEO

| | SEO | AEO |
|---|---|---|
| Goal | Rank on page 1, drive clicks | Be cited as the answer |
| Audience | Humans scanning results | LLMs generating responses |
| Success metric | Position 1-10, CTR | Citation count, share of answer |
| Content shape | Often longer, keyword-aware | Concise, self-contained, fact-dense |
| Links | Backlinks for authority | Citations to primary sources |

They overlap heavily and reward the same underlying quality signals (E-E-A-T, HTTPS, real content). Don't treat them as competing investments — strong SEO fundamentals are close to a prerequisite for AEO, not a substitute for it.

## When to use this skill

- Auditing existing content for AI-citation readiness
- Writing new content intended to be quoted by AI assistants
- Implementing structured data (JSON-LD) for AI extraction
- Deciding robots.txt policy for AI crawlers
- Building or updating `llms.txt`
- Explaining to a stakeholder why "SEO is fine but we're invisible in ChatGPT"

## When NOT to use this skill

- Pure click-through SEO with no AI-citation intent — use general SEO practices instead
- Brand-voice content with no factual claims (there's nothing to cite)
- Breaking news / time-sensitive content — LLM training and crawl lag means citations arrive weeks to months later, if at all
- Topics where LLMs already have strong training-data coverage (e.g. elementary math) — little citation upside

## Core principles (high confidence, cross-validated)

These are consistent across every AEO resource surveyed for this skill, with no disagreement:

1. **Answer first, explain after.** Open sections with a direct 1-3 sentence answer to the question the section addresses. AI extracts the first clear statement it finds; buried conclusions don't get cited.
2. **Write self-contained, quotable claims.** Each key sentence should make sense with zero surrounding context — roughly 15-20 words, naming the actual subject instead of "it" or "this."
3. **Structure over prose.** Tables, numbered steps, and bullet lists get parsed and extracted far more reliably than paragraphs. See `references/extractable-content-patterns.md` for copy-ready templates.
4. **Every real claim needs a citation.** Named source, a specific number, and a date. Vague hedges ("may help," "many believe") get filtered out, not cited.
5. **E-E-A-T is the shared trust rubric.** Experience, Expertise, Authoritativeness, Trustworthiness — Google's own framework, and it governs AI citation selection too. See `references/eeat.md`.
6. **Structured data matters, `FAQPage` most of all.** JSON-LD schema (`FAQPage`, `Article`+author, `HowTo`, `Organization`) is consistently ranked as the highest-leverage technical investment. See `references/structured-data.md`.
7. **Freshness is real but must be substantive.** Visible `datePublished`/`dateModified` and genuine periodic updates matter. Changing a date without meaningful edits doesn't help and can hurt trust.
8. **A blocked AI crawler zeros out that platform.** Before any content work, confirm `robots.txt` isn't blocking the AI bots you want visibility with. This is a five-minute check with outsized impact. See `references/crawler-access.md` for the current bot matrix and where sources disagree.
9. **Single-topic pages beat sprawling guides.** A focused page on one concept extracts and gets cited more reliably than a comprehensive page covering ten things.

## The one credible number to actually cite

Aggarwal et al., "GEO: Generative Engine Optimization" (KDD 2024) is the closest thing to a peer-reviewed empirical source in this space, and it's the one several independently-authored AEO skills converge on:

| Method | Visibility boost |
|---|---:|
| Cite sources | +30-40% |
| Add statistics | +37-40% |
| Add quotations | +30% |
| Authoritative tone | +25% |
| Improve clarity/fluency | +15-30% |
| Keyword stuffing | -10% (actively harmful) |

Low-authority ("challenger") sites benefit disproportionately, up to 115% visibility increase; already-top-ranked sites that over-optimize can lose visibility. Match optimization intensity to existing authority — see `references/audit-checklist.md`.

Treat every other specific percentage you encounter in AEO content ("58% of queries are zero-click," "47% of searches show AI Overviews," specific 2026 product names and rollout dates) as directionally useful but unverified. Check primary sources before repeating them as facts.

## Workflow

1. **Check crawler access first.** Read `references/crawler-access.md`, verify `robots.txt` against the current bot matrix for the platforms you care about. Fix this before anything else.
2. **Audit existing content.** Score against `references/audit-checklist.md` (E-E-A-T, structure, citation density, schema, freshness).
3. **Apply extractable content patterns.** Use `references/extractable-content-patterns.md` templates for definitions, FAQs, comparison tables, and steps.
4. **Add structured data.** Implement JSON-LD per `references/structured-data.md`, validate with Google's Rich Results Test and the Schema.org Validator.
5. **Consider entity and access signals.** `llms.txt`, Wikipedia/Wikidata presence, consistent NAP — see `references/entity-and-llms-txt.md`.
6. **Measure.** Manual test priority queries across platforms monthly, cross-reference with Google Search Console's AI Overview/AI Mode impressions where available, track referral traffic from `chatgpt.com`, `claude.ai`, `perplexity.ai`. See `references/measurement.md`.
7. **Re-audit quarterly.** AI products change faster than search algorithms historically did; treat any AEO snapshot as perishable.

## References

- `references/eeat.md` — E-E-A-T pillars, implementation, YMYL considerations
- `references/extractable-content-patterns.md` — definition, FAQ, comparison table, steps, statistic, and quote block templates
- `references/structured-data.md` — JSON-LD patterns for Article, FAQPage, HowTo, Organization, Product, BreadcrumbList
- `references/crawler-access.md` — AI bot matrix, robots.txt policy, and where sources disagree
- `references/entity-and-llms-txt.md` — llms.txt, entity/knowledge-graph signals, NAP consistency
- `references/platform-behavior.md` — how ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews/AI Mode differ in source selection
- `references/measurement.md` — what to track, which tools exist, how to diagnose a citation drop
- `references/audit-checklist.md` — scoring rubric and authority-aware optimization strategy
- `references/audit-methodology.md` — how this skill was compiled, and its confidence levels

## Anti-patterns

- Keyword stuffing — helps nothing in AEO, actively measured as harmful (-10% visibility)
- Generic listicles with no original insight
- Vague, hedged language ("may help," "could potentially," "many people")
- FAQ answers over ~50-100 words, or buried conclusions
- Manufacturing FAQ schema on pages with no genuine FAQ content — this gets penalized, not rewarded
- Optimizing for one AI platform's quirks at the expense of shared E-E-A-T fundamentals — citation behavior correlates highly across platforms
- Publishing pure LLM output with no human review — low-distinctiveness text gets deprioritized by retrieval systems that are specifically looking for a distinctive signal
- Over-optimizing an already-authoritative page — established sites should use a light touch
