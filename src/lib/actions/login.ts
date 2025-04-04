"use server"

import { redirect } from "next/navigation"
import { signIn } from "../auth"
import LoginFormSchema from "../definitions/schema/LoginFormSchema"
import executeAction from "./execute-action"

type LoginFormState =
  | {
      errors?: {
        email?: string[]
        password?: string[]
      }
    }
  | undefined

export default async function login(state: LoginFormState | undefined, formData: FormData): Promise<LoginFormState> {

  return executeAction(async () => {
    // Validate form input via zod schema
    const validatedFields = LoginFormSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    })

    // Check for schema violations and return early
    if (!validatedFields.success) {
      return {
        // flatten the zod errors and get the fieldErrors, which matches the form state type
        errors: validatedFields.error.flatten().fieldErrors,
      }
    }

    await signIn("credentials", formData)
    redirect("/")

  })
}
