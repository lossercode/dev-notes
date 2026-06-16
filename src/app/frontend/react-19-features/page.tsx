import { Navbar } from "@/components/Navbar"
import { DetailLayout } from "@/components/DetailLayout"
import { ArticleContent } from "@/components/ArticleContent"

export default function Page() {
  return (
    <>
      <Navbar />
      <DetailLayout categoryHref="/">
        <ArticleContent
          title="React 19 新特性详解"
          description="深入了解 React 19 带来的新特性：Actions、use hook、Server Components 等"
          date="2024-01-14"
          tags={["React", "新特性"]}
          readingMinutes={11}
        />
      </DetailLayout>
    </>
  )
}
