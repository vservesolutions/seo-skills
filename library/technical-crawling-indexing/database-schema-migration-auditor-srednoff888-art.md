---
name: "database-schema-migration-auditor"
description: "Review a database migration for data loss, lock duration, backward compatibility, backfill behavior, and rollback feasibility."
category: "technical-crawling-indexing"
platforms: ["unspecified"]
platform_source: "none"
repo: "srednoff888-art/srednoff-os"
repo_url: "https://github.com/srednoff888-art/srednoff-os"
source: "https://github.com/srednoff888-art/srednoff-os/blob/HEAD/.codex/skills/database-schema-migration-auditor/SKILL.md"
raw_source: "https://raw.githubusercontent.com/srednoff888-art/srednoff-os/HEAD/.codex/skills/database-schema-migration-auditor/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Unspecified skill · srednoff888-art/srednoff-os · .codex/skills/database-schema-migration-auditor/SKILL.md · MIT
     Source: https://github.com/srednoff888-art/srednoff-os/blob/HEAD/.codex/skills/database-schema-migration-auditor/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Database Schema Migration Auditor
Read the migration and its callers; identify affected tables, current versions, data volume, and concurrent writers.
## Decisions
- Prefer expand/migrate/contract sequencing for rolling deployments.
- Review generated drops/renames manually. Estimate locks and isolate long backfills from schema changes.
- Do not rewrite a migration already applied to shared environments.
## Acceptance
Rehearse against a scratch database with realistic constraints; test upgrade and rollback where reversible. Report irreversibility, lock assumptions, and untested production volume.
