import type { Metadata, Viewport } from 'next'
import { Inter, Bricolage_Grotesque } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { JsonLd } from '@/components/json-ld'
import { CONTACT_EMAIL, SITE_URL } from '@/lib/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display-face',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0b1324',
}

export const metadata: Metadata = {
  title: 'Academia Solar | Cursos de Energía Solar en Argentina',
  description:
    'Formación profesional en energía solar con prácticas reales en obras de SolarPower Argentina. Cursos de Instalador Solar, Analista Solar, Vendedor Solar y Diplomatura Integral. Cupos gratuitos disponibles.',
  keywords:
    'cursos energia solar argentina, instalador solar certificado, capacitacion paneles solares, formacion energia renovable, cursos gratis energia solar, empleo energia solar, solarpower argentina, academia solar',
  authors: [{ name: 'Academia Solar', url: SITE_URL }],
  creator: 'Academia Solar',
  publisher: 'Academia Solar',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': '/blog/rss.xml',
    },
  },
  openGraph: {
    title: 'Academia Solar | Cursos de Energía Solar en Argentina',
    description:
      'Formación en energía solar con prácticas reales y la mejor salida laboral. Cupos gratuitos disponibles.',
    url: SITE_URL,
    siteName: 'Academia Solar',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Academia Solar | Cursos de Energía Solar en Argentina',
    description: 'Formación en energía solar con prácticas reales y la mejor salida laboral.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Academia Solar',
  url: SITE_URL,
  logo: `${SITE_URL}/brand/academia-solar-logo.png`,
  email: CONTACT_EMAIL,
  address: { '@type': 'PostalAddress', addressLocality: 'Buenos Aires', addressCountry: 'AR' },
  parentOrganization: { '@type': 'Organization', name: 'SolarPower Argentina', url: 'https://www.solarpower.com.ar' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR">
      <body className={`${inter.variable} ${display.variable} font-sans antialiased`}>
        <JsonLd data={organizationJsonLd} />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
