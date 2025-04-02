// auth.ts
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import credentialsProvider from "./credentialsProvider"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "../database/database"
export const { auth, handlers, signIn } = NextAuth({
  providers: [GitHub, credentialsProvider],
  adapter: PrismaAdapter(prisma),
})
