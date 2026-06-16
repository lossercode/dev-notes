import { Navbar } from "@/components/Navbar"
import { DetailLayout } from "@/components/DetailLayout"
import { ArticleContent } from "@/components/ArticleContent"

export default function Page() {
  return (
    <>
      <Navbar />
      <DetailLayout categoryHref="/">
        <ArticleContent
          title="现代 CSS 布局技术"
          description="Flexbox、Grid、Container Queries 等现代 CSS 布局方案的使用技巧"
          date="2024-01-03"
          tags={["CSS", "布局"]}
          readingMinutes={9}
        />
      </DetailLayout>
    </>
  )
}
