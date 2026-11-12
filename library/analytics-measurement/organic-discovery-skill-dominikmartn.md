---
name: "organic-discovery-skill"
description: "Technical SEO, assistant visibility, content strategy, earned distribution planning, and evidence governance for AI coding agents. Activate for SEO audits, Search Console, indexing, AI/assistant visibility, organic content and distribution planning, GEO, YMYL evidence, App Store discovery, structured data, international SEO, and post-deploy checks. The legacy name seo-skill and /seo command remain aliases."
category: "analytics-measurement"
platforms: ["unspecified"]
platform_source: "none"
repo: "dominikmartn/organic-discovery-skill"
repo_url: "https://github.com/dominikmartn/organic-discovery-skill"
source: "https://github.com/dominikmartn/organic-discovery-skill/blob/HEAD/SKILL.md"
raw_source: "https://raw.githubusercontent.com/dominikmartn/organic-discovery-skill/HEAD/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-12"
---

<!-- Unspecified skill · dominikmartn/organic-discovery-skill · SKILL.md · MIT
     Source: https://github.com/dominikmartn/organic-discovery-skill/blob/HEAD/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Organic Discovery Skill

This skill helps an AI coding agent improve unpaid discovery through technical search eligibility, useful content, assistant/source measurement, earned-distribution planning, entity consistency, and evidence governance. It does not promise an AI-ranking formula and does not automate human relationships.

`skill-manifest.json` is the source of truth for the release version and shipped file inventory.

## Required workflow

1. Establish project context: canonical domains, environments, product facts, audiences, conversions, locales, YMYL class, analytics, and action permissions.
2. Collect evidence with read-only connectors and deterministic parsing.
3. Run only auditors applicable to the page/site cohort.
4. Report source, timestamp, affected scope, confidence, and uncertainty.
5. Recommend an action and measurement plan.
6. Require explicit confirmation before a real external mutation or file write.

## Decision tree

| Intent | Load and run |
|---|---|
| Initialize/validate project context | `profiles/types`, `profiles/validate`, optional pure `init-project-profile`, then `project-discovery` → `project-profile` |
| Audit one page | Project context + `canonical`, `jsonld`, `metadata`, `redirects`, and conditional `render-mode`; add `launch-state` on a page that carries offers or launch CTAs, and YMYL/pSEO/i18n only when applicable → `page-audit` |
| Audit a site | Discover from declared seeds/sitemaps/links, classify cohorts, run universal checks, then conditional cohort checks; add the property-level `bing-presence` and `launch-state` findings (the latter reading `llms.txt` plus the entry page and the profile's `entity.releaseState`) and pass them as `siteChecks` → `site-audit` |
| Why is a page not ranking/indexed? | GSC URL Inspection + live indexability evidence + `why-not-ranking`; do not treat inspection as a live recrawl confirmation |
| Search performance / traffic drop | Paginated GSC evidence + status/deployment context → `traffic-anomaly` |
| Organic traffic measurement (sessions, landing pages) | `ga4` connector with a configured property; GA4 sessions are not GSC clicks, keep both sources labeled |
| Keyword search volume / demand estimate | `google-ads-keywords` connector; volumes are bucketed advertiser estimates, never exact organic demand |
| Track change between audits over time | `drift` diagnostic snapshots via `drift-baseline` action (append-only history) → `drift-report`; deltas are observations, not causal claims |
| Assistant/AI visibility | Versioned prompts and explicit API/product surface metadata → `ai-visibility`; separate mention, recommendation, citation, accuracy, and referrals |
| Repeat an assistant measurement over time | `assistant-probe` with a versioned `<project>/assistant-probe/prompt-set.json`, pluggable providers, and append-only run snapshots → `assistant-probe-delta`; deltas need a matching prompt-set version, and a provider with zero successful runs is unmeasured, never absent |
| What should we write / topic research | Project profile + observed demand/business/evidence inputs → `topic-opportunities` → `topic-opportunity-map` |
| Content inventory / what to refresh or retire | URL/proposed-asset inventory + performance/evidence state → `content-portfolio` diagnostic/report |
| Create a content brief | Only for a prioritized opportunity with evidence, unique contribution, conversion, distribution, update, and measurement inputs → pure `create-content-brief` |
| Turn Search Console gaps into post candidates | GSC query rows + optional `google-ads-keywords` volume → `content-gaps` → `content-gap-candidates`; the score ranks candidates against each other and forecasts nothing |
| Draft posts for ranked candidates | Filled evidence slots + `entity.owner` → `generate-post-drafts`; a draft without a filled first-party evidence slot fails validation and is never written |
| Review, approve, or publish a queued draft | `review-queue` list/approve/publish; approval is a named human, publishing writes the approved markdown into `contentPipeline.publishDir` and does nothing else |
| Find viable earned-distribution channels | Evidence-backed asset + audience → `distribution-fit`; inspect trusted publications, communities, educators, integrations, and partners with `earned-source-gaps` |
| Create original research/linkable asset | Rights-cleared sources + reproducible methodology + limitations + maintenance and measurement → pure `create-linkable-asset-brief` |
| Prepare a launch | Product availability, fact consistency, activation, proof, tracking, support, current platform rules, follow-up, and YMYL review → `launch-readiness`; run `launch-state` over `llms.txt`, JSON-LD offers, and the visible CTAs so the site tells one release story before and after the flip |
| Prepare a discovery video | Demonstrable product/evidence + transcript/captions + canonical page + honest packaging + measurement → pure `create-video-discovery-brief` |
| Audit App Store discovery | Canonical product facts + locale listings + custom pages + experiments + campaign cohorts → `app-store-discovery`; review requests remain human-only |
| Build a distribution plan | Validated channel items → pure `distribution-plan`; output is a human-reviewed draft queue, never executable communication |
| Register/review an organic experiment | Predeclared baseline, cohort, intervention, cost, criterion, observations, and limitations → `organic-experiments`; no causal claim from before/after data |
| Measure referrals and earned mentions | Attributable referral cohorts + canonicalized mention evidence → `referral-earned-measurement`; keep direct/unknown unresolved and paid separate |
| Draft a community post, outreach, launch promotion, or review request | Run `community-safety` first; automated, bulk, manipulative, undisclosed, or unreviewed communication is blocked |
| Claim/evidence audit | Claim/source/reviewer records → `claim-provenance` auditor + diagnostic → evidence-register report |
| Bot access | Robots policy + WAF/CDN/log evidence where supplied; a spoofed user agent is not crawler verification |
| YMYL audit | `ymyl-trust` plus claim/source/reviewer evidence; schema and bylines cannot validate unsupported claims |
| Programmatic SEO | Cohort intent, main-content similarity, data completeness, index/performance evidence; no fixed uniqueness threshold |
| International/hreflang | Route policy + `hreflang` + `i18n-coverage`; do not require translations that the project does not claim |
| Core Web Vitals | PSI/CrUX and lab/field distinction; use CrUX/RUM for INP status |
| Post-deploy | Immediate technical checks; submit only eligible changed URLs; offer the IndexNow push via `submit-indexnow` and, with a Bing key, the Bing `SubmitFeed` sitemap announcement, each behind its own `confirm()`; run `bing-presence` alongside the GSC inspection sample; schedule later crawl/index/performance observation |
| Mutating submission | Show exact scope and call the action with `confirm()` |
| Conceptual question | Load only the relevant `knowledge/*.md` files and preserve their evidence/confidence boundaries |

The detailed routing table is in `docs/decision-tree.md`.

## Current capability inventory

The manifest currently declares:

- 14 connector modules;
- 15 auditor modules;
- 19 diagnostic modules;
- 18 action modules;
- 15 report modules;
- 22 knowledge files;
- 12 examples.

`chrome-devtools#aioCheck` is experimental. `generate-llms-txt` is an optional documentation utility, not a visibility action.

## Defaults

- Read-only first.
- Pure text generation does not need confirmation; external submissions and writes do.
- External communication is never an action surface: community posts, partner outreach, and review solicitation may only become named-human-reviewed drafts/queues. Automated, bulk, manipulated-engagement, and undisclosed proposals are blocked.
- Product activation, retention, pricing, lifecycle messaging, paid acquisition, and sales operations remain future work for a separate product-growth skill.
- GSC bulk performance collection uses `searchAnalyticsAll()` and still records that the API returns top rows, not guaranteed exhaustive raw data.
- The content gap pipeline never auto-publishes. Drafts need filled first-party evidence, publishing needs a named human approval, and the publish step is a file write into a profile-declared directory: no deploy, no CMS call, no scheduling, no announcement. Batch guidance is in `knowledge/content-gap-pipeline.md`; Google's scaled-content-abuse policy names no numeric threshold and neither does this skill.
- Preserve raw evidence or a safe reference to it.
- Never log credentials or provider response bodies that may contain secrets.
- Bing Webmaster calls use the JSON/HTTP protocol only. Bing retires the SOAP and POX protocols on 2026-08-31; `api.svc/json` is the migration target and must never fall back to `api.svc/soap` or `api.svc/pox`. Bing exposes crawl state per URL, never an index verdict: see `knowledge/bing-webmaster-api.md`.
- The legacy credential directory remains `~/.config/seo-skill/` for compatibility.
- Assistant probes call paid provider APIs and write run snapshots into the project; the snapshot write is confirmation-gated and append-only. Only the OpenAI `web_search` surface has been exercised live here. The Anthropic and Perplexity providers are stubs that answer `not configured`, so an unwired provider can never be read as an absent brand.
- Field observations from real runs live in `knowledge/assistant-visibility-observations.md` with site, date, and evidence. They are hypotheses to re-test, never thresholds.
- Do not convert a correlation, vendor study, or anonymous case into a platform ranking rule.
