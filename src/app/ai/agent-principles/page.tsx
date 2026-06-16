import { redirect } from "next/navigation"

// 访问 /ai/agent-principles 直接跳到第一章
export default function Page() {
  redirect("/ai/agent-principles/core-loop")
}
