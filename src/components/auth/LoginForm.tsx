"use client"

import login from "@/lib/actions/login"
import { useActionState } from "react"

export default function LoginForm() {
  const [state, action, pending] = useActionState(login, undefined)

  return (
    <form className="flex flex-col" action={action}>
      {/* Email */}
      <label className="mb-2" htmlFor="username">
        Email
      </label>
      <input
        className="input-text mb-2"
        type="text"
        name="email"
        autoComplete="username"
        placeholder="name@example.com"
        id="email"
        aria-required={true}
      ></input>
      {state?.errors?.email && (
        <p className="text-red-400 mb-5">{state.errors.email}</p>
      )}

      {/* Password */}
      <label className="mb-2" htmlFor="password">
        Password
      </label>
      <input
        className="input-text mb-2"
        type="password"
        name="password"
        autoComplete="current-password"
        placeholder="password"
        id="password"
        aria-required={true}
      ></input>
      {state?.errors?.password && (
        <p className="text-red-400 mb-5">{state.errors.password}</p> 
      )}

      <button
        disabled={pending}
        aria-disabled={pending}
        aria-label="Login"
        className="my-5 form-button"
      >
        Login
      </button>
      {state?.errors?.general && (
        <p className="text-red-400 mb-5">{state.errors.general}</p> 
      )}
    </form>
  )
}
