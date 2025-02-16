import { HtmlHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { HeaderProps } from "./header";
import { ItemProps } from "./item";

type AllowedChild = React.ReactElement<HeaderProps> | React.ReactElement<ItemProps>;

type ContainerProps = HtmlHTMLAttributes<HTMLHtmlElement> & {
  children: AllowedChild | AllowedChild[];
  navClasses?: string;
  ulClasses?: string;
}
const defaultNavClasses = 'hidden md:col-span-2 md:flex md:flex-col md:gap-4 border-r-[0.5px] h-full border-muted'
const defaultUlClasses = 'flex flex-col h-full w-full'
export const Container = ({ children, navClasses, ulClasses }: ContainerProps) => {
  return (
    <nav className={twMerge(
      defaultNavClasses,
      navClasses
    )}>
      <ul className={twMerge(
        defaultUlClasses,
        ulClasses
      )}>
        {children}
      </ul>
    </nav>
  )
}