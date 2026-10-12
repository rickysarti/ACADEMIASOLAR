import { CoursePage } from "@/components/course-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Curso Energía Solar para Agro y Campo Argentina | Academia Solar - SolarPower",
  description: "Especializate en bombeo solar, electrificación rural y generación distribuida para el agro argentino. 4 semanas 100% online. Cupos gratuitos.",
  keywords: "bombeo solar argentina, energia solar campo, electrificacion rural solar, sistemas off-grid agro, paneles solares tambo",
  openGraph: {
    title: "Solar para el Agro | Academia Solar",
    description: "4 semanas 100% online. Bombeo solar, electrificación rural y sistemas para el campo.",
    images: ["/images/hero-solar-installation.jpg"],
  },
}

export default function SolarAgroPage() {
  return (
    <CoursePage
      slug="solar-agro"
      title="Solar para el Agro"
      subtitle="Especialización en energía solar rural"
      description="Especializate en sistemas solares para el sector agropecuario: bombeo solar, riego, electrificación rural y generación distribuida para establecimientos."
      longDescription="Este curso de especialización te prepara para diseñar e instalar sistemas solares para el sector agropecuario argentino. Aprenderas sobre bombeo solar, electrificación rural, y sistemas para tambos, granjas y establecimientos. Incluye calculadora de bombeo solar y casos de estudio reales."
      duration="4 semanas"
      modality="100% Online"
      level="Intermedio"
      image="/images/hero-solar-installation.jpg"
      features={[
        "Bombeo solar fotovoltaico para agua y riego",
        "Dimensionado de sistemas para campo y tambo",
        "Sistemas Off-Grid para electrificación rural",
        "Generación distribuida en establecimientos agropecuarios",
        "Normativa específica para el sector agro",
        "Análisis de retorno de inversión en el campo",
        "Casos reales de instalaciones rurales argentinas",
      ]}
      requirements={[
        "Conocimientos básicos de sistemas solares fotovoltaicos",
        "Interes en el sector agropecuario",
      ]}
      modules={[
        {
          title: "Bombeo Solar Fotovoltaico",
          description: "Sistemas de bombeo para agua y riego",
          lessons: [
            "Introducción al bombeo solar",
            "Tipos de bombas solares: sumergibles y de superficie",
            "Dimensionado de sistemas de bombeo",
            "Calculadora de bombeo solar",
          ],
        },
        {
          title: "Electrificación Rural",
          description: "Sistemas Off-Grid para el campo",
          lessons: [
            "Desafios de la electrificación rural",
            "Sistemas Off-Grid con baterías",
            "Dimensionado para casas rurales y puestos",
            "Sistemas híbridos solar-generador",
          ],
        },
        {
          title: "Generación Distribuida Agro",
          description: "Sistemas conectados a red en establecimientos",
          lessons: [
            "Generación distribuida para tambos",
            "Sistemas para frigorificos y galpones",
            "Normativa específica del sector",
            "Financiamiento y beneficios impositivos",
          ],
        },
        {
          title: "Casos Prácticos",
          description: "Instalaciones reales en Argentina",
          lessons: [
            "Caso 1: Tambo con bombeo y electrificación",
            "Caso 2: Establecimiento ganadero 50kW",
            "Caso 3: Riego por goteo solar",
            "Examen final y certificación",
          ],
        },
      ]}
    />
  )
}
