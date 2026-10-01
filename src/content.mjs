export const site = {
  name: "Webster Wang",
  email: "websterwangai@gmail.com",
  github: "https://github.com/linkbag",
  url: "https://websterwang-ai.github.io",
  ui: {
    en: {
      work: "Work",
      about: "About",
      contact: "Contact",
      explore: "Explore the work",
      heroEyebrow: "WEBSTER WANG / PERSONAL PORTFOLIO",
      heroTitle: "Ideas into <em>useful things.</em>",
      heroLead:
        "I build tools for learning, life sciences, personal finance, and teams of AI agents.",
      heroAside: "Curiosity is the common thread.",
      artLearn: "LEARN",
      artBuild: "BUILD",
      artExplore: "EXPLORE",
      artProgress: "ALWAYS IN PROGRESS",
      artFields: "NEUROSCIENCE / BIOTECH / CODE / SNOW",
      top: "Top",
      aboutEyebrow: "A LITTLE ABOUT ME",
      aboutTitle: "A curious mind with a builder's habit.",
      aboutText:
        "Neuroscience PhD. Biotech veteran. Snowboarder. Vibe coder running on 10B+ tokens a month. I turn complex ideas into tools people can actually use.",
      workEyebrow: "SELECTED WORK",
      workTitle: "A collection of things I've built.",
      workLead:
        "Different fields, one impulse: make complex decisions and ideas easier to explore.",
      all: "All projects",
      viewProject: "Explore project",
      visit: "Visit project",
      detailBack: "Back to all projects",
      detailPurpose: "Why it exists",
      detailHighlights: "What it does",
      detailInvolve: "Get involved",
      detailNext: "Up next",
      contactEyebrow: "LET'S CONNECT",
      contactTitle: "Have an idea worth building?",
      contactLead:
        "I’m always interested in thoughtful collaborations, useful tools, and good questions.",
      emailMe: "Email me",
      githubProfile: "GitHub profile",
      screenshot: "Project screenshot",
      figures:
        "Audience and download figures are owner-reported as of September 2026.",
      footerLine: "Made with curiosity. Built to be useful.",
      skip: "Skip to content",
      menu: "Open menu",
      closeMenu: "Close menu",
    },
    zh: {
      work: "作品",
      about: "关于",
      contact: "联系",
      explore: "浏览作品",
      heroEyebrow: "WEBSTER WANG / 个人作品集",
      heroTitle: "把想法<em>做成能用的东西。</em>",
      heroLead: "我做学习工具、临床研究工具，也在折腾股票研究和 AI 智能体。",
      heroAside: "想到新点子，就想动手试试。",
      artLearn: "学习",
      artBuild: "动手",
      artExplore: "探索",
      artProgress: "还在继续",
      artFields: "神经科学 / 生物医药 / 编程 / 滑雪",
      top: "顶部",
      aboutEyebrow: "关于我",
      aboutTitle: "想明白，也想做出来。",
      aboutText:
        "神经科学博士、生物医药老兵、单板滑雪爱好者，也是一位每月燃烧 100 亿+ token 的vibe coding玩家。我喜欢把复杂想法做成真正能用的工具。",
      workEyebrow: "精选作品",
      workTitle: "这些年做的项目。",
      workLead: "有的已经上线，有的还在打磨。点开看看我在做什么。",
      all: "全部项目",
      viewProject: "了解项目",
      visit: "访问项目",
      detailBack: "返回全部作品",
      detailPurpose: "为什么做",
      detailHighlights: "项目亮点",
      detailInvolve: "如何参与",
      detailNext: "下一个项目",
      contactEyebrow: "保持联系",
      contactTitle: "有想法？一起聊聊。",
      contactLead: "想合作、提建议，或者只是打个招呼，都欢迎给我写邮件。",
      emailMe: "发邮件给我",
      githubProfile: "GitHub 主页",
      screenshot: "项目截图",
      figures: "文中的访问量和下载量来自我提供的统计，数据截至 2026 年 9 月。",
      footerLine: "保持好奇，继续动手。",
      skip: "跳转到内容",
      menu: "打开菜单",
      closeMenu: "关闭菜单",
    },
  },
  categories: [
    {
      id: "published",
      en: "Published websites & apps",
      zh: "已上线网站与应用",
      noteEn: "Out in the world",
      noteZh: "已经有人在用",
    },
    {
      id: "learning",
      en: "Learning tools",
      zh: "学习工具",
      noteEn: "Make knowledge tangible",
      noteZh: "换个方式学",
    },
    {
      id: "biopharma",
      en: "Biopharma",
      zh: "生物医药",
      noteEn: "Evidence in context",
      noteZh: "选中心，多看几份依据",
    },
    {
      id: "finance",
      en: "Personal finance research",
      zh: "股票研究",
      noteEn: "Explore the evidence",
      noteZh: "排名之外，也看依据",
    },
    {
      id: "ai",
      en: "AI orchestration",
      zh: "AI 智能体协作",
      noteEn: "Teams that can be seen",
      noteZh: "谁在做什么，一眼看清",
    },
    {
      id: "next",
      en: "More to come",
      zh: "敬请期待",
      noteEn: "Still taking shape",
      noteZh: "还在构思",
    },
  ],
  projects: [
    {
      slug: "peervine",
      category: "published",
      index: "01",
      color: "mint",
      media: "screen",
      image: {
        en: "/assets/media/peervine-en.png",
        zh: "/assets/media/peervine-zh.png",
      },
      status: { en: "LIVE WEBSITE", zh: "已上线" },
      metric: { en: "50+ verified mentors", zh: "50 多位认证导师" },
      tags: { en: ["Mentorship", "Education"], zh: ["升学咨询", "教育"] },
      actions: [
        {
          en: "Visit PeerVine",
          zh: "访问 PeerVine",
          url: "https://peervine.org/",
          primary: true,
        },
        {
          en: "Become a mentor",
          zh: "申请成为导师",
          url: "https://peervine.org/",
          primary: false,
        },
      ],
      en: {
        title: "PeerVine",
        line: "Real mentors. Practical paths to dream schools.",
        summary:
          "PeerVine connects students with mentors who have firsthand experience in the programs they hope to join. With more than 50 verified mentors, it offers personal guidance on choosing schools, preparing applications, and navigating the path ahead.",
        purpose:
          "Choosing a school and preparing an application can feel opaque. PeerVine makes it easier to find a person who has already walked a similar path and can offer relevant, personal guidance.",
        highlights: [
          "A growing network of 50+ verified mentors",
          "Direct guidance on programs and applications",
          "One-to-one conversations grounded in lived experience",
        ],
        involvement:
          "Browse mentors if you are planning your next academic step, or join the network if you have experience worth sharing.",
        alt: "PeerVine homepage with mentor search and verified mentor count",
      },
      zh: {
        title: "PeerVine",
        line: "找走过这条路的人，聊聊下一步。",
        summary:
          "PeerVine 帮学生找到在目标院校或项目有亲身经历的导师。平台目前有 50 多位认证导师，可以聊选校、申请准备，也可以听听过来人的经验。",
        purpose:
          "申请学校时，公开信息不少，贴近自己情况的建议却不好找。PeerVine 想把学生和有亲身经历的导师连起来，让选择更有底。",
        highlights: [
          "平台已有 50 多位认证导师",
          "可以聊选校和申请准备",
          "和过来人一对一交流",
        ],
        involvement:
          "正在准备申请？先找位导师聊聊。如果你也走过这条路，欢迎加入导师团队。",
        alt: "PeerVine 首页，展示导师搜索和认证导师数量",
      },
    },
    {
      slug: "gradchoice",
      category: "published",
      index: "02",
      color: "blue",
      media: "screen",
      image: {
        en: "/assets/media/gradchoice-en.png",
        zh: "/assets/media/gradchoice-zh.png",
      },
      status: { en: "LIVE WEBSITE", zh: "已上线" },
      metric: { en: "50K+ visitors", zh: "超 5 万人访问" },
      tags: {
        en: ["Higher education", "Open source"],
        zh: ["高等教育", "开源"],
      },
      actions: [
        {
          en: "Visit GradChoice",
          zh: "访问研选",
          url: "https://gradchoice.org/",
          primary: true,
        },
        {
          en: "View source",
          zh: "查看源码",
          url: "https://github.com/linkbag/GradChoice",
          primary: false,
        },
      ],
      en: {
        title: "GradChoice",
        line: "A clearer view of the people behind the programs.",
        summary:
          "GradChoice is a free platform for anonymous graduate supervisor reviews at Chinese universities. Since launching in Q2 2026, it has welcomed more than 50,000 visitors. Its aim is to help students make a consequential academic choice with more information and room for honest experiences.",
        purpose:
          "The relationship with a graduate supervisor shapes years of research and daily life. GradChoice creates a place where students can learn from the experiences of others before making that choice.",
        highlights: [
          "Anonymous, student-contributed perspectives",
          "Free access to supervisor information",
          "Open source code and a transparent mission",
        ],
        involvement:
          "Explore supervisors, share a thoughtful review of your own experience, or contribute to the open source project.",
        alt: "GradChoice homepage with supervisor search and platform mission",
      },
      zh: {
        title: "研选 GradChoice",
        line: "选导师，先听听过来人的话。",
        summary:
          "研选 GradChoice 是一个免费的研究生导师匿名评价平台，聚焦中国高校。自 2026 年第二季度上线以来，已有超过 5 万人访问。它让学生有地方了解前人的真实经历，选导师也不用只靠打听。",
        purpose:
          "读研几年跟谁做研究，影响很大。研选希望让学生在决定前，多看看其他人的亲身经历。",
        highlights: [
          "学生匿名分享的导师评价",
          "免费查询导师信息",
          "网站代码开源",
        ],
        involvement:
          "可以查导师、写下自己的经历，也可以到 GitHub 一起改进网站。",
        alt: "研选首页，展示导师搜索与平台理念",
      },
    },
    {
      slug: "tap-to-learn",
      category: "published",
      index: "03",
      color: "cyan",
      media: "phone",
      image: {
        en: "/assets/media/tap-lookup.jpg",
        zh: "/assets/media/tap-lookup.jpg",
      },
      imageSecondary: "/assets/media/tap-example.jpg",
      status: { en: "ANDROID APP", zh: "安卓应用" },
      metric: { en: "20+ countries", zh: "用户来自 20 多个国家" },
      tags: {
        en: ["Language learning", "Android"],
        zh: ["语言学习", "Android"],
      },
      actions: [
        {
          en: "Get it on Google Play",
          zh: "前往 Google Play",
          url: "https://play.google.com/store/apps/details?id=com.lingualens.app",
          primary: true,
        },
      ],
      en: {
        title: "Tap to Learn",
        line: "Turn everyday reading into vocabulary practice.",
        summary:
          "Tap to Learn lets Android users look up words while reading across apps, then revisit them through saved vocabulary, flashcards, and quizzes. Since its Q2 2026 launch, it has approached 500 downloads from users in more than 20 countries. The goal is to make language practice part of reading itself.",
        purpose:
          "New words appear during the things we already read. Tap to Learn lets that moment of curiosity become a useful lookup and a future review opportunity.",
        highlights: [
          "Look up words across supported Android screens",
          "Save vocabulary for flashcards and quizzes",
          "Learn in the context of everyday reading",
        ],
        involvement:
          "Install the app on Android and send feedback about the words, screens, or learning moments you want it to handle better.",
        alt: "Tap to Learn Android word lookup screen",
      },
      zh: {
        title: "Tap to Learn",
        line: "读到生词，点一下就能学。",
        summary:
          "Tap to Learn 是一款 Android 查词与背词工具。在不同应用里读到生词，可以随手查、存进生词本，再用卡片和小测复习。自 2026 年第二季度上线以来，下载量接近 500 次，用户来自 20 多个国家。",
        purpose:
          "生词往往是在读东西时碰到的。Tap to Learn 想让查词和复习接在一起，不用为了记一个词专门切换学习场景。",
        highlights: [
          "在支持的 Android 页面里查词",
          "生词本、记忆卡片和小测",
          "边读边学，不脱离原来的语境",
        ],
        involvement:
          "如果你用 Android，欢迎下载试试。碰到不好查的页面或想改进的地方，也欢迎告诉我。",
        alt: "Tap to Learn 安卓应用的单词查询界面",
      },
    },
    {
      slug: "neuroaxis",
      category: "learning",
      index: "04",
      color: "violet",
      media: "screen",
      image: {
        en: "/assets/media/neuroaxis.png",
        zh: "/assets/media/neuroaxis.png",
      },
      status: { en: "AVAILABLE ON REQUEST", zh: "可联系获取" },
      metric: { en: "3D + 2D atlas", zh: "三维模型 + 二维切面" },
      tags: {
        en: ["Neuroanatomy", "Interactive atlas"],
        zh: ["神经解剖", "交互图谱"],
      },
      actions: [
        {
          en: "Request installation package",
          zh: "索取安装包",
          url: "mailto:websterwangai@gmail.com?subject=NeuroAxis%20installation%20package",
          primary: true,
        },
        {
          en: "View source",
          zh: "查看源码",
          url: "https://github.com/linkbag/neuroaxis-atlas",
          primary: false,
        },
      ],
      en: {
        title: "NeuroAxis",
        line: "Explore the brain from structure to function.",
        summary:
          "NeuroAxis is an interactive 3D neuroanatomy learning tool. Select structures in the model, follow synchronized 2D sections, and connect anatomy with clinical syndromes and reference notes. A free installation package is available on request, with an online version planned.",
        purpose:
          "Neuroanatomy becomes easier to reason about when the spatial model, sectional view, and clinical context can be explored together. NeuroAxis brings those views into one workspace.",
        highlights: [
          "Selectable 3D structures and anatomical layers",
          "2D sections synchronized with the model",
          "Clinical syndromes and structure-level reference notes",
        ],
        involvement:
          "Request the free installation package, explore the public source, and share feedback on the structures or learning flows that matter most to you.",
        alt: "NeuroAxis 3D brain atlas with selected putamen and synchronized section",
      },
      zh: {
        title: "NeuroAxis",
        line: "三维模型和二维切面，对着看才更明白。",
        summary:
          "NeuroAxis 是一款免费的交互式神经解剖学习工具。你可以点选三维模型中的结构，对照同步的二维切面，再结合临床综合征和参考资料理解它们。安装包可邮件索取，网页版还在计划中。",
        purpose:
          "只看平面图，很难在脑中拼出完整结构。NeuroAxis 把三维模型、切面和临床线索放在一起，方便来回对照。",
        highlights: [
          "点选三维结构，查看解剖层次",
          "二维切面跟着模型同步变化",
          "结合临床综合征和参考资料学习",
        ],
        involvement:
          "想试用可以给我发邮件索取免费安装包。源码也已公开，欢迎告诉我哪些结构或功能最值得改进。",
        alt: "NeuroAxis 三维脑图谱，展示选中的壳核和同步切面",
      },
    },
    {
      slug: "diffusionatlas",
      category: "learning",
      index: "05",
      color: "mint",
      media: "screen",
      image: {
        en: "/assets/media/diffusionatlas.png",
        zh: "/assets/media/diffusionatlas.png",
      },
      status: { en: "ONLINE VERSION PLANNED", zh: "网页版筹备中" },
      metric: { en: "One idea → growing map", zh: "从一个概念慢慢展开" },
      tags: { en: ["Knowledge graph", "Learning"], zh: ["知识图谱", "学习"] },
      actions: [
        {
          en: "Ask about availability",
          zh: "了解项目进展",
          url: "mailto:websterwangai@gmail.com?subject=DiffusionAtlas%20availability",
          primary: true,
        },
      ],
      en: {
        title: "DiffusionAtlas",
        line: "Start with one idea. Grow a map of what comes next.",
        summary:
          "DiffusionAtlas starts with a single concept and grows into a navigable knowledge graph as the learner explores. Its 2D and 3D views show relationships, prerequisites, and promising next concepts while keeping the starting map small. An online version is planned; visitors can contact me for availability and updates.",
        purpose:
          "A useful learning map should reveal just enough to guide the next step. DiffusionAtlas grows with the learner's exploration while keeping relationships and prerequisites visible.",
        highlights: [
          "Begin with one familiar concept",
          "Explore typed links between related ideas",
          "See suggested next concepts in 2D or 3D",
        ],
        involvement:
          "Contact me about access or share a subject area where a growing knowledge map would help you learn.",
        alt: "DiffusionAtlas concept graph with connected learning nodes",
      },
      zh: {
        title: "DiffusionAtlas",
        line: "从一个概念开始，越学越成图。",
        summary:
          "DiffusionAtlas 从你熟悉的一个概念起步。点开感兴趣的方向，知识图谱才继续展开，逐步呈现概念之间的关系、预备知识和可能的下一步。它有二维和三维视图，网页版还在筹备中。",
        purpose:
          "一开始就铺满屏幕的知识点，很容易让人迷路。这张图会跟着你的探索慢慢展开，同时保留概念之间的联系，方便决定下一步学什么。",
        highlights: [
          "从熟悉的概念开始，不用先看一整张大图",
          "点开概念，查看它与其他知识的关系",
          "在二维或三维视图里寻找下一步",
        ],
        involvement:
          "想了解试用方式，或者有特别想学的领域，都可以给我写邮件。",
        alt: "DiffusionAtlas 知识图谱，展示相连的学习概念",
      },
    },
    {
      slug: "siteselection",
      category: "biopharma",
      index: "06",
      color: "blue",
      media: "screen",
      image: {
        en: "/assets/media/siteselection.png",
        zh: "/assets/media/siteselection.png",
      },
      status: { en: "ONLINE VERSION PLANNED", zh: "网页版筹备中" },
      metric: { en: "Map + evidence", zh: "地图和中心资料一起看" },
      tags: {
        en: ["Clinical trials", "Site research"],
        zh: ["临床试验", "中心筛选"],
      },
      actions: [
        {
          en: "Ask about the tool",
          zh: "了解工具进展",
          url: "mailto:websterwangai@gmail.com?subject=SiteSelection%20tool",
          primary: true,
        },
      ],
      en: {
        title: "SiteSelection",
        line: "Put clinical trial sites on the map—and the evidence beside them.",
        summary:
          "SiteSelection brings authorized IQVIA DQS site exports and public ClinicalTrials.gov study information into an interactive map. It helps teams examine geography, site experience, and competing studies, then organize a shortlist for further review. The tool is intended to be free; an online version is planned.",
        purpose:
          "Site selection draws on multiple datasets and judgments. SiteSelection places those inputs side by side so a team can review its candidates with a clearer trail of evidence.",
        highlights: [
          "Interactive map and site-level inspection",
          "Study context from ClinicalTrials.gov",
          "Filtering, prioritization, and exportable shortlists",
        ],
        involvement:
          "Contact me about availability. To use your own data, you will need access to the relevant IQVIA DQS export.",
        alt: "Clinical Trial Site Selection Map with trial site markers and study details",
      },
      zh: {
        title: "SiteSelection",
        line: "临床试验选中心，先把数据摊开看。",
        summary:
          "SiteSelection 是临床试验中心筛选工具。它把经授权使用的 IQVIA DQS 数据和 ClinicalTrials.gov 的公开信息放到同一张地图上，方便比较中心位置、过往试验经验和同期试验情况，并整理候选名单。计划免费提供，网页版还在筹备中。",
        purpose:
          "选中心不能只看一个排名。团队还要了解位置、经验和周边试验情况；把这些资料放在一起，才方便讨论和复核。",
        highlights: [
          "在地图上查看中心和详细资料",
          "对照 ClinicalTrials.gov 的公开试验信息",
          "筛选中心并导出候选名单",
        ],
        involvement:
          "想了解工具进展，可以给我发邮件。若要分析自己的 DQS 数据，需要先确认有相应的数据使用权限。",
        alt: "临床试验中心选择地图，展示中心标记和试验详情",
      },
    },
    {
      slug: "us-stockselector",
      category: "finance",
      index: "07",
      color: "lime",
      media: "screen",
      image: {
        en: "/assets/media/us-stockselector.png",
        zh: "/assets/media/us-stockselector.png",
      },
      status: { en: "RESEARCH PROJECT", zh: "研究项目" },
      metric: { en: "Public-data research", zh: "基于公开数据的美股研究" },
      tags: {
        en: ["US equities", "Research dashboard"],
        zh: ["美股", "股票研究"],
      },
      actions: [
        {
          en: "Join project updates",
          zh: "订阅项目进展",
          url: "mailto:websterwangai@gmail.com?subject=US%20StockSelector%20updates",
          primary: true,
        },
      ],
      en: {
        title: "US StockSelector",
        line: "US equity research with the evidence in view.",
        summary:
          "US StockSelector combines public company data, valuation, quality, momentum, and market context into a daily research dashboard. It presents ranked candidates alongside data quality and investability checks so each result can be examined in context. Email me to join the project updates list.",
        purpose:
          "A ranking is more useful when its inputs and limits are easy to inspect. US StockSelector brings the underlying research, market setting, and data checks into the same daily view.",
        highlights: [
          "Daily research rankings from public data",
          "Quality, valuation, momentum, and market context",
          "Visible data-health and investability checks",
        ],
        involvement:
          "Email me to join the updates list and hear about the research workflow as it develops.",
        alt: "US StockSelector daily overview dashboard and market environment gauge",
      },
      zh: {
        title: "US StockSelector",
        line: "美股筛选，先看依据，再看排名。",
        summary:
          "US StockSelector 每天汇总公开公司数据，结合估值、企业质量、动量和市场环境整理候选股票。看板也会显示数据是否完整、股票是否符合基本交易条件，方便回头核对每只股票为什么进入名单。想收到项目更新，可以给我发邮件。",
        purpose:
          "我希望筛选结果不只是一个分数。把数据来源、市场环境和检查结果放在同一页，才更容易判断一只股票值不值得继续研究。",
        highlights: [
          "每天更新基于公开数据的研究名单",
          "结合估值、企业质量、动量和市场环境",
          "能查看数据完整性与交易条件检查",
        ],
        involvement: "想关注项目进展，可以发邮件给我，加入更新邮件列表。",
        alt: "US StockSelector 每日总览看板和市场环境仪表图",
      },
    },
    {
      slug: "a-share-stockselector",
      category: "finance",
      index: "08",
      color: "orange",
      media: "screen",
      image: {
        en: "/assets/media/ashare-stockselector.png",
        zh: "/assets/media/ashare-stockselector.png",
      },
      status: { en: "RESEARCH PROJECT", zh: "研究项目" },
      metric: { en: "CSI 800 universe", zh: "中证 800 股票池" },
      tags: {
        en: ["A-shares", "Research dashboard"],
        zh: ["A 股", "股票研究"],
      },
      actions: [
        {
          en: "Join project updates",
          zh: "订阅项目进展",
          url: "mailto:websterwangai@gmail.com?subject=A-share%20StockSelector%20updates",
          primary: true,
        },
      ],
      en: {
        title: "A-share StockSelector",
        line: "China market research built around A-share realities.",
        summary:
          "A-share StockSelector researches the CSI 800 universe using China-oriented market data and a Chinese-language dashboard. Its scoring and review flow accounts for local conditions such as suspensions and price limits, making the evidence behind a candidate easier to inspect. Email me to join project updates.",
        purpose:
          "A-share research needs to reflect the way the local market actually works. This tool keeps China-specific data, trading conditions, and candidate evidence together in one review flow.",
        highlights: [
          "Research across the CSI 800 universe",
          "China-oriented data sources and Chinese dashboard",
          "Checks for suspensions and price-limit conditions",
        ],
        involvement:
          "Email me to join the project updates list and follow the research workflow as it evolves.",
        alt: "A-share StockSelector Chinese dashboard with market status and candidate overview",
      },
      zh: {
        title: "A-share StockSelector",
        line: "筛 A 股，也要懂 A 股的规则。",
        summary:
          "A-share StockSelector 以中证 800 成分股为研究范围，结合中国市场的数据和交易规则制作中文看板。筛选时会把停牌、涨跌停等情况考虑进去，也能看到候选股票的相关依据。想了解后续进展，可以发邮件加入更新列表。",
        purpose:
          "A 股的交易规则会直接影响股票能不能买卖。研究候选名单时，应该把这些限制和筛选依据一起看。",
        highlights: [
          "以中证 800 成分股为研究范围",
          "中文看板，展示候选股票的筛选依据",
          "考虑停牌、涨跌停等交易限制",
        ],
        involvement: "想关注项目进展，可以发邮件给我，加入更新邮件列表。",
        alt: "A-share StockSelector 中文看板，展示市场状态和候选股票概览",
      },
    },
    {
      slug: "dsh-ai-swarm",
      category: "ai",
      index: "09",
      color: "lime",
      media: "screen",
      image: {
        en: "/assets/media/dsh-ai-swarm.png",
        zh: "/assets/media/dsh-ai-swarm.png",
      },
      status: { en: "OPEN SOURCE", zh: "开源项目" },
      metric: { en: "~6K recent downloads", zh: "最近一个月约 6,000 次下载" },
      tags: {
        en: ["AI agents", "Orchestration"],
        zh: ["AI 智能体", "任务编排"],
      },
      actions: [
        {
          en: "View and install",
          zh: "查看项目并安装",
          url: "https://github.com/linkbag/dsh-swarm-orchestrator",
          primary: true,
        },
      ],
      en: {
        title: "DSH-AI-Swarm",
        line: "One goal. A visible team of AI agents.",
        summary:
          "DSH-AI-Swarm turns a goal into a coordinated task graph inside DeepSeek Harness. Role-specific agents can work in parallel, pass through review gates, and show their progress on a live board. The project has recorded roughly 6,000 downloads in a recent month, according to the owner-reported figure.",
        purpose:
          "Complex work benefits from clear roles, visible progress, and a review step. DSH-AI-Swarm makes that coordination part of the agent workflow inside DeepSeek Harness.",
        highlights: [
          "Task graphs with parallel work where dependencies allow",
          "Role-specific models and review gates",
          "Live board and flow view for progress",
        ],
        involvement:
          "Install the open source plugin, try it on a real goal, and share feedback or issues through the repository.",
        alt: "DSH-AI-Swarm flow board with parallel agent tasks and review stages",
      },
      zh: {
        title: "DSH-AI-Swarm",
        line: "多个 AI 智能体一起干活，谁在做什么一眼看清。",
        summary:
          "DSH-AI-Swarm 是 DeepSeek Harness 的开源插件。给它一个目标，它会拆成有先后关系的任务，交给不同角色的智能体并行推进；看板能看到每一步的进度和审核情况。根据我提供的数据，最近一个月下载量约 6,000 次。",
        purpose:
          "多智能体一起做复杂任务，最怕分工和进度说不清。这个插件把任务、依赖关系和审核步骤都摆到明处。",
        highlights: [
          "按任务依赖安排并行工作",
          "给不同角色配置模型和审核步骤",
          "用看板和流程图跟踪进度",
        ],
        involvement:
          "可以从 GitHub 安装插件，拿自己的项目试试。遇到问题或有改进建议，欢迎在仓库里留言。",
        alt: "DSH-AI-Swarm 流程看板，展示并行任务和审核阶段",
      },
    },
    {
      slug: "indie-games",
      category: "next",
      index: "10",
      color: "violet",
      media: "abstract",
      image: null,
      status: { en: "COMING SOON", zh: "敬请期待" },
      metric: { en: "Playful experiments", zh: "还在构思" },
      tags: { en: ["Indie games", "Prototypes"], zh: ["独立游戏", "构思中"] },
      actions: [
        {
          en: "Follow on GitHub",
          zh: "关注 GitHub",
          url: "https://github.com/linkbag",
          primary: true,
        },
      ],
      en: {
        title: "Indie games",
        line: "Small games. New ideas to play with.",
        summary:
          "This space is reserved for independent game prototypes and experiments in playful interaction. As projects become playable, each will get its own screenshots, development notes, and a link to try it.",
        purpose:
          "Some ideas are best explored by playing with them. This is a place for small interactive experiments as they move from prototypes toward playable releases.",
        highlights: [
          "Independent game concepts",
          "Experiments in interaction and play",
          "Playable links as projects become ready",
        ],
        involvement:
          "Follow my GitHub profile for future prototypes and releases.",
        alt: "Abstract artwork for future indie game projects",
      },
      zh: {
        title: "独立游戏",
        line: "想做点好玩的，先在这里留个位置。",
        summary:
          "这里先留给以后做的独立游戏。我想试试一些交互和玩法上的小点子；等有能玩的版本，再放上截图、开发记录和试玩链接。",
        purpose:
          "有些想法，做成游戏比写成长篇说明更有意思。先留一块地方，慢慢把它们做出来。",
        highlights: [
          "一些还在构思的小项目",
          "想试试不同的交互和玩法",
          "有可玩版本后会放出试玩链接",
        ],
        involvement: "感兴趣的话，可以关注我的 GitHub。等做出能玩的版本，我会在这里更新。",
        alt: "为未来独立游戏项目设计的抽象图形",
      },
    },
  ],
};
