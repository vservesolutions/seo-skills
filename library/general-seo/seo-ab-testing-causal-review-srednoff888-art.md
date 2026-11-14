---
name: "seo-ab-testing-causal-review"
description: "Use this skill for SEO experiments, causal analysis, rollouts, guardrails, interpretation of noisy organic data."
category: "general-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "srednoff888-art/srednoff-os"
repo_url: "https://github.com/srednoff888-art/srednoff-os"
source: "https://github.com/srednoff888-art/srednoff-os/blob/HEAD/.codex/skills/seo-ab-testing-causal-review/SKILL.md"
raw_source: "https://raw.githubusercontent.com/srednoff888-art/srednoff-os/HEAD/.codex/skills/seo-ab-testing-causal-review/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Unspecified skill · srednoff888-art/srednoff-os · .codex/skills/seo-ab-testing-causal-review/SKILL.md · MIT
     Source: https://github.com/srednoff888-art/srednoff-os/blob/HEAD/.codex/skills/seo-ab-testing-causal-review/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO A/B Testing Causal Review

Use this skill for SEO tasks focused on SEO experiments, causal analysis, rollouts, guardrails, interpretation of noisy organic data.

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

- Do not overstate causality from uncontrolled SEO changes.
- Do not perform destructive, paid, production, publishing, account-changing, or externally visible actions without explicit user confirmation.
- Do not expose secrets, private keys, tokens, cookies, private analytics, personal data, or confidential business data.
- If validation is impossible, state why and provide a concrete manual verification path.
