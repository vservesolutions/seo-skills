---
name: "30x-seo-serp"
description: "使用 DataForSEO 追踪 SERP 排名、监控位置变化、分析 SERP 特性、 识别排名机会。作为 Google Search Console 排名数据的替代选择。 当用户说\"排名\"、\"SERP追踪\"、\"位置监控\"、\"排名追踪\"、 \"关键词位置\"或\"SERP分析\"时使用。"
category: "keyword-research"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "norahe0304-art/30x-seo-cn"
repo_url: "https://github.com/norahe0304-art/30x-seo-cn"
source: "https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-serp/SKILL.md"
raw_source: "https://raw.githubusercontent.com/norahe0304-art/30x-seo-cn/HEAD/skills/30x-seo-serp/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Claude Code skill · norahe0304-art/30x-seo-cn · skills/30x-seo-serp/SKILL.md · MIT
     Source: https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-serp/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO SERP 追踪

使用 DataForSEO API 通过直接 curl 调用追踪排名、监控 SERP 变化、分析搜索结果特性。

## API 配置

凭据存储在 `~/.config/dataforseo/auth`（Base64 编码）。

```bash
# 读取认证令牌
AUTH=$(cat ~/.config/dataforseo/auth)
```

## 快速参考

| 命令 | 功能 |
|------|------|
| `/seo serp rank <域名>` | 获取域名排名的所有关键词 |
| `/seo serp check <关键词>` | 关键词实时 SERP 检查 |
| `/seo serp history <关键词>` | 历史 SERP 变化 |
| `/seo serp features <关键词>` | 分析存在的 SERP 特性 |
| `/seo serp competitors <关键词>` | 谁在排名这个关键词 |
| `/seo serp overview <域名>` | 域名排名概述 |

## API 端点

### 实时 SERP 检查
```bash
curl -s -X POST "https://api.dataforseo.com/v3/serp/google/organic/live/advanced" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{"keyword": "目标关键词", "location_name": "China", "language_code": "zh", "depth": 100}]'
```

### 域名排名概述
```bash
curl -s -X POST "https://api.dataforseo.com/v3/dataforseo_labs/google/domain_rank_overview/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{"target": "example.com", "location_name": "China", "language_code": "zh"}]'
```

### 排名关键词（网站排名）
```bash
curl -s -X POST "https://api.dataforseo.com/v3/dataforseo_labs/google/ranked_keywords/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{"target": "example.com", "location_name": "China", "language_code": "zh", "limit": 100}]'
```

### 历史 SERP
```bash
curl -s -X POST "https://api.dataforseo.com/v3/dataforseo_labs/google/historical_serps/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{"keyword": "目标关键词", "location_name": "China", "language_code": "zh"}]'
```

### SERP 竞争对手
```bash
curl -s -X POST "https://api.dataforseo.com/v3/dataforseo_labs/google/serp_competitors/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{"keywords": ["关键词1", "关键词2", "关键词3"], "location_name": "China", "language_code": "zh"}]'
```

### 关键词概述
```bash
curl -s -X POST "https://api.dataforseo.com/v3/dataforseo_labs/google/keyword_overview/live" \
  -H "Authorization: Basic $(cat ~/.config/dataforseo/auth)" \
  -H "Content-Type: application/json" \
  -d '[{"keywords": ["关键词1", "关键词2"], "location_name": "China", "language_code": "zh"}]'
```

## 分析模式

### 1. 域名排名概述

获取域名的完整排名概况。

```
输入：域名（如 "example.com"）
输出：
- 排名关键词总数
- 位置分布（1-3, 4-10, 11-20, 21-100）
- 预估自然流量
- 排名最高的关键词
- SERP 特性出现情况
```

**位置分布图：**
```
位置 1-3:   ############ 45 个关键词
位置 4-10:  #################### 89 个关键词
位置 11-20: ########## 42 个关键词
位置 21-50: ######## 35 个关键词
位置 51+:   #### 18 个关键词
```

### 2. 实时 SERP 检查

获取任意关键词的当前 SERP。

```
输入：关键词，位置（可选）
输出：
- 前 10/20/100 结果
- 存在的 SERP 特性
- 自然结果上下方的广告
- 相关搜索
- 相关问题
```

**SERP 特性检测：**
| 特性 | SEO 影响 |
|------|----------|
| AI 概览 | 降低自然 CTR |
| 精选摘要 | 高可见性机会 |
| 相关问题 | 内容扩展信号 |
| 本地结果 | 需要本地 SEO |
| 图片包 | 图片优化机会 |
| 视频轮播 | 视频内容机会 |
| 知识面板 | 品牌权威信号 |

### 3. 历史 SERP 分析

追踪 SERP 随时间的变化。

```
输入：关键词
输出：
- 随时间的 SERP 快照
- 每个域名的位置变化
- 特性出现/消失
- 波动性评估
```

**用例：**
- 追踪算法更新影响
- 识别排名趋势
- 检测竞品动向
- 规划内容更新

### 4. SERP 竞争对手分析

找出谁在竞争关键词。

```
输入：关键词
输出：
- 所有排名域名
- 每个域名的平均位置
- 流量份额估算
- 内容类型分析
```

### 5. 关键词位置检查

检查你的域名的特定关键词位置。

```
输入：域名，关键词[]
输出：
- 每个关键词的当前位置
- 每个排名的 URL
- 捕获的 SERP 特性
- 与上次检查的位置变化
```

## 排名指标

### 位置层级

| 层级 | 位置 | 预估 CTR | 优先级 |
|------|------|----------|--------|
| 优质 | 1-3 | 15-30% | 防守 |
| 强势 | 4-10 | 2-8% | 优化 |
| 攻击距离 | 11-20 | 1-2% | 推进 |
| 机会 | 21-50 | <1% | 内容差距 |
| 长尾 | 51+ | 极低 | 低优先级 |

### 流量估算

DataForSEO 基于以下因素提供流量估算：
- 搜索量
- 位置
- CTR 模型
- 存在的 SERP 特性

**注意：** 这些是估算，不是实际流量数据。

## 输出格式

### 排名报告

```markdown
# SERP 排名：[域名]
生成时间：[日期]

## 概述
- 关键词总数：X
- 预估月流量：X
- 平均位置：X
- 前 10 关键词数：X

## 位置分布

| 位置 | 关键词数 | 占比 |
|------|----------|------|
| 1-3 | X | X% |
| 4-10 | X | X% |
| 11-20 | X | X% |
| 21-50 | X | X% |
| 51+ | X | X% |

## 热门关键词

| 关键词 | 位置 | 搜索量 | URL |
|--------|------|--------|-----|
| [关键词1] | 3 | 5,400 | /page1 |
| [关键词2] | 7 | 3,200 | /page2 |

## 捕获的 SERP 特性

| 特性 | 数量 | 关键词 |
|------|------|--------|
| 精选摘要 | 5 | 关键词1, 关键词2, ... |
| 相关问题 | 12 | ... |

## 机会

### 攻击距离（位置 11-20）
接近第 1 页的关键词 - 优先优化：
1. [关键词] - 位置 12，搜索量 2,400
2. [关键词] - 位置 15，搜索量 1,800
```

### SERP 分析报告

```markdown
# SERP 分析："[关键词]"
位置：[位置]
生成时间：[日期]

## SERP 组成

### 首屏以上
- 广告：4
- AI 概览：是
- 精选摘要：是 (domain.com)

### 自然结果
1. domain1.com/page - 标题
2. domain2.com/page - 标题
...

### 存在的 SERP 特性
- [x] AI 概览
- [x] 精选摘要
- [x] 相关问题（4 个问题）
- [ ] 本地结果
- [x] 图片包
- [ ] 视频轮播

## 建议
1. 要创建的内容类型：[基于排名前列结果]
2. 目标字数：[基于分析]
3. 要瞄准的 SERP 特性：[基于差距]
```

## 对比：DataForSEO vs GSC

| 功能 | DataForSEO（此技能） | GSC |
|------|---------------------|-----|
| 排名数据 | 是（估算） | 是（实际） |
| 点击数据 | 否 | 是 |
| 展示数据 | 否 | 是 |
| CTR 数据 | 否 | 是 |
| 任意域名 | 是 | 仅已验证 |
| 历史深度 | 数月 | 16 个月 |
| 实时 SERP | 是 | 否 |
| SERP 特性 | 详细 | 有限 |

**使用 DataForSEO 当：**
- 分析竞争对手
- 实时 SERP 检查
- SERP 特性分析
- 无 GSC 访问权限

**使用 GSC 当：**
- 需要实际点击/展示数据
- CTR 优化
- 你自己的已验证资产

## 与其他技能集成

- 使用 `seo-keywords` 找要追踪的关键词
- 使用 `seo-content` 优化表现不佳的页面
- 使用 `seo-backlinks` 理解排名因素

## 最佳实践

### 追踪设置

1. **核心关键词** - 20-50 个最重要的词
2. **品牌关键词** - 品牌名变体
3. **竞品关键词** - 竞争对手排名的词
4. **机会关键词** - 攻击距离词

### 监控频率

| 关键词类型 | 检查频率 |
|------------|----------|
| 核心（前 20） | 每周 |
| 次要（21-50） | 两周一次 |
| 长尾（51+） | 每月 |
| 竞品追踪 | 每周 |

### 行动触发

| 信号 | 行动 |
|------|------|
| 位置下降 >5 | 调查内容/链接 |
| 新竞品进入前 5 | 分析其内容 |
| 丢失 SERP 特性 | 重新优化特性 |
| 位置 11-15 | 推进到第 1 页 |

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
