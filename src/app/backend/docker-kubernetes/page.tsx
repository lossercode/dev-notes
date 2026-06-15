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
        activeSlug="docker-kubernetes"
      >
        <ArticleContent
          title="Docker 与 Kubernetes 入门"
          description="容器化部署与编排的基础知识，快速上手云原生应用开发"
          date="2024-01-04"
          tags={["Docker", "K8s"]}
          readingMinutes={14}
        />
      </DetailLayout>
    </>
  )
}
