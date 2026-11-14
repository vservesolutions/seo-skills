---
name: "chatgpt-search-visibility"
description: "Get a brand found, cited and described correctly in ChatGPT: OAI-SearchBot, ChatGPT-User and GPTBot access verified by IP, search-grounded answers versus model knowledge, Bing indexing as a baseline, prompt testing with search on and off, utm_source=chatgpt.com referral tracking and fixes for wrong facts and missing category mentions. Use whenever someone asks how to appear in ChatGPT, why ChatGPT doesn't recommend them, ChatGPT SEO, OAI-SearchBot, ChatGPT citations, ChatGPT referral traffic, or ChatGPT describing their brand wrongly."
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "afeezadebayo/aeo-geo-skills"
repo_url: "https://github.com/afeezadebayo/aeo-geo-skills"
source: "https://github.com/afeezadebayo/aeo-geo-skills/blob/HEAD/chatgpt-search-visibility/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/aeo-geo-skills/HEAD/chatgpt-search-visibility/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · afeezadebayo/aeo-geo-skills · chatgpt-search-visibility/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/aeo-geo-skills/blob/HEAD/chatgpt-search-visibility/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# ChatGPT Search Visibility

ChatGPT answers many questions from what the model already knows, and searches the web when a question needs current or specific information. When it searches, it retrieves pages, writes an answer and shows source links. Being in those links depends on three things you control: whether OpenAI's search crawler can reach you, whether your pages are strong results for the searches ChatGPT runs, and whether the web says consistent, positive things about you.

This skill audits and improves how a brand appears in ChatGPT, for both search-grounded answers and the model's background knowledge.

## OpenAI's crawlers
| User agent | Purpose | robots.txt | If blocked |
|---|---|---|---|
| OAI-SearchBot | Finds and indexes pages for ChatGPT search | Respected | OpenAI states opted-out sites won't be shown in ChatGPT search answers [Confirmed] |
| ChatGPT-User | Fetches a page when a user's request needs it (for example a pasted link) | May not apply, because a person triggered it [Confirmed] | Users who ask about your page may get nothing |
| GPTBot | Collects content that may be used to train OpenAI models | Respected | Affects future model knowledge, not ChatGPT search |

OpenAI publishes IP ranges for each (gptbot.json, searchbot.json, chatgpt-user.json), so requests can be verified. Allowing OAI-SearchBot while blocking GPTBot is a valid choice for search visibility without training use.

## Two ways into an answer
| Route | What matters | How fast it changes |
|---|---|---|
| Search-grounded answer | Crawl access, indexation in OpenAI's and partner indexes, ranking for the searches ChatGPT runs, clear passages | Days to weeks |
| Model knowledge | What the web consistently said about you before the training cut-off | Months, with new models |

Which third-party search providers ChatGPT uses alongside its own index isn't fully public; Bing has been widely observed as one source. [Consensus] Strong Bing indexing is therefore a sensible baseline.

## Operating principles
1. **Access first.** Check robots.txt, CDN and WAF rules and logs for OAI-SearchBot and ChatGPT-User.
2. **Rank for the sub-queries.** ChatGPT rewrites prompts into searches; pages that answer those searches well get retrieved.
3. **Be consistent across the web.** Model knowledge comes from many sources; contradictions produce wrong or hedged answers.
4. **Measure referrals.** ChatGPT adds `utm_source=chatgpt.com` to many outbound links; combine with referrer data.
5. **No manipulation.** Planted reviews, fake Reddit posts and self-ranking lists create long-term risk.

## When to use, and when not to
Use it when ChatGPT doesn't mention you for category questions, describes you wrongly, cites competitors' pages for your own brand questions, or when ChatGPT referrals matter to revenue.

Don't use it for Google's AI features (`ai-overviews-ai-mode`) or other engines (`answer-engine-platforms`). For product listings and checkout in ChatGPT, see `ai-commerce-product-visibility`.

## Inputs to ask for, in one message
1. robots.txt, CDN bot settings and 30 days of logs.
2. Prompts buyers ask, by market.
3. GA4 data for chatgpt.com referrals and `utm_source=chatgpt.com` landings.
4. Bing Webmaster Tools access.
5. Key brand facts (pricing, products, regulation, founders) and known errors.

## Workflow

### Step 1. Verify access
Confirm OAI-SearchBot and ChatGPT-User reach important pages with 200 responses. Verify by IP against OpenAI's published ranges. Fix challenges and blocks at the CDN.

### Step 2. Check indexing proxies
Check Bing indexing for key pages and submit sitemaps and IndexNow. Ask ChatGPT, with search on, to find a specific recent page by title; if it can't, retrieval is the issue.

### Step 3. Run the prompt set
With search on, in fresh sessions, record mentions, cited URLs, descriptions and competitors. Also run brand questions with search off to see model knowledge.

### Step 4. Diagnose
| Symptom | Likely cause | Skill |
|---|---|---|
| Never cited, site not fetched | Crawler blocked or challenged | `ai-crawler-access` |
| Fetched but not cited | Pages weak for the searches ChatGPT runs | `answer-ready-content`, `query-fan-out-mapping` |
| Mentioned with wrong facts | Outdated pages or third-party profiles | `brand-accuracy-ai-answers` |
| Missing from "best X" lists | Few independent mentions | `ai-citation-earning` |
| Unknown with search off | Weak entity presence before the training cut-off | `entity-optimisation` |

### Step 5. Improve the pages ChatGPT should cite
For brand facts: an authoritative, current page per fact type (pricing, features, security, about). For category questions: comparison pages with honest tables and sourced data.

### Step 6. Track
Add ChatGPT to the monthly tracking with referral sessions and conversions.

## Worked example
A UK fintech found ChatGPT recommended three competitors for "best business account for freelancers" and described its own fees using 2024 figures. Logs showed OAI-SearchBot receiving 403s from a WAF rule added during a bot attack. After allowing verified OpenAI IPs, updating the fee page with a dated table, correcting fees on two comparison sites and contributing data to a trade publication's annual review, the brand appeared in ChatGPT answers for 6 of 12 tracked category prompts within two months, with current fees.

## Output format
```
# ChatGPT visibility review: <brand>, <date>
## Access (OAI-SearchBot, ChatGPT-User, GPTBot status, verified by IP)
## Prompt results (search on and off): mentions, citations, accuracy, competitors
## Diagnosis table
## Actions with skills, owners and re-check dates
## Referral tracking setup and baseline
```

## Testing ChatGPT properly
| Setting | Why it matters |
|---|---|
| Search on and off | Separates search-grounded answers from model knowledge |
| Fresh chat, memory off or logged out | Removes personal history |
| Location | Answers and sources vary by country |
| Repeat runs | Answers vary; record ranges |
| Record cited links | Shows which pages to improve or correct |

## OpenAI crawler policy examples
```
# Allow ChatGPT search and user-requested fetches; block training
User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: GPTBot
Disallow: /
```
Check OpenAI's current crawler documentation before publishing, then confirm in CDN rules and logs that OAI-SearchBot receives 200 responses.

Re-test priority prompts monthly and after any crawler or site change.

## Edge cases and judgement calls
| Situation | What to do |
|---|---|
| ChatGPT knows the brand without search but with old facts | Strengthen current sources; model knowledge updates only with new models |
| ChatGPT cites a reseller instead of you | Make your official page the clearest source; check reseller pages for accuracy |
| Legal or editorial team wants no training use | Block GPTBot, keep OAI-SearchBot and ChatGPT-User allowed |
| Logs show ChatGPT-User but never OAI-SearchBot | Search crawler blocked or not yet discovering; check edge rules and Bing indexing |
| Many referrals land on one old page | Update or redirect it; it's what ChatGPT trusts for that topic |

## Handoffs to related skills
- Crawler access: `ai-crawler-access`
- Page quality: `answer-ready-content`
- Wrong facts: `brand-accuracy-ai-answers`
- Missing recommendations: `ai-citation-earning`
- Model knowledge and entity: `entity-optimisation`
- Bing foundations: `answer-engine-platforms`
- Shopping in ChatGPT: `ai-commerce-product-visibility`

## Quality bar: what an excellent review includes
- Crawler access verified by IP and logs.
- Answers tested with search on and off, in fresh sessions.
- Each recommendation tied to a diagnosed cause.
- Referral tracking in place with a baseline.

## Common mistakes
- Blocking OAI-SearchBot while meaning to block training.
- Testing only with search off, or only in a logged-in account with memory.
- Ignoring Bing indexing.
- Assuming one prompt result is stable.

## Questions to ask before you recommend changes
- Does the business want to allow training (GPTBot), or only search?
- Which brand facts are most often wrong?
- How much revenue comes from ChatGPT referrals today?

## Self-check before you answer
- Did I verify crawler access by IP and logs?
- Did I test both search-grounded and model-knowledge answers?
- Is each recommendation tied to a diagnosed cause?
- Did I label which claims are OpenAI's documentation and which are consensus?

## Official documentation
- OpenAI crawlers and user agents: https://platform.openai.com/docs/bots
- Bing Webmaster Tools: https://www.bing.com/webmasters
- IndexNow: https://www.indexnow.org/

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/aeo-geo/chatgpt-search-visibility/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
