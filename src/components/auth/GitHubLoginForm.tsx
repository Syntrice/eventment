"use client"

import githubLogin from "@/lib/actions/github-login"
import GitHubIcon from "../icons/GitHubIcon"

export default function GitHubLoginForm() {
  return (
    <form action={githubLogin}>
      <button className="form-button w-full flex justify-center items-center gap-1">
        <GitHubIcon className="inline text-xl" />
        <span>Sign in with GitHub</span>
      </button>
    </form>
  )
}
