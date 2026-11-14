---
name: "image-seo"
description: "Make images findable, accessible and fast: original over stock, descriptive file names, useful alt text, captions and surrounding text, modern formats and responsive sizes, lazy loading below the fold only, image sitemaps and structured data, preferred images for results and social previews, and audits of missing alt text, oversized files and broken images. Use whenever someone asks about image SEO, alt text, image file names, Google Images traffic, image compression, WebP or AVIF, image sitemaps, featured or Open Graph images, or slow images on a page."
category: "core-web-vitals-performance"
platforms: ["claude-code"]
platform_source: "declared"
repo: "afeezadebayo/marketing-skills"
repo_url: "https://github.com/afeezadebayo/marketing-skills"
source: "https://github.com/afeezadebayo/marketing-skills/blob/HEAD/content-seo/image-seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/marketing-skills/HEAD/content-seo/image-seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · afeezadebayo/marketing-skills · content-seo/image-seo/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/marketing-skills/blob/HEAD/content-seo/image-seo/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Image SEO

Images help people understand a page and can bring their own traffic through Google Images, Discover and visual results. Search engines understand images mainly through the text around them: file names, alt text, captions, headings and the page itself. Oversized images are also one of the most common causes of slow pages.

This skill audits and fixes images so they are understood, accessible and fast.

## Operating principles
1. **Original beats stock.** Screenshots, product photos, charts and diagrams that only you have add value; generic stock photos add little.
2. **Alt text describes the image for someone who can't see it.** Write for accessibility first; that also helps search engines.
3. **Context matters.** Place images near the text they illustrate, with a caption when the image needs explanation.
4. **Serve the smallest file that looks right.** Correct dimensions, modern formats, responsive sizes.
5. **Use HTML images for content.** Search engines index `<img>` elements, not CSS background images.

## When to use, and when not to
Use it for image-heavy pages, e-commerce, recipes, travel, tutorials with screenshots, accessibility reviews, slow pages with large images and sites that want Google Images traffic.

Don't use it for full speed work across a template (use the Technical SEO Core Web Vitals skill) or for designing the images themselves, which needs a design brief.

## Inputs to ask for, in one message
1. Sample URLs per template, or a crawl with image URLs, sizes, alt text and dimensions.
2. The CMS, image CDN or optimisation plugin in use.
3. Search Console Performance filtered to search type Image, if relevant.
4. Which images are original and which are stock.
5. Brand rules for featured and social images.

## Workflow

### Step 1. Audit
From a crawl, list images with missing or empty alt text (excluding decorative ones), file sizes over a set threshold, dimensions much larger than displayed, broken image URLs, and content images loaded through CSS.

### Step 2. Choose the right image
Prefer original, relevant images. Replace generic stock where it adds nothing. For tutorials, use real screenshots with a capture date in the caption.

### Step 3. Name files
Lowercase, hyphenated and descriptive: `employee-onboarding-checklist-template.png`, not `IMG_4021.png`. Rename before upload; renaming live images changes their URLs.

### Step 4. Write alt text
| Image | Weak alt | Better alt |
|---|---|---|
| Product photo | shoe | Women's black trail running shoe, side view |
| Screenshot | screenshot | Search Console Page indexing report showing 2,300 crawled but not indexed pages |
| Chart | chart | Bar chart of organic clicks by month, January to September 2026, rising from 4,000 to 11,000 |
| Decorative divider | divider | (empty alt="") |

Keep it to what the image shows and why it matters on this page, usually under about 125 characters. Don't stuff keywords.

### Step 5. Add captions and context
Captions are read more than body text. Use them for charts, screenshots and anything that needs a source or date. Keep the image close to the paragraph it supports.

### Step 6. Optimise delivery
- Serve AVIF or WebP with a fallback where needed.
- Use `srcset` and `sizes` so mobile gets smaller files.
- Set `width` and `height` (or `aspect-ratio`) to prevent layout shift.
- Lazy-load images below the fold; never lazy-load the main image at the top of the page.
- Compress to a quality where artefacts aren't visible.

### Step 7. Help search engines find and choose images
- Include important images in the HTML, not injected only after interaction.
- Add image URLs to sitemaps for large image libraries.
- Use structured data that includes `image` for products, articles and recipes.
- Set a preferred image with `og:image` and schema; use large, relevant images for Discover eligibility.

## Platform notes
- **WordPress:** set alt text in the media library (it applies wherever the image is inserted with the block editor), use an image optimisation plugin or CDN for WebP or AVIF, and check that themes don't lazy-load the hero.
- **Shopify:** fill alt text for every product image; use the theme's responsive image helpers.
- **Next.js:** use the Image component with set sizes and `priority` on the main image.

## Worked example
A home furniture shop had 3,200 product images with alt text equal to the file name and an average size of 1.4 MB. The fix renamed new uploads, wrote alt text from product attributes with a template and a manual pass for the top 300 products, converted images to WebP through the CDN with responsive sizes, and removed lazy loading from main product images. Average image size fell to 180 KB, and clicks from Google Images grew over the next three months (Search Console, search type Image).

## Output format
```
# Image SEO review: <site or page>, <date>
## Summary (images audited, missing alt, oversized, broken)
## Findings
| Image URL | Page | Issue | Size | Displayed size | Current alt | New alt | Fix |
## Delivery settings (formats, srcset, lazy loading, CDN)
## Re-check plan
```

## Alt text by image type
| Image type | What to include | Example |
|---|---|---|
| Product photo | Product, key attribute, angle | "Oak dining table, 180 cm, seats six, front view" |
| Screenshot | Tool, screen and what it shows | "GA4 Explore report showing sessions by landing page, September 2026" |
| Chart or graph | Type, data and the main trend | "Line chart of monthly sign-ups rising from 400 to 1,100, January to June 2026" |
| Diagram | What it explains and its parts | "Flow diagram of a refund request, from customer form to bank transfer" |
| Person | Name and role when relevant | "Jane Doe, head of research, presenting at a conference" |
| Decorative | Nothing: empty alt | alt="" |
| Image with text | The text itself, if it matters | "Banner reading: free delivery over £50" |

## Edge cases and judgement calls
| Situation | What to do |
|---|---|
| Thousands of product images | Template alt text from product attributes, then a manual pass on top sellers |
| Images loaded by JavaScript galleries | Make sure the main image is in the HTML as an img element |
| Images served from a CDN subdomain | Fine for search; keep URLs stable and allow crawling |
| Stock photos used everywhere | Replace on key pages with original photos or screenshots |
| AI-generated images | Label where honesty requires it; never present them as real evidence |
| Infographics | Put the key facts in page text too |

## Handoffs to related skills
- Template-wide speed: the Technical SEO `core-web-vitals` skill
- Image sitemaps: the Technical SEO `xml-sitemaps` skill
- Image properties in markup: the Technical SEO `structured-data` skill
- Placing and captioning images while writing: `seo-content-writing`
- Final page check: `on-page-seo`

## Quality bar: what an excellent review includes
- Every content image with accurate alt text; decorative images with empty alt.
- File sizes and dimensions matched to display, in modern formats.
- The main image never lazy-loaded.
- Clear rules the team can apply to future uploads.

## Common mistakes
- Keyword-stuffed alt text.
- Alt text on decorative images that screen readers then read aloud.
- Lazy-loading the main image at the top of the page.
- Uploading 4,000-pixel images for 600-pixel slots.
- Using CSS backgrounds for meaningful images.

## Questions to ask before you recommend changes
- Which templates carry the most images and traffic?
- Is there an image CDN or optimisation plugin already?
- Are images original, licensed stock or generated?

## Self-check before you answer
- Does every content image have descriptive, accurate alt text?
- Are decorative images marked with empty alt?
- Are formats, sizes and lazy loading set correctly?
- Are important images in HTML and in structured data where relevant?

## Official documentation
- Google image SEO best practices: https://developers.google.com/search/docs/appearance/google-images
- Image sitemaps: https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps
- Discover and your website: https://developers.google.com/search/docs/appearance/google-discover
- Optimise images for performance: https://web.dev/articles/fast#optimize_your_images
- Alt text guidance (W3C): https://www.w3.org/WAI/tutorials/images/

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/content-seo/image-seo/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
