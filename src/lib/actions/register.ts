"use server"

import bcrypt from "bcryptjs"
import { redirect } from "next/navigation"
import prisma from "../database/database"
import RegisterFormSchema from "../definitions/schema/RegisterFormSchema"
import executeAction from "./execute-action"

type RegisterFormState =
  | {
      errors?: {
        email?: string[]
        password?: string[]
      }
    }
  | undefined

export default async function register(state: RegisterFormState, formData: FormData): Promise<RegisterFormState> {

  return await executeAction(async () => {
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

    // Register account
    const hashedPassword = await bcrypt.hash(validatedFields.data.password, 10)

    await prisma.user.create({
      data: {
        email: validatedFields.data.email,
        password: hashedPassword,
        name: validatedFields.data.email.split("@")[0], // for now, name is truncated email
      },
    })

    redirect("/login")

  })
}
