# Using these SEO skills

A short guide for anyone who wants to *use* the skills in this repo, not maintain it.
Send them this file.

- **34 generated skills** — synthesized from the collected findings, refreshed every three hours.
  These are safe to install wholesale.
- **182 library skills** — third-party `SKILL.md` packs collected from GitHub. Install these one at
  a time, when a task calls for one.

Dashboard: <https://vservesolutions.github.io/seo-skills/> · Skill index: [`skills/INDEX.md`](skills/INDEX.md)

---

## 1. How skills actually load

Agents do **not** read every file. At startup they see each skill's `name` and `description`
(a few hundred tokens), and only load the full `SKILL.md` when your request matches the
description. That is why the install location matters more than the number of skills.

Rough cost of the metadata alone:

| Set | Skills | Description tokens |
| --- | ---: | ---: |
| Generated | 34 | ~740 |
| Library | 182 | ~15,200 |

So: install all 34 generated skills, and cherry-pick the library. Installing all 182 also creates
name collisions — 22 names are shared, including seven different skills called `seo-audit`.

## 2. Install the generated skills

Project-level is recommended: the skill version is pinned per repo and travels with it.

```bash
# Git Bash / macOS / Linux
mkdir -p .claude/skills
cp -r /path/to/seo-skills/skills/*/ .claude/skills/
```

```powershell
# PowerShell
New-Item -ItemType Directory -Force .claude\skills | Out-Null
Get-ChildItem C:\path\to\seo-skills\skills -Directory |
  Copy-Item -Destination .claude\skills -Recurse -Force
```

Personal (available in every project):

```bash
mkdir -p ~/.claude/skills && cp -r /path/to/seo-skills/skills/*/ ~/.claude/skills/
```

```powershell
$dest = "$env:USERPROFILE\.claude\skills"
New-Item -ItemType Directory -Force $dest | Out-Null
Get-ChildItem C:\path\to\seo-skills\skills -Directory | Copy-Item -Destination $dest -Recurse -Force
```

Each skill must end up as `<skills-dir>/<skill-name>/SKILL.md`. Restart the agent afterwards.

### Where each agent looks

| Agent | Project | Personal |
| --- | --- | --- |
| Claude Code | `.claude/skills/` | `~/.claude/skills/` |
| Codex | `.agents/skills/` | `~/.agents/skills/` |
| Cursor | `.cursor/skills/`, `.agents/skills/` | `~/.cursor/skills/` |

Cursor and Codex also read `.claude/skills/`, so installing there covers all three.

## 3. Invoking a skill

- **Implicitly** — describe the task. "Audit this page's schema markup" should select
  `seo-schema-markup`.
- **Explicitly** — Claude Code exposes each skill as a slash command built from its `name`, e.g.
  `/seo-schema-markup`. Cursor accepts `/skill-name` or `@skill-name`.
- **Check what loaded** — ask "list your skills", or open the agent's skill/command menu. If a
  skill is missing, see troubleshooting below.

## 4. Add a library skill (one at a time)

Library skills are stored as flat files under `library/<category>/<slug>.md`, and every file's
frontmatter `name` is the upstream generic name (`seo-audit`), not the unique slug. Convert the one
you want and rename it so it cannot shadow its six siblings:

```bash
slug=seo-audit-coreyhaines31
mkdir -p .claude/skills/$slug
cp library/technical-crawling-indexing/$slug.md .claude/skills/$slug/SKILL.md
sed -i "0,/^name: .*/s//name: $slug/" .claude/skills/$slug/SKILL.md
```

```powershell
$slug = 'seo-audit-coreyhaines31'
$dest = ".claude\skills\$slug"
New-Item -ItemType Directory -Force $dest | Out-Null
Copy-Item "library\technical-crawling-indexing\$slug.md" "$dest\SKILL.md" -Force
(Get-Content "$dest\SKILL.md") -replace '^name:.*', "name: $slug" | Set-Content "$dest\SKILL.md"
```

Browse before picking:

```bash
node src/cli.js library --category technical-crawling-indexing
node src/cli.js library --platform codex
```

**Two caveats.** Library copies are single files: if the upstream skill ships `scripts/` or
`references/`, they were not copied (licence or link-only), so follow the `source:` URL in the
frontmatter for the full pack. And library skills are somebody else's implementation, not a
summary — treat them as runnable workflows, not as facts.

## 5. Choosing between overlapping skills

Generated skills are layered on purpose: a sub-skill is a narrow slice of its category, and both
are built from the same findings.

1. Pick the **narrowest** skill whose "When to use" matches your task.
2. Check its `confidence` before trusting it:
   - `high` — 15+ findings from 4+ sources
   - `medium` — 5+ findings from 2+ sources
   - `low` — 1+ findings; treat as a pointer, not a reference
3. Fall back to the parent category if the sub-skill is `low` or the task spans the area.

For library skills, rank in this order: trigger match in the description → declared `platforms` →
`hasContent` (a copy, not a link) → licence → `repoUpdatedAt` → stars last (stars measure the repo,
not the skill).

## 6. Using them without installing anything

- **Point at a file**: "Read `skills/ai-search-geo/SKILL.md` and apply it to this page." Works in
  any chat agent, this one included.
- **Paste it**: generated skills are short — YAML frontmatter plus a few sections.
- **Browse for a human**: the dashboard tabs, or `skills/INDEX.md`.
- **Machine-readable**: `skills/index.json` lists every generated skill with findings, sources,
  last update and confidence; `library/index.json` does the same for the library.

## 7. Keeping an install current

GitHub refreshes the repo every three hours (`17 */3 * * *`), but an installed copy is a snapshot.
After `git pull`, re-run the copy step. Project-level installs are usually better than personal
ones precisely because each project can pin a different snapshot.

## 8. Troubleshooting

| Symptom | Cause | Fix |
| --- | --- | --- |
| Skill not listed | File is not at `<dir>/<name>/SKILL.md` | One directory per skill, file named exactly `SKILL.md` |
| Two skills collide | Same frontmatter `name` | Rename to the unique slug (section 4) |
| Skill never triggers | Description too vague, or 200+ skills installed | Install fewer skills; make the request specific |
| Agent edits nothing | It read the summary but not the file | Ask explicitly: "read the skill file first" |

## 9. What these skills are not

- Not LLM-written. Summaries are extractive and classification is keyword-weighted, so the same
  input always produces the same skill.
- No API keys or services are involved.
- Video sources contribute title + description only — YouTube captions are gated, so spoken advice
  is not captured.
- Generated skills summarize what practitioners published; they do not replace vendor documentation
  or your own testing.
