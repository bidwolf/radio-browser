import { Country, Station } from "@/types"
import { Language } from "@/types"

export const fetchAvailableCountries = async (): Promise<Country[]> => {
  const response = await fetch('http://de1.api.radio-browser.info/json/countries', {
    cache: 'force-cache'
  })
  if (!response.ok) {
    throw new Error('Failed to fetch available countries')
  }
  return response.json() as Promise<Country[]>
}
export const fetchAvailableLanguages = async (): Promise<Language[]> => {
  const response = await fetch('http://de1.api.radio-browser.info/json/languages', {
    cache: 'force-cache'
  })
  if (!response.ok) {
    throw new Error('Failed to fetch available languages')
  }
  return response.json() as Promise<Language[]>
}
export async function getTopGlobalStations() {
  const base = 'http://de1.api.radio-browser.info/json/stations'
  const response = await fetch(`${base}?limit=3&order=votes`, {
    cache: 'force-cache'
  })
  if (!response.ok) {
    throw new Error('Failed to fetch top stations')
  }
  return response.json() as Promise<Station[]>
}
export async function getTopCountryStations(country: string) {
  const base = 'http://de1.api.radio-browser.info/json/stations'
  const response = await fetch(`${base}/bycountry/${country}?limit=3&order=votes`, {
    cache: 'force-cache'
  })
  if (!response.ok) {
    throw new Error('Failed to fetch top stations')
  }
  return response.json() as Promise<Station[]>
}