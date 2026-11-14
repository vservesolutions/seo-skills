---
name: "keyword-and-rank-research"
description: "Look up a website's Google organic position for a keyword (US, top 20), whether Google shows an AI Overview and whether it cites the site, plus monthly Google search volume, CPC and competition for many keywords in one batch. Use when the user asks \"where do I rank on Google for X\", \"does the AI Overview cite me\", \"how many people search for these keywords\", \"which of these keywords are worth targeting\", or wants to compare Google rank with AI engine citations for the same question."
category: "keyword-research"
platforms: ["unspecified"]
platform_source: "none"
repo: "Geondex/skills"
repo_url: "https://github.com/Geondex/skills"
source: "https://github.com/Geondex/skills/blob/HEAD/skills/keyword-and-rank-research/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Geondex/skills/HEAD/skills/keyword-and-rank-research/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · Geondex/skills · skills/keyword-and-rank-research/SKILL.md · MIT
     Source: https://github.com/Geondex/skills/blob/HEAD/skills/keyword-and-rank-research/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Keyword and rank research

Two jobs:

1. **Google rank**: where does the site rank for one keyword, and does the AI Overview cite it? 1 credit.
2. **Search volume**: how many people search each phrase every month? One batch call, 20 credits for 1 to 200 keywords.

Shared details (auth, errors, limits): see the `geondex-api` skill.

## Prerequisites

- `GEONDEX_API_KEY` is set.
- A domain without scheme, like `example.com`, for rank checks.

## Google rank (1 credit per keyword)

Tell the user the cost first: 1 credit per keyword.

```bash
curl -s https://geondex.com/api/v1/rank -H "Authorization: Bearer $GEONDEX_API_KEY" -H "content-type: application/json" -d '{"keyword":"best crm for small agencies","domain":"example.com"}'
```

`keyword` is 1 to 200 characters. Results are for Google US, desktop, top 20 organic results.

Response fields:

- `data.rankGroup`: 1-based organic position. `null` means the domain is not in the top 20.
- `data.rankAbsolute`: position counting every block on the page (ads, boxes, and so on), not only organic results. It is usually a bigger number than `rankGroup`.
- `data.url`: the page that ranks, or `null`.
- `data.aiOverviewPresent`: Google showed an AI Overview for this keyword.
- `data.aiOverviewCitesDomain`: the AI Overview cites the domain.

The `summary` line says it all, for example: `"best crm for small agencies": example.com #4 on Google; AI Overview present, does not cite you.`

How to present it: position (or "not in the top 20"), the ranking URL, and the AI Overview status. Use `rankGroup` as "the position", since that is what people mean.

For several keywords, call once per keyword, one after another, and show a table: keyword, position, URL, AI Overview (none / present / cites you). Say the total cost before you start.

## Search volume (batch: 20 credits for 1 to 200 keywords)

**Always send every keyword in ONE call.** Pricing is 1 credit per 10 distinct keywords with a minimum of 20 credits per call. So 1 keyword costs 20 credits, and 200 keywords also cost 20 credits. 1,000 keywords (the maximum) cost 100. Never call this once per keyword. Collect the full list first, remove duplicates, then make one call.

Tell the user the cost first.

```bash
curl -s https://geondex.com/api/v1/volume -H "Authorization: Bearer $GEONDEX_API_KEY" -H "content-type: application/json" -d '{"keywords":["crm for agencies","best crm for small agencies","hubspot vs pipedrive"]}'
```

For a long list in a file (one keyword per line):

```bash
jq -R -s -c '{keywords: (split("\n") | map(select(length > 0)) | unique)}' keywords.txt | curl -s https://geondex.com/api/v1/volume -H "Authorization: Bearer $GEONDEX_API_KEY" -H "content-type: application/json" -d @-
```

Response: `data.rows[]`, each with:

- `keyword`
- `searchVolume`: average monthly Google searches (US). `null` means there is no data. That usually means very low volume, not zero. Do not report it as a number.
- `cpc`: cost per click in Google Ads, or `null`.
- `competition`: `LOW`, `MEDIUM` or `HIGH` (Google Ads competition), or `null`.
- `competitionIndex`: 0 to 100, or `null`.

How to present it: a table sorted by `searchVolume`, highest first, with the `null` rows at the bottom marked "no data". Point out the phrases with good volume and low or medium competition.

## Combine with AI visibility

Search volume and Google rank are about Google. AI citations are a separate thing. A useful combined workflow:

1. Get candidate questions from `find-buyer-prompts`.
2. Run `keyword_volume` once on all of them (20 credits) to see which have real demand.
3. For the top few, run `google_rank` (1 credit each) and `check-ai-visibility` (57 credits each on default models).
4. Show one table: question, monthly searches, Google position, AI Overview, cited by how many of the five AI engines.

This shows where the site ranks on Google but is missing from AI answers, or the other way round.

## Errors

- `402 credits_exhausted`: the call needs more credits than the user has. For volume, remember the 20-credit minimum. Show the message and the link <https://geondex.com/account>.
- `404 not_found`: this tool is not available right now. Tell the user.
- `502 upstream_failed`: the search data source failed. Safe to retry once.
- Full table: `geondex-api`.
