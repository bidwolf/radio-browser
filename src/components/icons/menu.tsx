'use client';
type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;
export default function MenuIcon({
  size = 24,
  ...props
}: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 -960 960 960" width={size} fill="#e8eaed"{...props}><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
  )
}