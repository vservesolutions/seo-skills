---
name: "playheads-kb-tool"
description: "Query the Playheads knowledge base (MCP) for continuously updated local SEO practices, algorithm changes and verdicts on specific claims. Use when any strategy skill needs to confirm whether a practice still holds, when local references are past their review date, or when the user asks \"what's current\", \"does this still work\", or \"what changed recently\". Falls back to the packaged reference snapshot when the knowledge base is unreachable and never blocks a workflow. Never sends client business data to the knowledge base. 中文触发：查知识库、最新做法、这条还有效吗、最近算法有什么变化、核实一下、更新了吗。"
category: "local-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "tech383/local-seo-kit"
repo_url: "https://github.com/tech383/local-seo-kit"
source: "https://github.com/tech383/local-seo-kit/blob/HEAD/skills/playheads-kb-tool/SKILL.md"
raw_source: "https://raw.githubusercontent.com/tech383/local-seo-kit/HEAD/skills/playheads-kb-tool/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Unspecified skill · tech383/local-seo-kit · skills/playheads-kb-tool/SKILL.md · MIT
     Source: https://github.com/tech383/local-seo-kit/blob/HEAD/skills/playheads-kb-tool/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Playheads knowledge base

Tier 2 — **optional enhancement**. Every Tier 0 skill works fully without it, using the reference snapshot taken at packaging time.

## When to use

**Use**
- A strategy skill is about to state an evidence-tagged fact and needs its current status
- A local `references/` file's review date is more than 3 months old
- The user asks "what's current", "does this still hold", "what changed recently"
- The situation isn't covered by local references

**Don't use**
- Local references already cover it and are within the review window → use them; don't call out for the sake of it
- Live rankings or competitor data for a client → that's a rank tracking source. **The knowledge base holds methods and verdicts, never client data**
- Offline, or the user hasn't connected the connector → take the fallback path

## Required input

**Needed**: what is being verified — the topic or the specific claim

**Connection**: the `playheads-kb` MCP connector configured (claude.ai: Settings → Connectors → Add custom connector)

**If missing**: don't error, don't block. Take the fallback path below and note the snapshot date in Limitations.

## Steps

### 1. Runtime detection

Before calling anything, check whether the `playheads-kb` tools are available.

- Available → continue
- Not available → **don't retry, don't error**. Go to step 4

### 2. Query

| Tool | Purpose |
|---|---|
| `kb_search(query, domain?, evidence_level?, status?)` | Find entries by topic. `status`: `active` \| `prohibited` \| `refuted` \| `superseded` |
| `kb_get(id)` | Full text of one entry |
| `kb_recent(domain?, since)` | What changed in a domain |
| `kb_check(claim)` | **Verify one specific claim** |

`domain`: `gbp` · `schema` · `reviews` · `landing-pages` · `citations` · `ai-search` · `algorithm-updates`

**Queries carry methods and facts only**:
- ✅ `kb_check("does EXIF geotagging on GBP photos affect rankings")`
- ✅ `kb_recent(domain="algorithm-updates", since="2026-05-01")`
- ❌ `kb_search("Smith Plumbing Toronto competitor analysis")` — contains client information

### 3. Consume the result

Entries carry the same evidence fields this kit uses: `evidence_level`, `source`, `source_date`, `last_reviewed`, `status`, `supersedes`.

`kb_check` additionally returns explicit `guidance`. **Follow it.**

> **`verdict` describes the practice the entry documents, not the claim you submitted.** A current, E1 entry can document a prohibition — "is buying links effective" returns `prohibited`, not `active`.

| Status | Handling |
|---|---|
| `prohibited` | Platform policy or regulation forbids it. **Refuse**, cite the entry's basis, offer the legitimate alternative |
| `refuted` | Goes in Myths. **Never written into a recommendation** |
| `superseded` | Use the entry named in `supersedes` |
| `active` + `E3` | Usable, but the output must say "not verified by controlled experiment" |
| `active` + `E1`/`E2` | Usable |

**When the knowledge base contradicts the local snapshot**: the knowledge base wins, **and the output must say so** — "this has changed since the packaged snapshot" — so the user knows something moved.

### 4. Fallback path

When the knowledge base is unreachable:

1. Use the local `references/` snapshot
2. Check its review date
3. Say so in Limitations:

> This run had no knowledge base connection. The conclusions below come from the packaged snapshot dated [date]. Local SEO facts move quickly; anything touching algorithm behaviour or platform policy is worth re-checking.

**Falling back is not a failure.** Status can still be `SUCCESS` with a limitations note. Only mark `PARTIAL` when the user explicitly asked for current information and it couldn't be retrieved.

## Hard gates

1. **Never send client business data.** Business name, address, phone, website, GBP link, competitor list, review text, deal figures — none of it enters a knowledge base query. Queries carry generic, method-level wording only.
   > This is the line between "referencing our own documentation" and "a data egress channel". Even where technically possible, refuse.
2. **Never let unavailability block.** No Tier 0 skill stops because the knowledge base is down.
3. **Never bypass evidence grading.** `E4` and `refuted` entries do not enter recommendations. The knowledge base is not a back door around the grading system.
4. **Never cache client-related queries to shared storage.**

## Myths

`[E4]` ❌ **The knowledge base can replace live rank data.**
It holds methods and verdicts, not one business's position for one keyword. Live rankings need a rank tracking source. Different things.

## Output

Cite knowledge base content with its provenance:

```
[E2] No positive effect in controlled testing as of 2026-06
(source: Playheads KB #kb-0412, reviewed 2026-07-15)
```

**Bad**

> According to the latest information, this practice is no longer recommended.

No level, no source, no date — asks the user to trust a black box.

**Good**

> **This one changed.** The packaged snapshot (2026-08) still recommends it, but KB #kb-0412 shows the 2026-06 controlled test found no positive effect and the status is now `refuted`. I'm going with the newer verdict; your local snapshot will pick it up on the next release.

## Handoff

| Context | Next | Skill |
|---|---|---|
| Verified a GBP practice | Back to GBP work | `gbp-optimize` |
| Verified a schema type | Back to schema | `local-schema` |
| Verified a review policy | Back to reviews | `review-response` |
| Verified a landing page criterion | Back to pages | `local-landing-pages` |
| Verified a citation platform process | Back to citations | `nap-citations` |

---

## Server-side contract

The knowledge base service must satisfy:

**Entry schema**
```json
{
  "id": "kb-0412",
  "title": "GBP photo EXIF geotagging and local rankings",
  "title_zh": "GBP 照片 EXIF 地理标记与本地排名",
  "domain": "gbp",
  "evidence_level": "E2",
  "status": "refuted",   // active | prohibited | refuted | superseded
  "summary": "Two public controlled tests found no positive effect; one found a net negative.",
  "source": "Sterling Sky; Search Engine Land 10-week study (n=27)",
  "source_date": "2024-01-15",
  "last_reviewed": "2026-07-15",
  "supersedes": null,
  "tags": ["photos", "exif", "geotagging"],
  "tags_zh": ["照片", "地理标记", "地图包"]
}
```

**Requirements**
- Every entry carries `evidence_level` and `last_reviewed`. Entries missing either must not be returned — enforce this at build time, not at request time
- E1/E2 entries additionally require `source` and `source_date`
- `refuted` and `prohibited` entries stay searchable — their value is letting the agent decline with evidence rather than vague reluctance
- `prohibited` is distinct from `refuted`: the first means policy forbids it, the second means it was tested and does not work. Both are refusals; the reasons differ and so does the explanation owed to the user
- `title_zh` / `tags_zh` are required for Chinese queries to match; keyword retrieval does not cross languages on its own
- The server **strips suspected client data at the ingress** and does not log it
- Return `kb_version` so the client can judge snapshot freshness
