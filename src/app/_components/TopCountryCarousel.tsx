import Carousel from "@/components/carousel"
import { CarouselSkeleton } from "@/components/carousel/carouselSkeleton"
import { getTopCountryStations } from "@/utils/api"
import { extractCountryCode } from "@/utils/locale"
import { headers } from "next/headers"
import { Suspense } from "react"


export const TopCountryStations = async () => {
  const headersList = await headers()
  const locale = headersList.get('locale') || 'pt-BR'
  const country = extractCountryCode(locale)
  const stations = await getTopCountryStations(country)
  return (
    <Suspense fallback={<CarouselSkeleton />}>
      <Carousel stations={stations} />
    </Suspense>)
}