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
        activeSlug="core-loop"
        baseHref="/ai/agent-principles"
      >
        <ArticleContent
          title="核心闭环"
          description="Agent 的 Perceive → Think → Act 感知-思考-行动循环，理解 ReAct / Plan-and-Execute 等范式的本质。"
          date="2024-01-10"
          tags={["Agent", "ReAct"]}
          readingMinutes={12}
        />
      </DetailLayout>
    </>
  )
}
