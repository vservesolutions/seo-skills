---
name: "gsc-sitemaps"
description: "管理 Google Search Console 中的站点地图，包括列出、查看详情和提交新的站点地图。"
category: "local-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "ccccchuck/gsc-analytics-skill"
repo_url: "https://github.com/ccccchuck/gsc-analytics-skill"
source: "https://github.com/ccccchuck/gsc-analytics-skill/blob/HEAD/skills/gsc-sitemaps/SKILL.md"
raw_source: "https://raw.githubusercontent.com/ccccchuck/gsc-analytics-skill/HEAD/skills/gsc-sitemaps/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-12"
---

<!-- Unspecified skill · ccccchuck/gsc-analytics-skill · skills/gsc-sitemaps/SKILL.md · MIT
     Source: https://github.com/ccccchuck/gsc-analytics-skill/blob/HEAD/skills/gsc-sitemaps/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# GSC 站点地图管理

## 何时使用
- 用户想查看站点地图的状态
- 需要提交新的站点地图
- 排查站点地图中的错误和警告
- 了解索引覆盖率

## 可用脚本

### 1. 列出所有站点地图
```bash
python3 .agents/skills/gsc-analytics/scripts/list_sitemaps.py
```
显示所有站点地图的状态、已提交 URL 数、已索引 URL 数和覆盖率。

### 2. 站点地图详情
```bash
python3 .agents/skills/gsc-analytics/scripts/get_sitemap_details.py \
  --sitemap "https://www.example.com/sitemap.xml" --output table
```
获取指定站点地图的详细信息，包含错误/警告的解读和优化建议。

### 3. 提交站点地图
```bash
python3 .agents/skills/gsc-analytics/scripts/submit_sitemap.py \
  --sitemap "https://www.example.com/sitemap.xml"
```
提交新的站点地图。Google 通常需要几小时到几天来处理。

## 注意事项
1. 所有脚本在**项目根目录**下运行
2. 提交站点地图不保证所有 URL 都会被索引
3. 如果索引覆盖率低于 50%，可能存在内容质量问题
