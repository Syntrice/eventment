"use server"

import ActionResponse from "../definitions/ActionResponse"

export default async function login(): Promise<ActionResponse> {
  console.log("Logging in...")
  return {
    success: false,
    message: "Credential based login has not yet been implemented.",
  }
}
