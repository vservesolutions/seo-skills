---
name: "seo-hreflang"
description: "International SEO, multi-regional architecture, and hreflang tag validation. Enforces bidirectional return tags and cultural localization profiles."
summary: "Manages international multi-regional architecture and validates bidirectional hreflang tags."
category: "international-seo"
platforms: ["claude-code", "windsurf", "antigravity"]
platform_source: "declared"
repo: "seoskillsai/seo-skills-ai"
repo_url: "https://github.com/seoskillsai/seo-skills-ai"
source: "https://github.com/seoskillsai/seo-skills-ai/blob/HEAD/skills/seo-hreflang/SKILL.md"
raw_source: "https://raw.githubusercontent.com/seoskillsai/seo-skills-ai/HEAD/skills/seo-hreflang/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 21
collected: "2026-11-12"
---

<!-- Claude Code, Windsurf, Antigravity skill · seoskillsai/seo-skills-ai · skills/seo-hreflang/SKILL.md · MIT
     Source: https://github.com/seoskillsai/seo-skills-ai/blob/HEAD/skills/seo-hreflang/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# International SEO & Hreflang Validation

Audits and generates international URL architectures to eliminate cross-language cannibalization.

---

## 🌐 Hreflang Validation Rules

1. **Bidirectional Return Tag Verification:** If Page A links to Page B with `hreflang="de"`, Page B MUST link back to Page A with `hreflang="en"`.
2. **`x-default` Fallback:** Always include `hreflang="x-default"` pointing to the global language selector or default locale.
3. **Canonical Self-Alignment:** Each localized variant must specify its own URL as the canonical tag (never point canonicals across different language versions).
