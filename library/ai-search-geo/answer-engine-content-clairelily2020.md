---
name: "answer-engine-content"
description: "Write source-backed B2B content briefs and drafts that answer one buyer question clearly enough for people and AI assistants to cite, including comparison pages, factual guides, FAQ pages and alternatives pages, with a claim-source table and a seven-gate fact check before publishing. Use for AEO or GEO content, AI-search friendly pages, competitor comparison or alternatives pages, or fact-checking a draft."
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "clairelily2020/b2b-growth-kit"
repo_url: "https://github.com/clairelily2020/b2b-growth-kit"
source: "https://github.com/clairelily2020/b2b-growth-kit/blob/HEAD/skills/answer-engine-content/SKILL.md"
raw_source: "https://raw.githubusercontent.com/clairelily2020/b2b-growth-kit/HEAD/skills/answer-engine-content/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · clairelily2020/b2b-growth-kit · skills/answer-engine-content/SKILL.md · MIT
     Source: https://github.com/clairelily2020/b2b-growth-kit/blob/HEAD/skills/answer-engine-content/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Answer engine content

Writes the page that answers one buyer question better than what is cited today, and proves every claim before it ships.

## When to use

- Writing or rewriting a page for a gap found by [geo-citation-scout](../geo-citation-scout/SKILL.md), or for a known buyer question.
- Comparison, alternatives, "how to", "is X worth it" and glossary pages.
- Fact-checking any draft before publishing.
- Long-form articles with house structure rules: use [article-writer](../article-writer/SKILL.md), then run this skill's fact check.

## Inputs

- Profile: `positioning` (proof points), `claims`, `competitors`, `offer` (CTA and UTM), `content.article`, `voice`.
- The target question and page type. If citation research exists, the current winners and why they win.
- Source material: product docs, data, interviews, public competitor pages (dated).

## Process

1. **Pick one question and one intent per page.** Write the exact question, the reader, and what they need to decide.
2. **Build the claim table before writing.** Every factual statement gets a row: claim, type (our assertion, independent observation, third-party data, recommendation), source, observed date. Anything without a source is removed or marked unknown.
3. **Choose structure from evidence, not habit.** Lead with a direct 2-3 sentence answer. Use a comparison table only when options are compared, an FAQ only when there are real follow-up questions. If research shows a structure winning for this question type, use it.
4. **Write for the reader first.** Plain definitions, dates on anything that changes, criteria stated before any "best". Competitors are described by their own public pages, neutrally.
5. **Place the product with restraint.** One section on where it fits and where it does not, using proof points only.
6. **Run the seven gates** in [references/fact-check-gates.md](references/fact-check-gates.md). Any critical or high finding blocks the page.

## Output

```markdown
Target question / page type / reader / decision they need to make
Short answer (2-3 sentences)
## Claim table
| Claim | Type | Source | Observed | Status |
## Outline (H1, H2s, where tables or FAQ go and why)
## Draft (if requested)
## Fact-check report (7 gates, findings by severity, verdict)
```

## Gates

- Claims, competitor statements and numbers follow [evidence-and-claims](../b2b-growth-kit/policies/evidence-and-claims.md); unknown comparison cells say "unknown".
- No invented references, customers, quotes or statistics. No promised rankings or citations.
- "Ready to publish" is a quality verdict, not permission. Publishing follows [approval-gates](../b2b-growth-kit/policies/approval-gates.md).
- A brief does not prove visibility. Measuring citations is a separate job for [geo-citation-scout](../geo-citation-scout/SKILL.md).

## References

- [references/fact-check-gates.md](references/fact-check-gates.md)
- Rendered-page checks before publishing: [prepublish-qa](../prepublish-qa/SKILL.md)
