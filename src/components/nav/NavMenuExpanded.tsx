import NavLink from "./NavLink"

export default function NavMenuExpanded() {
  return (
    <ul className="flex p-5 gap-5 flex-col items-end min-sm:hidden">
      <li>
        <NavLink href="login">Login</NavLink>
      </li>
      <li>
        <NavLink href="register">Register</NavLink>
      </li>
    </ul>
  )
}
