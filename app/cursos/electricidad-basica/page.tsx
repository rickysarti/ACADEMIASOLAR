import { CoursePage } from "@/components/course-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Curso Electricidad Basica para Solar Argentina | Academia Solar - SolarPower",
  description: "Aprende fundamentos electricos para trabajar con sistemas fotovoltaicos. Curso preparatorio de 4 semanas 100% online. Cupos gratuitos disponibles.",
  keywords: "curso electricidad solar, fundamentos electricos fotovoltaica, electricidad paneles solares, curso preparatorio instalador solar",
  openGraph: {
    title: "Electricidad Basica para Solar | Academia Solar",
    description: "4 semanas 100% online. El curso preparatorio ideal para futuros instaladores solares.",
    images: ["/images/course-installer.jpg"],
  },
}

export default function ElectricidadBasicaPage() {
  return (
    <CoursePage
      title="Electricidad Basica para Solar"
      subtitle="Los fundamentos que necesitas para empezar"
      description="Domina los fundamentos electricos imprescindibles para trabajar con sistemas fotovoltaicos de forma segura y profesional."
      longDescription="Este curso esta disenado para quienes no tienen conocimientos previos de electricidad y quieren prepararse para el curso de Instalador Solar. Cubrimos todos los conceptos basicos que necesitas para trabajar con sistemas fotovoltaicos de forma segura."
      duration="4 semanas"
      modality="100% Online"
      level="Principiante"
      image="/images/course-installer.jpg"
      features={[
        "Conceptos de voltaje, corriente y potencia aplicados a solar",
        "Lectura e interpretacion de diagramas electricos",
        "Seguridad electrica y normativa vigente",
        "Calculo de calibres de cable para DC y AC",
        "Protecciones electricas: fusibles, breakers e interruptores",
        "Trabajo seguro con corriente continua (DC) y alterna (AC)",
      ]}
      requirements={[
        "Ninguno - empezamos desde cero",
        "Ganas de aprender los fundamentos",
      ]}
      modules={[
        {
          title: "Fundamentos Electricos",
          description: "Conceptos basicos de electricidad",
          lessons: [
            "Que es la electricidad: voltaje, corriente y resistencia",
            "Ley de Ohm aplicada a sistemas solares",
            "Potencia y energia: kW vs kWh",
            "Corriente continua (DC) vs corriente alterna (AC)",
          ],
        },
        {
          title: "Diagramas y Esquemas",
          description: "Lectura de planos electricos",
          lessons: [
            "Simbolos electricos estandar",
            "Diagramas unifilares para sistemas solares",
            "Interpretacion de especificaciones tecnicas",
            "Practica con diagramas reales",
          ],
        },
        {
          title: "Seguridad Electrica",
          description: "Trabajo seguro con electricidad",
          lessons: [
            "Riesgos electricos y prevencion",
            "Equipos de proteccion personal (EPP)",
            "Normativa de seguridad vigente",
            "Procedimientos de bloqueo y etiquetado",
          ],
        },
        {
          title: "Calculos y Protecciones",
          description: "Dimensionamiento basico",
          lessons: [
            "Calculo de calibre de cables",
            "Seleccion de fusibles y breakers",
            "Puesta a tierra en sistemas solares",
            "Examen final y certificacion",
          ],
        },
      ]}
    />
  )
}
