'use client';

import React, { use } from 'react';
import MenuIcon from '../icons/menu';
import SearchIcon from '../icons/search';
import { Select } from '../select';
import { Language, LanguageSelect } from '../header/languageSelect';
import { Country, CountrySelect } from '../header/countrySelect';
import StyledInput from '../input';
import { useRouter } from 'next/navigation';
export enum FilterType {
  COUNTRY = 'country',
  LANGUAGE = 'language',
  NAME = 'name'
}

export default function Header({ availableCountries, availableLanguages }: {
  availableCountries: Promise<Country[]>,
  availableLanguages: Promise<Language[]>
}) {
  const [filterType, setFilterType] = React.useState<FilterType>(FilterType.NAME)
  const [filterValue, setFilterValue] = React.useState<string>('')
  const countries = use(availableCountries)
  const languages = use(availableLanguages)
  const router = useRouter()
  return (
    <header className="col-span-12 md:col-span-7 lg:col-span-8 xl:col-span-9 w-full" >
      <div className='grid grid-cols-12 place-items-center py-4 gap-2'>
        <h1 className='font-header text-xl text-primary lg:text-4xl col-span-9'>Radio Vibe</h1>
        <button data-testid="search-button" popoverTarget='search-popover' className='cursor-pointer'>
          <SearchIcon className='fill-secondary-500' />
        </button>
        <div popover='manual' id='search-popover' className='relative backdrop:pointer-events-none backdrop:backdrop-blur-xs inset-y-0 mx-auto my-8 transform overflow-hidden rounded-lg bg-background px-4 pt-5 pb-4 text-left opacity-0 ring shadow-xl ring-black/5 transition-all transition-discrete duration-300 sm:w-full sm:max-w-96 sm:p-6 [&:is([open],:popover-open)]:opacity-100 [@starting-style]:[&:is([open],:popover-open)]:opacity-0'>
          <div className='flex flex-col gap-2'>
            <button popoverTargetAction='hide' popoverTarget='search-popover' className='absolute top-1 right-1 flex items-center justify-center w-8 h-8  text-muted cursor-pointer'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='h-5 w-5'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
            <h3 className='text-lg font-semibold font-body text-center'>Buscar estações</h3>
            <div className='grid grid-cols-2 gap-2'>
              {
                filterType === FilterType.NAME
                  ? <StyledInput id='search-input' label='Nome:' placeholder='Digite o nome da estação' onChange={(e) => {
                    setFilterValue(e.target.value)
                  }} />
                  : filterType === FilterType.COUNTRY
                    ? <CountrySelect availableCountries={countries} onSelect={(country) => {
                      setFilterValue(country.name)
                    }} />
                    : filterType === FilterType.LANGUAGE
                      ? <LanguageSelect availableLanguages={languages} onSelect={(lang) => {
                        setFilterValue(lang.name)
                      }} />
                      : null
              }
              <div className='flex flex-col gap-2'>
                <Select label='Selecione um filtro:' id="select-filter" onChange={(e) => {
                  setFilterType(e.target.value as FilterType)
                  setFilterValue('')
                }}
                  value={filterType}
                >
                  <option value={FilterType.COUNTRY}>Filtrar por País</option>
                  <option value={FilterType.LANGUAGE}>Filtrar por Idioma</option>
                  <option value={FilterType.NAME}>Filtrar por Nome</option>
                </Select>
              </div>
            </div>
            <button popoverTargetAction='hide' popoverTarget='search-popover'
              onClick={() => {
                router.replace(
                  `/stations?filter=${filterType}&value=${filterValue}&limit=10&offset=0`
                )
              }}
              className='w-full h-12 bg-primary-500 text-white rounded-lg font-semibold font-body'>Buscar</button>
          </div>
        </div>
        <MenuIcon className='fill-primary-500 md:hidden' />
      </div>
    </header>
  );
}