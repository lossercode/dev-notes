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
        activeSlug="api-design"
      >
        <ArticleContent
          title="API 设计最佳实践"
          description="RESTful API 设计规范、错误处理、版本管理、安全认证等实践经验"
          date="2024-01-07"
          tags={["API", "REST"]}
          readingMinutes={8}
        />
      </DetailLayout>
    </>
  )
}
