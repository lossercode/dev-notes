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
        activeSlug="system-hardening"
        baseHref="/ai/agent-principles"
      >
        <ArticleContent
          title="系统加固"
          description="提示注入防御、沙箱隔离、权限最小化、幂等工具设计——让 Agent 在生产环境中安全可靠地运行。"
          date="2024-01-10"
          tags={["安全", "沙箱"]}
          readingMinutes={14}
        />
      </DetailLayout>
    </>
  )
}
