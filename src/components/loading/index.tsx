import React, { SVGProps } from "react";
import { twMerge } from "tailwind-merge";

const loadingClasses = "text-gray-200 animate-spin dark:text-gray-600 fill-primary-500";
type SpinnerLoaderProps = SVGProps<SVGSVGElement> & {
  size?: 'sm' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl';
}
export const SpinnerLoader: React.FC<SpinnerLoaderProps> = ({
  ...props
}) => {


  return (
    <div role="status">
      <svg className="mr-3 -ml-1 size-5 animate-spin text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"{...props}>
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
      <span className="sr-only">Loading...</span>
    </div>
  )
}