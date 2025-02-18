import Negotiator from "negotiator"
import { headers } from "next/headers"
import { match } from "@formatjs/intl-localematcher"
import { AllStationsButton } from "./_components/AllStationsButton";
import { CountryButton } from "./_components/CountryButton";
import { TopCountryStations } from "./_components/TopCountryCarousel";
import { TopGlobalCarouselStations } from "./_components/TopGlobalCarousel";
import { extractCountryCode } from "@/utils/locale"
export default async function Home() {
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
  let regionNames = new Intl.DisplayNames(['pt-BR'], { type: 'region' });
  return (
    <main className="m-4 @container flex flex-col gap-8 items-center justify-center">
      <section className="flex flex-col gap-4 items-center justify-center w-full max-w-2xl">
        <h3 className="font-body font-semibold text-2xl text-center text-on-surface">Suas escolhas</h3>
        <p className="font-body font-light text-sm text-foreground text-pretty">Esqueceu aquela estação de notícias que ouviu pela manhã? Aqui estão suas escolhas mais comuns pra te ajudar a lembrar!</p>
        <TopGlobalCarouselStations />
        <AllStationsButton />
      </section>
      <section className="flex flex-col gap-4 items-center justify-center w-full max-w-2xl mb-28 mt-16">
        <h3 className="font-body font-semibold text-2xl text-center text-on-surface">
          Rádios populares em {regionNames.of(country.toUpperCase())}
        </h3>
        <p className="font-body font-light text-sm text-foreground text-pretty">
          Quer conhecer o que está bombando em {regionNames.of(country.toUpperCase())}? Aqui estão as 3 estações mais populares do momento!

        </p>
        <TopCountryStations country={country} />
        <CountryButton country={country} />
      </section>
    </main>
  );
}
