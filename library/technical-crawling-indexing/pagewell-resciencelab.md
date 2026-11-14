---
name: "pagewell"
description: "Generate, plan, QA, and maintain SEO/GEO pages as code. Use for landing pages, free tools, docs, comparison pages, FAQs, glossary pages, topic clusters, private ABM pages, DESIGN.md, PAGEWELL.md, page briefs, metadata, schema, claim checks, and discovery files."
category: "technical-crawling-indexing"
platforms: ["unspecified"]
platform_source: "none"
repo: "ReScienceLab/pagewell"
repo_url: "https://github.com/ReScienceLab/pagewell"
source: "https://github.com/ReScienceLab/pagewell/blob/HEAD/skills/pagewell/SKILL.md"
raw_source: "https://raw.githubusercontent.com/ReScienceLab/pagewell/HEAD/skills/pagewell/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Unspecified skill · ReScienceLab/pagewell · skills/pagewell/SKILL.md · MIT
     Source: https://github.com/ReScienceLab/pagewell/blob/HEAD/skills/pagewell/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Pagewell

Pagewell is the front door for generating search-ready website pages as normal code in the user's repo.

Use this skill when the user asks for anything related to SEO/GEO pages, landing pages, free tools, topic clusters, design extraction, Pagewell context, product facts, QA, discovery files, or SEO operations.

## Progressive disclosure

Do not load every Pagewell reference up front. Use this router first, then read only the referenced module, playbook, adapter, schema, or strategy doc needed for the task.

Packaged references live under `references/`:

| Source concept | Packaged path |
|---|---|
| Core modules | `references/skills/*.md` |
| Page/free-tool/QA/SEO playbooks | `references/playbooks/**` |
| Framework adapters | `references/adapters/*.md` |
| Strategy docs | `references/docs/*.md` |
| JSON schemas | `references/schemas/*.json` |
| Reference index | `references/MANIFEST.md` |

If a reference file mentions an old source path like `skills/qa.md`, `playbooks/page-types/faq.md`, or `adapters/astro.md`, resolve it to the packaged path under `references/`.

## Quality invariant

The router must never generate final output by itself when a specialized Pagewell module should be used.

It should:

1. infer intent
2. create or normalize a brief/spec
3. select the right core module
4. ensure the selected module reads the correct playbook or adapter
5. run QA and discovery updates when relevant

Quality is preserved because page-type, free-tool, SEO, and claim-check rules live in the packaged references and must not be bypassed.

## Required context

Before routing, check for:

- `PAGEWELL.md`
- `DESIGN.md`
- existing briefs if mentioned

`PAGEWELL.md` is the unified Pagewell source of truth for product facts, supported/prohibited claims, site implementation, route taxonomy, page/component patterns, generation rules, and anti-generic QA rules.

If missing:

- no `PAGEWELL.md` → route first to `references/skills/discover-site.md`
- no `DESIGN.md` or invalid design → route to `references/skills/design-system.md`

Legacy files such as `SITE_PROFILE.md`, `products.yaml`, `src/data/products.*`, or page-pattern notes should be imported into `PAGEWELL.md` by `discover-site.md` instead of treated as separate required context for future runs.

## Intent routing

### Setup and source of truth

| User asks for | Read and follow |
|---|---|
| first run / initialize Pagewell / create PAGEWELL.md / inspect/detect/current stack/framework / unify site and product facts | `references/skills/discover-site.md` |
| extract design / create DESIGN.md / validate design | `references/skills/design-system.md` |
| define products / product facts / canonical claims in PAGEWELL.md | `references/skills/define-product-facts.md` |

### Topic planning

| User asks for | Read and follow |
|---|---|
| SEO plan / content map / topic cluster / what pages should we create | `references/skills/plan-topic-cluster.md` |

### Standard page generation

Route to `references/skills/generate-page.md` and infer `pageType`.

| Cue | pageType | Playbook |
|---|---|---|
| `/products/...`, product landing, canonical product page | `product` | `references/playbooks/page-types/product.md` |
| `/use-cases/...`, workflow, job-to-be-done, "for X use case" | `use-case` | `references/playbooks/page-types/use-case.md` |
| `/faq/...`, "how do I", "can I", one question | `faq` | `references/playbooks/page-types/faq.md` |
| `/glossary/...`, "what is", definition, meaning, term | `glossary` | `references/playbooks/page-types/glossary.md` |
| `/alternatives/...`, `/compare/...`, "vs", "alternative" | `alternative` | `references/playbooks/page-types/alternative.md` |
| `/docs/...`, technical how-to, install, setup, troubleshooting | `docs` | `references/playbooks/page-types/docs.md` |
| `/lp/...`, ads, campaign, launch, conversion page | `lp` | `references/playbooks/page-types/lp.md` |
| `/private/...`, `/accounts/...`, ABM, personalized outbound, sales follow-up | `private` | `references/playbooks/page-types/private.md` |

### Free tools

Route to `references/skills/generate-free-tool.md`.

| Cue | Mode/category |
|---|---|
| brainstorm free tools, tool ideas | brainstorm mode |
| `/tools/...`, "build a free tool" | generate page mode |
| `/tools` hub, list tools | hub mode |
| launch/promote a tool | launch mode |
| "generator" | category: generator |
| "converter" | category: converter |
| "analyzer", "checker", "grader", "audit" | category: analyzer |
| "calculator", "estimator" | category: calculator |
| "preview", "renderer", "viewer" | category: previewer |
| "validator", "linter" | category: validator |

### QA and operations

| User asks for | Read and follow |
|---|---|
| check, review, validate page quality | `references/skills/qa.md` |
| sitemap / robots / llms.txt / discovery files | `references/skills/update-discovery-files.md` |
| title CTR, internal links, SEO maintenance, stuck pages, GSC review | `references/skills/seo-ops.md` |

## Route inference

If a route is provided, infer page type from path first:

```txt
/products/*       → product
/use-cases/*      → use-case
/faq/*            → faq
/glossary/*       → glossary
/alternatives/*   → alternative
/compare/*        → alternative
/docs/*           → docs
/lp/*             → lp
/private/*        → private
/accounts/*       → private
/tools            → free-tool hub mode
/tools/*          → free-tool generate page mode
```

If no route is provided, infer from natural language.

## Natural-language inference

| Phrase pattern | Likely route |
|---|---|
| "What is <term>?" | glossary if term definition; FAQ if product/support question |
| "How do I <action>?" | FAQ if short answer; docs if technical steps; use-case if workflow/benefits page |
| "How to <technical task>" | docs |
| "Use <product> for <workflow>" | use-case |
| "<competitor> alternative" | alternative |
| "<product> vs <competitor>" | alternative |
| "free <thing> generator/converter/calculator/previewer" | free-tool |
| "page for paid ads / campaign" | lp |
| "page for Acme / personalized sales page" | private |

## Ambiguity handling

If intent is ambiguous, ask at most one concise clarification question.

Examples:

```txt
This could be either a FAQ answer or a docs tutorial. Should it be a short answer page or a step-by-step setup guide?
```

```txt
This looks like either a glossary definition or a free tool opportunity. Do you want a definition page or a working tool?
```

If the user says "you decide", choose the path with the highest expected utility and explain briefly.

## Brief creation

When the user gives a natural language request instead of a YAML brief, create a temporary framework-neutral brief before routing.

Minimum fields for a standard page:

```yaml
route: <inferred-or-proposed-route>
pageType: <inferred-page-type>
title: <draft-title>
description: <draft-description>
h1: <draft-h1>
primaryKeyword: <inferred-keyword>
product: <product-if-known>
intent: <search/conversion/support/outbound intent>
noindex: <true|false>
```

Minimum fields for a free tool:

```yaml
route: /tools/<slug>
pageType: free-tool
title: <draft-title>
description: <draft-description>
h1: <draft-h1>
primaryKeyword: <keyword>
product: <product-if-known>
tool:
  category: <generator|converter|analyzer|calculator|previewer|validator|other>
  input: []
  output: []
  logic: <draft logic>
  privacy: <privacy behavior>
```

Show the brief only when useful or when asking for approval. Otherwise proceed with the selected module.

## Default follow-up chain

For page/tool generation requests, default to:

```txt
1. selected generator module
2. references/skills/qa.md
3. references/skills/update-discovery-files.md when indexability/routes changed
```

For alternatives/comparisons, ensure `references/skills/qa.md` runs the claim-check subroutine.

For private pages, ensure `noindex,nofollow` and sitemap exclusion.

For free tools, ensure the tool gives first value without signup.

## Output

When routing, report the selected path clearly:

```md
# Pagewell Routing

Intent: <inferred intent>
Selected module: <module>
Selected playbook/mode: <playbook or mode>
Reason: <one sentence>

Next: <what will be done>
```

Then execute or propose the next step depending on user approval/context.

## Rules

- Do not make the user remember page types, tool categories, or modes.
- Do not bypass the underlying modules/playbooks.
- Do not reduce QA requirements for convenience.
- Do not generate pages without a real search, conversion, support, or outbound intent.
- Ask one clarification question when ambiguity materially affects output quality.
- Prefer explicit user-provided routes/briefs over inference.
