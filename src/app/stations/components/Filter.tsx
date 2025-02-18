'use client';
import React, { use, useEffect } from "react"
import { FilterType } from "@/types"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import StyledInput from "@/components/input";
import { Select } from "@/components/select";
import { CountrySelect } from "@/components/header/countrySelect";
import { LanguageSelect } from "@/components/header/languageSelect";
import { Country, Language } from "@/types";
import { useDebouncedCallback } from "use-debounce";


export const Filter = ({
  availableCountries,
  availableLanguages
}: {
  availableCountries: Promise<Country[]>,
  availableLanguages: Promise<Language[]>
}) => {
  const countries = use(availableCountries)
  const languages = use(availableLanguages)
  const { replace } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [filterType, setFilterType] = React.useState<FilterType>(FilterType.NAME)
  const value = searchParams.get('value') || ''
  const handleSearch = useDebouncedCallback((query: string) => {
    const params = new URLSearchParams(searchParams)
    if (query) {
      params.set('filter', filterType)
      params.set('value', query)
    } else {
      params.delete('filter')
      params.delete('value')
    }
    replace(`${pathname}?${params.toString()}`)

  }, 500)
  useEffect(() => {
    if (searchParams.get('filter')) {
      setFilterType(searchParams.get('filter') as FilterType)
    }
  }, [searchParams])
  return (
    <div className="flex w-full gap-4 max-w-3xl justify-center items-center">
      {
        filterType === FilterType.NAME && <StyledInput id="search-engine-input" label="Encontre uma estação" color="primary" placeholder="Digite o nome da rádio" size="sm" labelClasses="sr-only" defaultValue={filterType === FilterType.NAME ? value : ''} onChange={(e) => handleSearch(e.target.value)} />
      }
      {
        filterType === FilterType.COUNTRY && <CountrySelect
          labelClass="sr-only"
          availableCountries={countries}
          onSelect={e => {
            handleSearch(
              e.name
            )
          }} />
      }
      {
        filterType === FilterType.LANGUAGE && <LanguageSelect
          labelClass="sr-only"
          availableLanguages={languages}
          onSelect={e => {
            handleSearch(
              e.name
            )
          }} />
      }
      <div className='flex flex-col gap-2 w-full max-w-xs min-w-min'>
        <Select
          label='Selecione um filtro:'
          id="select-filter"
          onChange={(e) => {
            setFilterType(e.target.value as FilterType)
          }}
          value={filterType}
          labelClass="sr-only"
        >
          <option value={FilterType.COUNTRY}>Filtrar por País</option>
          <option value={FilterType.LANGUAGE}>Filtrar por Idioma</option>
          <option value={FilterType.NAME}>Filtrar por Nome</option>
        </Select>
      </div>
    </div>
  )
}