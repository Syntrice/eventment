"use client"

import login from "@/lib/actions/login"
import { useActionState } from "react"

export default function LoginForm() {
  const [state, action] = useActionState(login, undefined)

  return (
    <form className="flex flex-col" action={action}>
      <label className="mb-2" htmlFor="username">
        Email
      </label>
      <input
        className="input-text mb-5"
        type="text"
        name="email"
        id="email"
        aria-required={true}
      ></input>
      <label className="mb-2" htmlFor="password">
        Password
      </label>
      <input
        className="input-text mb-5"
        type="password"
        name="password"
        id="password"
        aria-required={true}
      ></input>
      <button aria-label="Login" className="mt-5 form-button">
        Login
      </button>
      {state && <p className="mt-5 text-red-400">{state.message}</p>}
    </form>
  )
}
