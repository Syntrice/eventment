"use client"

import register from "@/lib/actions/register"
import { useActionState } from "react"

export default function RegisterForm() {
  const [state, action, pending] = useActionState(register, undefined)

  return (
    <form className="flex flex-col" action={action}>
      {/* Email */}
      <label className="mb-2" htmlFor="email">
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
        id="password"
        autoComplete="new-password"
        placeholder="password"
        aria-required={true}
      ></input>
      {state?.errors?.password && (
        <p className="text-red-400 mb-5">{state.errors.password}</p>
      )}

      <button
        disabled={pending}
        aria-disabled={pending}
        aria-label="Login"
        className="mt-5 form-button"
      >
        Register
      </button>
    </form>
  )
}
