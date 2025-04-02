"use server"

import ActionResponse from "../definitions/ActionResponse"

export default async function githubLogin(): Promise<ActionResponse> {
  console.log("Logging in with github...")
  return { success: false, message: "not implemented" }
}
