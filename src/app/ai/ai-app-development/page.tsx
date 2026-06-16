import { Navbar } from "@/components/Navbar"
import { DetailLayout } from "@/components/DetailLayout"
import { ArticleContent } from "@/components/ArticleContent"

export default function Page() {
  return (
    <>
      <Navbar />
      <DetailLayout categoryHref="/">
        <ArticleContent
          title="AI 应用开发入门"
          description="使用 LangChain、LlamaIndex 等框架快速构建 AI 应用的实战指南"
          date="2024-01-05"
          tags={["LangChain", "开发"]}
          readingMinutes={12}
        />
      </DetailLayout>
    </>
  )
}
