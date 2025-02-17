'use client';
import { use } from "react";
import { Select } from "../select"

export type Language = {
  name: string,
  iso_639: string,
  stationcount: string | number,
}
type StationSelectProps = {
  availableLanguages: Language[],
  onSelect: (stationLanguage: Language) => void,
}

export const LanguageSelect = ({ availableLanguages, onSelect }: StationSelectProps) => {
  return (
    <Select label="Escolha uma linguagem:" onChange={(e) => {
      const selectedLanguage = availableLanguages.find(station => station.name === e.target.value)
      if (selectedLanguage) onSelect(selectedLanguage)
    }}>
      <option value="">
        Linguagem
      </option>
      {availableLanguages.map(station => (
        <option key={station.name} value={station.name} className='text-xs text-primary-900'>{station.name} ({station.stationcount})</option>
      ))}
    </Select>
  )
}