"use server"

import { isRedirectError } from "next/dist/client/components/redirect-error"
import { auth } from "../auth"
import CreateEventFormSchema from "../definitions/schema/CreateEventFormSchema"
import { redirect } from "next/navigation"
import prisma from "../database/database"

type CreateEventFormState =
  | {
      errors?: {
        title?: string[]
        description?: string[]
        date?: string[]
      }
      message?: string
    }
  | undefined

export default async function createEvent(
  state: CreateEventFormState | undefined,
  formData: FormData
): Promise<CreateEventFormState> {
  try {
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

    // Create event
  } catch (error) {
    if (isRedirectError(error)) {
      // this error should be handled further up the call stack (as it is may trigger a redirect)
      throw error
    }
    console.log(error)
  }
}
