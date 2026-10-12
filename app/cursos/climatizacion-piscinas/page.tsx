import { CoursePage } from "@/components/course-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Curso Climatización Solar Piscinas Argentina | Academia Solar - SolarPower",
  description: "Aprendé a instalar sistemas de calefacción solar para piscinas. Nicho de alto valor con excelente ROI. 3 semanas 100% online. Cupos gratuitos.",
  keywords: "climatizacion solar piscinas, calefaccion solar pileta, colectores solares termicos, calentador solar piscina argentina",
  openGraph: {
    title: "Climatización Solar para Piscinas | Academia Solar",
    description: "3 semanas 100% online. Un nicho en crecimiento con excelente rentabilidad.",
    images: ["/images/course-installer.jpg"],
  },
}

export default function ClimatizacionPiscinasPage() {
  return (
    <CoursePage
      slug="climatizacion-piscinas"
      title="Climatización Solar para Piscinas"
      subtitle="Un nicho en crecimiento con excelente rentabilidad"
      description="Diseñá e instala sistemas de calefacción solar para piscinas residenciales y comerciales. Un nicho de alto valor con excelente retorno de inversión."
      longDescription="Este curso te especializa en el diseño e instalación de sistemas de calefacción solar para piscinas. Aprenderas sobre colectores solares termicos, sistemas de control, y como presupuestar y vender este servicio de alto valor. Incluye calculadora de dimensionado para piscinas."
      duration="3 semanas"
      modality="100% Online"
      level="Principiante"
      image="/images/course-installer.jpg"
      features={[
        "Colectores solares termicos vs paneles fotovoltaicos",
        "Dimensionado de sistemas para piscinas residenciales y comerciales",
        "Instalación de colectores, bombas y valvulas",
        "Controladores de temperatura y automatización",
        "Mantenimiento estacional y diagnóstico",
        "Materiales y proveedores en Argentina",
        "Cómo presupuestar y vender este servicio",
      ]}
      requirements={[
        "Conocimientos básicos de sistemas solares",
        "Interes en el nicho de piscinas",
      ]}
      modules={[
        {
          title: "Fundamentos de Climatización Solar",
          description: "Tecnologías y principios básicos",
          lessons: [
            "Colectores solares termicos: tipos y funcionamiento",
            "Comparación con calefacción eléctrica y gas",
            "Cuándo usar solar térmico vs fotovoltaico",
            "El mercado de climatización de piscinas en Argentina",
          ],
        },
        {
          title: "Dimensionamiento de Sistemas",
          description: "Cálculo para piscinas de todo tamaño",
          lessons: [
            "Factores que afectan la temperatura de la piscina",
            "Cálculo de perdida de calor",
            "Dimensionado de colectores solares",
            "Uso de la calculadora de dimensionado",
          ],
        },
        {
          title: "Instalación y Equipos",
          description: "Práctica de instalación",
          lessons: [
            "Selección e instalación de colectores",
            "Bombas de circulación y valvulas",
            "Controladores de temperatura",
            "Integración con sistemas de filtrado existentes",
          ],
        },
        {
          title: "Comercialización y Mantenimiento",
          description: "Vender y mantener sistemas",
          lessons: [
            "Cómo presupuestar climatización solar",
            "Argumentos de venta y ROI",
            "Mantenimiento estacional",
            "Examen final y certificación",
          ],
        },
      ]}
    />
  )
}
