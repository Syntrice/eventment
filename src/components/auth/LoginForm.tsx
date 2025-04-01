"use client"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useActionState } from "react"

type LoginFormState = string | undefined

export default function LoginForm() {
  const router = useRouter()

  const login = async (formState: LoginFormState, formData: FormData) => {
    const username = formData.get("username") as string
    const password = formData.get("password") as string

    const res = await signIn("credentials", {
      username: username,
      password: password,
      redirect: false,
    })

    if (res?.error) {
      return res.error as string
    }
    if (res?.ok) {
      router.push("/")
      return
    }
  }

  const [formState, formAction] = useActionState(login, undefined)

  // login is done client side, so this action goes in this form component

  return (
    <div className="max-w-sm grow">
      <h2 className="text-2xl mb-5 text-center">Login</h2>
      <form className="flex flex-col" action={formAction}>
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
        {formState && <p className="my-5 text-red-600">{formState}</p>}
      </form>
    </div>
  )
}
