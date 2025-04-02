"use server"

import { signIn } from "../auth"
import ActionResponse from "../definitions/ActionResponse"

export default async function githubLogin(): Promise<ActionResponse> {
  await signIn("github")
  return { success: false, message: "not implemented" }
}
