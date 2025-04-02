import { signOut } from "next-auth/react"
import NavLink from "../NavLink"
import ClientSessionData from "@/lib/definitions/ClientSessionData"
import PersonIcon from "@/components/icons/PersonIcon"

interface UserStatusProps {
  session?: ClientSessionData
}

export default function UserStatus({ session }: UserStatusProps) {
  if (!session?.isAuthenticated) {
    return (
      <>
        <li>
          <NavLink href="login">Login</NavLink>
        </li>
        <li>
          <NavLink href="register">Register</NavLink>
        </li>
      </>
    )
  }

  return (
    <li className="flex gap-2 items-center">
      <PersonIcon />
      <p>{session.name}</p>
      <button
        className="p-2 transition-colors hover:bg-neutral-300 rounded-md block cursor-pointer"
        onClick={() => signOut()}
      >
        Logout
      </button>
    </li>
  )
}
