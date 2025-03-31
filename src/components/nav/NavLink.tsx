import Link from "next/link"
import { ReactNode } from "react"

interface NavLinkProps {
  children: ReactNode
  href: string
  onClick?: () => void
}

export default function NavLink({ children, href, onClick }: NavLinkProps) {
  return (
    <Link
      className="p-2 transition-colors hover:bg-neutral-300 rounded-md"
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
