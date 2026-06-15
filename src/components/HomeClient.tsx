"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import type { Note } from "@/data/notes"

/* ── 分类配置 ── */
interface Category {
  key: string
  title: string
  description: string
  basePath: string
  accent: string          // Tailwind text color class
  accentBg: string        // Tailwind bg class for icon bg
  icon: React.ReactNode
}

const categories: Category[] = [
  {
    key: "ai",
    title: "AI 前沿",
    description: "大语言模型、机器学习算法、AI 应用开发等前沿技术",
    basePath: "/ai",
    accent: "text-violet-500",
    accentBg: "bg-violet-50 dark:bg-violet-950/40",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611l-.996.165a9.065 9.065 0 01-2.889.184m-6.7-2.25l-.996.165c-1.717.293-2.3 2.379-1.067 3.611l1.402 1.402" />
      </svg>
    ),
  },
  {
    key: "frontend",
    title: "前端进阶",
    description: "React、TypeScript、性能优化、工程化实践等核心技术",
    basePath: "/frontend",
    accent: "text-blue-500",
    accentBg: "bg-blue-50 dark:bg-blue-950/40",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    key: "backend",
    title: "后端学习",
    description: "服务端架构、数据库设计、API 开发、微服务与容器化",
    basePath: "/backend",
    accent: "text-emerald-500",
    accentBg: "bg-emerald-50 dark:bg-emerald-950/40",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
]

/* ── Props ── */
interface HomeClientProps {
  allNotes: Record<string, Note[]>
}

export function HomeClient({ allNotes }: HomeClientProps) {
  const [query, setQuery] = useState("")

  /* 搜索过滤：标题、描述、标签都命中 */
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return allNotes
    const result: Record<string, Note[]> = {}
    for (const [key, notes] of Object.entries(allNotes)) {
      const matched = notes.filter(
        (n) =>
          n.title.toLowerCase().includes(q) ||
          n.description.toLowerCase().includes(q) ||
          n.tags.some((t) => t.toLowerCase().includes(q))
      )
      if (matched.length > 0) result[key] = matched
    }
    return result
  }, [allNotes, query])

  const totalCount = Object.values(allNotes).reduce((s, a) => s + a.length, 0)
  const filteredCount = Object.values(filtered).reduce((s, a) => s + a.length, 0)
  const hasQuery = query.trim().length > 0

  return (
    <main className="flex-1">
      <div className="mx-auto max-w-5xl px-6 py-14">

        {/* ── Hero ── */}
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            技术学习笔记
          </h1>
          <p className="mx-auto max-w-md text-sm text-zinc-500 dark:text-zinc-400">
            记录学习过程中的思考与收获，分享技术实践中的经验与心得
          </p>
        </div>

        {/* ── 搜索框 ── */}
        <div className="relative mx-auto mb-12 max-w-lg">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
            <svg
              className="h-4 w-4 text-zinc-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜索标题、描述、标签…"
            className="w-full rounded-lg border border-zinc-200 bg-white py-2.5 pl-10 pr-10 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-zinc-400 focus:ring-0 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-zinc-500"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
              aria-label="清空搜索"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* ── 搜索结果提示 ── */}
        {hasQuery && (
          <p className="mb-8 text-center text-xs text-zinc-400 dark:text-zinc-500">
            {filteredCount > 0
              ? `共找到 ${filteredCount} / ${totalCount} 篇笔记`
              : "未找到相关笔记，换个关键词试试"}
          </p>
        )}

        {/* ── 无结果提示 ── */}
        {hasQuery && filteredCount === 0 && (
          <div className="flex flex-col items-center gap-3 py-16 text-zinc-400 dark:text-zinc-600">
            <svg className="h-10 w-10 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            <p className="text-sm">暂无匹配内容</p>
          </div>
        )}

        {/* ── 分类区块 ── */}
        <div className="space-y-12">
          {categories.map((cat) => {
            const notes = filtered[cat.key]
            if (!notes || notes.length === 0) return null
            return (
              <CategorySection
                key={cat.key}
                category={cat}
                notes={notes}
                highlight={hasQuery ? query.trim() : ""}
              />
            )
          })}
        </div>
      </div>
    </main>
  )
}

/* ──────────────────────────────────────────────
   单个分类区块
────────────────────────────────────────────── */
function CategorySection({
  category,
  notes,
  highlight,
}: {
  category: Category
  notes: Note[]
  highlight: string
}) {
  return (
    <section>
      {/* 分类标题行 */}
      <div className="mb-4 flex items-center gap-3">
        <div className={`flex h-7 w-7 items-center justify-center rounded-md ${category.accentBg} ${category.accent}`}>
          {category.icon}
        </div>
        <div>
          <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
            {category.title}
          </h2>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">{category.description}</p>
        </div>
        <span className="ml-auto text-xs text-zinc-300 dark:text-zinc-600 tabular-nums">
          {notes.length} 篇
        </span>
      </div>

      {/* 分割线 */}
      <div className="mb-5 h-px bg-zinc-100 dark:bg-zinc-800" />

      {/* 子卡片网格 */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <NoteItem
            key={note.slug}
            note={note}
            basePath={category.basePath}
            accent={category.accent}
            highlight={highlight}
          />
        ))}
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   单篇笔记卡片
────────────────────────────────────────────── */
function NoteItem({
  note,
  basePath,
  accent,
  highlight,
}: {
  note: Note
  basePath: string
  accent: string
  highlight: string
}) {
  return (
    <Link href={`${basePath}/${note.slug}`} className="group block">
      <article className="flex h-full flex-col rounded-lg border border-zinc-150 bg-white p-4 transition-all duration-150 hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600">
        {/* 标题 */}
        <h3 className="mb-1.5 text-sm font-medium leading-snug text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
          <HighlightText text={note.title} query={highlight} />
        </h3>

        {/* 描述 */}
        <p className="mb-3 flex-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-2">
          <HighlightText text={note.description} query={highlight} />
        </p>

        {/* 底部：标签 + 阅读时长 */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1">
            {note.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-sm bg-zinc-100 px-1.5 py-0.5 text-[10px] font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
              >
                <HighlightText text={tag} query={highlight} />
              </span>
            ))}
          </div>
          {note.readingMinutes && (
            <span className={`shrink-0 text-[10px] font-medium ${accent} opacity-70`}>
              {note.readingMinutes} min
            </span>
          )}
        </div>
      </article>
    </Link>
  )
}

/* ──────────────────────────────────────────────
   关键词高亮
────────────────────────────────────────────── */
function HighlightText({ text, query }: { text: string; query: string }) {
  if (!query) return <>{text}</>
  const idx = text.toLowerCase().indexOf(query.toLowerCase())
  if (idx === -1) return <>{text}</>
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300 rounded-sm px-0.5">
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  )
}
