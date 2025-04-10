"use server"

import { signIn } from "../auth"
import executeAction from "./execute-action"

export default async function githubLogin() {

  return await executeAction<void>(async () => {
    await signIn("github")
  })
}
