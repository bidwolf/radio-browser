import { extractCountryCode } from '@/utils/locale'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'



export default function middleware(request: NextRequest) {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value
  })
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  const locales = ['en-US', 'nl-NL', 'nl', 'pt-BR', 'pt-PT']
  const defaultLocale = 'en-US'
  const locale = match(languages, locales, defaultLocale)
  const isoCountryCode = extractCountryCode(locale)

  const response = NextResponse.next()
  response.headers.set('locale', isoCountryCode)
  return response
}

export const config = {
  matcher: ['/', '/favorites', '/stations', '/stations/[id]'],
}