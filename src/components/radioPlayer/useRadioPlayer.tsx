'use client';
import { Station } from '@/types';
import React, { createContext, useState, ReactNode, useEffect } from 'react';

type RadioPlayerStation = Pick<Station, 'url' | 'stationuuid' | 'favicon' | 'name' | 'votes'>;
interface RadioPlayerContextProps {
  currentStation: RadioPlayerStation;
  isPlaying: boolean;
  isLoading: boolean;
  toggleRadio: () => void;
  changeStation: (station: RadioPlayerStation) => void;
  changeVolume: (volume: number) => void;
  volume: number;
}

export const RadioPlayerContext = createContext<RadioPlayerContextProps>({} as RadioPlayerContextProps);
export const RadioPlayerProvider = ({ children }: { children: ReactNode }) => {
  const [audio] = useState(typeof Audio !== "undefined" && new Audio());
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [currentStation, setCurrentStation] = useState<RadioPlayerStation>({} as RadioPlayerStation);
  const playRadio = () => {
    if (audio)
      audio.play()
  }
  const stopRadio = () => {
    if (audio)
      audio.pause()
  }
  const changeVolume = (volume: number) => {
    if (audio)
      audio.volume = volume;
  }
  const toggleRadio = () => {
    if (!audio) return;
    if (audio.paused) {
      playRadio()
    } else {
      stopRadio()
    }
  }
  const changeStation = (station: RadioPlayerStation) => {
    if (!audio) return;
    audio.src = station.url;
    setCurrentStation(station);
    const recentPlayed = localStorage.getItem('recentlyPlayed') || ''
    if (recentPlayed.split(',').length > 5) {
      localStorage.setItem('recentlyPlayed', recentPlayed.split(',').slice(0, 5).join(',') + ',');
    }
    if (!recentPlayed.includes(station.stationuuid)) {
      localStorage.setItem('recentlyPlayed', recentPlayed + station.stationuuid + ',');
    }
    playRadio();
  }
  useEffect(() => {
    if (!audio) return;
    audio.volume = 0.5;
    const load = () => {
      setLoading(true)
    }
    audio.addEventListener('loadstart', load)
    const canPlay = () => {
      setLoading(false)
    }
    audio.addEventListener('canplay', canPlay)
    const play = () => {
      setIsPlaying(true)
    }
    audio.addEventListener('play', play)
    const pause = () => {
      setIsPlaying(false)
    }
    audio.addEventListener('pause', pause)
    return () => {
      audio.removeEventListener('loadstart', load)
      audio.removeEventListener('canplay', canPlay)
      audio.removeEventListener('play', play)
      audio.removeEventListener('pause', pause)
    }
  }, [audio])
  return (
    <RadioPlayerContext.Provider value={{ currentStation, changeStation, isLoading, isPlaying, toggleRadio, changeVolume, volume: audio ? audio.volume : 0 }}>
      {children}
    </RadioPlayerContext.Provider>
  );
};
