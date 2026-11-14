---
name: "ai-interrogation"
description: "After SEO work is done, test whether AI engines recommend the brand for high-intent prompts. If the brand is missing or ranked low, ask why and where it is, log the cited sources, fix those sources, and re-test. Use for AI visibility, GEO/AEO, and local reputation."
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "detected"
repo: "harryroger798/seo-agent-kit"
repo_url: "https://github.com/harryroger798/seo-agent-kit"
source: "https://github.com/harryroger798/seo-agent-kit/blob/HEAD/skills/ai-interrogation/SKILL.md"
raw_source: "https://raw.githubusercontent.com/harryroger798/seo-agent-kit/HEAD/skills/ai-interrogation/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Claude Code skill · harryroger798/seo-agent-kit · skills/ai-interrogation/SKILL.md · MIT
     Source: https://github.com/harryroger798/seo-agent-kit/blob/HEAD/skills/ai-interrogation/SKILL.md
     Detected by: detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# AI Interrogation

## When to use

Use after the content, local, and citation work is published. Also use when a business says “ChatGPT doesn’t mention us” or “we are not in the AI answer.”

## The idea

Do not argue with the AI. Ask it why. Then fix the sources it trusted.

## Inputs

| Variable | Required | What it is |
|---|---|---|
| `{{brand}}` | yes | Exact business name |
| `{{category}}` | yes | The category a buyer searches |
| `{{city}}` | yes | The city or service area |
| `{{competitors}}` | yes | 2–5 named competitors |
| `{{engines}}` | yes | Perplexity, Google AI Mode, Claude, ChatGPT, Gemini, Copilot |
| `{{panel}}` | yes | 30 prompts from real buyer questions |

## The prompt panel

Run these in each engine, logged out, same location and language:

1. `best {{category}} in {{city}}`
2. `best {{category}} near {{landmark}}`
3. `is {{brand}} good for {{use_case}}`
4. `{{brand}} vs {{competitor}}`
5. `{{brand}} reviews`
6. `where is {{brand}} located`
7. `why is {{brand}} not recommended`
8. `what is the best {{category}} for {{audience}}`
9. `how much does {{category}} cost in {{city}}`
10. `is {{brand}} safe`

Add 20 more from the fan-out set.

## Process

1. Run the panel in each engine.
2. Log: brand mentioned, position, sentiment, sources cited, exact answer.
3. If the brand is missing or at the bottom:
   - Ask: “Why didn’t you include {{brand}}?”
   - Ask: “Where is {{brand}}?”
   - Ask: “What sources would change your answer?”
4. Read the sources the AI cites.
5. Fix those sources:
   - Directory cited → get listed there.
   - Reddit cited → participate honestly.
   - YouTube cited → make the video.
   - Review site cited → earn reviews.
   - Competitor page cited → build a better comparison.
   - Government site cited → cite it and align the facts.
6. Re-test the same prompts in 7 days.
7. Log the change in position and sentiment.

## Output

`ai-interrogation-log.csv` with:

```text
date,engine,prompt,brand_mentioned,position,sentiment,sources_cited,answer,why,fix,retest_date
```

Plus a one-page fix list: source, action, owner, date.

## Rules

- Do not argue with the AI or demand inclusion.
- Do not fake mentions, reviews, or Reddit posts.
- Do not spam the same prompt across engines.
- Ask for the sources; fix the sources.
- Use the exact brand name and location.
- One brand at a time.
- Re-test after 7 days, not after one hour.

## QA

- [ ] 10+ prompts per engine.
- [ ] Same location, language, and login state.
- [ ] Brand mention, position, and sentiment logged.
- [ ] Sources cited logged.
- [ ] “Why” and “where” answers logged.
- [ ] Fix list has owners and dates.
- [ ] Re-test scheduled.
- [ ] No fake mentions or reviews.

## References

- `prompts/14-ai-interrogation.md`
- `playbooks/ai-search.md`
- `checklists/ai-visibility.md`
- `templates/ai-interrogation-log.csv`
