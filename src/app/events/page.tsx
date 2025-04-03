import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function Events() {
  // Redirect if not logged in
  const session = await auth()
  if (!session) {
    redirect("/login")
  } else {
    return (
      <main className="p-5">
        <h1 className="text-2xl">Events</h1>
      </main>
    )
  }
}
