---
name: "ai-visibility-tracking"
description: "Measure visibility in AI answers you can trust: fixed prompt sets across ChatGPT, Perplexity, Copilot, Claude, Gemini and Google AI Overviews and AI Mode, repeated runs, mention, citation, accuracy and share-of-voice rates, Google Search Console's Generative AI performance report, Bing Webmaster Tools AI Performance, GA4 AI referral channels and bot logs, turned into a monthly report. Use whenever someone asks how to track AI visibility, measure AEO or GEO results, report ChatGPT or Perplexity mentions, set up AI referral tracking in GA4, read the Search Console AI report or Bing AI…"
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "afeezadebayo/aeo-geo-skills"
repo_url: "https://github.com/afeezadebayo/aeo-geo-skills"
source: "https://github.com/afeezadebayo/aeo-geo-skills/blob/HEAD/ai-visibility-tracking/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/aeo-geo-skills/HEAD/ai-visibility-tracking/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · afeezadebayo/aeo-geo-skills · ai-visibility-tracking/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/aeo-geo-skills/blob/HEAD/ai-visibility-tracking/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# AI Visibility Tracking and Reporting

AI answers change between sessions, locations, models and days. One screenshot of ChatGPT naming you proves little, and one screenshot of it ignoring you proves just as little. Useful tracking treats AI visibility like any noisy measurement: fixed prompts, repeated runs, clear definitions and first-party data wherever platforms provide it.

This skill sets up that measurement system and turns it into a monthly report leadership can trust.

## What you can measure in 2026
| Source | What it shows | Limits |
|---|---|---|
| Google Search Console, Generative AI performance report | Impressions of your URLs in AI Overviews and AI Mode (and AI features in Discover) | Impressions only; no AI-specific clicks or queries; not in the API at launch. Announced 3 June 2026, rolled out to all sites by 31 August 2026 [Confirmed, Google] |
| Google Search Console, Performance report | Clicks and impressions including AI features, mixed with web results | Can't isolate AI clicks |
| Bing Webmaster Tools, AI Performance | Citations of your pages in Microsoft Copilot, Bing AI summaries and some partner integrations, by grounding query and page, with citation share | No click data [Confirmed, Microsoft, 2026] |
| GA4 referrals | Sessions from chatgpt.com, perplexity.ai, copilot.microsoft.com, gemini.google.com, claude.ai and others | Many AI clicks arrive without a referrer; undercounts |
| Server or CDN logs | Visits by OAI-SearchBot, ChatGPT-User, PerplexityBot, Perplexity-User, Claude-User and others | Shows fetching, not citing |
| Prompt tracking (manual or tool) | Mentions, position, accuracy, cited URLs and competitors for a fixed prompt set | Samples only; results vary by session |

## Operating principles
1. **Fixed prompts, fixed method.** Change the prompt set only on purpose, and note it.
2. **Rates, not anecdotes.** Report mention rate and citation rate across many prompts and runs.
3. **First-party data first.** Search Console and Bing reports outrank any third-party estimate.
4. **Be wary of tools that claim insider data.** Google states no third-party tool has access to its internal ranking or AI systems. [Confirmed]
5. **Tie visibility to business.** Report AI referral sessions, assisted conversions and enquiries alongside mentions.

## When to use, and when not to
Use it after a baseline audit, for monthly AEO and GEO reporting, to test whether a content or PR change moved anything, and to compare engines.

Don't use it as a substitute for the audit (`ai-search-visibility-audit`) or for fixing what the numbers show (hand off to the relevant skill).

## Inputs to ask for, in one message
1. The prompt set from the audit, or the buyer questions to build one.
2. Engines and markets that matter.
3. Search Console and Bing Webmaster Tools access, and GA4 access.
4. Any tracking tool already in use and its export.
5. Business events to annotate (launches, PR, migrations).

## Workflow

### Step 1. Design the prompt set
For each product or skill area, write 4 to 8 prompts across:
| Prompt type | Example |
|---|---|
| Category discovery | "Best payroll software for UK startups" |
| Problem-led | "How do I run payroll for my first employee in the UK?" |
| Comparison | "[Brand] vs [Competitor] for small teams" |
| Brand facts | "What does [Brand] cost?" "Is [Brand] regulated?" |
| Entity check | "Who is [founder]?" "What is [Brand]?" |
Give each a stable ID.

### Step 2. Define the method
Engine settings (search on), session type (fresh or logged out), location (VPN or local tester), run days and repeats. Record the model or mode where shown.

### Step 3. Log every run
One row per prompt, engine and run: date, engine, location, prompt ID, mentioned (Y/N), position, description accuracy (correct, partly wrong, wrong), cited URLs, own URL cited (Y/N), competitors named, sentiment, notes.

### Step 4. Pull first-party data
Monthly exports: Search Console Generative AI impressions by page, Bing AI Performance citations by page and grounding query, GA4 AI referral sessions and conversions.

### Step 5. Set up the GA4 channel
Create a custom channel group "AI assistants" with a referrer regex such as `chatgpt\.com|perplexity\.ai|copilot\.microsoft\.com|gemini\.google\.com|claude\.ai`, placed above Referral. Also watch `utm_source=chatgpt.com` on landing URLs, which ChatGPT adds to many links.

### Step 6. Calculate KPIs
- Mention rate = prompts where the brand is named ÷ prompts run.
- Citation rate = answers citing your domain ÷ answers.
- Accuracy rate = answers describing the brand correctly ÷ answers mentioning it.
- Share of voice = your mentions ÷ all brand mentions for the prompt set.
- AI referral sessions, conversions and conversion rate.
- Google AI impressions and Bing citations by page group.

### Step 7. Report and act
Monthly: what moved, why (with annotations), what to do next. Quarterly: review the prompt set.

## Sampling and confidence
With 40 prompts run once, one extra mention moves the rate by 2.5 points; don't call that a trend. Run important prompts at least twice, report the range, and only call a change real when it holds for two consecutive months or is large across many prompts.

## Monthly report template
```
# AI visibility report: <brand>, <month>
## Summary (3 sentences: what moved, why, next)
## KPIs vs last month and baseline
| KPI | This month | Last month | Baseline |
## By engine (mention, citation, accuracy)
## First-party data (GSC AI impressions, Bing citations, GA4 AI sessions and conversions)
## Wins, losses and inaccurate answers to fix
## Actions for next month (impact x effort, owner)
```

## Worked example
A SaaS company tracked 48 prompts across five engines, twice a month. Over a quarter, the mention rate rose from 15% to 27%, but accuracy fell because two engines cited an old pricing page. Bing AI Performance showed that page receiving most citations for pricing grounding queries. Updating it and redirecting an outdated duplicate restored accuracy within six weeks, and GA4 showed AI assistant sessions converting at a higher rate than average organic sessions in the same period.

## Prompt set design rules
| Rule | Why |
|---|---|
| Use customer wording, not marketing language | Engines answer what people actually ask |
| Mix generic and specific prompts | Generic prompts show category position; specific ones show depth |
| Include at least one entity check per brand | Catches wrong descriptions early |
| Keep 20% of prompts about competitors' strengths | Shows where you are absent and why |
| Write prompts in each target language | Engines answer differently by language and market |
| Version the set (v1, v2) | Lets you compare like with like |

## Edge cases and judgement calls
| Situation | What to do |
|---|---|
| An engine changes its model or interface | Annotate the date; expect a step change; don't attribute it to your work |
| A tool reports very different numbers from your manual runs | Compare methods (location, session, engine mode); trust the method you can explain |
| Small brand with very low mention rates | Report absolute counts and specific wins alongside rates |
| Several markets | Run and report each market separately; don't blend |
| Leadership wants one number | Give share of voice with mention and accuracy rates beside it |

## Handoffs to related skills
- Causes behind the numbers: `ai-search-visibility-audit`
- Inaccurate answers: `brand-accuracy-ai-answers`
- Falling citations: `answer-ready-content`
- Engine-specific gaps: `ai-overviews-ai-mode`, `chatgpt-search-visibility`, `answer-engine-platforms`
- New prompts from customer questions: `query-fan-out-mapping`

## Quality bar: what an excellent report includes
- Rates with sample sizes and ranges, not single answers.
- First-party data from Google, Bing and GA4 alongside prompt results.
- Annotations for model changes, launches and campaigns.
- Three actions for next month, each with an owner.

## Common mistakes
- Changing prompts every month, which makes trends meaningless.
- Running prompts while logged in with personal history.
- Reporting a single run as a result.
- Ignoring accuracy and sentiment.
- Trusting tool scores over first-party reports.

## Questions to ask before you set up tracking
- Which engines do your buyers use, in which markets?
- Who will run and review the prompts each month?
- Which conversions should AI referrals be judged on?

## Self-check before you answer
- Is the prompt set fixed, with IDs and a documented method?
- Are first-party sources (Search Console, Bing, GA4) included?
- Did I report rates with sample sizes, not single results?
- Does the report end with actions?

## Official documentation
- Search Console Generative AI performance report: https://support.google.com/webmasters/answer/16984139
- Introducing Search Generative AI performance reports: https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports
- Guidance on third-party SEO tools: https://developers.google.com/search/docs/fundamentals/third-party-seo
- Bing Webmaster Tools: https://www.bing.com/webmasters
- GA4 custom channel groups: https://support.google.com/analytics/answer/13051316

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/aeo-geo/ai-visibility-tracking/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
