---
name: "30x-seo-redirects"
description: "重定向链审核与分析。检测重定向循环、长链、混合协议和孤立重定向。 当用户说\"重定向审核\"、\"301重定向\"、\"重定向链\"、\"重定向循环\" 或\"迁移重定向\"时使用。"
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "norahe0304-art/30x-seo-cn"
repo_url: "https://github.com/norahe0304-art/30x-seo-cn"
source: "https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-redirects/SKILL.md"
raw_source: "https://raw.githubusercontent.com/norahe0304-art/30x-seo-cn/HEAD/skills/30x-seo-redirects/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Claude Code skill · norahe0304-art/30x-seo-cn · skills/30x-seo-redirects/SKILL.md · MIT
     Source: https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-redirects/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# 重定向审核

## 这个技能做什么

分析网站重定向，找出损害 SEO 和用户体验的问题。

## 为什么重定向很重要

- **每次重定向 = 延迟**：301 重定向增加 100-500ms 延迟
- **链式重定向丢失链接权重**：Google 最多跟踪约 5 跳，然后停止
- **类型错误 = 丢失排名**：302（临时）不传递完整链接权重
- **循环 = 浪费抓取**：Googlebot 遇到循环后放弃，页面不被索引

## 检查类别

### 1. 重定向链
一个重定向指向另一个重定向，再指向另一个...

```
差：  /old → /old-2 → /old-3 → /final  (3跳，慢，丢失权重)
好：  /old → /final                     (1跳，快，完整权重)
```

**规则**：最多 1 次重定向跳转。超过 1 次 = 立即修复。

### 2. 重定向循环
页面 A 重定向到 B，B 又重定向回 A。无限循环。

```
差：  /page-a → /page-b → /page-a  (循环！)
```

**检测**：跟踪重定向最多 10 跳。如果相同 URL 出现两次 = 循环。

### 3. 重定向类型审核

| 类型 | 何时使用 | SEO 影响 |
|------|----------|----------|
| 301 | 永久迁移 | 传递约 95% 链接权重 |
| 302 | 临时（A/B 测试、维护） | 传递较少权重，永久使用会导致问题 |
| 307 | 临时（保留 HTTP 方法） | 同 302 |
| 308 | 永久（保留 HTTP 方法） | 同 301 |
| Meta refresh | SEO 永远不要用 | 体验差、慢、不推荐 |
| JavaScript 重定向 | 尽量避免 | Googlebot 可能不跟踪 |

**规则**：永久迁移必须使用 301 或 308。用 302 做永久迁移 = 错误。

### 4. 协议问题

```
差：  https://site.com → http://site.com  (降级，安全警告)
差：  http → https → http                 (混合，混乱)
好：  http://site.com → https://site.com  (升级，正确)
```

### 5. 域名一致性

```
差：  www.site.com → site.com → www.site.com  (不一致)
好：  选择一个（www 或非 www）并将所有其他重定向到它
```

### 6. 尾部斜杠一致性

```
差：  /page → /page/ → /page  (循环风险)
好：  选择一种模式（/page 或 /page/）并重定向所有其他
```

### 7. 迁移后孤立页面
网站迁移/重新设计后：
- 重定向到 404 或首页的旧 URL（应该指向等效的新页面）
- 没有重定向的重要页面（丢失所有链接权重）

### 8. 通过重定向的软 404
将已删除页面重定向到首页 = 软 404 惩罚风险。

```
差：  /deleted-product → /  (Google 视为软 404)
好：  /deleted-product → 410 Gone (或相关分类页面)
```

## 如何执行审核

### 方法 1：基于爬取（推荐）
使用爬虫工具：
1. 爬取整个网站
2. 跟踪所有内部链接
3. 记录重定向链

### 方法 2：基于日志（适用于大型网站）
分析服务器访问日志：
- 所有 301/302 响应
- 最多访问的重定向 URL
- 命中重定向的外部来源

### 方法 3：URL 列表
如果你有旧 URL 列表（来自迁移）：
1. 检查每个 URL
2. 记录最终目标
3. 标记链、循环、404

## 输出格式

### 重定向健康分数：XX/100

### 严重问题（立即修复）
| 问题类型 | 数量 | 示例 |
|----------|------|------|
| 重定向循环 | X | /a → /b → /a |
| 5+ 跳链 | X | /old → ... → /new |
| HTTPS 降级 | X | https → http |

### 高优先级（本周修复）
| 问题类型 | 数量 | 示例 |
|----------|------|------|
| 3-4 跳链 | X | /old → /mid → /new |
| 永久迁移用 302 | X | /old-page 302→ /new-page |
| 软 404 重定向 | X | /deleted → / |

### 中优先级（本月修复）
| 问题类型 | 数量 | 示例 |
|----------|------|------|
| 2 跳链 | X | /old → /mid → /new |
| 尾部斜杠不一致 | X | /page 和 /page/ 都存在 |

### 重定向地图
前 20 个最常访问的重定向及其链：
| 源 URL | 跳数 | 最终目标 | 类型 | 月访问量 |
|--------|------|----------|------|----------|

### 建议
1. [根据发现提供具体修复说明]

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
