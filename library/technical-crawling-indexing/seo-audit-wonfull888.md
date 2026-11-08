---
name: "seo-audit"
description: "SEO 诊断专家,基于 Google、Ahrefs、微软搜索指南设计的 92 项检查清单。 触发词:SEO审计、SEO诊断、网站SEO检查、为什么排名不好、技术SEO检查、页面SEO、E-E-A-T检查、内容质量分析。 输入一个网址,自动执行技术SEO(29项)、页面元素(27项)、内容质量与E-E-A-T(33项)、本地SEO(3项)四维度诊断,支持智能语言检测、站点分类与动态选页,生成中英文报告。"
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "wonfull888/seo-audit"
repo_url: "https://github.com/wonfull888/seo-audit"
source: "https://github.com/wonfull888/seo-audit/blob/HEAD/SKILL.md"
raw_source: "https://raw.githubusercontent.com/wonfull888/seo-audit/HEAD/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 28
collected: "2026-11-08"
---

<!-- Claude Code skill · wonfull888/seo-audit · SKILL.md · MIT
     Source: https://github.com/wonfull888/seo-audit/blob/HEAD/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO Audit Skill

基于 Google、Ahrefs、微软官方搜索指南设计的证据驱动型 SEO 诊断工具。

文档来源:
- [Google 搜索指南](https://developers.google.com/search/docs?hl=zh-cn)
- [Ahrefs 82项 SEO+AI 搜索清单](https://ahrefs.com/blog/seo-ai-search-checklist/)
- [微软 AEO & GEO 指南](https://about.ads.microsoft.com/content/dam/sites/msa-about/global/common/content-lib/pdf/from-discovery-to-influence-a-guide-to-aeo-and-geo.pdf)

## 交互与执行规范 (必读)

当用户请求进行 SEO 诊断时，必须遵循以下执行流程：

### 1. 环境检查与交互

在开始任何诊断之前，**必须**按以下优先级检查 `PAGE_SPEED_API_KEY`：

1. 当前会话环境变量：`PAGE_SPEED_API_KEY`
2. 本地 `.env` 文件自动读取（按顺序尝试）：
   - `./.env`（当前工作目录）
   - `~/.claude/skills/seo-audit/.env`（Skill 目录）

读取 `.env` 时要求：
- 仅读取 `PAGE_SPEED_API_KEY=` 行
- 自动去除包裹引号
- 不得在对话中输出完整 Key（仅允许掩码展示）

- **情况 A：API Key 已配置**
  - 直接执行**完整诊断模式**（包含 PageSpeed 性能分析）。
  - 如果 Key 来自 `.env`，提示：`已从 .env 自动加载 PAGE_SPEED_API_KEY（masked）`。
  - 无需额外询问用户。

- **情况 B：API Key 未配置**
  - **暂停执行**，向用户发送以下询问：
    > "检测到未配置 PageSpeed API Key。
    > **配置 API Key** 可以获取 Google 官方性能评分（Core Web Vitals），这是技术 SEO 的重要组成部分。
    >
    > 您想怎么做？
    > 1. **现在配置**（我将引导您设置，然后进行完整诊断）
    > 2. **仅进行基础诊断**（跳过性能分析，立即开始）"
  - 根据用户回复执行：
    - 选择 1：提示用户输入 Key，设置环境变量 `export PAGE_SPEED_API_KEY="..."`，然后执行完整诊断。
    - 选择 2：执行**基础诊断模式**（跳过 PageSpeed API 调用，技术 SEO 权重调整为 27%）。

### 2. 报告展示规范

- **完整展示**：诊断完成后，必须在当前对话中**完整展示**生成的 Markdown 报告内容。
- **文件保存**：
  - 必须将报告保存为 Markdown 文件。
  - 命名格式：`seo-audit-report-{domain}-{timestamp}.md`
  - 保存路径：**Skill 所在目录**下的 `reports/` 文件夹。
  - 若 `reports/` 不存在，必须先自动创建。
  - 示例路径：`~/.claude/skills/seo-audit/reports/seo-audit-report-{domain}-{timestamp}.md`
  - 若报告被保存到其他目录（如当前工作目录），视为不合规，必须重新保存到 `reports/`。
  - 报告完成后必须在对话中单独输出：`Saved to: <absolute_path>`。
- **品牌页脚**：
  - 所有生成的报告（无论是展示还是保存的文件），**必须**在文件末尾包含以下品牌信息：
    ```markdown
    ---
    **SEO Audit Skill** | [GitHub](https://github.com/wonfull888/seo-audit) | Developer: [x.com/wonfull888](https://x.com/wonfull888)
    ```
- **全量检查展示**：
  - **禁止折叠**：报告必须使用表格形式展示所有 92 项检查结果，无论通过与否。
  - **逐项列出**：即使是"通过"的项目，也必须在对应的维度表格中列出 ID、检查项名称、结果和状态。
  - **严格遵循模板**：
    - 英文报告：`references/report-template.en.md`
    - 中文报告：`references/report-template.zh-CN.md`
    - 仅在兼容场景使用 `references/report-template.md`（英文默认入口）
  - **分类结果附录**（v1.4.1+）：
    - 在附录中输出站点分类信息（Top-2、置信度、Title/URL/Nav 信号、页面来源、回退路径、确认策略）
- **开篇诊断总览（必须）**：
  - 在报告开头（综合评分之前）增加“诊断总览 / Executive Summary”段落。
  - 中文报告：约 300-800 字；英文报告：约 300-800 words。
  - 必须覆盖以下信息：
    1. 网站类型判定结果
    2. 本次抓取并诊断的页面（首页、关键业务页、文章页），并在总览中明确列出页面 URL
    3. 综合总分与整体结论（好/中/差）
    4. 问题最严重的维度与核心风险
    5. 最需要优先修复的 1-2 个事项（P0）

### 3. 报告语言检测

在开始采集数据前，必须先确定报告语言。

#### 检测优先级

1. **显式标志（最高优先级）**
   - 包含 `--en` / `--english`：英文报告
   - 包含 `--zh` / `--zh-CN` / `--中文`：中文报告

2. **自动语言检测（无显式标志时）**
   - 统计输入中的中文字符占比
   - 中文占比 > 30%：中文（高置信度）
   - 中文占比 < 10%：英文（高置信度）
   - 10% - 30%：低置信度，使用快速确认提示

3. **默认语言**
   - 默认英文（国际化默认）

#### 检测提示

```text
📝 Report language: English (auto-detected)
   To override: add --zh
```

低置信度提示（无阻塞，使用默认值继续）：

```text
⚠️ Cannot auto-detect language with high confidence.
Select report language:
1. English (recommended)
2. 中文
Default: English
```

实现细节参考：`references/language-detection.md` 和 `references/quick-confirm-mechanism.md`

### 4. 站点分类与动态选页（v1.4.1）

在页面抓取前，必须先进行站点分类（增强方案）。

#### 分类体系（7+1）

- 企业官网（Corporate）
- 电商（E-commerce）
- 内容站（Content）
- 工具/SaaS（Tool/SaaS）
- 社区（Community）
- 门户（Portal）
- 单页站（Single-Page Site）
- 混合/未确定（Hybrid/Unknown）

#### 信号与权重

- `Title`（首页标题关键词，主信号）
- `URL`（sitemap 或首页链接路径，校验信号）
- `Nav`（导航词，辅助信号）

```text
score = w_title * Title + w_url * URL + w_nav * Nav
default weights: w_title=0.5, w_url=0.3, w_nav=0.2
```

#### 决策规则

- 输出 Top-2 候选类型（Top-1、Top-2）
- 输出 Top-1 置信度（0-1）
- 阈值建议：
  - `high >= 0.70`
  - `medium 0.45-0.69`
  - `low < 0.45`
- `medium`/`low` 置信度触发快速确认提示；无响应按 Top-1 继续
- 若低置信度且类型冲突，进入 `Hybrid/Unknown`
- 分类失败不得中断审计流程（Fail-safe）

#### 动态选页规则（MVP）

- 每次诊断固定抓取 3 页：
  1) 首页
  2) 关键业务页（按分类选择）
  3) 文章页（**强制**）
- 若文章页未直接命中，执行二次检索：`/blog`、`/news`、`/article`、`/post`、`/insights`、`/docs`
- 若无 sitemap：退回首页链接启发式抓取

规则细节参考：`references/site-classification-v141.md`

#### 低置信度快速确认提示

```text
⚠️ Site type confidence is medium/low.
Detected Top-2:
1) {type_1} ({confidence_1})
2) {type_2} ({confidence_2})
Use 1 or 2. Default: 1
```

无用户响应时：默认选择 1 并继续，不阻断诊断。

---

## 快速开始

```bash
# 自动检测语言（推荐）
/seo-audit https://example.com

# 显式指定英文报告
/seo-audit https://example.com --en

# 显式指定中文报告
/seo-audit https://example.com --zh
```

## 工作流程

```
用户输入网址
    ↓
1. 环境检查 (API Key check) -> 交互确认
    ↓
2. 报告语言检测
   ├─ 显式标志优先 (--en / --zh)
   ├─ 输入语言自动检测
   └─ 默认英文
    ↓
3. 站点分类 (Title + URL + Nav)
   ├─ 首页 Title 关键词
   ├─ URL 路径特征
   ├─ Nav 导航词特征
   ├─ 输出 Top-2 + 置信度
   └─ 低置信度时快速确认
    ↓
4. 选择 3 个代表页面
   ├─ 首页: /
   ├─ 关键业务页: 按分类选择
   └─ 文章页: 强制抓取
    ↓
5. 数据采集(并行)
   ├─ curl: robots.txt, HTTP headers
   ├─ WebFetch: 3 个页面 HTML
   └─ PageSpeed API: 3 个 URL(仅完整模式)
    ↓
6. 四维度分析
   ├─ 技术 SEO(29 项)
   ├─ 页面元素(27 项)
   ├─ 内容质量与 E-E-A-T(33 项)
   └─ 本地 SEO(3 项)
    ↓
7. 生成报告
   ├─ 综合评分(0-100)
   ├─ 问题清单(P0/P1/P2)
   ├─ 92项完整检查清单(表格)
   ├─ 优化建议
   └─ **保存文件 & 完整展示**
```

## 检查项概览

| 维度 | 检查项数 | 权重 | 详情 |
|------|----------|------|------|
| 技术 SEO | 29 项 | 32% | [technical-seo.md](references/technical-seo.md) + [enhanced](references/technical-seo-enhanced.md) |
| 页面元素 | 27 项 | 29% | [on-page-elements.md](references/on-page-elements.md) + [AI搜索](references/ai-search-optimization.md) + [分发](references/content-distribution.md) |
| 内容质量与 E-E-A-T | 33 项 | 36% | [content-eeat.md](references/content-eeat.md) + [质量](references/content-quality-enhanced.md) + [信任](references/trust-signals-enhanced.md) |
| 本地 SEO | 3 项 | 3% | [local-seo-enhanced.md](references/local-seo-enhanced.md) |
| **总计** | **92 项** | **100%** | |

## 评分系统

→ 详见 [references/scoring-system.md](references/scoring-system.md)

### 快速参考

| 状态 | 含义 | 分数范围 |
|------|------|----------|
| 🟢 | 优秀 | ≥90 |
| 🟡 | 需改进 | 70-89 |
| 🔴 | 严重问题 | <70 |

## 报告模板

根据报告语言选择对应模板：

- 英文报告：[references/report-template.en.md](references/report-template.en.md)
- 中文报告：[references/report-template.zh-CN.md](references/report-template.zh-CN.md)
- 兼容入口：[references/report-template.md](references/report-template.md)

## 执行工具

| 工具 | 用途 | 示例 |
|------|------|------|
| `curl` | HTTP 请求 | `curl -I https://example.com` |
| `WebFetch` | 获取页面 HTML | AI 内置工具 |
| PageSpeed API | 性能分析 | 可选(推荐配置以获取完整报告) |

### API Key 配置(可选但推荐)

**为什么要配置 API Key?**
- ✅ 完整 92 项检查(包含 Core Web Vitals)
- ✅ 技术评分更准确(32% 权重)
- ✅ 性能优化建议更详细

**不配置也能用!**
- ⚠️ 84 项检查(跳过 Core Web Vitals)
- ⚠️ 技术评分降权(27% 权重)
- ⚠️ 报告会标注性能数据缺失

#### 配置方式

```bash
export PAGE_SPEED_API_KEY="your_api_key_here"
```

#### 获取免费 API Key

Google PageSpeed Insights API 提供 **每天 25,000 次免费请求**,个人使用完全够用!

1. 访问 [Google Cloud Console](https://console.cloud.google.com/)
2. 创建项目或选择现有项目
3. 启用 PageSpeed Insights API
4. 创建 API Key

详细说明:[API_KEY_SETUP.md](API_KEY_SETUP.md)

## 检查标准

| 项目 | 标准 |
|------|------|
| Title 长度 | 50-60 字符 |
| Meta Description 长度 | 150-160 字符 |
| 首页最低字数 | 500 字 |
| 关键业务页最低字数 | 300 字 |
| 文章页最低字数 | 1000 字 |
| 内部链接 | ≥3 个/页 |
| URL 长度 | ≤100 字符 |

## 报告语言

- **默认**: 英文
- **自动检测**: 基于用户输入语言
- **可选覆盖**: `--en` / `--zh`

## 参考资料

- [AI 写作特征检测](references/ai-writing-detection.md) - Em dash、高频词、AI 短语模式
- [语言检测规则](references/language-detection.md)
- [快速确认机制](references/quick-confirm-mechanism.md)
- [站点分类规则（v1.4.1）](references/site-classification-v141.md)
- [示例报告（英文）](assets/example-report.en.md)
- [示例报告（中文）](assets/example-report.md)

## 版本历史

- **v1.4.1** (开发中): 分类增强与可解释性：Title+URL+Nav、Top-2 + 置信度、低置信度快速确认、文章页二次检索与附录证据链路。
- **v1.4.0** (2026-02-22): 站点分类与动态选页（MVP）：7+1 分类体系、Title+URL 轻量识别、关键业务页选择、文章页强制抓取与 Fail-safe 回退。
- **v1.3.0** (2026-02-18): 完整国际化支持。默认英文 README 和发布说明；新增文档双语结构、报告语言智能检测、双语报告模板与示例。
- **v1.2.2** (2026-02-10): 优化报告结构，将页面数据预览（Title、Meta、H1）移至页面元素部分开头，提升阅读连贯性。
- **v1.2.1** (2026-02-10): 强制全量报告展示，禁止折叠检查项。
- **v1.2.0** (2026-02-10): 新增智能交互模式，自动检测 API Key 状态；规范报告展示与保存格式。
- **v1.1.0** (2026-02-10): 新增19项检查,从73项扩展到92项,四维度优化结构
- **v1.0.0** (2026-02-06): 首个完整版本,73 项检查
