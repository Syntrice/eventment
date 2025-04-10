"use server"

import { redirect } from "next/navigation"
import { auth } from "../auth"
import prisma from "../database/database"
import CreateEventFormSchema from "../definitions/schema/CreateEventFormSchema"
import executeAction from "./execute-action"

type CreateEventFormState =
  | {
    errors?: {
      title?: string[]
      description?: string[]
      date?: string[]
    }
  }
  | undefined

export default async function createEvent(state: CreateEventFormState | undefined, formData: FormData): Promise<CreateEventFormState> {
  
  return await executeAction<CreateEventFormState>(async () => {

    // Validate form input via zod schema
    const validatedFields = CreateEventFormSchema.safeParse({
      title: formData.get("title"),
      description: formData.get("description"),
      date: formData.get("date"),
    })

    // Check for schema violations and return early
    if (!validatedFields.success) {
      return {
        // flatten the zod errors and get the fieldErrors, which matches the form state type
        errors: validatedFields.error.flatten().fieldErrors,
      }
    }

    // Get user from session
    const session = await auth()

    if (!session?.user?.id) {
      return
    }

    const date = new Date(validatedFields.data.date)

    await prisma.event.create({
      data: {
        title: validatedFields.data.title,
        description: validatedFields.data.description,
        eventDate: date.toISOString(),
        userId: session.user.id,
      },
    })

    redirect("/events")
  })
}
