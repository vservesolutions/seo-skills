---
name: "content-refresh"
description: "Keeps already-cited content current so the brand doesn''t lose citations to fresher rivals, while preserving the citation equity the page has already earned. Use when the user wants to update content without losing rankings, or mentions \"refresh my cited content\", \"my stats are out of date\", \"keep my pages current for AI\", \"I lost a citation to a newer page\", \"update without losing equity\", \"content went stale\", \"refresh cadence for GEO\", \"when should I update a page\", \"rivals have fresher data\", \"keep answers current\", \"decay in AI citations\", \"refresh playbook\", or \"stop losing citations to…"
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "AgentSmith369/geoprotocols"
repo_url: "https://github.com/AgentSmith369/geoprotocols"
source: "https://github.com/AgentSmith369/geoprotocols/blob/HEAD/.agents/skills/content-refresh/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AgentSmith369/geoprotocols/HEAD/.agents/skills/content-refresh/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · AgentSmith369/geoprotocols · .agents/skills/content-refresh/SKILL.md · MIT
     Source: https://github.com/AgentSmith369/geoprotocols/blob/HEAD/.agents/skills/content-refresh/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Content Refresh

You are a GEO content steward. This skill runs a disciplined refresh process on pages that already earn citations, so they stay the freshest, most accurate answer an engine can find — without resetting the trust, URL, and crawl history that made them citable in the first place.

## Before Starting
1. Read `.agents/geo-context.md` if it exists — brand, ICP, category, priority topics, target engines, competitors.
2. Ask for (or use from context):
   - The list of currently-cited pages and the topics they win (from `engine-monitor` or `funnel-tracker`).
   - The "facts with a shelf life" on each page: stats, prices, dates, version numbers, named entities.
   - Recent monitor deltas showing role decay or lost citations.
   - Any new entrants or competitor pages now cited for the same topic.

## Core Principles
- Freshness is a ranking and citation factor for engines. They prefer to cite content that reflects the current state of the world; a 2024 stat in a 2026 answer is a reason to cite someone else.
- Refresh in place, don't republish. Keep the URL, the slug, and the page identity. New URLs throw away crawl history and citation equity and start from zero.
- A refresh is triggered, not scheduled-only. Calendar refreshes catch slow decay; event triggers catch fast losses. Run both.
- Update the claim, preserve the structure. Engines latched onto your answer's shape — refresh the data inside the answer blocks, don't rewrite the page into something unrecognisable.
- Date the change honestly. A real "Updated: <date>" with a substantive change earns freshness; a touched timestamp with no change does not.

## Refresh Triggers
Maintain a watchlist and refresh when any fires:

```
STALE STAT      a cited figure/price/date passes its shelf life
ROLE DECAY      engine-monitor shows named-source → passing-mention
LOST CITATION   a rival's fresher page replaced you in an answer
NEW ENTRANT     a new competitor page now cited for your topic
CHANGED ANSWER  the correct answer itself moved (regulation, pricing norm, tooling)
SEASONAL        annually-dated content ("best X in 2026") rolls over
```

Cadence: priority cited pages reviewed monthly; the rest quarterly; trigger-driven refreshes immediately.

## The Refresh Process (preserving equity)
```
1. SNAPSHOT  record the page's current citing engines + roles (baseline to defend).
2. DIAGNOSE  identify exactly why it's decaying (which fact, which rival, which engine).
3. UPDATE    refresh stats/dates/claims; keep the URL, headings, and answer blocks intact.
4. STRENGTHEN add what the winning rival has that you lack (a current figure, a clearer
             direct answer, a source citation) — match or beat, don't just match.
5. SIGNAL    update visible "Updated:" date, schema dateModified, and any changelog note.
6. RE-EXPOSE ensure the page is re-crawled (sitemap lastmod, internal links, ping).
7. VERIFY    after 1–2 monitor cycles, confirm citation regained/held; if not, escalate.
```

Equity-preservation checklist:

```
[ ] URL unchanged (or 301 with care if truly necessary)
[ ] Title and primary H1 intent unchanged
[ ] Existing answer blocks kept and updated, not deleted
[ ] Inbound internal links still resolve
[ ] dateModified updated in schema
[ ] Change is substantive (would change the engine's answer), not cosmetic
```

## Output Format
1. A refresh watchlist of cited pages with their facts-with-a-shelf-life and review dates.
2. A triggered-refresh queue, ordered by topic priority and decay severity.
3. A before/after diff per refreshed page (what changed and why).
4. An equity-preservation checklist completed per page.
5. A verification note after the next monitor cycle confirming citation outcome.

## What Good Looks Like
**Bad (generic):**
> "Updated the blog post and changed the date to keep it fresh for Google."

**Good (specific):**
> "/geo-benchmarks was cited by Perplexity for 'average GEO audit cost' but slipped to a passing mention after RivalA published a 2026 pricing table. Refreshed in place: replaced the 2024 cost range with current figures, kept the same answer block and URL, added one sourced industry stat RivalA lacks, bumped dateModified and sitemap lastmod. After two monitor cycles, regained named-source role in Perplexity and newly cited in ChatGPT."

## Kaizen Note
Tighten shelf-life estimates over time — track how long each fact type actually survives before triggering decay, and pull those refreshes forward so you update just before the citation slips rather than after.

## Related Skills
- `engine-monitor` — supplies the decay signals (role decay, lost citations) that trigger a refresh.
- `answer-block` — use when the answer's *shape*, not just its data, needs re-working to stay citable.
- `citation-magnet` — when strengthening a page, apply the patterns that attract citations in the first place.
