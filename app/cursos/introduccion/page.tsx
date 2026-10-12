import { CoursePage } from "@/components/course-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Curso Gratis Energía Solar Argentina | Academia Solar - SolarPower",
  description: "Curso gratuito de introducción a la energía solar. 2 horas 100% online para entender cómo funciona la energía fotovoltaica en Argentina. Certificado incluido. Empezá hoy.",
  keywords: "curso gratis energia solar, introduccion energia solar argentina, aprender energia solar, curso solar online gratis, capacitacion solar gratuita",
  openGraph: {
    title: "Curso Gratuito Introducción a la Energía Solar | Academia Solar",
    description: "2 horas 100% gratis. Aprendé los fundamentos de la energía solar en Argentina.",
    images: ["/images/hero-solar-installation.jpg"],
  },
}

export default function IntroduccionPage() {
  return (
    <CoursePage
      slug="introduccion"
      title="Introducción a la Energía Solar"
      subtitle="Tu primer paso hacia una carrera solar"
      description="Empezá desde cero y entendé cómo funciona la energía solar en Argentina. Curso gratuito y completo para todos."
      longDescription="Este curso gratuito es el punto de partida ideal para cualquier persona que quiera entender la energía solar. En 2 horas aprendés los conceptos fundamentales y descubrís si el sector es para vos. Incluye material descargable, certificado de participación y acceso vitalicio."
      duration="2 horas"
      modality="100% Online"
      level="Principiante"
      image="/images/hero-solar-installation.jpg"
      isFree={true}
      features={[
        "Entender que es la energía solar fotovoltaica",
        "Conocer los tipos de sistemas: On-Grid, Off-Grid e Híbrido",
        "Calcular cuanto se puede ahorrar con solar en Argentina",
        "Ver como es una instalación solar de principio a fin",
        "Conocer el mercado laboral solar: oportunidades y salarios",
        "Descubrir cual programa de Academia Solar es el tuyo",
      ]}
      requirements={[
        "Ninguno - empezamos desde cero",
        "Ganas de aprender sobre energía solar",
        "Acceso a internet para ver los videos",
      ]}
      modules={[
        {
          title: "Introducción Completa a la Energía Solar",
          description: "Todo lo básico en 2 horas, 100% gratis",
          lessons: [
            "Qué es la energía solar fotovoltaica (15 min)",
            "Tipos de sistemas: On-Grid, Off-Grid e Híbrido (20 min)",
            "Cuánto se puede ahorrar con solar en Argentina (20 min)",
            "Cómo es una instalación solar de principio a fin (20 min)",
            "El mercado laboral solar: oportunidades y salarios (15 min)",
            "Cuál programa de Academia Solar es el tuyo (10 min)",
          ],
        },
      ]}
    />
  )
}
