import Carousel from "@/components/carousel"
import { CarouselSkeleton } from "@/components/carousel/carouselSkeleton"
import { getTopCountryStations } from "@/utils/api"
import { extractCountryCode } from "@/utils/locale"
import Negotiator from "negotiator"
import { headers } from "next/headers"
import { Suspense } from "react"
import { match } from "@formatjs/intl-localematcher"

export const TopCountryStations = async () => {
  const headersList = await headers()
  const negotiatorHeaders: Record<string, string> = {}
  headersList.forEach((value, key) => {
    negotiatorHeaders[key] = value
  })
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  const locales = ['en-US', 'nl-NL', 'nl', 'pt-BR', 'pt-PT']
  const defaultLocale = 'en-US'
  const locale = match(languages, locales, defaultLocale)
  const country = extractCountryCode(locale)
  const stations = await getTopCountryStations(country)
  return (
    <Suspense fallback={<CarouselSkeleton />}>
      <Carousel stations={stations} />
    </Suspense>)
}