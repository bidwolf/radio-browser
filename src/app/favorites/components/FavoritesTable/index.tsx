'use client';

import React, { use } from "react";
import { FavoritesContext } from "./FavoritesContext"
import { StationItem, StationItemSkeleton } from "@/app/stations/components/StationItem";
import TransmissionIcon from "@/components/icons/transmision";
import { FilterType } from "@/types";

type FavoriteStationsProps = {
  filter: FilterType
  value: string
  offset: number
}
export const FavoriteStations: React.FC<FavoriteStationsProps> = ({ filter, value, offset }) => {
  const { favorites, isLoading } = use(FavoritesContext)
  const filteredFavorites = favorites.filter(station => {
    if (filter === FilterType.COUNTRY) {
      return station.country === value
    } else if (filter === FilterType.LANGUAGE) {
      return station.language === value
    } else {
      return station.name.toLowerCase().includes(value.toLowerCase())
    }
  }).slice(offset, offset + 10)
  return (

    <div className="@container w-full p-4 mb-24">
      <div className="flex flex-col gap-4 @xl:grid @xl:grid-cols-2 @4xl:grid-cols-3 @7xl:grid-cols-4 @8xl:grid-cols-5 ">
        {
          isLoading ? (
            Array.from({ length: 10 }).map((_, i) => (
              <StationItemSkeleton key={i} />
            ))
          ) :
            filteredFavorites.length === 0 ? (
              <div className="flex flex-col gap-2 p-4 rounded-md col-span-full">
                <TransmissionIcon className="w-12 h-12 mx-auto fill-on-surface" />
                <h3 className="text-sm text-center text-on-surface font-semibold font-body">Nenhuma estação encontrada no momento</h3>
              </div>
            ) :
              (
                <>
                  {filteredFavorites.map(station => (
                    <StationItem key={station.stationuuid} {...station} />
                  ))}
                </>
              )
        }
      </div>
    </div>
  )
}