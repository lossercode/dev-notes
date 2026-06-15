import { Navbar } from "@/components/Navbar"
import { DetailLayout } from "@/components/DetailLayout"
import { ArticleContent } from "@/components/ArticleContent"
import { backendNotes } from "@/data/notes"

const navItems = backendNotes.map(({ slug, title, tags }) => ({ slug, title, tags }))

export default function Page() {
  return (
    <>
      <Navbar />
      <DetailLayout
        categoryHref="/backend"
        categoryTitle="后端学习"
        items={navItems}
        activeSlug="database-tuning"
      >
        <ArticleContent
          title="数据库性能调优指南"
          description="索引优化、查询优化、连接池配置等数据库性能优化的实用技巧"
          date="2024-01-11"
          tags={["数据库", "优化"]}
          readingMinutes={10}
        />
      </DetailLayout>
    </>
  )
}
