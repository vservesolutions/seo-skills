---
name: "geo-citation-scout"
description: "Audit GEO (generative engine optimization) visibility by asking AI answer engines (Perplexity, ChatGPT search, Google AI Overviews) a product's high-intent buyer questions and analyzing who they cite, with what content structure and freshness. Classifies each question as strong source, weak source, no citation or community-led, routes each to a concrete action, and can produce a website, social and backlink execution package. Use for AI search visibility audits, GEO or AEO gap analysis, or reverse-engineering what AI assistants cite."
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "clairelily2020/b2b-growth-kit"
repo_url: "https://github.com/clairelily2020/b2b-growth-kit"
source: "https://github.com/clairelily2020/b2b-growth-kit/blob/HEAD/skills/geo-citation-scout/SKILL.md"
raw_source: "https://raw.githubusercontent.com/clairelily2020/b2b-growth-kit/HEAD/skills/geo-citation-scout/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · clairelily2020/b2b-growth-kit · skills/geo-citation-scout/SKILL.md · MIT
     Source: https://github.com/clairelily2020/b2b-growth-kit/blob/HEAD/skills/geo-citation-scout/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# GEO citation scout

Do not guess what AI engines like. Check what they cite today for your buyers' questions, then act on the gaps.

## When to use

- Before investing in GEO or AEO content, to find where a page can actually win.
- Quarterly re-check of whether your content gained or lost citations.
- Not for writing the page itself; hand confirmed gaps to [answer-engine-content](../answer-engine-content/SKILL.md).

## Inputs

- Profile: `company`, `positioning`, `icp`, `competitors`. If the user gives only a product URL, read the site; if it is thin, ask for a one-line positioning, three competitors and the buyer role. Do not invent them.
- Access: optional `PERPLEXITY_API_KEY` for [scripts/query_perplexity.py](scripts/query_perplexity.py); a logged-in browser or the user's manual exports for engines without an API.

## Process

1. **Generate 15-25 buyer questions** across types: how-to, comparison, alternative-to-competitor, evaluation, problem statement. Exclude pure brand queries. Keep a question only if it meets at least two of the selection criteria. Read [references/query-generation.md](references/query-generation.md).
2. **Query each engine for each question.** Engines differ, so one engine is not enough. Methods, fallbacks and rate limits are in [references/engine-querying.md](references/engine-querying.md); read it before running anything. Record engine, interface (API or consumer UI), query, locale and time. API results are not interchangeable with what users see in the consumer product.
3. **Classify every cited URL** by source type, content structure and freshness (flag anything not updated for 18 months). See [references/content-classification.md](references/content-classification.md).
4. **Judge each question:**
   - Strong source: specific, current, on-intent. Note the winner; usually do not fight it now.
   - Weak source: generic, stale or off-intent. High priority.
   - No citation: the engine has no direct answer. Highest priority.
   - Community-led: forums, Reddit, review sites dominate. Route to community work, not a landing page.
5. **Route to actions and write the report** using [references/strategy-routing.md](references/strategy-routing.md). Every recommendation names the question it came from.
6. **Execution package (only when asked):** website and FAQ briefs, a social topic calendar, and a backlink plan. First ask for real differentiation input (recent customer words, the specific mechanism that makes the product different). Without it the package becomes generic. See [references/execution-package.md](references/execution-package.md).

On a re-run, diff against the previous report: questions that went from no citation to cited, and winners that changed. That is the real signal of whether GEO work is paying off.

## Output

A report with: summary counts per judgment and per engine (including "not retrieved"), per-question detail (type, citations per engine with domain, type, structure, freshness, judgment, action), a priority list, and recurring structure patterns. Template in [references/strategy-routing.md](references/strategy-routing.md).

## Gates

- Read-only. No posting, no account actions, no bulk scraping, no attempts to bypass CAPTCHAs or bot checks. If an engine blocks automation, switch to the manual export path.
- Data you could not retrieve is labelled "not retrieved". Never fill a gap with another engine's result or a plausible guess. See [evidence-and-claims](../b2b-growth-kit/policies/evidence-and-claims.md).
- An absent citation is an opportunity only if the question maps to a real product capability.
- Visibility is not demand. Report citations, not projected traffic or revenue.

## References

- [query-generation.md](references/query-generation.md) · [engine-querying.md](references/engine-querying.md) · [content-classification.md](references/content-classification.md) · [strategy-routing.md](references/strategy-routing.md) · [execution-package.md](references/execution-package.md)
