import Link from 'next/link'

export interface CategoryCardProps {
  title: string
  description: string
  href: string
  icon: React.ReactNode
}

export function CategoryCard({ title, description, href, icon }: CategoryCardProps) {
  return (
    <Link href={href}>
      <article className="group flex h-full flex-col rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-50 dark:bg-zinc-800">
          {icon}
        </div>
        <h3 className="mb-2 text-lg font-medium text-zinc-900 dark:text-zinc-100">
          {title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
        <div className="mt-4 flex items-center text-sm font-medium text-zinc-500 transition-colors group-hover:text-zinc-900 dark:text-zinc-500 dark:group-hover:text-zinc-100">
          开始学习
          <svg 
            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </article>
    </Link>
  )
}
