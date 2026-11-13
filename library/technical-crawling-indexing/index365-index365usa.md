---
name: "index365"
description: "Use when the user mentions index365, has an i365_ API key, or wants to audit a website for how well it performs across SEO, Content, AEO (Answer Engine Optimization), Analytics and Tracking, Conversion, and Trust and Proof. Triggers: \"audit my site\", \"check my AI visibility\", \"run an index365 audit\", \"what's my score\", \"how does my site score\", \"fix what index365 found\", or a pasted finding / \"copy fix prompt for your agent\" button. This is the router: it picks the right index365 sub-skill. Do NOT trigger for unrelated SEO tools, generic web scraping, or local-file tasks."
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "detected"
repo: "index365usa/agent-skills"
repo_url: "https://github.com/index365usa/agent-skills"
source: "https://github.com/index365usa/agent-skills/blob/HEAD/skills/index365/SKILL.md"
raw_source: "https://raw.githubusercontent.com/index365usa/agent-skills/HEAD/skills/index365/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Claude Code skill · index365usa/agent-skills · skills/index365/SKILL.md · MIT
     Source: https://github.com/index365usa/agent-skills/blob/HEAD/skills/index365/SKILL.md
     Detected by: detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# index365

[index365](https://index365.co) scans a website and returns a score plus findings
with stable IDs, evidence, and machine-readable remediation. Everything the dashboard
does is also available to your agent over the public `/api/v1`, wrapped by the
`@index365/cli` and `@index365/mcp` packages. These skills wrap the CLI; the CLI wraps
the API. The API holds all the logic, so the skills stay thin and never go stale.

## No command needs an id

Every read defaults to your latest completed run and echoes back what it resolved.
`index365 findings`, `index365 report`, and `index365 check` work with no arguments;
a domain narrows any of them to that site. `index365 scan yoursite.com` resolves the
project from the domain and offers to create it on a new domain (one [Y/n] question;
`--yes` answers it for scripts). Never ask the user for a run id or project id, and
never tell the user to note one for later.

## One product, six categories

**Marketing Signal** is the product. `index365 scan yoursite.com` runs it; there is
nothing else to choose. Each scan spends one Page Check and returns a 0-100 score
with a band, a coverage line, and findings.

| Category | Answers |
| --- | --- |
| **SEO** | Can search engines reach this page, read it, and show it correctly? |
| **Content** | Does the writing answer the visitor's question clearly? |
| **AEO** (Answer Engine Optimization) | Can AI assistants reach this page, extract it, and cite it? |
| **Analytics and Tracking** | Is measurement installed correctly, once, and with consent handled? |
| **Conversion** | Is the next step obvious, and does it match what this business sells? |
| **Trust and Proof** | Does the page earn belief, and does the connection hold up? |

Bands are **Weak** 0-30, **Fair** 31-70, **Good** 71-90, **Excellent** 91-100.
Check states are Passed, Needs attention, Critical, Opportunity, and Not applicable.

Findings carry a stable `findingId`, `severity`, `marketingCategory` (`{ key, label }`,
one of the six above), `affectedUrls`, human `remediation`, and machine-readable
`agentActions`. `index365 findings get 1` reads the first finding in full and prints
a copy-pasteable fix prompt.

Two field notes that will otherwise mislead you: `category` is a shared closed
taxonomy that has no Marketing Signal values, so it reads `general` on Marketing
Signal findings. Group by `marketingCategory`. And `stage` appears only on legacy
runs completed before the category model; it is never on a new run.

## The ladder (route to the sub-skill)

| The user wants to… | Skill |
| --- | --- |
| First-time setup, a 401, "connect index365", exit code 3 | **index365-setup** |
| Add a site / "start auditing yoursite.com" | **index365-add-project** |
| Run or re-run a scan | **index365-run-audit** |
| See the score / read findings / "what's wrong" | **index365-read-report** |
| Prioritize / "what do I fix first" | **index365-triage-findings** |
| Fix one finding (a pasted `findingId`, the copy-prompt button) | **index365-apply-fix** |
| "Fix my site", audit AND fix the whole thing | **index365-audit-and-fix** (flagship) |
| Re-check the score after a change | **index365-run-audit** then **index365-read-report** |
| Remove a project | **index365-delete-project** (archives, reversible, confirms first) |

## Trust exit codes, not pre-flight checks

Do not run `doctor` before commands. Run the command: `0` is success, and every
non-zero error explains itself and carries a `next:` line with the exact command to
run. Exit codes: `0` ok, `1` error, `2` usage, `3` auth, `4` not found, `5`
quota/conflict/rate. On exit `3`, go to **index365-setup**.

## Output discipline

Add `--json` to any command for machine-readable output; run-scoped responses carry
a `resolved` block naming the run they resolved to. `index365 report --save` writes
the full report (context plus every finding) into the git-ignored `.index365/` dir
by default. Read saved reports with `jq` / `grep` / `head`; never paste a whole
report into context.

## Single calls don't need a skill

`index365 results`, `index365 check`, `index365 projects list`, and
`index365 findings get 1` are single commands with no added judgment, just run them.
Skills exist for the steps that need judgment (which audit, what to fix first,
applying a fix safely).
