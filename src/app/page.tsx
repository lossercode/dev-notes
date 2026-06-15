import { Navbar } from "@/components/Navbar"
import { HomeClient } from "@/components/HomeClient"
import { aiNotes, backendNotes, frontendNotes } from "@/data/notes"

export default function Home() {
  const allNotes = {
    ai: aiNotes,
    frontend: frontendNotes,
    backend: backendNotes,
  }

  return (
    <>
      <Navbar />
      <HomeClient allNotes={allNotes} />
    </>
  )
}
