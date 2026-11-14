---
name: "ai-crawler-access"
description: "Set and enforce a deliberate policy for AI crawlers: search and index bots (OAI-SearchBot, Claude-SearchBot, PerplexityBot, Bingbot), user-triggered fetchers (ChatGPT-User, Claude-User, Perplexity-User) and training crawlers and tokens (GPTBot, ClaudeBot, CCBot, Google-Extended), aligned across robots.txt, CDN and WAF rules and logs, verified by IP, with server-rendered content, IndexNow and an honest view of llms.txt. Use whenever someone asks whether to block AI crawlers, AI bots in robots.txt, Cloudflare blocking AI crawlers, GPTBot vs OAI-SearchBot, llms.txt, AI crawlers not visiting, or…"
category: "technical-crawling-indexing"
platforms: ["unspecified"]
platform_source: "none"
repo: "afeezadebayo/aeo-geo-skills"
repo_url: "https://github.com/afeezadebayo/aeo-geo-skills"
source: "https://github.com/afeezadebayo/aeo-geo-skills/blob/HEAD/ai-crawler-access/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/aeo-geo-skills/HEAD/ai-crawler-access/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · afeezadebayo/aeo-geo-skills · ai-crawler-access/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/aeo-geo-skills/blob/HEAD/ai-crawler-access/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# AI Crawler Access and Technical Readiness

Most brands missing from AI answers aren't blocked on purpose. A CDN bot setting switched on during an attack, a WAF rule that challenges unfamiliar user agents, a robots.txt line copied from a template, or pages that only render in the browser can make a site invisible to AI search crawlers while Google still ranks it.

This skill sets a deliberate policy for each type of AI crawler, verifies that the policy works in practice and checks that crawlers receive the content you want them to read.

## Three kinds of AI crawler
| Type | Examples | Purpose | Typical policy |
|---|---|---|---|
| Search and index | OAI-SearchBot, Claude-SearchBot, PerplexityBot, Bingbot, Googlebot | Build indexes used to ground and cite answers | Allow, unless you don't want AI search visibility |
| User-triggered fetchers | ChatGPT-User, Claude-User, Perplexity-User | Fetch a page because a person asked | Allow; OpenAI and Perplexity document that robots.txt may not apply to these [Confirmed] |
| Training | GPTBot, ClaudeBot, CCBot, Google-Extended (control token), Applebot-Extended (control token) | Collect content that may train models | Business decision: allowing helps future model knowledge; blocking protects content use |

Google-Extended controls training use and grounding in Gemini Apps and Vertex AI, not Google Search or AI Overviews. [Confirmed, Google crawler documentation]

## Operating principles
1. **Decide by type, not by fear.** Blocking all "AI bots" usually removes search visibility the business wanted.
2. **Policy in robots.txt, enforcement at the edge, proof in the logs.** All three must agree.
3. **Verify, don't trust user agents.** Use published IP ranges (OpenAI publishes gptbot.json, searchbot.json and chatgpt-user.json; Google and Bing publish verification methods).
4. **Serve content in HTML.** Many AI crawlers fetch HTML without running JavaScript. [Consensus]
5. **Ignore unproven files as levers.** llms.txt is optional; Google Search ignores it, and an Ahrefs study of 137,210 domains found 97% of llms.txt files received no requests in May 2026. [Confirmed for Google; study result]

## When to use, and when not to
Use it when AI engines never cite the site, after enabling CDN bot protection, when legal or editorial teams want a training policy, before launches and migrations, and when logs show no AI search crawler visits.

Don't use it for general robots.txt work (use the Technical SEO robots directives skill) or for content quality (use `answer-ready-content`).

## Inputs to ask for, in one message
1. robots.txt and any meta robots or X-Robots-Tag rules.
2. CDN and WAF bot settings (for example Cloudflare AI crawler controls, bot fight mode, rate limits).
3. 30 days of CDN or server logs with user agent, IP, path and status.
4. The business's position on training use.
5. Key templates and whether they render on the server.

## Workflow

### Step 1. Write the policy
A one-page table: crawler, owner, type, allowed paths, blocked paths, reason. Get sign-off from marketing, legal and engineering.

### Step 2. Implement robots.txt
One group per crawler where policies differ. Example for search visibility without training:
```text
User-agent: OAI-SearchBot
User-agent: Claude-SearchBot
User-agent: PerplexityBot
Allow: /
Disallow: /account/

User-agent: GPTBot
User-agent: ClaudeBot
User-agent: CCBot
Disallow: /

User-agent: Google-Extended
Disallow: /
```
Check current crawler names in each provider's documentation before publishing; they change.

### Step 3. Align the edge
In the CDN and WAF, allow verified search and user-triggered crawlers past challenges and rate limits that would block them. Cloudflare began blocking AI crawlers by default for new domains in 2025 and offers per-crawler controls; check these settings explicitly.

### Step 4. Verify in logs
For each crawler: requests per day, status codes, paths and IP verification. Look for 403, 429 and challenge responses, and for crawlers that never appear at all.

### Step 5. Check what they receive
Fetch key pages without JavaScript (for example with curl) and confirm the main content, prices, FAQs and structured data are in the HTML. Fix with server-side or static rendering where needed.

### Step 6. Help discovery
Submit sitemaps to Google and Bing, enable IndexNow for Bing and other participating engines, and keep `lastmod` honest.

### Step 7. Monitor
Alert on sudden drops in AI crawler requests or spikes in blocked responses. Review the policy quarterly as new crawlers appear.

## Optional files and signals
| Item | Status | Recommendation |
|---|---|---|
| llms.txt | Proposal; Google Search ignores it; low observed usage | Fine to publish for developer tools and agents; never present it as a ranking lever |
| Cloudflare content signals in robots.txt | A Cloudflare proposal to state search, AI input and training preferences | Use if on Cloudflare and it matches policy; not an industry standard |
| Pay-per-crawl schemes | Emerging; limited adoption | Consider only for publishers with licensable content |

## Worked example
A SaaS company's marketing team believed it allowed all AI crawlers. Logs showed OAI-SearchBot and PerplexityBot receiving challenge pages from a CDN bot rule turned on during a credential-stuffing attack, while robots.txt allowed them. Pricing and integrations pages also rendered client-side. The team allowed verified AI search crawlers past the challenge, moved pricing into server-rendered HTML and documented the policy. Within a month, logs showed daily successful crawls, and the brand began appearing in Perplexity and ChatGPT answers for pricing prompts.

## Output format
```
# AI crawler access review: <site>, <date>
## Policy table (crawler, type, decision, reason)
## robots.txt (current vs proposed)
## Edge rules (CDN/WAF changes)
## Log verification (crawler, requests, status mix, verified IPs, issues)
## Rendering check by template
## Monitoring and review schedule
```

## Log check commands
```bash
# Requests and status codes for AI search crawlers (combined log format)
grep -E "OAI-SearchBot|Claude-SearchBot|PerplexityBot" access.log | awk '{print $9}' | sort | uniq -c
# Raw HTML check: is the price in the server response?
curl -s -A "Mozilla/5.0 (compatible; OAI-SearchBot/1.3; +https://openai.com/searchbot)" https://example.com/pricing/ | grep -i "per month"
```
A user-agent test like the second command only shows what your server sends to that string; verify real crawlers by IP in the logs.

## Edge cases and judgement calls
| Situation | What to do |
|---|---|
| Bot attack in progress | Keep protection on, but allowlist verified AI search crawler IP ranges |
| Paywalled content | Allow crawlers to the free summary; use paywall structured data where it applies |
| Staging or internal hosts | Block all crawlers there; never copy those rules to production |
| Multiple subdomains | Each host has its own robots.txt; apply the policy to every public host |
| Publisher licensing deals | Coordinate crawler policy with legal; some deals require specific blocks |

## Handoffs to related skills
- robots.txt syntax and testing: the Technical SEO `robots-directives` skill
- Rendering fixes: the Technical SEO `javascript-seo` skill
- Crawler verification and logs: the Technical SEO `log-file-analysis` skill
- Engine checks: `chatgpt-search-visibility`, `answer-engine-platforms`
- Agent browsing and checkout: `agent-readiness`

## Quality bar: what an excellent review includes
- A signed-off policy by crawler type.
- robots.txt, edge rules and logs that agree.
- Crawlers verified by IP and content checked in raw HTML.
- Optional files described accurately.

## Common mistakes
- Blocking every bot with "AI" in its name.
- Allowing crawlers in robots.txt while the CDN blocks them.
- Trusting user-agent strings without IP verification.
- Prices and key facts only in JavaScript.
- Treating llms.txt as a visibility strategy.

## Questions to ask before you recommend changes
- Does the business want AI search visibility, training use, both or neither?
- Who controls CDN and WAF rules?
- Are there paths that must never be fetched (accounts, internal search, APIs)?

## Self-check before you answer
- Is there a signed-off policy by crawler type?
- Do robots.txt, edge rules and logs agree?
- Did I verify crawlers by IP and check rendered HTML?
- Did I present optional files without overstating them?

## Official documentation and research
- OpenAI crawlers: https://platform.openai.com/docs/bots
- Perplexity crawlers: https://docs.perplexity.ai/guides/bots
- Google common crawlers, including Google-Extended: https://developers.google.com/crawling/docs/crawlers-fetchers/overview-google-crawlers
- Verifying Googlebot: https://developers.google.com/crawling/docs/crawlers-fetchers/verifying-googlebot
- IndexNow: https://www.indexnow.org/
- Ahrefs llms.txt study, June 2026: https://ahrefs.com/blog/llmstxt-study/
- llms.txt proposal: https://llmstxt.org/

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/aeo-geo/ai-crawler-access/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
