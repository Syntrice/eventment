/**
 * Catch all API route for /api/auth/*
 * requests. Needed to initialize nextauth.js, as it
 * uses this route path internally for auth operations.
 * https://next-auth.js.org/configuration/initialization
 */

import { authOptions } from "@/server/lib/auth"
import NextAuth from "next-auth"
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
