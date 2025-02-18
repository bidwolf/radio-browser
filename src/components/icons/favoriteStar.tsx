'use client';
type IconProps = {
  size?: number;
  stroke?: string;
} & React.SVGProps<SVGSVGElement>;
export default function FavoriteStarIcon({
  size = 24,
  ...props
}: IconProps) {
  return (
    <svg width={size} height={24 / 25 * size} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"{...props}>
      <g clipPath="url(#clip0_60_95)">
        <path d="M12.5 2L15.59 8.26L22.5 9.27L17.5 14.14L18.68 21.02L12.5 17.77L6.32 21.02L7.5 14.14L2.5 9.27L9.41 8.26L12.5 2Z" stroke={props.stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_60_95">
          <rect width="24" height="24" fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  )
}

