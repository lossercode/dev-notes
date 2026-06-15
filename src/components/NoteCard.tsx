import Link from "next/link"

interface NoteCardProps {
  title: string
  description: string
  date: string
  tags?: string[]
  /** 点击跳转的链接，传入时整个卡片变为可点击链接 */
  href?: string
}

export function NoteCard({ title, description, date, tags, href }: NoteCardProps) {
  const inner = (
    <article className="group rounded-lg border border-zinc-200 bg-white p-5 transition-all hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 h-full flex flex-col">
      <h3 className="mb-2 font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
        {title}
      </h3>
      <p className="mb-3 flex-1 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
        {description}
      </p>
      <div className="flex items-center justify-between">
        <time className="text-xs text-zinc-400 dark:text-zinc-500">
          {date}
        </time>
        <div className="flex items-center gap-2">
          {tags && tags.length > 0 && (
            <div className="flex gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          {href && (
            <svg
              className="h-3.5 w-3.5 text-zinc-300 dark:text-zinc-600 transition-transform group-hover:translate-x-0.5 group-hover:text-zinc-500 dark:group-hover:text-zinc-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          )}
        </div>
      </div>
    </article>
  )

  if (href) {
    return (
      <Link href={href} className="block">
        {inner}
      </Link>
    )
  }

  return inner
}
