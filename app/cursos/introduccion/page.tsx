import { CoursePage } from "@/components/course-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Curso Gratis Energia Solar Argentina | Academia Solar - SolarPower",
  description: "Curso gratuito de introduccion a la energia solar. 2 horas 100% online para entender como funciona la energia fotovoltaica en Argentina. Certificado incluido. Empieza hoy.",
  keywords: "curso gratis energia solar, introduccion energia solar argentina, aprender energia solar, curso solar online gratis, capacitacion solar gratuita",
  openGraph: {
    title: "Curso Gratuito Introduccion a la Energia Solar | Academia Solar",
    description: "2 horas 100% gratis. Aprende los fundamentos de la energia solar en Argentina.",
    images: ["/images/hero-solar-installation.jpg"],
  },
}

export default function IntroduccionPage() {
  return (
    <CoursePage
      title="Introduccion a la Energia Solar"
      subtitle="Tu primer paso hacia una carrera solar"
      description="Empieza desde cero y entende como funciona la energia solar en Argentina. Curso gratuito y completo para todos."
      longDescription="Este curso gratuito es el punto de partida ideal para cualquier persona que quiera entender la energia solar. En 2 horas aprendes los conceptos fundamentales y descubris si el sector es para vos. Incluye material descargable, certificado de participacion y acceso vitalicio."
      duration="2 horas"
      modality="100% Online"
      level="Principiante"
      image="/images/hero-solar-installation.jpg"
      isFree={true}
      features={[
        "Entender que es la energia solar fotovoltaica",
        "Conocer los tipos de sistemas: On-Grid, Off-Grid e Hibrido",
        "Calcular cuanto se puede ahorrar con solar en Argentina",
        "Ver como es una instalacion solar de principio a fin",
        "Conocer el mercado laboral solar: oportunidades y salarios",
        "Descubrir cual programa de Academia Solar es el tuyo",
      ]}
      requirements={[
        "Ninguno - empezamos desde cero",
        "Ganas de aprender sobre energia solar",
        "Acceso a internet para ver los videos",
      ]}
      modules={[
        {
          title: "Introduccion Completa a la Energia Solar",
          description: "Todo lo basico en 2 horas, 100% gratis",
          lessons: [
            "Que es la energia solar fotovoltaica (15 min)",
            "Tipos de sistemas: On-Grid, Off-Grid e Hibrido (20 min)",
            "Cuanto se puede ahorrar con solar en Argentina (20 min)",
            "Como es una instalacion solar de principio a fin (20 min)",
            "El mercado laboral solar: oportunidades y salarios (15 min)",
            "Cual programa de Academia Solar es el tuyo (10 min)",
          ],
        },
      ]}
    />
  )
}
