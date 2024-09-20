
import {
  Loader2,
} from "lucide-react";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: ({ className, ...props }: { className: string }) => (
    <img src="/icon.png" alt="Magic UI" className={className} {...props} />
  ),
  spinner: Loader2,
  chevronRight: (props: IconProps) => (
    <svg
      fill="none"
      stroke="currentColor"
      width="11"
      height="11"
      viewBox="0 0 10 10"
      aria-hidden="true"
      strokeWidth="1.5"
      className="-mr-0.5"
      strokeLinecap="round"
      {...props}
    >
      <path
        className="opacity-0 transition group-hover:opacity-100"
        d="M0 5h7"
        strokeLinecap="round"
      ></path>
      <path
        className="transition group-hover:translate-x-[3px]"
        d="M1 1l4 4-4 4"
        strokeLinecap="round"
      ></path>
    </svg>
  )
}