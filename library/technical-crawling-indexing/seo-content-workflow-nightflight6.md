---
name: "seo-content-workflow"
description: "基于真实搜索意图、当前可获得的搜索结果证据和可靠信息，研究、规划、创作、更新并审核搜索导向内容，交付 SEO 内容 Brief、文章、元数据和发布前质量检查。适用于 SEO 内容简报、参考搜索结果的文章创作、面向搜索意图的旧文更新、页面内容 SEO 审核，以及完整内容流程中的元数据工作。不应作为深度用户问题研究、排名跟踪、关键词排名监控、技术 SEO 审计、robots.txt、sitemap、canonical 或索引实施、纯关键词脑暴、只改标题、非 SEO 文章编辑或回答单个问题的主要 Skill。"
category: "technical-crawling-indexing"
platforms: ["unspecified"]
platform_source: "none"
repo: "Nightflight6/open-agent-skills"
repo_url: "https://github.com/Nightflight6/open-agent-skills"
source: "https://github.com/Nightflight6/open-agent-skills/blob/HEAD/skills/zh-CN/seo-content-workflow/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Nightflight6/open-agent-skills/HEAD/skills/zh-CN/seo-content-workflow/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Unspecified skill · Nightflight6/open-agent-skills · skills/zh-CN/seo-content-workflow/SKILL.md · MIT
     Source: https://github.com/Nightflight6/open-agent-skills/blob/HEAD/skills/zh-CN/seo-content-workflow/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO 内容工作流

<!-- parity: purpose -->
## 目标

根据可辩护的需求和证据创作真正有用的搜索导向内容。搜索意图优先于关键词重复，原创价值优先于模仿搜索结果，证据优先于貌似合理的主张，用户价值优先于只为搜索引擎写作。

<!-- parity: guardrails -->
## 不可突破的边界

- 不得虚构当前搜索结果观察、搜索量、排名、竞品事实、统计数据、价格、参数、引语、研究或用户情绪。
- 不得承诺排名、流量、点击、收录或搜索/AI 可见性。
- 不实施爬虫、排名跟踪、关键词密度系统、robots.txt、sitemap、canonical 或索引变更。
- 遵守宿主的工具、联网、审批、认证、隐私和自动查询政策；用户明确禁止联网时不得联网。
- 除非用户明确授权，否则保留源文件不变。不得把私人输入、内部策略或起草残留放入读者可见正文。
- 把目标篇幅视为内容约束，而不是排名因素。不得为了增加频次而插入词语。

<!-- parity: mode-routing -->
## 路由工作模式

推断能够满足请求且扩张最少的模式：

1. **brief：** 完成适用的意图研究和轻量搜索结果研究，返回搜索研究快照与 SEO 内容 Brief，不起草文章正文。
2. **create：** 创作新的搜索导向内容，并提供元数据和剩余待核验事项。
3. **refresh：** 诊断并更新现有文章，保留有价值内容，避免不必要的全文重写。
4. **review：** 返回 SEO 内容诊断与优先建议，不做不必要的改写。

优先遵守用户明确指定的模式或输出。只有当歧义会实质改变允许交付的内容时才提问。

<!-- parity: input-model -->
## 确立输入

明确或合理推断：

- 主题、受众、语言、市场和目标搜索环境；
- 主查询、内容或页面类型、内容目标、发布站点或渠道；
- 所选模式。

有条件时使用：上游搜索意图研究、现有文章、品牌限制、已核实产品事实、竞品范围、地域、转化目标、站内链接清单、外部证据、CMS 和元数据约束、目标篇幅、必须保留的事实以及禁止使用的主张。区分用户/CMS 限制与搜索引擎指导。

<!-- parity: intent-interface -->
## 使用搜索意图证据

存在上游 `search-intent-research` 输出时，读取 [references/search-intent-interface.md](references/search-intent-interface.md)。使用 `normalized_question`、`topic_cluster`、`intent_type`、`underlying_job`、`evidence_strength` 和 `priority`。结合已有的语言、市场、受众、证据计数和置信度字段判断适配度与证据广度。措辞、时效、市场适配或来源会实质影响任务时，按需查看上游证据表记录。

不得把计数当作搜索量，也不得把优先级当成自动收录命令。对于快速变化的主题，应在可用时检查上游来源时间和采集时间，并在工具允许时重新验证当前需求。不得重新生成想象中的问题库。深度跨平台问题采集、规范化、聚类或需求证据研究应路由到 `search-intent-research`。

<!-- parity: serp-research -->
## 开展轻量搜索结果研究

当前搜索结果证据会显著改善任务时，读取 [references/serp-research.md](references/serp-research.md)。允许使用工具时，围绕实际查询、搜索环境、市场和语言，检查数量有限且具有代表性的结果。把已检查结果保存在 SERP 观察表中，并通过 `representative_result_refs` 把搜索研究快照中的主要结论连接到观察记录。

有限样本应使用“已检查结果显示”“在观察样本内”等受限表述。无法访问当前搜索结果时，明确标为未核实，不创建观察记录或 `representative_result_refs`，并尽量使用用户提供的证据。不得虚构结果，也不得把任意模式当成排名公式。

<!-- parity: content-brief -->
## 确立内容主张并创建 Brief

动笔前说明页面为什么值得存在。优先考虑一手经验、原创数据、专家解释、测试、真实案例、更好的决策框架、更清晰的技术说明、适用条件与限制、原创视觉或可执行流程。没有有意义的差异化价值时，应提醒用户，而不是假装普通同质页面具有很强战略价值。

读取 [references/content-brief.md](references/content-brief.md)，创建由主题驱动的 Brief。不得强制固定 H2 模板、FAQ、篇幅或对当前排名页面的模仿。

<!-- parity: evidence-plan -->
## 规划并控制主张

把重要主张分为：

- **verified（已核实）：** 由已经检查且适当的来源直接支持；
- **attributed（已归因）：** 明确表示为指定来源的说法；
- **inferred（推断）：** 根据已说明的证据推导，并标明为推断；
- **unverified（未核实）：** 重要依据缺失、不可访问或尚未解决。

对未核实主张，应选择核验、降低确定性、在读者正文之外标记，或删除。比较内容应尽量使用可比证据和一致时间范围。不得制造虚假精度，也不得隐瞒商业利益冲突。

<!-- parity: create-refresh -->
## 创作或更新内容

进行 create 或 refresh 时读取 [references/writing-quality.md](references/writing-quality.md)。

- 尽快满足主要意图，适合直接回答时先给答案。
- 说明推理、证据、条件和限制。
- 使用标题帮助导航，自然使用术语。
- 提供超越搜索结果汇总的价值，避免空洞开场和套路化 AI 文风。
- 更新文章时保留准确、有用的现有内容；只有意图、证据、结构、清晰度或时效性确有需要时才重写。
- 只有观察到的辅助问题确实有用时才添加 FAQ。

<!-- parity: keyword-model -->
## 使用概念，而不是密度

把语言模型化为主要主题或查询、辅助概念、用户语言变体、相关实体，以及可选的商业或转化词。只有语义需要时才使用。不得提供关键词密度目标，也不得声称重复精确匹配词具有排名优势。

<!-- parity: brand-comparison -->
## 路由品牌、比较与推荐内容

只有用户意图、证据和内容目的共同支持时，才让品牌扮演教育来源、案例、解决方案、比较对象或 CTA 去向等角色。不得机械地在每节植入品牌，也不得把商业内容伪装成独立中立评测。

对于“A 对 B”“最佳”“服务商列表”或推荐内容，应要求明确的比较维度、尽量可比的证据与时间范围、事实/观点分离、重要主张核实、利益冲突意识和适当限定。不得虚构竞品弱点。

<!-- parity: metadata -->
## 创建元数据

读取 [references/metadata.md](references/metadata.md)。区分编辑标题/H1 与 SEO 标题/title element 建议；两者一致最合适时不要强行区分。元数据应准确、独特、描述清晰、简洁、不误导，且不堆砌关键词。

不得把标题 60 字符、描述 160 字符等说法设为通用硬限制。应遵守用户、CMS 或发布平台的明确约束。只有用户或 CMS 要求时才生成 meta keywords，也不得承诺搜索引擎会原样展示所提供的描述。

<!-- parity: links-media -->
## 处理链接与媒体

只有用户提供真实站点或页面清单时，才建议指向真实 URL 的站内链接；否则只说明适合链接的页面类型。图片、示意图、表格或视频只有在明显改善理解时才建议使用，不得为了 SEO 规定任意媒体数量。

<!-- parity: engine-localization -->
## 适配目标搜索环境

涉及 Google、百度、区域搜索环境或 CMS 约束时，读取 [references/engine-localization.md](references/engine-localization.md)。把当前平台指导视为可能变化的参考，而不是永恒排名规律。平台行为会实质影响任务且工具允许时，核对当前官方指导。

<!-- parity: ai-scaled-content -->
## 处理 AI 辅助与规模化内容

不得声称 AI 内容一定不能获得排名，也不得声称其天然安全。拒绝或警告以操纵搜索可见性为主要目的的大批量低价值、近似重复页面。领域风险、主张风险或一手专业性要求较高时，建议由人工或专家复核。

<!-- parity: seo-qa -->
## 执行最终 SEO 内容检查

交付前读取 [references/seo-qa.md](references/seo-qa.md)。检查意图匹配、覆盖、原创/实用价值、证据完整性、结构、自然语言、元数据和发布清洁度。从读者正文移除内部起草残留、`[VERIFY]`、SEO 策略说明、备选标题、关键词列表、文件路径和内部评论。

未解决证据会让内容不安全或产生实质误导时，应标为仍需核验，不得称为可发布。

<!-- parity: delivery -->
## 按模式交付

优先遵守用户指定格式。否则返回：

- **brief：** 搜索研究快照和 SEO 内容 Brief。
- **create：** Brief 摘要、文章、元数据和剩余待核验事项。
- **refresh：** 更新诊断、更新后文章、元数据、实质修改和剩余待核验事项。
- **review：** SEO 诊断和按优先级排列的建议。

适用时使用以下概念交付物：

1. **搜索研究快照：** `query`、`search_environment`、`market`、`language`、`observed_at`、`dominant_intent`、`dominant_content_types`、`serp_patterns`、`content_gaps`、`research_limitations` 和 `representative_result_refs`。
2. **SERP 观察表：** 使用搜索结果研究 reference 中定义的结果级来源字段；只有实际检查结果时才提供。
3. **SEO 内容 Brief：** 使用 Brief reference 中定义的字段。
4. **内容：** 根据模式交付大纲、草稿、更新后文章或受审文章。
5. **元数据：** `editorial_headline`、`seo_title`、`meta_description`、可选 `keywords`、可选 `slug`。
6. **SEO QA 报告：** `intent_fit`、`coverage`、`original_value`、`evidence`、`structure`、`keyword_naturalness`、`metadata`、`publication_readiness`、`remaining_risks`。

SEO 工作可以改善匹配度、质量、实用性和可发现性，但不能保证结果。
