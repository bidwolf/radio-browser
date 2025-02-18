import Carousel from "@/components/carousel"
import { CarouselSkeleton } from "@/components/carousel/carouselSkeleton"
import { getTopGlobalStations } from "@/utils/api"
import { Suspense } from "react"

export const TopGlobalCarouselStations = async () => {
  const stations = await getTopGlobalStations()
  return (
    <Suspense fallback={<CarouselSkeleton />}>
      <Carousel stations={stations} />
    </Suspense>)
}