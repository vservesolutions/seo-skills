# SEO Skills

A self-updating SEO knowledge base. It reads a curated set of SEO sources every day, extracts
the useful parts, sorts them into topics, and regenerates a library of agent-ready
`SKILL.md` files plus a local dashboard.

No API keys, no third-party services, no runtime dependencies — just Node 20+. An optional model
pass (`npm run enrich`) can add summaries and an SEO audit; it is off unless you supply a key.

```
feeds  →  full-text extraction  →  dedupe  →  findings.jsonl  →  skills/*/SKILL.md
                                                        ↘  site/index.html
```

## Quick start

```bash
npm run update      # first collection run
npm run skills      # list what was generated
npm run serve       # dashboard at http://127.0.0.1:4321
```

The first run ingests the newest items from every enabled source. Later runs only fetch what
changed (ETag / Last-Modified) and only fetch article pages for genuinely new items, so a daily
run costs a handful of requests.

## Using the skills

Agents load skills lazily: they see each skill's name and description at startup and read the full
`SKILL.md` only when a task matches. Install the 34 generated skills wholesale — that is ~740
tokens of metadata — and add library skills only as needed (the 1,000-plus collected skills would cost
~107,000 tokens and their names collide).

```bash
# project-level (recommended: pins a version per repo)
mkdir -p .claude/skills && cp -r skills/*/ .claude/skills/

# personal
mkdir -p ~/.claude/skills && cp -r skills/*/ ~/.claude/skills/
```

Claude Code reads `.claude/skills/`, Codex `.agents/skills/`, Cursor `.cursor/skills/` — and both
Codex and Cursor also read `.claude/skills/`. Restart the agent, then either describe the task or
invoke a skill by name (`/seo-schema-markup`).

The full guide — cherry-picking a library skill, fixing name collisions, choosing between
overlapping skills, updating an install, troubleshooting — is **[USING-SKILLS.md](USING-SKILLS.md)**.
Share that file with teammates instead of explaining it again.

## How it works

1. **Collect** — each source in `config/sources.json` is fetched with conditional GET. A `304`
   skips it entirely; feed parsing handles RSS 2.0, Atom and RDF.
2. **Extract** — up to `maxFulltextPerRun` new articles are fetched and reduced to readable text
   (scripts, nav, cookie banners and other boilerplate removed). Everything else uses the feed
   content, which many SEO blogs publish in full.
3. **Classify** — keyword-weighted scoring against the taxonomy in `config/topics.json` (16 categories plus focused sub-skills), plus
   content-type detection (news, guide, research, discussion, release).
4. **Summarize** — extractive only: sentences are ranked by term frequency, SEO vocabulary
   density, title overlap and position; actionable sentences become candidate practices.
5. **Store** — one JSON line per finding in `data/findings.jsonl`, deduplicated by canonical URL
   and content hash. Re-publishing an article updates it instead of duplicating it.
6. **Render** — `skills/<topic>/SKILL.md` per topic, `skills/INDEX.md`, machine-readable
   `skills/index.json`, and the dashboard at `site/index.html`.

Skills are regenerated from the knowledge base, never appended to blindly — so rendering is
idempotent and you can safely re-run `npm run build` after editing the data.

## Commands

| Command | What it does |
| --- | --- |
| `npm run update` | Full pass: fetch, extract, classify, store, render |
| `npm run build` | Re-render skills + dashboard from the existing knowledge base |
| `npm run status` | Last run, source health, recent run history |
| `npm run skills` | List generated skills and their evidence counts |
| `npm run search -- "hreflang"` | Search collected findings |
| `npm run library` | List collected third-party SEO agent skills by category |
| `npm run collect` | Refresh the third-party skill library from published packs |
| `npm run health` | Check packs for archived, deleted or stale repositories |
| `npm run enrich` | Optional model pass: summaries + SEO audit of stored skills |
| `npm run doctor` | Check that every configured source still responds and parses |
| `npm run serve` | Serve the dashboard on loopback |
| `npm run test` | Run the test suite |

Useful `update` flags:

```bash
node src/cli.js update --only google-search-central --max-fulltext 3
node src/cli.js update --no-fulltext        # feed summaries only, fastest
node src/cli.js update --full               # ignore HTTP caches
node src/cli.js update --dry-run            # collect and report, write nothing
```

## Running it in the cloud (no machine required)

`.github/workflows/update.yml` runs the whole pipeline on GitHub's runners every three hours and
commits the result, so skills keep updating while your computer is off. It needs no server,
database or paid plan.

1. Push this folder to a GitHub repository (public or private).
2. Open **Actions → Refresh SEO skills → Run workflow** once. Scheduled runs start from then on.
3. Optional: edit the `cron:` line for a different cadence — `7 * * * *` is hourly, `17 */3 * * *`
   is every three hours. Feed sources publish daily, so hourly is near-real-time in practice.
4. Optional: **Settings → Pages → Source: GitHub Actions** publishes the dashboard at
   `https://<user>.github.io/<repo>/` after each refresh, viewable from any device.

Each run: runs the test suite, refreshes articles and the skill library, then commits
`data/findings.jsonl`, `data/library.jsonl`, `skills/`, `library/` and `site/`. HTTP caches and the
library's pack-rotation state live in the Actions cache, so they survive between runs without being
committed. The job summary shows the skill table for that run.

Notes:

- `secrets.GITHUB_TOKEN` is used for API calls, raising the limit from 60 to 1,000 requests/hour, and
  to push the commit. No personal token is needed.
- Private repositories get 2,000 free Actions minutes a month; a 3-hourly run uses roughly 600–700.
  Public repositories are unmetered.
- GitHub disables scheduled workflows after 60 days without repository activity — the bot's own
  commits count as activity, so this only matters if the workflow starts failing.
- The committed `site/index.html` is a self-contained dashboard; open it in the repo or serve it from
  any static host. `library/` holds the third-party skills as plain markdown.

## Local scheduling

The tool does not need a daemon, but it needs something to wake it up on your own machine.

**Windows (recommended)** — registers a Task Scheduler job that runs `update-daily.cmd` and
appends output to `data/update.log`:

```bash
node src/cli.js schedule install --time 06:30
node src/cli.js schedule show
node src/cli.js schedule remove
```

**macOS / Linux** — add the printed line to your crontab:

```bash
node src/cli.js schedule show
# 30 6 * * * cd "/path/to/SEO-SKILLS" && node src/cli.js update >> data/update.log 2>&1
```

**Any platform** — a foreground loop that runs at the same local time every day:

```bash
node src/cli.js schedule loop --time 06:30
```

## Configuration

### `config/sources.json`

```json
{
  "id": "google-search-central",
  "name": "Google Search Central Blog",
  "url": "https://developers.google.com/search/blog/feed.xml",
  "trust": 5,
  "enabled": true,
  "perSourceLimit": 10
}
```

- `trust` (1–5) weights a source when ranking practices and confidence.
- `perSourceLimit` caps new items per run for that source.
- `fulltext: false` keeps a source to feed content only.
- `enabled: false` parks a source (Search Engine Land ships disabled — it returns 403 to bots).

Global settings live under `settings`: `perSourceLimit`, `maxFulltextPerRun`, `fulltext`,
`respectRobots`, `delayMs`, `timeoutMs`, `dropAfterDays`, `minTextLength`, `shortsMinTextLength`.

### YouTube sources

Video channels use the same source entry with a `type: "youtube"` marker and a channel feed —
YouTube publishes Atom feeds with no API key:

```json
{
  "id": "youtube-searchenginejournal",
  "name": "Search Engine Journal (YouTube)",
  "url": "https://www.youtube.com/feeds/videos.xml?channel_id=UCHNGYLRYGKBZ9nv9zp7PoSw",
  "type": "youtube",
  "trust": 3,
  "perSourceLimit": 4,
  "fulltext": false,
  "enabled": true
}
```

- Enabled channels: Google Search Central, Search Engine Journal, Ahrefs, Semrush, Moz, Yoast,
  Backlinko, Neil Patel, Surfer Academy, SE Ranking and Authority Hacker.
- **No transcripts.** YouTube gates caption tracks behind a proof-of-origin token, so a video
  contributes its title plus description only. Channels that post terse descriptions (Ahrefs often
  writes a hashtag) yield few findings; channels with written summaries (Moz, Backlinko, SE
  Ranking, Google Search Central) yield most of them.
- Shorts are kept only when the description is written out like a summary — `shortsMinTextLength`
  (300 characters) in `settings` is the cutoff. Most Shorts are a caption plus hashtags and are
  skipped; the long ones are often as substantive as a blog post (1,000+ character descriptions on
  schema, AI Mode citations and GEO).
- Videos that match no topic are dropped: a title alone is not enough to attach a practice to a skill.
- Keep `fulltext: false`: there is no article page to fetch, so this avoids a wasted request.
- Find a channel id by opening the channel and reading the `channelId` in the page, or by searching
  YouTube with the channel filter; the feed URL is `videos.xml?channel_id=<id>`.

### `config/topics.json`

Each topic defines the skill's identity: `id`, `title`, `description`, `whenToUse`, and the
`keywords` used for classification. Multi-word keywords weigh double, title hits weigh 3×.
Add a topic and the next run creates its skill directory automatically.

## Generated skills

One file is written per skill in `config/topics.json`: 16 category skills plus any focused sub-skill
(for example `crawl-budget`, `ai-overviews`, `hreflang`, `search-console`) that has at least one
finding. A category aggregates every finding in its area, so editing a description or adding a
sub-skill changes the output on the next `npm run build` — findings are reclassified against the
current taxonomy without refetching anything.

`skills/<topic>/SKILL.md` is a normal agent skill: YAML frontmatter plus prose.

```markdown
---
name: seo-technical-crawling-indexing
description: "How search engines discover, crawl... Auto-generated from 37 findings across 9 sources."
last_updated: 2026-11-04
findings: 37
sources: 9
confidence: high
---
```

Sections: **When to use**, **Core practices** (numbered, attributed to source and date),
**Pitfalls to avoid**, **Recent developments**, **References**, and **How this skill stays current**.

Practices only come from substantive articles (250+ words) of the topic's primary classification.
Changelogs, forum questions and short recap blurbs inform the news sections but never become
practices — that keeps the advice list usable.

## Skill library

Articles are what search engines published. The library is what people published *for agents* —
`SKILL.md` packs for Claude Code, Codex, Cursor, OpenClaw and the rest.

```bash
npm run collect                                  # scan packs, refresh library/
node src/cli.js library                          # browse by category
node src/cli.js library --category ai-search-geo
node src/cli.js library --platform codex
node src/cli.js collect --max-repos 20 --skills-per-repo 12
node src/cli.js collect --reindex               # recompute platforms/provenance, no network
node src/cli.js library --verbose               # platform + exact source URL per skill
node src/cli.js library --all-versions          # every copy, not just the best per name
node src/cli.js health                          # check packs for dead or abandoned repos
```

Discovery uses curated indexes (`config/skill-library.json` → `lists`) plus GitHub repository
search, so new packs appear without editing config. Each pack's `SKILL.md` files are fetched,
parsed for `name` and `description`, and filed into the same 16-category taxonomy as the knowledge
base — by skill name first, then by keyword classification. Skills from broad marketing packs that
are not about search (A/B testing, ad creative) are dropped: a skill needs either a confident topic
match or an SEO-shaped name.

**One card per skill.** The same skill gets republished by many packs — `seo-audit` appears in 46
of them, `programmatic-seo` in 22. That is 1,510 copies of 920 distinct skills. The library groups
copies by name, shows the best copy (full text first, then stars, then most recently pushed) and
lists the rest inside its card, so the dashboard reads as 920 skills instead of 1,510 duplicates.
Nothing is dropped: `library/index.json` keeps every version, with `group`, `groupSize` and
`isPrimary` fields, and `--all-versions` lists them all.

**Pack health.** `npm run health` asks GitHub whether each repository still exists, is archived,
and when it last received a push. Skills from deleted or archived packs are hidden from the
rendered library — never deleted from `data/library.jsonl`, so a repository that comes back is
restored on the next run — and a pack with no push in 18 months is badged "stale". The scheduled
refresh checks 80 packs every three hours, which covers the whole library within a day, and results
live in `data/repo-health.json`.

**Licensing.** Full text is copied only from permissive licences (MIT, Apache-2.0, BSD, ISC, CC0,
CC-BY, Unlicense). Packs without a licence are catalogued with name, description and a link, and
their text is never stored. Every copied skill carries its repo, source URL and licence in the
frontmatter, plus an attribution comment at the top.

**Provenance.** Every skill records where it came from and which agent it belongs to:

| Field | Meaning |
| --- | --- |
| `platforms` | Agents the skill belongs to — `Claude Code`, `Codex`, `Cursor`, `OpenClaw`, `Gemini CLI`, … |
| `platform_source` | `declared` (the pack's listing), `detected` (markers inside the skill), `declared+detected`, `none` |
| `repo` / `repo_url` | Pack it was taken from, linked |
| `path` | Exact file inside the pack |
| `source` / `raw_source` / `ref` | Browsable URL, raw URL, and the git ref fetched (`HEAD`) |
| `discovered_via` | `curated list`, `GitHub search` or `config` |
| `license`, `stars`, `collected` | Redistribution terms, pack popularity, date taken |

Platform detection reads the skill itself for proof: `${CLAUDE_PLUGIN_ROOT}`, `.claude/skills`,
`allowed-tools`, `user-invocable`, `.codex/`, `AGENTS.md`, `.cursor/rules`, `.cursorrules`,
`gemini cli`, `.windsurf`, `copilot-instructions.md`, `antigravity`. A detected platform overrides a
vague "any agent" claim; declared support is kept separately. Inspect it with
`node src/cli.js library --verbose` or `--json`, or read the frontmatter of any file in `library/`.

### Optional model pass (`npm run enrich`)

Everything above works with no credentials. If you want one-line summaries on each skill — and a
second opinion on whether the keyword filter filed it correctly — point the tool at any
OpenAI-compatible endpoint. Google's Gemini free tier is the default: it needs no credit card and
allows roughly 1,500 requests a day, which is ~30,000 skill reviews once batching is counted.

```bash
# 1. get a free key: https://aistudio.google.com/apikey
# 2. put it in .env (copy .env.example) or export SEO_LLM_KEY=…
npm run enrich -- --limit 200 --dry-run     # report only, write nothing
npm run enrich -- --limit 400              # review the next 400 unaudited skills
npm run enrich -- --all --limit 100        # re-review skills this model already saw
npm run build                              # redraw the dashboard with the new summaries
```

Google retires model ids for new keys, so `SEO_LLM_MODEL` is configurable: pin the current
`gemini-3.5-flash-lite`, or set `gemini-flash-lite-latest` to follow upgrades automatically. Any
provider works by changing two variables — for example Groq's free tier:

```bash
SEO_LLM_BASE=https://api.groq.com/openai/v1
SEO_LLM_MODEL=openai/gpt-oss-120b
```

What it does and does not do:

- Writes `summary` onto each reviewed skill (used on the dashboard, in `library/INDEX.md` and in
  each copied file's frontmatter), and keeps its verdict alongside the record in `data/library.jsonl`.
- Never adds, renames or deletes a skill. A verdict disagreeing with the keyword filter is written to
  `data/llm-audit.json` for review, so the filter can be tuned against measured evidence.
- Caches every verdict in `data/llm-cache.json`, keyed by skill text and model. Re-runs only pay for
  skills that are new or changed upstream, which is what keeps a free daily quota sufficient.
- Fails soft: no key, a bad key, a rate limit or malformed output leaves the library untouched and
  the exit status still tells you what happened. `SEO_LLM_MAX` (default 400) caps skills per run,
  `SEO_LLM_BATCH` (default 20) sets skills per request, and `SEO_LLM_DELAY` (default 1,200 ms) paces
  requests to stay inside a free tier's per-minute limit.

In CI, add the key once under Settings → Secrets and variables → Actions as `SEO_LLM_KEY`, then run
the **Model audit (optional)** workflow from the Actions tab. Optionally set the repository
variables `SEO_LLM_BASE` and `SEO_LLM_MODEL`. It skips itself with a notice when the secret is
absent, and it does not run on a schedule, so quota is only spent when you ask for it.

**Rate limits.** GitHub's anonymous API allows about 60 calls an hour, so a run scans ~18 packs and
revisits them after `rescanDays` (7). Put `GITHUB_TOKEN=…` in `.env` to raise that to 5,000/hour and
scan far more packs per run.

## Files

```
config/sources.json      curated source registry
config/skill-library.json  skill packs, discovery lists, scan limits
config/topics.json       SEO taxonomy used for classification
src/cli.js               command entry point
src/lib/http.js          fetch with retries, timeouts, conditional GET
src/lib/xml.js           dependency-free XML parser
src/lib/feed.js          RSS / Atom / RDF normalization
src/lib/html.js          metadata + article text extraction
src/lib/robots.js        robots.txt check before full-text fetches
src/lib/classify.js      topic + content-type classification
src/lib/summarize.js     extractive summary and practice extraction
src/lib/kb.js            knowledge base merge, dedupe, retention
src/lib/render.js        SKILL.md / INDEX.md / dashboard rendering
src/lib/skill-library.js third-party skill discovery, parsing, categorisation
src/lib/llm.js          optional model pass: summaries, SEO audit, verdict cache
src/lib/update.js        the pipeline
src/lib/scheduler.js     Task Scheduler, cron output, loop mode
data/findings.jsonl      the knowledge base (commit this if you want history)
data/state.json          HTTP cache metadata and run counters (local)
data/runs/               per-run JSON reports (last 60)
data/library.jsonl       catalogued third-party skills
data/llm-cache.json      model verdicts, reused across runs (commit to save quota)
data/llm-audit.json      disagreements from the last model run (local, for review)
skills/                  generated skills (commit these)
library/                 third-party skills by category + INDEX.md
site/index.html          generated dashboard
```

## Politeness

- One request at a time with a configurable delay (default 700 ms) between article fetches.
- `robots.txt` is checked per host before any article fetch; disallowed URLs fall back to feed
  content.
- Feeds use conditional requests, so unchanged sources cost nothing.
- Article fetches are capped per run, and the response size is capped per request.
- The user agent identifies the tool and is configurable in `config/sources.json`.

## Limitations

- Extraction is deterministic and extractive. It does not reason about what it reads, so a
  well-written article yields sharper practices than a thin one. No model is involved unless you
  opt in with `npm run enrich` and a key; even then it only annotates, never rewrites, skills.
- Very new topics will have empty skills until sources publish substantive articles. Empty skills
  say so explicitly rather than inventing advice.
- Sites that block non-browser clients (for example Search Engine Land) are skipped; keep
  alternative sources enabled, or add feeds you trust to `config/sources.json`.
- Feed retention is capped at `dropAfterDays` (default three years) so the knowledge base stays
  bounded.
- Library categorisation is name-led and heuristic. A pack that names its skills vaguely ("audit",
  "optimizer") can land in a neighbouring category; adjust `CATEGORY_HINTS` in
  `src/lib/skill-library.js` and re-run `npm run collect`.
- Without `GITHUB_TOKEN`, discovery is rate limited to roughly 18 packs per hour.
