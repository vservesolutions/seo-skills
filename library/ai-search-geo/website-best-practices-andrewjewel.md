---
name: "website-best-practices"
description: "Use when a site needs to rank in search engines or be cited by AI answer engines (ChatGPT, Perplexity, Gemini, AI Overviews) — SEO or GEO audits, \"why don't we appear in Google\", \"we want the AI to pick us over competitors\", launching or relaunching a site, or before and after a redesign."
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "AndrewJewel/claude-skills"
repo_url: "https://github.com/AndrewJewel/claude-skills"
source: "https://github.com/AndrewJewel/claude-skills/blob/HEAD/website-best-practices/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AndrewJewel/claude-skills/HEAD/website-best-practices/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-14"
---

<!-- Claude Code skill · AndrewJewel/claude-skills · website-best-practices/SKILL.md · MIT
     Source: https://github.com/AndrewJewel/claude-skills/blob/HEAD/website-best-practices/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Website best practices: ranking and getting cited by AI

## The core principle

**Technical perfection is table stakes and creates zero visibility.**

A site can score 100/100/100 in Lighthouse, have perfect schema, hreflang and Core Web Vitals, and be invisible: not indexed anywhere, confused with another company of the same name, mentioned by nobody. That is the normal state of a new site, and no amount of further optimization fixes it.

Visibility comes from four things a crawler and an LLM can verify outside your HTML: **it is indexed, the entity is unambiguous, other sites mention it, and the page gives criteria to choose it.** Work in that order.

## The ladder — stop optimizing below the first broken rung

| # | Rung | Test that it holds |
|---|---|---|
| 0 | **Indexed at all** | `site:domain.com` returns results in **Google and Bing**. Bing gates ChatGPT Search and Copilot: not in Bing = ChatGPT cannot cite you. |
| 1 | **Entity resolved** | Searching the brand returns *you*, not a same-name company. `Organization` has `sameAs` with real profiles. |
| 2 | **Mentioned off-site** | Directories, listicles, product launches, reviews. Brand mentions appear to weigh clearly more than backlinks for AI citations (vendor studies put it near 3x; treat the direction as solid and the number as orientation). |
| 3 | **Surface to rank on** | One page cannot rank for many intents. Each commercial intent needs its own URL. |
| 4 | **Criteria to be chosen** | Prices or ranges, results with numbers, named clients, reviews. An LLM comparing vendors picks the one that gives it something to compare. |
| 5 | **Extractable** | Answer first, headings as questions, FAQ, lists, tables, schema matching visible text. |
| 6 | **Technically clean** | Readable without JavaScript, Core Web Vitals, canonical, hreflang, nothing blocked. |

Most audits invert this: weeks on rung 6, nothing on rungs 0 to 2. If the site is not indexed, **say so first and stop ranking CSS suggestions**.

## Workflow

1. **Measure before advising.** Run `scripts/audit.mjs <url>` for the machine-checkable part. It reports rungs 0 and 5-6 with evidence. See `references/audit.md` for the browser-side checks it cannot do (LCP element, field data, render behaviour).
2. **Check the entity by hand.** Search the brand name and the flagship product. Write down who currently owns that name in the results.
3. **Check who wins the target queries.** If the answers are listicles and directories, getting into three of them beats any on-site change.
4. **Report by rung, lowest broken first**, with the measurement as evidence and a clear split: what you can change in the code, and what only the owner can do outside it.
5. **Fix, then re-measure.** Every fix in `references/fixes.md` carries the trap that makes it backfire.
6. **Lock it in.** Turn each fix into an automated check so nobody undoes it. A site that had an `h1` last month and lost it in a redesign is the normal failure.

## Red flags — you are optimizing the wrong rung

- You are tuning CSS, images or bundle size and **you have not checked whether the site is indexed**.
- You are about to recommend "improve content quality" without naming a query the page should win.
- You found Lighthouse 100 and concluded the site is fine.
- You are adding `llms.txt` or special markup as a *visibility strategy*. Google states plainly that no special files or markup are needed for its AI features, and no major AI company has committed to reading `llms.txt`. It costs nothing, it proves nothing.
- The plan has no step the owner must do outside the code. Rungs 0 to 2 are almost entirely off-site.

## Rationalizations

| Excuse | Reality |
|---|---|
| "Scores are perfect, so we are done" | Perfect scores and zero indexation coexist happily. Check `site:` in both engines. |
| "We allowed the AI bots in robots.txt, so they will cite us" | Permission is not retrieval. They cite what they can find in an index and what other sites corroborate. |
| "Backlinks are what matter" | For AI citations, unlinked brand mentions count, and measure stronger than links in every study published so far. |
| "We will add case studies later" | Case studies with one real number are the cheapest citable asset you own. They are the work, not the extra. |
| "The homepage covers all our services" | One URL competes for one intent. Four services on one page rank for none of them. |
| "We cannot publish prices" | A range is enough and is what an answer engine extracts. No range means no comparison means not chosen. |
| "Content is fine, it hasn't changed in a year" | Pages not refreshed roughly quarterly lose citations markedly faster. Put a visible date and honour it. |

## Files

- `scripts/audit.mjs` — dependency-free Node script. Fetches the page as a browser and as an AI crawler, and reports indexation signals, `h1`, text visible without JavaScript, schema, hreflang, canonical, headers, caching, `http`/`www`/404 behaviour and asset weight.
- `references/audit.md` — the browser-side measurements the script cannot do, with exact commands: identifying the LCP element, field versus lab data, crawler access at the CDN edge, video quality measurement.
- `references/fixes.md` — the fixes for each rung and the trap attached to each one.
- `references/ai-citation.md` — what makes an answer engine pick one page over another in the same niche.
