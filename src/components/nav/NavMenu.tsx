import UserStatus from "@/components/nav/userStatus/UserStatus"
import ClientSessionData from "@/lib/definitions/ClientSessionData"
import NavLink from "./NavLink"
import { signOut } from "next-auth/react"

interface NavMenuProps {
  vertical?: boolean
  session?: ClientSessionData
}

export default function NavMenu({ session, vertical }: NavMenuProps) {
  return (
    <ul
      className={
        vertical
          ? "flex p-5 gap-5 flex-col items-end min-sm:hidden"
          : "flex gap-5 max-sm:hidden"
      }
    >
      {session?.isAuthenticated ? (
        <>
          <li>
            <NavLink href="/events">Events</NavLink>
          </li>
          <li>
            <NavLink href="/events/create">New Event</NavLink>
          </li>
          <li>
            <UserStatus session={session} />
          </li>
          <li>
            <button
              className="p-2 transition-colors hover:bg-neutral-300 rounded-md block cursor-pointer"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink href="login">Login</NavLink>
          </li>
          <li>
            <NavLink href="register">Register</NavLink>
          </li>
        </>
      )}
    </ul>
  )
}
