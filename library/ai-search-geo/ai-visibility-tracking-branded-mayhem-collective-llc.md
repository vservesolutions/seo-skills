---
name: "ai-visibility-tracking"
description: "Use when the user wants to know who the AI engines cite — brand mentions and citations inside Google AI Overviews and ChatGPT answers, AI search volume for a query set, or a competitor comparison of AI-answer presence. Triggers on \"who does ChatGPT cite,\" \"AI mentions,\" \"LLM citations,\" \"AI visibility,\" \"are we showing up in AI Overviews,\" \"AI share of voice,\" \"track our brand in AI answers,\" or any AEO/GEO measurement task. Wraps the DataForSEO LLM Mentions API through the shared dataforseo client."
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "Branded-Mayhem-Collective-LLC/seo-visibility-toolkit"
repo_url: "https://github.com/Branded-Mayhem-Collective-LLC/seo-visibility-toolkit"
source: "https://github.com/Branded-Mayhem-Collective-LLC/seo-visibility-toolkit/blob/HEAD/skills/ai-visibility-tracking/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Branded-Mayhem-Collective-LLC/seo-visibility-toolkit/HEAD/skills/ai-visibility-tracking/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · Branded-Mayhem-Collective-LLC/seo-visibility-toolkit · skills/ai-visibility-tracking/SKILL.md · MIT
     Source: https://github.com/Branded-Mayhem-Collective-LLC/seo-visibility-toolkit/blob/HEAD/skills/ai-visibility-tracking/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# AI Visibility Tracking — LLM Mentions Operational Guide

The question every operator is starting to ask: *when an AI answers my customer's
question, am I in the answer?* This skill measures it. It pulls citation data from
Google AI Overviews and ChatGPT responses — which domains get cited, for which
questions, at what AI search volume — and turns it into a baseline, a competitor
comparison, and a monthly tracking cadence.

## File locations (read this first)

Same two-surface layout as the dataforseo skill — the client is shared:

| Context | Client | Working dir | User-facing output |
|---|---|---|---|
| Claude Code (plugin install) | `${CLAUDE_PLUGIN_ROOT}/skills/dataforseo/scripts/dataforseo_client.py` | current cwd | `~/Documents/AI_Visibility_YYYYMMDD/` |
| Claude.ai web / Claude Desktop | `/mnt/skills/user/dataforseo/scripts/dataforseo_client.py` | `/home/claude` | `/mnt/user-data/outputs/` |

Credentials load exactly as documented in the dataforseo skill (plugin userConfig →
env vars → config file). No separate setup.

## When NOT to Use

- No DataForSEO account. Same rule as the dataforseo skill — every call bills.
- The brand has near-zero web presence. If classic SERPs don't know you, AI engines
  won't either — run the dataforseo skill's keyword/backlink work and the
  ai-agent-readiness audit first; come back to measure once there's something to cite.
- You want to *manipulate* AI answers. This skill measures; the defense/offense
  content moves live in your strategy work, not in the measurement.

## Cost discipline — read this before the first call

`llm_mentions/*` endpoints are plain pay-per-call like the rest of the
toolkit — DataForSEO removed its former $100/month minimum top-up on these
endpoints in July 2026. Just fund the account (credits never expire, spend on
any of their APIs).

Official pricing (2026-07):

| Endpoint | Cost | Use for |
|---|---|---|
| `ai_keyword_data/keywords_search_volume/live` | $0.01/task | AI search volume per keyword — the cheap step-0 wide pass (no subscription) |
| `llm_responses/live` | $0.0006/task | Ask a model the actual question, see the answer — spot checks (no subscription) |
| `llm_mentions/aggregated_metrics/live` | $0.10/task + $0.001/row | Citation counts + AI volume per domain |
| `llm_mentions/cross_aggregated_metrics/live` | $0.10/task + $0.001/row | You vs. competitors, side by side, one call |
| `llm_mentions/search/live` | $0.10/task + $0.001/row | Full AI response text + per-citation sources |
| `llm_mentions/top_domains/live` | $0.10/task + $0.001/row | Who dominates AI citations in your space |
| `llm_mentions/top_pages/live` | $0.10/task + $0.001/row | The exact PAGES earning citations — teardown targets |

A full baseline (you + 4 competitors, cross-aggregated, both platforms) runs
$1–3 depending on rows. Coverage: `platform: "google"` = AI Overviews;
`platform: "chat_gpt"` = ChatGPT, **United States location only** per DataForSEO.

## Client methods

```python
client.ai_llm_mentions_aggregated(
    targets=[{"domain": "yourbrand.com", "search_scope": ["sources"]}],
    platform="google",            # or "chat_gpt"
    location_name="United States",
)
# → mentions count, sources_domain frequencies, ai_search_volume

client.ai_llm_mentions_search(
    targets=[{"keyword": "best b2b branding agency dallas"}],
    platform="google",
)
# → individual citations: full AI response text, sources[] (url, position,
#   title), triggering question, per-citation ai_search_volume
```

Additional methods on the shared client:

```python
client.ai_llm_mentions_cross_aggregated(
    target_groups=[
        {"aggregation_key": "us",   "target": [{"domain": "yourbrand.com"}]},
        {"aggregation_key": "them", "target": [{"domain": "competitor.com"}]},
    ],
    platform="google",
)   # → per-group mentions / ai_search_volume / impressions, plus combined totals

client.ai_llm_mentions_top_domains(targets=[{"keyword": "b2b branding agency"}])
client.ai_llm_mentions_top_pages(targets=[{"keyword": "b2b branding agency"}])
client.ai_keywords_search_volume(keywords=["best branding agency dallas", "..."])
client.ai_llm_models()                       # model list for llm_responses
client.ai_llm_response({...})                # payload per current DataForSEO docs
```

`search_scope: ["sources"]` is the citation filter — DataForSEO distinguishes
`search_results` (everything retrieved) from `sources` (actually cited in the
answer). Citations are the metric that matters; always scope to sources unless
you're explicitly studying retrieval.

## The methodology

### 0. Volume pass (cheap, no subscription)

`ai_keywords_search_volume` on the full commercial query set ($0.01). Rank the
queries by AI search volume — this decides where the expensive calls go.

### 1. Baseline (run once)

One `cross_aggregated_metrics` call: your domain + every named competitor as
separate `aggregation_key` groups → the share-of-voice table in a single
request. Save it dated — it's the "before."

### 2. Question-level read (deep pass, selective)

For the 5–10 commercial queries that drive the business: `search/live` with the
keyword as target. Read the actual AI responses. Record per query: who's cited,
at what position, and whether the answer's framing matches how the cited brand
wants to be described. A citation that misdescribes you is a content brief, not
a win.

### 3. Gap analysis

Three lists fall out of #1 + #2:
- **Cited, high volume, not you** → run `top_pages` on those queries: the exact
  competitor URLs earning the citations are your teardown targets.
- **Your pages cited** → protect those pages; they're load-bearing now.
- **Questions with thin/no citations** → open ground; first credible answer wins.

### 4. Monthly cadence

Re-run the baseline monthly (same targets, same platforms — comparability beats
cleverness). Track: mentions delta per domain, new questions entering the set,
position shifts on the deep-pass queries. One page of output: what moved, why it
likely moved (ship log vs. delta), what to publish next month.

## Output shape

Write results to the output dir as both `ai-visibility-YYYYMMDD.json` (raw) and a
short markdown report: share-of-voice table, the three gap lists, and a "next
moves" section with at most three actions. Numbers without a next move are
trivia; keep the actions attached to the data.
