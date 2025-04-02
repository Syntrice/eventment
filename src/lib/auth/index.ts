// auth.ts
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import credentialsProvider from "./credentialsProvider"
export const { auth, handlers, signIn } = NextAuth({
  providers: [GitHub, credentialsProvider],
})
