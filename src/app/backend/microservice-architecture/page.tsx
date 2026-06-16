import { Navbar } from "@/components/Navbar"
import { DetailLayout } from "@/components/DetailLayout"
import { ArticleContent } from "@/components/ArticleContent"

export default function Page() {
  return (
    <>
      <Navbar />
      <DetailLayout categoryHref="/">
        <ArticleContent
          title="微服务架构设计模式"
          description="服务拆分、通信方式、数据一致性等微服务架构核心问题的解决方案"
          date="2024-01-13"
          tags={["微服务", "架构"]}
          readingMinutes={15}
        />
      </DetailLayout>
    </>
  )
}
