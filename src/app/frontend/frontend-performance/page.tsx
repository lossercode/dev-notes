import { Navbar } from "@/components/Navbar"
import { DetailLayout } from "@/components/DetailLayout"
import { ArticleContent } from "@/components/ArticleContent"
import { frontendNotes } from "@/data/notes"

const navItems = frontendNotes.map(({ slug, title, tags }) => ({ slug, title, tags }))

export default function Page() {
  return (
    <>
      <Navbar />
      <DetailLayout
        categoryHref="/frontend"
        categoryTitle="前端进阶"
        items={navItems}
        activeSlug="frontend-performance"
      >
        <ArticleContent
          title="前端性能优化实战"
          description="从加载性能、运行时性能两个维度，系统性地优化前端应用体验"
          date="2024-01-08"
          tags={["性能优化", "实践"]}
          readingMinutes={16}
        />
      </DetailLayout>
    </>
  )
}
