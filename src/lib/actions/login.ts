"use server"

import { isRedirectError } from "next/dist/client/components/redirect-error"
import { signIn } from "../auth"
import LoginFormSchema from "../definitions/schema/LoginFormSchema"

type LoginFormState =
  | {
      errors?: {
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined

export default async function login(
  state: LoginFormState | undefined,
  formData: FormData
): Promise<LoginFormState> {
  try {
    // Validate form input via zod schema
    const validatedFields = LoginFormSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    })

    // Check for schema violations and return early
    if (!validatedFields.success) {
      console.log("validation error")
      return {
        // flatten the zod errors and get the fieldErrors, which matches the form state type
        errors: validatedFields.error.flatten().fieldErrors,
      }
    }

    await signIn("credentials", formData)
  } catch (error) {
    if (isRedirectError(error)) {
      // this error should be handled further up the call stack (as it is may trigger a redirect)
      throw error
    }
  }
}
