---
name: "ai-search-gap-check"
description: "Find the buyer searches a business can actually win on Google and in AI answers, and check the site is ready to be cited. Builds buyer-intent long-tail queries per market and language, pulls the live Google top 10 and AI Overview sources, judges every ranking page on page quality and domain strength, drops job-search and learn-only results, and writes a ranked report with page briefs. Use when someone says \"run the gap check\", \"AI search gap check\", \"what can I rank for\", \"find keywords I can win\", \"is my site ready for AI search\", \"audit my site for ChatGPT / AI Overviews\", or gives a domain…"
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "frederik-create/ai-search-gap-check"
repo_url: "https://github.com/frederik-create/ai-search-gap-check"
source: "https://github.com/frederik-create/ai-search-gap-check/blob/HEAD/skills/ai-search-gap-check/SKILL.md"
raw_source: "https://raw.githubusercontent.com/frederik-create/ai-search-gap-check/HEAD/skills/ai-search-gap-check/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · frederik-create/ai-search-gap-check · skills/ai-search-gap-check/SKILL.md · MIT
     Source: https://github.com/frederik-create/ai-search-gap-check/blob/HEAD/skills/ai-search-gap-check/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# AI search gap check

You run a three-part audit for the user's own domain and hand back one report they can act on this week:

1. **Gap check.** Which buyer searches can this site actually win? Judged page by page against the live Google top 10 and the AI Overview, per market.
2. **Readiness.** Can AI engines read, trust and quote the site? (Same scored checks as sourcerankai.com/score, run locally, plus checks the score leaves out.)
3. **Page briefs** for the top 3 winnable queries, built only from the user's real facts.

The scripts do the data work. Your job is the judgment the scripts cannot do: writing the config from the user's real business, cutting the shortlist to real buyer searches, reading the top 3 pages by hand, and turning the briefs into something the user can publish.

## The rule this exists to enforce

**A query is winnable only if the whole top 10 is beatable, judged page by page on page quality and domain strength, for a buyer.** Each part of that sentence was learned by getting it wrong on a real run:

- One weak page (a Reddit thread) does not make an easy results page if the other nine are strong.
- Judge the page, not just the domain. A big brand's off-topic help doc is beatable. A small company's exact-match service page is not automatically weak.
- Every market is its own results page. Run local-language queries for non-English markets; they are often the weakest results pages of all.
- Beatable without a buyer is worthless. A results page full of job boards is a job search. A results page full of guides is people learning. Neither books a meeting.

## Where things are

Scripts are in `scripts/` next to this file. Call them as `python3 <this skill's folder>/scripts/gapcheck.py ...`. They need Python 3.9+ and nothing else. Work in the user's current folder: runs go to `gap-check-runs/<domain>-<date>/`.

DataForSEO credentials come from `DATAFORSEO_LOGIN` and `DATAFORSEO_PASSWORD` in the environment or a `.env` file in the current folder. Never print them, never write them into the run folder, never commit them.

## Step 0. Check the setup (30 seconds)

- `python3 --version` must be 3.9 or later.
- Is there a DataForSEO key? If not, say once: "Without a DataForSEO key I can run the full readiness audit and judge results pages you paste in. With a key (pay as you go, a run costs well under $1) I pull everything live." Then continue in whichever mode they choose. Never ask for the key to be pasted into chat; point them to `.env.example`.

## Step 1. Write the config from the real business

```bash
python3 scripts/gapcheck.py init --domain example.com
```

This creates `gap-check-runs/<domain>-<date>/config.json` with the company name and description read from the homepage. Now fill it in. **Read the site first** (homepage, service pages, pricing, about, case studies, `llms.txt`) and fill everything you can from what you find. Ask the user only for what you cannot find, in one message.

- **also_yours**: other domains the user controls (a parent brand, a sister site). They show as "yours" in the results instead of as competitors.
- **markets**: where their buyers are. `{"us": {"location": "United States", "language": "en"}, "dk": {"location": "Denmark", "language": "da"}}`. Location names are Google's (United Kingdom, Germany, Sweden ...). If they sell into a non-English market, add it with its own language.
- **seeds** per market, in that market's language: 3 to 8 short service phrases a buyer types ("deal sourcing", "outsourced sdr", "mødebooking"). Plus "for"-style stems ("lead generation for"). Short seeds return more long-tails.
- **queries** per market: 8 to 15 long-tail buyer searches you write yourself from the site: the service plus an industry, a place, a company size, "agency", "company", "pricing", "cost". These always get checked, even if the keyword database has never heard of them. Specific long-tails win; head terms almost never do.
- **match.exclude_extra**: a regex of things that look related but are not buyers for THIS business: industries they don't serve, tools if they sell a service, competitor brand names, B2C variants. Example: `"dentist|realtor|insurance agent|software|tool|free"`.
- **synonyms**: groups of phrases that mean the same job in this market, first one wins: `[["deal origination", "deal sourcing"], ["appointment setting", "meeting booking"]]`. Without them, a page about "deal sourcing" looks off-topic for "deal origination", and an off-topic page scores 0, which makes a results page look easier than it is.
- **facts**: only true facts, each from the site or the user. `offer` (one line: what, for whom), `price` (as published), `proof` (results with numbers, as the site states them), `case_studies` (URLs), `method` (their named steps), `proprietary_data` (numbers only they have), `people` (who does the work), `location`. Leave a fact empty rather than guess. The briefs mark empty facts as gaps for the user to fill. **Never invent a price, a client, a result or a number.**

Delete the `_help` line when done.

## Step 2. Readiness (free, about a minute)

```bash
python3 scripts/gapcheck.py readiness --run <run>
```

## Step 3. Build and cut the shortlist

```bash
python3 scripts/gapcheck.py estimate --run <run>     # tell the user the estimate
python3 scripts/gapcheck.py keywords --run <run>
```

Now open `shortlist.txt` and **edit it by hand**. This is the most important judgment in the run:
- Delete anything a buyer of THIS business would not type: wrong industry, job titles, "how to", tools, definitions.
- Delete near-duplicates (keep the one with the clearest buyer wording).
- Make sure every market has queries in its own language.
- Keep 10 to 20 lines. Each costs about half a cent to check.

`keywords_scored.csv` has the whole filtered universe with volume, CPC and a score; pull good ones from it into the shortlist.

## Step 4. Pull and judge

```bash
python3 scripts/gapcheck.py serps --run <run>
python3 scripts/gapcheck.py judge --run <run>
```

No key: `serps` writes `serps_manual.txt`. Ask the user to fill it (instructions are in the file), or fill it yourself if you have a browser tool and can do so without solving CAPTCHAs. Then run `judge`.

## Step 5. Read the top 3 by hand (do not skip)

For every query the judge calls WINNABLE or GUIDE, open the top 3 results yourself (WebFetch or a browser) and check what the script cannot:
- Pages flagged "renders client-side" or "not fetchable" were judged on type and links only. Look at them.
- Is a "service" page really the same service? Is an "off-topic" page really off-topic?
- Does the AI Overview define the term differently from how the user sells it? (Example from a real run: Google's AI Overview defined "mødebooking" as phone telemarketing, so an email-outreach agency had to position the page as "mødebooking via email and LinkedIn".)
- For non-English markets, does the query mean what you think it means?

Write what you find in `notes.md` in the run folder, one short paragraph per query. The report puts these notes at the top. When you overrule a verdict, also put it in `overrides.json` so the tiers, the briefs and the pitch list follow your judgment, then rerun `judge` and `report` (no new API cost: everything is cached):

```json
{"uk|deal sourcing companies": {"tier": "DROP", "why": "In the UK this means property deal sourcing, not private equity. Wrong buyer."},
 "us|sell side mandate origination for m&a advisors": {"priority": 1}}
```

`priority` puts a query first within its tier when your read of the pages says it is the better bet than its score.

## Step 6. Report and finish the briefs

```bash
python3 scripts/gapcheck.py report --run <run>
```

`REPORT.md` now has the readiness results, the ranked winnable queries with the reason for each, everything that was dropped and why, who the AI Overviews read and name, and a brief for each of the top 3 pages.

Then finish the briefs **in place** in `REPORT.md` (rerunning `report` overwrites your edits, so do this last):
- Write the final short answer: 40 to 60 words, names the company, the price and one proof point, using only the facts in the config. Keep any [ADD: ...] marker where a fact is missing.
- Rewrite the title and H1 so they read naturally while keeping the exact query.
- Fill "What you get" and "How it works" from the site's own wording.
- Draft the answers to the FAQ questions from the user's facts, or leave them for the user if the facts are not there.
- Apply the only-you test to each brief: *what would Google miss without this page, and could a competitor copy it?* If the page would be copyable, say what it needs.

## Step 7. Hand it over

Tell the user, in a few lines: the readiness score and the 2 or 3 fixes that matter most, the top 3 pages to build (query, market, why it is winnable), the facts missing from the briefs, and where the report and CSVs are. Do not paste the whole report into chat.

## Honest limits (say them when relevant)

- Volume for niche B2B long-tails is under-reported. A 20-a-month query can pay for the page with one client. Do not drop a buyer query on volume alone.
- Results pages change. Judge on the live pull, re-check in 60 to 90 days.
- Without a Backlinks subscription on the DataForSEO key, domain strength comes from estimated organic keywords (Labs data), which is a rougher measure. The report says which was used.
- Some sites block automated readers. Those pages are judged on type and links only and are flagged for a hand check.
