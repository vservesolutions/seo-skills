---
name: "ai-search-visibility-audit"
description: "Audit how a brand, product or person shows up across AI answer engines (Google AI Overviews and AI Mode, ChatGPT search, Perplexity, Microsoft Copilot, Claude and Gemini): crawler and index access, retrieval eligibility, answer-ready content, entity clarity, third-party citations, brand accuracy and measurement, scored across seven layers with every claim labelled Confirmed, Consensus or Speculation and a 90-day plan. Use whenever someone asks for an AEO audit, GEO audit, AI visibility audit, LLM visibility check, why ChatGPT or Perplexity doesn't mention them, how to appear in AI Overviews…"
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "afeezadebayo/aeo-geo-skills"
repo_url: "https://github.com/afeezadebayo/aeo-geo-skills"
source: "https://github.com/afeezadebayo/aeo-geo-skills/blob/HEAD/ai-search-visibility-audit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/aeo-geo-skills/HEAD/ai-search-visibility-audit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · afeezadebayo/aeo-geo-skills · ai-search-visibility-audit/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/aeo-geo-skills/blob/HEAD/ai-search-visibility-audit/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# AI Search Visibility Audit

AI answer engines don't rank ten links; they retrieve passages, combine them and name a few sources. A brand can rank well in classic search and still be missing from AI answers, or be named with wrong facts. The causes sit in different places: a crawler blocked at the CDN, pages that only render in the browser, content that restates what everyone else says, an unclear entity, or no independent sources that mention the brand at all.

This skill checks all of those layers in order, separates what platforms have documented from what practitioners believe, and returns a scored plan. It is the entry point for the AEO & GEO set and hands each finding to a specialist skill.

## How AI answers choose sources
Two routes put a brand into an answer:

| Route | How it works | What you can influence |
|---|---|---|
| Retrieval (grounding) | The engine runs searches, often several related "fan-out" queries, retrieves pages from an index and cites some of them | Crawl access, indexing, ranking for the fan-out queries, passage clarity, freshness |
| Model knowledge | What the model learnt about the brand and its category during training | Long-term: consistent facts and independent coverage across the web |

Google documents that AI Overviews and AI Mode use retrieval-augmented generation and query fan-out over its Search index, and that they are rooted in its core ranking and quality systems. [Confirmed, Google Search Central, 2026]

## Evidence labels
Every finding and recommendation carries one label:
- **Confirmed:** stated in the platform's own documentation.
- **Consensus:** consistently observed in independent studies or by practitioners, not officially confirmed.
- **Speculation:** plausible but unproven. Say so plainly and don't sell it.

## Operating principles
1. **SEO is the foundation.** Pages that aren't crawlable, indexed and competitive in search are rarely cited by engines that ground answers in search indexes.
2. **Check every engine separately.** Google, Bing-backed engines (Copilot and, in part, ChatGPT), Perplexity and Claude retrieve differently.
3. **Brand accuracy matters as much as mentions.** Being named with the wrong price or an old product can cost more than not being named.
4. **Authentic signals only.** Google's guidance states that seeking inauthentic mentions doesn't help and spam systems apply to AI features too.
5. **Measure before and after.** Answers vary by session and location; use fixed prompt sets and report rates, not anecdotes.

## When to use, and when not to
Use it before starting AEO or GEO work, when AI referral traffic is flat or falling, when a competitor appears in AI answers and you don't, after a rebrand, or when leadership asks "are we in ChatGPT?"

Don't use it to fix crawling and indexing in depth (use the Technical SEO skills), or to write content (use `answer-ready-content`). For ongoing monthly reporting, use `ai-visibility-tracking` once this baseline exists.

## Inputs to ask for, in one message
1. The brand, products or people to audit, the markets and languages, and the competitors that matter.
2. The 20 to 50 questions buyers ask before choosing (from sales, support and search data).
3. Search Console access, including the Generative AI performance report if available, and Bing Webmaster Tools, including AI Performance.
4. GA4 referral data for AI domains (chatgpt.com, perplexity.ai, copilot.microsoft.com, gemini.google.com, claude.ai).
5. robots.txt, CDN or WAF bot settings, and 30 days of server or CDN logs if possible.
6. The About page, product pages and the main profiles (LinkedIn, Crunchbase, G2, Wikipedia or Wikidata if any).

## The seven layers

### Layer 1. Access
Are search and AI crawlers allowed and actually reaching the site? Check robots.txt groups for Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, GPTBot, Claude-SearchBot, Claude-User, ClaudeBot, PerplexityBot and Perplexity-User; check CDN bot rules and logs for 403 or challenge responses. OpenAI states that sites opted out of OAI-SearchBot won't be shown in ChatGPT search answers. [Confirmed, OpenAI]

### Layer 2. Eligibility
For Google: indexed, eligible for a snippet and included in generative AI features in Search Console. [Confirmed, Google] For Bing-backed engines: indexed in Bing; IndexNow helps freshness. [Confirmed for Bing indexing; impact on citations is Consensus]

### Layer 3. Retrievability
Is the main content in the server-rendered HTML? Many AI crawlers fetch HTML without running JavaScript. [Consensus] Check raw HTML for key answers, prices and FAQs.

### Layer 4. Answer-readiness
Do pages answer real questions directly, with first-hand evidence, sourced figures and clear sections? Google's guidance stresses unique, non-commodity content and says chunking content or writing differently for AI isn't required. [Confirmed]

### Layer 5. Entity clarity
Can engines tell who the brand is, what it offers and how it differs? Check the entity home, Organization or Person markup with `sameAs`, consistent descriptions across profiles and knowledge panel status.

### Layer 6. Third-party presence
Which independent sources mention the brand for each topic: reviews, comparisons, media, communities, video? Engines that answer "best X for Y" questions draw on many sources. [Consensus]

### Layer 7. Measurement
Is there a fixed prompt set, a GA4 channel for AI referrals and a baseline from Search Console and Bing AI reports?

## Workflow
1. **Build the prompt set.** 20 to 50 prompts across discovery ("best X for Y"), comparison ("X vs Y"), problem ("how do I..."), and brand ("what is [brand]", "[brand] pricing").
2. **Run the baseline.** Each prompt in each engine, in a fresh or logged-out session, from the target market. Record mention, position, description accuracy, cited URLs and competitors. Run key prompts twice.
3. **Audit layers 1 to 3** with crawls, raw HTML checks and logs.
4. **Audit layers 4 to 6** by comparing the pages and sources cited for your prompts with your own.
5. **Score each layer** 0 to 3 and list findings with evidence and labels.
6. **Prioritise** by impact and effort; quick wins first.
7. **Plan 90 days** and hand each item to the right skill.

## Scoring rubric
| Score | Meaning |
|---|---|
| 0 | Blocked or absent (crawler denied, entity unclear, no third-party mentions) |
| 1 | Present but weak (indexed but thin, few mentions, inaccurate descriptions) |
| 2 | Solid (accessible, clear, mentioned in some answers) |
| 3 | Strong (cited regularly, accurate, sources reinforce each other) |

## Myths to ignore
| Claim | Status |
|---|---|
| llms.txt makes you visible in AI search | Google says Search ignores it; a June 2026 Ahrefs log study found 97% of llms.txt files got no requests in May 2026 [Confirmed for Google; Consensus otherwise] |
| You must chunk content into small blocks | Google says it isn't required [Confirmed] |
| Special schema gets you into AI answers | Google says no special markup is needed [Confirmed] |
| Buying mentions or self-ranking lists works | Against Google spam policies; high reputational risk |

## Worked example
A B2B payments company appeared in 2 of 40 baseline prompts across five engines. The audit found its CDN challenged PerplexityBot and OAI-SearchBot, product pages loaded pricing with JavaScript, the brand was described with a product it retired in 2024, and independent comparisons listed four competitors but not the brand. The 90-day plan fixed bot rules and server rendering in week one, rewrote the comparison and pricing pages with sourced facts, corrected the old product on profiles and directories, and pitched original data to two trade publications. The next run showed mentions in 11 of 40 prompts, with accurate descriptions in all of them.

## Output format
```
# AI search visibility audit: <brand>, <markets>, <date>
## Summary (mention rate, accuracy rate, top 3 blockers, top 3 wins)
## Baseline: prompts x engines (mentioned, position, accuracy, cited URLs, competitors)
## Layer scores
| Layer | Score 0-3 | Key findings | Evidence | Label |
## 90-day plan
| # | Action | Layer | Impact | Effort | Skill | Owner | Re-check |
```

## Common mistakes
- Testing one prompt once in a logged-in session and calling it a finding.
- Treating AI visibility as separate from SEO.
- Blocking search crawlers while trying to block training crawlers.
- Ignoring wrong facts in answers.
- Buying "AI visibility" services that promise placement.

## Questions to ask before you recommend changes
- Which questions lead to revenue, and which engines do buyers use?
- Is the business willing to allow training crawlers, or only search crawlers?
- What facts about the brand are often wrong in answers?

## Self-check before you answer
- Did I audit all seven layers and every engine that matters?
- Is every claim labelled Confirmed, Consensus or Speculation?
- Is the baseline repeatable, with prompts, dates and locations saved?
- Does every action have a skill, owner and re-check date?

## Official documentation and research
- Google: generative AI features in Search, site owner guide: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google: AI features and your website: https://developers.google.com/search/docs/appearance/ai-features
- Google Search Console Generative AI performance report: https://support.google.com/webmasters/answer/16984139
- OpenAI crawlers: https://platform.openai.com/docs/bots
- Perplexity crawlers: https://docs.perplexity.ai/guides/bots
- Bing Webmaster Tools: https://www.bing.com/webmasters
- GEO: Generative Engine Optimization (Aggarwal et al., KDD 2024): https://arxiv.org/abs/2311.09735

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/aeo-geo/ai-search-visibility-audit/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
