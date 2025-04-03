import ClientSessionData from "@/lib/definitions/ClientSessionData"
import PersonIcon from "@/components/icons/PersonIcon"

interface UserStatusProps {
  session: ClientSessionData
}

export default function UserStatus({ session }: UserStatusProps) {
  return (
    <div className="flex items-center gap-2 h-full">
      <PersonIcon />
      <p>{session.name}</p>
    </div>
  )
}
