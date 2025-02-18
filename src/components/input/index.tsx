import { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const defaultInputClasses = 'w-full h-12 px-2 text-sm border rounded-lg focus:outline-none focus:ring focus:ring-opacity-50'
const defaultLabelClasses = 'text-xs font-body text-foreground font-semibold'
type inputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  inputClasses?: string;
  labelClasses?: string;
  placeholder?: string;
  label: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'tertiary';
}
const StyledInput = ({ inputClasses, labelClasses, label, size = "sm", color = "primary", ...props }: inputProps) => {
  return (
    <div className='w-full'>
      <label htmlFor={props.id} className={twMerge(defaultLabelClasses, labelClasses)}>
        {label}
      </label>
      <input {...props} className={twMerge(defaultInputClasses,
        inputClasses,
        size === 'sm' && 'h-8',
        size === 'md' && 'h-10',
        size === 'lg' && 'h-12',
        color === 'primary' && 'border-primary-500 focus:ring-primary-500',
        color === 'secondary' && 'border-secondary-500 focus:ring-secondary-500',
        color === 'tertiary' && 'border-tertiary-500 focus:ring-tertiary-500'
      )} />
    </div>
  )
}
export default StyledInput;