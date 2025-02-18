import { FilterType, Station } from "@/types";
import { StationItem } from "./StationItem";
import TransmissionIcon from "@/components/icons/transmision";

const fetchStationData = async (query: string, offset: number = 0, filterType: FilterType | null) => {
  const base = 'http://de1.api.radio-browser.info/json/stations'
  let url = ''
  switch (filterType) {
    case FilterType.NAME:
      url = `${base}/byname/${query}?limit=10&offset=${offset}`
      break
    case FilterType.COUNTRY:
      url = `${base}/bycountry/${query}?limit=10&offset=${offset}`
      break
    case FilterType.LANGUAGE:
      url = `${base}/bylanguage/${query}?limit=10&offset=${offset}`
      break
    default:
      url = `${base}?limit=10&offset=${offset}`
  }
  const response = await fetch(url, {
    cache: 'force-cache',
    referrerPolicy: 'unsafe-url'
  })
  if (!response.ok) {
    throw new Error('Failed to fetch station data')
  }
  return response.json() as Promise<Station[]>
}
export default async function Stations({
  query,
  offset,
  filterType
}: {
  query: string,
  offset?: number,
  filterType: FilterType | null
}) {
  const stations = await fetchStationData(query, offset, filterType)

  return (
    <div className="@container w-full p-4 mb-24">
      <div className="flex flex-col gap-4 @xl:grid @xl:grid-cols-2 @4xl:grid-cols-3 @7xl:grid-cols-4 @8xl:grid-cols-5">
        {
          stations.length === 0 ? (
            <div className="flex flex-col gap-2 p-4 rounded-md col-span-full">
              <TransmissionIcon className="w-12 h-12 mx-auto fill-on-surface" />
              <h3 className="text-sm text-center text-on-surface font-semibold font-body">Nenhuma estação encontrada no momento</h3>
            </div>
          ) :
            stations.map(station => (
              <StationItem key={station.stationuuid} {...station} />
            ))
        }
      </div>
    </div>
  )
}