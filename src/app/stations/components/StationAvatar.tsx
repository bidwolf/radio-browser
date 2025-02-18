'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const defaultAvatarClassNames = "flex items-center justify-center bg-transparent bg-primary rounded-full"
export const StationAvatar = (props: { src: string, fallbackSrc: string, alt: string, className?: string }) => {
  const [imgSrc, set_imgSrc] = useState(props.src || props.fallbackSrc);
  useEffect(() => {
    if (!props.src) {
      set_imgSrc(props.fallbackSrc);
      return;
    }
    set_imgSrc(props.src)
  }, [props.src])
  return (
    <div className={twMerge(defaultAvatarClassNames, props.className)}>
      <Image src={imgSrc} alt={props.alt} width={36} height={36} onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          // Broken image
          set_imgSrc(props.fallbackSrc);
        }
      }}
        className="rounded-full object-cover w-8 h-8"
        onError={() => {
          set_imgSrc(props.fallbackSrc);
        }} />
    </div>
  )
}