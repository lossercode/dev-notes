import { Navbar } from "@/components/Navbar";
import { CategoryLayout } from "@/components/CategoryLayout";
import { NoteCard } from "@/components/NoteCard";

const backendNotes = [
  {
    title: "微服务架构设计模式",
    description: "服务拆分、通信方式、数据一致性等微服务架构核心问题的解决方案",
    date: "2024-01-13",
    tags: ["微服务", "架构"],
  },
  {
    title: "数据库性能调优指南",
    description: "索引优化、查询优化、连接池配置等数据库性能优化的实用技巧",
    date: "2024-01-11",
    tags: ["数据库", "优化"],
  },
  {
    title: "API 设计最佳实践",
    description: "RESTful API 设计规范、错误处理、版本管理、安全认证等实践经验",
    date: "2024-01-07",
    tags: ["API", "REST"],
  },
  {
    title: "Docker 与 Kubernetes 入门",
    description: "容器化部署与编排的基础知识，快速上手云原生应用开发",
    date: "2024-01-04",
    tags: ["Docker", "K8s"],
  },
];

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
