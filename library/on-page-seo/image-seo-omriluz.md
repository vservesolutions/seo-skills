---
name: "image-seo"
description: "Use when optimizing images for Google Images and on-page SEO — renaming image files, writing alt text, compressing to WebP, picking original imagery, or placing images near matching copy. Also use when auditing a site whose images are named `IMG_1234.jpg` or have blank alt text, or when planning a personal-brand image strategy for Google Images."
category: "on-page-seo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "omriluz/image-seo"
repo_url: "https://github.com/omriluz/image-seo"
source: "https://github.com/omriluz/image-seo/blob/HEAD/SKILL.md"
raw_source: "https://raw.githubusercontent.com/omriluz/image-seo/HEAD/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 4
collected: "2026-11-12"
---

<!-- Claude Code skill · omriluz/image-seo · SKILL.md · MIT
     Source: https://github.com/omriluz/image-seo/blob/HEAD/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Image SEO

## Overview

A five-step framework, faithful to Edward Sturm's *The AdWords Show* Episode 1,046 — *"Image SEO Secrets: 241,000 Impressions from Optimizing Alt Text"* (https://youtu.be/hkmGyAtvKvM). The original 5-point framework is credited to Hridoy Rahman (X thread); Edward extends step 3 with an LLM-assisted alt-text workflow that's the key insight of the episode.

**Cited results:** 7,000+ clicks, 241,000+ impressions, 2.9% CTR from image optimization alone.

## When to Use

- Publishing a new article, product page, or landing page with images
- Auditing a site whose images are named `IMG_*` / `Screenshot_*` or have blank alt text
- Building a personal-brand presence in Google Images (controlling the narrative for your name)
- Generating alt text at scale with an LLM
- Reviewing image SEO during content QA before publish

**Do NOT use for:** purely decorative images (use `alt=""`), logos/icons (a single descriptive alt is enough).

## The Five Steps (with Edward's importance scores)

| # | Step | Importance |
|---|---|---|
| 1 | Rename the image file before upload | 20/100 |
| 2 | Compress images (use WebP) | 70/100 |
| 3 | Add descriptive, contextual alt text | **100/100** |
| 4 | Use original images, not stock | "super important" |
| 5 | Place images near relevant text | 40/100 ("honestly so important") |

Edward's framing: *"You can get discovered with images, but also the alt text that you use and having descriptive text for everything improves your site performance, improves your page performance… an easy way to make your pages and your site more relevant."*

---

### Step 1 — Rename the image file (20/100)

**Before uploading**, rename the file. Use lowercase, descriptive, hyphenated names.

| Bad | Good |
|---|---|
| `image_9283.jpeg` | `bestseowins.webp` |
| `IMG_2847.jpg` | `screenshot-from-ahrefs-of-seo-wins.webp` |

Rules:
- Lowercase, dashes between words
- Descriptive — say what the image actually shows
- Do it BEFORE upload (renaming after is painful in many CMSs)

---

### Step 2 — Compress images, use WebP (70/100)

> *"Large images slow down your website. Compressed images load faster and improve SEO."* — Hridoy Rahman

- Use **WebP** format (Edward: *"I'm always using webps"*)
- Use any compression tool — Edward's pick is **CloudConvert** (he uses it so much Google flags it as *"you visit often"*)
- Search query he uses: `png to webp`

Bonus tip from the comments: some users go further with **AVIF** for even smaller files (reports of 2 MB → 20 KB). WebP is Edward's default; AVIF is optional.

---

### Step 3 — Add alt text (100/100) — *the highest-importance step*

**Don't leave alt text blank** and don't keyword-stuff it.

Hridoy's example: instead of `alt="SEO"`, use `alt="SEO wins"` or `alt="SEO wins database"`.

Edward says we can do **way better** by combining a structured filename convention with an LLM. This is the unique insight of the episode:

#### Edward's filename convention

Format: `subfolder_url-slug_descriptive-file-name.webp`

- **Subfolder name** with dashes for spaces — e.g. `use-cases`
- **Underscore** separator
- **URL slug** of the page the image is on
- **Underscore** separator
- **Descriptive file name** with dashes for spaces

Full example:

```
use-cases_image-seo-tips_screenshot-from-ahrefs-of-seo-wins-i-got-from-optimizing-my-alt-text.webp
```

> *"Your file names will be a prompt for what you want ChatGPT to expand on within the alt text."* — Edward Sturm

#### The LLM workflow (verbatim from the video)

1. Rename all images using the convention above
2. Paste the page content into ChatGPT or Claude
3. Use this prompt (Edward's exact wording):

   > *"This is my page content. I want you to use the file names for each image and the page content to make the alt text for each image. The alt text should be detailed and contextual within the page content and with the file names."*

4. Review every output before publishing — the LLM uses (a) what's in the file names, (b) what's in the article, and (c) what's visually in the image, to generate alt text that is detailed and contextual.

This works because the filename is itself a hint to the model about what should be in the alt text.

---

### Step 4 — Use original images, not stock ("super important")

> *"Google prefers unique images over stock photos. Custom screenshots, charts, and graphics work very well."*

Per use case:

- **Home services:** photos you took on the job, photos of your team
- **SaaS:** screenshots of your own product instead of generic stock photos or abstract AI images. **Add emojis to screenshots** to make them more contextual to the surrounding page content
- **Bottom-of-funnel SEO landing pages:** upload images **per page**, even if you're reusing the same image across pages. This lets each page have a contextually-named file (per the Step 3 convention). Some CMSs require extra plugins for per-page alt text — uploading per page sidesteps this.

---

### Step 5 — Place images near relevant text (40/100, but "honestly so important")

> *"Google uses surrounding text to understand images. Add images close to related headings and paragraphs."*

Put each image directly under the heading and next to the paragraph that discuss the same subject. The image, surrounding `<h2>`/`<h3>`, and paragraph copy should all reinforce the same topic.

---

## Edward's case study — `edwardsturm.com/photos` (since 2004)

A working example of the framework applied to personal-brand image SEO:

- **Goal:** control the Google Images results for "Edward Sturm" against other people with the same name (in communications, in the arts)
- **Approach used on the photos page:**
  - Descriptive alt text on every image
  - Captions
  - Clear page title
  - Clear URL
  - Clear H1
  - First sentence of body: *"Photos of Edward Sturm throughout the years, photos of Edward around the world and various activities"*
- **Result:** his photos dominate the Google Images results for his name; other people with the same name are pushed down

The lesson: a single well-optimized page with consistent signals across title / URL / H1 / first sentence / alt text / captions can own Google Images for a query.

---

## Quick Checklist (paste into a content QA)

Before publishing a page with images:

- [ ] Every image renamed BEFORE upload (no `IMG_*`, no `Screenshot_*`)
- [ ] Filenames follow `subfolder_page-slug_descriptive-name.webp`
- [ ] All images compressed to WebP
- [ ] Alt text generated by ChatGPT/Claude using full page context + filename, then human-reviewed
- [ ] No image has blank alt text (unless purely decorative — then `alt=""`)
- [ ] Images are original (screenshots, team photos, custom graphics) — not stock
- [ ] SaaS screenshots have contextual emojis where helpful
- [ ] Each image sits directly under the heading and next to the paragraph it illustrates
- [ ] For landing pages: images are uploaded per page so file names can be page-specific

## Common Mistakes

| Mistake | Why it hurts | Fix |
|---|---|---|
| Blank alt text on meaningful images | Invisible to crawlers and screen readers | Generate via LLM workflow above, human-review, publish |
| Filename is `IMG_*` or a hash | Wastes a ranking signal | Rename before upload using Edward's convention |
| Same alt text reused across product variants | Google can't differentiate | Include the variant detail; let the filename drive it |
| Stock photo with generic name | Weak ranking signal, indistinguishable from competitors | Use original photography, screenshots, or custom graphics |
| Hero image is 2 MB | Slow page, hurt SEO | Compress to WebP via CloudConvert or similar |
| Image dropped into an unrelated section | Weak co-occurrence signal | Move next to the matching heading + paragraph |
| Sharing one image across many landing pages with one filename | Can't be contextual to each page | Upload per page so filenames are page-specific |

## Red Flags — Stop and Audit

- The page has images but **all alt text is blank**
- Filenames are all `IMG_*`, `Screenshot_*`, or hashes
- The page uses only stock photos with no original imagery
- Same alt text repeats across multiple images on the page
- Hero / above-the-fold image is 1 MB+ (compress to WebP)
- Images aren't placed near matching headings — they float in unrelated sections

## Beyond the video (modern complements, not in Edward's framework)

The video doesn't cover these but they don't contradict it — apply when relevant:

- **AVIF** as a further-compressed alternative to WebP (mentioned in comments only)
- `loading="lazy"` on below-the-fold images, **never** on the LCP image
- `width` and `height` on every `<img>` to prevent layout shift (CLS)
- Image sitemap entries for `<image:image>` so dynamically-loaded images are discoverable

## Source

- Edward Sturm — *Image SEO Secrets: 241,000 Impressions from Optimizing Alt Text*, *The AdWords Show* Ep. 1,046 — https://youtu.be/hkmGyAtvKvM
- Original 5-point framework: Hridoy Rahman (X thread, referenced in the video)
