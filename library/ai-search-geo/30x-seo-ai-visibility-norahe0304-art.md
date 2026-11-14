---
name: "30x-seo-ai-visibility"
description: "监控品牌在 AI 平台的可见性（Google AI Overview、ChatGPT、Claude、Gemini、Perplexity）。 追踪 LLM 提及、分析 AI 生成的引用、识别 AI 搜索机会。 当用户说\"AI可见性\"、\"LLM提及\"、\"AI Overview\"、\"ChatGPT可见性\"、 \"AI搜索\"、\"生成式搜索\"、\"AI引用\"或\"品牌在AI中\"时使用。"
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "norahe0304-art/30x-seo-cn"
repo_url: "https://github.com/norahe0304-art/30x-seo-cn"
source: "https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-ai-visibility/SKILL.md"
raw_source: "https://raw.githubusercontent.com/norahe0304-art/30x-seo-cn/HEAD/skills/30x-seo-ai-visibility/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Claude Code skill · norahe0304-art/30x-seo-cn · skills/30x-seo-ai-visibility/SKILL.md · MIT
     Source: https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-ai-visibility/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO AI 可见性监控

使用 DataForSEO AI Optimization API 监控和分析品牌在 AI 驱动搜索和 LLM 平台的可见性。

## API 配置

凭据存储在 `~/.config/dataforseo/auth`（Base64 编码）。

```bash
AUTH=$(cat ~/.config/dataforseo/auth)
```

## 快速参考

| 命令 | 功能 |
|------|------|
| `/seo ai-visibility domain <域名>` | 检查域名在 AI 平台的提及情况 |
| `/seo ai-visibility keyword <关键词>` | 查看 AI 为某主题引用哪些域名 |
| `/seo ai-visibility top-domains <关键词>` | 某关键词被引用最多的域名 |
| `/seo ai-visibility top-pages <域名>` | 某域名被引用最多的页面 |
| `/seo ai-visibility compare <域名1> <域名2>` | 比较两个域名的 AI 可见性 |
| `/seo ai-visibility chatgpt <查询>` | 获取 ChatGPT 对查询的回答 |
| `/seo ai-visibility claude <查询>` | 获取 Claude 对查询的回答 |
| `/seo ai-visibility perplexity <查询>` | 获取 Perplexity 对查询的回答 |

## API 端点

### LLM 提及搜索（域名/关键词监控）
```bash
curl -s -X POST "https://api.dataforseo.com/v3/ai_optimization/llm_mentions/search/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{
    "target": [{"domain": "example.com"}],
    "platform": "google",
    "location_code": 2156,
    "language_code": "zh",
    "limit": 100
  }]'
```

### 关键词的热门域名
```bash
curl -s -X POST "https://api.dataforseo.com/v3/ai_optimization/llm_mentions/top_domains/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{
    "target": [{"keyword": "目标关键词"}],
    "platform": "google",
    "limit": 20
  }]'
```

### 域名的热门页面
```bash
curl -s -X POST "https://api.dataforseo.com/v3/ai_optimization/llm_mentions/top_pages/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{
    "target": [{"domain": "example.com"}],
    "platform": "google",
    "limit": 50
  }]'
```

### 聚合指标
```bash
curl -s -X POST "https://api.dataforseo.com/v3/ai_optimization/llm_mentions/aggregated_metrics/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{
    "target": [{"domain": "example.com"}],
    "platform": "google"
  }]'
```

### 跨平台聚合指标
```bash
curl -s -X POST "https://api.dataforseo.com/v3/ai_optimization/llm_mentions/cross_aggregated_metrics/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{
    "target": [{"domain": "example.com"}]
  }]'
```

### ChatGPT 回答
```bash
curl -s -X POST "https://api.dataforseo.com/v3/ai_optimization/chat_gpt/llm_responses/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{
    "prompt": "你的查询"
  }]'
```

### Claude 回答
```bash
curl -s -X POST "https://api.dataforseo.com/v3/ai_optimization/claude/llm_responses/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{
    "prompt": "你的查询"
  }]'
```

### Gemini 回答
```bash
curl -s -X POST "https://api.dataforseo.com/v3/ai_optimization/gemini/llm_responses/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{
    "prompt": "你的查询"
  }]'
```

### Perplexity 回答
```bash
curl -s -X POST "https://api.dataforseo.com/v3/ai_optimization/perplexity/llm_responses/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{
    "prompt": "你的查询"
  }]'
```

## 分析模式

### 1. 域名 AI 可见性审核

检查域名被 AI 引用的频率：

```
输入：域名（如 "example.com"）
输出：
- 跨平台的 AI 提及总数
- 被引用的问题/查询
- 引用位置（第一来源等）
- 随时间的趋势
- 竞品对比
```

### 2. 关键词 AI 格局

查看 AI 为某主题引用哪些域名：

```
输入：关键词（如 "最佳项目管理工具"）
输出：
- 被引用最多的域名
- 每个域名的引用频率
- 被引用的内容类型
- 差距分析（竞品被引用，你没有）
```

### 3. AI 回答分析

获取实际 AI 回答以理解上下文：

```
输入：查询
输出：
- 原始 AI 回答
- 引用的来源
- 你的品牌如何被提及（如果有）
- 情感/定位
```

### 4. 跨平台对比

比较在 AI 平台的可见性：

```
输入：域名
输出：
- Google AI Overview 可见性
- ChatGPT 引用率
- Claude 引用率
- Perplexity 引用率
- 平台特定洞察
```

## 关键指标

### AI 可见性分数
- **提及数量**：被 AI 引用的总次数
- **查询覆盖**：在相关查询中被引用的百分比
- **引用位置**：在 AI 回答中的平均位置
- **来源多样性**：被引用页面的种类

### 平台明细
| 平台 | 可用数据 |
|------|----------|
| Google AI Overview | 提及、查询、引用 |
| ChatGPT | 回答内容、品牌提及 |
| Claude | 回答内容、品牌提及 |
| Gemini | 回答内容、品牌提及 |
| Perplexity | 回答内容、来源 |

## 输出格式

### AI 可见性报告
```markdown
# AI 可见性：[域名]
生成时间：[日期]

## 概述
- AI 提及总数：X
- 出现的平台：Google AIO、ChatGPT、Claude
- 被引用最多的页面：X 个页面

## Google AI Overview
- 提及：X
- 热门查询：
  1. "[查询]" - 在位置 1 被引用
  2. "[查询]" - 在位置 3 被引用

## 平台对比
| 平台 | 提及 | 趋势 |
|------|------|------|
| Google AIO | X | +15% |
| ChatGPT | X | +8% |
| Claude | X | 新 |

## 被引用最多的内容
| 页面 | 提及 | 查询 |
|------|------|------|
| /guide | 45 | 23 |
| /blog/post | 32 | 18 |

## 建议
1. [发现的差距] - 为 [主题] 创建内容
2. [机会] - 优化 [页面] 以获得 AI 引用
```

### 关键词 AI 格局报告
```markdown
# AI 格局："[关键词]"

## 被引用最多的域名
| 排名 | 域名 | 提及 | 权重 |
|------|------|------|------|
| 1 | competitor1.com | 89 | 高 |
| 2 | competitor2.com | 67 | 高 |
| 3 | your-domain.com | 23 | 中 |

## 引用分析
- 每个回答的平均来源数：5
- 被引用的内容类型：
  - 指南/教程：45%
  - 产品页面：30%
  - 博客文章：25%

## 差距机会
竞品被引用但你没有的关键词：
1. [关键词] - competitor1 被引用
2. [关键词] - competitor2 被引用
```

## 战略意义

### 为什么 AI 可见性重要
- **零点击回答**：AI 提供直接答案，减少点击
- **权威信号**：被引用 = AI 信任你的内容
- **搜索的未来**：AI 搜索快速增长
- **品牌存在感**：被提及 = 被记住

### 优化策略

1. **结构化内容**：清晰的标题、列表、定义
2. **E-E-A-T 信号**：专业性、权威性、可信度
3. **全面覆盖**：回答相关问题
4. **新鲜内容**：定期更新表明相关性
5. **值得引用**：统计、研究、独特见解

### 危险信号
- 零 AI 提及（对 AI 搜索不可见）
- 竞品被大量引用，你没有
- 只在品牌查询中被引用
- 提及下降趋势

## 与其他技能集成

- 使用 `seo-content` 优化页面以获得 AI 引用
- 使用 `seo-keywords` 找 AI 提供答案的查询
- 使用 `seo-serp` 查看 SERP 中的 AI Overview 出现情况
- 使用 `seo-backlinks` 建立权重（与 AI 信任相关）

## 最佳实践

### 监控频率
| 检查 | 频率 |
|------|------|
| 域名提及 | 每周 |
| 竞品对比 | 两周一次 |
| 热门关键词格局 | 每月 |
| 跨平台审核 | 每月 |

### 行动触发
| 信号 | 行动 |
|------|------|
| 竞品被引用，你没有 | 创建/优化内容 |
| 提及下降 | 调查内容问题 |
| 新查询出现 | 创建内容机会 |
| 错误页面被引用 | 优化正确页面 |

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
