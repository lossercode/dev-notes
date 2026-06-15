import { Navbar } from "@/components/Navbar";
import { CategoryLayout } from "@/components/CategoryLayout";
import { NoteCard } from "@/components/NoteCard";
import { backendNotes } from "@/data/notes";

export default function BackendPage() {
  return (
    <>
      <Navbar />
      <CategoryLayout
        title="后端学习"
        description="系统学习后端开发知识，包括服务端架构、数据库设计、API 开发、微服务、容器化等。"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {backendNotes.map((note) => (
            <NoteCard
              key={note.slug}
              title={note.title}
              description={note.description}
              date={note.date}
              tags={note.tags}
              href={`/backend/${note.slug}`}
            />
          ))}
        </div>
      </CategoryLayout>
    </>
  );
}
