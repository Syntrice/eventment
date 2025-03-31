"use client" // hydrate this component
import { useState } from "react"
import NavBrand from "./NavBrand"
import NavToggle from "./NavToggle"
import NavMenu from "./NavMenu"
import ExpandedNavMenu from "./NavMenuExpanded"
export default function Nav() {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <header className="shadow-2xl">
      <nav className="p-5 flex justify-between items-center relative">
        <div>
          <NavBrand />
        </div>
        <div className="flex gap-5">
          <NavMenu />
          <NavToggle
            toggled={isToggled}
            onClick={() => setIsToggled((p) => !p)}
          />
        </div>
      </nav>
      {isToggled && (
        <ExpandedNavMenu onLinkClicked={() => setIsToggled((p) => !p)} />
      )}
    </header>
  )
}
