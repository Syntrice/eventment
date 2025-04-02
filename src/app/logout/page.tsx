"use client"

import { signOut } from "next-auth/react"

export default function Logout() {
  return (
    signOut({ redirectTo: "/" }),
    (
      <main className="p-5">
        <p>Logging out...</p>
      </main>
    )
  )
}
