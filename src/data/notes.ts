export interface Note {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  readingMinutes?: number
  /** 子章节列表，有则在详情页展示自定义目录 */
  chapters?: Chapter[]
}

export interface Chapter {
  slug: string
  title: string
  description: string
}

/* ──────────────────────────────────────────────
   Agent 原理与实现 — 子章节
────────────────────────────────────────────── */
export const agentPrinciplesChapters: Chapter[] = [
  {
    slug: "core-loop",
    title: "核心闭环",
    description: "Agent 的 Perceive → Think → Act 感知-思考-行动循环，理解 ReAct / Plan-and-Execute 等范式的本质。",
  },
  {
    slug: "system-hardening",
    title: "系统加固",
    description: "提示注入防御、沙箱隔离、权限最小化、幂等工具设计——让 Agent 在生产环境中安全可靠地运行。",
  },
  {
    slug: "task-runtime",
    title: "任务运行时",
    description: "长期记忆与短期上下文管理、工具调用协议（Function Calling / MCP）、流式输出与中断恢复。",
  },
  {
    slug: "multi-agent-platform",
    title: "多 Agent 平台",
    description: "Orchestrator-Worker 架构、Agent 间通信与协作协议、任务路由与结果聚合的工程实践。",
  },
]

/* ──────────────────────────────────────────────
   后端学习
────────────────────────────────────────────── */
export const backendNotes: Note[] = [
  {
    slug: "concurrent-programming",
    title: "并发编程",
    description: "Java 并发编程核心知识：线程模型、锁机制、并发容器与线程池的原理与实践。",
    date: "2024-01-13",
    tags: ["Java", "并发"],
    readingMinutes: 12,
  },
  {
    slug: "microservice-architecture",
    title: "微服务架构设计模式",
    description: "服务拆分、通信方式、数据一致性等微服务架构核心问题的解决方案",
    date: "2024-01-13",
    tags: ["微服务", "架构"],
    readingMinutes: 15,
  },
  {
    slug: "database-tuning",
    title: "数据库性能调优指南",
    description: "索引优化、查询优化、连接池配置等数据库性能优化的实用技巧",
    date: "2024-01-11",
    tags: ["数据库", "优化"],
    readingMinutes: 10,
  },
  {
    slug: "api-design",
    title: "API 设计最佳实践",
    description: "RESTful API 设计规范、错误处理、版本管理、安全认证等实践经验",
    date: "2024-01-07",
    tags: ["API", "REST"],
    readingMinutes: 8,
  },
  {
    slug: "docker-kubernetes",
    title: "Docker 与 Kubernetes 入门",
    description: "容器化部署与编排的基础知识，快速上手云原生应用开发",
    date: "2024-01-04",
    tags: ["Docker", "K8s"],
    readingMinutes: 14,
  },
]

/* ──────────────────────────────────────────────
   前端进阶
────────────────────────────────────────────── */
export const frontendNotes: Note[] = [
  {
    slug: "react-19-features",
    title: "React 19 新特性详解",
    description: "深入了解 React 19 带来的新特性：Actions、use hook、Server Components 等",
    date: "2024-01-14",
    tags: ["React", "新特性"],
    readingMinutes: 11,
  },
  {
    slug: "typescript-advanced",
    title: "TypeScript 高级类型技巧",
    description: "掌握泛型、条件类型、映射类型等高级类型特性，写出更健壮的代码",
    date: "2024-01-12",
    tags: ["TypeScript", "类型"],
    readingMinutes: 13,
  },
  {
    slug: "frontend-performance",
    title: "前端性能优化实战",
    description: "从加载性能、运行时性能两个维度，系统性地优化前端应用体验",
    date: "2024-01-08",
    tags: ["性能优化", "实践"],
    readingMinutes: 16,
  },
  {
    slug: "modern-css-layout",
    title: "现代 CSS 布局技术",
    description: "Flexbox、Grid、Container Queries 等现代 CSS 布局方案的使用技巧",
    date: "2024-01-03",
    tags: ["CSS", "布局"],
    readingMinutes: 9,
  },
]

/* ──────────────────────────────────────────────
   AI 前沿
────────────────────────────────────────────── */
export const aiNotes: Note[] = [
  {
    slug: "llm-principles",
    title: "大语言模型原理解析",
    description: "深入了解 Transformer 架构、注意力机制、预训练与微调等核心概念",
    date: "2024-01-15",
    tags: ["LLM", "Transformer"],
    readingMinutes: 18,
  },
  {
    slug: "agent-principles",
    title: "Agent 原理与实现",
    description: "深入理解 AI Agent 的核心原理，包括规划、记忆、工具调用等关键能力的设计与实现",
    date: "2024-01-10",
    tags: ["Agent", "原理"],
    readingMinutes: 15,
  },
  {
    slug: "ai-app-development",
    title: "AI 应用开发入门",
    description: "使用 LangChain、LlamaIndex 等框架快速构建 AI 应用的实战指南",
    date: "2024-01-05",
    tags: ["LangChain", "开发"],
    readingMinutes: 12,
  },
  {
    slug: "rag-retrieval",
    title: "RAG 检索增强生成技术",
    description: "结合向量数据库与大语言模型，构建更智能的知识问答系统",
    date: "2024-01-02",
    tags: ["RAG", "向量数据库"],
    readingMinutes: 14,
  },
]
