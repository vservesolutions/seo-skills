---
name: "30x-seo-sitemap"
description: "分析现有XML站点地图或使用行业模板生成新的站点地图。 验证格式、URL和结构。当用户说\"站点地图\"、\"生成站点地图\"、 \"站点地图问题\"或\"XML站点地图\"时使用。"
category: "local-seo"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "norahe0304-art/30x-seo-cn"
repo_url: "https://github.com/norahe0304-art/30x-seo-cn"
source: "https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-sitemap/SKILL.md"
raw_source: "https://raw.githubusercontent.com/norahe0304-art/30x-seo-cn/HEAD/skills/30x-seo-sitemap/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Claude Code skill · norahe0304-art/30x-seo-cn · skills/30x-seo-sitemap/SKILL.md · MIT
     Source: https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-sitemap/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# 站点地图分析与生成

## 模式 1：分析现有站点地图

### 验证检查
- 有效的 XML 格式
- 每个文件 URL 数量 <50,000（协议限制）
- 所有 URL 返回 HTTP 200
- `<lastmod>` 日期准确（不是全部相同）
- 无已弃用标签：`<priority>` 和 `<changefreq>` 被 Google 忽略
- 站点地图在 robots.txt 中引用
- 比较爬取的页面与站点地图 — 标记缺失的页面

### 质量信号
- 如果 >50k URL，使用站点地图索引文件
- 按内容类型拆分（页面、文章、图片、视频）
- 站点地图中无非规范 URL
- 站点地图中无 noindex URL
- 站点地图中无重定向 URL
- 仅 HTTPS URL（无 HTTP）

### 常见问题
| 问题 | 严重性 | 修复 |
|------|--------|------|
| 单个文件 >50k URL | 严重 | 使用站点地图索引拆分 |
| 非 200 URL | 高 | 移除或修复断链 |
| 包含 noindex URL | 高 | 从站点地图中移除 |
| 包含重定向 URL | 中 | 更新为最终 URL |
| lastmod 全部相同 | 低 | 使用实际修改日期 |
| 使用 priority/changefreq | 信息 | 可以移除（Google 忽略） |

## 模式 2：生成新站点地图

### 流程
1. 询问业务类型（或从现有网站自动检测）
2. 从 `assets/` 目录加载行业模板
3. 与用户交互式规划结构
4. 应用质量门控：
   - ⚠️ 警告：30+ 地区页面时（要求 60%+ 独特内容）
   - 🛑 硬停止：50+ 地区页面时（需要理由说明）
5. 生成有效的 XML 输出
6. 在 50k URL 处使用站点地图索引拆分
7. 生成 STRUCTURE.md 文档

### 安全的程序化页面（可规模化）
✅ 集成页面（有真实的设置文档）
✅ 模板/工具页面（有可下载内容）
✅ 术语表页面（200+ 字定义）
✅ 产品页面（独特规格、评价）
✅ 用户个人资料页面（用户生成内容）

### 惩罚风险（避免规模化）
❌ 只替换城市名的地区页面
❌ 没有行业特定价值的 "最佳[工具]适用于[行业]"
❌ 没有真实比较数据的 "[竞争对手]替代方案"
❌ 没有人工审核和独特价值的 AI 生成页面

## 站点地图格式

### 标准站点地图
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/page</loc>
    <lastmod>2026-02-07</lastmod>
  </url>
</urlset>
```

### 站点地图索引（用于 >50k URL）
```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://example.com/sitemap-pages.xml</loc>
    <lastmod>2026-02-07</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://example.com/sitemap-posts.xml</loc>
    <lastmod>2026-02-07</lastmod>
  </sitemap>
</sitemapindex>
```

## 输出

### 分析输出
- `VALIDATION-REPORT.md` — 分析结果
- 按严重性排列的问题列表
- 建议

### 生成输出
- `sitemap.xml`（或带索引的拆分文件）
- `STRUCTURE.md` — 网站架构文档
- URL 数量和组织摘要

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
