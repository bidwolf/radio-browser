import { fetchAvailableCountries, fetchAvailableLanguages } from "@/utils/api"
import { FilterType } from "@/types"
import { Filter } from "../stations/components/Filter"
import { Pagination } from "../stations/components/Pagination"
import { FavoriteStations } from "./components/FavoritesTable"


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
      Seus favoritos
    </h2>
    <Filter availableCountries={availableCountries} availableLanguages={availableLanguages} />
    <Pagination />
    <FavoriteStations filter={filter} offset={offset} value={value} />

  </main>
}