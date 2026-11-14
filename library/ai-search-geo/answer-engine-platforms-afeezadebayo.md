---
name: "answer-engine-platforms"
description: "Improve visibility engine by engine in Perplexity, Microsoft Copilot and Bing AI summaries, Claude and the Gemini app: each engine's retrieval source and documented crawlers, Bing Webmaster Tools AI Performance citation data, IndexNow, Google-Extended and Claude crawler decisions, per-engine prompt testing and diagnosis. Use whenever someone asks how to appear in Perplexity, Copilot, Bing AI, Claude or Gemini answers, about PerplexityBot, ClaudeBot or Google-Extended, Bing AI Performance citations, or why one AI engine mentions them and another doesn't."
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "afeezadebayo/aeo-geo-skills"
repo_url: "https://github.com/afeezadebayo/aeo-geo-skills"
source: "https://github.com/afeezadebayo/aeo-geo-skills/blob/HEAD/answer-engine-platforms/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/aeo-geo-skills/HEAD/answer-engine-platforms/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · afeezadebayo/aeo-geo-skills · answer-engine-platforms/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/aeo-geo-skills/blob/HEAD/answer-engine-platforms/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Perplexity, Copilot, Claude and Gemini Visibility

Each answer engine retrieves from a different place, credits sources differently and gives site owners different data. Perplexity cites heavily and visibly. Microsoft Copilot is built on Bing and is the only engine that gives site owners citation counts. Claude searches the web when a question needs it. The Gemini app grounds answers with Google. A plan that works for one may miss another.

This skill audits and improves visibility engine by engine, using each platform's documented crawlers and reports.

## Engine reference
| Engine | Main retrieval source | Crawlers | Site owner data | Notes |
|---|---|---|---|---|
| Perplexity | Its own index plus other sources | PerplexityBot (index, respects robots.txt); Perplexity-User (user-triggered, generally ignores robots.txt per Perplexity's documentation) [Confirmed] | None beyond referrals | Shows many citations per answer; strong on fresh and niche topics [Consensus] |
| Microsoft Copilot and Bing AI summaries | Bing index | Bingbot | Bing Webmaster Tools AI Performance: citations, cited pages, grounding queries, citation share [Confirmed] | Whoever is strong in Bing is well placed for Copilot [Consensus] |
| Claude (web search on) | Web search providers plus fetching | Claude-SearchBot (search), Claude-User (user-triggered), ClaudeBot (training) [Confirmed by Anthropic] | None beyond referrals | Provider details aren't fully public [Speculation on specifics] |
| Gemini app | Google Search grounding | Googlebot; Google-Extended token controls training use and grounding in Gemini Apps and Vertex AI [Confirmed, Google crawler docs] | None specific | Blocking Google-Extended can limit Gemini app use of your content, not Google Search |

## Operating principles
1. **One access policy per engine, written down.** Search and user-triggered fetchers allowed; training crawlers a business decision.
2. **Bing is a multiplier.** Copilot and several partners rely on it; Bing Webmaster Tools and IndexNow are low effort.
3. **Use the only citation data that exists.** Bing AI Performance shows which pages and grounding queries earn citations; learn from them.
4. **Freshness matters more on some engines.** Perplexity and Copilot often favour recently updated sources for time-sensitive questions. [Consensus]
5. **Test each engine separately.** Don't assume a mention in one means a mention in all.

## When to use, and when not to
Use it when one engine ignores you while others don't, when B2B buyers use Copilot inside Microsoft 365, when Perplexity referrals matter, or when deciding on Google-Extended and Claude crawler policies.

Don't use it for ChatGPT (`chatgpt-search-visibility`) or Google AI Overviews and AI Mode (`ai-overviews-ai-mode`).

## Inputs to ask for, in one message
1. robots.txt, CDN bot rules and 30 days of logs.
2. Bing Webmaster Tools access (and whether IndexNow is on).
3. The prompt set and markets.
4. GA4 referrals from perplexity.ai, copilot.microsoft.com, bing.com, claude.ai, gemini.google.com.
5. The business's stance on AI training crawlers.

## Workflow

### Step 1. Access by engine
Check each crawler in robots.txt and logs; verify by IP where providers publish ranges. Remove CDN challenges for search and user-triggered fetchers.

### Step 2. Bing foundations
Verify the site in Bing Webmaster Tools (it can import from Search Console), submit sitemaps, turn on IndexNow, fix crawl errors. Check that key pages are indexed in Bing.

### Step 3. Read Bing AI Performance
List pages with the most citations and their grounding queries. Note citation share for important queries. Study what cited pages have in common: structure, freshness, data, comparisons.

### Step 4. Run the prompts per engine
Record mentions, citations, accuracy and competitors for Perplexity, Copilot, Claude (search on) and Gemini.

### Step 5. Diagnose per engine
| Pattern | Likely cause | Action |
|---|---|---|
| Missing only in Copilot | Weak Bing indexing or ranking | Bing foundations, IndexNow, Bing-specific checks |
| Missing only in Perplexity | PerplexityBot blocked, or no fresh, specific pages | Access, freshness, specific data |
| Missing in Claude | Claude-SearchBot or Claude-User blocked, or weak results for the searches run | Access, answer-ready pages |
| Missing in Gemini app but present in Google | Google-Extended blocked | Review the token decision |

### Step 6. Improve and re-test
Apply fixes, then re-run the engine's prompts after two to four weeks.

## Copilot inside work tools
Many business buyers meet Copilot in Microsoft 365 and Edge, not on bing.com. For B2B brands, Copilot visibility can matter more than consumer traffic data suggests.

## Worked example
A B2B HR platform was cited in ChatGPT and Perplexity but never in Copilot. Bing Webmaster Tools showed 40% of key pages not indexed after a migration, and IndexNow wasn't set up. After resubmitting sitemaps, fixing redirect chains Bing still crawled and enabling IndexNow, AI Performance began showing citations for comparison and pricing pages within five weeks, and Copilot named the brand for 7 of 15 tracked prompts.

## Output format
```
# Answer engine review: <brand>, <date>
## Access matrix (engine x crawler: allowed, verified, issues)
## Bing foundations and AI Performance summary
## Prompt results by engine
## Diagnosis and actions per engine, with re-test dates
```

## Testing each engine
| Engine | Test setting | What to record |
|---|---|---|
| Perplexity | Default search, fresh session, target country | Cited sources and their order |
| Copilot | Copilot on web and, for B2B, inside Microsoft 365 or Edge | Mentions and linked sources |
| Claude | Web search enabled | Whether it searches, sources fetched, description accuracy |
| Gemini app | Default settings | Mentions, links and whether Google sources appear |

## Engine checklist
| Engine | Must-have checks |
|---|---|
| Copilot | Bing indexing, sitemaps, IndexNow, Bing AI Performance citations |
| Perplexity | PerplexityBot allowed at robots.txt and edge; fresh, specific pages |
| Claude | Claude-SearchBot and Claude-User allowed; facts in server HTML |
| Gemini app | Google-Extended decision documented; strong Google visibility |
Run the checklist quarterly and after any CDN, robots.txt or hosting change, because these engines can lose access silently.

Log every engine change you make, with the date, so later shifts in citations can be explained.

## Edge cases and judgement calls
| Situation | What to do |
|---|---|
| Bing indexes far fewer pages than Google | Fix redirects, sitemaps and quality signals Bing reports; use IndexNow |
| Perplexity cites forums over your guides | Add first-hand detail and specifics that forums offer; join the conversation with disclosure |
| Claude never fetches the site | Check Claude-SearchBot and Claude-User access at the edge |
| Gemini app ignores you but Google ranks you | Check whether Google-Extended is blocked and whether that was intended |
| A partner integration cites you heavily in Bing AI Performance | Strengthen the cited pages and keep them current |

## Handoffs to related skills
- Crawler policy: `ai-crawler-access`
- Page improvements: `answer-ready-content`
- Reporting: `ai-visibility-tracking`
- Missing recommendations: `ai-citation-earning`
- Bing crawl issues: the Technical SEO `redirects-status-codes` and `xml-sitemaps` skills

## Quality bar: what an excellent review includes
- An access matrix per engine and crawler.
- Bing foundations checked and AI Performance read.
- Diagnoses specific to each engine.
- Re-test dates per engine.

## Common mistakes
- Treating all AI engines as one.
- Ignoring Bing because its search share looks small.
- Blocking Google-Extended without knowing it affects the Gemini app.
- Blocking user-triggered fetchers that represent real people.

## Questions to ask before you recommend changes
- Which engines do your buyers use at work and at home?
- Is AI training access acceptable to the business?
- Is Bing Webmaster Tools set up and monitored?

## Self-check before you answer
- Did I check access per crawler and verify by IP where possible?
- Did I use Bing AI Performance data?
- Are diagnoses specific to each engine?
- Are documented facts separated from consensus?

## Official documentation
- Perplexity crawlers: https://docs.perplexity.ai/guides/bots
- Bing Webmaster Tools: https://www.bing.com/webmasters
- IndexNow: https://www.indexnow.org/
- Google common crawlers, including Google-Extended: https://developers.google.com/crawling/docs/crawlers-fetchers/overview-google-crawlers
- Microsoft: From Discovery to Influence, a guide to AEO and GEO (Microsoft Advertising, 2026)

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/aeo-geo/answer-engine-platforms/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
