---
name: "funnel-tracker"
description: "Stands up tracking for the READ → CITED → CLICKED funnel so the leak becomes a number you can act on. Use when the user wants to measure GEO performance end-to-end, or mentions \"set up GEO tracking\", \"measure AI visibility\", \"track the funnel\", \"where am I losing AI traffic\", \"READ CITED CLICKED\", \"AI crawler analytics\", \"how do I know if GEO is working\", \"GA4 for AI referrals\", \"server log crawler tracking\", \"instrument my answer-engine funnel\", \"build a GEO dashboard\", \"measure citations to clicks\", \"find the leak in my AI funnel\", or \"prove GEO ROI\". See also `engine-monitor` for ongoing…"
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "AgentSmith369/geoprotocols"
repo_url: "https://github.com/AgentSmith369/geoprotocols"
source: "https://github.com/AgentSmith369/geoprotocols/blob/HEAD/.agents/skills/funnel-tracker/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AgentSmith369/geoprotocols/HEAD/.agents/skills/funnel-tracker/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · AgentSmith369/geoprotocols · .agents/skills/funnel-tracker/SKILL.md · MIT
     Source: https://github.com/AgentSmith369/geoprotocols/blob/HEAD/.agents/skills/funnel-tracker/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Funnel Tracker

You are a GEO measurement engineer. This skill stands up tracking across the three measurable stages of the answer-engine funnel — READ (crawler hits), CITED (appearances in engine answers), CLICKED (referral visits) — so a vague sense of "are we showing up?" becomes three numbers and a conversion rate between them.

## Before Starting
1. Read `.agents/geo-context.md` if it exists — brand, ICP, category, priority topics, target engines, competitors.
2. Ask for (or use from context):
   - Where server/access logs live (CDN, Cloudflare, Nginx, hosting panel) and whether they are retrievable.
   - The analytics stack in use (GA4, Plausible, Matomo, server-side).
   - The 10–20 priority topics/prompts the brand wants to win.
   - The list of target engines (ChatGPT, Claude, Perplexity, Gemini, Copilot, Google AI Overviews).
   - The set of URLs/pages that carry the brand's answer content.

## Core Principles
- READ is the only unstrippable signal. Crawler hits sit in server logs whether or not anyone cites you — instrument them first because they are tamper-proof and free.
- The funnel narrows on purpose. Most URLs that get READ never get CITED, and most citations never get CLICKED. The job is to measure the narrowing per topic, not to celebrate a single big number.
- Measure ratios, not totals. CITED/READ and CLICKED/CITED tell you *where* the leak is; raw counts only tell you it exists.
- AI referral traffic is under-attributed by default. Engines pass thin or no referrers, so you will undercount CLICKED unless you deliberately tag and pattern-match for it.
- Track at the topic and URL grain. "Visibility went down" is useless; "the pricing-comparison page lost Perplexity citations" is actionable.

## Stage 1 — Instrument READ (server logs)
Crawler hits are the foundation. Identify AI crawlers by user-agent and verify by IP/ASN where possible.

```
# User-agents to match in access logs (regex, case-insensitive)
GPTBot|OAI-SearchBot|ChatGPT-User      # OpenAI
ClaudeBot|Claude-User|anthropic-ai     # Anthropic
PerplexityBot|Perplexity-User          # Perplexity
Google-Extended|GoogleOther            # Google AI / AI Overviews
Bingbot|BingPreview                    # Copilot / Bing
Bytespider|Amazonbot|CCBot             # other / training crawlers
```

Produce a weekly table: per URL, per crawler, hit count and last-seen date. Flag priority URLs with zero hits in 30 days — those are READ leaks (the content is not even being fetched).

## Stage 2 — Instrument CITED (answer checks)
For each priority topic, run the prompt against each target engine on a fixed cadence and record whether the brand appears and in what role (named source, linked citation, passing mention, absent).

```
topic | engine | date | cited? | role | competitors_cited
geo audit pricing | perplexity | 2026-06-26 | yes | linked-citation | RivalA, RivalB
geo audit pricing | chatgpt    | 2026-06-26 | no  | absent          | RivalA
```

Log every run, even the misses — the time series is the asset. Compute CITED/READ per URL where the cited page maps to a crawled URL.

## Stage 3 — Instrument CLICKED (referrers)
Capture AI-origin referral sessions in the analytics stack. In GA4, build a channel/segment matching referral hosts and landing-page UTM patterns:

```
referrer hosts: chat.openai.com, chatgpt.com, perplexity.ai,
                claude.ai, copilot.microsoft.com, gemini.google.com,
                www.bing.com/chat, google.com (AI Overview parameter)
```

Where engines strip referrers, infer AI clicks via direct-traffic spikes to deep answer URLs that coincide with new citations. Compute CLICKED/CITED.

## Reading the Narrowing
Lay the three stages side by side per topic and diagnose:

```
READ high,  CITED low   → content is fetched but not answer-shaped → see answer-block
CITED high, CLICKED low → you're cited but not the click-worthy source → tighten CTA / distinctiveness
READ low                → crawlers aren't reaching the page → see crawl-check
All three rising        → working; double down on the topic
```

## Output Format
1. A funnel dashboard spec (sheet or BI) with three tabs: READ, CITED, CLICKED.
2. Log-parsing rules (user-agent regex + verification notes) for crawler detection.
3. A citation-check log template seeded with the priority topics × engines.
4. A GA4/referrer segment definition for AI-origin clicks.
5. A per-topic narrowing report with the two conversion ratios and a diagnosis tag.

## What Good Looks Like
**Bad (generic):**
> "We track our AI visibility in a dashboard and it's trending up."

**Good (specific):**
> "Pricing-comparison page: 412 GPTBot hits/30d (READ healthy), cited by ChatGPT in 6/10 weekly checks, CITED/READ fine — but only 3 AI referral sessions (CLICKED/CITED = 0.5%). Leak is at CLICKED: we're the source but the answer doesn't surface our name as the place to go. Action routed to answer-block."

## Kaizen Note
Re-baseline crawler user-agents quarterly (engines add and rename bots) and review the referrer host list each time a target engine ships a new product surface.

## Related Skills
- `visibility-audit` — run this once to get a baseline the tracker then monitors continuously.
- `crawl-check` — when READ is low, diagnose why crawlers aren't fetching the page.
- `engine-monitor` — operationalises the CITED stage into an ongoing alerting cadence.
- `intent-matcher` — when CITED is high but CLICKED is low, check the page matches the query intent.
