'use client'
import React from 'react';
import { useRadioPlayer } from './useRadioPlayer';
import PlayIcon from '../icons/playIcon';
import StopIcon from '../icons/stopIcon';
import { SpinnerLoader } from '../loading';
import { StationAvatar } from '@/app/stations/components/StationAvatar';
import { twMerge } from 'tailwind-merge';

const RadioPlayer = () => {
  const { currentStation, toggleRadio, volume, changeVolume, isLoading, isPlaying } = useRadioPlayer();



  return (
    <div className={twMerge('z-20 fixed grid grid-cols-3 bottom-0 left-0 right-0 bg-surface-lighter p-4 shadow-lg border-t border-muted',
      isLoading ? 'opacity-50' : 'opacity-100',
      !currentStation.url && 'hidden'
    )}>
      <div className="audio-controls flex items-center gap-1 order-last md:order-first">
        <button
          onClick={() => {
            toggleRadio();
          }}
        >
          {
            isLoading
              ? <SpinnerLoader size='lg' />
              : isPlaying
                ? <PlayIcon className='fill-secondary-500' size={48} />
                : <StopIcon className='fill-secondary-500' size={48} />
          }
        </button>
        <div className="flex items-center md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </div>

        <label className="items-center gap-2 hidden md:flex">
          Volume
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            defaultValue={volume}
            onChange={(e) => {
              changeVolume(parseFloat(e.target.value));
            }}
            className="w-32 accent-secondary-500"
          />
        </label>
      </div>
      <div className='flex items-center gap-2 col-span-2'>
        <StationAvatar src={currentStation.favicon} alt='station' fallbackSrc='/fallbackRadioImage.jpeg' className='shrink-0' />
        <p className='text-xs font-sans font-semibold text-primary-900'>{currentStation.name}</p>

      </div>
    </div>
  );
};

export default RadioPlayer;