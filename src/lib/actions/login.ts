"use server"

import { CredentialsSignin } from "next-auth"
import { redirect } from "next/navigation"
import { signIn } from "../auth"
import LoginFormSchema from "../definitions/schema/LoginFormSchema"
import executeAction from "./execute-action"

type LoginFormState =
  | {
      errors?: {
        email?: string[]
        password?: string[] 
        general?: string[]
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

    try {
      await signIn("credentials", {
        email: validatedFields.data.email,
        password: validatedFields.data.password,
        redirect: false
      })
    } catch (error) {
      if (error instanceof CredentialsSignin) {
        return {
          errors: {
            general: ["Invalid credentials."],
          },
        }
      }
      else {
        throw error
      }
    }
    
    redirect("/")

  })
}
