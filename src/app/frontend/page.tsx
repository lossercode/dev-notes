import { Navbar } from "@/components/Navbar";
import { CategoryLayout } from "@/components/CategoryLayout";
import { NoteCard } from "@/components/NoteCard";
import { frontendNotes } from "@/data/notes";

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
              key={note.slug}
              title={note.title}
              description={note.description}
              date={note.date}
              tags={note.tags}
              href={`/frontend/${note.slug}`}
            />
          ))}
        </div>
      </CategoryLayout>
    </>
  );
}
