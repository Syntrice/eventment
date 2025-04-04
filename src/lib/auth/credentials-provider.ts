import Credentials from "next-auth/providers/credentials"
import prisma from "../database/database"
import bcrypt from "bcryptjs"
import LoginFormSchema from "../definitions/schema/LoginFormSchema"

const credentialsProvider = Credentials({
  credentials: {
    // Can add other credentials here
    email: {},
    password: {},
  },
  authorize: async (credentials) => {
    // Validate credentials with zod
    // (even though this is done on the form, good idea to do here and prevents typescript errors)
    // Use parse over safeParse so an exception is automatically thrown.
    const validatedCredentials = LoginFormSchema.parse(credentials)

    // attempt to get user from database
    const user = await prisma.user.findUnique({
      where: {
        email: validatedCredentials.email,
      },
    })

    // Check if user exists, and has a password (it may not if using OAuth)
    if (!user || !user.password) {
      throw new Error("Invalid credentials.")
    }

    // Verify the password hash
    const verified = bcrypt.compare(
      validatedCredentials.password,
      user.password
    )

    // If password incorrect
    if (!verified) {
      throw new Error("Invalid credentials.")
    }

    // Else, authorization success
    return user
  },
})

export default credentialsProvider
