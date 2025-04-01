"use server"
import bcrypt from "bcryptjs"
import { connectDB } from "../database/mongodb"
import { createUser, getUserByUsername, UserDocument } from "../models/users"

export default async function register(FormData: FormData) {
  // TODO: validation
  const username = FormData.get("username") as string
  const password = FormData.get("password") as string
  try {
    await connectDB()

    // Validate user exists
    const existingUser = await getUserByUsername(username)
    if (existingUser) {
      console.log("User already exists")
      return
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
    return
  }
}
