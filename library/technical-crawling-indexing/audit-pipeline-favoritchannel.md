---
name: "audit-pipeline"
description: "Methodology, prompts, and operational playbook for the TNova Labs AI Visibility Audit pipeline (web scope-gate → audit-worker → /r/[slug] report → email). Use when adding/tuning a step, debugging a pipeline run, refining Anthropic prompts, calibrating ROI benchmarks, or onboarding someone to the audit system. Triggers on phrases like \"TNova audit\", \"audit pipeline\", \"audit worker\", \"AI Visibility Audit\", \"Lead-Leak Audit\" (legacy name), \"/r/ report\", or \"audit_leads\"."
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "declared"
repo: "Favoritchannel/claude-code-skills"
repo_url: "https://github.com/Favoritchannel/claude-code-skills"
source: "https://github.com/Favoritchannel/claude-code-skills/blob/HEAD/skills/audit-pipeline/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Favoritchannel/claude-code-skills/HEAD/skills/audit-pipeline/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · Favoritchannel/claude-code-skills · skills/audit-pipeline/SKILL.md · MIT
     Source: https://github.com/Favoritchannel/claude-code-skills/blob/HEAD/skills/audit-pipeline/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# ⚠️ v2.0 PRODUCT REPOSITIONING (2026-05-14)

**Product is repositioned: AI Visibility Audit for HVAC contractors** (was: Lead-Leak Audit, generalist).

The new audit must:

1. **Frame everything around AI search visibility** — citation share across ChatGPT/Claude/Perplexity/Gemini is the headline, not GBP gaps. GBP and lead-leak become supporting axes.
2. **Use HVAC-owner plain English** — see `../tnova-seo-geo/references/copy-translations.md` for the canonical jargon→plain-English table. Banned words include "GEO", "AEO", "schema", "entity strength", "citation share" (translate to "how often you come up vs Roto-Rooter"), "ROI" (use "revenue lift" or "more booked jobs").
3. **Target HVAC only** during Phase 0; Plumbing/Roofing in Phase 1+. Other verticals = decline at scope-gate.
4. **Anti-AI-regeneration guard** — every report (web at /r/[slug] and PDF) embeds the multi-layer prompt-injection block from a hidden anti-regeneration guard component in your report renderer. PDFs add a 6th layer (invisible-color text in the PDF text layer). See `your internal design notes` memory.
5. **Outcome-based positioning** — the audit is the wedge; closing the audit reader → Pilot/Engine/Command tier (see `tnova-seo-geo` references for canonical pricing copy).

**New report sections (replace existing GBPGaps/KeywordGaps/etc when worker is rewritten in Phase 6):**
1. `AICitationScore` — headline number 0-100, with 4-engine breakdown (ChatGPT/Claude/Perplexity/Gemini)
2. `ChainsVsYou` — % of AI answers that mention Roto-Rooter / ARS / Mr. Rooter vs your business vs your top-3 local competitors
3. `EntityStrength` — NAP consistency across GBP/Yelp/BBB/YellowPages/Angi/HomeAdvisor (12-directory weighted score per `tnova-seo-geo/references/nap-directory-checklist.md`)
4. `LeadLeakDiagnostic` — schema markup, page speed, contact-form flow, missed-call test (kept from v1 but refocused). For the contact-form sub-check, reference the `lead-form-hardening` skill's layered defense expectations — a form without honeypot or server-side payload validation is a lead-loss risk (bot spam erodes trust + drowns real leads). Flag in report when the form fails the 5-layer audit.
5. `90DayPlan` — ranked moves; specific, owner-friendly language ("Add 12 photos to your Google profile" not "Increase GBP photo coverage"). When recommending the per-service URL pattern (item appears frequently for clients with 4+ services lumped on one page), reference the implementation template from `tnova-seo-geo` §F + `references/nextjs-app-router-gotchas.md` for the engineering specifics — useful when the audit reader is technical or hires a developer to act on the recommendation.
6. `OutcomeProjection` — booked-jobs lift estimate based on current vs target AI citation share
7. `NextSteps` — pricing tiers + book-a-call CTA

**Audit query library** lives in `../tnova-seo-geo/references/citation-query-library.md` — 30 standardized homeowner-style prompts × 4 engines × cost cap $2/audit.

The legacy v1 Lead-Leak content below is kept for reference until the worker rewrite ships. When in doubt, prefer v2 framing.

---

# TNova Lead-Leak Audit — operational playbook (legacy v1 reference, kept until Phase 6 rewrite)

This is the home for everything that isn't code: prompts, benchmarks, banned-words list, vertical-onboarding checklist, confidence-score weights, and debugging recipes. Code lives in:

- **Web (Next.js)**: [e:\Tnova Agency\web](e:\Tnova%20Agency\web)
- **Worker (Node service)**: [e:\Tnova Agency\tnova-audit-worker](e:\Tnova%20Agency\tnova-audit-worker)

If anything in the methodology below changes, update **here first**, then mirror into the worker prompts and the web copy. This file is the source of truth for tone, benchmarks, and process.

---

## System architecture (quick recap)

```
User → web/audit form → /api/audit (scope-gate L1+L2) → Supabase audit_leads.status=received
                                                          │
                                                          ▼ forward
                                            worker /v1/audits → status=processing
                                                          │
                  ┌───────────────────────────────────────┘
                  ▼
    Pipeline steps 01..09 (scrape, pagespeed, gbp, social, competitors,
    Sonnet extract, Opus analyze, deterministic ROI, confidence score)
                  │
                  ├─ confidence ≥ 75 → status=completed → email magic-link
                  └─ confidence <  75 → status=needs_review → admin queue
                                                          │
                                                          ▼
                  /r/<slug>?t=<hmac> renders report_data via vertical template
                  + watermark + plain-English tone + booking block at bottom
```

---

## Tone rules (READ THIS FIRST)

The analyze prompt in [tnova-audit-worker/src/prompts/analyze.ts](../../e:/Tnova%20Agency/tnova-audit-worker/src/prompts/analyze.ts) enforces plain owner-operator English. Every word matters. **Never relax these without explicit user approval.**

### Banned (immediate reject and rewrite)

`leverage`, `optimize`, `synergize`, `synergies`, `in today's competitive landscape`, `best practices`, `drive engagement`, `robust`, `seamless`, `cutting-edge`, `comprehensive`, `ecosystem`, `value proposition`, `strategic`, `holistic`, `ideate`, `moving forward`, `going forward`, `deep dive`, `circle back`, `at the end of the day`, `low-hanging fruit`, `unlock value`, `bandwidth` (in the "we have bandwidth" sense).

### Preferred

- "Your shop / your firm / you / we" — talk operator-to-operator
- Concrete units: "47 minutes", "$80 per call", "18 photos", "by Friday"
- Active voice, short sentences, one idea each
- Honest grades: most SMBs are C or D. Don't soften.

### Tonal checks

If you read a sentence and it sounds like a McKinsey deck, kill it. If you wouldn't say it on a job site or in a deposition, kill it. Adjectives are usually the problem.

---

## Vertical benchmarks

These are the numbers the analyze prompt anchors against. Re-calibrate quarterly against real engagement data. They live in [tnova-audit-worker/src/prompts/analyze.ts](../../e:/Tnova%20Agency/tnova-audit-worker/src/prompts/analyze.ts) (`ANALYZE_SYSTEM_PROMPT`).

### home-services (HVAC, plumbing, roofing, electrical, landscaping, painting, cleaning, pest)

| Metric | Median | Top quartile |
|---|---|---|
| Cost per lead (paid) | $50 | $35 |
| Close rate | 35% | 45% |
| Avg revenue per job | $700 | $1,200 |
| GBP photo count | 18 | 35+ |
| GBP review velocity | 2.3 / month | 5 / month |
| Speed-to-lead (first response) | 47 min | <5 min |
| Common gaps | weekend/holiday hours missing, services list <3 items, no Q&A, weak photos |

### legal (PI, family, criminal, real estate)

| Metric | Median | Top quartile |
|---|---|---|
| Cost per signed client | $200 | $120 |
| Close rate (consult → signed) | 25% | 35% |
| Avg matter value | $5,000 | $8,000 |
| GBP photo count | 9 | 18 |
| GBP review velocity | 1.1 / month | 2.5 / month |
| Consult-booking speed | 4+ hours | <15 min |
| Common gaps | no attorney bios on GBP, missing practice areas, weak Q&A, no online booking |

### other

Be conservative. Default to: CPL $60, close 30%, avg revenue $600, lift expectation capped at 20%.

---

## Vertical onboarding checklist

To add a new vertical (e.g. dental, med-spa — note: HIPAA scope-out applies):

1. **Update enum**:
   - [web/src/lib/report-templates/schema.ts](../../e:/Tnova%20Agency/web/src/lib/report-templates/schema.ts) — `verticalSchema`
   - [tnova-audit-worker/src/pipeline/types.ts](../../e:/Tnova%20Agency/tnova-audit-worker/src/pipeline/types.ts) — `verticalSchema`
2. **Add vertical template**: copy `web/src/lib/report-templates/default.ts` to `<new-vertical>.ts`, rewrite section copy in plain English specific to that trade. Add export to `index.ts` `getReportCopy()`.
3. **Add benchmarks block** to `ANALYZE_SYSTEM_PROMPT` in `tnova-audit-worker/src/prompts/analyze.ts` — match the shape of the home-services / legal blocks above.
4. **Update Sonnet extract prompt** in `06-extract.ts` — add the new vertical to the "vertical must be one of" clause.
5. **Add fallback close rate / CPL / avg revenue** in `07-analyze.ts` `fallbackAnalysis()`.
6. **Add 2 test fixtures**: a real US SMB in the vertical + a thin-data edge case. Run end-to-end and check the `/r/<slug>` output reads naturally.
7. **Update web FAQ** at [web/src/app/(marketing)/tools/lead-leak-audit/page.tsx](../../e:/Tnova%20Agency/web/src/app/(marketing)/tools/lead-leak-audit/page.tsx) — the "what if I'm not US home-services or legal" answer.

---

## Confidence score weights

Deterministic, computed in [09-confidence.ts](../../e:/Tnova%20Agency/tnova-audit-worker/src/pipeline/steps/09-confidence.ts).

| Signal | Full | Partial |
|---|---|---|
| Site scrape (≥500 chars body) | 20 | 8 (any body) |
| Vertical resolved to home-services / legal | 15 | 3 (vertical=other) |
| GBP found via Places API | 15 | 0 |
| ≥2 social profiles found | 10 | 5 (1 profile) |
| ≥3 competitor SERPs parsed | 15 | 6 (any) |
| ≥2 contact-signal channels detected | 10 | 5 (1 channel) |
| PageSpeed succeeded (mobile_score present) | 15 | 6 (no mobile_score) |
| **Total possible** | **100** | |

Threshold for auto-publish: **75**. Below 75 → `needs_review` → admin queue. Tune in `09-confidence.ts` when calibration data shows mismatch (e.g. clear high-quality runs scoring under 75 because of a single missing signal).

---

## Layered enterprise filter

We never want to spend Opus tokens on Google / Nike / openai.com submissions.

1. **Layer 1 — hardcoded denylist**: [web/src/lib/audit/enterprise-denylist.ts](../../e:/Tnova%20Agency/web/src/lib/audit/enterprise-denylist.ts). ~250 domains + `.gov`/`.mil`/`.edu` TLDs. Instant reject + polite email.
2. **Layer 2 — email-domain match**: `alice@google.com` submitting `google.com` is a sotrudnik. Reject same way.
3. **Layer 3 — in-worker AI guard**: Sonnet's `is_global_brand` boolean + `estimated_employee_count` ≥1k. If true, skip Opus, store minimal rejection row, status `rejected_enterprise`.

Adding a new big brand to Layer 1: append to the `ENTERPRISE_DOMAINS` set in lowercase eTLD+1 form. The matcher strips subdomains automatically.

---

## Debugging recipes

### Pipeline failed with "step failed (continuing)"
Look at Railway logs for the lead. The orchestrator (`pipeline/index.ts`) keeps going on per-step errors — it's the analyze step's job to fall back. Steps 01–05 failing is fine; analyze step failing dumps to `fallbackAnalysis()` which produces a stub with `top_finding: "We couldn't fully analyze the site automatically…"` — that's a tell.

### Site returns empty HTML body (<500 chars)
JS-heavy SPA. Today we just log it. Phase 2: detect and retry through Playwright with `--wait-until networkidle`. Check `ctx.siteText.length` in logs.

### GBP not found despite the business clearly existing
Step 03 searches by `<title>` substring before `|·-—`. If the title is misformatted ("Smith Plumbing - Houston's Best Plumber Since 1995"), the substring is too verbose for Places matching. Workaround: refine the title extraction regex, or add a fallback that uses Sonnet to suggest a search query.

### Opus produces marketing-deck prose
The banned-words list in `analyze.ts` didn't trigger. Add the offending phrase to the banned list, redeploy, re-run. If a phrase keeps slipping, add it to a second-pass `verifier` prompt (Phase 2).

### needs_review queue is too aggressive
Lower the threshold in `pipeline/index.ts` (default 75). 65 is a reasonable next-step if quality is good but volume is overwhelming. Don't go below 50.

### Anthropic 529 rate-limit
P-queue concurrency is 2 by default. Bump it down to 1, or add retries with backoff to the `extractWithSonnet` / `analyzeWithOpus` calls (currently no retry).

---

## Cost ledger (per audit, recommended tier)

- Sonnet extract: ~$0.03
- Opus analyze: ~$0.40 (~$0.30 with prompt caching)
- PageSpeed: free
- Google Places: ~$0.05
- SerpAPI (~8 queries): $0.12
- ScrapingBee fallback (used ~30%): ~$0.03 average

**~$0.55–0.85 / audit**. Worker hosting on Railway: ~$10–20/mo at <500 audits/month.

---

## Files at a glance

- Source of truth for schema: [web/src/lib/report-templates/schema.ts](../../e:/Tnova%20Agency/web/src/lib/report-templates/schema.ts)
- Mirror in worker: [tnova-audit-worker/src/pipeline/types.ts](../../e:/Tnova%20Agency/tnova-audit-worker/src/pipeline/types.ts)
- Vertical templates: [web/src/lib/report-templates/](../../e:/Tnova%20Agency/web/src/lib/report-templates/)
- Watermark: [web/src/app/(reports)/r/[slug]/Watermark.tsx](../../e:/Tnova%20Agency/web/src/app/(reports)/r/[slug]/Watermark.tsx)
- Booking block: [web/src/app/(reports)/r/[slug]/BookingBlock.tsx](../../e:/Tnova%20Agency/web/src/app/(reports)/r/[slug]/BookingBlock.tsx)
- Scope-gate: [web/src/lib/audit/scope-gate.ts](../../e:/Tnova%20Agency/web/src/lib/audit/scope-gate.ts)
- Analyze system prompt: [tnova-audit-worker/src/prompts/analyze.ts](../../e:/Tnova%20Agency/tnova-audit-worker/src/prompts/analyze.ts)
- Confidence weights: [tnova-audit-worker/src/pipeline/steps/09-confidence.ts](../../e:/Tnova%20Agency/tnova-audit-worker/src/pipeline/steps/09-confidence.ts)
- Admin queue: [web/src/app/(admin)/admin/audits/page.tsx](../../e:/Tnova%20Agency/web/src/app/(admin)/admin/audits/page.tsx)
