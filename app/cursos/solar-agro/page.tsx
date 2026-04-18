import { CoursePage } from "@/components/course-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Curso Energia Solar para Agro y Campo Argentina | Academia Solar - SolarPower",
  description: "Especializate en bombeo solar, electrificacion rural y generacion distribuida para el agro argentino. 4 semanas 100% online. Cupos gratuitos.",
  keywords: "bombeo solar argentina, energia solar campo, electrificacion rural solar, sistemas off-grid agro, paneles solares tambo",
  openGraph: {
    title: "Solar para el Agro | Academia Solar",
    description: "4 semanas 100% online. Bombeo solar, electrificacion rural y sistemas para el campo.",
    images: ["/images/hero-solar-installation.jpg"],
  },
}

export default function SolarAgroPage() {
  return (
    <CoursePage
      title="Solar para el Agro"
      subtitle="Especializacion en energia solar rural"
      description="Especializate en sistemas solares para el sector agropecuario: bombeo solar, riego, electrificacion rural y generacion distribuida para establecimientos."
      longDescription="Este curso de especializacion te prepara para disenar e instalar sistemas solares para el sector agropecuario argentino. Aprenderas sobre bombeo solar, electrificacion rural, y sistemas para tambos, granjas y establecimientos. Incluye calculadora de bombeo solar y casos de estudio reales."
      duration="4 semanas"
      modality="100% Online"
      level="Intermedio"
      image="/images/hero-solar-installation.jpg"
      features={[
        "Bombeo solar fotovoltaico para agua y riego",
        "Dimensionado de sistemas para campo y tambo",
        "Sistemas Off-Grid para electrificacion rural",
        "Generacion distribuida en establecimientos agropecuarios",
        "Normativa especifica para el sector agro",
        "Analisis de retorno de inversion en el campo",
        "Casos reales de instalaciones rurales argentinas",
      ]}
      requirements={[
        "Conocimientos basicos de sistemas solares fotovoltaicos",
        "Interes en el sector agropecuario",
      ]}
      modules={[
        {
          title: "Bombeo Solar Fotovoltaico",
          description: "Sistemas de bombeo para agua y riego",
          lessons: [
            "Introduccion al bombeo solar",
            "Tipos de bombas solares: sumergibles y de superficie",
            "Dimensionado de sistemas de bombeo",
            "Calculadora de bombeo solar",
          ],
        },
        {
          title: "Electrificacion Rural",
          description: "Sistemas Off-Grid para el campo",
          lessons: [
            "Desafios de la electrificacion rural",
            "Sistemas Off-Grid con baterias",
            "Dimensionado para casas rurales y puestos",
            "Sistemas hibridos solar-generador",
          ],
        },
        {
          title: "Generacion Distribuida Agro",
          description: "Sistemas conectados a red en establecimientos",
          lessons: [
            "Generacion distribuida para tambos",
            "Sistemas para frigorificos y galpones",
            "Normativa especifica del sector",
            "Financiamiento y beneficios impositivos",
          ],
        },
        {
          title: "Casos Practicos",
          description: "Instalaciones reales en Argentina",
          lessons: [
            "Caso 1: Tambo con bombeo y electrificacion",
            "Caso 2: Establecimiento ganadero 50kW",
            "Caso 3: Riego por goteo solar",
            "Examen final y certificacion",
          ],
        },
      ]}
    />
  )
}
