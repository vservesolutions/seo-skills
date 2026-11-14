---
name: "citation-consistency-checker"
description: "Check NAP/citation consistency across directory listings against a canonical business NAP and emit Evidence. Use when auditing local citation consistency from a listings-nap fixture."
category: "local-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "apexshift/sageo"
repo_url: "https://github.com/apexshift/sageo"
source: "https://github.com/apexshift/sageo/blob/HEAD/skills/local-geographic/citation-consistency-checker/SKILL.md"
raw_source: "https://raw.githubusercontent.com/apexshift/sageo/HEAD/skills/local-geographic/citation-consistency-checker/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · apexshift/sageo · skills/local-geographic/citation-consistency-checker/SKILL.md · MIT
     Source: https://github.com/apexshift/sageo/blob/HEAD/skills/local-geographic/citation-consistency-checker/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

## Purpose

Audit **NAP** (name, address, phone) consistency between a canonical business
record and directory listing citations. Exact matches pass; clear field
disagreements fail; near-variant overlaps (substring name/address) emit
`needs_human_verification`. Findings stay Skill-level; remediations are owned
by Agents and Orchestrator Human review gates.

## Inputs

- **listings-nap** — map with `canonical` (name, streetAddress, addressLocality,
  telephone) and `listings` (list of listing maps). Each listing may include
  `id`, `directory`, and the same NAP fields.
- **source** — stable id for the observation (fixture path, URL, or doc id).
- **observed_at** — optional ISO-8601 timestamp; defaults to the run clock when
  omitted by the caller.

## Outputs

- **findings** — list of `{id, status, summary}` records (`pass` | `fail`).
- **evidence** — list of Evidence records (see Evidence).

Executable entry: `scripts/check.py` →
`check_citation_consistency(listings_nap, *, source, observed_at=None)`.

## Evidence

`evidence_requirement: full` — every claim is an Evidence record with:

- `claim`, `source`, `observed_at`, `confidence`
- `verification_reason` when `confidence` is `needs_human_verification`
- optional `method` (this Skill uses `listings-nap-heuristics`)

## Human review

`human_review_gate: not_required`. This Skill reports findings only. Any
remediation plan or live-site / directory change requires Agent/Orchestrator
gates.

## Procedure

1. Load the listings-nap fixture from the caller. No live APIs.
2. Require a complete canonical NAP (name, streetAddress, addressLocality,
   telephone).
3. If `listings` is empty → fail `citation.nap_consistent`.
4. For each listing, classify against canonical (text casefold; phone digits,
   dropping a leading country `1` when 11 digits):
   - **consistent** — all NAP fields present and normalize-equal
   - **conflict** — a text field is a near-variant (one contains the other) → NHV
   - **mismatch** — a present field normalize-unequal without near-variant overlap
   - **incomplete** — one or more NAP fields missing without mismatch/conflict
5. If every listing is consistent → pass `citation.nap_consistent` with
   per-listing Evidence; otherwise fail `citation.nap_consistent`.
6. If any mismatches → fail `citation.nap_mismatch` with high-confidence Evidence.
7. If any incompletes → fail `citation.listing_incomplete` with high-confidence
   Evidence.
8. If any conflicts → fail `citation.nap_conflict` with
   `needs_human_verification` Evidence.
9. Return `{findings, evidence}`.
