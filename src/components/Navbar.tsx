import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Dev Notes
        </Link>
        <span className="text-xs text-zinc-400 dark:text-zinc-600 select-none">
          技术学习笔记
        </span>
      </div>
    </nav>
  )
}
