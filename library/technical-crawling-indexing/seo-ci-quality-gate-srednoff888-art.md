---
name: "seo-ci-quality-gate"
description: "Use this skill for SEO checks in CI, metadata, canonicals, links, robots, sitemap, noindex regressions."
category: "technical-crawling-indexing"
platforms: ["unspecified"]
platform_source: "none"
repo: "srednoff888-art/srednoff-os"
repo_url: "https://github.com/srednoff888-art/srednoff-os"
source: "https://github.com/srednoff888-art/srednoff-os/blob/HEAD/.codex/skills/seo-ci-quality-gate/SKILL.md"
raw_source: "https://raw.githubusercontent.com/srednoff888-art/srednoff-os/HEAD/.codex/skills/seo-ci-quality-gate/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Unspecified skill · srednoff888-art/srednoff-os · .codex/skills/seo-ci-quality-gate/SKILL.md · MIT
     Source: https://github.com/srednoff888-art/srednoff-os/blob/HEAD/.codex/skills/seo-ci-quality-gate/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO CI Quality Gate

Use this skill for SEO tasks focused on SEO checks in CI, metadata, canonicals, links, robots, sitemap, noindex regressions.

## Workflow

1. Clarify the user outcome, constraints, current stack, and definition of done.
2. Inspect local source, artifacts, analytics exports, logs, designs, or docs before changing anything.
3. Check official documentation when APIs, SDKs, policies, search behavior, accessibility rules, or production behavior may have changed.
4. Compare proven open-source patterns for non-trivial choices and adapt ideas without copying incompatible code.
5. Produce the smallest production-ready change or recommendation that satisfies the request.
6. Validate with relevant evidence: tests, lint, typecheck, build, screenshots, crawl output, logs, analytics, or manual scenario.
7. Report commands, files, findings, risks, and next steps clearly.

## Focus Checklist

- Map inputs, owners, dependencies, and constraints.
- Prefer existing project conventions, design systems, and platform primitives.
- Include failure states, privacy/security implications, performance impact, and rollback where relevant.
- Separate facts from assumptions and mark any unverified claims.
- Keep recommendations actionable and prioritized by impact and risk.

## Guardrails

- Do not make CI flaky with network-only SEO checks unless isolated.
- Do not perform destructive, paid, production, publishing, account-changing, or externally visible actions without explicit user confirmation.
- Do not expose secrets, private keys, tokens, cookies, private analytics, personal data, or confidential business data.
- If validation is impossible, state why and provide a concrete manual verification path.
