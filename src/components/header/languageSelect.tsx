'use client';
import { Select, SelectProps } from "../select"
import { Language } from "@/types";


type StationSelectProps = {
  availableLanguages: Language[],
  onSelect: (stationLanguage: Language) => void,
} & Omit<SelectProps, 'onChange' | 'label' | 'onSelect'>

export const LanguageSelect = ({ availableLanguages, onSelect, ...props }: StationSelectProps) => {
  return (
    <Select label="Escolha uma linguagem:" onChange={(e) => {
      const selectedLanguage = availableLanguages.find(station => station.name === e.target.value)
      if (selectedLanguage) onSelect(selectedLanguage)
    }} {...props}>
      <option value="">
        Linguagem
      </option>
      {availableLanguages.map(station => (
        <option key={station.name} value={station.name} className='text-xs text-primary-900'>{station.name} ({station.stationcount})</option>
      ))}
    </Select>
  )
}