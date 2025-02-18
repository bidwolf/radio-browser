'use client';

import { Station } from "@/types";
import React, { useEffect, useState } from "react";

type FavoritesContextType = {
  favorites: Station[],
  removeFavorite: (stationuuid: string) => void,
  addFavorite: (station: Station) => void,
  toggleFavorite: (station: Station) => void,
  isLoading: boolean
}
export const FavoritesContext = React.createContext<FavoritesContextType>({} as FavoritesContextType);

type FavoritesTableProps = {
  children?: React.ReactNode
}
async function getStation(stationuuid: string) {
  const base = `http://de1.api.radio-browser.info/json/stations/byuuid/${stationuuid}`
  const response = await fetch(base, {
    cache: 'force-cache'
  })
  if (!response.ok) {
    throw new Error('Failed to fetch station data')
  }
  return response.json() as Promise<Station[]>
}

export const FavoritesProvider = ({ children }: FavoritesTableProps) => {
  const [favorites, setFavorites] = useState<Station[]>([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    async function getAllStations(stationuuids: string[]) {
      const stations = await Promise.all(stationuuids.map(getStation))
      setFavorites(stations.flat())
    }
    const rawFavorites = localStorage.getItem('favorites');
    if (rawFavorites) {
      const favoritesArray = rawFavorites.split(',').filter(f => f !== '');
      getAllStations(favoritesArray)
    }
    setLoading(false)
  }, [])
  const addFavorite = (station: Station) => {
    const favorites = localStorage.getItem('favorites') || '';
    localStorage.setItem('favorites', favorites + `${station.stationuuid},`);
    setFavorites(prev => {
      return [...prev, station]
    });
  }
  const removeFavorite = (stationuuid: string) => {
    const favorites = localStorage.getItem('favorites') || '';
    localStorage.setItem('favorites', favorites.replace(`${stationuuid},`, ''));
    setFavorites(prev => {
      return prev.filter(station => station.stationuuid !== stationuuid)
    });
  }
  const toggleFavorite = (station: Station) => {
    const favorites = localStorage.getItem('favorites') || '';
    if (favorites.includes(station.stationuuid)) {
      localStorage.setItem('favorites', favorites.replace(`${station.stationuuid},`, ''));
      setFavorites(prev => {
        return prev.filter(st => st.stationuuid !== station.stationuuid)
      });
    } else {
      localStorage.setItem('favorites', favorites + station.stationuuid + ',');
      setFavorites(prev => {
        return [...prev, station]
      });
    }
  }
  return (
    <FavoritesContext.Provider value={{ favorites, removeFavorite, addFavorite, toggleFavorite, isLoading }}>
      {children}
    </FavoritesContext.Provider>
  )
}