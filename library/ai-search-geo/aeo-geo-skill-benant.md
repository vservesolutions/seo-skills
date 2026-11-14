---
name: "aeo-geo-skill"
description: "Web development guidelines and rules for AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization)"
category: "ai-search-geo"
platforms: ["cursor", "claude-code"]
platform_source: "declared+detected"
repo: "benant/aeo-geo-skill"
repo_url: "https://github.com/benant/aeo-geo-skill"
source: "https://github.com/benant/aeo-geo-skill/blob/HEAD/skills/aeo-geo-skill/SKILL.md"
raw_source: "https://raw.githubusercontent.com/benant/aeo-geo-skill/HEAD/skills/aeo-geo-skill/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Cursor, Claude Code skill · benant/aeo-geo-skill · skills/aeo-geo-skill/SKILL.md · MIT
     Source: https://github.com/benant/aeo-geo-skill/blob/HEAD/skills/aeo-geo-skill/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# AEO / GEO Agent Skill

This skill provides guidelines and rules for developing websites optimized for **AI-powered search engines (Answer Engines and Generative Engines)**.

## 🎯 Target Audience

- Cursor (Agent Mode)
- Claude Code
- Codex (OpenAI)
- OpenCode
- Other LLM-based coding agents

## 🧠 Core Philosophy

**"Build a structure that AI can easily understand and cite, without compromising user experience (UX)."**

AEO should not be applied blindly to every page. The following rules focus on **information-rich pages (blogs, product descriptions, help centers, FAQs)**. For main pages or brand introduction pages, prioritize human-centric design and brand storytelling.

---

## 📋 Core Rules

### 1. Structured Data (JSON-LD First)

- **Every information page** must include appropriate schema markup (`FAQPage`, `HowTo`, `Article`, `Product`) in **JSON-LD** format.
- Insert it as `<script type="application/ld+json">` within the `<head>` or at the bottom of the `<body>`.
- **⚠️ Warning**: Do not include fake content in the schema that does not exist on the page. (This may result in Google penalties.)
- **Note (2026)**: Google removed FAQ *rich results* from Search in May 2026, but `FAQPage` schema remains valuable for GEO — AI systems (ChatGPT, Perplexity, Gemini) still consume structured data when selecting citation sources.

**Example (FAQPage):**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between AEO and SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO aims for higher rankings in search results, whereas AEO optimizes content so that AI directly provides it as an answer to users."
      }
    }
  ]
}
```

---

### 2. Content Structuring (Conditional Application)

- For **information-type content**, summarize the core answer within the first 100–150 characters.
- **Q&A-style H2/H3 headings** should only be applied to blog posts or FAQ sections. For general landing pages, focus headings on marketing copy.
- When explaining processes, actively use `<ol>` and `<ul>` to make it easier for AI to extract step-by-step information.

**✅ Good Example (Blog):**
```html
<h2>How do I get started with AEO?</h2>
<p>To get started with AEO, first collect real customer questions, then provide concise answers in a structured format.</p>
<ol>
  <li>Research customer questions</li>
  <li>Create Q&A content</li>
  <li>Add JSON-LD schema</li>
</ol>
```

**❌ Bad Example (Forcibly applied to a main page):**
```html
<h2>How did our company get started?</h2> <!-- Forcing a brand story into a question format -->
```

---

### 3. Performance Optimization (Realistic Goals)

- Meet the **Core Web Vitals** thresholds:
  - LCP (Largest Contentful Paint): Within 2.5 seconds
  - INP (Interaction to Next Paint): Within 200ms — replaced FID as the responsiveness Core Web Vital in March 2024
  - CLS (Cumulative Layout Shift): Less than 0.1
- Lighthouse scores are for reference only. It is acceptable if the above three metrics pass, even if the Lighthouse score is below 90.
- Prefer `webp` format for images and add the `loading="lazy"` attribute — except for the LCP image, where lazy-loading worsens the LCP score.

---

### 4. Tech Stack Neutrality

- **Next.js**: Utilize SSR or SSG to pre-render content.
- **Vue/Nuxt**: Use `useAsyncData` or `useFetch` to load server-side data.
- **Vanilla HTML/CSS/JS**: Use static build tools (Vite, Webpack) for optimization.
- **Core Principle**: Ensure metadata and content are included during the initial load so that AI crawlers do not see an empty screen.

---

### 5. Conversational Keywords

- When creating content, include at least one section containing **natural, conversational long-tail keywords**, rather than simple single words (e.g., "CRM").
- **Examples**: "Recommend a free CRM for small businesses" or "What is the easiest way to increase blog traffic?"

---

### 6. Building Trust (E-E-A-T)

- **Author and Source Attribution**: Clearly display author information, publish date, and modification date using `<time>` tags on posts.
- **External Links**: Include links to trustworthy sources (official documentation, academic references).
- **Research-backed GEO levers**: Include statistics, direct quotations, and explicit source citations in your content — the foundational GEO study (Aggarwal et al., KDD 2024) measured up to ~40% higher visibility in generative-engine answers from these devices alone.
- **Internal Links**: Provide links to related internal content to encourage site navigation.

### 7. AI Crawler Access (Do Not Get Blocked)

If AI crawlers cannot fetch your pages, they can never cite them — regardless of content quality.

- Ensure `robots.txt` does not disallow the major AI user agents:
  - **Citation/search bots**: `OAI-SearchBot` (ChatGPT Search), `PerplexityBot`, `Claude-SearchBot`.
  - **Training/indexing bots**: `GPTBot`, `ClaudeBot` — blocking these keeps your content out of model knowledge and future answers.
- Periodically check server logs to confirm these agents receive HTTP 200 responses (not 401/403).
- About `llms.txt`: Google has stated it does not use it, and no major AI provider has confirmed adoption. Treat it as an optional extra for documentation-heavy sites — never a substitute for crawlable HTML.

---

## 🛠️ Installation

### Cursor
```bash
# Global installation
cp -r skills/aeo-geo-skill ~/.cursor/skills/

# Project-level installation
cp -r skills/aeo-geo-skill .cursor/skills/
```

### Claude Code
```bash
cp -r skills/aeo-geo-skill .claude/skills/
```

### OpenCode
```bash
cp -r skills/aeo-geo-skill ~/.config/opencode/skills/
```

---

## 📝 Self-Check Checklist

Before deployment, verify the following items:

- [ ] Does every major information page include JSON-LD schema?
- [ ] Is the text easily readable on mobile? (Prioritize readability)
- [ ] Do all images have meaningful `alt` text?
- [ ] (For information pages) Are real user search queries reflected in the subheadings?
- [ ] Do the Core Web Vitals (LCP, INP, CLS) pass the 'Good' threshold?
- [ ] Are `sitemap.xml` and `robots.txt` functioning correctly?
- [ ] Are the major AI crawlers (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot) allowed by `robots.txt` and receiving HTTP 200?

---

## 🔗 References

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Schema.org](https://schema.org/)
- [Core Web Vitals](https://web.dev/vitals/)
- [GEO: Generative Engine Optimization — Aggarwal et al., KDD 2024](https://arxiv.org/abs/2311.09735)

---

## 📄 License

MIT License

---

**With this skill, your website will look natural to humans and smart to AI.** 🚀
