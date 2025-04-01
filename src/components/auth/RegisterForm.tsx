"use client"

import register from "@/server/actions/register"
import Link from "next/link"
import { useActionState } from "react"

export default function RegisterForm() {
  const [formState, formAction] = useActionState(register, undefined)

  return (
    <div className="max-w-sm grow">
      <h2 className="text-2xl mb-5 text-center">Register</h2>
      <form action={formAction} className="flex flex-col">
        <label className="mb-2" htmlFor="username">
          Username
        </label>
        <input
          className="input-text mb-5"
          type="text"
          name="username"
          id="username"
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
          Register
        </button>
        <p className="my-5">Already have an account with us?</p>
        <Link className="form-button" href="login">
          Login
        </Link>
        {formState && <p className="my-5 text-red-600">{formState}</p>}
      </form>
    </div>
  )
}
