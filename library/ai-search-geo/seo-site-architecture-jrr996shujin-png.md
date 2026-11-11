---
name: "seo-site-architecture"
description: "站内架构诊断子模块。检查网站的内部链接健康度和核心页面点击深度。当用户提到\"内部链接\"\"网站架构\"\"页面深度\"\"链接结构\"\"孤岛页面\"\"导航结构\"时触发。良好的站内架构帮助搜索引擎和 AI 引擎高效地发现和理解网站全部内容。"
summary: "Evaluates internal linking health and click depths for improved search engine discovery."
category: "ai-search-geo"
platforms: ["openclaw"]
platform_source: "declared"
repo: "jrr996shujin-png/openclaw-seo-aeo-skills"
repo_url: "https://github.com/jrr996shujin-png/openclaw-seo-aeo-skills"
source: "https://github.com/jrr996shujin-png/openclaw-seo-aeo-skills/blob/HEAD/seo-aeo-diagnostics/site-architecture/SKILL.md"
raw_source: "https://raw.githubusercontent.com/jrr996shujin-png/openclaw-seo-aeo-skills/HEAD/seo-aeo-diagnostics/site-architecture/SKILL.md"
ref: "HEAD"
discovered_via: "awesome-seo-agent-skills"
license: "MIT"
stars: 13
collected: "2026-11-11"
---

<!-- OpenClaw skill · jrr996shujin-png/openclaw-seo-aeo-skills · seo-aeo-diagnostics/site-architecture/SKILL.md · MIT
     Source: https://github.com/jrr996shujin-png/openclaw-seo-aeo-skills/blob/HEAD/seo-aeo-diagnostics/site-architecture/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# 站内架构诊断模块

本模块负责检查网站的内部链接结构和页面可达性，满分 10 分。站内架构就像一栋建筑的动线——好的动线让每个房间都容易到达，好的站内架构让每个页面都容易被搜索引擎发现。

## 检查项

### 1. 内部链接健康度（5 分）

**检查方法：**
1. 从目标页面提取所有内部链接（同域名下的链接）
2. 分析：
   - 内部链接总数
   - 唯一内部链接数（去重）
   - 链接锚文本质量：
     - 描述性锚文本（"查看我们的 SEO 服务" ✅）
     - 通用锚文本（"点击这里""了解更多" ⚠️）
     - 裸 URL 锚文本（❌）
     - 空锚文本或纯图片链接无 alt（❌）
   - 导航链接 vs 正文内链接的比例
   - 是否有指向自身的链接（自链接）
3. 检查链接分布：
   - 是否集中在导航/页脚（模板链接）
   - 正文中是否有上下文相关的内链（更有价值）
   - 是否有"相关文章""推荐阅读"等模块

**评分：**
- 5 分：内链丰富（> 10 个唯一内链）+ 锚文本描述性强 + 正文有上下文内链
- 3 分：内链数量尚可但锚文本质量一般，或多为模板链接
- 1 分：内链很少或锚文本质量差
- 0 分：几乎无内部链接（孤岛页面）

**输出格式：**
```
状态：✅/⚠️/❌
内部链接总数：X 个（唯一：Y 个）
链接来源分布：
  - 导航/页头：X 个
  - 正文内链：X 个
  - 侧边栏/推荐：X 个
  - 页脚：X 个

锚文本质量：
| 类型 | 数量 | 占比 | 示例 |
|------|------|------|------|
| 描述性 | X | X% | "SEO 优化指南" |
| 通用性 | X | X% | "点击这里" |
| 裸 URL | X | X% | "https://..." |
| 空/无文本 | X | X% | [图片链接] |

上下文内链：有/无（X 处）
相关推荐模块：有/无
修复建议：（具体建议）
```

### 2. 核心页面点击深度（5 分）

点击深度指从首页到达目标页面所需的最少点击次数。搜索引擎和 AI 引擎通常认为深度越浅的页面越重要，3 次点击内可达是理想状态。

**检查方法：**
1. 如果诊断的是首页：
   - 提取首页所有链接
   - 对关键页面（由链接的位置和文本判断重要性）追踪深度
   - 列出首页直达的页面（深度 1）
   - 抽样检查深度 2 的页面
2. 如果诊断的是具体页面：
   - 从首页出发，检查是否能在 3 次点击内到达
   - 检查面包屑导航（`<nav>` 中带有 BreadcrumbList 特征的结构）
   - 推断页面在网站层级中的位置
3. 通用检查：
   - 面包屑导航是否存在
   - 面包屑层级数（反映网站深度）
   - 面包屑是否有 Schema 标记
   - URL 路径深度（斜杠数量作为参考信号）

**评分：**
- 5 分：关键页面 ≤ 3 次点击可达 + 面包屑导航完善 + URL 结构清晰
- 3 分：大部分页面可达但缺少面包屑或有些页面过深
- 1 分：页面深度过深（> 4 次点击）或缺少面包屑导航
- 0 分：无法确定页面可达性，且无面包屑、URL 结构混乱

**输出格式：**
```
状态：✅/⚠️/❌
URL 路径深度：X 层（/segment1/segment2/.../pageX）
面包屑导航：有/无
面包屑层级：首页 > [类别] > [子类别] > [当前页]
面包屑 Schema：有/无
从首页点击深度：约 X 次（推断）

网站层级概览（基于链接分析）：
  深度 0（首页）：1 页
  深度 1：~X 页（导航直达）
  深度 2：~X 页
  深度 3+：~X 页

修复建议：（具体建议，如添加面包屑、调整导航结构等）
```

## 汇总输出

```
## 站内架构 — 得分 X/10

| 检查项 | 得分 | 状态 |
|--------|------|------|
| 内部链接健康度 | X/5 | ✅/⚠️/❌ |
| 核心页面点击深度 | X/5 | ✅/⚠️/❌ |

关键发现：（1-2 句总结）
架构优化建议：（改善内容发现和爬取效率的关键建议）
优先修复：（最重要的 1-2 项）
```
