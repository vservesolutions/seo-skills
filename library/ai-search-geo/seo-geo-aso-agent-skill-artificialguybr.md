---
name: "seo-geo-aso-agent-skill"
description: "Optimize websites, web pages, and mobile apps for organic visibility across all three modern discovery channels — SEO (Google/Bing organic search), GEO/AEO (getting cited by AI answer engines: Google AI Overviews & AI Mode, ChatGPT, Perplexity, Gemini, Claude, Copilot), and ASO (Apple App Store + Google Play). Use this skill WHENEVER the user wants to improve search rankings, get found by AI/LLMs, increase app downloads, or asks to audit, optimize, or fix anything about a site's or app's discoverability — including adjacent phrasings like \"rank higher\", \"show up in ChatGPT\", \"AI search…"
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "artificialguybr/seo-geo-aso-agent-skill"
repo_url: "https://github.com/artificialguybr/seo-geo-aso-agent-skill"
source: "https://github.com/artificialguybr/seo-geo-aso-agent-skill/blob/HEAD/SKILL.md"
raw_source: "https://raw.githubusercontent.com/artificialguybr/seo-geo-aso-agent-skill/HEAD/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-14"
---

<!-- Unspecified skill · artificialguybr/seo-geo-aso-agent-skill · SKILL.md · MIT
     Source: https://github.com/artificialguybr/seo-geo-aso-agent-skill/blob/HEAD/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO · GEO · ASO Optimizer

A unified, evidence-driven system for optimizing **sites, pages, and apps** across organic
search (SEO), AI answer engines (GEO/AEO), and app stores (ASO). Built on 2025–2026 best
practices. **Keyless-first: everything works with free tools; never tell the user to buy a
paid tool** — there is a free path for every task (see `references/free-tools.md`).

## First: route the request

Decide which channel(s) apply, then load the matching reference file(s) **as you need them**
(don't preload all — progressive disclosure keeps you fast):

| The target is… | Channel | Read |
|---|---|---|
| A website / web page ranking in Google/Bing | **SEO** | `references/seo.md` |
| Being cited/recommended by AI (ChatGPT, AI Overviews, Perplexity…) | **GEO/AEO** | `references/geo.md` |
| A mobile app (App Store / Google Play) | **ASO** | `references/aso.md` |
| Any web target (both apply) | **SEO + GEO** | both — they share one playbook |
| An app you also want AI to recommend | **ASO + GEO** | `references/aso.md` §4 + `references/geo.md` |

Also available: `references/free-tools.md` (every free tool + how to invoke it) and
`references/schema-recipes.md` (copy-paste JSON-LD).

**Key truth to carry into every web task:** SEO and GEO are *one playbook*. Crawlable, fast,
well-structured, genuinely helpful, authoritative content with strong entities wins organic
rankings *and* AI citations. Optimize once, measure both (clicks **and** citations).

## The workflow (Scope → Audit → Diagnose → Recommend → Verify)

Run these phases in order. Don't jump to recommendations before you have evidence.

### 1. Scope
Confirm: the URL(s) or app (store + ID/bundle), the goal (rankings? AI citations? installs?
conversions?), target queries/keywords, and geography/locale. If the user gives a vague ask
("improve my SEO"), ask 1–2 sharp questions max, then proceed with sensible defaults rather
than stalling.

### 2. Audit — gather EVIDENCE with the scripts (never guess)
Run the relevant scripts before forming opinions. They are pure-stdlib, need no installs, and
all support `--json` for machine parsing. Invoke with the skill's script dir:

```bash
DIR="$(dirname "$0")/scripts"   # or the absolute path to this skill's scripts/

# --- Web (SEO + GEO) ---
python3 scripts/seo_audit.py        <url>            # on-page + technical (title/meta/H1/canonical/schema/robots/render)
python3 scripts/psi_audit.py        <url> --strategy mobile   # Core Web Vitals (field+lab) via PageSpeed Insights
python3 scripts/schema_check.py     <url>            # extract + validate JSON-LD structured data
python3 scripts/ai_crawler_check.py <url> --live     # can AI SEARCH bots reach it? (the #1 GEO check)
python3 scripts/gen_llms_txt.py     <url>/sitemap.xml --name "Brand" --summary "..."   # optional

# --- Apps (ASO) ---
python3 scripts/aso_keywords.py "<seed>" --store apple --competitors   # free keyword mining + competitors
python3 scripts/aso_keywords.py "<seed>" --store play --expand         # A–Z long-tail expansion
```

Notes:
- `psi_audit.py` keyless shares a public Google quota that is often exhausted (HTTP 429). If
  that happens, tell the user to create a **free** PageSpeed Insights API key and export
  `PSI_API_KEY` — still free, just higher quota. Never treat this as needing a paid tool.
- For rendered-vs-raw HTML comparison (JS/SPA indexing issues), `seo_audit.py` flags the
  suspicion; confirm with Playwright/crawl4ai per `references/free-tools.md`.
- For **AI-citation testing** (are you actually mentioned in AI answers?) there's no free API —
  use the free methods in `geo.md` §8 (scripted prompt-testing, GA4 AI-referrer channel, Bing
  WMT AI Performance, server-log AI-bot grep).

### 3. Diagnose — write findings with the rubric
Every finding you report MUST use this structure so the user can trust and act on it:

**Finding → Evidence → Impact → Fix**, tagged with **severity** and **confidence**.

- **Severity:** `Critical` (blocks indexing/citation/approval) · `High` · `Medium` · `Low` ·
  `Info`.
- **Confidence:** `Confirmed` (the script/HTTP response proves it) · `Likely` (strong
  inference) · `Hypothesis` (needs verification — say how to verify).

Example:
```
[High · Confirmed] robots.txt blocks OAI-SearchBot
  Evidence: ai_crawler_check.py shows Disallow: / for OAI-SearchBot.
  Impact:   Removes the site from ChatGPT Search citations (a different bot from GPTBot).
  Fix:      Allow OAI-SearchBot in robots.txt; keep GPTBot blocked only if opting out of training.
```

Prefer scripted/programmatic verification over eyeballing. If you claim something, cite the
evidence line that supports it. Flag any circulating industry statistic as **[directional]**
unless it traces to a named primary study (the references already do this — mirror it).

### 4. Recommend / Implement
Rank fixes by **impact × effort** — lead with Critical/High, quick wins first. When editing
real files (HTML, robots.txt, sitemaps, app metadata, JSON-LD), make the change and show a
diff; pull exact snippets from `references/schema-recipes.md` and the reference files. Respect
exact limits (e.g. Apple keyword field = 100 chars, no spaces; title ~50–60 chars; CWV
thresholds). For app metadata changes, always recommend A/B testing via the **free native
tools** (Apple PPO / Play Store Listing Experiments) before rolling to 100%.

### 5. Verify & score
Re-run the relevant script to confirm the fix landed (e.g. `schema_check.py` after adding
JSON-LD; `ai_crawler_check.py` after editing robots.txt). Then summarize with a simple gate:

- **SHIP** — no Critical/High findings remain; core checks pass.
- **FIX** — Medium/Low findings remain; safe to ship but improve soon.
- **BLOCK** — a Critical finding remains (e.g. noindex on a page meant to rank, search bots
  blocked, HTTP errors, Android Vitals over threshold). Do not call the work done.

## Output format

Default to a concise report:

```
# <SEO|GEO|ASO> Optimization — <target>
## Summary
<1–3 sentences: overall state + the single most important action + SHIP/FIX/BLOCK verdict>
## Findings (ranked)
<Finding → Evidence → Impact → Fix, each tagged [Severity · Confidence], most severe first>
## Recommended actions (prioritized)
<numbered, impact×effort ordered; note which are quick wins>
## What I verified
<scripts run + results; note anything still unverified and how to check it>
```

Adapt length to the ask — a quick "check my robots.txt for AI" needs one script run and a
short answer, not the full template.

## Non-negotiable principles

1. **Free only.** Never require a paid tool. Every recommendation has a free path
   (`references/free-tools.md`). If a paid tool would help, mention it as strictly optional and
   name the free alternative first.
2. **Evidence over vibes.** Run a script before asserting a technical fact. Tag confidence
   honestly. Don't fabricate metrics.
3. **Be honest about what works.** `llms.txt` is **not** a proven AI-citation lever in 2026 —
   offer it as low-cost discoverability, never oversell it. Blocking `GPTBot` does **not**
   remove a site from ChatGPT Search (that's `OAI-SearchBot`). FAQ/HowTo rich results are
   deprecated but the markup is still worth keeping. The references carry these nuances — don't
   contradict them.
4. **Match the store/engine exactly.** Apple ≠ Google Play (hidden keyword field vs. indexed
   description). Google ≠ Bing. Each AI engine cites different sources. Never blur them.
5. **No manipulation.** No cloaking, keyword-stuffing (it *hurts* AI visibility), fake reviews,
   PBNs, review-gating, or schema that doesn't match visible content — these are spam-policy /
   store-guideline violations that get sites and apps penalized.
6. **Verify limits/thresholds against current docs when it matters.** Stores and Google change
   fields, rich-result support, and thresholds without notice; the references note this.

## Reference map

- `references/seo.md` — ranking systems, Core Web Vitals thresholds, technical/on-page/off-page
  SEO, E-E-A-T, content, free measurement.
- `references/geo.md` — the GEO research (measured citation levers), how AI engines retrieve &
  cite, AI-crawler control, content extractability, entity/schema for AI, free AI-visibility
  measurement, 2026 shifts.
- `references/aso.md` — Apple + Google Play exact field limits/rules, algorithms, CRO,
  localization, free tools, launch checklists.
- `references/free-tools.md` — every free/OSS tool with exact CLI/API invocation; freemium
  traps flagged.
- `references/schema-recipes.md` — copy-paste JSON-LD for the high-value schema.org types.
- `scripts/` — six pure-stdlib, `--json`-capable evidence collectors (above).
