---
name: "geo-content-optimizer"
description: "Create, optimize, or audit evidence-backed content for generative answer and search experiences by improving answerability, claim traceability, entity clarity, and original value. Use for GEO content briefs, answer maps, citation-ready claim review, answer-surface-informed optimization, or GEO audits. Do not use as the primary skill for deep question research, ordinary SEO planning, technical SEO implementation, rank or visibility monitoring, generic article editing, fact checking alone, keyword research, or answering a single question."
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "Nightflight6/open-agent-skills"
repo_url: "https://github.com/Nightflight6/open-agent-skills"
source: "https://github.com/Nightflight6/open-agent-skills/blob/HEAD/skills/en/geo-content-optimizer/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Nightflight6/open-agent-skills/HEAD/skills/en/geo-content-optimizer/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Unspecified skill · Nightflight6/open-agent-skills · skills/en/geo-content-optimizer/SKILL.md · MIT
     Source: https://github.com/Nightflight6/open-agent-skills/blob/HEAD/skills/en/geo-content-optimizer/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# GEO Content Optimizer

<!-- parity: purpose -->
## Purpose

Improve content quality and eligibility for generative answer and search experiences through clear answers, defensible evidence, consistent entities, source traceability, and useful original value. Optimize for readers first. Never imply access to hidden recommendation, ranking, retrieval, or citation algorithms.

<!-- parity: guardrails -->
## Non-negotiable guardrails

- Never fabricate answer-surface observations, citations, third-party mentions, quotations, evidence, or platform behavior.
- Never promise first recommendation, citation, brand mention, AI visibility, answer inclusion, ranking, traffic, or conversion.
- Do not claim hidden RAG, retrieval, recommendation, or citation preferences.
- Do not impose entity or keyword density, arbitrary chunk size, mandatory FAQ, mandatory lists, mandatory summaries, or special schema.
- Do not claim `llms.txt`, schema, crawler access, or any other technical measure guarantees visibility or citation.
- Do not create scaled near-duplicate query pages or manufacture authority, praise, consensus, or competitor weaknesses.
- Follow host tool, network, access, privacy, and approval policies. Obey explicit no-browse instructions and preserve supplied source boundaries.

<!-- parity: mode-routing -->
## Route the mode

Infer the least expansive mode that satisfies the request:

1. **brief:** research available evidence and return a research or coverage summary, Answer Map, formal GEO Content Brief, and evidence gaps without drafting the full article.
2. **create:** create a new evidence-backed, answer-oriented content asset.
3. **optimize:** improve an existing asset while preserving accurate, useful content and avoiding an unnecessary full rewrite.
4. **audit:** diagnose answerability, evidence, entity, and GEO-content issues without rewriting.

Follow an explicit mode or output constraint first. Ask only when ambiguity would materially change the allowed deliverable.

<!-- parity: input-model -->
## Establish inputs and boundaries

Determine or reasonably infer:

- topic, core user questions, audience, market, language, publishing context, and mode;
- supplied evidence, existing content, brand role, material claims, currentness requirements, and prohibited claims;
- whether current answer-surface or platform guidance is both useful and accessible.

State material missing inputs. Do not convert an absent observation, source, date, or platform capability into a plausible fact.

<!-- parity: upstream-interfaces -->
## Reuse suitable upstream work

Read [references/upstream-interfaces.md](references/upstream-interfaces.md). Consume suitable outputs from `search-intent-research`, including question, intent, audience, `normalization_confidence`, `cluster_confidence`, `intent_confidence`, strength, and provenance fields. Consume useful outputs from `seo-content-workflow`, including its Search Research Snapshot, SEO Content Brief, bounded SERP observations, content proposition, unique value, supporting questions, evidence plan, and existing content.

Check scope, market, language, freshness, and provenance before reuse. Do not repeat deep question research or SERP research when suitable upstream evidence already answers the need.

<!-- parity: answer-map -->
## Build the Answer Map

Read [references/answer-map.md](references/answer-map.md). Connect each important user question to a scoped direct answer, supporting claims, conditions, limitations, entities, and evidence references. An answer unit must remain understandable in context and must not exceed its evidence.

Use questions as planning anchors, not a mandate to turn every section into Q&A. Do not force arbitrary sentence, word, or chunk counts.

Use `answer_confidence` only for confidence that a direct answer is supportable within its stated scope. Keep it distinct from upstream normalization, clustering, and intent confidence, and never turn it into a numerical score.

<!-- parity: geo-content-brief -->
## Build the GEO Content Brief

Read [references/geo-content-brief.md](references/geo-content-brief.md). Connect traceable `primary_questions` to selected `answer_unit_refs`, evidence and claim requirements, important entities, and a reader-oriented `recommended_structure` without duplicating complete Answer Map or Claim Ledger rows.

In brief mode, always use this formal contract and return the research or coverage summary, Answer Map, GEO Content Brief, and evidence gaps. Keep `answer_surface_refs` empty when no actual answer-surface research occurred, and do not draft the full article.

<!-- parity: claim-ledger -->
## Control claims and evidence

Read [references/evidence-citation.md](references/evidence-citation.md). Maintain a Claim Ledger when claims are material, numerous, fast-changing, comparative, technical, commercial, or otherwise risky.

Use only these claim states:

- **verified:** directly supported by appropriate inspected evidence;
- **attributed:** explicitly presented as a named source's statement;
- **inferred:** reasoned from stated evidence and labeled as inference;
- **unverified:** unsupported, inaccessible, stale, or unresolved.

Never increase certainty to make a sentence easier to quote. A citation-ready claim must be clear, scoped, traceable, context-preserving, and not misleading when excerpted. Resolve unverified material by verifying, qualifying, separating it as remaining verification, or omitting it.

<!-- parity: entity-consistency -->
## Preserve entity consistency

Read [references/entity-consistency.md](references/entity-consistency.md). Keep canonical names, aliases, types, relationships, attributes, disambiguation, and evidence references consistent. Do not conflate products, categories, organizations, versions, or technical concepts. Do not use entity density as a target.

<!-- parity: answer-surface -->
## Use bounded answer-surface research

Read [references/answer-surface-research.md](references/answer-surface-research.md). When host tools and access permit and current observations would materially help, inspect a bounded sample of generative answer experiences and record an Answer Surface Observation.

Record only answers and citations actually observed. Use bounded language such as “in the inspected answer” and “within the observed sample.” Never infer a hidden algorithm, generalize one observation into platform behavior, require exhaustive monitoring, or create a `ranking_position` field. If access is unavailable, state that limitation and continue from supplied evidence without fabrication.

<!-- parity: content-workflow -->
## Create, optimize, or audit the content

Shape the content around the core questions and reader job:

1. provide clear direct answers where useful;
2. explain supporting reasoning, conditions, exceptions, and limitations;
3. use specific, evidence-backed examples and consistent entities;
4. preserve source traceability for material claims;
5. add original value rather than remixing answer surfaces or search results;
6. keep the format natural for the content, not mechanically question-led.

In optimize mode, retain accurate passages and authorial or brand voice unless a material issue requires change. In audit mode, return diagnosis and actions only.

<!-- parity: unique-value -->
## Require useful original value

Prefer first-hand evidence, original data, expert knowledge, experiments, case evidence, decision frameworks, real examples, technical explanation, and candid conditions or limitations. If differentiated support is unavailable, identify the gap instead of disguising synthesis as original insight.

<!-- parity: brand-recommendations -->
## Handle brand and recommendation content

Include brands only when evidence, user intent, and content purpose justify them. For recommendations or comparisons, state criteria, conditions, evidence, trade-offs, material conflicts, and time scope where relevant.

Do not manufacture praise, suppress limitations, invent competitor weaknesses, create false third-party consensus, or present a sponsored or commercial perspective as neutral.

<!-- parity: platform-localization -->
## Localize platform guidance cautiously

Keep the core workflow platform-neutral. Read [references/platform-localization.md](references/platform-localization.md) when a named platform matters. Treat official guidance as dated and time-sensitive; verify it when tools permit and the claim materially affects the work.

For platforms without reliable public optimization guidance, distinguish actual observations from hypotheses. Never present unsupported advice as a platform fact or a special GEO requirement.

<!-- parity: technical-boundary -->
## Flag technical prerequisites without implementing them

The workflow may identify a discoverability prerequisite, such as content being inaccessible to an applicable crawler, and may cite verified official guidance or recommend technical review. It must not silently modify `robots.txt`, server configuration, indexing controls, canonical tags, sitemaps, WAF/CDN rules, or authentication.

<!-- parity: geo-qa -->
## Run GEO content QA

Read [references/geo-qa.md](references/geo-qa.md). Review question fit, answer clarity, claim integrity, citation readiness, entity consistency, conditions and limitations, original value, platform-claim accuracy, commercial transparency, publication cleanliness, and remaining verification.

Do not invent a numeric GEO score unless the user supplies a defensible scoring model. If unresolved evidence makes the asset unsafe or materially misleading, label it as requiring verification rather than ready to publish.

<!-- parity: delivery -->
## Deliver by mode

Follow explicit user formatting first. Otherwise return:

- **brief:** research or coverage summary, Answer Map, formal GEO Content Brief, and evidence gaps; never the full article;
- **create:** brief summary, content, claim or evidence notes, and remaining verification;
- **optimize:** diagnosis, optimized content, material changes, and remaining verification;
- **audit:** prioritized diagnosis, evidence/entity/answerability issues, and recommended actions.

Keep internal planning, unsupported platform hypotheses, and verification markers outside reader-facing content. GEO optimization can improve content quality, traceability, usefulness, and eligibility; it cannot guarantee platform outcomes.
