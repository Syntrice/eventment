import NavLink from "./NavLink"

interface NavMenuExpandedProps {
  onLinkClicked: () => void
}

export default function NavMenuExpanded({
  onLinkClicked,
}: NavMenuExpandedProps) {
  return (
    <ul className="flex p-5 gap-5 flex-col items-end min-sm:hidden">
      <li>
        <NavLink onClick={onLinkClicked} href="login">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink onClick={onLinkClicked} href="register">
          Register
        </NavLink>
      </li>
    </ul>
  )
}
