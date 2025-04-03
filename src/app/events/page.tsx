import EventItem from "@/components/events/EventItem"
import { auth } from "@/lib/auth"
import prisma from "@/lib/database/database"
import { redirect } from "next/navigation"

export default async function Events() {
  // Redirect if not logged in
  const session = await auth()

  if (!session) {
    redirect("/login")
  } else {
    // Get all events
    const events = await prisma.event.findMany({
      select: {
        id: true,
        title: true,
        eventDate: true,
        description: true,
        user: {
          select: {
            name: true,
          },
        },
      },
    })

    return (
      <main className="p-5">
        <h1 className="text-2xl mb-3">Events</h1>
        <p className="mb-5">
          Here are all events that have been created by users. This is a
          work-in-progress display.
        </p>
        <ul className="flex flex-col gap-5">
          {events.map((event) => (
            <EventItem
              key={event.id}
              title={event.title}
              date={event.eventDate.toString()}
              user={event.user.name}
              description={event.description}
            />
          ))}
        </ul>
      </main>
    )
  }
}
