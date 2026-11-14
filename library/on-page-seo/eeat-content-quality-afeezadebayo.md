---
name: "eeat-content-quality"
description: "Assess and improve content quality and E-E-A-T (experience, expertise, authoritativeness and trust) the way Google describes it: people-first purpose, first-hand experience and original evidence, author and reviewer credentials, sourcing, accuracy and freshness, About and contact transparency, YMYL care, and patterns that look like scaled or low-value content. Use whenever someone mentions E-E-A-T, EEAT, helpful content, content quality, author pages, author bio, expert review, YMYL, trust signals, a traffic drop after a core update, or AI-written content that isn't ranking."
category: "on-page-seo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "afeezadebayo/marketing-skills"
repo_url: "https://github.com/afeezadebayo/marketing-skills"
source: "https://github.com/afeezadebayo/marketing-skills/blob/HEAD/content-seo/eeat-content-quality/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/marketing-skills/HEAD/content-seo/eeat-content-quality/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · afeezadebayo/marketing-skills · content-seo/eeat-content-quality/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/marketing-skills/blob/HEAD/content-seo/eeat-content-quality/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# E-E-A-T and Content Quality

E-E-A-T stands for experience, expertise, authoritativeness and trust. It comes from Google's Search Quality Rater Guidelines, which human raters use to evaluate results. It isn't a single ranking factor or score. Google's ranking systems look for signals that align with it, and trust matters most, especially for topics that affect health, money, safety or rights ("your money or your life", YMYL).

This skill reviews pages and sites against Google's own questions about helpful content and turns gaps into specific improvements.

## Operating principles
1. **People first.** Content exists to help a reader, not mainly to attract search traffic.
2. **Show, don't claim.** Experience appears as evidence: photos, data, test results, case details, named people.
3. **Trust is the base.** Accuracy, sources, transparency about who is behind the site and honest commercial intent.
4. **Scale your care to the stakes.** YMYL topics need qualified authors or reviewers and stronger sourcing.
5. **No fake signals.** Invented authors, credentials or reviews damage trust when found.

## The four parts
| Part | Question | Evidence on the page |
|---|---|---|
| Experience | Has the creator used, done or seen this first-hand? | Original photos, screenshots, test results, case studies, "what happened when" detail |
| Expertise | Does the creator have the knowledge or skill needed? | Author bio with relevant credentials, depth and accuracy of the content |
| Authoritativeness | Is the creator or site a recognised source on this topic? | Mentions and links from respected sources, citations, awards, professional memberships |
| Trust | Is the page accurate, honest, safe and transparent? | Sources, dates, clear ownership, contact details, editorial policy, secure checkout, honest reviews |

## When to use, and when not to
Use it after core update drops, for YMYL sites, for programmes with many AI-assisted or freelance pages, when building author pages, and before scaling content.

Don't use it for technical faults (Technical SEO skills) or as a checklist to add badges and bios without improving the content itself.

## Inputs to ask for, in one message
1. Sample URLs from each content type, including top and weak performers.
2. Who writes and reviews content, and their real credentials.
3. The About, contact, editorial policy and author pages.
4. Search Console trends around core update dates (checked on Google's Search Status Dashboard).
5. How content is produced: in-house, freelance, AI-assisted, and the editing process.

## Workflow

### Step 1. Confirm purpose
For each sample page, ask: who is it for, would they find it useful if they arrived directly, and does it leave them needing to search again?

### Step 2. Review with Google's questions
Use the self-assessment questions from Google's helpful content guidance: original information or analysis, substantial and complete description, insight beyond the obvious, clear sourcing, no exaggerated headlines, written or reviewed by someone who knows the topic, and no signs of being made mainly for search.

### Step 3. Check experience and expertise
Is there first-hand evidence? Is the author named, with a bio that shows relevant experience and links to their profiles? For YMYL, is there a qualified reviewer with the review date shown?

### Step 4. Check trust at site level
About page with real people and company details, contact options, editorial and corrections policy, affiliate and sponsorship disclosure, privacy and terms, secure pages, and consistent business details across the web.

### Step 5. Check accuracy and freshness
Verify facts and numbers against primary sources. Flag outdated information, broken examples and dates that changed without real updates.

### Step 6. Look for scaled-content patterns
Many near-identical pages, thin rewrites of other sources, AI text with no editing or evidence, or pages on topics the site has no connection to. Google's spam policies treat scaled content made mainly to manipulate rankings as abuse, however it is produced.

### Step 7. Plan improvements
For each content type: add evidence, add or upgrade authors and reviewers, add sources and dates, merge or remove weak pages, and fix site-level trust pages.

## Author pages that work
- Real name, photo and role.
- Relevant experience in plain facts: years, employers, qualifications, notable work.
- Links to profiles elsewhere (LinkedIn, professional bodies, published work) and `Person` structured data with `sameAs`.
- A list of articles written or reviewed.

## Worked example
A personal finance site lost about 40% of organic clicks after a core update (Search Console, 28 days before and after). Sampling 60 pages showed most were written by "Editorial Team", cited no sources and repeated advice from bank websites. The plan named real authors with finance backgrounds, added review by a chartered accountant on tax and pension pages with dates, cited official sources for every rate and threshold, added worked examples from the editors' own budgeting, merged 120 thin pages, and published an editorial policy. Recovery came gradually over the following updates; the site now publishes fewer, stronger pages.

## Output format
```
# Content quality and E-E-A-T review: <site>, <date>
## Summary (main risks, YMYL exposure, priority fixes)
## Page sample scores
| URL | Purpose | Experience | Expertise | Authority | Trust | Key gaps | Action |
## Site-level trust checklist
## Improvement plan by content type, with owners
```

## Evidence types by topic
| Topic type | Strongest evidence | Who should write or review |
|---|---|---|
| Health and medicine | Clinical sources, qualified reviewer, dates | Qualified clinician |
| Money, tax and investing | Official rules, worked examples, current rates | Qualified accountant or adviser |
| Legal | Statutes and official guidance, jurisdiction stated | Qualified lawyer |
| Product reviews | Hands-on testing, photos, measurements, comparisons | Someone who used the products |
| Software how-to | Screenshots with dates, tested steps | Practitioner who uses the tool |
| Opinion and analysis | Data, reasoning, named author with track record | Recognised practitioner |

## Edge cases and judgement calls
| Situation | What to do |
|---|---|
| Small team with no credentialed experts | Show real experience: projects, results, photos; partner with experts for YMYL topics |
| Ghostwritten content for executives | The named author must review and stand behind it |
| Guest posts and contributors | Vet expertise, show bios, edit to the same standard |
| Large archive of old content | Prioritise YMYL and high-traffic pages for review first |
| AI-assisted drafts | Require expert editing, fact checks and first-hand additions before publishing |
| Reviews and affiliate content | Disclose relationships; show testing, not specs copied from manufacturers |

## Site-level trust checklist
- About page naming real people and the company behind the site.
- Contact options that work.
- Editorial policy, corrections policy and review process.
- Affiliate and sponsorship disclosures.
- Author pages with credentials and links.
- Secure, working checkout and clear policies for e-commerce.

## Handoffs to related skills
- Weak but valuable pages: `content-refresh`
- Thin and duplicate pages: `content-pruning`
- Evidence standards in briefs and writing: `content-brief`, `seo-content-writing`
- Author and organisation markup: the Technical SEO `structured-data` skill
- Entity clarity for AI answers: the AEO & GEO `entity-optimisation` skill

## Common mistakes
- Adding author boxes to weak content and expecting a change.
- Fake or inflated credentials.
- Treating E-E-A-T as a score that tools can measure.
- Updating dates without updating content.
- Publishing AI drafts at scale without expert input.

## Questions to ask before you recommend changes
- Who are the real experts in the business, and will they put their name to content?
- Which topics are YMYL for this site?
- What first-hand evidence can the team produce regularly?

## Self-check before you answer
- Did I use Google's own questions and guidelines, not invented scores?
- Did I separate page-level and site-level issues?
- Are recommendations about real improvements, not badges?
- Did I avoid any suggestion of fake authors or reviews?

## Official documentation
- Creating helpful, reliable, people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Search Quality Rater Guidelines: https://guidelines.raterhub.com/searchqualityevaluatorguidelines.pdf
- Spam policies for Google web search: https://developers.google.com/search/docs/essentials/spam-policies
- Google Search's guidance about AI-generated content: https://developers.google.com/search/blog/2023/02/google-search-and-ai-content
- Google Search Status Dashboard: https://status.search.google.com/

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/content-seo/eeat-content-quality/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
