"use server"

import { connectDB } from "../database/mongodb"

export async function register(formData: FormData) {
  console.log(formData)
  await connectDB()
}

export async function login(formData: FormData) {
  console.log(formData)
}
