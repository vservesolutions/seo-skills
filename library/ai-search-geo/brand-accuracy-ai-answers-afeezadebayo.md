---
name: "brand-accuracy-ai-answers"
description: "Find what ChatGPT, Perplexity, Copilot, Claude, Gemini and Google AI features get wrong about a brand (prices, products, leadership, safety, regulation, comparisons), grade each error by severity, trace it to outdated own pages, stale third-party profiles, old coverage or entity confusion, fix it at the source and re-test monthly. Use whenever someone says ChatGPT or another AI gives wrong information about their company, AI hallucinations about a brand, outdated prices in AI answers, reputation in AI search, or how to correct what AI says about them."
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "afeezadebayo/marketing-skills"
repo_url: "https://github.com/afeezadebayo/marketing-skills"
source: "https://github.com/afeezadebayo/marketing-skills/blob/HEAD/aeo-geo/brand-accuracy-ai-answers/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/marketing-skills/HEAD/aeo-geo/brand-accuracy-ai-answers/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · afeezadebayo/marketing-skills · aeo-geo/brand-accuracy-ai-answers/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/marketing-skills/blob/HEAD/aeo-geo/brand-accuracy-ai-answers/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Brand Accuracy in AI Answers

AI assistants are now a first stop for questions like "How much does [brand] cost?", "Is [brand] safe?" and "[brand] vs [competitor]". When the answer quotes an old price, a retired product, a lawsuit that was dismissed or a competitor's feature, it shapes decisions before anyone reaches your site. These errors usually trace back to sources: outdated pages on your own site, stale third-party profiles, old press coverage or a confusion with another entity.

This skill finds what AI engines get wrong about a brand, traces each error to its likely source and fixes it at the source.

## Why AI answers get brands wrong
| Cause | Example | Where to fix |
|---|---|---|
| Outdated own pages | Old pricing page still indexed | Update, redirect or remove the page |
| Stale third-party profiles | Directory lists a former CEO | Request correction or edit the profile |
| Old media coverage | 2022 article about a since-fixed outage | Publish a current, authoritative account; ask for updates where reasonable |
| Entity confusion | Brand mixed up with a similar name | Disambiguation (see `entity-optimisation`) |
| Thin information | Engine guesses missing facts | Publish clear, citable fact pages |
| Model knowledge lag | Answer reflects training data from before a change | Strengthen retrieved sources; model updates follow later |
| Biased comparison sources | Competitor-written comparison cited | Publish fair comparisons; brief independent editors |

## Operating principles
1. **Accuracy is a business risk, not a vanity metric.** Prioritise errors on price, safety, legal, regulatory and availability topics.
2. **Fix sources, not answers.** There is no reliable way to edit an engine's answer directly; change what it retrieves and learns from.
3. **Be the clearest source.** One current, specific page per important fact type beats scattered mentions.
4. **Use feedback tools, but don't rely on them.** Thumbs-down and report options exist in most engines; they help individual answers at best.
5. **Keep evidence.** Screenshots with dates, prompts and engines, for tracking and for escalation if needed.

## When to use, and when not to
Use it after rebrands, pricing or product changes, mergers, incidents, legal outcomes, leadership changes, and whenever customers or sales report that "ChatGPT said...".

Don't use it for missing mentions with correct facts (`ai-citation-earning`), or for access problems (`ai-crawler-access`).

## Inputs to ask for, in one message
1. The canonical fact sheet: products, prices, plans, regulation, leadership, locations, policies.
2. Recent changes (with dates) the market might not know about.
3. Brand prompts customers ask, including risk prompts ("is [brand] legit", "[brand] complaints").
4. Known errors reported by sales or support.
5. A list of your own pages and key third-party profiles.

## Workflow

### Step 1. Build the accuracy prompt set
| Category | Example prompts |
|---|---|
| Basics | What is [brand]? Who owns [brand]? |
| Commercial | How much does [brand] cost? Does [brand] offer [feature]? |
| Trust and risk | Is [brand] safe? Is [brand] regulated? [brand] reviews |
| Comparison | [brand] vs [competitor] |
| Support | How do I cancel [brand]? |

### Step 2. Run and grade
Run each prompt in each engine (search on and off where possible). Grade answers: correct, partly wrong, wrong, harmful. Capture cited URLs.

### Step 3. Trace sources
For each error, follow the cited URLs; where none are shown, search for the wrong fact to find pages that state it.

### Step 4. Fix at the source
- Own site: update pages, add dated fact tables, redirect or remove outdated pages, publish change notes.
- Third parties: correct profiles you control; send concise correction requests with evidence to editors and directories.
- Gaps: create authoritative pages for frequently asked facts (pricing, security, compliance, company facts).

### Step 5. Strengthen signals
Add the facts to the entity home and structured data; make sure the most authoritative page for each fact is well linked internally.

### Step 6. Use platform feedback
Submit feedback on wrong answers where engines allow it; record what was submitted.

### Step 7. Re-test and report
Re-run the accuracy prompts monthly; report accuracy rate by engine and topic.

## Severity scale
| Level | Definition | Response time |
|---|---|---|
| Critical | Safety, legal, regulatory or financial misinformation | Immediate fix plan, leadership informed |
| High | Wrong prices, availability or key features | Within two weeks |
| Medium | Outdated history or leadership | Within a month |
| Low | Minor descriptive differences | Next quarterly review |

## Worked example
After a price change, a SaaS company's support team heard that ChatGPT and Copilot quoted old plans. Tracing found an old pricing page still indexed under a former URL, a popular comparison article using 2024 prices and a G2 profile with outdated plan names. The team redirected the old URL, added a dated pricing table and plan FAQ to the current page, updated G2, and sent the comparison's editor a short correction with a link. Within six weeks, four of five engines quoted current prices; the fifth, answering without search, still used older knowledge, which the team noted for future re-tests.

## Output format
```
# Brand accuracy review: <brand>, <date>
## Accuracy rate by engine and topic
## Errors
| Prompt | Engine | Wrong statement | Severity | Likely source | Fix | Owner | Status |
## Source fixes (own site, third parties, new fact pages)
## Feedback submitted
## Re-test schedule
```

## Correction request template
```
Subject: Correction: [fact] on [page title]
Hi [name],
Your page [URL] states [incorrect statement]. The current fact is [correct statement], as shown at [official source], updated [date].
Could you update it when convenient? Happy to provide anything else you need.
[name], [role], [company]
```

## Severity grades
| Grade | Examples | Response time |
|---|---|---|
| Critical | Safety, legal, fraud or regulatory claims | Same week, with escalation |
| High | Wrong prices, availability, leadership | Within two weeks |
| Medium | Outdated features or descriptions | Within a month |
| Low | Minor wording or missing details | Next quarterly review |
Grading keeps the team focused on errors that cost money or trust first.

## Edge cases and judgement calls
| Situation | What to do |
|---|---|
| Harmful claim (fraud, safety, legal) repeated across engines | Escalate internally, document evidence, correct sources and consider legal advice for defamatory pages |
| Error comes from a real but old event | Publish a clear, current account of the outcome; don't hide the history |
| Engine invents a fact with no source | Strengthen authoritative pages on that topic; submit feedback; re-test |
| Third party refuses to correct | Publish your own clear source and earn other independent sources that state the fact |
| Different engines give different wrong facts | Trace each separately; they may read different sources |

## Handoffs to related skills
- Entity facts and disambiguation: `entity-optimisation`
- Outdated URLs: the Technical SEO `redirects-status-codes` skill
- Clear fact pages: `answer-ready-content`
- Editor outreach: `ai-citation-earning`
- Monthly accuracy rates: `ai-visibility-tracking`

## Quality bar: what an excellent review includes
- Every error graded by severity, with the likely source.
- Fixes aimed at sources, not answers.
- High-risk topics handled first.
- Saved evidence and a monthly re-test.

## Common mistakes
- Trying to "correct" answers only through feedback buttons.
- Leaving old pages indexed after changes.
- Ignoring third-party profiles engines cite.
- Treating every inaccuracy as equally urgent.
- Not recording prompts, dates and engines.

## Questions to ask before you recommend changes
- Which facts changed recently, and when?
- Which errors have reached customers or sales?
- Who can request corrections from third parties?

## Self-check before you answer
- Is every error graded by severity with a likely source?
- Do fixes target sources rather than answers?
- Are high-risk topics (safety, legal, price) prioritised?
- Is there a monthly re-test with saved evidence?

## Official documentation
- Google: generative AI features in Search, site owner guide: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Remove outdated content from Google: https://developers.google.com/search/docs/crawling-indexing/remove-information
- Organization structured data: https://developers.google.com/search/docs/appearance/structured-data/organization
- Bing Webmaster Tools: https://www.bing.com/webmasters

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/aeo-geo/brand-accuracy-ai-answers/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
