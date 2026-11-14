---
name: "programmatic-pages"
description: "Build sets of factual pages from structured data (event and trade show guides, industry pages, integration pages, location or glossary pages) with official sources first, internal data second, explicit coverage gaps, and a validator that catches leaked process language, placeholders, tables in fragile CMS fields and near-duplicate pages. Use for programmatic SEO, event guides, monthly event fact pages, or any templated page batch."
category: "structured-data"
platforms: ["unspecified"]
platform_source: "none"
repo: "clairelily2020/b2b-growth-kit"
repo_url: "https://github.com/clairelily2020/b2b-growth-kit"
source: "https://github.com/clairelily2020/b2b-growth-kit/blob/HEAD/skills/programmatic-pages/SKILL.md"
raw_source: "https://raw.githubusercontent.com/clairelily2020/b2b-growth-kit/HEAD/skills/programmatic-pages/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · clairelily2020/b2b-growth-kit · skills/programmatic-pages/SKILL.md · MIT
     Source: https://github.com/clairelily2020/b2b-growth-kit/blob/HEAD/skills/programmatic-pages/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Programmatic pages

Many similar pages built from data can rank and get cited, or can become thin duplicate content that hurts the whole site. This skill keeps each page factual, distinct and honest about what is unknown.

## When to use

- A recurring batch: upcoming events in the next 90 days, industries served, integrations, locations, terms.
- Repairing an existing batch that leaked internal notes or broke in the CMS.
- Not for one-off articles; use [article-writer](../article-writer/SKILL.md).

## Inputs

- Profile: `icp`, `positioning`, `offer` (CTA), `claims`, `content.article.tables_allowed`.
- The page type and its field contract. Start from [references/page-contract.md](references/page-contract.md).
- Sources: official pages for each entity; your internal data (product database, API, CRM aggregates) if the task permits its use.

## Process

1. **Select entities by business fit**, not by availability of data. Write the inclusion rule (for events: B2B, with exhibitors, in ICP industries, stable official pages). Competitor coverage can raise priority but is never a source of facts or copy.
2. **Collect facts from official sources first** into a local table using the contract fields, with `last_checked` dates. Unknown fields stay unknown.
3. **Fill from internal data second.** Match the entity carefully (name, date, place) before using an internal record. Record coverage per entity: covered, not covered, blocked (auth, timeout, empty). Never invent rows.
4. **Draft each page from facts.** Include only sections that have verified content. When something is not published yet, one plain sentence says so ("The speaker list has not been published yet."). Each page needs content unique to that entity; if two pages would read the same, merge or skip.
5. **Keep process out of public copy.** No "based on the official website", no coverage notes, no internal labels, no source-collection commentary.
6. **Respect the CMS.** If the rich-text field breaks tables, use short lists and H3s, and keep tabular data in CMS fields or internal files.
7. **Validate the batch:** `python3 scripts/validate_pages.py pages/*.md --no-tables` (drop `--no-tables` if tables render). Fix every finding, then hand off. A passing sample: [references/example-page.md](references/example-page.md).

## Output

```markdown
## Candidate list
| Entity | Inclusion reason | Official URL | Last checked | Internal coverage | Priority |
## Coverage gaps (entities we cannot support with data, and why)
## Pages (one Markdown file per entity)
## Validator result
```

## Gates

- Facts come from official or verified sources with dates; gaps stay visible. See [evidence-and-claims](../b2b-growth-kit/policies/evidence-and-claims.md).
- Never imply data categories you do not have (for example attendee lists when you only have exhibitor data); respect `claims.banned`.
- No scraped content copied from competitors or aggregators.
- Pages go into the CMS as drafts only; publishing follows [approval-gates](../b2b-growth-kit/policies/approval-gates.md).

## References

- [references/page-contract.md](references/page-contract.md)
- Writing drafts into the CMS: [cms-draft-patcher](../cms-draft-patcher/SKILL.md)
- Rendered checks: [prepublish-qa](../prepublish-qa/SKILL.md)
