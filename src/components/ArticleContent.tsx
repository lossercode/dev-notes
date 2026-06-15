interface ArticleContentProps {
  title: string
  description: string
  date: string
  tags?: string[]
  /** 文章正文内容，支持传入 React 节点（例如 MDX 渲染结果）或纯段落 */
  children?: React.ReactNode
  /** 预计阅读时长（分钟），不传则不展示 */
  readingMinutes?: number
}

export function ArticleContent({
  title,
  description,
  date,
  tags,
  children,
  readingMinutes,
}: ArticleContentProps) {
  return (
    <article className="mx-auto max-w-2xl px-6 py-10 lg:px-10 lg:py-12">
      {/* ── 文章头部 ── */}
      <header className="mb-8 border-b border-zinc-100 dark:border-zinc-800 pb-8">
        {/* 标签 */}
        {tags && tags.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-sm bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 text-[11px] font-medium text-zinc-500 dark:text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* 标题 */}
        <h1 className="mb-3 text-2xl font-semibold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50">
          {title}
        </h1>

        {/* 描述 */}
        <p className="mb-4 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          {description}
        </p>

        {/* 元信息行 */}
        <div className="flex items-center gap-4 text-xs text-zinc-400 dark:text-zinc-600">
          <time dateTime={date}>{date}</time>
          {readingMinutes !== undefined && (
            <>
              <span className="h-3 w-px bg-zinc-200 dark:bg-zinc-700" />
              <span>约 {readingMinutes} 分钟阅读</span>
            </>
          )}
        </div>
      </header>

      {/* ── 文章正文 ── */}
      {children ? (
        <div className="prose-custom">{children}</div>
      ) : (
        <PlaceholderContent title={title} />
      )}
    </article>
  )
}

/* ──────────────────────────────────────────────
   占位内容（无正文时展示示例结构）
────────────────────────────────────────────── */
function PlaceholderContent({ title }: { title: string }) {
  return (
    <div className="space-y-6">
      <Section heading="概述">
        <p>
          本篇笔记将深入探讨 <strong>{title}</strong>{" "}
          的核心概念与实战技巧，帮助你系统性地建立知识体系。
        </p>
      </Section>

      <Section heading="核心概念">
        <ul>
          <li>理解底层原理，而不仅仅是 API 用法</li>
          <li>常见误区与最佳实践对比</li>
          <li>生产环境中的注意事项</li>
        </ul>
      </Section>

      <Section heading="代码示例">
        <CodeBlock>
          {`// 示例代码将在后续更新中补充
// 敬请期待...`}
        </CodeBlock>
      </Section>

      <Section heading="延伸阅读">
        <ul>
          <li>官方文档与 RFC 提案</li>
          <li>社区优质博客与案例分析</li>
          <li>相关开源项目源码解析</li>
        </ul>
      </Section>

      <div className="rounded-md border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-4 py-3 text-sm text-zinc-500 dark:text-zinc-400">
        📝 该笔记正在持续完善中，内容将逐步丰富。
      </div>
    </div>
  )
}

function Section({
  heading,
  children,
}: {
  heading: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h2 className="mb-3 text-base font-semibold text-zinc-800 dark:text-zinc-200">
        {heading}
      </h2>
      <div className="space-y-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400 [&_strong]:text-zinc-800 dark:[&_strong]:text-zinc-200 [&_ul]:ml-4 [&_ul]:list-disc [&_ul]:space-y-1.5">
        {children}
      </div>
    </section>
  )
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="overflow-x-auto rounded-md border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 px-4 py-3 text-xs leading-relaxed text-zinc-700 dark:text-zinc-300 font-mono">
      <code>{children}</code>
    </pre>
  )
}
