'use client';
import { Station } from "@/types";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useRadioPlayer } from "../radioPlayer/useRadioPlayer";
import Image from "next/image";

interface CarouselProps {
  stations?: Station[];
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ stations = [], className }) => {
  const [current, setCurrent] = useState(0);
  const { changeStation, currentStation, toggleRadio } = useRadioPlayer()
  return (
    <div className={twMerge("relative group overflow-hidden bg-tertiary-500 rounded-md border border-muted shadow w-full min-w-[18rem]", className)}>
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {stations.map((station) => (
          <div role="button" key={station.stationuuid} className="min-w-full flex flex-col items-center p-8 hover:cursor-pointer hover:opacity-80" onClick={() => {
            if (currentStation.url === station.url_resolved) {
              toggleRadio()
              return
            }
            changeStation({
              url: station.url_resolved,
              stationuuid: station.stationuuid,
              favicon: station.favicon,
              name: station.name,
              votes: station.votes
            })
          }}>
            <Image
              src={station.favicon}
              alt={station.name}
              width={192}
              height={192}
              className="w-48 h-48 object-contain pointer-events-none"
            />
            <p className="mt-2 text-center select-none font-header">{station.name}</p>
          </div>
        ))}
      </div>

      <div className="z-20 absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2 justify-center items-center">
        {stations.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={twMerge(
              "w-1 h-1 rounded-full",
              current === index ? "bg-primary-500 w-2 h-2 transition-colors" : "bg-gray-300"
            )}
          />
        ))}
      </div>

      <button
        onClick={() =>
          setCurrent((prev) => (prev - 1 + stations.length) % stations.length)
        }
        className="absolute lg:hidden z-20 lg:group-hover:block lg:group-hover:absolute pr-1 left-4 top-1/2 transform -translate-y-1/2 bg-surface-lighter h-8 w-8 text-center rounded-full shadow-md hover:bg-surface-darker hover:cursor-pointer hover:text-on-surface"
      >
        &#9664;
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % stations.length)}
        className="absolute lg:hidden z-20 lg:group-hover:block lg:group-hover:absolute pl-1 right-4 top-1/2 transform -translate-y-1/2 bg-surface-lighter h-8 w-8 text-center rounded-full shadow-md hover:bg-surface-darker hover:cursor-pointer hover:text-on-surface"
      >
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;