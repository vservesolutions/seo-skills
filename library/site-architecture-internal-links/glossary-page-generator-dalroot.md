---
name: "glossary-page-generator"
description: "When the user wants to create, optimize, or audit glossary page content and structure. Also use when the user mentions \"glossary,\" \"definitions,\" \"terminology,\" \"industry terms,\" \"glossary page,\" \"term definitions,\" \"vocabulary,\" \"glossary SEO,\" or \"definition page.\" For definitions at scale, use programmatic-seo."
summary: "Creates, optimizes, and structures glossary page content and industry terminology definitions."
category: "site-architecture-internal-links"
platforms: ["unspecified"]
platform_source: "none"
repo: "dalroot/agentic-seo"
repo_url: "https://github.com/dalroot/agentic-seo"
source: "https://github.com/dalroot/agentic-seo/blob/HEAD/skills/pages/content/glossary/SKILL.md"
raw_source: "https://raw.githubusercontent.com/dalroot/agentic-seo/HEAD/skills/pages/content/glossary/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 26
collected: "2026-11-13"
---

<!-- Unspecified skill · dalroot/agentic-seo · skills/pages/content/glossary/SKILL.md · MIT
     Source: https://github.com/dalroot/agentic-seo/blob/HEAD/skills/pages/content/glossary/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Pages: Glossary

Guides glossary page structure, content, and internal linking for SEO.

**When invoking**: On **first use**, if helpful, open with 1-2 sentences on what this skill covers and why it matters, then provide the main output. On **subsequent use** or when the user asks to skip, go directly to the main output.

## Initial Assessment

**Check for project context first:** If `.claude/project-context.md` or `.cursor/project-context.md` exists, read it for industry terms and customer language.

Identify:
1. **Domain**: SEO, marketing, tech, industry-specific
2. **Audience**: Beginners, practitioners, both
3. **Content volume**: Number of terms

## Best Practices

### Structure

| Element | Purpose |
|---------|---------|
| **Alphabetical index** | A-Z or by category |
| **Term + definition** | Clear, concise explanation |
| **Related terms** | Cross-links within glossary |
| **Internal links** | Link to relevant blog/content |
| **Search** | Help users find terms |

### Definition Quality

- **Clear**: Jargon-free where possible
- **Concise**: One paragraph typical
- **Context**: How term is used in your domain
- **Examples**: When helpful

### Internal Linking Strategy

- **Anchor text**: Descriptive, keyword-rich; avoid "click here"
- **Variation**: Mix anchor phrases; don't repeat identical text
- **Placement**: Higher on page = more valuable
- **Relevance**: Link to most valuable next content
- **Avoid orphans**: Ensure every term page has inbound links

### SEO Benefits

- **Topic clusters**: Glossary as hub; links to and from pillar content; see **content-strategy**
- **Long-tail**: Definition queries, "what is X"
- **Crawlability**: Reduces depth; distributes authority
- **User engagement**: Helps users understand; keeps them on site

### Maintenance

- **New terms**: Add as content expands
- **Audit links**: Periodically check internal links
- **Update**: Keep definitions current

## Output Format

- **Structure** (index, layout)
- **Term** template (definition format)
- **Internal linking** plan
- **SEO** metadata
- **Schema**: DefinedTerm or similar if applicable

## Related Skills

- **url-slug-generator**: URL slug for glossary terms (e.g. /glossary/term-slug); 3-5 words
- **internal-links**: Glossary is internal linking hub
- **content-strategy**: Glossary supports content clusters
- **blog-page-generator**: Link between glossary and blog
- **title-tag, meta-description, page-metadata**: Glossary page metadata
