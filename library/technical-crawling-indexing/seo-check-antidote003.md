---
name: "seo-check"
description: "Pre-commit SEO audit. Reviews pending git changes for SEO regressions (noindex, robots.txt, canonicals, metadata, redirects, structured data, headings) and crawls the affected routes like Googlebot to verify what search engines will actually see. Use before committing changes that touch pages, layouts, metadata, robots, sitemaps, redirects, or middleware — or whenever the user asks whether a change is SEO-safe."
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "AnTIdoTe003/claude-seo-check"
repo_url: "https://github.com/AnTIdoTe003/claude-seo-check"
source: "https://github.com/AnTIdoTe003/claude-seo-check/blob/HEAD/skills/seo-check/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AnTIdoTe003/claude-seo-check/HEAD/skills/seo-check/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Claude Code skill · AnTIdoTe003/claude-seo-check · skills/seo-check/SKILL.md · MIT
     Source: https://github.com/AnTIdoTe003/claude-seo-check/blob/HEAD/skills/seo-check/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO check — audit pending changes like a Google crawler

You are auditing the user's uncommitted work for SEO regressions before it ships. Two passes: a **static audit** of the diff, then a **live crawl** of the affected routes with a Googlebot user-agent. Report findings; do NOT fix anything unless the user asks.

## Arguments ($ARGUMENTS)

All optional. Parse from `$ARGUMENTS`:
- An `http(s)://` origin containing `localhost`/`127.0.0.1` → use as the local base URL (overrides auto-detection).
- Any other `http(s)://` origin → the **production** origin to compare against.
- Tokens starting with `/` → explicit routes to audit (in addition to routes derived from the diff).
- `--staged` → audit only staged changes. `--branch [name]` → diff against merge-base with that branch (default branch if omitted). `--full` → also crawl the homepage plus key sitemap routes even if unchanged.
- No git repo or no changes? Fall back to auditing whatever routes/URLs were passed; if none, say there is nothing to audit and stop.

## Step 1 — Scope the changeset

1. `git status --porcelain` and `git diff HEAD` (or per the flags above). Include untracked page files (`git status` shows them; read them directly).
2. Keep only SEO-relevant files: pages/routes/layouts (`app/**`, `pages/**`, `src/**` page components, `.astro`, `.html`, `.md`/`.mdx` content), head/metadata code, `robots.txt`/`robots.ts`, `sitemap*`, `next.config.*`, `vercel.json`, `netlify.toml`, `_redirects`, `middleware.*`, i18n config, and shared components that render `<head>` tags, headings, nav/footer links, or images.
3. If nothing SEO-relevant changed, report exactly that (list what WAS changed and why it's SEO-neutral) and stop — verdict ✅.
4. Note deleted/renamed files specifically: `git diff HEAD --diff-filter=DR --name-status` (deleted page = deleted URL).

## Step 2 — Map changed files to routes

Detect the framework (check for `next.config.*` + `app/` or `pages/`, `astro.config`, plain HTML…). Convert each changed page file to its URL path (e.g. `app/blog/[slug]/page.tsx` → `/blog/<pick a real slug>`; for dynamic segments find one real value from the codebase, a local fetch of the sitemap, or the dev DB — never invent one). A changed shared layout/nav/footer affects all routes; pick the 2–3 most important pages (home + a key template) to represent it.

## Step 3 — Static audit of the diff

Read `${CLAUDE_SKILL_DIR}/references/checklist.md` — it contains the full regression table, severity levels, framework specifics, and grep patterns. Then:

1. Run the checklist's grep patterns over the diff.
2. Read the full context of every hit before flagging it (a `noindex` behind a staging-env conditional is not a blocker — but verify the conditional and say so).
3. Pay special attention to: deleted/renamed routes without redirects, anything touching robots/sitemap/canonical/metadata exports, `'use client'` added to page components, and middleware matcher changes.

## Step 4 — Live crawl (what Googlebot actually sees)

1. Find the local server: try `curl -s -o /dev/null -m 3 -w '%{http_code}' http://localhost:<port>/` for the project's port (check `package.json` dev script, `.env`, defaults 3000/3001/4321/5173/8080), unless a local origin was passed in args.
2. If no server responds, start the project's dev command yourself with `run_in_background`, wait for it to become ready (poll with curl, allow ~60s for first compile), and **kill it after the crawl** (only if you started it). If it can't start, do a static-only audit and say the live crawl was skipped and why.
3. Crawl every affected route:
   ```
   node ${CLAUDE_SKILL_DIR}/scripts/crawl.mjs --base http://localhost:<port> <route> <route> ...
   ```
   Add `--compare <prod-origin>` when a production origin is available (from args, or an obvious one from the repo: `metadataBase`, `NEXT_PUBLIC_SITE_URL`, `homepage` in package.json, `og:url`). The compare diffs every SEO signal local-vs-production — the core "did my change break anything" evidence. Add `--json` if you need to post-process; the text report is fine to read directly.
4. The script fetches with a Googlebot-smartphone UA (mobile-first indexing), follows redirect chains, evaluates robots.txt the way Google does, checks sitemap membership, and flags issues itself (✗ error / ⚠ warn / ℹ info). Exit codes: 1 = error-severity findings, 2 = fetch failures.
5. Remember: the script sees the **initial HTML only** (no JS execution) — exactly what matters most for indexing. A `THIN_INITIAL_HTML` flag on a content page is a real problem, not a script limitation. First-compile dev fetches are slow; ignore timing, never judge performance from dev-server response times.

## Step 5 — Report

Structure the final report exactly like this:

1. **Verdict line first**: `✅ SEO-safe to commit` / `⚠️ Commit with caution — N warnings` / `❌ Fix before committing — N blockers`.
2. **Blockers** (if any): finding → evidence (`file:line` + crawler flag) → concrete fix.
3. **Warnings**: same shape, terse.
4. **Local vs production diff** (when compared): only the changed signals, and whether each change is intended by the diff or a regression.
5. **What was verified clean**: one short line listing the checks that passed (indexability, canonicals, metadata, structured data, …) so a clean bill of health is credible.
6. **Skipped checks**: anything you couldn't run (no dev server, no prod URL, dynamic route with no sample) — never present a partial audit as a full one.

Severity discipline: only call something a blocker if it deindexes pages, blocks crawling, 404s existing URLs, or destroys metadata/structured data. Length nits and missing OG tags are warnings/info. If the diff is SEO-clean, say so plainly — do not manufacture findings to seem useful. Do not report pre-existing site issues as regressions: if the crawler flags something the diff didn't touch (verify via `git log`/blame or the prod compare showing it unchanged), list it separately as "pre-existing, not from this change".
