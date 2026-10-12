import { CoursePage } from "@/components/course-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Curso Electricidad Básica para Solar Argentina | Academia Solar - SolarPower",
  description: "Aprendé fundamentos eléctricos para trabajar con sistemas fotovoltaicos. Curso preparatorio de 4 semanas 100% online. Cupos gratuitos disponibles.",
  keywords: "curso electricidad solar, fundamentos electricos fotovoltaica, electricidad paneles solares, curso preparatorio instalador solar",
  openGraph: {
    title: "Electricidad Básica para Solar | Academia Solar",
    description: "4 semanas 100% online. El curso preparatorio ideal para futuros instaladores solares.",
    images: ["/images/course-installer.jpg"],
  },
}

export default function ElectricidadBasicaPage() {
  return (
    <CoursePage
      slug="electricidad-basica"
      title="Electricidad Básica para Solar"
      subtitle="Los fundamentos que necesitás para empezar"
      description="Dominá los fundamentos eléctricos imprescindibles para trabajar con sistemas fotovoltaicos de forma segura y profesional."
      longDescription="Este curso está diseñado para quienes no tienen conocimientos previos de electricidad y quieren prepararse para el curso de Instalador Solar. Cubrimos todos los conceptos básicos que necesitás para trabajar con sistemas fotovoltaicos de forma segura."
      duration="4 semanas"
      modality="100% Online"
      level="Principiante"
      image="/images/course-installer.jpg"
      features={[
        "Conceptos de voltaje, corriente y potencia aplicados a solar",
        "Lectura e interpretación de diagramas eléctricos",
        "Seguridad eléctrica y normativa vigente",
        "Cálculo de calibres de cable para DC y AC",
        "Protecciones eléctricas: fusibles, breakers e interruptores",
        "Trabajo seguro con corriente continua (DC) y alterna (AC)",
      ]}
      requirements={[
        "Ninguno - empezamos desde cero",
        "Ganas de aprender los fundamentos",
      ]}
      modules={[
        {
          title: "Fundamentos Eléctricos",
          description: "Conceptos básicos de electricidad",
          lessons: [
            "Qué es la electricidad: voltaje, corriente y resistencia",
            "Ley de Ohm aplicada a sistemas solares",
            "Potencia y energía: kW vs kWh",
            "Corriente continua (DC) vs corriente alterna (AC)",
          ],
        },
        {
          title: "Diagramas y Esquemas",
          description: "Lectura de planos eléctricos",
          lessons: [
            "Simbolos eléctricos estandar",
            "Diagramas unifilares para sistemas solares",
            "Interpretación de especificaciones técnicas",
            "Práctica con diagramas reales",
          ],
        },
        {
          title: "Seguridad Eléctrica",
          description: "Trabajo seguro con electricidad",
          lessons: [
            "Riesgos eléctricos y prevención",
            "Equipos de protección personal (EPP)",
            "Normativa de seguridad vigente",
            "Procedimientos de bloqueo y etiquetado",
          ],
        },
        {
          title: "Cálculos y Protecciones",
          description: "Dimensionamiento básico",
          lessons: [
            "Cálculo de calibre de cables",
            "Selección de fusibles y breakers",
            "Puesta a tierra en sistemas solares",
            "Examen final y certificación",
          ],
        },
      ]}
    />
  )
}
