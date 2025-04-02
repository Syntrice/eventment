import { auth } from "@/lib/auth"

export default async function Home() {
  const session = await auth()

  return (
    <main className="p-5">
      <h1 className="text-2xl">{session ? "Logged in" : "Not logged in"}</h1>
    </main>
  )
}
