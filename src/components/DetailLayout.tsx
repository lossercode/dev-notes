"use client"

import Link from "next/link"
import { useState } from "react"

export interface NavItem {
  title: string
  slug: string
  tags?: string[]
}

interface DetailLayoutProps {
  /** 所属分类的 href，如 "/backend" */
  categoryHref: string
  /** 所属分类的中文名称 */
  categoryTitle: string
  /** 该分类下的所有条目，用于渲染左侧导航 */
  items: NavItem[]
  /** 当前活跃的 slug */
  activeSlug: string
  children: React.ReactNode
}

export function DetailLayout({
  categoryHref,
  categoryTitle,
  items,
  activeSlug,
  children,
}: DetailLayoutProps) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] w-full">
      {/* ── 左侧导航栏 ── */}
      <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-zinc-100 dark:border-zinc-800/60 bg-white dark:bg-zinc-950 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="px-4 py-5">
          {/* 返回分类 */}
          <Link
            href={categoryHref}
            className="group mb-5 flex items-center gap-1.5 text-xs font-medium text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
          >
            <svg
              className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {categoryTitle}
          </Link>

          {/* 分类标题 */}
          <p className="mb-3 px-2 text-[10px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600 select-none">
            本章内容
          </p>

          {/* 导航条目列表 */}
          <nav className="flex flex-col gap-0.5">
            {items.map((item) => {
              const isActive = item.slug === activeSlug
              return (
                <Link
                  key={item.slug}
                  href={`${categoryHref}/${item.slug}`}
                  className={`group relative flex flex-col rounded-md px-3 py-2.5 text-sm transition-all ${
                    isActive
                      ? "bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-100"
                  }`}
                >
                  {/* 激活指示线 */}
                  {isActive && (
                    <span className="absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                  )}
                  <span className="font-medium leading-snug">{item.title}</span>
                  {item.tags && item.tags.length > 0 && (
                    <span className="mt-1 text-[10px] leading-none text-zinc-400 dark:text-zinc-600">
                      {item.tags.slice(0, 2).join(" · ")}
                    </span>
                  )}
                </Link>
              )
            })}
          </nav>
        </div>
      </aside>

      {/* ── 移动端底部导航（sm/md） ── */}
      <MobileNav
        categoryHref={categoryHref}
        categoryTitle={categoryTitle}
        items={items}
        activeSlug={activeSlug}
      />

      {/* ── 右侧内容区 ── */}
      <main className="flex-1 min-w-0">
        {children}
      </main>
    </div>
  )
}

/* ──────────────────────────────────────────────
   移动端折叠导航
────────────────────────────────────────────── */
function MobileNav({
  categoryHref,
  categoryTitle,
  items,
  activeSlug,
}: {
  categoryHref: string
  categoryTitle: string
  items: NavItem[]
  activeSlug: string
}) {
  const [open, setOpen] = useState(false)
  const activeItem = items.find((i) => i.slug === activeSlug)

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-zinc-100 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3 text-sm"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2">
          <span className="text-zinc-400 dark:text-zinc-500 text-xs">{categoryTitle}</span>
          <span className="text-zinc-200 dark:text-zinc-700">/</span>
          <span className="font-medium text-zinc-900 dark:text-zinc-100">
            {activeItem?.title ?? "选择章节"}
          </span>
        </span>
        <svg
          className={`h-4 w-4 text-zinc-400 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="border-t border-zinc-100 dark:border-zinc-800 px-3 pb-4 pt-2">
          <nav className="grid grid-cols-2 gap-1 sm:grid-cols-3">
            {items.map((item) => {
              const isActive = item.slug === activeSlug
              return (
                <Link
                  key={item.slug}
                  href={`${categoryHref}/${item.slug}`}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2 text-sm transition-all ${
                    isActive
                      ? "bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 font-medium"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                  }`}
                >
                  {item.title}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </div>
  )
}
