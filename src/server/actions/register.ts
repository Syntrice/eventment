"use server"
import bcrypt from "bcryptjs"
import { connectDB } from "../database/mongodb"
import { createUser, getUserByUsername, UserDocument } from "../models/users"

// Form action returns either a string (representing error message)
// or undefined.
export type RegisterFormState = string | undefined

export default async function register(
  formState: RegisterFormState,
  formData: FormData
) {
  // TODO: validation
  const username = formData.get("username") as string
  const password = formData.get("password") as string

  try {
    await connectDB()

    // Check if username exists
    const existingUser = await getUserByUsername(username)
    if (existingUser) {
      return "Username already exists."
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create new user
    const userDocument: UserDocument = {
      username: username,
      password: hashedPassword,
    }
    await createUser(userDocument)
  } catch (e) {
    console.log(e)
    return "An unknown error occurred."
  }
}
