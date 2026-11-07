---
name: "seo-content-quality-signals"
description: "内容质量信号诊断子模块。检查页面的作者信息（E-E-A-T 信号）、发布/更新日期、页面内容字数和可读性。当用户提到\"内容质量\"\"E-E-A-T\"\"作者权威性\"\"内容新鲜度\"\"可读性分析\"时触发。这些信号在 AI 引擎选择引用来源时权重越来越高。"
category: "on-page-seo"
platforms: ["openclaw"]
platform_source: "declared"
repo: "jrr996shujin-png/openclaw-seo-aeo-skills"
repo_url: "https://github.com/jrr996shujin-png/openclaw-seo-aeo-skills"
source: "https://github.com/jrr996shujin-png/openclaw-seo-aeo-skills/blob/HEAD/seo-aeo-diagnostics/content-quality-signals/SKILL.md"
raw_source: "https://raw.githubusercontent.com/jrr996shujin-png/openclaw-seo-aeo-skills/HEAD/seo-aeo-diagnostics/content-quality-signals/SKILL.md"
ref: "HEAD"
discovered_via: "awesome-seo-agent-skills"
license: "MIT"
stars: 13
collected: "2026-11-07"
---

<!-- OpenClaw skill · jrr996shujin-png/openclaw-seo-aeo-skills · seo-aeo-diagnostics/content-quality-signals/SKILL.md · MIT
     Source: https://github.com/jrr996shujin-png/openclaw-seo-aeo-skills/blob/HEAD/seo-aeo-diagnostics/content-quality-signals/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# 内容质量信号诊断模块

本模块负责检查页面的内容质量指标，满分 10 分。在 AI 搜索时代，引擎不仅要找到内容，还要判断"这个来源可信吗？"——作者信息、发布日期、内容深度等信号是 AI 引擎评估可信度的关键因素。

## 检查项

### 1. 作者信息（4 分）

E-E-A-T（Experience, Expertise, Authoritativeness, Trustworthiness）中，作者信息是最直接的信号。AI 引擎在引用内容时倾向于选择有明确作者归属的来源。

**检查方法：**
1. 检查页面中的作者信息：
   - 作者姓名是否可见
   - 是否有作者简介/bio
   - 是否有作者链接（个人页面、社交媒体）
   - 是否有作者图片
2. 检查结构化数据中的作者信息：
   - Article Schema 中的 `author` 字段
   - `author` 是否为 Person 类型（而非纯字符串）
   - 是否有 `author.url`、`author.sameAs`
3. 检查 `<meta name="author">` 标签
4. 对于企业/机构网站，检查是否有 "关于我们" 链接和团队页面

**评分：**
- 4 分：可见作者信息 + Schema 中有 Person 类型作者 + 有简介
- 3 分：有作者姓名但缺少详细信息或 Schema 不完整
- 1 分：仅有 meta author 或仅显示"管理员"
- 0 分：无任何作者信息

**输出格式：**
```
状态：✅/⚠️/❌
页面可见作者：有/无（姓名：...）
作者简介：有/无
作者 Schema：Person 类型 / 纯字符串 / 无
author.url：有/无
meta author：有/无
修复建议：（具体建议）
```

### 2. 发布/更新日期（3 分）

内容新鲜度是搜索引擎和 AI 引擎的重要排名信号。用户搜索"2026 最佳..."时，AI 引擎会优先选择有近期日期标记的内容。

**检查方法：**
1. 检查页面可见的日期信息：
   - 发布日期
   - 最后更新日期（更重要）
   - 日期格式是否清晰可读
2. 检查结构化数据中的日期：
   - `datePublished`
   - `dateModified`
   - 日期格式是否为 ISO 8601（YYYY-MM-DD）
3. 检查 `<meta>` 标签中的日期：
   - `article:published_time`
   - `article:modified_time`
4. 评估日期的合理性：
   - 是否过旧（超过 2 年可能需要更新提示）
   - dateModified 是否晚于 datePublished
   - 是否所有页面都是同一日期（批量生成的信号）

**评分：**
- 3 分：页面可见日期 + Schema 日期 + 日期合理
- 2 分：有日期但仅在 Schema 或仅在页面可见处
- 1 分：有日期但格式不标准或缺少 dateModified
- 0 分：无任何日期信息

**输出格式：**
```
状态：✅/⚠️/❌
页面可见日期：
  - 发布日期：YYYY-MM-DD / 无
  - 更新日期：YYYY-MM-DD / 无
Schema 日期：
  - datePublished：YYYY-MM-DD / 无
  - dateModified：YYYY-MM-DD / 无
Meta 日期：
  - article:published_time：... / 无
  - article:modified_time：... / 无
新鲜度评估：最近（< 6 个月）/ 较旧（6-24 个月）/ 过期（> 24 个月）
修复建议：（具体建议）
```

### 3. 页面内容字数和可读性（3 分）

AI 引擎在评估内容深度时，字数是一个基础信号。过短的内容可能被认为"薄内容"（thin content），但更重要的是内容的信息密度和可读性。

**检查方法：**
1. 提取页面主体内容（去除导航、页脚、侧边栏等模板元素）
2. 统计：
   - 纯文本字数（中文按字数，英文按词数）
   - 段落数
   - 平均段落长度
3. 可读性评估：
   - 段落是否过长（中文 > 300 字 / 英文 > 200 词的段落标记）
   - 是否有"文字墙"（超长无分段内容）
   - 句子平均长度
   - 是否使用了小标题来分段
4. 内容与广告/导航的比例（文本内容占页面 HTML 的比例）

**评分：**
- 3 分：内容 > 800 字（中文）/ > 500 词（英文）+ 分段合理 + 可读性好
- 2 分：内容量充足但可读性有改善空间
- 1 分：内容较少（300-800 字）或可读性差（大段落、无小标题）
- 0 分：薄内容 < 300 字或几乎无正文内容

**输出格式：**
```
状态：✅/⚠️/❌
内容字数：X 字/词
段落数：X 个
平均段落长度：X 字/词
过长段落：X 个
内容占比：X%（正文 vs 模板/导航）
可读性评估：
  - 分段：好/差
  - 小标题引导：有/缺
  - 信息密度：高/中/低
修复建议：（具体建议）
```

## 汇总输出

```
## 内容质量信号 — 得分 X/10

| 检查项 | 得分 | 状态 |
|--------|------|------|
| 作者信息 | X/4 | ✅/⚠️/❌ |
| 发布/更新日期 | X/3 | ✅/⚠️/❌ |
| 字数和可读性 | X/3 | ✅/⚠️/❌ |

关键发现：（1-2 句总结）
E-E-A-T 改善机会：（提升内容可信度的关键建议）
优先修复：（最重要的 1-2 项）
```
