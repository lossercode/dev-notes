interface NoteCardProps {
  title: string
  description: string
  date: string
  tags?: string[]
}

export function NoteCard({ title, description, date, tags }: NoteCardProps) {
  return (
    <article className="group rounded-lg border border-zinc-200 bg-white p-5 transition-all hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
      <h3 className="mb-2 font-medium text-zinc-900 dark:text-zinc-100">
        {title}
      </h3>
      <p className="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
      <div className="flex items-center justify-between">
        <time className="text-xs text-zinc-400 dark:text-zinc-500">
          {date}
        </time>
        {tags && tags.length > 0 && (
          <div className="flex gap-2">
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
      </div>
    </article>
  )
}
