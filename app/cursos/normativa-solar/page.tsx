import { CoursePage } from "@/components/course-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Curso Normativa Solar y Ley 27.424 Argentina | Academia Solar - SolarPower",
  description: "Aprende toda la regulacion de generacion distribuida: Ley 27.424, tramites EDENOR/EDESUR, netmetering. 2 semanas 100% online. Cupos gratuitos.",
  keywords: "ley 27424 argentina, normativa energia solar, tramites edenor solar, generacion distribuida, netmetering argentina",
  openGraph: {
    title: "Normativa Solar Argentina | Academia Solar",
    description: "2 semanas 100% online. Ley 27.424, tramites ante distribuidoras y netmetering.",
    images: ["/images/course-analyst.jpg"],
  },
}

export default function NormativaSolarPage() {
  return (
    <CoursePage
      title="Normativa Solar Argentina"
      subtitle="Todo sobre regulacion y tramites"
      description="Conoce toda la regulacion vigente para generacion distribuida en Argentina: Ley 27.424, distribuidoras y tramites ante EDENOR, EDESUR y mas."
      longDescription="Este curso te actualiza sobre todo el marco regulatorio de la energia solar en Argentina. Aprenderas a gestionar tramites ante distribuidoras, obtener habilitaciones municipales y entender el sistema de netmetering. Incluye plantillas de tramites descargables y actualizaciones por 1 ano."
      duration="2 semanas"
      modality="100% Online"
      level="Principiante"
      image="/images/course-analyst.jpg"
      features={[
        "Ley 27.424 de Generacion Distribuida y sus decretos",
        "Marco regulatorio del ENRE y provincias",
        "Tramites ante distribuidoras: EDENOR, EDESUR, EPE y mas",
        "Netmetering: como funciona y como tramitarlo",
        "Habilitaciones municipales y permisos de obra",
        "Facturacion de energia inyectada y creditos",
        "Requisitos tecnicos de conexion a red",
      ]}
      requirements={[
        "Interes en el marco legal de la energia solar",
        "No se requieren conocimientos previos",
      ]}
      modules={[
        {
          title: "Marco Legal Nacional",
          description: "Ley 27.424 y regulacion federal",
          lessons: [
            "Historia de la generacion distribuida en Argentina",
            "Ley 27.424: principales articulos",
            "Decretos reglamentarios y resoluciones",
            "El rol del ENRE y las provincias",
          ],
        },
        {
          title: "Tramites ante Distribuidoras",
          description: "Procedimientos paso a paso",
          lessons: [
            "Tramite de conexion ante EDENOR",
            "Tramite de conexion ante EDESUR",
            "Distribuidoras del interior: EPE, EPEC, etc.",
            "Tiempos y costos de cada tramite",
          ],
        },
        {
          title: "Netmetering y Facturacion",
          description: "Como funciona el sistema de creditos",
          lessons: [
            "Que es el netmetering y como funciona",
            "Calculo de creditos por energia inyectada",
            "Lectura de facturas con generacion solar",
            "Casos practicos de facturacion",
          ],
        },
        {
          title: "Habilitaciones y Permisos",
          description: "Requisitos municipales y tecnicos",
          lessons: [
            "Permisos de obra municipales",
            "Requisitos tecnicos de conexion",
            "Plantillas de tramites descargables",
            "Examen final y certificacion",
          ],
        },
      ]}
    />
  )
}
