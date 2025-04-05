"server only"
import bcrypt from "bcryptjs"
import { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import prisma from "../database/database"

const credentialsProvider = Credentials({
  credentials: {
    // Can add other credentials here
    email: {},
    password: {},
  },
  authorize: async (credentials) => {

    const email = credentials.email as string
    const password = credentials.password as string

    // attempt to get user from database
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    })

    // Check if user exists, and has a password (it may not if using OAuth)
    if (!user || !user.password) {
      throw new CredentialsSignin("Invalid credentials.")
    }

    // Verify the password hash
    const verified = await bcrypt.compare(
      password,
      user.password
    )

    // If password incorrect
    if (!verified) {
      throw new CredentialsSignin("Invalid credentials.")
    }

    // Else, authorization success
    return user
  },
})

export default credentialsProvider
