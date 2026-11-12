---
name: "blog-locale-audit"
description: "Audit a directory of multilingual blog content for completeness, consistency, hreflang correctness, meta-tag parity, and freshness. Builds a translation coverage matrix, flags stale translations, validates hreflang and schema, and emits a prioritized report with runnable fix commands. Use when user says 'locale audit', 'blog locale-audit',..."
category: "local-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "imMamdouhaboammar/prepilot-for-marketing"
repo_url: "https://github.com/imMamdouhaboammar/prepilot-for-marketing"
source: "https://github.com/imMamdouhaboammar/prepilot-for-marketing/blob/HEAD/skills/blog-locale-audit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/imMamdouhaboammar/prepilot-for-marketing/HEAD/skills/blog-locale-audit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 3
collected: "2026-11-12"
---

<!-- Unspecified skill · imMamdouhaboammar/prepilot-for-marketing · skills/blog-locale-audit/SKILL.md · MIT
     Source: https://github.com/imMamdouhaboammar/prepilot-for-marketing/blob/HEAD/skills/blog-locale-audit/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Blog Locale Audit

## PrePilot role

This is a deep Content, Editorial & Social specialist inside the free PrePilot for Marketing experience. Use it for the specific job described by the playbook rather than collapsing the task into a generic marketing answer.

Source lineage: claude-blog/skills/blog-locale-audit/SKILL.md @ aec971ac511370c6216cd93776c9cf2fec97b32a
Source license: MIT

## Source dependency pack

This Skill includes safe source-relative resources under `upstream/` and explicit omission or missing-resource notes under `upstream-notes/`. Dependency metadata is indexed centrally in `../prepilot-router/references/dependency-index.json`. Copied resources: 0; linked public Skills: 0; omitted runtime helpers: 0; unresolved upstream references: 0.

## Runtime contract

- Use the current conversation, supplied files, and already available connected tools before asking for more input.
- Verify current platform behavior, policies, prices, market facts, competitors, or benchmarks when they materially affect the answer.
- Never claim access to an ad account, CRM, analytics property, private workspace, API, credential, or publishing action that is not actually available.
- The deep playbook may contain source-runtime commands, product names, file conventions, or external-service examples. Treat those as implementation notes. Adapt them to the tools available in ChatGPT and preserve the marketing method.
- The free Plugin must remain useful without paid PrePilot MCP. If connected private data or an external action would improve the job, complete the non-connected analysis first and state the missing dependency precisely.
- Do not invent performance numbers, customer evidence, quotes, tests, rankings, market sizes, account states, or competitor facts.
- Preserve the user's market, language, audience, funnel stage, business model, budget, and risk constraints throughout the work.

## Neural connections

- Domain router: `router-content-social`
- Requires: `narrative-quality-auditor` - Narrative Quality Auditor
- Feeds: `blog-seo-check` - Blog Seo Check
- Next best: `seo-audit` - Seo Audit
- Complements: `email-render-builder` - Email Render Builder
- Complements: `meta-ads-audit` - Meta Ads Audit
- Validates with: `campaign-audit` - Campaign Audit
- Fallback: `blog-audit` - Blog Audit
- Parallel: `on-page-seo-checker` - On Page Seo Checker

Use these connections only when they add a distinct job. A normal request should not expand into the entire graph.

## Operating rules

1. Identify the concrete decision or deliverable this specialist owns.
2. Separate supplied evidence, verified evidence, assumptions, and unknowns before applying the playbook.
3. Follow the detailed method below at full depth. Do not replace it with a short generic checklist.
4. When another specialist owns a downstream job, hand off the relevant artifacts instead of redoing its work.
5. For public, spend-bearing, client-facing, or high-impact output, use the connected validation edge before treating the work as final.
6. Read packaged `upstream/` references when the source playbook points to them. Files under `upstream-notes/` explain resources omitted by the public-distribution safety gate or absent from the pinned source.

## Deep playbook

> Adapted from `claude-blog/skills/blog-locale-audit/SKILL.md` under MIT. Runtime-specific instructions are subordinate to the PrePilot runtime contract above.

# Blog Locale Audit, Multilingual Quality Control

Audits a directory of multilingual blog content to ensure every language
version is complete, consistent, correctly tagged, and SEO-optimized.
Catches international content issues before they hurt rankings.

> Adapted from `claude-blog-multilingual` by Chris Mueller (Pro Hub Challenge,
> March 2026). Original: https://github.com/Chriss54/multilingual-int

## Workflow

### Phase 1: Discovery

1. Resolve the target directory inside the project root/current working
   directory. Reject symlinked directories and traversal outside the root,
   then scan blog content and group posts by language using:
   - Subdirectory names (`en/`, `de/`, `fr/`).
   - Frontmatter `lang` and `translatedFrom` fields.
   - `hreflang-map.json` if present.
2. Normalize detected language codes with the shared multilingual locale rules
   used by `blog-translate`, `blog-localize`, and `blog-multilingual`: ISO
   639-1 language in lowercase, optional ISO 15924 script in title case,
   optional ISO 3166-1 Alpha-2 region in uppercase. Flag ambiguous
   language-only codes such as `es`, `pt`, and `zh` unless the content
   declares an explicit neutral mode.
3. Build a content matrix mapping which post exists in which languages. Use a
   stable translation-group key before comparing slugs: `translationGroupId`,
   `sourceSlug`, schema `translationOfWork.url`, or the IDs and URLs in
   `hreflang-map.json`. Fall back to normalized source slug only when no
   stable key exists.
4. Detect the source language (most common `translatedFrom` target, or the
   `sourceLanguage` field in `hreflang-map.json` if present).

### Phase 2: Completeness Audit

Show which translations are missing:

```
### Translation coverage matrix

| Post (EN) | DE | FR | ES | JA |
|-----------|----|----|----|----|
| how-to-avoid-ai-slop | ok | ok | missing | missing |
| content-marketing-2026 | ok | missing | ok | missing |

Coverage: 60% (6 of 10 expected translations present)
Missing: 4 translations needed
```

### Phase 3: Content Parity Audit

For every post that exists in multiple languages:

| Check | What | Severity |
|-------|------|----------|
| Section count | Same number of H2 and H3 sections | Critical |
| FAQ count | Same number of FAQ items | High |
| Image count | Same number of images | High |
| Chart count | Same number of charts (SVG figures) | High |
| Word count ratio | Within expected band for language pair (DE +20% to +30%, JA -20%, ES +10%) | Medium |
| Link count | Similar internal and external link counts | Medium |
| Evidence-backed claims | Same supported claims and citations across versions | Medium |
| Frontmatter parity | All required fields present per version | High |

Flag every significant deviation as an issue.

### Phase 4: SEO Parity Audit

For every language version verify:

| Element | Check | Severity |
|---------|-------|----------|
| Title tag | Present, localized, clear, and appropriate for the page | Critical |
| Meta description | Present, localized, accurate, and consistent with visible content | Critical |
| `lang` attribute or frontmatter `lang` | Present, valid Google-compatible hreflang or BCP 47 language tag | Critical |
| Canonical URL | Points to the same-language page, not the source-language page or x-default | Critical |
| Schema `inLanguage` | Matches `lang` | High |
| Schema `translationOfWork` | Points to the source URL | High |
| Alt text | Translated (no English alt in non-EN posts) | High |
| Slug | Localized (no English slug in non-EN posts) | Medium |
| Tags | Localized | Medium |
| Keywords | Localized | Medium |

### Phase 5: Hreflang Audit

If `hreflang-tags.html`, `hreflang-sitemap.xml`, or `hreflang-map.json`
exists in the directory:

| Check | What | Severity |
|-------|------|----------|
| Self-referencing | Each page references itself | Critical |
| Return tags | Every relationship is bidirectional | Critical |
| Canonical consistency | Every hreflang page canonicalizes to its same-language URL | Critical |
| `x-default` | Present, points to the unmatched-language fallback such as a language selector or default market page | Critical |
| Language codes | Valid Google-compatible hreflang tags: ISO 639-1 language plus optional ISO 15924 script or ISO 3166-1 Alpha-2 region | High |
| URL consistency | Same protocol, same trailing-slash convention | Medium |
| Completeness | Every language version represented | High |

If no hreflang files exist, report it as a critical gap and offer:
"Run `/blog multilingual <topic> --languages ...` to regenerate, or create
hreflang-tags.html manually."

If `seo-hreflang` from claude-seo is installed, suggest running it for
deeper validation.

### Phase 6: Freshness Audit

For posts with `translatedDate` in frontmatter:

| Check | What | Severity |
|-------|------|----------|
| Source updated after translation | Source modified after `translatedDate` | Critical |
| Source content drift | Stored source hash or source `dateModified` differs from current source | Critical |
| Translation drift | Stored translation hash differs from current localized file | Medium |
| Translation older than 90 days | May need refresh | Medium |
| `lastUpdated` mismatch across versions | Versions out of sync | Medium |
| Git or file mtime newer than `translatedDate` | Content changed without frontmatter update | Warning |

When available, store and compare `sourceHash`, source `dateModified`,
`translationHash`, and Git mtime before relying only on `translatedDate`.

Emit actionable commands per stale file:

```
3 translations are stale:
- de/ki-trends-2026.md (source updated 2 days ago)
  -> Run: /blog translate en/ai-trends-2026.md --to de
- fr/ki-trends-2026.md (source updated 2 days ago)
  -> Run: /blog translate en/ai-trends-2026.md --to fr
- es/tendencias-ia-2026.md (translation > 90 days old)
  -> Run: /blog translate en/ai-trends-2026.md --to es
```

### Phase 7: Report

Output as markdown by default. If the user passes `--html`, also write the
report to `locale-audit-report.html` only inside the audited project root.
Escape all dynamic filenames, titles, URLs, and issue text with
`html.escape(value, quote=True)` before rendering HTML, and reject symlinked
or outside-root report paths.

```
## Multilingual content audit report

### Summary
- Posts audited: [N] across [N] languages
- Overall health: [score] / 100
- Critical issues: [N]
- Warnings: [N]

### Translation coverage
[Matrix from Phase 2]

### Issues found
#### Critical
- [Issue with file references]

#### Warnings
- [Issue with file references]

#### Passed
- [Checks that passed]

### Prioritized fixes
1. [Highest-impact action]
2. [...]

### Stale-translation alerts
[Runnable commands from Phase 6]

### Quick fixes
- Run `/blog translate <file> --to <missing-langs>` for [N] missing translations.
- Run `/blog multilingual` to regenerate hreflang assets.
- Run `/blog localize <file> --locale <code>` for weak cultural adaptations.
```

## Error Handling

| Scenario | Action |
|----------|--------|
| Empty directory | "No blog posts found in [path]" |
| Only one language present | Report coverage, suggest target languages |
| No hreflang files | Flag as critical gap, offer regeneration |
| Unrecognized file format | Skip with a warning |

## Cross-References

- Fill missing translations: `/blog translate <file> --to <missing-codes>`
- Deepen weak adaptations: `/blog localize <file> --locale <code>`
- Regenerate hreflang assets: `/blog multilingual <topic> --languages <codes>`

## Output contract

- Deliver the actual artifact, analysis, decision, or plan requested by the user, not a summary of this Skill.
- Keep evidence and assumptions distinguishable when they affect the recommendation.
- Include concrete next actions, decision rules, or validation steps when the playbook implies them.
- Preserve useful tables, frameworks, examples, scoring models, templates, and checklists from the deep playbook when they improve the requested output.

## Quality gate

- The result addresses this specialist's exact job rather than giving broad marketing advice.
- Strong claims have evidence, a source, or explicit uncertainty.
- Recommendations respect channel, market, funnel, economic, and operational constraints.
- No unavailable tool, account action, or live data is represented as completed.
- The handoff names the next specialist only when another distinct marketing job remains.

## Handoff

Return the completed Blog Locale Audit output plus only the evidence, assumptions, and decisions needed by the selected `feeds`, `next_best`, or `validates` connection. Do not repeat upstream analysis unless new evidence changes it.
