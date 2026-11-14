---
name: "30x-seo-keywords"
description: "使用 DataForSEO API 进行全面关键词研究和分析。发现关键词机会、 分析搜索量和难度、找相关关键词、追踪排名、识别内容差距。 当用户说\"关键词\"、\"关键词研究\"、\"搜索量\"、\"关键词难度\"、 \"排名关键词\"、\"关键词建议\"或\"内容差距\"时使用。"
category: "keyword-research"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "norahe0304-art/30x-seo-cn"
repo_url: "https://github.com/norahe0304-art/30x-seo-cn"
source: "https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-keywords/SKILL.md"
raw_source: "https://raw.githubusercontent.com/norahe0304-art/30x-seo-cn/HEAD/skills/30x-seo-keywords/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Claude Code skill · norahe0304-art/30x-seo-cn · skills/30x-seo-keywords/SKILL.md · MIT
     Source: https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-keywords/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO 关键词分析

使用 DataForSEO API 通过直接 curl 调用进行全面关键词研究和分析。

## API 配置

凭据存储在 `~/.config/dataforseo/auth`（Base64 编码）。

```bash
# 读取认证令牌
AUTH=$(cat ~/.config/dataforseo/auth)
```

## 快速参考

| 命令 | 功能 |
|------|------|
| `/seo keywords research <种子词>` | 从种子关键词生成关键词建议 |
| `/seo keywords volume <关键词1, 关键词2, ...>` | 获取关键词搜索量 |
| `/seo keywords difficulty <关键词1, 关键词2, ...>` | 分析关键词难度分数 |
| `/seo keywords site <域名>` | 找出网站排名的关键词 |
| `/seo keywords gap <你的域名> <竞品>` | 找关键词机会 |
| `/seo keywords intent <关键词1, 关键词2, ...>` | 分析搜索意图 |
| `/seo keywords trending` | 找趋势搜索查询 |
| `/seo keywords history <关键词>` | 历史搜索量数据 |

## API 端点

### 关键词建议
```bash
curl -s -X POST "https://api.dataforseo.com/v3/dataforseo_labs/google/keyword_ideas/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{"keywords": ["种子关键词"], "location_name": "China", "language_code": "zh", "limit": 50}]'
```

### 关键词联想（自动补全）
```bash
curl -s -X POST "https://api.dataforseo.com/v3/dataforseo_labs/google/keyword_suggestions/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{"keyword": "种子关键词", "location_name": "China", "language_code": "zh", "limit": 50}]'
```

### 相关关键词
```bash
curl -s -X POST "https://api.dataforseo.com/v3/dataforseo_labs/google/related_keywords/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{"keyword": "种子关键词", "location_name": "China", "language_code": "zh", "limit": 50}]'
```

### 批量关键词难度
```bash
curl -s -X POST "https://api.dataforseo.com/v3/dataforseo_labs/bulk_keyword_difficulty/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{"keywords": ["关键词1", "关键词2", "关键词3"], "location_name": "China", "language_code": "zh"}]'
```

### 搜索量（Google Ads 数据）
```bash
curl -s -X POST "https://api.dataforseo.com/v3/keywords_data/google_ads/search_volume/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{"keywords": ["关键词1", "关键词2"], "location_code": 2156, "language_code": "zh"}]'
```

### 排名关键词（网站分析）
```bash
curl -s -X POST "https://api.dataforseo.com/v3/dataforseo_labs/google/ranked_keywords/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{"target": "example.com", "location_name": "China", "language_code": "zh", "limit": 100}]'
```

### 搜索意图
```bash
curl -s -X POST "https://api.dataforseo.com/v3/dataforseo_labs/google/search_intent/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{"keywords": ["关键词1", "关键词2"], "language_code": "zh"}]'
```

### 历史关键词数据
```bash
curl -s -X POST "https://api.dataforseo.com/v3/dataforseo_labs/google/historical_search_volume/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{"keywords": ["关键词"], "location_name": "China", "language_code": "zh"}]'
```

## 分析模式

### 1. 关键词研究（建议生成）

从种子关键词生成关键词建议：

```
输入：种子关键词（如 "咖啡机"）
输出：
- 相关关键词建议
- 每个关键词的搜索量
- CPC 和竞争数据
- 关键词难度分数
- 搜索意图分类
```

### 2. 搜索量分析

获取准确的搜索量数据：

```
输入：关键词列表
输出：
- 月搜索量
- 搜索量趋势（12个月）
- CPC 估算
- 竞争程度（0-1）
- 季节性模式
```

### 3. 关键词难度评估

分析排名难度：

```
输入：关键词列表
输出：
- 难度分数（0-100）
- SERP 特性出现情况
- 前 10 竞品强度
- 排名所需预估努力
```

**难度解读：**
- 0-20：简单（新网站可排名）
- 20-40：中等（需要一定权重）
- 40-60：困难（仅限成熟网站）
- 60-80：非常困难（需要高权重）
- 80-100：极其困难（仅限头部玩家）

### 4. 网站关键词分析

找出域名排名的关键词：

```
输入：域名（如 "example.com"）
输出：
- 所有排名关键词
- 每个关键词的位置
- 搜索量
- 流量估算
- 精选摘要出现情况
```

### 5. 搜索意图分析

分类关键词意图：

```
输入：关键词列表
输出：
- 每个关键词的意图类型：
  - 信息型（怎么、什么、为什么）
  - 导航型（品牌搜索）
  - 商业型（最好、评测、对比）
  - 交易型（购买、价格、优惠）
- 内容格式建议
```

**内容映射：**
| 意图 | 内容类型 |
|------|----------|
| 信息型 | 博客文章、指南、教程 |
| 导航型 | 落地页、关于页面 |
| 商业型 | 对比页、评测 |
| 交易型 | 产品页、定价页 |

## 关键词优先级框架

### 优先级矩阵

根据以下因素为每个关键词打分：

| 因素 | 权重 | 评分 |
|------|------|------|
| 搜索量 | 25% | 高(3)、中(2)、低(1) |
| 难度 | 30% | 简单(3)、中等(2)、困难(1) |
| 业务相关性 | 25% | 高(3)、中(2)、低(1) |
| 意图匹配 | 20% | 完美(3)、良好(2)、部分(1) |

### 快速优化识别

快速优化目标具备：
- 搜索量 > 100/月
- 难度 < 40
- 商业或交易意图
- 直接业务相关性

## 输出格式

### 关键词研究报告

```markdown
# 关键词研究：[种子关键词]

## 概述
- 找到的关键词总数：X
- 平均月搜索量：X
- 平均难度：X

## 热门机会（按优先级排序）

| 关键词 | 搜索量 | 难度 | 意图 | 优先级 |
|--------|--------|------|------|--------|
| [关键词1] | X | X | 信息 | 高 |
| [关键词2] | X | X | 交易 | 高 |

## 关键词集群

### 集群 1：[主题]
- 关键词 a（搜索量：X，难度：X）
- 关键词 b（搜索量：X，难度：X）

## 内容建议

### 即时行动（快速优化）
1. [关键词] -> 创建 [内容类型]
2. [关键词] -> 创建 [内容类型]
```

## 与其他 SEO 技能集成

- 使用 `seo-content` 为目标关键词创建内容
- 使用 `seo-backlinks` 为竞争性关键词建立权重
- 使用 `seo-serp` 追踪排名进展

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
