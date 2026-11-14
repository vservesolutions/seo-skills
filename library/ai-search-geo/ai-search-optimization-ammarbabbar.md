---
name: "ai-search-optimization"
description: "Use when the user wants to show up in AI answers (Google AI Overviews and AI Mode, ChatGPT, Perplexity, Gemini, Claude, Copilot), asks about GEO, AEO or LLM SEO, AI crawlers in robots.txt, llms.txt, or why AI tools do not mention or recommend their business. Gives practical steps for crawl access, answer-ready content, entity consistency, third-party mentions and tracking."
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "AmmarBabbar/seo-skills"
repo_url: "https://github.com/AmmarBabbar/seo-skills"
source: "https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/ai-search-optimization/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AmmarBabbar/seo-skills/HEAD/skills/ai-search-optimization/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · AmmarBabbar/seo-skills · skills/ai-search-optimization/SKILL.md · MIT
     Source: https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/ai-search-optimization/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# AI Search Optimization (GEO / AEO)

AI search tools build answers from pages they can access and sources they trust. Good SEO is the foundation; AI visibility adds a few extra layers: being crawlable by AI bots, writing answer-ready content, and being mentioned consistently across the web.

## Before you start

1. Read `.agents/seo-context.md`.
2. Ask which AI platforms matter most to the client's customers and whether they track AI visibility already.
3. Make a test prompt set (10-20 real questions customers ask, e.g. "best roofing company in Dallas", "how much does AC repair cost in Plano"). Record which brands and sources appear in each tool, with the date.

## 1. Access

Check robots.txt and the firewall / CDN (many hosts block bots by default):
- Google AI Overviews and AI Mode use normal Googlebot crawling. `Google-Extended` controls use in Gemini models, not Search.
- OpenAI: `OAI-SearchBot` (ChatGPT search), `ChatGPT-User` (user-triggered visits), `GPTBot` (training)
- Perplexity: `PerplexityBot`
- Anthropic: `Claude-SearchBot`, `Claude-User`, `ClaudeBot` (training)
- Microsoft Copilot uses Bing: make sure the site is in Bing Webmaster Tools; IndexNow helps fast updates
- Blocking training bots is a business choice; blocking search bots removes the site from those answers.
- Important content must be in the HTML, not only rendered by JavaScript.

## 2. Answer-ready content

- Start sections with a direct, quotable answer (1-2 sentences), then the details
- Use clear question-style headings that match how people ask
- Include specific facts: prices, ranges, timelines, materials, service areas, guarantees (only real ones)
- Comparison tables and step lists where they help
- Keep content fresh and dated

## 3. Entity consistency

- Same business name, description, services, areas and NAP on the website, GBP, social profiles and directories
- Organization / LocalBusiness schema with `sameAs` links to real profiles
- A clear About page: who runs the business, experience, licenses

## 4. Third-party mentions

AI tools often cite lists, reviews and discussions:
- Reviews on Google and niche platforms
- "Best {service} in {city}" articles and local directories
- Local news, associations, partner sites
- Genuine participation in community forums and Reddit (no spam)

## 5. llms.txt

`llms.txt` is a proposed standard. Major AI search engines have not confirmed using it for ranking or citations. It is low priority and low effort. Fine to add, never sell it as a ranking factor.

## 6. Measure

- Re-run the prompt set monthly in each tool and log mentions, citations and position
- In GA4, track referral traffic from AI tools (chatgpt.com, perplexity.ai, gemini.google.com, copilot.microsoft.com, claude.ai)
- Note that AI answers vary per run and per user. Look at trends, not single answers.

## Output format

```markdown
## AI visibility baseline
| Prompt | ChatGPT | Perplexity | Gemini / AI Overview | Copilot | Client mentioned? | Sources cited |

## Access issues
## Content changes (per page)
## Entity and mention actions
## Tracking plan
```

## Rules

- Never promise placement in AI answers. Nobody controls them.
- Never invent AI visibility results. Only report what was tested, with the date.

## Related skills

`seo-audit`, `schema-markup`, `seo-content-writing`, `link-building`, `review-management`
