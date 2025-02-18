import { SelectHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

const defaultSelectClasses = 'w-full bg-transparent pl-3 pr-8 py-1.5 text-xs border rounded-lg focus:outline-none focus:ring focus:ring-opacity-50 transition duration-300 shadow-sm focus:shadow-md appearance-none cursor-pointer'
const smSelectClasses = 'h-8 text-xs'
const mdSelectClasses = 'h-10 text-sm'
const lgSelectClasses = 'h-12 text-md'
const primarySelectClasses = 'text-primary-500 border-primary-500 focus:ring-primary-500'
const disabledSelectClasses = 'pointer-events-none opacity-50 placeholder:text-slate-400 text-slate-700 border-slate-400 focus:outline-none focus:border-slate-400 hover:border-slate-400'
export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> & {
  size?: 'sm' | 'md' | 'lg';
  label: string;
  color?: 'primary' | 'secondary' | 'tertiary';
  testId?: string;
  disabled?: boolean;
  labelClass?: string;
}
export const Select = ({ size = "sm", color = "primary", className, testId, labelClass, ...props }: SelectProps) => {
  const defaultClasses = twMerge(defaultSelectClasses, className);
  const sizeClasses = size === 'sm' ? smSelectClasses : size === 'md' ? mdSelectClasses : lgSelectClasses;
  const colorClasses = color === 'primary' ? primarySelectClasses : '';
  const disabledClasses = props.disabled ? disabledSelectClasses : '';
  return (
    <div>
      <label htmlFor={props.id} className={twMerge('text-xs font-body font-semibold', labelClass)}>{props.label}</label>
      <div className='relative'>
        <select
          {...props}
          className={twMerge(defaultClasses, sizeClasses, colorClasses, disabledClasses)}
          data-testid={testId}
        >
          {props.children}
        </select>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="h-5 w-5 ml-1 absolute top-1.5 right-1.5 text-slate-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
        </svg>
      </div>
    </div>
  )
}