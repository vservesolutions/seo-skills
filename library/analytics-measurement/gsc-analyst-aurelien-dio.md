---
name: "gsc-analyst"
description: "Analyze Google Search Console performance exports and turn them into a prioritized SEO action plan. Use this whenever the user uploads a Search Console export (a ZIP containing Queries.csv and Pages.csv, an .xlsx, or loose CSVs) or asks why their organic traffic changed, which queries to work on next, why clicks dropped while impressions held, whether AI Overviews are eating their clicks, which pages are cannibalizing each other, or what to fix first for organic search. Trigger it when the user simply drops such a file and says \"analyse this\", \"what should I do with this\", or nothing at all…"
category: "analytics-measurement"
platforms: ["claude-code"]
platform_source: "declared"
repo: "aurelien-dio/gsc-analyst"
repo_url: "https://github.com/aurelien-dio/gsc-analyst"
source: "https://github.com/aurelien-dio/gsc-analyst/blob/HEAD/SKILL.md"
raw_source: "https://raw.githubusercontent.com/aurelien-dio/gsc-analyst/HEAD/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-13"
---

<!-- Claude Code skill · aurelien-dio/gsc-analyst · SKILL.md · MIT
     Source: https://github.com/aurelien-dio/gsc-analyst/blob/HEAD/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# GSC Analyst

Turn a Search Console export into a small number of decisions the user can act
on this week.

The failure mode this skill exists to prevent is the confident wrong answer.
Search Console data invites it: the metrics look simple, they are not, and an
analysis that reads them naively produces advice that is fluent, specific, and
harmful. Most of what follows is about the difference.

## Workflow

The user uploads their Search Console export to the conversation and asks for
an analysis. They are usually not developers. Do not ask them to run commands,
install anything, or reshape their files.

1. **Find the uploaded file.** It will be on disk under
   `/mnt/user-data/uploads/`. List that directory rather than assuming a
   filename. The export is normally a ZIP straight from Search Console; pass it
   as-is, unzipping is not needed.

2. **Work out the site and brand terms without asking, if you can.** The site
   URL is usually visible in the page URLs inside the export. Only ask the user
   when the brand is genuinely ambiguous, and ask in one short question.

3. **Run the analyzer.**

   ```bash
   python3 scripts/gsc_analyze.py "/mnt/user-data/uploads/<file>" \
     --site https://example.com \
     [--brand "acme,acme app"] \
     [--query-page query_page.csv] \
     --out /tmp/analysis.json
   ```

   It handles ZIP, XLSX, single CSV, or a directory, and copes with localized
   headers and comma decimals. It needs only `pandas` and `numpy`, both already
   present. Never try to install packages; if something is missing, say so and
   work with what runs.

4. **Read `not_available` before `findings`.** It lists what the export could
   not support. Those gaps go in the report; silently omitting them is how a
   partial analysis gets mistaken for a complete one.

5. **Interpret** using the rules below.

6. **Write the report** using the template at the end, as a markdown file the
   user can download.

Never hand the user raw JSON, and never restate every row. The analyzer's job
is arithmetic; the job here is deciding which three things matter.

If the export is missing something that matters, say what to change in the
export settings, in plain language, at the end. `references/export-guide.md`
has the specifics. Do not open with instructions; analyze what you were given
first.

## Reading order

Work in this order. It is a diagnostic sequence, not a menu — each step
changes how the next one should be read.

### 1. Trend and seasonality — establish whether anything is actually wrong

Read `findings.trend` first. If `yoy.available` is false, the export covers
under ~13 months and **decline cannot be distinguished from seasonality**. Say
so plainly and ask for a 16-month re-export before diagnosing a drop. A great
many "my traffic is falling" panics are November versus January.

`change_28d` is a useful short-term read but is contaminated by seasonality and
by the 2–3 day reporting lag at the end of every export. Never treat the final
few days as a cliff.

### 2. Brand split — establish what SEO is even responsible for

Read `findings.brand_split`. Brand queries obey different rules: high CTR at
any position, volume driven by marketing and word of mouth rather than
ranking. Conclusions differ sharply:

- Brand share above ~50% means organic search is mostly harvesting existing
  demand. Non-brand clicks are the real measure of SEO, and they are the
  number to track.
- Non-brand falling while brand holds is an SEO problem.
- Brand falling while non-brand holds is a marketing or reputation problem, and
  no amount of SEO work will fix it.

Check `brand_terms_used` before trusting the split. Terms derived from a domain
are deliberately conservative, so a short brand name or a nickname the domain
does not contain gets counted as non-brand. If the brand share looks too low
for the business, rerun with explicit `--brand` terms.

### 3. Irrelevant impressions — check before trusting anything CTR-based

Read `findings.irrelevant_impressions` and `config.ctr_curve_source` together.

Some sites collect large impression volumes on queries they rank for but that
have nothing to do with what they sell. An insurance site ranking on page one
for a city name is the type. Those impressions were never going to become
clicks, the titles are not the problem, and every hour spent on them is wasted.

When `share_of_impressions` is large, this changes how the rest of the report
should be written. Say it in the headline, and strip those queries out of the
recommendations rather than leaving them at the top of the list where their
volume puts them.

`config.ctr_curve_source` tells you whether the expected-CTR curve was fitted
from this site or fell back to a published one:

- `fitted` — normal.
- `fallback_implausible_fit` — the fit was rejected because it did not look
  like a click-through curve. This is the same pathology: when most impressions
  come from queries nobody clicks, the site stops being a usable baseline for
  itself. All CTR findings are directional only, and the report must say so.
- `fallback_insufficient_data` — too little data to fit. Same caution.

### 4. SERP absorption — the cohort that ranking cannot explain

Read `findings.serp_absorption`. This cohort holds impressions, keeps or
improves its ranking, and loses clicks anyway. Requiring stable-or-better
position is what makes it interesting: the usual explanation for lost clicks,
having dropped down the page, is excluded by construction.

Consistent with: an AI Overview or other SERP feature answering the query in
place, a featured snippet the site does not own, an expanded People Also Ask
block, or a shift in the query mix aggregated into one row.

**Search Console does not label AI Overview impressions.** Write "consistent
with answer-in-place SERP features, including AI Overviews" and never "AI
Overviews caused this". The honest framing is more useful anyway, because the
response is the same across those causes.

What to do with it is not "rank harder" — the ranking is already fine. It is to
move effort toward queries where a click remains necessary: pricing,
comparisons, tools, calculators, login, documentation, anything requiring
the user's own data or account. Definitional and explanatory content is the
part being absorbed, and writing more of it compounds the loss.

### 5. CTR anomalies — the cheapest wins available

Read `findings.ctr_anomalies.underperforming`. These queries earn statistically
fewer clicks than their position predicts; only queries whose 95% confidence
interval excludes the expected CTR are listed, so these are not noise.

Usual causes, in rough order of frequency: the title does not contain the words
the user searched; the description is truncated or missing; the ranking URL is
the wrong page for the intent; a SERP feature sits above the result; or the
query is genuinely irrelevant to the site and the impressions are worthless.

Check that last one before recommending anything. A query with high impressions
and near-zero CTR is sometimes a page ranking for something it should not, and
the correct action is nothing at all.

`overperforming` is worth as much and is usually ignored. Those titles have
found language that works on this audience. Read them for reusable patterns.

### 6. Striking distance — where incremental effort converts

Read `findings.striking_distance`, ranked by modelled click uplift rather than
by position, because a query at 12 with 8,000 impressions is worth more than
one at 6 with 40.

Cross off anything that also appears in `irrelevant_impressions` first. High
volume puts those queries at the top of this list, and they are the ones least
worth working on.

`modelled_uplift_clicks_if_pos3` assumes impressions stay constant and position
3 is reachable. Both are approximations, in opposite directions: impressions
usually rise with position, and reaching 3 is not always possible. Present it
as a ranking signal for prioritization, not a forecast, and do not sum the
column into a traffic projection.

### 7. Cannibalization — only if the data supports it

Present only if `findings.cannibalization` exists. It requires query × page
pairing, which the Search Console interface cannot export. When absent, say the
check was not possible rather than inferring it from URL similarity — that
inference is wrong often enough to discredit the rest of the report.

When present: several URLs alternating on one query split the engagement
signals that would otherwise accumulate on one page. Consolidate into the
strongest URL and redirect, or differentiate the intent so the pages stop
competing. Which one depends on whether the pages serve genuinely different
needs, so recommend by looking at the URLs rather than by rule.

### 8. Concentration, movers, device and country

Supporting context, not headline findings. `concentration.pages_for_half_of_clicks`
in low single digits is a real fragility worth one sentence. A large device CTR
gap at similar positions points at mobile rendering or intent mismatch. Country
rows dominated by markets the business does not sell to explain a lot of
apparently poor aggregate CTR.

## Position is not a rank

Search Console reports an impression-weighted mean. A query alternating between
3 and 15 reports 9 — a position it never held. This matters constantly:

- Never write "you rank 9th for X". Write "X averages position 9".
- A worsening average position can mean the page lost ground, or that it
  started appearing for a wider set of queries at lower positions. The second
  is often good news.
- Never compute an expected click count from average position for a single
  query and present it as a forecast.

## Data limits to state, not bury

The Performance report's UI export is capped at 1,000 rows per table, and
Search Console omits queries too rare to be anonymized. So:

- If `coverage.query_export_truncated` is true, the query table is the top
  1,000 and the long tail is invisible. Any share computed from it is a share
  of what was exported, not of the site.
- Total clicks in the Queries table will not match the site total, because the
  anonymized tail is missing. This is expected. Do not present it as a
  discrepancy or try to reconcile it.
- Ignore queries below ~100 impressions when recommending action. Their CTR is
  noise, and acting on noise is worse than acting on nothing.

## Recommendations

Prioritize by effort against modelled effect, and cap the list at five. A
report with twenty recommendations gets none of them done.

Roughly, cheapest first: rewriting a title beats earning a rank, which beats
publishing a page, which beats restructuring a site. Where two findings point
at the same URL, merge them into one recommendation.

Every recommendation names the specific URL or query, the concrete change, and
the evidence line from the analysis. "Improve your content" is not a
recommendation. "Rewrite the title of /pricing to include 'per seat', which
appears in three underperforming queries at position 4" is.

Say so when the data supports no recommendation. A short honest report is worth
more than five invented actions, and the user can tell the difference.

### State how fast each recommendation can be proved wrong

Give every recommendation the time it takes to find out it was a bad idea, and
break ties on that rather than on modelled effect. A title rewrite shows up in
CTR within about ten days at a stable position; earning a rank takes four to
eight weeks; a new page takes two to three months before its absence of
traffic means anything.

This ordering matters more than it looks. A list ranked purely by expected
impact is indistinguishable from a list of plausible guesses until months have
passed — which is how an analysis turns into a persuasive backlog nobody can
audit. Doing the fast-to-falsify items first means the next analysis has real
evidence about whether this one was any good, and a cheap action that returns a
verdict in ten days is often worth more than an expensive one with a larger
modelled effect and a three-month feedback loop.

### Flag that winnability has not been checked

Search Console says where the site ranks. It says nothing about who occupies
the top of those results pages, and some positions are not available at any
level of quality: the slots are held by the platform's own generated pages, by
aggregators the query is really asking for, or by a SERP layout with almost no
organic space left above the fold.

Nothing in this analysis can detect that — it would require looking at the
actual results pages. So for every query recommended for a ranking gain, tell
the user to open the results page and look at who holds the top before writing
anything, and mark the recommendation as unverified on this dimension. A
recommendation that names its own blind spot is worth more than one that stays
quiet about it, and this is the blind spot that most often makes a technically
correct recommendation a waste of a month.

## Report structure

```markdown
# Search Console analysis — [site], [period]

## What the data covers
[Date range, comparison period if present, row counts, and what could not be
assessed from `not_available`. Three or four lines.]

## Headline
[Two or three sentences. The single most important thing, with the number
behind it. If the honest answer is "nothing is wrong", say that.]

## Findings
### [Finding, phrased as the conclusion, not the metric name]
[What the data shows, the numbers, and what would falsify it.]

## Recommendations
1. **[Action]** — [specific URL or query]. [Why, tied to a finding.] [Effort.]
   *Known if it worked by:* [timeframe]. *Check first:* [who holds the top of
   this results page — not verifiable from Search Console.]

## What this analysis cannot tell you
[The gaps, plus what export would close them.]
```

## Bundled resources

- `references/export-guide.md` — how to produce the right export, including
  comparison mode and the query × page file the interface cannot generate.
  Read it when the user has not exported yet or is missing a capability.
- `references/methodology.md` — the CTR curve fit, the Wilson interval, and the
  absorption cohort definition. Read it when the user questions a number or
  wants to defend the analysis to someone else.
- `scripts/gsc_load.py` — export parsing. Read only if a file fails to load.
- `scripts/gsc_analyze.py` — the analysis engine.

## Requirements

`pandas` and `numpy`, both already available. `openpyxl` is used only for
`.xlsx` exports and is optional; without it, ask the user for the CSV export
instead. Do not attempt package installation.
