import { Navbar } from "@/components/Navbar";
import { CategoryLayout } from "@/components/CategoryLayout";
import { NoteCard } from "@/components/NoteCard";

const aiNotes = [
  {
    title: "大语言模型原理解析",
    description: "深入了解 Transformer 架构、注意力机制、预训练与微调等核心概念",
    date: "2024-01-15",
    tags: ["LLM", "Transformer"],
  },
  {
    title: "Prompt Engineering 最佳实践",
    description: "如何编写高质量的提示词，让 AI 模型输出更准确、更有用的结果",
    date: "2024-01-10",
    tags: ["Prompt", "实践"],
  },
  {
    title: "AI 应用开发入门",
    description: "使用 LangChain、LlamaIndex 等框架快速构建 AI 应用的实战指南",
    date: "2024-01-05",
    tags: ["LangChain", "开发"],
  },
  {
    title: "RAG 检索增强生成技术",
    description: "结合向量数据库与大语言模型，构建更智能的知识问答系统",
    date: "2024-01-02",
    tags: ["RAG", "向量数据库"],
  },
];

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
