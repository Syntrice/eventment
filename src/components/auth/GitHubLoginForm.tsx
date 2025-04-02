"use client"

import ActionResponse from "@/lib/definitions/ActionResponse"
import GitHubIcon from "../icons/GitHubIcon"
import { useActionState } from "react"
import githubLogin from "@/lib/actions/github-login"

export default function GitHubLoginForm() {
  const [state, action] = useActionState<ActionResponse | undefined>(
    githubLogin,
    undefined
  )

  return (
    <form action={action}>
      <button className="form-button w-full flex justify-center items-center gap-1">
        <GitHubIcon className="inline text-xl" />
        <span>Sign in with GitHub</span>
      </button>
      {state && <p className="mt-5 text-red-400">{state.message}</p>}
    </form>
  )
}
