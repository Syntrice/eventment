"use server"

import { isRedirectError } from "next/dist/client/components/redirect-error"
import ActionResponse from "../definitions/ActionResponse"

export default async function register(): Promise<ActionResponse> {
  try {
    console.log("Signing up...")
    return {
      success: false,
      message: "Credential based registration has not yet been implemented.",
    }
  } catch (error) {
    if (isRedirectError(error)) {
      // this error should be handled further up the call stack (as it is may trigger a redirect)
      throw error
    }

    return {
      success: false,
      message: "An error occurred while registering.",
    }
  }
}
