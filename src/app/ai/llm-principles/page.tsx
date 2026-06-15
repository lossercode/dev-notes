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
        activeSlug="llm-principles"
      >
        <ArticleContent
          title="大语言模型原理解析"
          description="深入了解 Transformer 架构、注意力机制、预训练与微调等核心概念"
          date="2024-01-15"
          tags={["LLM", "Transformer"]}
          readingMinutes={18}
        />
      </DetailLayout>
    </>
  )
}
