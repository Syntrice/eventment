import GitHubLoginForm from "@/components/auth/GitHubLoginForm"
import RegisterForm from "@/components/auth/RegisterForm"
import CenteredContainer from "@/components/common/CenteredContainer"
import FormContainer from "@/components/common/FormContainer"
import { auth } from "@/lib/auth"
import Link from "next/link"
import { redirect } from "next/navigation"

export default async function Register() {
  // Redirect if already logged in
  const session = await auth()
  if (session) {
    redirect("/")
  }

  return (
    <CenteredContainer>
      <FormContainer>
      <h2 className="text-2xl mb-10 text-center">Register</h2>
        <GitHubLoginForm />
        <p className="my-5">Or continue with email</p>
        <RegisterForm />
        <p className="my-5">Already have an account with us?</p>
        <Link className="form-button block" href="register">
          Login
        </Link>
      </FormContainer>
    </CenteredContainer>
  )
}
