import CalendarIcon from "@/components/icons/CalendarIcon"
import Link from "next/link"

export default function NavBrand() {
  return (
    <Link href={"/"}>
      <h1 className="text-2xl">
        Eventment <CalendarIcon className="inline" />
      </h1>
    </Link>
  )
}
