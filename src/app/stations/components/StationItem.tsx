'use client';

import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import FavoriteIcon from "@/components/icons/favorite";
import { useRadioPlayer } from "@/components/radioPlayer/useRadioPlayer";
import { Station } from "@/types";
import PlayIcon from "@/components/icons/playIcon";
import { FavoriteButton } from "./FavoriteButton";
import { StationAvatar } from "./StationAvatar";
import { FavoritesContext } from "@/app/favorites/components/FavoritesTable/FavoritesContext";


type StationItemProps = Station;
export const StationItem: React.FC<StationItemProps> = (station) => {
  const { favorites, toggleFavorite } = use(FavoritesContext)
  const { currentStation, changeStation, toggleRadio, isPlaying } = useRadioPlayer()
  const [isFavorite, setIsFavorite] = useState(false)
  useEffect(() => {
    setIsFavorite(favorites.some(favorite => favorite.stationuuid === station.stationuuid))
  }, [favorites, station.stationuuid])
  const handleChangeStation = () => {
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
  }
  return (
    <div role="button" onClick={handleChangeStation} className="group/item flex relative bg-surface-lighter justify-between w-full max-w-3xl p-2 items-center bg-surface rounded-lg shadow-lg border border-muted hover:bg-surface-darker transition-colors duration-300 ">
      <div className="flex gap-1">
        <StationAvatar src={station.favicon.trimEnd()} alt={`station-${station.name}`} fallbackSrc="/fallbackRadioImage.jpeg" className="self-start shrink-0" />
        <div className="flex flex-col gap-1">
          <h3 className="text-xs font-semibold max-w-40 font-body text-on-surface shrink line-clamp-2 text-ellipsis">{station.name.replace(/\s/g, "") == "" ? "A rádio de você sabe quem." : station.name}</h3>
          <div className="flex gap-0.5 items-center">
            <FavoriteIcon className="fill-primary-500" size={8} />
            <span className="text-[0.5rem] font-sans text-primary-500">Votes:{station.votes}</span>
            {
              station.countrycode && <Image src={`https://flagcdn.com/16x12/${station.countrycode.toLowerCase()}.png`} alt="flag" width={16} height={12} className="object-cover" />
            }
            <span className="text-[0.5rem] max-w-40 font-sans text-primary-500 truncate text-ellipsis">{station.language.split(',')[0]}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <button
          className="hidden opacity-0 group-hover/item:block group-hover/item:opacity-100 transition-colors delay-100 duration-300 hover:cursor-pointer hover:brightness-125"
          onClick={handleChangeStation}>
          <PlayIcon className="fill-secondary-500 " />
        </button>
        <FavoriteButton active={isFavorite} toggleFavoriteStatus={
          () => toggleFavorite(station)
        } />
        {currentStation.url === station.url_resolved && isPlaying ? (
          <Image src={"/playing.gif"} alt="playing" width={24} height={24} className="object-cover" />
        ) : null}
      </div>
    </div>
  );
}

export const StationItemSkeleton = () => {
  return (
    <div className="flex relative bg-surface-lighter justify-between w-full max-w-3xl p-2 items-center bg-surface rounded-lg shadow-lg border border-muted animate-pulse">
      <div className="flex gap-1">
        <div className="bg-primary-500 w-12 h-12 rounded-md shrink-0" />
        <div className="flex flex-col gap-1">
          <div className="bg-primary-500 w-24 h-3 rounded-md" />
          <div className="flex gap-0.5 items-center">
            <div className="bg-primary-500 w-3 h-3 rounded-md" />
            <div className="bg-primary-500 w-16 h-3 rounded-md" />
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="bg-primary-500 w-8 h-8 rounded-md" />
        <div className="bg-primary-500 w-8 h-8 rounded-md" />
      </div>
    </div>
  );
}