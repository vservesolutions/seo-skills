---
name: "score"
description: "Recompute and display the two scores (Search SEO + AI Visibility) from a persisted audit run, without re-crawling. Use to re-show or refresh the scores after an audit, to score a specific run directory or host, or to score a saved findings JSON file."
summary: "Recomputes and displays search SEO and AI visibility scores from a persisted audit run without re-crawling."
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "Hainrixz/claude-seo-ai"
repo_url: "https://github.com/Hainrixz/claude-seo-ai"
source: "https://github.com/Hainrixz/claude-seo-ai/blob/HEAD/skills/score/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Hainrixz/claude-seo-ai/HEAD/skills/score/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 83
collected: "2026-11-12"
---

<!-- Claude Code skill · Hainrixz/claude-seo-ai · skills/score/SKILL.md · MIT
     Source: https://github.com/Hainrixz/claude-seo-ai/blob/HEAD/skills/score/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

<!-- Portions Copyright (c) 2026 Enrique Rocha (@soyenriquerocha) - see LICENSE for original authors · tododeia.com · id er-d03758e1 -->

# /claude-seo-ai:score

Recompute and show the two 0–100 scores by running the **seo-score** skill, which uses `scripts/score.mjs` for a reproducible number.

Runs live under `<root>/<host>/<run-id>/`, where `<root>` is `--out` › `$CLAUDE_SEO_AI_HOME` › `${CLAUDE_PLUGIN_DATA}/runs` › `~/.claude-seo-ai/runs`, and `<host>` is the lower-cased host with `:` → `_` (local targets become `local/<basename>-<hash>`). **`score.mjs --run` takes a directory or a findings file — it does not understand the word `latest`**, so resolve the pointer yourself with `Read` before you call it: `<root>/<host>/latest.json` is `{ run, path, updated_at }` and `path` is the absolute run directory; `<root>/index.json` lists every host with its `latest` run id.

- No argument (default): read `<root>/index.json`, take the host whose `latest` run id sorts highest (run ids are UTC `YYYY-MM-DDTHH-mm-ssZ`, so string order is chronological), read that host's `latest.json`, then `node "${CLAUDE_PLUGIN_ROOT}/scripts/score.mjs" --run <path from latest.json>`.
- `latest:<host>` → read `<root>/<host>/latest.json` and pass its `path` to `--run`.
- A run directory → `node "${CLAUDE_PLUGIN_ROOT}/scripts/score.mjs" --run <run-dir>` (it reads `<run-dir>/findings.json`).
- A findings JSON path → `node "${CLAUDE_PLUGIN_ROOT}/scripts/score.mjs" --findings <path>` (add `--vertical a,b`, `--multilingual` and `--environment production|preview|staging|local` when the file carries no run context; `--manifest <crawl.json>` adds the site rollup, `--strict` exits 2 if any finding fails schema validation, `--validate-only` reports the per-finding schema verdict without scoring).
- If no `index.json`/`latest.json` exists, or the run has no `findings.json`, tell the user to run `/claude-seo-ai:audit <url>` first — never score from memory.

Show both scores with bands, the per-category breakdown, any severity-gating cap (`cap_reasons`), the `unscored` state when no category is active, and the `needs_api` / `manual_review` / `dropped` counts. Two scores, never blended. When an axis comes back `provisional: true` (`state: "partial"`), say the band and its `coverage` % in the same sentence — a band built on a third of the model is not the same claim as a measured one, and the per-axis `warnings[]` name what was not measured. With a rollup, read `pages_scored` against `pages_count`: a page listed in `unscored_pages[]` did not answer 2xx, so it was never scored — name those pages and their status instead of letting the site score stand for a sample that was not measured.
