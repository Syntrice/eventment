export interface EventItemProps {
  title: string
  date: string
  user: string | null
  description: string | null
}

export default function EventItem({
  title,
  date,
  user,
  description,
}: EventItemProps) {
  return (
    <div className="border-2 p-5 border-neutral-300 shadow-md rounded-2xl">
      <h3 className="text-2xl mb-5">{title}</h3>
      <p>{description}</p>
      <hr className="my-5" />
      <p>Date: {date}</p>
      <p>Posted by: {user}</p>
    </div>
  )
}
