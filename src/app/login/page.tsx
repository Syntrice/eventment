import GitHubLoginForm from "@/components/auth/GitHubLoginForm"
import LoginForm from "@/components/auth/LoginForm"
import Link from "next/link"

export default function Login() {
  return (
    <main className="p-5 flex justify-center py-20 max-md:py-10">
      <div className="max-w-sm grow text-center">
        <h2 className="text-2xl mb-10 text-center">Login</h2>
        <GitHubLoginForm />
        <p className="my-5">Or continue with email</p>
        <LoginForm />
        <p className="my-5">Don&apos;t have an account with us yet?</p>
        <Link className="form-button block" href="register">
          Register
        </Link>
      </div>
    </main>
  )
}
