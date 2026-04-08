import { Navbar } from "@/components/Navbar";
import { CategoryLayout } from "@/components/CategoryLayout";
import { NoteCard } from "@/components/NoteCard";

const frontendNotes = [
  {
    title: "React 19 新特性详解",
    description: "深入了解 React 19 带来的新特性：Actions、use hook、Server Components 等",
    date: "2024-01-14",
    tags: ["React", "新特性"],
  },
  {
    title: "TypeScript 高级类型技巧",
    description: "掌握泛型、条件类型、映射类型等高级类型特性，写出更健壮的代码",
    date: "2024-01-12",
    tags: ["TypeScript", "类型"],
  },
  {
    title: "前端性能优化实战",
    description: "从加载性能、运行时性能两个维度，系统性地优化前端应用体验",
    date: "2024-01-08",
    tags: ["性能优化", "实践"],
  },
  {
    title: "现代 CSS 布局技术",
    description: "Flexbox、Grid、Container Queries 等现代 CSS 布局方案的使用技巧",
    date: "2024-01-03",
    tags: ["CSS", "布局"],
  },
];

export default function FrontendPage() {
  return (
    <>
      <Navbar />
      <CategoryLayout
        title="前端进阶"
        description="深入前端开发核心技术，涵盖 React、Vue、TypeScript、性能优化、工程化实践等内容。"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {frontendNotes.map((note) => (
            <NoteCard
              key={note.title}
              title={note.title}
              description={note.description}
              date={note.date}
              tags={note.tags}
            />
          ))}
        </div>
      </CategoryLayout>
    </>
  );
}
