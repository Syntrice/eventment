import CreateEventForm from "@/components/events/CreateEventForm"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function Create() {
  // Redirect if not logged in
  const session = await auth()
  if (!session) {
    redirect("/login")
  } else {
    return (
      <main className="p-5 flex justify-center py-20 max-md:py-10">
        <div className="max-w-sm grow text-center">
          <h1 className="text-2xl mb-10 text-center">Create a new event</h1>
          <CreateEventForm />
        </div>
      </main>
    )
  }
}
