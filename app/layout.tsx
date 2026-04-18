import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'Academia Solar | Cursos de Energia Solar en Argentina - SolarPower',
  description: 'Formacion profesional en energia solar con practicas reales en instalaciones de SolarPower Argentina. Cursos de Instalador Solar, Analista Solar, Vendedor Solar y Diplomatura Integral. Cupos gratuitos disponibles. La mejor salida laboral del mercado solar.',
  keywords: 'cursos energia solar argentina, instalador solar certificado, capacitacion paneles solares, formacion energia renovable, cursos gratis energia solar, empleo energia solar, solarpower argentina, academia solar',
  authors: [{ name: 'SolarPower Argentina', url: 'https://www.solarpower.com.ar' }],
  creator: 'SolarPower Argentina',
  publisher: 'Academia Solar',
  metadataBase: new URL('https://academiasolar.solarpower.com.ar'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Academia Solar | Cursos de Energia Solar en Argentina',
    description: 'Formacion profesional en energia solar con practicas reales y la mejor salida laboral. Cupos gratuitos disponibles.',
    url: 'https://academiasolar.solarpower.com.ar',
    siteName: 'Academia Solar - SolarPower Argentina',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: '/images/hero-solar-installation.jpg',
        width: 1200,
        height: 630,
        alt: 'Academia Solar - Formacion en Energia Solar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Academia Solar | Cursos de Energia Solar en Argentina',
    description: 'Formacion profesional en energia solar con practicas reales y la mejor salida laboral.',
    images: ['/images/hero-solar-installation.jpg'],
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
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
