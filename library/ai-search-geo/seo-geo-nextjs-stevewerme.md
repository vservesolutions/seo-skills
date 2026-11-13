---
name: "seo-geo-nextjs"
description: "Scaffold production-grade SEO and GEO (Generative Engine Optimization) for Next.js sites. Use this skill whenever the user wants to add or audit SEO, structured data (JSON-LD), metadata, sitemaps, llms.txt, Open Graph images, security headers, or LLM discoverability on a Next.js project. Also trigger when the user mentions \"GEO\", \"generative engine optimization\", \"llms.txt\", \"structured data\", \"schema markup\", \"JSON-LD\", \"sitemap\", \"robots.txt\", \"OG image\", or asks to make their site discoverable by AI assistants or search engines. Works for both new projects and existing codebases that need…"
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "stevewerme/seo-geo-nextjs"
repo_url: "https://github.com/stevewerme/seo-geo-nextjs"
source: "https://github.com/stevewerme/seo-geo-nextjs/blob/HEAD/SKILL.md"
raw_source: "https://raw.githubusercontent.com/stevewerme/seo-geo-nextjs/HEAD/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-13"
---

<!-- Unspecified skill · stevewerme/seo-geo-nextjs · SKILL.md · MIT
     Source: https://github.com/stevewerme/seo-geo-nextjs/blob/HEAD/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO & GEO Playbook for Next.js

This skill scaffolds a complete SEO and GEO (Generative Engine Optimization) setup for Next.js applications. SEO gets you found by search engines. GEO gets you cited by AI assistants like Claude, ChatGPT, and Perplexity. You need both.

## Before You Start

1. **Identify the project root** — find `next.config.ts` (or `.js`/`.mjs`) and `package.json`
2. **Gather site context** from the user (or infer from the codebase):
   - Brand name, domain, description
   - Primary locale and language (e.g. `sv` / `sv_SE` for Swedish, `en` / `en_US` for English)
   - Key product/service category
   - Social media profile URLs
   - Pricing info (if SaaS)
3. **Audit what already exists** — check for existing metadata, sitemaps, structured data, and `llms.txt` before scaffolding. Don't duplicate what's already there.

Read `references/implementation-guide.md` for all code patterns, JSON-LD schema examples, llms.txt templates, and implementation details before generating files.

## Skill Workflow

Work through these sections in order. Skip any section that's already well-implemented in the codebase.

---

### 1. Structured Data (JSON-LD)

Create a central `lib/schema.ts` (or `schema.tsx` if using a JSX render component) that exports typed schema builder functions and a `<JsonLd>` component.

**Schemas to implement** (pick the ones relevant to the site):

| Schema | When to use |
|--------|------------|
| `Organization` | Every site — name, logo, description, founding date, social profiles, contact, knowledge areas |
| `WebSite` | Every site — name, URL, language, search action, publisher ref |
| `SoftwareApplication` | SaaS products — category, platform, pricing via `UnitPriceSpecification`, feature list |
| `BlogPosting` | Blog posts — headline, description, image, author, publisher, dates, language |
| `BreadcrumbList` | Dynamic per page — builds from URL segments or explicit props |
| `WebPage` | Non-article pages — name, description, includes breadcrumbs |
| `FAQPage` | Pages with Q&A content |

Each builder function should return a plain object matching the schema.org type. The `<JsonLd>` component renders it:

```tsx
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

Embed `<JsonLd>` in each page's layout or page component with the appropriate schema. See the JSON-LD section in `references/implementation-guide.md` for full schema examples.

---

### 2. Metadata Strategy

**Root layout** (`app/layout.tsx`):
```ts
export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    template: '%s | BrandName',
    default: 'BrandName — Tagline',
  },
  description: 'Site-wide default description',
  alternates: {
    canonical: '/',
    languages: { 'sv': '/' },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@handle',
  },
  openGraph: {
    locale: 'sv_SE',
    siteName: 'BrandName',
    type: 'website',
  },
};
```

**Per-page metadata**: Each route exports `metadata` or `generateMetadata()` with page-specific `title`, `description`, canonical URL, and OpenGraph overrides.

**Blog posts**: Use dynamic `generateMetadata()` that pulls title, excerpt, featured image, and dates from the data source. Set OG type to `article` with `publishedTime`, `modifiedTime`, and `authors`.

---

### 3. Sitemap & Robots

Install and configure `next-sitemap`:

```bash
npm install next-sitemap
```

Create `next-sitemap.config.js`:
```js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://example.com',
  generateRobotsTxt: true,
  exclude: ['/admin/*', '/api/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
  ],
};
```

Add to `package.json` scripts:
```json
"postbuild": "next-sitemap"
```

This auto-generates `sitemap.xml`, `sitemap-0.xml`, and `robots.txt`.

---

### 4. GEO — LLM Discoverability (llms.txt)

This is the part most people skip, and it's becoming increasingly important. AI assistants parse your site to answer user questions about your product. Give them a clean, structured file to work with.

Create `public/llms.txt` — a plain-text file describing the service for AI systems.

Read the llms.txt section in `references/implementation-guide.md` for the template and detailed guidance. The key principles:
- Keep it factual and concise — no marketing fluff
- Structure it so an LLM can extract answers to common questions
- Include: what it does, who it's for, features, pricing, key URLs, contact info
- Update it when your product changes

---

### 5. Locale & Language

Set the correct language attributes everywhere:
- `<html lang="xx">` (e.g. `sv`, `en`, `de`) on the root `<html>` element in `app/layout.tsx`
- All OpenGraph metadata: `locale: 'xx_XX'` (e.g. `sv_SE`, `en_US`)
- All JSON-LD schemas: `inLanguage: 'xx'`
- `alternates.languages` in root metadata for multi-language sites
- Create a date formatting utility for consistent locale-aware date display

---

### 6. Semantic HTML

Audit and ensure proper semantic structure:
- `<header>` with `<nav aria-label="Global">` (or localized label)
- `<main>` wrapping page content
- `<footer>` with proper landmark role
- Single `<h1>` per page, then `<h2>`/`<h3>` hierarchy
- `aria-hidden="true"` on decorative elements (gradients, background shapes, icons)
- `aria-label` on interactive elements (menu buttons, icon-only buttons)
- `id` attributes on sections for anchor linking

This is an audit task — review existing components and fix issues rather than rewriting everything.

---

### 7. Dynamic OG Image

Create `app/opengraph-image.tsx` using Next.js Edge runtime and `ImageResponse`:

```tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    // JSX with branded gradient background + headline text
  );
}
```

This auto-serves as the default OG image for all pages. Blog posts can override with their featured image via `generateMetadata()`.

---

### 8. Performance & Monitoring

Add to root layout:
- `<Analytics />` from `@vercel/analytics` (if on Vercel)
- `<SpeedInsights />` from `@vercel/speed-insights` (if on Vercel)
- Google Fonts with `display: 'swap'` and `preconnect` links
- Use `next/image` for all images (audit existing `<img>` tags)
- `generateStaticParams()` for blog posts and other dynamic routes
- Event tracking on key conversions (CTA clicks, form submissions, newsletter signups)

---

### 9. Security Headers

Add to `next.config.ts`:

```ts
const securityHeaders = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const nextConfig = {
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }];
  },
};
```

---

### 10. Blog-Specific SEO

If the site has a blog:
- Canonical URL per post: `/blogg/{slug}` (or `/blog/{slug}`)
- Breadcrumb schema: Home > Blog > Post Title
- Article-type OpenGraph with `publishedTime`, `modifiedTime`, `authors`
- Static generation via `generateStaticParams()` with ISR-compatible architecture
- Featured image in both metadata and rendered on the page
- Structured `BlogPosting` JSON-LD per post

---

## Audit Mode

If the user asks to "audit" an existing site rather than scaffold from scratch:

1. **Run the automated audit first.** Execute `python scripts/audit.py <project-root>` (bundled with this skill) to get a machine-readable report of what's present, partial, or missing across all 10 areas. The script outputs both a terminal report and a `seo-audit-results.json` file.
2. Review the audit results and supplement with manual checks where the script can't reach (e.g., verifying schema content accuracy, checking heading hierarchy across pages).
3. Report findings to the user, grouped by category and sorted by impact.
4. Prioritize fixes: llms.txt and missing metadata are almost always the biggest gaps.
5. Implement fixes incrementally rather than rewriting everything.

## Output Checklist

Before finishing, verify:
- [ ] JSON-LD renders on every page (check with browser DevTools > Elements > search for `application/ld+json`)
- [ ] Root metadata has `metadataBase`, title template, OG defaults, and canonical
- [ ] `next-sitemap` is configured and `postbuild` script exists
- [ ] `public/llms.txt` exists and is factual
- [ ] `<html lang="...">` is set correctly
- [ ] Semantic HTML landmarks are in place
- [ ] OG image route exists at `app/opengraph-image.tsx`
- [ ] Security headers are configured in `next.config`
- [ ] Blog posts have article-type OG, breadcrumbs, and BlogPosting schema
