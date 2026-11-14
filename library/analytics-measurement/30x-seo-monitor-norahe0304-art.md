---
name: "30x-seo-monitor"
description: "使用 Google Search Console 数据监控网站 SEO 表现。 追踪关键词排名、点击、展示、CTR 和位置变化。 识别表现最佳的页面、下滑的关键词和新排名机会。 当用户说\"监控我的网站\"、\"我的排名\"、\"GSC数据\"、\"Search Console\"、 \"我的关键词\"、\"位置变化\"、\"CTR\"、\"展示\"或\"点击\"时使用。"
category: "analytics-measurement"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "norahe0304-art/30x-seo-cn"
repo_url: "https://github.com/norahe0304-art/30x-seo-cn"
source: "https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-monitor/SKILL.md"
raw_source: "https://raw.githubusercontent.com/norahe0304-art/30x-seo-cn/HEAD/skills/30x-seo-monitor/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Claude Code skill · norahe0304-art/30x-seo-cn · skills/30x-seo-monitor/SKILL.md · MIT
     Source: https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-monitor/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO 监控 (Google Search Console)

使用 Google Search Console API 监控网站 SEO 表现。

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md

## 前提条件

需要 `gws` CLI 并有 Google Search Console 访问权限，或 GSC MCP 服务器。

### 选项 1：gws CLI

```bash
gws auth status
gws auth login  # 如需要
```

### 选项 2：GSC MCP 服务器

在 `~/.config/claude/mcp.json` 中配置：

```json
{
  "mcpServers": {
    "google-search-console": {
      "command": "npx",
      "args": ["-y", "mcp-server-gsc"],
      "env": {
        "GOOGLE_CREDENTIALS_PATH": "/path/to/credentials.json"
      }
    }
  }
}
```

---

## 命令

| 命令 | 功能 |
|------|------|
| `/seo monitor overview` | 仪表板：热门查询、页面、CTR、位置 |
| `/seo monitor keywords` | 所有排名关键词及指标 |
| `/seo monitor pages` | 表现最佳的页面 |
| `/seo monitor changes` | 位置变化（上升/下降） |
| `/seo monitor opportunities` | 高展示、低 CTR 关键词 |

---

## 指标说明

| 指标 | 含义 |
|------|------|
| **点击** | 用户点击了你的结果 |
| **展示** | 你的结果在搜索中出现 |
| **CTR** | 点击率（点击 / 展示） |
| **位置** | 平均排名位置（1 = 第一） |

---

## 分析工作流

### 1. 每周表现检查

```
/seo monitor overview
```

输出：
- 总点击、展示、CTR、平均位置（7天）
- 按点击排名前 10 查询
- 按点击排名前 10 页面
- 周环比对比

### 2. 关键词排名报告

```
/seo monitor keywords
```

输出：
- 所有排名关键词
- 每个关键词的位置、点击、展示、CTR
- 排序方式：位置、点击、展示或 CTR

### 3. 位置变化检测

```
/seo monitor changes
```

输出：
- 位置上升的关键词
- 位置下降的关键词
- 新关键词（刚开始排名）
- 丢失的关键词（跌出前 100）

### 4. 快速优化机会

```
/seo monitor opportunities
```

找出符合以下条件的关键词：
- 高展示（>1000/月）
- 低 CTR（<3%）
- 位置 4-20（第 1-2 页）

这些是"快速优化"机会 — 改进标题/描述以提升 CTR。

---

## 日期范围

默认：最近 7 天

指定自定义范围：
```
/seo monitor overview --days 30
/seo monitor keywords --days 90
```

---

## 输出格式

报告包含：
1. **摘要表格** — 关键指标一览
2. **详细数据** — 完整关键词/页面列表
3. **行动项** — 具体建议

---

## 与其他技能集成

| 场景 | 下一步 |
|------|--------|
| 发现下滑的关键词 | → `seo-content-decay` 分析页面 |
| 第 1 页低 CTR | → `seo-page` 优化标题/meta |
| 疑似关键词蚕食 | → `seo-cannibalization` 检查 |
| 新关键词机会 | → `seo-content-brief` 规划内容 |

---

## 限制

- **仅限已验证网站** — GSC 只显示你拥有的网站数据
- **数据延迟** — GSC 数据延迟 2-3 天
- **最多 90 天** — 历史数据限于约 16 个月，但 API 通常 90 天
- **抽样数据** — 高流量网站可能显示抽样数据
