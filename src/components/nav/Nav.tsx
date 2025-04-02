"use client" // hydrate this component
import { useState, useEffect } from "react"
import NavBrand from "./NavBrand"
import NavToggle from "./NavToggle"
import NavMenu from "./NavMenu"
import { usePathname } from "next/navigation"
import ClientSessionData from "@/lib/definitions/ClientSessionData"

interface NavProps {
  session?: ClientSessionData
}

export default function Nav({ session }: NavProps) {
  const [isToggled, setIsToggled] = useState(false)

  // Every path change, setToggled to false.
  // Uses the "usePathname" hook from next to get the current path,
  // and run an effect everytime the path variable changes.
  const pathname = usePathname()
  useEffect(() => {
    setIsToggled(false)
  }, [pathname])

  return (
    <header className="shadow-2xl">
      <nav className="p-5 flex justify-between items-center relative">
        <div>
          <NavBrand />
        </div>
        <div className="flex gap-5">
          <NavMenu session={session} />
          <NavToggle
            toggled={isToggled}
            onClick={() => setIsToggled((p) => !p)}
          />
        </div>
      </nav>
      {isToggled && <NavMenu vertical={true} session={session} />}
    </header>
  )
}
