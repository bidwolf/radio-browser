'use client'
import { Select } from "../select"

export type Country = {
  name: string,
  iso_639: string,
  stationcount: string | number,
}
type StationSelectProps = {
  availableCountries: Country[],
  onSelect: (stationCountry: Country) => void,
}
export const CountrySelect = ({ availableCountries, onSelect }: StationSelectProps) => {
  return (
    <Select label="Escolha um país:" onChange={(e) => {
      const selectedCountry = availableCountries.find(station => station.name === e.target.value)
      if (selectedCountry) onSelect(selectedCountry)
    }}>
      <option value="">
        País
      </option>
      {availableCountries.map(station => (
        <option key={station.name + station.stationcount} value={station.name} className='text-xs text-primary-900'>{station.name} ({station.stationcount})</option>
      ))}
    </Select>
  )
}