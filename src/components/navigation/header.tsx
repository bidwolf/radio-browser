import { DetailedHTMLProps, LiHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type HeaderProps = DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> & {
  headerClasses?: string;
}
const liClasses = 'h-20 my-8 font-header text-center text-xl text-primary-500'
export const Header = ({ headerClasses, ...props }: HeaderProps) => (
  <li className={twMerge(liClasses, headerClasses)} {...props}>
    <h1>Radio Vibe</h1>
  </li>
)
