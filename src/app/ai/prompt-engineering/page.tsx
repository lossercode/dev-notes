import { Navbar } from "@/components/Navbar"
import { DetailLayout } from "@/components/DetailLayout"
import { ArticleContent } from "@/components/ArticleContent"
import { aiNotes } from "@/data/notes"

const navItems = aiNotes.map(({ slug, title, tags }) => ({ slug, title, tags }))

export default function Page() {
  return (
    <>
      <Navbar />
      <DetailLayout
        categoryHref="/ai"
        categoryTitle="AI前沿"
        items={navItems}
        activeSlug="prompt-engineering"
      >
        <ArticleContent
          title="Prompt Engineering 最佳实践"
          description="如何编写高质量的提示词，让 AI 模型输出更准确、更有用的结果"
          date="2024-01-10"
          tags={["Prompt", "实践"]}
          readingMinutes={10}
        />
      </DetailLayout>
    </>
  )
}
