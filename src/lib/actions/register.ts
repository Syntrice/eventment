"use server"

import ActionResponse from "../definitions/ActionResponse"

export default async function register(): Promise<ActionResponse> {
  console.log("Signing up...")
  return { success: false, message: "not implemented" }
}
