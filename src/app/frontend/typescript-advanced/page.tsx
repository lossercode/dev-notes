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
        activeSlug="typescript-advanced"
      >
        <ArticleContent
          title="TypeScript 高级类型技巧"
          description="掌握泛型、条件类型、映射类型等高级类型特性，写出更健壮的代码"
          date="2024-01-12"
          tags={["TypeScript", "类型"]}
          readingMinutes={13}
        />
      </DetailLayout>
    </>
  )
}
