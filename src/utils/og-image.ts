/**
 * Generate dynamic OG image URL using dynamicog.com service
 */
export function generateDynamicOgImage({
  title,
  subtitle = '',
  name = 'Nexios Labs',
  website = 'nexioslabs.com',
  logo = 'nexioslogo',
  dark = false
}: {
  title: string
  subtitle?: string
  name?: string
  website?: string
  logo?: string
  dark?: boolean
}): string {
  const baseUrl = 'https://dynamicog.com/og/docs/img'
  
  const params = new URLSearchParams({
    logo,
    title,
    sub: subtitle,
    name,
    website,
    dark: dark.toString()
  })
  
  return `${baseUrl}?${params.toString()}`
}