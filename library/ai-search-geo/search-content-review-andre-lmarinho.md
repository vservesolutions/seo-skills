---
name: "search-content-review"
description: "Review or edit search-facing text, including drafts, for SEO, GEO, factual clarity, and useful human reading. Use for content audits, ambiguous AI interpretations, unsupported claims, low-value sections, or search-facing rewrites. Use technical-seo for crawling, routes, metadata implementation, and schemas."
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "andre-lmarinho/skills"
repo_url: "https://github.com/andre-lmarinho/skills"
source: "https://github.com/andre-lmarinho/skills/blob/HEAD/skills/search-content-review/SKILL.md"
raw_source: "https://raw.githubusercontent.com/andre-lmarinho/skills/HEAD/skills/search-content-review/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · andre-lmarinho/skills · skills/search-content-review/SKILL.md · MIT
     Source: https://github.com/andre-lmarinho/skills/blob/HEAD/skills/search-content-review/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Search content review

Make the page useful for the intended reader and precise enough to reuse without misrepresenting it. Evaluate the text; do not pretend to simulate a search engine's ranking or an assistant's private classifier.

## 1. Establish the job

Read the target text and available context before asking questions. Identify the page's purpose, intended reader, decision or task, and success criterion. Distinguish a homepage's positioning from a case study's account of specific work. Use queries when supplied; label inferred queries as hypotheses, not search-volume data.

Keep edits within the requested scope. Private preferences and conversation context constrain the work; they are not automatically public copy. Preserve facts, voice, technical terminology, uncertainty, confidentiality, and legitimate attribution to teammates.

## 2. Inspect meaning and evidence

Read [SOURCES.md](SOURCES.md) before making platform-specific SEO/GEO recommendations. Follow the relevant source's scope and current status; Google and Microsoft's advice is not one universal retrieval specification.

For each substantive section, ask:

- **Purpose:** what question, decision, or necessary context does it serve? Does it add evidence, an explanation, a distinction, or useful navigation? A missing keyword does not make a section useless.
- **Identity:** can the reader tell which person, project, system, or version a statement concerns? Resolve ambiguous pronouns and inconsistent names only where they impede understanding; preserve natural language.
- **Claim:** what is asserted, by whom, under which conditions? Distinguish observed results, benchmarks, estimates, opinions, and intended behavior. Keep units, baseline, measurement conditions, and limits near the claim when relevant.
- **Support:** do the supplied code, results, examples, or cited primary sources establish that claim? Verify technical assertions against available evidence. Flag gaps rather than inventing metrics, credentials, citations, authorship, or certainty.
- **Contribution:** does the page offer a useful answer or first-hand explanation beyond interchangeable summaries? Show the actual decision, consequence, or evidence. Not every paragraph needs a novel fact; transitions and explanations can earn their place.

If asked to compare against search results, inspect current results and sources for the named query and locale. Describe that sample; otherwise evaluate the text without claiming a competitive gap.

## 3. Test interpretation

For consequential claims, read the heading and passage apart from the rest of the page. Identify the subject, assertion, scope, and supporting source. Show a plausible misreading if context is missing, then make the smallest correction that preserves the full meaning. This is an editorial fidelity check, not a model of chunking, retrieval, ranking, or citation probability.

When actual assistant behavior is supplied or tested, record product, model/search mode if known, date, prompt, sample size, response, and cited source. Trace an inaccurate answer to available evidence without assuming which page caused it. Separate model knowledge, retrieved information, inference, and unsupported output; one response is not a population measurement.

## 4. Make the smallest useful edit

Lead with information the reader needs; use descriptive headings and links. Choose prose, lists, steps, or tables because they fit the information. Improve vague language with supplied specifics, or remove an unsupported claim when it contributes nothing. Preserve necessary caveats and context even when a shorter extract sounds more impressive.

Propose **keep, cut, merge, move, clarify, or substantiate** with a concrete reason. Cut repetition, throat-clearing, generic superiority, and material outside the page's purpose. Before deleting, explain what the reader would lose. A supported, relevant passage can remain unchanged.

Use natural wording and consistent technical names. Assess titles, headings, descriptions, and visible authorship against the content they describe. Add relevant internal links to existing evidence; flag genuinely missing material without requiring new infrastructure.

Avoid keyword stuffing, invented E-E-A-T scores, fixed word/character counts, compulsory FAQs/tables, forced synonyms, or decorative punctuation bans. Use truthful dates only for real changes; neither a refresh schedule nor an `updated` field is a prerequisite. Optional Markdown and llms.txt belong to a technical decision, not a mandatory rewrite.

## 5. Return a review engineers can act on

For an audit, give the location or short excerpt, proposed action, observed problem or lost opportunity, minimum edit, and evidence. Distinguish factual defects, editorial judgment, provider guidance, and hypotheses. Explain why retained context matters when a cut would distort it.

For authorized editing, return the scoped changes and any unresolved factual questions. Keep the report proportional to the change. Verify that names, numbers, qualifications, links, and responsibility boundaries still match the source. State what could not be verified; claim actual SEO/GEO impact only with appropriate observed data.
