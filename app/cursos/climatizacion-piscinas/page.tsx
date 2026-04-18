import { CoursePage } from "@/components/course-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Curso Climatizacion Solar Piscinas Argentina | Academia Solar - SolarPower",
  description: "Aprende a instalar sistemas de calefaccion solar para piscinas. Nicho de alto valor con excelente ROI. 3 semanas 100% online. Cupos gratuitos.",
  keywords: "climatizacion solar piscinas, calefaccion solar pileta, colectores solares termicos, calentador solar piscina argentina",
  openGraph: {
    title: "Climatizacion Solar para Piscinas | Academia Solar",
    description: "3 semanas 100% online. Un nicho en crecimiento con excelente rentabilidad.",
    images: ["/images/course-installer.jpg"],
  },
}

export default function ClimatizacionPiscinasPage() {
  return (
    <CoursePage
      title="Climatizacion Solar para Piscinas"
      subtitle="Un nicho en crecimiento con excelente rentabilidad"
      description="Disena e instala sistemas de calefaccion solar para piscinas residenciales y comerciales. Un nicho de alto valor con excelente retorno de inversion."
      longDescription="Este curso te especializa en el diseno e instalacion de sistemas de calefaccion solar para piscinas. Aprenderas sobre colectores solares termicos, sistemas de control, y como presupuestar y vender este servicio de alto valor. Incluye calculadora de dimensionado para piscinas."
      duration="3 semanas"
      modality="100% Online"
      level="Principiante"
      image="/images/course-installer.jpg"
      features={[
        "Colectores solares termicos vs paneles fotovoltaicos",
        "Dimensionado de sistemas para piscinas residenciales y comerciales",
        "Instalacion de colectores, bombas y valvulas",
        "Controladores de temperatura y automatizacion",
        "Mantenimiento estacional y diagnostico",
        "Materiales y proveedores en Argentina",
        "Como presupuestar y vender este servicio",
      ]}
      requirements={[
        "Conocimientos basicos de sistemas solares",
        "Interes en el nicho de piscinas",
      ]}
      modules={[
        {
          title: "Fundamentos de Climatizacion Solar",
          description: "Tecnologias y principios basicos",
          lessons: [
            "Colectores solares termicos: tipos y funcionamiento",
            "Comparacion con calefaccion electrica y gas",
            "Cuando usar solar termico vs fotovoltaico",
            "El mercado de climatizacion de piscinas en Argentina",
          ],
        },
        {
          title: "Dimensionamiento de Sistemas",
          description: "Calculo para piscinas de todo tamano",
          lessons: [
            "Factores que afectan la temperatura de la piscina",
            "Calculo de perdida de calor",
            "Dimensionado de colectores solares",
            "Uso de la calculadora de dimensionado",
          ],
        },
        {
          title: "Instalacion y Equipos",
          description: "Practica de instalacion",
          lessons: [
            "Seleccion e instalacion de colectores",
            "Bombas de circulacion y valvulas",
            "Controladores de temperatura",
            "Integracion con sistemas de filtrado existentes",
          ],
        },
        {
          title: "Comercializacion y Mantenimiento",
          description: "Vender y mantener sistemas",
          lessons: [
            "Como presupuestar climatizacion solar",
            "Argumentos de venta y ROI",
            "Mantenimiento estacional",
            "Examen final y certificacion",
          ],
        },
      ]}
    />
  )
}
