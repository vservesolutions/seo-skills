---
name: "seo-unlighthouse"
description: "Multi-page Lighthouse audit via the MIT-licensed Unlighthouse CLI. Free-tier alternative to running PageSpeed against every URL on a site, no API quota burn, runs locally."
category: "core-web-vitals-performance"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "AgentMrX/claude-seo"
repo_url: "https://github.com/AgentMrX/claude-seo"
source: "https://github.com/AgentMrX/claude-seo/blob/HEAD/extensions/unlighthouse/skills/seo-unlighthouse/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AgentMrX/claude-seo/HEAD/extensions/unlighthouse/skills/seo-unlighthouse/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · AgentMrX/claude-seo · extensions/unlighthouse/skills/seo-unlighthouse/SKILL.md · MIT
     Source: https://github.com/AgentMrX/claude-seo/blob/HEAD/extensions/unlighthouse/skills/seo-unlighthouse/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# seo-unlighthouse

Run Lighthouse against every URL on a site (up to a configurable cap)
and aggregate the results. Useful when:

- PageSpeed Insights' free quota (25k QPD) isn't enough for a large site.
- You want offline / local CWV measurement (CI integration, restricted environments).
- You need a quick site-wide regression check after a deploy.

## Prerequisites

- Run `extensions/unlighthouse/install.sh` (no API key needed).
- Node 18+ on `$PATH`.

## Routing

| Command | Effect |
|---|---|
| `/seo unlighthouse <url>` | Mobile audit, up to 200 routes, JSON+HTML report in a temp dir |
| `/seo unlighthouse <url> --device desktop` | Desktop form factor |
| `/seo unlighthouse <url> --max-routes 50 --output-dir ./reports` | Cap + persist |

All flags forward through `"${CLAUDE_PLUGIN_ROOT}/scripts/claude-seo" run unlighthouse_run.py`, which handles
url_safety pre-flight and subprocess timeout management.

## Output handling

The wrapper reads `ci-result.json` from the Unlighthouse output dir, normalizes
it (the default `jsonSimple` reporter writes a flat JSON array of per-route
results; a tolerant fallback also accepts the `jsonExpanded` object shape),
and returns:

- `route_count`: number of routes actually audited
- `aggregate_scores`: median score per Lighthouse category across all audited
  routes (`performance`, `accessibility`, `best-practices`, `seo`)
- `routes`: the per-route breakdown (also on disk at `<output_dir>/ci-result.json`)

Route cap and per-page timeout are set via a generated `unlighthouse.config.mjs`
passed with `--config-file` (the only CLI-documented way to set `scanner.maxRoutes`;
unlighthouse-ci has no `--max-routes` flag). Use `--page-timeout <seconds>` to
change the per-page Lighthouse task timeout (default 60s); this is separate
from the overall `--timeout` subprocess guard (default 600s).

## Cross-skill delegation

- For single-URL field data (CrUX), use `seo-google psi` / `seo-google crux`.
- For LCP subpart decomposition on slow pages, use the
  `"${CLAUDE_PLUGIN_ROOT}/scripts/claude-seo" run lcp_subparts.py` workflow (Phase C).
