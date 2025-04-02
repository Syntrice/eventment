"use server"

import { isRedirectError } from "next/dist/client/components/redirect-error"
import { signIn } from "../auth"
import ActionResponse from "../definitions/ActionResponse"

export default async function githubLogin(): Promise<ActionResponse> {
  try {
    await signIn("github")

    return { success: true, message: "Successfully signed in using GitHub." }
  } catch (error) {
    if (isRedirectError(error)) {
      // this error should be handled further up the call stack (as it is may trigger a redirect)
      throw error
    }

    return { success: false, message: "An error occurred while signing in." }
  }
}
