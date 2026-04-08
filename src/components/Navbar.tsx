import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
          Dev Notes
        </Link>
        <div className="flex items-center gap-6">
          <Link 
            href="/ai" 
            className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            AI前沿
          </Link>
          <Link 
            href="/frontend" 
            className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            前端进阶
          </Link>
          <Link 
            href="/backend" 
            className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            后端学习
          </Link>
        </div>
      </div>
    </nav>
  )
}
