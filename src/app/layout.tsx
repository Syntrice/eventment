import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./global.css"
import Nav from "@/components/nav/Nav"
import { auth } from "@/lib/auth"

const inter = Inter({
  subsets: ["latin"], // only load latin characters
  display: "swap", // swap font if not available straight away
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Eventment",
  description: "An events listing and RSVP platform built using next.js.",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Nav
          session={{ isAuthenticated: !!session, name: session?.user?.name }}
        />
        {children}
      </body>
    </html>
  )
}
