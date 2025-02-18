export function extractCountryCode(locale: string): string {
  if (locale.includes('-')) {
    return locale.split('-')[1].toUpperCase()
  }
  const mapping: Record<string, string> = {
    nl: 'NL'
  }
  return mapping[locale.toLowerCase()] || locale.toUpperCase()
}