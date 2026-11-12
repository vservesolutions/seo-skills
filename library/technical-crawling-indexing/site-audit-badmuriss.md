---
name: "site-audit"
description: "End-to-end audit of a RUNNING site: landing-page delivery/conversion diagnosis, UX walkthrough, SEO/AEO/GEO and Core Web Vitals in one severity-ranked report. use_when: a live URL or dev server exists and the ask is \"audit the site\", \"audit this landing page\", \"seo check\", \"why is this LP not converting\", or \"is it ready to ship\". do_not_use_when: static code review without a running app."
category: "technical-crawling-indexing"
platforms: ["unspecified"]
platform_source: "none"
repo: "badmuriss/site-audit"
repo_url: "https://github.com/badmuriss/site-audit"
source: "https://github.com/badmuriss/site-audit/blob/HEAD/SKILL.md"
raw_source: "https://raw.githubusercontent.com/badmuriss/site-audit/HEAD/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-12"
---

<!-- Unspecified skill · badmuriss/site-audit · SKILL.md · MIT
     Source: https://github.com/badmuriss/site-audit/blob/HEAD/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Site Audit

One workflow, four phases, one report. Audits a **live** site or app — you need a
reachable URL or a running local server. If you have neither, stop and ask for one.

This skill only verifies. Building or restyling the site is the
[incredibly-pretty-websites](https://github.com/badmuriss/incredibly-pretty-websites) skill's
job (`npx skills add badmuriss/incredibly-pretty-websites`), and it owns every design decision
this audit does not measure. On a redesign, run this audit **before** the work starts too: that
report is the baseline the redesign has to protect, and the after-run is the proof.

Run the phases **in order**. Each phase says "read its reference now" — read it, do the
work, capture evidence, then move on. Do not skip ahead. The consolidated report at the
end ranks every finding by severity with reproduction steps and a suspected location.

## Phase 0 — landing-page delivery + conversion diagnosis

When the target is a landing page, **read `references/landing-conversion.md` now and run it
before evaluating or rewriting copy**. Open the page through Playwright both as a normal user
and as rendered Googlebot Smartphone, then perform the non-destructive conversion smoke as the
real user. This phase establishes acquisition context, ICP, awareness, message, sales narrative,
value proposition, proof and objections, friction and CTA, attention/UI, and one functional
surprise, in that order. A blocked crawler, JavaScript failure, slow first screen, dead CTA, or
broken form outranks wording. On non-landing targets mark Phase 0 N/A with a reason.

## Before you start — pick your tooling

For a requested trace-based performance diagnosis, read
[performance-traces.md](references/performance-traces.md). Its named tools are a
Chrome DevTools MCP recipe, conditional on that integration being available.
Use the available trace/Lighthouse/browser backend for the requested measurements;
do not make one MCP server a prerequisite for unrelated audit phases.

Use whatever the host has, in this preference order (any tier is valid):

| Tier | Tools | Notes |
|------|-------|-------|
| Best | Chrome DevTools MCP or Playwright MCP | Real interaction, console + network capture, traces |
| Good | `playwright` / `puppeteer` CLI driven from a script | Same coverage, more manual |
| Fallback | `curl` + `lighthouse` CLI + `npx axe` | No live interaction — caps verdict at "Incomplete" for the UX phase, but SEO + perf still run |

Pin the viewport at 1440x900 to start (mobile sweep uses 375). Do not go above 2000px wide.

## Verdict states

- **Pass** — no Critical or High findings, all applicable hard gates green, and proof-of-interaction present.
- **Conditional Pass** — no Critical or High findings; Medium/Low findings remain.
- **Fail** — at least one Critical or High finding, OR an applicable hard gate is red.
- **Incomplete** — proof of interaction is unavailable, or a required phase could not be assessed. State why. Do not infer success or failure for unobserved behavior.

## Hard gates

Assign severity based on the observed effect and affected user flow. Use the table as default guidance, not automatic defect generation:

| Signal | Default severity guidance |
|-------|---------------------------|
| Console errors/warnings | Assess effect, frequency, reproducibility and affected flow; not every message is a finding |
| HTTP 5xx | Assess impact and criticality of the affected flow; an isolated third-party failure does not automatically make the site Critical |
| 403/404 on authenticated pages | Assess whether it blocks a required user task |
| Landing profile cannot load critical content | Critical when the affected profile cannot reach the critical content |
| Landing primary CTA/form cannot reach expected non-destructive pre-submit state | High when it blocks the primary conversion path |
| Material landing content divergence by user agent | Severity follows observed impact on the conversion path |
| Layout collapse | Severity follows the task and content affected |
| axe-core Critical / Serious | Map to Critical / High where the observed violation affects users |
| LCP > 2.5s / CLS > 0.1 / INP > 200ms | High default; describe measured route and effect |
| No interaction proof | Incomplete, not a product defect |

Maintain an allowlist for known expected/noisy events and show both raw and reportable counts in the verdict block. Exclude allowed items only from reportable counts, not raw counts. Phase 2 bot-UA matrix 403/429 responses are AEO findings, not duplicate generic network findings; the rendered Googlebot landing check remains separate.

***

## Phase 1 — UX walkthrough

**Read `references/ux-walkthrough.md` now.** Then walk the site as a real user: pick a
persona, inventory the routes, and for each key page type into an input, trigger a primary
action, open a modal/detail pane, read the console, screenshot before and after, and verify
the expected post-action state. Run axe-core per page, sweep responsive widths, and log
every interaction with a timestamp and selector. No interaction log = verdict Incomplete.

If the project does not match the defaults, meaning you cannot find the URL, cannot log in
headless, need seed data, or the repo uses its own path convention for reports and evidence,
**read `references/project-adaptation.md`**. It resolves URL discovery, test-auth and seed
scripts per stack (Next/Auth.js, Rails, Django, Laravel, WordPress, Prisma, Drizzle, raw SQL)
and gives the path fallback chain. Skip it when the defaults already work.

## Phase 2 — On-page SEO + AI visibility

**Read `references/seo-onpage.md` now.** For each significant page, check the on-page
signals a page controls: title and meta description quality + length, canonical, OG/Twitter
cards, heading hierarchy (single H1, no skipped levels), image alt text, structured data
(schema.org) validity, robots.txt + sitemap.xml reachability, internal linking basics, and
the mobile viewport tag. Score each area, flag P0 (blocks ranking/indexing) first.

Then **read `references/aeo-geo.md` now** and run the AI-visibility layer over the same
fetched HTML/DOM: classify every fetch before reading it, then bot-vs-user parity,
raw-vs-rendered parity, AI-crawler directives, schema-to-visible-content parity,
extractability, claim integrity, and thin-template detection. Rank on the same P0/P1/P2
scale. Ecommerce-only checks are marked **N/A with a reason** on non-ecommerce targets —
N/A is not a skipped phase.

## Phase 3 — Performance budget

**Read `references/perf-budget.md` now.** Measure Core Web Vitals on the most representative
route (LCP, CLS, INP; plus FCP, TTFB, TBT as context), then run the top-culprits checklist:
render-blocking resources, unoptimized images, font-loading strategy, and JS weight. Any CWV
threshold breach is a hard-gate High. Diagnose each breach to a suspected source.

## Consolidated report

One report. Lead with the verdict block, then findings ranked by severity.

```
============================================================
VERDICT: [Pass / Conditional Pass / Fail / Incomplete]

Persona: [locked persona]
Landing diagnosis: [complete / N/A / missing] — acquisition [source], awareness [level], conversion [action]
Delivery parity: user [status] / rendered Googlebot [status] — critical-content diff [pass/fail]
Surfaces audited: N / M routes
Proof of interaction: [complete / missing] — [N] logged interactions

Observed events: console errors raw/reportable [N]/[N], warnings [N]/[N], 5xx [N]/[N], auth 403/404 [N]/[N]
Classified gates/findings by impact: [IDs or none]
Performance (/[route]): LCP [N]s / CLS [N] / INP [N]ms  — budget 2.5s / 0.1 / 200ms
SEO: [N] P0, [N] P1, [N] P2   (title/meta/canonical/headings/alt/schema/robots/sitemap/viewport)
AI visibility: [N] P0, [N] P1, [N] P2   (bot-parity/render-parity/ai-robots/schema-parity/extractability/claims/trust/templates)

Findings: Critical [n]  High [n]  Medium [n]  Low [n]

============================================================
```

### Every finding must include

**ID** (severity-letter + number), **Phase** (UX / SEO / AEO / Perf), **Severity**, **Surface**
(route + viewport), **Reproduce** (numbered steps), **Observed**, **Expected**, **Evidence**
(screenshot path / console line / network capture / measured metric), and **Suspected location**
(`file:line` or resource URL). A finding needs enough evidence to reproduce and understand it.

## Report integrity

For actual findings, include reproduction, observation, expected behavior, evidence, suspected location, and a concrete patch where the cause is known. Group fixes by priority only when useful; do not create findings, top-five lists, or fix lists to fill a template when none exist.

Before publishing, check that each reported conclusion is supported by the evidence collected:

| Check | Requirement |
|-------|-------------|
| Interactions | Describe actual typed/clicked/navigated interactions; do not claim interaction proof if none occurred |
| Performance | State the measurement method for reported Core Web Vitals |
| AEO findings | Show the fetch, diff, or quoted string supporting a parity/claims finding |
| Landing pages | Report the real-user and rendered-Googlebot comparison and conversion smoke when performed; label unavailable checks and their effect on verdict |
| Blocked/non-HTML fetches | Do not report missing-title, no-H1, or thin-content defects from a challenge page or non-HTML response |

Do not downgrade an evidence gap into a product defect or claim an unmeasured pass.
