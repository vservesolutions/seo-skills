---
name: "client-state"
description: "Business profile capture and persistent state across sessions. Load this FIRST when local SEO work begins for a business with no existing state file — it runs a short intake, then every later session reads the file instead of re-asking. Also use when the user says \"remember my business\", \"here's my business info\", \"where did we leave off\", \"what did we do last time\", or refers to prior work. Maintains a lean index plus dated output files, and exactly one explicit next action. 中文触发：记住我的生意、我的商家信息、上次做到哪了、之前弄的那个、继续上次的、 建档、客户档案。 Client state is local to the user's machine and is never transmitted…"
category: "local-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "tech383/local-seo-kit"
repo_url: "https://github.com/tech383/local-seo-kit"
source: "https://github.com/tech383/local-seo-kit/blob/HEAD/skills/client-state/SKILL.md"
raw_source: "https://raw.githubusercontent.com/tech383/local-seo-kit/HEAD/skills/client-state/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Unspecified skill · tech383/local-seo-kit · skills/client-state/SKILL.md · MIT
     Source: https://github.com/tech383/local-seo-kit/blob/HEAD/skills/client-state/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Client state

Tier 0 — plain files on the user's own machine. Nothing leaves.

## When to use

**Use**
- First contact with a business — run intake before any analysis
- Resuming work: "where were we", "what did we find last time"
- Recording the outcome of a session
- Managing several businesses or locations

**Don't use**
- The user asks a general question with no specific business attached — answer it, don't open a file
- One-off questions where persistence adds nothing

## Required input

**First run**: nothing. This skill collects it.

**Later runs**: which business, if more than one exists.

**If missing**: no state file for a business under discussion → run first-run detection below.

## Steps

### 1. First-run detection

**Whenever a specific business comes up, check `state/` for a matching file first.**

Found → read it, continue from `## Next action`.
Not found → **pause the user's request** and run intake. Then return to what they originally asked, saying so: "Right — now, back to {original request}."

### 2. Intake — one question at a time

**Ask one, wait, write it down, ask the next.** Never dump the whole form. People abandon forms; they answer questions.

Five questions, in this order:

1. **What's the business, and where?** (name, city)
2. **Do customers come to you, or do you go to them?** (determines everything downstream — physical / service-area / hybrid)
3. **What do you most want to be found for?** (2-3 services)
4. **Who's beating you in the local pack right now?** (2-3 competitors, links if handy)
5. **What's the single biggest problem right now?** (one sentence, honest)

**Then stop asking.** Everything else can be gathered when a skill actually needs it. A long intake up front feels like paperwork and produces worse answers than asking at the moment of need.

### 3. Create the state file

From `state/_templates/business.brief.md`. Fill only what's known; leave the rest.

Multi-location businesses use `state/_templates/brand.brief.md` for shared settings, with one business file per location.

### 4. Reading state in later sessions

Read the file. Two things matter most:

- `## Findings` — what's already known, so you don't re-diagnose
- `## Next action` — where to pick up

**Don't re-ask what's in the file.** Re-asking is the single most visible sign that persistence isn't working.

### 5. Writing state at the end of a session

Update four places:

| Section | What goes in |
|---|---|
| `## Session log` | One line: `[date] {what ran} → {headline finding} → see {output file}` |
| `## Findings` | New findings, filed under Critical / Important / Watch |
| `## Deliverables` | Any file produced |
| `## Next action` | **Overwrite with exactly one thing** |

### 6. The two structural rules

**State is an index; detail lives in output files.**
The state file stays short enough to read in full at the start of every session. Analysis detail goes in `state/{business}/outputs/{YYYY-MM-DD}-{skill}.md`. A state file that grows without limit stops being read, and then the whole mechanism is dead weight.

**Never delete an output file.**
Archive into a subfolder if a directory gets unwieldy. The history is the asset — it's how you show a client what changed over six months, and how you notice that something you fixed has come back.

## Hard gates

1. **Never write client state anywhere outside the user's local `state/` directory.** It is not sent to the knowledge base, not logged, not included in any telemetry
2. **Never commit state files to version control** — `.gitignore` excludes them and CI enforces it, but the skill must not work around that
3. **Never let more than one item sit in `## Next action`** — see below
4. **Never invent an answer the user didn't give.** Blank fields stay blank; an assumed answer that later turns out wrong is worse than a gap
5. **Never carry findings from one business into another.** Each file is isolated

## Why one next action

A twelve-item to-do list gives the user no way to start and gives the agent no way to judge priority when it resumes. Forcing exactly one item forces the trade-off to actually be made — which is the useful part.

## Output

Per `specs/output-schema.md`.

**Bad**

> I've saved your business information. Let me know if you need anything else.

Says nothing about what was captured or what happens next.

**Good**

> Got it — filed under `state/example-plumbing/`. Service-area business, three cities, going after emergency drain work.
>
> You said the biggest problem is not showing up in the pack outside your home city. That's worth being straight about: **city pages won't fix that one** — the pack is driven by proximity. What they will fix is the organic result underneath it, which is where a lot of that traffic actually converts.
>
> Next action: audit your GBP categories. It's the fastest-moving thing available and it takes about fifteen minutes.

## Knowledge base

Not applicable — this skill holds no domain facts. It carries no evidence-tagged claims of its own beyond the note below.

`[E3]` Persisting business context between sessions avoids repeated intake and produces more consistent recommendations (workflow design practice; no controlled experiment applies).

## Handoff

| Situation | Next | Skill |
|---|---|---|
| Intake complete, nothing audited yet | Start with categories | `gbp-optimize` |
| Business info inconsistent across platforms | Citation audit | `nap-citations` |
| Wants a full programme, not one task | 12-week playbook | `local-seo` |
| A reporting period has closed | Monthly report | `local-reporting` |
| Resuming with a stated next action | Whatever that action names | — |
