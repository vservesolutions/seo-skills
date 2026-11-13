---
name: "seo-audit"
description: "Run an SEO audit of a site, section, or single page. Trigger on \"check SEO\", \"seo audit\", \"why are we not showing up on Google\", \"optimize this page for search\", or after shipping new public pages. Delegates the deep pass to the seo-strategist subagent and turns the result into applied fixes."
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "declared"
repo: "kulykivska/claude-plugins"
repo_url: "https://github.com/kulykivska/claude-plugins"
source: "https://github.com/kulykivska/claude-plugins/blob/HEAD/seo/skills/seo-audit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/kulykivska/claude-plugins/HEAD/seo/skills/seo-audit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 6
collected: "2026-11-13"
---

<!-- Claude Code skill · kulykivska/claude-plugins · seo/skills/seo-audit/SKILL.md · MIT
     Source: https://github.com/kulykivska/claude-plugins/blob/HEAD/seo/skills/seo-audit/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO audit

## Steps

1. **Scope**: one page, a section (e.g. /race/*), or the whole site. Identify
   the repo templates behind the target pages.
2. **Snapshot what a bot sees**: `curl -A "Googlebot" <url>` and check the
   returned HTML for title/meta/OG/schema BEFORE JS. For an SPA, this is
   where server-side meta injection either works or doesn't.
3. **Delegate**: spawn the `seo-strategist` subagent with the scope, the
   fetched evidence, and repo paths. For big scopes spawn one per section in
   parallel.
4. **Apply**: implement the top fixes it returns (meta/OG/schema/sitemap/
   robots changes are code; content gaps become a page list with target
   queries). Anything touching prediction pages must respect the access
   gating policy (free teaser visible to bots, paid content locked).
5. **Verify**: re-curl the fixed pages, validate schema (Google Rich Results
   test via WebFetch), confirm sitemap entries, request re-indexing steps.
6. Track: keep the running SEO roadmap in the project's docs so audits build
   on each other instead of restarting.
