import { NextAuthOptions } from "next-auth"
import { getUserByUsername } from "@/server/models/users"
import credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"

export const authOptions: NextAuthOptions = {
  // Setup JWT provider
  providers: [
    credentials({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize,
    }),
  ],
  session: {
    strategy: "jwt",
  },
}

async function authorize(
  credentials: Record<"username" | "password", string> | undefined
) {
  if (!credentials) throw new Error("Credentials are missing.")

  const user = await getUserByUsername(credentials.username).select("+password")

  if (!user) throw new Error("Username does not exist.")

  const passwordMatch = await bcrypt.compare(
    credentials!.password,
    user.password
  )

  if (!passwordMatch) throw new Error("Password incorrect.")
  return user
}
