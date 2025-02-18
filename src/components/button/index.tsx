import { ButtonHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'tertiary'
  classname?: string
}
const defaultButtonClasses = 'flex w-fit items-center justify-center cursor-pointer rounded-lg font-semibold font-body hover:shadow-md transition-all duration-300 hover:opacity-90'
const smallButtonClasses = 'h-6 px-4'
const mediumButtonClasses = 'h-8 px-6'
const largeButtonClasses = 'h-10 px-8'
const primaryButtonClasses = 'bg-primary-500 text-white'
const secondaryButtonClasses = 'bg-secondary-500 text-white'
const tertiaryButtonClasses = 'bg-tertiary-500 text-white'
const disabledButtonClasses = 'bg-muted text-muted cursor-not-allowed'

export const Button: React.FC<ButtonProps> = ({ size = 'md', color = 'primary', disabled, children, className, ...props }) => {
  const buttonClasses = twMerge(
    defaultButtonClasses,
    size === 'sm' ? smallButtonClasses : size === 'md' ? mediumButtonClasses : largeButtonClasses,
    color === 'primary' ? primaryButtonClasses : color === 'secondary' ? secondaryButtonClasses : tertiaryButtonClasses,
    disabled ? disabledButtonClasses : '',
    className
  )
  return (
    <button className={buttonClasses} disabled={disabled} {...props}>{children}</button>
  )
}