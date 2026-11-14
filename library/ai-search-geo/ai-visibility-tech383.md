---
name: "ai-visibility"
description: "Whether AI assistants recommend this business, and what can actually be done about it. Use when the user mentions \"ChatGPT\", \"AI search\", \"AI Overviews\", \"Perplexity\", \"Copilot\", \"GEO\", \"AEO\", \"answer engine optimization\", \"why does AI recommend my competitor\", or asks how to get found by AI. Establishes a repeatable citation baseline, maps the source chains each assistant actually draws on, and separates what is measurable from what the industry is guessing about. 中文触发：AI 搜索、ChatGPT 推荐、AI 概览、Perplexity、AI 能不能搜到我、 为什么 AI 推荐竞对、生成式引擎优化、GEO 优化。 Most of this field is inference, not measurement…"
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "tech383/local-seo-kit"
repo_url: "https://github.com/tech383/local-seo-kit"
source: "https://github.com/tech383/local-seo-kit/blob/HEAD/skills/ai-visibility/SKILL.md"
raw_source: "https://raw.githubusercontent.com/tech383/local-seo-kit/HEAD/skills/ai-visibility/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Unspecified skill · tech383/local-seo-kit · skills/ai-visibility/SKILL.md · MIT
     Source: https://github.com/tech383/local-seo-kit/blob/HEAD/skills/ai-visibility/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# AI search visibility

Tier 0 — the baseline method needs nothing but the assistants themselves.

## Read this before promising anything

**Almost nothing in this field is verified.** Assistants are non-deterministic: the same prompt returns different answers on different runs, for different users, in different locations. No public controlled experiment establishes what moves a citation. The vendors do not document their retrieval or ranking.

Practitioner write-ups on "how ChatGPT picks local businesses" are **observational inference**, and reputable ones say so. They also disagree with each other — see the conflict noted below.

**What this means for the work**: the honest position is `[E3]` throughout, one useful measurement method, and a set of actions whose main justification is that they are good local SEO anyway. A competitor selling a confident "GEO package" is selling certainty nobody has.

That is the differentiator here. Do not trade it away for a more impressive-sounding answer.

## When to use

**Use**
- Establishing whether assistants currently mention the business
- Tracking that over time
- Explaining, honestly, what can and cannot be influenced
- Prioritizing work that plausibly affects citation

**Don't use**
- The user wants Google rankings → `local-audit`, `gbp-optimize`
- The user wants a guaranteed AI ranking → no such thing exists; say so
- Profile or citation work → those skills, though both feed this

## Required input

**Needed**
- Business name, city, primary services
- 2-3 competitors
- Which assistants matter to them

**Helpful**: the questions their customers actually ask, in customers' own words

**If missing**: no competitor set → baseline still runs, but "who gets recommended instead" is the most useful half of it. Push for competitors.

## Steps

### 1. Build the prompt set

10-15 prompts a real customer might type. Cover the intent range:

| Intent | Example shape |
|---|---|
| Direct discovery | "best {service} in {city}" |
| Problem-first | "{symptom} — who do I call in {city}" |
| Comparison | "how do I choose a {trade} in {city}" |
| Branded | "is {business} any good" |
| Adjacent | "{service} near {neighbourhood}" |

Write them the way customers write, not the way SEOs write.

### 2. Sample — do not run once

**One run is not a measurement.** Run each prompt **3-5 times**, in a fresh session each time, and record how often the business appears rather than whether it appeared.

Record per prompt: mentioned (n of runs) · position in the list · which competitors appeared · **which sources the answer cited**.

The citation list is the most actionable output. It shows where the assistant went, which is the only real handle on influencing it.

### 3. Source chains — all `[E3]`

Where each assistant appears to draw local information. **All of this is inferred from observation, not documented by the vendors.**

| Assistant | Appears to draw on |
|---|---|
| **ChatGPT search** | Bing's web index; review platforms (Yelp, TripAdvisor); BBB; local media; business websites |
| **Google AI Overviews** | Google's own index and local corpus — closest to conventional Google ranking |
| **Perplexity** | Its own crawler and index, plus cited live sources |
| **Microsoft Copilot** | Bing's index |

`[E3]` ChatGPT's local answers appear to be driven by the Bing web index rather than by Google Business Profile data (multiple independent practitioner analyses, 2026; explicitly presented by their authors as inference, no controlled test).

> ⚠️ **Documented conflict.** Practitioner sources disagree on whether a **Bing Places** listing itself feeds ChatGPT. One analysis states ChatGPT ignores Bing Places entirely and reads only web results; another lists Bing Places as a direct source. **Both are observational and neither is testable from outside.** Present it as unresolved. Claiming a Bing Places listing gets a business into ChatGPT is not supportable.
>
> The practical advice survives the conflict: a Bing Places listing is cheap, takes under an hour, and helps Bing organic regardless. Recommend it on that basis, not on a promised AI outcome.

### 4. Diagnose the gap

When competitors are cited and this business isn't, look at what the assistant actually cited:

| Cited source | What it implies |
|---|---|
| Review platforms | Presence and review depth on Yelp / TripAdvisor / BBB matter more than the GBP here |
| Local media, "best of" lists | Local PR and editorial mentions are the lever |
| Competitor's own site | Their content answers the question directly and yours doesn't |
| Forums, Reddit | Organic discussion. Slow, and not honestly manipulable — see gates |
| Nothing local at all | The assistant has no local corpus for this query; low-value prompt |

### 5. What to actually do

Ordered by confidence, and the top of the list is deliberately unexciting:

**1. Everything already in this kit.** Accurate consistent citations, real reviews across the platforms assistants cite, a site that answers the question plainly, correct structured data. Every plausible mechanism runs through being findable and being consistent. `[E3]`

**2. Presence on the platforms that get cited** — Bing Places, Apple Business Connect, Yelp, BBB, the relevant vertical directories. Cheap and independently useful. `[E3]`

**3. Content that answers the question directly.** Assistants extract answers. A page burying the answer under 600 words of preamble is harder to quote than one that states it in the first paragraph. `[E3]`

**4. Local editorial mentions — and note that a link is not required.** "Best of" lists and local media surface repeatedly in citations. These systems read text and extract entities; **the business being named in a source the assistant reads is the mechanism, with or without a hyperlink.** `[E3]`

That makes conventional local PR the most directly relevant off-site work here, and it sidesteps the link question entirely — no link, no link-scheme exposure. See `nap-citations` for what's worth paying for. Still `[E3]`: no assistant vendor documents mention weighting.

**5. Structured data.** Reduces ambiguity about what the business is and where. `[E3]`

**Notice that none of this is new work.** That is the finding, not a failure of the analysis. There is currently no separate "AI SEO" lever — the leverage is being consistently citable, which is the same thing good local SEO has always produced.

### 6. Re-baseline quarterly

Same prompts, same sampling, same record. Movement across quarters is the only signal available. Do not read a single-run change as a result.

## Hard gates

1. **Never promise an AI ranking or a citation.** No mechanism is documented and no controlled evidence exists. "Improve the odds" is the strongest honest claim
2. **Never present source chains as fact** — they carry `[E3]` and are labelled as inference
3. **Never report a single run as a measurement.** Minimum 3 runs per prompt, report frequency
4. **Never fabricate citation data.** If the assistants weren't actually sampled, the baseline doesn't exist yet — say so
5. **Never recommend manufacturing forum or community discussion** — astroturfing violates those platforms' rules and is the same class of act as fake reviews
6. **Never sell this as a separate service tier from local SEO** when the recommended actions are the same actions

## Myths

`[E4]` ❌ **An `llms.txt` file gets you cited by AI assistants.**
No evidence that any major assistant uses it for retrieval or citation. It costs nothing, but presenting it as an AI visibility lever is unsupported.

`[E4]` ❌ **You can rank-track AI answers like search results.**
Answers are non-deterministic and personalized. A tool reporting "position 3 in ChatGPT" is reporting one sample of a distribution. Sampled frequency over repeated runs is meaningful; a position number is not.

`[E4]` ❌ **Writing content specifically for AI ("AI-optimized content") is a distinct discipline.**
The observable pattern is that assistants quote clear, specific, well-sourced content — which is the same content that serves readers. No controlled evidence supports a separate optimization target.

## Output

Per `specs/output-schema.md`. Include: the prompt set, per-prompt mention frequency, competitor comparison, and **the cited-source list**, which is the actionable part.

**Bad**

> Your AI visibility score is 34/100. You appear in 2 of 10 ChatGPT queries. To improve your AI rankings, implement llms.txt, create AI-optimized content, and increase your GEO score.

An invented score, one unsampled run treated as measurement, a fabricated ranking concept, and two tactics with no evidence behind them.

**Good**

> Sampled 12 prompts, 4 runs each, fresh session every time.
>
> **You appear in 3 of 12 prompts, and inconsistently** — 2 of 4 runs on the ones you do appear in. That variance is normal and is why single runs are worthless here.
>
> The useful part is what it cited instead. Across the prompts you lost, **the same review platform came up nine times** and your profile there is thin — 4 reviews against your competitor's 60. That's the most plausible lever available, though I'll be straight that "plausible" is as far as the evidence goes; nobody has tested this properly.
>
> One thing to set expectations on: I can't promise a citation. Nobody can. The honest version is that being consistently present and well-reviewed on the sources these systems read improves the odds, and it's work worth doing regardless of what the AI does.
>
> Re-baseline in 90 days with the same 12 prompts.

## Knowledge base

**This is the domain that ages fastest in the whole kit.** Assistants change retrieval behaviour without announcement, and any source chain here may be stale within months.

Query the **knowledge base** (`ai-search` domain) at the start of any AI visibility work, not only when a review date has lapsed. If it's unreachable, note the snapshot date prominently — a six-month-old claim about how ChatGPT sources local data may simply be wrong.

## Handoff

| Finding | Next | Skill |
|---|---|---|
| Review platform presence is thin | Review acquisition | `review-response` |
| Missing from Bing Places / Apple / vertical directories | Citation gaps | `nap-citations` |
| Cited competitor pages answer the question, yours don't | Page content | `local-landing-pages` |
| Business entity is ambiguous across sources | Structured data and entity building | `local-schema` |
| Need to know whether source chains have changed | Knowledge base | `playheads-kb-tool` |
