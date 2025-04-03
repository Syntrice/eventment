"use server"

import { isRedirectError } from "next/dist/client/components/redirect-error"
import RegisterFormSchema from "../definitions/schema/RegisterFormSchema"

type RegisterFormState =
  | {
      errors?: {
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined

export default async function register(
  state: RegisterFormState,
  formData: FormData
): Promise<RegisterFormState> {
  try {
    // Validate form input via zod schema
    const validatedFields = RegisterFormSchema.safeParse({
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
  } catch (error) {
    if (isRedirectError(error)) {
      // this error should be handled further up the call stack (as it is may trigger a redirect)
      throw error
    }
  }
}
