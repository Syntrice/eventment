import UserStatus from "@/components/nav/userStatus/UserStatus"
import ClientSessionData from "@/lib/definitions/ClientSessionData"

interface NavMenuProps {
  vertical?: boolean
  session?: ClientSessionData
}

export default function NavMenu({ session, vertical }: NavMenuProps) {
  return (
    <ul
      className={
        vertical
          ? "flex p-5 gap-5 flex-col items-end min-sm:hidden"
          : "flex gap-5 max-sm:hidden"
      }
    >
      <UserStatus session={session} />
    </ul>
  )
}
