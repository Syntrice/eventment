import { login } from "@/server/actions/auth"
import Link from "next/link"

export default function LoginForm() {
  return (
    <div className="max-w-sm grow">
      <h2 className="text-2xl mb-5 text-center">Login</h2>
      <form className="flex flex-col" action={login}>
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
