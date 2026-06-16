import { Navbar } from "@/components/Navbar"
import { DetailLayout } from "@/components/DetailLayout"
import { ArticleContent } from "@/components/ArticleContent"

export default function Page() {
  return (
    <>
      <Navbar />
      <DetailLayout categoryHref="/">
        <ArticleContent
          title="RAG 检索增强生成技术"
          description="结合向量数据库与大语言模型，构建更智能的知识问答系统"
          date="2024-01-02"
          tags={["RAG", "向量数据库"]}
          readingMinutes={14}
        />
      </DetailLayout>
    </>
  )
}
