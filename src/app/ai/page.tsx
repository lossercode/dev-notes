import { Navbar } from "@/components/Navbar";
import { CategoryLayout } from "@/components/CategoryLayout";
import { NoteCard } from "@/components/NoteCard";
import { aiNotes } from "@/data/notes";

export default function AIPage() {
  return (
    <>
      <Navbar />
      <CategoryLayout
        title="AI前沿"
        description="探索人工智能领域的最新进展，包括大语言模型、机器学习算法、AI 应用开发等前沿技术。"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {aiNotes.map((note) => (
            <NoteCard
              key={note.slug}
              title={note.title}
              description={note.description}
              date={note.date}
              tags={note.tags}
              href={`/ai/${note.slug}`}
            />
          ))}
        </div>
      </CategoryLayout>
    </>
  );
}
