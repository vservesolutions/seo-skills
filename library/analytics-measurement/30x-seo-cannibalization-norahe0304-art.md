---
name: "30x-seo-cannibalization"
description: "检测关键词蚕食 - 多个页面竞争同一关键词。识别蚕食 URL 并提供解决策略 （合并、重定向、差异化或删除）。"
category: "analytics-measurement"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "norahe0304-art/30x-seo-cn"
repo_url: "https://github.com/norahe0304-art/30x-seo-cn"
source: "https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-cannibalization/SKILL.md"
raw_source: "https://raw.githubusercontent.com/norahe0304-art/30x-seo-cn/HEAD/skills/30x-seo-cannibalization/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Claude Code skill · norahe0304-art/30x-seo-cn · skills/30x-seo-cannibalization/SKILL.md · MIT
     Source: https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-cannibalization/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# 关键词蚕食检测

> 发现多个页面抢同一关键词的问题

## 什么是关键词蚕食

**问题**：网站有多个页面都想排同一个关键词

```
/blog/best-crm-software     → 目标: "best crm"
/guide/crm-comparison       → 目标: "best crm"
/products/crm               → 目标: "best crm"
```

**后果**：
- Google 不知道该排哪个 → 都排不好
- 内链权重分散
- 用户体验混乱
- 浪费爬取预算

---

## 检测方法

### 方式 A：有 GSC 数据（推荐）

```
导入 GSC "查询" 报告
↓
按关键词分组
↓
找出同一关键词有多个 URL 的情况
↓
分析每个 URL 的:
- 展示量
- 点击量
- 平均排名
- 排名波动
↓
识别蚕食
```

**蚕食信号**：
- 同一关键词 2+ URL 都有展示
- 排名频繁波动（Google 在犹豫）
- 两个页面排名都在 5-15 位（卡住了）

### 方式 B：无 GSC 数据

```
输入目标关键词列表
↓
对每个关键词:
- site:domain.com "关键词" 搜索
- 分析返回的多个结果
↓
检查页面内容重叠度
↓
识别潜在蚕食
```

---

## 输出格式

```markdown
# 关键词蚕食报告

## 发现 X 组蚕食问题

### 蚕食组 #1: "best crm software"

| URL | 排名 | 展示量 | 点击量 | 内容角度 |
|-----|------|--------|--------|---------|
| /blog/best-crm-2024 | #8 | 5,000 | 120 | 评测文章 |
| /guide/crm-comparison | #12 | 3,200 | 45 | 对比指南 |
| /products/crm | #15 | 1,800 | 30 | 产品页 |

**诊断**: 三个页面内容角度不同，但标题/H1 都在抢 "best crm"

**建议**: 差异化策略
- /blog/best-crm-2024 → 保留，主攻 "best crm software"
- /guide/crm-comparison → 改为 "crm comparison guide"
- /products/crm → 改为品牌词 "YourBrand CRM features"

---

### 蚕食组 #2: "how to use crm"

| URL | 排名 | 内容重叠 |
|-----|------|---------|
| /blog/crm-tutorial | #11 | 80% |
| /help/getting-started | #14 | 75% |

**诊断**: 两个页面内容高度重叠

**建议**: 合并策略
- 合并到 /blog/crm-tutorial（流量更高）
- /help/getting-started → 301 到合并后的页面
- 或：/help/getting-started 改写为产品特定教程

---

## 解决方案汇总

| 关键词 | 策略 | 保留 URL | 处理 URL |
|--------|------|---------|---------|
| best crm software | 差异化 | /blog/best-crm-2024 | 其他改标题 |
| how to use crm | 合并 | /blog/crm-tutorial | 301 重定向 |
| ... | ... | ... | ... |
```

---

## 四种解决策略

### 1. 合并（Merge）

**适用**：内容高度重叠（>70%）

```
A + B → A（更好的那个）
B → 301 到 A
```

**操作**：
- 选择流量/排名更好的页面
- 把另一个页面的独特内容合并过来
- 设置 301 重定向
- 更新内链指向

### 2. 重定向（Redirect）

**适用**：其中一个页面明显更弱

```
弱页面 → 301 到强页面
```

**操作**：
- 直接 301，不合并内容
- 确保强页面覆盖了弱页面的意图

### 3. 差异化（Differentiate）

**适用**：两个页面服务不同意图

```
A → 关键词 X
B → 关键词 Y（相关但不同）
```

**操作**：
- 修改标题、H1、元描述
- 调整内容角度
- 更新内链锚文本

### 4. 删除（Delete）

**适用**：页面没有价值

```
低质量页面 → 删除或 noindex
```

**操作**：
- 410 删除（明确告诉 Google）
- 或 noindex（保留但不参与排名）

---

## 使用方式

```bash
# 有 GSC 数据
/30x-seo cannibalization --gsc [csv文件]

# 指定关键词列表
/30x-seo cannibalization --keywords "关键词1, 关键词2, ..."

# 分析整站
/30x-seo cannibalization https://example.com
```

---

## 预防蚕食

### 关键词映射

在写新内容前，检查是否已有页面覆盖该关键词：

```markdown
| 目标关键词 | 已有页面 | 状态 |
|-----------|---------|------|
| best crm | /blog/best-crm-2024 | 已覆盖 |
| crm pricing | — | 可以写 |
| crm vs erp | /blog/crm-erp-difference | 已覆盖 |
```

### 内容规划原则

1. **一个关键词 = 一个页面**
2. 新内容前先查关键词映射
3. 定期跑蚕食检测
4. 内链锚文本要和目标关键词一致

---

## 与其他技能的关系

| 相关技能 | 关系 |
|---------|------|
| 30x-seo-keywords | 关键词研究时建立映射 |
| 30x-seo-internal-links | 修复后更新内链 |
| 30x-seo-redirects | 执行 301 重定向 |
| 30x-seo-content-writer | 差异化时重写内容 |

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
