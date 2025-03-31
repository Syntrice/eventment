import { IconProps } from "./icon-props"

export default function CrossIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 12l7 7M12 12l-7 -7M12 12l-7 7M12 12l7 -7"
      ></path>
    </svg>
  )
}
