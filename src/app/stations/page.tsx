import { Filter } from "./components/Filter"
import Stations from "./components/Stations"
import { Suspense } from "react"
import { Pagination } from "./components/Pagination"
import { fetchAvailableCountries, fetchAvailableLanguages } from "@/utils/api"
import { FilterType } from "@/types"
import { StationItemSkeleton } from "./components/StationItem"

export default async function Page(props: {
  searchParams: Promise<{
    filter?: FilterType
    value?: string
    offset?: number
  }
  >
}) {
  const availableCountries = fetchAvailableCountries()
  const availableLanguages = fetchAvailableLanguages()
  const searchParams = await props.searchParams
  const filter = searchParams.filter || FilterType.NAME
  const value = searchParams.value || ''
  const offset = searchParams.offset || 0
  return <main className="p-4 @container flex flex-col gap-8 items-center justify-center">
    <h2 className="text-4xl font-body text-on-surface text-center">
      Resultados da Pesquisa por {filter === FilterType.COUNTRY ? 'País' : filter === FilterType.LANGUAGE ? 'Idioma' : ''}: {value}
    </h2>
    <Filter availableCountries={availableCountries} availableLanguages={availableLanguages} />
    <Pagination />
    <Suspense key={filter + offset + value} fallback={
      <div className="@container w-full p-4 mb-24">
        <div className="flex flex-col gap-4 @xl:grid @xl:grid-cols-2 @4xl:grid-cols-3 @7xl:grid-cols-4 @8xl:grid-cols-5">
          {
            Array.from({ length: 10 }).map((_, i) => (
              <StationItemSkeleton key={i} />
            ))
          }
        </div>
      </div>
    }>
      <Stations filterType={filter} offset={offset} query={value} key={
        `${filter}-${value}-${offset}`
      } />
    </Suspense>

  </main>
}