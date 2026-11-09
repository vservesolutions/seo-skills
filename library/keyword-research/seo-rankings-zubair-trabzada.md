---
name: "seo-rankings"
description: "On-demand rank checking via the DataForSEO SERP API. Looks up live Google organic positions for a domain across an arbitrary list of keywords. Reports each as winning / page-1 / close / not-ranking with one prioritized next action per keyword."
summary: "Checks live Google organic keyword positions on demand using the DataForSEO SERP API."
category: "keyword-research"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "zubair-trabzada/dataforseo-claude"
repo_url: "https://github.com/zubair-trabzada/dataforseo-claude"
source: "https://github.com/zubair-trabzada/dataforseo-claude/blob/HEAD/skills/seo-rankings/SKILL.md"
raw_source: "https://raw.githubusercontent.com/zubair-trabzada/dataforseo-claude/HEAD/skills/seo-rankings/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 175
collected: "2026-11-09"
---

<!-- Claude Code skill · zubair-trabzada/dataforseo-claude · skills/seo-rankings/SKILL.md · MIT
     Source: https://github.com/zubair-trabzada/dataforseo-claude/blob/HEAD/skills/seo-rankings/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

## Phase 0: Credential Preflight (REQUIRED — run BEFORE anything else)

Before running any of the steps below, **always** invoke the shared preflight check:

```bash
~/.claude/skills/seo/scripts/preflight.sh
```

**If exit code is 0:** credentials are configured — proceed with the rest of this skill silently.

**If exit code is 2:** the script prints the DataForSEO setup wizard to stdout. STOP, display that wizard to the user verbatim, and **wait for them to paste credentials** in this format:

```
login: their_email@example.com
password: their_api_password_here
```

When they reply:

1. Parse `login:` and `password:` from their message.
2. Write them to `~/.claude/skills/seo/.env`:
   ```
   DATAFORSEO_LOGIN=<login>
   DATAFORSEO_PASSWORD=<password>
   ```
3. `chmod 600 ~/.claude/skills/seo/.env`
4. Run a verification call: `~/.claude/skills/seo/scripts/keyword_research.py volume "test"`
5. If verification succeeds (real JSON returned): tell the user "✅ Credentials verified. Running your command now..." and proceed with the original request.
6. If status `40104 — Please verify your account`: tell the user to verify their account at https://app.dataforseo.com/, then say "continue" to retry.
7. If any other auth error: ask them to double-check the API password (the long alphanumeric string from https://app.dataforseo.com/api-access — not their account login password).

**Never** echo credentials back to the user, never include them in tool output, and never commit them.

---

# SEO Rank Checker Skill

> **Powered by:** [DataForSEO API](https://dataforseo.com) — SERP `google/organic/live/advanced` + Keywords Data `google_ads/search_volume` for traffic context.
> **Cost:** ~$0.002 per keyword checked.

## Run

```bash
~/.claude/skills/seo/scripts/serp_check.py rank --domain <domain> --keywords kw1 kw2 kw3 ...
```

Optional: `--location "United States"`, `--language en`, `--device desktop|mobile`, `--depth 100`.

## Output groups

| Tier | Position | Action |
|------|----------|--------|
| 🟢 **Winning** | 1–3 | Defend — monitor weekly |
| 🟡 **Page 1** | 4–10 | Push to top 3 — internal links + on-page polish |
| 🟠 **Close** | 11–30 | Strongest leverage — re-optimize, build links |
| 🔴 **Long-haul** | 31–100 | Pivot or invest heavily |
| ⚫ **Not ranking** | none | Decide: pursue or drop |

For each keyword, also pull search volume in the same run so the user knows
which positions are worth fighting for:

```bash
~/.claude/skills/seo/scripts/keyword_research.py volume kw1 kw2 kw3 ...
```

## Output table

```
Keyword              | Pos | Volume | URL                          | Action
---------------------|-----|--------|------------------------------|--------
seo audit tool       | 8   | 1,200  | /tools/seo-audit             | Push to top 3
keyword research     | 24  | 8,800  | /blog/keyword-research-guide | Re-optimize + build links
ai seo               | —   | 3,400  | (not ranking)                | Decide: write new piece?
```

End with the **single highest-leverage action** across all keywords.
