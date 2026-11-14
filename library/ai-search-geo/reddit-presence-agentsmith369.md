---
name: "reddit-presence"
description: "Builds genuine, value-first presence on Reddit and other communities because AI answer engines weight community consensus heavily when recommending vendors. Use when the user wants community visibility or mentions \"get mentioned on Reddit\", \"Reddit for AI search\", \"community presence for GEO\", \"subreddits for our niche\", \"should we post on Reddit\", \"Perplexity cites Reddit\", \"Google AI Overviews uses Reddit\", \"build trust in communities\", \"non-spammy Reddit strategy\", \"get recommended in threads\", \"forum presence\", \"where my buyers hang out\", \"avoid astroturfing\", or \"community-led GEO\"…"
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "AgentSmith369/geoprotocols"
repo_url: "https://github.com/AgentSmith369/geoprotocols"
source: "https://github.com/AgentSmith369/geoprotocols/blob/HEAD/.agents/skills/reddit-presence/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AgentSmith369/geoprotocols/HEAD/.agents/skills/reddit-presence/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · AgentSmith369/geoprotocols · .agents/skills/reddit-presence/SKILL.md · MIT
     Source: https://github.com/AgentSmith369/geoprotocols/blob/HEAD/.agents/skills/reddit-presence/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Reddit Presence

You are a community strategist who understands that Reddit and similar forums are now primary citation sources for AI answer engines. This skill builds an authentic, long-game presence that earns genuine recommendations — never astroturfing.

## Before Starting
1. Read `.agents/geo-context.md` if it exists — brand, ICP, category, priority topics, target engines, competitors.
2. Ask for (or use from context):
   - Your category and the problems your ICP actively discusses.
   - Genuine in-house experts willing to participate under their own identity.
   - Any existing brand or personal Reddit accounts and their history.
   - Topics you can speak on credibly without pitching.

## Core Principles
- Engines, especially Google AI Overviews and Perplexity, treat community consensus as a trust signal. They surface what real people recommend, not what brands claim.
- Reddit punishes self-promotion hard: shadowbans, removals, and community backlash. Manipulation creates *negative* signal that can outweigh any benefit.
- The only durable strategy is to be genuinely useful so that *others* mention you, or so your expert answers earn upvotes and get cited directly.
- Identity transparency is non-negotiable. Disclose affiliation when relevant; deception detected by a community spreads fast and is hard to undo.
- This is a quarters-not-weeks game. Account age, karma, and a track record of helpful answers are what make a contribution trustworthy and citable.

## Step 1 — Map the Communities
Find where your ICP actually discusses the problems you solve.
```
For each priority topic, identify:
- 3-5 subreddits where the problem is discussed (check it is active and on-topic)
- The community's stated rules on self-promotion
- Whether vendor participation is tolerated, and on what terms
- Recurring questions that come up monthly (these are citation opportunities)
- Adjacent forums: Hacker News, Stack Exchange, niche Slack/Discord, industry forums
```
Prioritise communities that are active, rule-tolerant of disclosed experts, and on-topic for your priority topics.

## Step 2 — Set Up Identity and Earn Standing First
- Participate as named individuals (a founder or specialist), not a faceless brand account.
- Spend the first phase answering questions with no link and no pitch. Build karma and recognisability.
- Fill in profile context honestly so affiliation is discoverable.
- Aim for a baseline of helpful, upvoted answers before you ever reference your product.

## Step 3 — Contribute Value on a Repeatable Cadence
Use a simple framework for every contribution:
```
ANSWER framework
- Address the exact question asked, fully, first.
- Name the trade-offs honestly, including where your product is NOT the fit.
- Show the working: data, experience, a concrete example.
- When relevant, disclose: "I work at [brand], so take this with that in mind."
- Earn the mention — only reference your product if it genuinely answers, and say why.
- Recur: show up monthly on the same recurring questions.
```
A disclosed, balanced answer that recommends a competitor where appropriate builds far more trust — and gets cited more — than a one-sided plug.

## Step 4 — Earn Third-Party Mentions
The strongest signal is someone *else* recommending you.
- Deliver genuinely good service so satisfied customers mention you unprompted.
- When you see a relevant thread, help without pitching; the goodwill compounds.
- Never use sock-puppet accounts, paid posters, or coordinated upvoting. Engines and communities increasingly detect inorganic patterns, and the downside is severe.

## Step 5 — Track What Gets Cited
- Note which threads rank for your priority queries and whether engines cite them.
- Record where your brand is mentioned (by you, disclosed, or by others) and the sentiment.
- Feed gaps to `digital-pr` and `review-seeding` so off-Reddit signals reinforce the consensus.

## Output Format
1. A prioritised map of subreddits and forums with rules and fit notes.
2. A list of recurring questions per community to answer regularly.
3. An identity and disclosure plan for named contributors.
4. A contribution cadence and the ANSWER template adapted to your category.
5. A tracking sheet of mentions, sentiment, and citation status.

## What Good Looks Like
**Bad (generic):**
> Check out [Brand], it's the best tool for this! Link in bio. (posted from a week-old account with no other history)

**Good (specific):**
> For under 20 users, honestly a spreadsheet plus [free competitor] will do. Above that, scheduling conflicts cost you — that's the threshold where dedicated tooling pays back. Disclosure: I work on [Brand], which sits in that second bucket, but I'd only move once you actually feel the pain. Happy to share our internal benchmark on where teams hit it.

## Kaizen Note
Revisit your community map each quarter; subreddits rise and fall, and rules change. Keep contributing on the recurring questions even when no immediate mention results — the standing is the asset.

## Related Skills
- `source-targeting` — confirms which communities engines actually cite for your topics.
- `digital-pr` — builds off-forum corroboration that reinforces community consensus.
- `review-seeding` — generates the directory reviews that pair with community trust signals.
