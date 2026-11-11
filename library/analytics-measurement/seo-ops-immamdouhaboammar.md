---
name: "seo-ops"
description: "Deep marketing playbook for seo ops. PrePilot SEO, GEO, AEO & Discovery specialist derived from ai-marketing-skills-ericosiu."
category: "analytics-measurement"
platforms: ["unspecified"]
platform_source: "none"
repo: "imMamdouhaboammar/prepilot-for-marketing"
repo_url: "https://github.com/imMamdouhaboammar/prepilot-for-marketing"
source: "https://github.com/imMamdouhaboammar/prepilot-for-marketing/blob/HEAD/skills/seo-ops/SKILL.md"
raw_source: "https://raw.githubusercontent.com/imMamdouhaboammar/prepilot-for-marketing/HEAD/skills/seo-ops/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 3
collected: "2026-11-11"
---

<!-- Unspecified skill · imMamdouhaboammar/prepilot-for-marketing · skills/seo-ops/SKILL.md · MIT
     Source: https://github.com/imMamdouhaboammar/prepilot-for-marketing/blob/HEAD/skills/seo-ops/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Seo Ops

## PrePilot role

This is a deep SEO, GEO, AEO & Discovery specialist inside the free PrePilot for Marketing experience. Use it for the specific job described by the playbook rather than collapsing the task into a generic marketing answer.

Source lineage: ai-marketing-skills-ericosiu/seo-ops/SKILL.md @ fa04af5627baaf6afb4074edbbbe1f7b42987b28
Source license: MIT

## Source dependency pack

This Skill includes safe source-relative resources under `upstream/` and explicit omission or missing-resource notes under `upstream-notes/`. Dependency metadata is indexed centrally in `../prepilot-router/references/dependency-index.json`. Copied resources: 0; linked public Skills: 0; omitted runtime helpers: 0; unresolved upstream references: 0.

## Runtime contract

- Use the current conversation, supplied files, and already available connected tools before asking for more input.
- Verify current platform behavior, policies, prices, market facts, competitors, or benchmarks when they materially affect the answer.
- Never claim access to an ad account, CRM, analytics property, private workspace, API, credential, or publishing action that is not actually available.
- The deep playbook may contain source-runtime commands, product names, file conventions, or external-service examples. Treat those as implementation notes. Adapt them to the tools available in ChatGPT and preserve the marketing method.
- The free Plugin must remain useful without paid PrePilot MCP. If connected private data or an external action would improve the job, complete the non-connected analysis first and state the missing dependency precisely.
- Do not invent performance numbers, customer evidence, quotes, tests, rankings, market sizes, account states, or competitor facts.
- Preserve the user's market, language, audience, funnel stage, business model, budget, and risk constraints throughout the work.

## Neural connections

- Domain router: `router-seo-geo`
- Requires: `auto-research` - Auto Research
- Feeds: `conversion-ops` - Conversion Ops
- Next best: `market-report` - Market Report
- Complements: `revenue-intelligence` - Revenue Intelligence
- Complements: `market-brand` - Market Brand
- Validates with: `market-audit` - Market Audit
- Fallback: `technical-seo` - Technical Seo
- Parallel: `blog-multilingual` - Blog Multilingual

Use these connections only when they add a distinct job. A normal request should not expand into the entire graph.

## Operating rules

1. Identify the concrete decision or deliverable this specialist owns.
2. Separate supplied evidence, verified evidence, assumptions, and unknowns before applying the playbook.
3. Follow the detailed method below at full depth. Do not replace it with a short generic checklist.
4. When another specialist owns a downstream job, hand off the relevant artifacts instead of redoing its work.
5. For public, spend-bearing, client-facing, or high-impact output, use the connected validation edge before treating the work as final.
6. Read packaged `upstream/` references when the source playbook points to them. Files under `upstream-notes/` explain resources omitted by the public-distribution safety gate or absent from the pinned source.

## Deep playbook

> Adapted from `ai-marketing-skills-ericosiu/seo-ops/SKILL.md` under MIT. Runtime-specific instructions are subordinate to the PrePilot runtime contract above.

# AI SEO Ops

## Preamble (runs on skill start)

```bash
# Version check (silent if up to date)
python3 telemetry/version_check.py 2>/dev/null || true

# Telemetry opt-in (first run only, then remembers your choice)
python3 telemetry/telemetry_init.py 2>/dev/null || true
```

> **Privacy:** This skill logs usage locally to `~/.ai-marketing-skills/analytics/`. Remote telemetry is opt-in only. No code, file paths, or repo content is ever collected. See `telemetry/README.md`.

---

AI-powered SEO operations: keyword intelligence, competitor gap analysis, GSC optimization, and trend detection.

## When to Use

- User asks for keyword research, content brief, or SEO analysis
- User wants to find quick-win keywords from Google Search Console
- User needs a competitor gap analysis
- User wants to identify trending topics for content creation
- User asks about decaying content or traffic drops
- User wants a prioritized list of keywords to target

## Tools

### Content Attack Brief (`content_attack_brief.py`)

Full keyword intelligence pipeline. Requires `[optional connected credential]` and GSC auth.

```bash
# Run the full brief
python content_attack_brief.py
```

**What it produces:**
- Topic fingerprint from your content library
- BOFU money keywords ranked by Impact × Confidence
- Trending keywords with sparkline visualizations
- Competitor gap analysis (keywords they rank for, you don't)
- Decaying page alerts (traffic drops >30%)
- Execution pipeline (auto-create → semi-auto → team)

**Output:** Prints formatted report to stdout + saves JSON to `OUTPUT_DIR/content-attack-brief-latest.json`

### GSC Client (`gsc_client.py`)

Google Search Console API client. Works as CLI or importable library.

```bash
# CLI usage
python gsc_client.py --queries 50 --days 28
python gsc_client.py --striking                    # Striking distance keywords (pos 4-20)
python gsc_client.py --pages 100 --days 7
python gsc_client.py --trend                       # Daily click/impression trend
python gsc_client.py --devices                     # Mobile vs desktop split
python gsc_client.py --sites                       # List verified properties
python gsc_client.py --json --queries 25           # JSON output
```

```python
# Library usage
from gsc_client import GSCClient

gsc = GSCClient()
rows = gsc.striking_distance(days=28, min_position=4, max_position=20)
for row in rows:
    print(f"{row['keys'][0]}: pos {row['position']:.1f}, {row['impressions']} impressions")
```

### GSC Auth (`gsc_auth.py`)

One-time OAuth setup for Google Search Console access.

```bash
python gsc_auth.py
# Opens browser → Google Sign-In → saves token locally
```

### Trend Scout (`trend_scout.py`)

Multi-source trend detection. No API keys required for basic functionality.

```bash
python trend_scout.py
```

**Sources:** Google Trends RSS, Hacker News, Reddit, X/Twitter (needs `[optional connected credential]`), YouTube outlier detection

**Output:** Prints summary + saves JSON to `OUTPUT_DIR/flash-trends-latest.json` and markdown report.

## Configuration

All scripts read from environment variables. Copy `.env.example` to `.env` and fill in your values.

Required:
- `GSC_SITE_URL` - your Google Search Console property URL
- `GOOGLE_CLIENT_ID` / `[optional connected credential]` - for GSC OAuth
- `YOUR_DOMAIN` - your root domain

Optional:
- `[optional connected credential]` - enables Ahrefs keyword data and competitor analysis
- `COMPETITORS` - comma-separated competitor domains
- `[optional connected credential]` - enables X/Twitter trend scanning
- `CONTENT_VERTICALS` - comma-separated topics for trend relevance scoring
- `TREND_SUBREDDITS` - comma-separated subreddits to monitor

## Scoring Model

Keywords are scored on two axes:

**Impact (0-10):** Volume + CPC + Funnel Stage + Trend direction
**Confidence (0-10):** Keyword Difficulty + Current ranking position + Topic authority

**Priority = Impact × Confidence** (max 100)

## Funnel Classification

- **BOFU:** Commercial/transactional intent, or keywords containing "agency", "services", "pricing", "best", "vs", "hire"
- **MOFU:** Informational with buying signals - "how to", "guide", "roi", "case study"
- **TOFU:** Pure informational

## Recommended Workflow

1. **Weekly:** Run `content_attack_brief.py` for the full intelligence report
2. **Daily:** Run `gsc_client.py --striking` to monitor striking distance keywords
3. **2x/week:** Run `trend_scout.py` to catch trending topics early
4. **Monthly:** Review competitor gaps and adjust `COMPETITORS` list

## SEO/AEO/GEO Closed Loop

Use analytics readbacks before promoting any SEO, AEO, GEO, or content-refresh playbook change.

Inputs:
- GSC clicks, impressions, CTR, average position, queries, pages
- GA4 sessions, engaged sessions, conversions, assisted leads
- Ahrefs rankings, backlinks, traffic estimates, keyword movement
- ClickFlow opportunities where available
- AI-search / answer-engine / GEO visibility where available
- CMS/page change log

Judgment:
- Compare baseline vs candidate windows.
- Segment by page, query, topic, intent, and source.
- Track confounders: seasonality, indexing lag, brand spikes, campaigns, tracking changes, and unrelated site edits.

Promotion rule:
- Promote the playbook patch only if the candidate beats baseline or exposes a repeatable signal.
- Otherwise mark it `unproven`, keep testing, or rollback.

Common readback windows:
- Content refresh: 7, 14, 28, and 56 days
- New content: 14, 28, 56, and 90 days
- Technical SEO fix: daily for 7 days, then 28-day readback
- AEO/GEO visibility: weekly, because answer engines are noisy gremlins with citations

Required readback fields:
- change made
- owner
- page/query/topic affected
- baseline window
- candidate window
- source systems pulled
- primary and secondary metrics
- caveats
- decision: promote / keep testing / rollback / unproven
- next playbook patch

## Dependencies

```bash
pip install -r requirements.txt
```

## Output contract

- Deliver the actual artifact, analysis, decision, or plan requested by the user, not a summary of this Skill.
- Keep evidence and assumptions distinguishable when they affect the recommendation.
- Include concrete next actions, decision rules, or validation steps when the playbook implies them.
- Preserve useful tables, frameworks, examples, scoring models, templates, and checklists from the deep playbook when they improve the requested output.

## Quality gate

- The result addresses this specialist's exact job rather than giving broad marketing advice.
- Strong claims have evidence, a source, or explicit uncertainty.
- Recommendations respect channel, market, funnel, economic, and operational constraints.
- No unavailable tool, account action, or live data is represented as completed.
- The handoff names the next specialist only when another distinct marketing job remains.

## Handoff

Return the completed Seo Ops output plus only the evidence, assumptions, and decisions needed by the selected `feeds`, `next_best`, or `validates` connection. Do not repeat upstream analysis unless new evidence changes it.
