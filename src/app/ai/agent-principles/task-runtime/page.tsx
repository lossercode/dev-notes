import { Navbar } from "@/components/Navbar"
import { DetailLayout } from "@/components/DetailLayout"
import { ArticleContent } from "@/components/ArticleContent"
import { agentPrinciplesChapters } from "@/data/notes"

const navItems = agentPrinciplesChapters.map(({ slug, title }) => ({
  slug,
  title,
  tags: [] as string[],
}))

export default function Page() {
  return (
    <>
      <Navbar />
      <DetailLayout
        categoryHref="/"
        categoryTitle="Agent 原理与实现"
        items={navItems}
        activeSlug="task-runtime"
        baseHref="/ai/agent-principles"
      >
        <ArticleContent
          title="任务运行时"
          description="长期记忆与短期上下文管理、工具调用协议（Function Calling / MCP）、流式输出与中断恢复。"
          date="2024-01-10"
          tags={["记忆", "工具调用"]}
          readingMinutes={16}
        />
      </DetailLayout>
    </>
  )
}
