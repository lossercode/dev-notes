import { Navbar } from "@/components/Navbar";
import { CategoryCard } from "@/components/CategoryCard";

const categories = [
  {
    title: "AI前沿",
    description: "探索人工智能领域的最新进展，包括大语言模型、机器学习算法、AI 应用开发等前沿技术，帮助你紧跟技术潮流。",
    href: "/ai",
    icon: (
      <svg className="h-6 w-6 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611l-.996.165a9.065 9.065 0 01-2.889.184m-6.7-2.25l-.996.165c-1.717.293-2.3 2.379-1.067 3.611l1.402 1.402m8.45-5.35l-.827.827m-8.45 5.35l.827-.827" />
      </svg>
    ),
  },
  {
    title: "前端进阶",
    description: "深入前端开发核心技术，涵盖 React、Vue、TypeScript、性能优化、工程化实践等内容，助力成为优秀的前端工程师。",
    href: "/frontend",
    icon: (
      <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "后端学习",
    description: "系统学习后端开发知识，包括服务端架构、数据库设计、API 开发、微服务、容器化等，构建稳定可靠的服务端应用。",
    href: "/backend",
    icon: (
      <svg className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
              技术学习笔记
            </h1>
            <p className="mx-auto max-w-lg text-zinc-600 dark:text-zinc-400">
              记录学习过程中的思考与收获，分享技术实践中的经验与心得
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard
                key={category.href}
                title={category.title}
                description={category.description}
                href={category.href}
                icon={category.icon}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
