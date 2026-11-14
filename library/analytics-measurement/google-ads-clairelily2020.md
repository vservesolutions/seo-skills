---
name: "google-ads"
description: "Plan, audit and optimize B2B Google Ads search campaigns from real account data - conversion tracking health first, then keep/watch/pause on keywords and search terms, negatives, Quality Score diagnosis, bid strategy fit, campaign structure and responsive search ad copy. Use for Google Ads setup or audits, wasted spend, search term reviews, negative keywords, Quality Score problems, bid strategy choices, RSA copy, or \"why is my campaign not converting\"."
category: "analytics-measurement"
platforms: ["unspecified"]
platform_source: "none"
repo: "clairelily2020/b2b-growth-kit"
repo_url: "https://github.com/clairelily2020/b2b-growth-kit"
source: "https://github.com/clairelily2020/b2b-growth-kit/blob/HEAD/skills/google-ads/SKILL.md"
raw_source: "https://raw.githubusercontent.com/clairelily2020/b2b-growth-kit/HEAD/skills/google-ads/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · clairelily2020/b2b-growth-kit · skills/google-ads/SKILL.md · MIT
     Source: https://github.com/clairelily2020/b2b-growth-kit/blob/HEAD/skills/google-ads/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Google Ads

Optimize from what the account actually shows, in a fixed order: is conversion data trustworthy, where is money wasted, what intent wins, and only then budgets, bids and expansion. The optimization score is not the goal.

## When to use

- New account or campaign setup, or a campaign that spends without results.
- Weekly search term and negative keyword review.
- Quality Score, ad strength or eligibility questions.
- Choosing or changing a bid strategy.
- Writing or refreshing responsive search ads.

## Inputs

- Profile: `icp`, `positioning`, `offer` (landing pages, CTA, UTM), `competitors`, `claims`, `measurement.conversion_events`.
- Last 30 days (or since launch) at three levels: campaign, keyword, search term. Plus conversion action settings and status. Exports or read access both work.
- Current bid strategies, budgets and landing page URLs per campaign.

## Process

1. **Conversion tracking health first.** Before judging anything, check every conversion action: status (recording, no recent conversions, inactive, misconfigured), source (site tag, analytics import, offline import), where the tag fires, and whether several actions count the same event. Zero conversions with a broken tag is a tracking problem, not a campaign problem. Details: [references/conversion-tracking.md](references/conversion-tracking.md).
2. **Classify keywords and search terms as keep, watch or pause** using the rules in [references/account-audit.md](references/account-audit.md). Look at search terms, not just keywords; the search term report is the truth about intent.
3. **Low-risk cleanup:** pause high-spend zero-conversion keywords and enabled zero-impression noise; add exact negatives for clear wrong-intent patterns (jobs, free tools, unrelated software, the wrong side of a marketplace); move dirty-but-promising intent into an observation ad group. Do not delete terms that converted.
4. **Diagnose Quality Score per component.** Expected CTR, ad relevance and landing page experience fail for different reasons. When ad relevance is above average but landing page experience is below, fix the page, not the copy. A dash means not enough data yet, not a low score.
5. **Check bid strategy fit.** Automated conversion bidding (target CPA or ROAS, maximize conversions) needs a working primary conversion and enough recent conversion volume; check Google's current guidance for minimums. Without that, manual or enhanced CPC on tight match types is safer. Maximize clicks optimizes for clicks only and will happily buy cheap irrelevant traffic. Do not judge or re-edit inside a learning period unless money is clearly wasted.
6. **Structure:** separate campaigns for brand, core category intent, competitor terms and time-bound or event terms, so budgets and bids stay independent. Keep a winner campaign small and clean; expand only from proven search terms.
7. **Responsive search ads:** 10-15 headlines (30 characters max) and 4 descriptions (90 characters max) per ad group, each readable in any combination, with angles for pain, outcome, proof, offer and the specific use case. Add sitelinks and callouts. Count characters and flag anything over.
8. **Recommendations triage:** usually accept structural cleanups (empty ad groups, conflicting negatives, redundant keywords, missing assets). Do not accept broad match expansion, search partners or automated bidding just to raise the score.
9. **Only then** discuss budget, bids, landing page tests and moving winning intents to other channels.

## Output

```markdown
## Tracking health
| Conversion action | Source | Status | Counts as primary? | Issue | Fix |
## Keep / watch / pause
| Keyword or search term | Spend | Clicks | Conv. | Class | Reason |
## Negatives to add (match type, list)
## Quality Score diagnosis (keyword, QS, three components, likely cause, fix)
## Bid strategy assessment (current, fit, recommendation, conditions to revisit)
## RSA drafts (with character counts)
## Change list for approval (each change, expected effect, rollback)
```

## Gates

- Metrics follow [metrics-definitions](../b2b-growth-kit/policies/metrics-definitions.md); no CAC or ROAS without verified attribution, and unknown is not zero.
- Every change to a live account (pause, negatives, bids, budgets, ads) is a proposal until approved; see [approval-gates](../b2b-growth-kit/policies/approval-gates.md). Report what changed with the change log.
- Ad copy follows [evidence-and-claims](../b2b-growth-kit/policies/evidence-and-claims.md) and `claims.banned`; competitor terms in ads follow the platform's trademark rules.

## References

- [references/account-audit.md](references/account-audit.md) · [references/conversion-tracking.md](references/conversion-tracking.md)
- Destination pages: [landing-page](../landing-page/SKILL.md) · Copy angles: [ad-creative](../ad-creative/SKILL.md)
- The harness checks ad metrics and the attribution gate: `python3 -m b2b_harness ads` in the repo's `harness/` folder.
