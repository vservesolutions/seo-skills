---
name: "30x-seo-backlinks"
description: "使用 DataForSEO API 进行全面外链分析。分析外链概况、 寻找链接建设机会、检测有毒链接、与竞争对手比较、识别链接差距。 当用户说\"外链\"、\"链接建设\"、\"引用域\"、\"链接概况\"、\"有毒链接\"、 \"链接差距\"、\"竞品链接\"或\"域名权重\"时使用。"
category: "link-building"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "norahe0304-art/30x-seo-cn"
repo_url: "https://github.com/norahe0304-art/30x-seo-cn"
source: "https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-backlinks/SKILL.md"
raw_source: "https://raw.githubusercontent.com/norahe0304-art/30x-seo-cn/HEAD/skills/30x-seo-backlinks/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Claude Code skill · norahe0304-art/30x-seo-cn · skills/30x-seo-backlinks/SKILL.md · MIT
     Source: https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-backlinks/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO 外链分析

使用 DataForSEO API 通过直接 curl 调用进行全面外链分析和链接建设情报收集。

## API 配置

凭据存储在 `~/.config/dataforseo/auth`（Base64 编码）。

```bash
# 读取认证令牌
AUTH=$(cat ~/.config/dataforseo/auth)
```

## 快速参考

| 命令 | 功能 |
|------|------|
| `/seo backlinks profile <域名>` | 完整外链概况分析 |
| `/seo backlinks compare <域名1> <域名2>` | 比较两个域名的外链概况 |
| `/seo backlinks gap <你的域名> <竞品1> [竞品2]` | 寻找链接差距机会 |
| `/seo backlinks toxic <域名>` | 识别潜在有毒/垃圾链接 |
| `/seo backlinks anchors <域名>` | 分析锚文本分布 |
| `/seo backlinks trend <域名>` | 新增/丢失外链趋势 |
| `/seo backlinks competitors <域名>` | 按外链重叠找竞争对手 |

## API 端点

### 外链摘要
```bash
curl -s -X POST "https://api.dataforseo.com/v3/backlinks/summary/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{"target": "example.com"}]'
```

### 获取外链
```bash
curl -s -X POST "https://api.dataforseo.com/v3/backlinks/backlinks/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{"target": "example.com", "limit": 100, "order_by": ["rank,desc"]}]'
```

### 锚文本分析
```bash
curl -s -X POST "https://api.dataforseo.com/v3/backlinks/anchors/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{"target": "example.com", "limit": 100}]'
```

### 批量外链（多域名）
```bash
curl -s -X POST "https://api.dataforseo.com/v3/backlinks/bulk_backlinks/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{"targets": ["domain1.com", "domain2.com", "domain3.com"]}]'
```

### 批量引用域
```bash
curl -s -X POST "https://api.dataforseo.com/v3/backlinks/bulk_referring_domains/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{"targets": ["domain1.com", "domain2.com"]}]'
```

### 批量排名（域名权重）
```bash
curl -s -X POST "https://api.dataforseo.com/v3/backlinks/bulk_ranks/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{"targets": ["domain1.com", "domain2.com"]}]'
```

### 批量垃圾分数
```bash
curl -s -X POST "https://api.dataforseo.com/v3/backlinks/bulk_spam_score/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{"targets": ["domain1.com", "domain2.com"]}]'
```

### 域名交集（链接差距）
```bash
curl -s -X POST "https://api.dataforseo.com/v3/backlinks/domain_intersection/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{"targets": {"1": "competitor1.com", "2": "competitor2.com"}, "exclude_targets": ["your-domain.com"], "limit": 100}]'
```

### 按外链找竞争对手
```bash
curl -s -X POST "https://api.dataforseo.com/v3/backlinks/competitors/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{"target": "example.com", "limit": 20}]'
```

### 新增/丢失外链时间线
```bash
curl -s -X POST "https://api.dataforseo.com/v3/backlinks/timeseries_new_lost_summary/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{"target": "example.com", "date_from": "2024-01-01"}]'
```

### 引用域
```bash
curl -s -X POST "https://api.dataforseo.com/v3/backlinks/referring_domains/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{"target": "example.com", "limit": 100, "order_by": ["rank,desc"]}]'
```

## 分析模式

### 1. 外链概况分析

获取域名外链概况的全面概述：

```
输入：域名（如 "example.com"）
输出：
- 外链总数
- 引用域数量
- 域名排名（0-1000）
- 垃圾分数（0-100）
- Dofollow vs nofollow 比例
- 顶级引用域
- 锚文本分布
- 新增/丢失链接趋势
```

### 2. 竞品对比

将你的外链概况与竞争对手比较：

```
输入：[你的域名, 竞品1, 竞品2, ...]
输出：
- 并排指标对比
- 每个网站的独特引用域
- 共享引用域
- 差距机会
```

### 3. 链接差距分析

找出链接到竞品但不链接到你的域名：

```
输入：[你的域名, 竞品1, 竞品2]
输出：
- 链接到竞品但不链到你的域名
- 按权重/相关性排序
- 优先外联列表
```

这是链接建设策略中最有价值的分析。

### 4. 有毒链接检测

识别潜在有害的外链：

```
输入：域名
输出：
- 来自高垃圾分数域名的链接
- 可疑的锚文本模式
- 低质量引用域
- 拒绝候选名单
```

### 5. 锚文本分析

分析锚文本分布：

```
输入：域名
输出：
- 锚文本分布图
- 品牌 vs 关键词 vs 通用比例
- 过度优化锚文本警告
- 自然 vs 非自然模式
```

**健康分布指南：**
- 品牌锚文本：30-40%
- 裸链接 URL：20-30%
- 通用（点击这里等）：15-20%
- 关键词丰富：10-15%（超过 20% = 警告）
- LSI/相关：5-10%

## 解读指南

### 域名排名（0-1000）
- 0-100：低权重
- 100-300：中等权重
- 300-500：良好权重
- 500-700：强权重
- 700-1000：优秀权重

### 垃圾分数（0-100）
- 0-10：干净概况
- 10-30：低风险
- 30-60：中等风险（需要审核）
- 60-100：高风险（建议清理）

### 危险信号
- 外链突然激增（可能是负面 SEO）
- 来自独特域名的高比例 nofollow 链接
- 锚文本被完全匹配关键词主导
- 来自不相关行业/主题的链接
- 来自相同 IP 范围或 C 类的许多链接

## 输出格式

### 摘要报告
```markdown
# 外链概况：[域名]

## 概述
- 外链总数：X
- 引用域：X
- 域名排名：X/1000
- 垃圾分数：X/100

## 健康评估
[OK/警告/差] 锚文本分布
[OK/警告/差] 引用域质量
[OK/警告/差] 链接速度
[OK/警告/差] 垃圾指标

## 顶级引用域
1. [域名] - X 外链，排名 Y
2. ...

## 锚文本分布
[图表或表格]

## 建议
1. [优先行动]
2. [次要行动]
```

## 链接建设优先级

从链接差距分析生成外联列表时：

**第 1 层（高优先级）**
- 域名排名 > 500
- 与你的行业相关
- 编辑链接（非目录）

**第 2 层（中优先级）**
- 域名排名 200-500
- 相关行业或主题
- 资源页、汇总

**第 3 层（低优先级）**
- 域名排名 < 200
- 目录、论坛
- 评论区

## 与其他 SEO 技能集成

- 使用 `seo-content` 分析吸引外链的页面
- 使用 `seo-keywords` 找可链接内容的关键词
- 使用 `seo-serp` 追踪新链接的排名影响

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
