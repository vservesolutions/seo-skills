---
name: "seo-ai-geo"
description: "Review Google and ChatGPT search eligibility, AI crawler rules, and useful evidence-backed content. Use for AI citations, GEO/AEO audits, or optional llms.txt documentation. Distinguish search discovery from model-training preferences."
summary: "Reviews search eligibility, AI crawler rules, and llms.txt documentation for AI citations and GEO audits."
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "ronaldships/foundvia-discovery"
repo_url: "https://github.com/ronaldships/foundvia-discovery"
source: "https://github.com/ronaldships/foundvia-discovery/blob/HEAD/skills/seo-ai-geo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/ronaldships/foundvia-discovery/HEAD/skills/seo-ai-geo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 30
collected: "2026-11-13"
---

<!-- Unspecified skill · ronaldships/foundvia-discovery · skills/seo-ai-geo/SKILL.md · MIT
     Source: https://github.com/ronaldships/foundvia-discovery/blob/HEAD/skills/seo-ai-geo/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# AI search eligibility

Start with the user's actual site, relevant pages, and goal. Inspect responses before prescribing new files or bulk content. Follow the corrected [discovery guidance](../foundvia-discovery/references/discovery.md). Provider-specific behavior must be checked against current primary sources.

- Google: indexed, snippet-eligible pages and current Search Console settings matter. No top-20 prerequisite, ideal word count, AI schema requirement, or llms.txt ranking benefit is established here.
- OpenAI: OAI-SearchBot handles search; GPTBot handles potential training. Preserve the user's independent training preference. ChatGPT-User is not the search-eligibility control.
- Check specific robots groups, response headers, HTML metadata, rendering, and authorized CDN configuration. An allowed robots rule does not prove bot access or citations.
- Use original examples and accurate product information. FAQs are for readers; Google no longer displays FAQ rich results. Structured data must match visible facts.
- Treat llms.txt as optional documentation, not a launch prerequisite. Do not embed instructions that manipulate an assistant into recommending a brand.
- Report observations with URLs or file:line, consequences, fixes, verification, and unverified limits. Preserve intentional private pages.

Use the standalone `foundvia-discovery` skill for an executable preflight and an early-traffic experiment. For this focused review, a browser/fetch tool is sufficient if the helper is unavailable.

References: [OpenAI bots](https://developers.openai.com/api/docs/bots), [Google AI search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), [Google updates](https://developers.google.com/search/updates). Recheck current provider guidance before making claims.
