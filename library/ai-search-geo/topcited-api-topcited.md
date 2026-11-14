---
name: "topcited-api"
description: "Drive a TopCited account with the `topcited` CLI — brands, competitors, AI-visibility monitoring, site audits, keyword/prompt/content recommendations, reports, usage — with `topcited api` as the raw escape hatch to the TopCited API. Use whenever the task involves reading or changing data in a TopCited account, or measuring a brand's visibility in search engines and AI assistants."
summary: "Monitors brand visibility in search engines and AI assistants using the TopCited API."
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "TopCited/topcited-skills"
repo_url: "https://github.com/TopCited/topcited-skills"
source: "https://github.com/TopCited/topcited-skills/blob/HEAD/skills/topcited-api/SKILL.md"
raw_source: "https://raw.githubusercontent.com/TopCited/topcited-skills/HEAD/skills/topcited-api/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 10
collected: "2026-11-14"
---

<!-- Claude Code skill · TopCited/topcited-skills · skills/topcited-api/SKILL.md · MIT
     Source: https://github.com/TopCited/topcited-skills/blob/HEAD/skills/topcited-api/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# TopCited CLI

TopCited measures and improves how visible a brand is in search engines (SEO) and
in AI assistants like ChatGPT, Claude, Gemini and Perplexity (GEO). The `topcited`
CLI is how an agent drives it: task-level verbs for the common work, JSON output,
stable exit codes, and `topcited api` for everything else.

## Install

```bash
curl -fsSL https://topcited.ai/install.sh | sh   # Linux/macOS → ~/.local/bin, SHA-256 verified
```

On Windows: `irm https://topcited.ai/install.ps1 | iex`. Check with
`topcited --version`; `topcited doctor` diagnoses config, sign-in, connectivity
and CLI/API version skew; `topcited upgrade` updates in place.

## Sign in

```bash
topcited auth login     # prints a URL + code; the user approves in the browser
topcited auth status    # who you are, plan, key expiry — exit 3 if not signed in
```

- **No live terminal** (most agent shells): `topcited auth login --no-wait`
  prints the URL and code and exits; show both to the user, and after they
  approve run `topcited auth login --continue`.
- **Headless / CI**: set `TOPCITED_API_KEY` (it overrides the stored key), or
  `echo "$KEY" | topcited auth login --with-token`. Keys are created in the app
  under **Settings → Profile → API keys**.
- Approval issues an ordinary API key named `topcited-cli on <hostname>`. It
  acts as the user with full rights over the account, **expires after 90 days**
  (the CLI warns when fewer than 14 remain), and counts toward the cap of 5
  active keys. Details in [references/auth-and-usage.md](references/auth-and-usage.md).

**Always run `topcited auth status` before real work** — a missing, expired or
revoked key fails every later command, and you want to find that out before the
user has invested time.

## Cheat-sheet

| I want to… | Command |
|---|---|
| See plan and T-coin balance | `topcited usage` |
| List brands / pick one | `topcited brand list` · `topcited brand use <name>` |
| List / create query sets (Topics) | `topcited monitor sets list` · `topcited monitor sets create <name> -p chatgpt -p gemini -q "<prompt>"` |
| Add prompts to a set | `topcited monitor queries add <set> "<prompt>" …` |
| Estimate, then run a set | `topcited monitor run <set> --dry-run` → `topcited monitor run <set> --wait --yes` |
| Visibility, gaps, share of voice | `topcited monitor results [--set <set>] [--since YYYY-MM-DD]` |
| Audit a site | `topcited audit run <url> --dry-run` → `topcited audit run <url> --wait --yes` → `topcited audit show <run>` |
| Recommendations | `topcited recommend keywords\|prompts\|content --wait --yes` · `--list` for the latest |
| Competitors | `topcited competitors list` · `topcited competitors add <name> -w <site>` |
| Report | `topcited report generate --wait --yes` → `topcited report download <id> --format pdf` |
| Resume any wait | `topcited wait <job>` |
| Anything else | `topcited api <path> [-X METHOD] [-d json] [-f k=v]` |

Every command's `--help` has a runnable example; read it before first use.

## The contract for agents

- **Output**: stdout is JSON whenever it isn't a terminal (or with `--json`).
  On failure, the **last** line of stderr is `{"code","message","hint","status"}`
  — read `hint` for the next step. Earlier stderr lines are warnings.
- **Exit codes**:

  | Code | Meaning | What to do |
  |---|---|---|
  | 0 | OK | — |
  | 1 | Error (incl. a failed job, or `cancelled`) | read `message`/`hint` |
  | 2 | Usage | fix the command line; check `--help` |
  | 3 | Auth — missing, expired or revoked key | `topcited auth login` / ask the user for a key |
  | 4 | Payment or quota (HTTP 402) | stop; see rule 2 below |
  | 5 | Not found | re-list to refresh ids/names |
  | 6 | Conflict (HTTP 409) | read `hint` (e.g. the 5-key cap) |
  | 7 | `--wait` timed out — the job is **still running** | `topcited wait <job>` |

- **Waiting**: `--wait` polls with backoff until the job ends (`--timeout`,
  default 1200 s). Without `--wait`, async commands print a `job` reference
  (e.g. `monitor:<set>:<batch>:<runs>`, `report:<id>`) that `topcited wait <job>`
  resumes. A monitoring batch where only some runs failed is `partial` with
  exit 0 — it still produced data.
- **Spending**: commands that spend T-coins take `--dry-run` (prints the
  estimate — `{dry_run, estimate_tcoins, available_tcoins, exceeds}` — and
  exits 0 without spending or creating anything) and `--yes`. **Without a
  terminal the CLI never prompts — it just proceeds and spends.** So always
  `--dry-run` first, tell the user the number, get an explicit yes, *then* run
  with `--yes`. Only `monitor run` has a real estimate today; for audits,
  recommendations and reports `estimate_tcoins` is `null` — quote the cost from
  the feature guide instead.
- **Brand**: commands act on the active brand — `--brand <name|id>` or
  `TOPCITED_BRAND` for one command, `topcited brand use` to store it.
  `monitor sets create` and `report generate` use the account's server-side
  active brand; if that differs, they refuse with `brand_mismatch` rather than
  create under the wrong brand (switch brands in the web app, or pass the
  `--brand` the hint names).

## Anything else: `topcited api`

```bash
topcited api /users/me
topcited api /monitoring/runs -f query_set_id=<id> -f limit=100 --paginate
topcited api -X POST /brands -d '{"name": "Acme Coffee", "website": "https://acmecoffee.com"}'
```

Like `gh api`: auth is added for you, the `/api/v1` prefix is optional, `-f`
fields are query params on GET and JSON body fields otherwise, `-F` types
`true`/`false`/numbers, `-d` takes JSON text, `@file` or `@-`, and `--paginate`
follows skip/limit pages into one array. Fields alone don't switch to POST —
pass `-X` or `-d`.

The public contract is the OpenAPI spec at
**`https://api.topcited.ai/api/v1/openapi.public.json`** (`<base-url>/api/v1/openapi.public.json`
for other environments). Operations in it are v1-stable: additive changes only,
breaking ones get 90 days of `Deprecation`/`Sunset` headers first. Operations
**not** in the spec still work through `topcited api` but carry no stability
promise; the guides below mark those *internal*. If a known command returns
"this command needs a newer CLI", run `topcited upgrade`.

## Where to read next

Read the guide for a feature *before* using it — guides carry what `--help`
can't: when and why, the credit cost, the UI deep links, and the failure modes.

| Task | Guide |
|---|---|
| Sign-in, keys, balance, what a 402 means | [references/auth-and-usage.md](references/auth-and-usage.md) |
| Create / pick the brand everything hangs off | [references/brands.md](references/brands.md) |
| Find and track competitors | [references/competitors.md](references/competitors.md) |
| Measure visibility across AI assistants over time | [references/monitoring.md](references/monitoring.md) |
| Site audits, URL analysis, GEO content optimization | [references/seo-geo-analysis.md](references/seo-geo-analysis.md) |
| AI-usage / manipulation check on a page | [references/ai-usage-detection.md](references/ai-usage-detection.md) |
| Keyword, prompt and content-sentence recommendations | [references/recommendations.md](references/recommendations.md) |
| Pillar/cluster content generation | [references/content-pillar-cluster.md](references/content-pillar-cluster.md) |
| Export a report for the user | [references/reports.md](references/reports.md) |

## Rules that apply to every command

1. **Check the balance before spending.** `topcited usage` is free. Quote a
   concrete number before anything that costs T-coins.
2. **Exit 4 (HTTP 402) means credits are exhausted.** Don't retry, don't batch
   smaller, don't reach for a different command that does the same thing.
   Explain it plainly and point the user at `{TOPCITED_UI_URL}/settings/billing`.
3. **Confirm before anything that creates, changes or costs.** Read-only
   lookups are exempt.
4. **Show your work.** After each step, give the user the matching
   `{TOPCITED_UI_URL}/...` deep link from the guide. `TOPCITED_UI_URL` defaults
   to `https://topcited.ai`; it's a separate host from the API — never derive
   one from the other. The default locale is unprefixed — don't add `/en/`.

For the judgment calls behind any of this — what to actually change on a site,
and why — use the `seo-geo` skill. For an end-to-end engagement, use the
`visibility-workflow` skill.
