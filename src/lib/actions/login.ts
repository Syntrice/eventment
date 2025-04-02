"use server"

import { isRedirectError } from "next/dist/client/components/redirect-error"
import ActionResponse from "../definitions/ActionResponse"
import { signIn } from "../auth"

export default async function login(
  state: ActionResponse | undefined,
  formData: FormData
): Promise<ActionResponse> {
  try {
    console.log("Logging in...")
    await signIn("credentials", formData)

    return {
      success: true,
      message: "Successfully logged in.",
    }
  } catch (error) {
    if (isRedirectError(error)) {
      // this error should be handled further up the call stack (as it is may trigger a redirect)
      throw error
    }

    return {
      success: false,
      message: "An error occurred while logging in.",
    }
  }
}
