---
name: "grounded-claims-reviewer"
description: "Extract, classify, prioritize, verify, and audit material claims against available evidence while preserving uncertainty, provenance, scope, and source quality. Use for factual review of articles or reports, claim extraction, fact and evidence checking, technical or numerical verification, market or competitor claim review, unsupported-certainty detection, claim-inflation detection, and audits of Claim Ledgers or cited-source support. Do not use as the primary skill for ordinary copyediting, non-factual rewriting, writing from scratch, SEO or GEO planning, deep search-intent or generic topic…"
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "Nightflight6/open-agent-skills"
repo_url: "https://github.com/Nightflight6/open-agent-skills"
source: "https://github.com/Nightflight6/open-agent-skills/blob/HEAD/skills/en/grounded-claims-reviewer/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Nightflight6/open-agent-skills/HEAD/skills/en/grounded-claims-reviewer/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Unspecified skill · Nightflight6/open-agent-skills · skills/en/grounded-claims-reviewer/SKILL.md · MIT
     Source: https://github.com/Nightflight6/open-agent-skills/blob/HEAD/skills/en/grounded-claims-reviewer/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Grounded Claims Reviewer

<!-- parity: purpose -->
## Purpose

Extract, classify, prioritize, verify, and review material claims against available evidence. Preserve uncertainty, provenance, scope, time, and source quality while preventing unsupported certainty, fabricated evidence or citations, citation laundering, confirmation bias, and claim inflation.

**Golden rule:** Verification seeks truth, not support for a preferred conclusion.

<!-- parity: guardrails -->
## Non-negotiable guardrails

- Never fabricate a source, URL, citation, quotation, statistic, or item of evidence.
- Never treat a source's existence as proof that it supports the exact claim.
- Never search only for support for the user's preferred conclusion or hide material contradictory evidence.
- Never silently convert `attributed`, `inferred`, or `unverified` to `verified`.
- Do not force citations onto every low-risk sentence, use mandatory sentence-by-sentence review, or create numerical confidence or universal credibility scores.
- Preserve meaningful uncertainty. Do not overstate a claim merely to make the output decisive.
- Do not rewrite the full article unless a limited correction is necessary for the verification task.

<!-- parity: mode-routing -->
## Route the mode

Use only the least expansive mode that satisfies the request:

1. **scan:** quickly identify material and high-risk claims, obvious unsupported certainty, and the next claims to verify. Do not perform exhaustive external verification unless required.
2. **verify:** perform substantive claim verification: extract, prioritize, research, compare evidence, assign status, and recommend correction.
3. **audit:** review an existing Claim Ledger, evidence set, GEO Claim Ledger, verification table, or structured research output without rebuilding it unnecessarily.

Follow an explicit mode or output requirement first. Ask only when ambiguity would materially change the allowed work.

<!-- parity: inputs-interoperability -->
## Establish inputs and preserve interoperability

Determine the content or ledger under review, source context, available evidence, audience, market, relevant time, and mode. Accept upstream Evidence Tables, SERP Observation Tables, Claim Ledgers, Answer Maps, GEO Content Briefs, SEO Content Briefs, user-provided documents, and official references.

Read [references/output-schema.md](references/output-schema.md). For a GEO Claim Ledger, preserve `claim_id` when practical, map `claim` to `claim_text` and `evidence_ref` to `evidence_refs`, retain provenance fields, then add reviewer fields. Never treat an upstream record as automatically verified.

<!-- parity: claim-selection -->
## Select material claims

Identify candidate claims, then separate verifiable propositions from pure opinion, rhetoric, recommendations, and stylistic language. Opinion is not automatically a factual claim, but factual premises inside an opinion may require verification.

Prioritize by the consequence of error for reader understanding, technical correctness, business or product decisions, brand credibility, legal or compliance exposure, market or financial interpretation, safety, and publication reliability. Do not treat every sentence as equally important.

<!-- parity: taxonomy-materiality -->
## Classify type, materiality, and time sensitivity

Read [references/claim-taxonomy.md](references/claim-taxonomy.md). Assign the narrowest applicable `claim_type`.

Use only `High`, `Medium`, or `Low` for `materiality`, `evidence_quality`, and `time_sensitivity`; these are qualitative judgments, not numerical scores. Current product capability, price, software version, regulation, policy, market data, management, ranking, availability, platform policy, and current AI functionality commonly have high time sensitivity. Do not impose unnecessary recency on stable facts.

<!-- parity: evidence-quality -->
## Assess evidence quality

Read [references/evidence-quality.md](references/evidence-quality.md). Evaluate source authority, primary versus secondary status, directness, exact claim support, date, methodology, independence, context completeness, scope fit, and version or product fit.

A famous domain, professional appearance, or repeated unsupported claim does not make evidence High quality. Community evidence may verify that users reported something; it does not automatically establish that the experience is generally true.

<!-- parity: verification-workflow -->
## Verify without confirmation bias

Read [references/verification-workflow.md](references/verification-workflow.md) and apply the risk-proportionate workflow. If asked to “find evidence proving X,” evaluate whether reliable evidence supports X. Inspect material supporting and contradictory evidence when appropriate without creating false balance where evidence overwhelmingly favors one conclusion.

Reuse supplied evidence when appropriate, but compare it to the exact proposition before assigning a status.

<!-- parity: entailment-provenance -->
## Check entailment and provenance

Match the exact proposition, object or product, version, time, geography, units, measurement definition, conditions, and scope. A source saying “supports up to 64 GB” does not verify “the default configuration is 64 GB.”

Trace material claims toward original evidence when practical. Citation chains do not increase strength by themselves. If a source only verifies that another source made a statement, use `attributed`; if support remains insufficient, use `unverified`.

<!-- parity: status-actions -->
## Assign canonical status and action

Use only:

- `verified`: reliable evidence directly supports the claim within its stated scope;
- `attributed`: the source made the claim, but the proposition is not independently established;
- `inferred`: a reasonable conclusion derived from evidence but not directly stated;
- `unverified`: reliable support is insufficient;
- `contradicted`: reliable evidence materially conflicts with the claim.

Use only `keep`, `attribute`, `qualify`, `revise`, `remove`, or `verify` as `recommended_action`. Produce the narrowest useful `revised_claim` when qualification or correction helps.

<!-- parity: inflation-conflicts -->
## Detect inflation and source conflicts

Read [references/claim-inflation.md](references/claim-inflation.md) to detect certainty, scope, causal, trend, attribution, forecast, and consensus inflation. Recommend only wording the evidence supports.

Read [references/source-conflicts.md](references/source-conflicts.md) when reliable sources differ. Do not average conflicting facts, silently choose a preferred source, assume newest is always correct, or assume an official source resolves every methodological issue. Report unresolved material conflict.

<!-- parity: high-risk-claim-types -->
## Handle high-risk claim types

- For comparative and superlative claims, require a defined market, period, comparison universe, measurement criterion, source, and methodology. Otherwise qualify, verify, or remove.
- For causal claims, distinguish association, mechanism, and causation. Do not infer causation from correlation.
- For forecasts, preserve the forecast source, date, and horizon. Never rewrite an expected future value as a current fact.
- For attribution, verify who said what without silently verifying the underlying proposition.

<!-- parity: external-tools -->
## Use external tools within host policy

Remain provider-neutral and follow the host Agent or platform's tool, network, access, privacy, and approval policies. When current or external facts materially affect correctness, tools are available, and the user has not prohibited external access, verify them.

If external access is prohibited or unavailable, do not fabricate. Preserve `unverified`, `attributed`, or `inferred` as appropriate and state the limitation.

<!-- parity: publication-integration -->
## Integrate reviewed wording safely

When `revised_claim` exists, downstream editors should use it without increasing certainty or removing scope. Keep corrections localized unless broader wording is necessary to prevent factual inconsistency.

Route broader editorial work to `publication-ready-article-editor`; do not turn claim verification into a full content rewrite.

<!-- parity: delivery -->
## Deliver by mode

Follow explicit user output requirements first. Do not force a large table for a lightweight task. Otherwise return:

- **scan:** High-risk claims, key concerns, and recommended next checks;
- **verify:** verification summary, Claim Ledger, critical corrections, and remaining verification;
- **audit:** audit findings, claim status changes, evidence gaps, and recommended actions.

Keep evidence references traceable and unresolved uncertainty visible.
