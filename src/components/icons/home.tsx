'use client';
type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;
export default function HomeIcon({
  size = 24,
  ...props
}: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 -960 960 960" width={size} fill="#000000"{...props}><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" /></svg>
  )
}