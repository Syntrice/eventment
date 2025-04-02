import Credentials from "next-auth/providers/credentials"

const credentialsProvider = Credentials({
  credentials: {
    // Can add other credentials here
    email: {},
    password: {},
  },
  authorize: async (credentials) => {
    // Placeholder auth implementation
    const email = "test@test.com"
    const password = "password"

    if (credentials?.email === email && credentials?.password === password) {
      return { email, password }
    } else {
      throw new Error("Invalid credentials.")
    }
  },
})

export default credentialsProvider
