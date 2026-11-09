---
name: "schema-injector"
description: "Inject final JSON-LD @graph into the published post's <head> (via Yoast MU-plugin OR direct REST). Runs after wp publish."
summary: "This skill injects generated JSON-LD structured data into published website headers."
category: "structured-data"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "XuanRanL/loamwright-SEO-Skill"
repo_url: "https://github.com/XuanRanL/loamwright-SEO-Skill"
source: "https://github.com/XuanRanL/loamwright-SEO-Skill/blob/HEAD/subskills/publish/schema-injector/SKILL.md"
raw_source: "https://raw.githubusercontent.com/XuanRanL/loamwright-SEO-Skill/HEAD/subskills/publish/schema-injector/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "Apache-2.0"
stars: 52
collected: "2026-11-09"
---

<!-- Claude Code skill · XuanRanL/loamwright-SEO-Skill · subskills/publish/schema-injector/SKILL.md · Apache-2.0
     Source: https://github.com/XuanRanL/loamwright-SEO-Skill/blob/HEAD/subskills/publish/schema-injector/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Schema Injector

## Workflow
```
1. Read workspace/{task}/schema.json
2. POST /wp-json/yoast/v1/posts/{post_id} with schema fields if MU-plugin supports
3. Or: POST custom_fields to set `_genesis_schema` / similar plugin field
4. Verify by fetching post and inspecting <head> JSON-LD
```

## Validation
Run `scripts.validate.schema_validator` against retrieved post HTML:
- No deprecated types
- All required fields present
- ISO 8601 dates

## Note
For most cases, schema-generator output gets included in post.content (inline `<script>` tag).
Schema-injector is needed when you want it in `<head>` instead of body.
