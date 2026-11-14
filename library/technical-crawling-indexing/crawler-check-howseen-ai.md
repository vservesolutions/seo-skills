---
name: "crawler-check"
description: "Check whether AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, and others) are actually allowed to read a website. Use this whenever the user asks if ChatGPT/Claude/Perplexity can crawl or read their site, wants to check robots.txt for AI bots, suspects they're blocking AI, or is debugging why they aren't cited. Point Claude at a domain and it fetches robots.txt, parses it correctly per user-agent, and reports what each AI crawler can and can't access."
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "declared"
repo: "howseen-ai/howseen-geo-skills"
repo_url: "https://github.com/howseen-ai/howseen-geo-skills"
source: "https://github.com/howseen-ai/howseen-geo-skills/blob/HEAD/crawler-check/SKILL.md"
raw_source: "https://raw.githubusercontent.com/howseen-ai/howseen-geo-skills/HEAD/crawler-check/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-14"
---

<!-- Claude Code skill · howseen-ai/howseen-geo-skills · crawler-check/SKILL.md · MIT
     Source: https://github.com/howseen-ai/howseen-geo-skills/blob/HEAD/crawler-check/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# crawler-check

If AI crawlers can't read your site, nothing else matters — you can't be cited from a page no model has seen. This skill checks the real access rules.

## The AI crawlers that matter

| Bot | Who it feeds |
|---|---|
| `GPTBot` | ChatGPT training / browsing |
| `OAI-SearchBot` | ChatGPT search |
| `ChatGPT-User` | ChatGPT live retrieval on user request |
| `ClaudeBot` / `Claude-Web` | Claude |
| `PerplexityBot` / `Perplexity-User` | Perplexity |
| `Google-Extended` | Gemini / AI Overviews training |
| `Bingbot` | Bing → powers ChatGPT search (see `bing-check`) |
| `Applebot-Extended` | Apple Intelligence |
| `Amazonbot`, `Bytespider`, `Meta-ExternalAgent` | other AI systems |

## Steps

1. **Fetch `https://domain.com/robots.txt`.** If it 404s, note that — no robots.txt means everything is allowed by default (which is usually fine for AI visibility).
2. **Parse it correctly — per user-agent block.** This is where most tools get it wrong: a `Disallow` under `User-agent: SomeBot` applies **only** to that bot. A directive under `User-agent: Nutch` does **not** block GPTBot. Do not report a bot as blocked unless a rule under **its own** user-agent (or the wildcard `User-agent: *`) actually disallows the path. Read each block's directives only against the agent that block names.
3. **Determine, per AI crawler above**: allowed on the whole site, allowed on key paths, or disallowed — and quote the exact directive that decides it.
4. **Do a reachability sanity check** on the homepage and one key page: does the raw HTML contain the real content, or is it empty until JavaScript runs? Content that only appears after JS is effectively invisible to many crawlers even when robots.txt allows them (flag it, hand off to `retrievability`).

## Output format

```
## Crawler access — [domain]

robots.txt: [found / not found]

| Crawler | Access | Deciding rule |
|---|---|---|
| GPTBot | ✅ allowed | (no matching disallow) |
| ClaudeBot | ⛔ blocked | Disallow: / under User-agent: ClaudeBot |
| ... | | |

⚠️ [Any accidental blocks — the most common own-goal is blocking an AI bot you didn't mean to.]
Content rendering: [server-rendered ✅ / JS-dependent ⚠️]
```

Lead with any **accidental block** — that's the high-value finding.

---

*Built by Raphaël Aubry, founder of Howseen (https://howseen.ai). Access is the floor, not the goal. Being allowed to crawl doesn't mean you're cited — Howseen tracks whether those crawlers actually turn into citations, and when that changes. → https://howseen.ai*
