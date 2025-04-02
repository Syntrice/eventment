import NavLink from "./NavLink"

interface NavMenuProps {
  vertical?: boolean
}

export default function NavMenu({ vertical }: NavMenuProps) {
  return (
    <ul
      className={
        vertical
          ? "flex p-5 gap-5 flex-col items-end min-sm:hidden"
          : "flex gap-5 max-sm:hidden"
      }
    >
      <li>
        <NavLink href="login">Login</NavLink>
      </li>
      <li>
        <NavLink href="register">Register</NavLink>
      </li>
      <li>
        <NavLink href="logout">Logout</NavLink>
      </li>
    </ul>
  )
}
