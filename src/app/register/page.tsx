import RegisterForm from "@/components/auth/RegisterForm"
import GitHubIcon from "@/components/icons/GitHubIcon"
import Link from "next/link"

export default function Register() {
  return (
    <main className="p-5 flex justify-center py-20 max-md:py-10">
      <div className="max-w-sm grow text-center">
        <h2 className="text-2xl mb-5 text-center">Register</h2>
        <button className="form-button w-full flex justify-center items-center gap-1">
          <GitHubIcon className="inline text-xl" />
          <span>Sign in with GitHub</span>
        </button>
        <p className="my-5">Or continue with email</p>
        <RegisterForm />
        <p className="my-5">Already have an account with us?</p>
        <Link className="form-button block" href="register">
          Login
        </Link>
      </div>
    </main>
  )
}
