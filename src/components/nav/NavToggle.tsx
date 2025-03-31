import CrossIcon from "@/components/icons/CrossIcon"
import MenuIcon from "@/components/icons/MenuIcon"

interface NavToggleProps {
  onClick?: () => void
  toggled?: boolean
}

export default function NavToggle({ onClick, toggled }: NavToggleProps) {
  return (
    <button
      className="text-2xl min-sm:hidden"
      aria-expanded={toggled}
      aria-label="Toggle navigation menu."
      onClick={onClick}
    >
      {toggled ? <CrossIcon /> : <MenuIcon />}
    </button>
  )
}
