---
name: "nextjs-seo-booster"
description: "A complete SEO toolkit for Next.js applications, including structured data (Schema.org), dynamic sitemap generation, and meta tags."
summary: "This skill provides a Next.js SEO toolkit including structured data, dynamic sitemaps, and meta tags."
category: "structured-data"
platforms: ["unspecified"]
platform_source: "none"
repo: "kennyzir/7deer_skills"
repo_url: "https://github.com/kennyzir/7deer_skills"
source: "https://github.com/kennyzir/7deer_skills/blob/HEAD/nextjs-seo-booster/SKILL.md"
raw_source: "https://raw.githubusercontent.com/kennyzir/7deer_skills/HEAD/nextjs-seo-booster/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 338
collected: "2026-11-11"
---

<!-- Unspecified skill · kennyzir/7deer_skills · nextjs-seo-booster/SKILL.md · MIT
     Source: https://github.com/kennyzir/7deer_skills/blob/HEAD/nextjs-seo-booster/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Next.js SEO Booster Protocol

**Role**: Full-Stack SEO Toolkit
**Core Function**: 提供开箱即用的 SEO 组件代码，加速开发流程。

## When This Skill Applies
*   当用户需要 **JSON-LD Schema** 代码实现时。
*   当用户需要生成 **Dynamic Sitemap** 代码时。
*   当 `nextjs-seo-foundations` 确定了标准，需要具体组件落地时。

## Instructions

本 Skill 提供了即插即用的代码组件。

### Prerequisites
使用此 Skill 前必须安装 Type Definitions:
```bash
npm install -D schema-dts
```

### 1. Structured Data Component
*   **Source**: `resources/StructuredData.tsx`
*   **Usage**: 这是一个通用的 Schema 注入组件。它不再依赖项目特定的配置，而是通过 Props 或环境变量工作。

### 2. Sitemap Generator
*   **Source**: `resources/sitemap.ts`
*   **Usage**: 复制到 `app/sitemap.ts` 并配置路由列表。

## Actions
*   使用 `copy-item` 将资源文件复制到项目 `components/` 目录。
