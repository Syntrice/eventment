"use client"
import Link from "next/link"

export default function LoginForm() {
  // login is done client side, so this action goes in this form component

  return (
    <div className="max-w-sm grow">
      <h2 className="text-2xl mb-5 text-center">Login</h2>
      <form className="flex flex-col">
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
          Login
        </button>
        <p className="my-5">Don&apos;t have an account with us yet?</p>
        <Link className="form-button" href="register">
          Register
        </Link>
      </form>
    </div>
  )
}
