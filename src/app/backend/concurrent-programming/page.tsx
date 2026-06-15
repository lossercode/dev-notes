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
        activeSlug="concurrent-programming"
      >
        <ArticleContent
          title="并发编程"
          description="Java 并发编程核心知识：线程模型、锁机制、并发容器与线程池的原理与实践。"
          date="2024-01-13"
          tags={["Java", "并发"]}
          readingMinutes={12}
        />
      </DetailLayout>
    </>
  )
}
