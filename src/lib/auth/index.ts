// auth.ts
import NextAuth from "next-auth"
import { v4 as uuid } from "uuid"
import { encode as defaultEncode } from "next-auth/jwt"
import GitHub from "next-auth/providers/github"
import credentialsProvider from "./credentialsProvider"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "../database/database"

// database adapter
const adapter = PrismaAdapter(prisma)

export const { auth, handlers, signIn } = NextAuth({
  providers: [GitHub, credentialsProvider],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    // If the user is signing in using credentials,
    // we need to set token.credentials to true
    async jwt({ token, account }) {
      if (account?.provider === "credentials") {
        token.credentials = true
      }
      return token
    },
  },
  jwt: {
    // We need to customize the JWT payload if
    // the user is signing in using credentials
    // auth.js intentionally does not implement this functionality
    // for security reasons, so we hae to do it manually.
    // see https://github.com/nextauthjs/next-auth/issues/10966
    encode: async function (params) {
      if (params.token?.credentials) {
        const sessionToken = uuid()

        if (!params.token.sub) {
          throw new Error("Sub claim is required")
        }

        const createdSession = await adapter?.createSession?.({
          sessionToken: sessionToken,
          userId: params.token.sub, // 7 days expiration
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        })

        if (!createdSession) {
          throw new Error("Failed to create session")
        }

        return sessionToken
      }
      return defaultEncode(params) // else, use built in jwt generation
    },
  },
})
