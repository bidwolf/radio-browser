'use client';

import React, { use } from 'react';
import MenuIcon from '../icons/menu';
import SearchIcon from '../icons/search';
import { Select } from '../select';
import { LanguageSelect } from '../header/languageSelect';
import { CountrySelect } from '../header/countrySelect';
import StyledInput from '../input';
import { useRouter } from 'next/navigation';
import { Country, FilterType, Language } from '@/types';
import { Button } from '../button';
import { useSidebar } from '../sidebar/sidebarContext';
import Image from 'next/image';


export default function Header({ availableCountries, availableLanguages }: {
  availableCountries: Promise<Country[]>,
  availableLanguages: Promise<Language[]>,
}) {
  const [filterType, setFilterType] = React.useState<FilterType>(FilterType.NAME)
  const [filterValue, setFilterValue] = React.useState<string>('')
  const countries = use(availableCountries)
  const languages = use(availableLanguages)
  const { toggleSidebar } = useSidebar()
  const router = useRouter()
  const handleSearch = () => {
    const query = filterValue.trimEnd()
    router.replace(
      `/stations?filter=${filterType}&value=${query}&limit=10&offset=0`
    )

  }
  return (
    <header className="col-span-12 md:col-span-7 lg:col-span-8 xl:col-span-9 w-full" >
      <div className='grid grid-cols-12 place-items-center py-4 gap-2'>
        <button className='hover:opacity-90 hover:cursor-pointer col-span-9 flex items-center justify-center gap-2' onClick={() => router.push('/')} >
          <Image src='/logo.png' alt='Radio Vibe' width={40} height={40} />
          <h1 className='font-header text-xl text-primary lg:text-4xl'>Radio Vibe</h1>
        </button>
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
            <Button size='sm'
              className='w-full'
              onClick={handleSearch}
            >
              Buscar
            </Button>
          </div>
        </div>
        <MenuIcon
          role="button"
          className='fill-primary-500 hover:opacity-90 rounded-full md:hidden '
          onClick={toggleSidebar}
        />
      </div>
    </header>
  );
}