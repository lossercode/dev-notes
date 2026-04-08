import Link from "next/link"

interface CategoryLayoutProps {
  title: string
  description: string
  children: React.ReactNode
}

export function CategoryLayout({ title, description, children }: CategoryLayoutProps) {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-8">
          <Link 
            href="/" 
            className="mb-4 inline-flex items-center text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回首页
          </Link>
          <h1 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            {title}学习笔记
          </h1>
          <p className="max-w-2xl text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        </div>
        <div className="border-t border-zinc-200 pt-8 dark:border-zinc-800">
          {children}
        </div>
      </section>
    </main>
  )
}
