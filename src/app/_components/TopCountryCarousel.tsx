import Carousel from "@/components/carousel"
import { CarouselSkeleton } from "@/components/carousel/carouselSkeleton"
import { getTopCountryStations } from "@/utils/api"

import { Suspense } from "react"

type TopCountryStationsProps = {
  country: string
}
export const TopCountryStations = async ({ country }: TopCountryStationsProps) => {

  const stations = await getTopCountryStations(country)
  return (
    <Suspense fallback={<CarouselSkeleton />}>
      <Carousel stations={stations} />
    </Suspense>)
}