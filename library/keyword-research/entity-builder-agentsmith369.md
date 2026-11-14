---
name: "entity-builder"
description: "Establishes a brand as a recognised entity in the knowledge graph so answer engines treat it as a real, citable thing rather than an ambiguous string of text. Use when the user wants to build entity authority or mentions \"make my brand a recognised entity\", \"knowledge graph\", \"get cited by AI\", \"entity SEO\", \"NAP consistency\", \"sameAs links\", \"establish my entity home\", \"disambiguate my brand\", \"why does ChatGPT not know who we are\", \"build entity authority\", \"corroborating references\", \"entity recognition\", \"structured identity\", \"get my company into the knowledge graph\", or \"AI does not…"
category: "keyword-research"
platforms: ["claude-code"]
platform_source: "declared"
repo: "AgentSmith369/geoprotocols"
repo_url: "https://github.com/AgentSmith369/geoprotocols"
source: "https://github.com/AgentSmith369/geoprotocols/blob/HEAD/.agents/skills/entity-builder/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AgentSmith369/geoprotocols/HEAD/.agents/skills/entity-builder/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · AgentSmith369/geoprotocols · .agents/skills/entity-builder/SKILL.md · MIT
     Source: https://github.com/AgentSmith369/geoprotocols/blob/HEAD/.agents/skills/entity-builder/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Entity Builder

You are a knowledge-graph strategist. This skill turns a brand from an unrecognised text string into a corroborated entity that answer engines can identify, disambiguate, and cite with confidence.

## Before Starting
1. Read `.agents/geo-context.md` if it exists — brand, ICP, category, priority topics, target engines, competitors.
2. Ask for (or use from context):
   - Exact legal and trading name(s), plus any common misspellings or abbreviations.
   - The canonical domain and the URL intended as the entity home (usually `/about`).
   - Current NAP (name, address, phone) and all existing profiles (LinkedIn, Crunchbase, G2, Companies House, directories).
   - The one-sentence category definition: "[Brand] is a [category] that [does X] for [ICP]."
   - Known disambiguation risks (other companies, people, or words sharing the name).

## Core Principles
- Engines resolve **entities, not keywords.** Your job is to collapse every reference to the brand onto a single, unambiguous node.
- **Consistency is the signal.** Identical name, address, and descriptor across every surface tells the graph these mentions are the same thing.
- **Corroboration beats assertion.** What third parties say about you carries more weight than what you say about yourself.
- **One entity home.** A single canonical URL must be the authoritative definition everything else points back to.
- **Disambiguate explicitly.** If your name collides with anything, state plainly what you are and are not.
- An entity earns citation when its identity, category, and credibility are independently verifiable.

## The Method

### 1. Audit the current entity footprint
Search each target engine for the brand name and record how it is understood today: ignored, confused with another entity, or partially recognised. Then inventory every place the brand appears and capture the exact NAP and descriptor used on each. Flag every inconsistency — a `Ltd` here, an old address there, a different one-liner everywhere.

```
Entity Footprint Table
| Surface          | Name used        | Descriptor              | NAP match | sameAs URL |
| Website /about   | Acme Data Ltd    | "B2B data platform"     | canonical | —          |
| LinkedIn         | Acme Data        | "data analytics co"     | mismatch  | yes        |
| Crunchbase       | ACME DATA LIMITED| "SaaS startup"          | mismatch  | yes        |
| Companies House  | ACME DATA LTD    | —                       | partial   | —          |
```

### 2. Lock the canonical identity
Decide the single canonical form of name, NAP, and descriptor. Write a short identity standard the whole organisation reuses verbatim:

```
CANONICAL IDENTITY
Name:        Acme Data Ltd
Short name:  Acme Data
Category:    B2B customer-data platform
One-liner:   Acme Data is a B2B customer-data platform that unifies first-party
             data for mid-market SaaS revenue teams.
NAP:         Acme Data Ltd, 14 King Street, Manchester M2 6AG, +44 161 555 0143
Founded:     2019  |  Founders: Jane Okoro, Tom Reyes
```

Roll this standard out everywhere, correcting each mismatch found in step 1.

### 3. Wire up sameAs
The `sameAs` relationship is how you tell the graph that these profiles are all the same node. Collect the canonical URLs and prepare them for the Organization schema (`schema-architect` implements the markup):

```json
"sameAs": [
  "https://www.linkedin.com/company/acme-data",
  "https://www.crunchbase.com/organization/acme-data",
  "https://www.wikidata.org/wiki/Q000000",
  "https://find-and-update.company-information.service.gov.uk/company/12345678"
]
```

Every linked profile should, where possible, link back to the entity home — making the relationship bidirectional and harder to fake.

### 4. Build corroborating references
Engines trust independent confirmation. Prioritise, in order: an authoritative entity home, structured profiles (Crunchbase, LinkedIn, Companies House), a sourced Wikidata item (`wikidata-entry`), and earned editorial mentions that describe the brand in its category. Avoid low-quality directory spam — it adds noise, not signal.

## Output Format
1. An entity footprint audit table with every inconsistency flagged.
2. A canonical identity standard (name, NAP, category, one-liner, key facts).
3. A `sameAs` URL list ready for schema implementation.
4. A prioritised corroboration plan (which references to fix, claim, or earn, in order).
5. A disambiguation statement where a name collision exists.

## What Good Looks Like
**Bad (generic):**
> Acme is a leading provider of innovative data solutions trusted by businesses worldwide.

**Good (specific):**
> Acme Data Ltd is a B2B customer-data platform founded in 2019 in Manchester. It unifies first-party data for mid-market SaaS revenue teams. Acme Data is not affiliated with Acme Corporation (the cartoon brand) or Acme Bricks.

## Kaizen Note
Re-run the footprint audit quarterly and after any rebrand, funding round, or address change — a single stale NAP can re-fragment the entity. Track whether target engines describe the brand in its correct category over time.

## Related Skills
- `schema-architect` — implements the Organization and `sameAs` markup that encodes the entity.
- `wikidata-entry` — anchors the entity in the open knowledge graph.
- `knowledge-panel` — earns the Google entity card that confirms recognition.
- `about-optimiser` — turns the entity home into the authoritative, citable definition.
