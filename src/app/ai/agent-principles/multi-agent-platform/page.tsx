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
        activeSlug="multi-agent-platform"
        baseHref="/ai/agent-principles"
      >
        <ArticleContent
          title="多 Agent 平台"
          description="Orchestrator-Worker 架构、Agent 间通信与协作协议、任务路由与结果聚合的工程实践。"
          date="2024-01-10"
          tags={["多Agent", "架构"]}
          readingMinutes={18}
        />
      </DetailLayout>
    </>
  )
}
