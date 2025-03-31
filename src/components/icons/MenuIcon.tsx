import { IconProps } from "./icon-props"

export default function MenuIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeDasharray={16}
        strokeDashoffset={16}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path d="M5 5h14" strokeDashoffset={0}></path>
        <path d="M5 12h14" strokeDashoffset={0}></path>
        <path d="M5 19h14" strokeDashoffset={0}></path>
      </g>
    </svg>
  )
}
