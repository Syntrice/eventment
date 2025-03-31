import NavLink from "./NavLink"

export default function NavMenu() {
  return (
    <ul className="flex gap-5 max-sm:hidden">
      <li>
        <NavLink href="login">Login</NavLink>
      </li>
      <li>
        <NavLink href="register">Register</NavLink>
      </li>
    </ul>
  )
}
