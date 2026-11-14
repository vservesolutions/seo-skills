---
name: "search-intent-research"
description: "Build an evidence-backed, traceable library of real user questions and search intents from observable search behavior, communities, social platforms, first-party feedback, and other accessible sources. Use this skill for real-question research, cross-platform question collection, public and first-party aggregation, normalization, deduplication, clustering, and intent analysis. Do not use as the primary skill for brainstorming hypothetical questions, keyword generation only, writing SEO articles, title generation, answering one question, generic content ideation, summarization only, or…"
category: "keyword-research"
platforms: ["unspecified"]
platform_source: "none"
repo: "Nightflight6/open-agent-skills"
repo_url: "https://github.com/Nightflight6/open-agent-skills"
source: "https://github.com/Nightflight6/open-agent-skills/blob/HEAD/skills/en/search-intent-research/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Nightflight6/open-agent-skills/HEAD/skills/en/search-intent-research/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Unspecified skill · Nightflight6/open-agent-skills · skills/en/search-intent-research/SKILL.md · MIT
     Source: https://github.com/Nightflight6/open-agent-skills/blob/HEAD/skills/en/search-intent-research/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Search Intent Research

<!-- parity: purpose -->
## Purpose

Build a traceable library of observed demand evidence, normalized questions, and the intents behind them. Distinguish verbatim user utterances from search suggestions and platform-generated question modules. Never present generated or inferred questions as observed evidence.

<!-- parity: guardrails -->
## Non-negotiable guardrails

- Require an observable evidence record before labeling a normalized question evidence-backed.
- Preserve `raw_question` separately from `normalized_question`; never replace an observed query, suggestion, comment, complaint, or record with analyst-derived wording.
- Record `evidence_form` for every observation. Do not describe all observable search surfaces as verbatim user questions.
- Use `platform` for the actual source and the controlled `source_type` for its evidence category.
- Do not invent search volume, observations, sources, URLs, dates, queries, or research results.
- Keep question wording, intent, and underlying job as separate concepts.
- Separate Evidence Strength, Priority, `normalization_confidence`, `cluster_confidence`, and `intent_confidence`; do not manufacture numerical precision.
- Follow the host agent's tool, network, authentication, approval, and privacy policies. Respect explicit no-web instructions.
- Do not expose unnecessary personal or confidential identifiers from first-party material.

<!-- parity: input-model -->
## Determine inputs

Determine or reasonably infer:

- research topic;
- target market;
- language;
- target audience.

Use optional context when available: business or content purpose, time range, target question count, first-party sources, preferred or excluded sources, competitor scope, and research depth. Ask only for inputs that cannot be inferred without materially changing the research.

<!-- parity: define-scope -->
## 1. Define research scope

State the topic boundary, audience, market, language, purpose, time range, evidence standard, and stopping condition. Treat a target count as a planning goal, not permission to invent questions.

<!-- parity: source-coverage -->
## 2. Build a source coverage plan

Read [references/source-strategy.md](references/source-strategy.md). Select sources for audience fit and useful source-type diversity, not maximum platform count. Detect obvious mismatch; for example, do not treat lifestyle-only social sources as adequate coverage for hardware engineers when technical search, community, or first-party evidence is available.

Use only these Source Coverage statuses:

- `planned`: selected, collection not started;
- `collected`: real evidence collected;
- `login-required`: blocked pending authentication;
- `pending-manual`: user or later external collection required;
- `inaccessible`: unavailable with no active manual collection;
- `skipped`: deliberately not collected;
- `not-applicable`: irrelevant to this scope.

Do not claim every example source must be used.

<!-- parity: collect-observed -->
## 3. Collect observed evidence

Use available search, browsing, source, or provided-data tools when evidence collection requires them and host policy permits. For each observation, preserve the raw wording, actual platform, controlled source type, evidence form, URL or stable reference, source publication time when known, collection time, query used, and enough context to interpret the evidence. Do not invent either timestamp; use null or unknown where appropriate.

Forum questions, posts, comments, support conversations, interviews, and customer messages may preserve verbatim user wording. Autocomplete, related searches, and platform question modules are observable demand signals but may be platform-generated rather than verbatim user utterances. Do not treat an AI completion, analyst paraphrase, normalized question, cluster label, or inferred job as raw observed wording.

<!-- parity: access-handling -->
## 4. Handle authentication and inaccessible sources

When a useful source requires login:

1. pause only that source;
2. identify the platform and authentication requirement;
3. preserve the current checkpoint;
4. resume after the user authenticates when supported;
5. never fabricate inaccessible data.

If authentication is declined or unavailable, continue with accessible sources and record the coverage gap. When user action or later external collection is required, create a separate Manual Collection Queue and mark the source `pending-manual`. Never add queued items to the Evidence Table or count them as collected.

<!-- parity: normalize -->
## 5. Normalize without replacing evidence

Read [references/normalization-dedup.md](references/normalization-dedup.md). Clean punctuation, obvious spelling variants, terminology, and irrelevant conversational filler only when meaning remains intact. Do not add missing constraints, resolve ambiguity by invention, or collapse distinct intent.

<!-- parity: deduplicate -->
## 6. Deduplicate conservatively

Distinguish exact duplicates, near duplicates, and intent-equivalent variants. Merge only at the normalized-question or grouping layer. Preserve every raw evidence record and do not overmerge questions with meaningfully different user jobs, constraints, stages, or desired actions.

<!-- parity: cluster -->
## 7. Cluster from observed evidence

Group normalized questions into useful topic clusters that emerge from the data. Allow new clusters and outliers. Do not create arbitrary categories for visual completeness, and do not force evidence into a predetermined content plan.

<!-- parity: classify-intent -->
## 8. Classify intent

Read [references/intent-taxonomy.md](references/intent-taxonomy.md). Assign the best-supported intent and a separate underlying job. Use multi-label or an ambiguity note when evidence supports more than one intent; do not force certainty.

<!-- parity: aggregate-evidence -->
## 9. Aggregate evidence

Link each normalized question to all supporting Evidence Table records. Derive and expose:

- `observation_count`;
- `independent_source_count`;
- `source_type_count`.

These counts must come from collected evidence. `observation_count` is not an independent-demand count; repeated comments from one thread or copied results do not automatically represent independent demand.

<!-- parity: assess-priority -->
## 10. Assess evidence strength and priority

Read [references/evidence-priority.md](references/evidence-priority.md). Use Low, Medium, or High for:

- **Evidence Strength:** support from repetition, independent sources, source-type diversity, and explicit search-behavior data when available;
- **Priority:** evidence plus audience relevance, business or content relevance, decision importance, and practical usefulness;
- **Normalization confidence:** `normalization_confidence` for preservation of raw meaning;
- **Cluster confidence:** `cluster_confidence` for grouping coherence;
- **Intent confidence:** `intent_confidence` for the inferred intent and underlying job.

Use Low, Medium, or High where each confidence dimension is applicable. Keep every judgment separate and explain material caveats.

<!-- parity: hypothesis-handling -->
## Handle hypothesized questions

If evidence supports fewer questions than requested, return the evidence-backed set and explain coverage. Do not generate filler.

If the user explicitly requests hypotheses, create two visibly separate sections:

1. **Evidence-backed Questions**
2. **Hypothesized Questions**

Never merge hypothesized items into the evidence table or count them as observations.

<!-- parity: privacy -->
## Sanitize first-party evidence

When using support, sales, CRM, private-community, interview, or similar first-party material, remove unnecessary names, phone numbers, email addresses, order IDs, account IDs, personal identifiers, and confidential customer identity. Preserve the research value of the question, not the identity of the person asking it.

<!-- parity: stopping -->
## Use a saturation-oriented stopping condition

Stop when new sources add few new questions, major clusters and intent patterns are stable, high-value questions recur, and additional collection has diminishing value. Do not require a fixed sample count per platform. Report any source, segment, market, or time-range gap that limits saturation.

<!-- parity: delivery -->
## 11. Deliver the library and limitations

Read [references/output-schema.md](references/output-schema.md) before producing structured outputs. Unless the user requests another format, return:

1. Research summary
2. Question Library
3. Cluster / intent summary
4. Source Coverage
5. Limitations and coverage gaps
6. Manual Collection Queue, only when user action or later collection is required

Keep the Evidence Table available as the traceability layer even when the reader-facing response shows a compact view. Keep the Manual Collection Queue separate from collected evidence. Do not automatically turn the library into article outlines, SEO topics, GEO articles, or social posts; those are downstream tasks.
