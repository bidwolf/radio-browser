'use client'
import { Country } from "@/types"
import { Select, SelectProps } from "../select"


type StationSelectProps = {
  availableCountries: Country[],
  onSelect: (stationCountry: Country) => void,
} & Omit<SelectProps, 'onChange' | 'label' | 'onSelect'>
export const CountrySelect = ({ availableCountries, onSelect, ...props }: StationSelectProps) => {
  return (
    <Select label="Escolha um país:" onChange={(e) => {
      const selectedCountry = availableCountries.find(station => station.name === e.target.value)
      if (selectedCountry) onSelect(selectedCountry)
    }}  {...props}>
      <option value="">
        País
      </option>
      {availableCountries.map(station => (
        <option key={station.name + station.stationcount} value={station.name} className='text-xs text-primary-900'>{station.name} ({station.stationcount})</option>
      ))}
    </Select>
  )
}