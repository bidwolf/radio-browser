import { Country } from "@/types"
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