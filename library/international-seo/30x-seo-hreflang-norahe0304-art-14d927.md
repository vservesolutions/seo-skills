---
name: "30x-seo-hreflang"
description: "Hreflang 和国际 SEO 审核、验证和生成。检测常见错误，验证语言/地区代码， 生成正确的 hreflang 实现。当用户说\"hreflang\"、\"国际SEO\"、\"多语言\"、 \"多地区\"或\"语言标签\"时使用。"
category: "international-seo"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "norahe0304-art/30x-seo-cn"
repo_url: "https://github.com/norahe0304-art/30x-seo-cn"
source: "https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-hreflang/SKILL.md"
raw_source: "https://raw.githubusercontent.com/norahe0304-art/30x-seo-cn/HEAD/skills/30x-seo-hreflang/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Claude Code skill · norahe0304-art/30x-seo-cn · skills/30x-seo-hreflang/SKILL.md · MIT
     Source: https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-hreflang/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Hreflang 与国际 SEO

验证现有 hreflang 实现或为多语言和多地区网站生成正确的 hreflang 标签。
支持 HTML、HTTP 响应头和 XML 站点地图实现。

## 验证检查

### 1. 自引用标签
- 每个页面必须包含指向自身的 hreflang 标签
- 自引用 URL 必须与页面的 canonical URL 完全匹配
- 缺少自引用标签会导致 Google 忽略整个 hreflang 集

### 2. 返回标签
- 如果页面 A 用 hreflang 链接到页面 B，页面 B 必须链接回页面 A
- 每个 hreflang 关系必须是双向的（A→B 和 B→A）
- 缺少返回标签会使两个页面的 hreflang 信号失效
- 检查所有语言版本是否互相引用（完整网状）

### 3. x-default 标签
- 必需：指定未匹配语言/地区的回退页面
- 通常指向语言选择页面或英文版本
- 每组备选项只有一个 x-default
- 必须从所有其他语言版本获得返回标签

### 4. 语言代码验证
- 必须使用 ISO 639-1 两字母代码（如 `en`、`fr`、`de`、`ja`）
- 常见错误：
  - `eng` 而非 `en`（ISO 639-2，对 hreflang 无效）
  - `jp` 而非 `ja`（日语的错误代码）
  - `zh` 没有地区限定符（模糊 — 使用 `zh-Hans` 或 `zh-Hant`）

### 5. 地区代码验证
- 可选的地区限定符使用 ISO 3166-1 Alpha-2（如 `en-US`、`en-GB`、`pt-BR`）
- 格式：`language-REGION`（小写语言，大写地区）
- 常见错误：
  - `en-uk` 而非 `en-GB`（UK 不是有效的 ISO 3166-1 代码）
  - `es-LA`（拉丁美洲不是国家 — 使用具体国家）
  - 没有语言前缀的地区

### 6. Canonical URL 对齐
- Hreflang 标签只能出现在 canonical URL 上
- 如果页面有 `rel=canonical` 指向其他地方，该页面上的 hreflang 被忽略
- Canonical URL 和 hreflang URL 必须完全匹配（包括尾部斜杠）
- 非 canonical 页面不应出现在任何 hreflang 集中

### 7. 协议一致性
- hreflang 集中的所有 URL 必须使用相同协议（HTTPS 或 HTTP）
- hreflang 集中混合 HTTP/HTTPS 导致验证失败
- HTTPS 迁移后，更新所有 hreflang 标签为 HTTPS

### 8. 跨域支持
- Hreflang 可跨不同域工作（如 example.com 和 example.de）
- 跨域 hreflang 需要两个域都有返回标签
- 验证两个域都在 Google Search Console 中验证
- 跨域设置推荐使用基于站点地图的实现

## 常见错误

| 问题 | 严重性 | 修复 |
|------|--------|------|
| 缺少自引用标签 | 严重 | 添加指向同一页面 URL 的 hreflang |
| 缺少返回标签（A→B 但没有 B→A） | 严重 | 在所有备选项上添加匹配的返回标签 |
| 缺少 x-default | 高 | 添加指向回退/选择页面的 x-default |
| 无效语言代码（如 `eng`） | 高 | 使用 ISO 639-1 两字母代码 |
| 无效地区代码（如 `en-uk`） | 高 | 使用 ISO 3166-1 Alpha-2 代码 |
| 非 canonical URL 上的 hreflang | 高 | 只在 canonical URL 上放置 hreflang |
| URL 中 HTTP/HTTPS 不匹配 | 中 | 统一所有 URL 为 HTTPS |
| 尾部斜杠不一致 | 中 | 精确匹配 canonical URL 格式 |
| HTML 和站点地图中都有 hreflang | 低 | 选择一种方法 — 大型网站推荐站点地图 |
| 需要时语言没有地区 | 低 | 为地理定向内容添加地区限定符 |

## 实现方法

### 方法 1：HTML Link 标签
最适合：每页语言/地区变体 <50 的网站。

```html
<link rel="alternate" hreflang="en-US" href="https://example.com/page" />
<link rel="alternate" hreflang="en-GB" href="https://example.co.uk/page" />
<link rel="alternate" hreflang="fr" href="https://example.com/fr/page" />
<link rel="alternate" hreflang="x-default" href="https://example.com/page" />
```

放在 `<head>` 部分。每个页面必须包含所有备选项包括自身。

### 方法 2：HTTP 响应头
最适合：非 HTML 文件（PDF、文档）。

```
Link: <https://example.com/page>; rel="alternate"; hreflang="en-US",
      <https://example.com/fr/page>; rel="alternate"; hreflang="fr",
      <https://example.com/page>; rel="alternate"; hreflang="x-default"
```

通过服务器配置或 CDN 规则设置。

### 方法 3：XML 站点地图（大型网站推荐）
最适合：有许多语言变体、跨域设置或 50+ 页面的网站。

参见下方 Hreflang 站点地图生成部分。

### 方法比较
| 方法 | 最适合 | 优点 | 缺点 |
|------|--------|------|------|
| HTML link 标签 | 小型网站（<50 变体） | 易于实现，源码可见 | `<head>` 膨胀，规模化难维护 |
| HTTP 响应头 | 非 HTML 文件 | 适用于 PDF、图片 | 服务器配置复杂，HTML 中不可见 |
| XML 站点地图 | 大型网站、跨域 | 可扩展，集中管理 | 页面上不可见，需要站点地图维护 |

## Hreflang 生成

### 流程
1. **检测语言**：扫描网站的语言指示器（URL 路径、子域、TLD、HTML lang 属性）
2. **映射等效页面**：匹配跨语言/地区的对应页面
3. **验证语言代码**：对照 ISO 639-1 和 ISO 3166-1 验证所有代码
4. **生成标签**：为每个页面创建 hreflang 标签包括自引用
5. **验证返回标签**：确认所有关系是双向的
6. **添加 x-default**：为每组页面设置回退
7. **输出**：生成实现代码（HTML、HTTP 响应头或站点地图 XML）

## Hreflang 站点地图生成

### 带 Hreflang 的站点地图
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://example.com/page</loc>
    <xhtml:link rel="alternate" hreflang="en-US" href="https://example.com/page" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://example.com/fr/page" />
    <xhtml:link rel="alternate" hreflang="de" href="https://example.de/page" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://example.com/page" />
  </url>
  <url>
    <loc>https://example.com/fr/page</loc>
    <xhtml:link rel="alternate" hreflang="en-US" href="https://example.com/page" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://example.com/fr/page" />
    <xhtml:link rel="alternate" hreflang="de" href="https://example.de/page" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://example.com/page" />
  </url>
</urlset>
```

关键规则：
- 包含 `xmlns:xhtml` 命名空间声明
- 每个 `<url>` 条目必须包含所有语言备选项（包括自身）
- 每个备选项必须作为单独的 `<url>` 条目，有自己完整的集合
- 每个站点地图文件在 50,000 URL 处拆分

## 输出

### Hreflang 验证报告

#### 摘要
- 扫描的页面总数：XX
- 检测到的语言变体：XX
- 发现的问题：XX（严重：X，高：X，中：X，低：X）

#### 验证结果
| 语言 | URL | 自引用 | 返回标签 | x-default | 状态 |
|------|-----|--------|----------|-----------|------|
| en-US | https://... | ✅ | ✅ | ✅ | ✅ |
| fr | https://... | ❌ | ⚠️ | ✅ | ❌ |
| de | https://... | ✅ | ❌ | ✅ | ❌ |

### 生成的 Hreflang 标签
- HTML `<link>` 标签（如果选择 HTML 方法）
- HTTP 响应头值（如果选择响应头方法）
- `hreflang-sitemap.xml`（如果选择站点地图方法）

### 建议
- 需要添加的缺失实现
- 需要修复的错误代码
- 方法迁移建议（如 HTML → 站点地图以便扩展）

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
