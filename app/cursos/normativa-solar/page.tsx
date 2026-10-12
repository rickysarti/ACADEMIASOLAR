import { CoursePage } from "@/components/course-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Curso Normativa Solar y Ley 27.424 Argentina | Academia Solar - SolarPower",
  description: "Aprendé toda la regulación de generación distribuida: Ley 27.424, trámites EDENOR/EDESUR, netmetering. 2 semanas 100% online. Cupos gratuitos.",
  keywords: "ley 27424 argentina, normativa energia solar, tramites edenor solar, generacion distribuida, netmetering argentina",
  openGraph: {
    title: "Normativa Solar Argentina | Academia Solar",
    description: "2 semanas 100% online. Ley 27.424, trámites ante distribuidoras y netmetering.",
    images: ["/images/course-analyst.jpg"],
  },
}

export default function NormativaSolarPage() {
  return (
    <CoursePage
      slug="normativa-solar"
      title="Normativa Solar Argentina"
      subtitle="Todo sobre regulación y trámites"
      description="Conocé toda la regulación vigente para generación distribuida en Argentina: Ley 27.424, distribuidoras y trámites ante EDENOR, EDESUR y más."
      longDescription="Este curso te actualiza sobre todo el marco regulatorio de la energía solar en Argentina. Aprenderas a gestionar trámites ante distribuidoras, obtener habilitaciones municipales y entender el sistema de netmetering. Incluye plantillas de trámites descargables y actualizaciones por 1 año."
      duration="2 semanas"
      modality="100% Online"
      level="Principiante"
      image="/images/course-analyst.jpg"
      features={[
        "Ley 27.424 de Generación Distribuida y sus decretos",
        "Marco regulatorio del ENRE y provincias",
        "Trámites ante distribuidoras: EDENOR, EDESUR, EPE y más",
        "Netmetering: como funciona y como tramitarlo",
        "Habilitaciones municipales y permisos de obra",
        "Facturación de energía inyectada y créditos",
        "Requisitos técnicos de conexion a red",
      ]}
      requirements={[
        "Interes en el marco legal de la energía solar",
        "No se requieren conocimientos previos",
      ]}
      modules={[
        {
          title: "Marco Legal Nacional",
          description: "Ley 27.424 y regulación federal",
          lessons: [
            "Historia de la generación distribuida en Argentina",
            "Ley 27.424: principales articulos",
            "Decretos reglamentarios y resoluciones",
            "El rol del ENRE y las provincias",
          ],
        },
        {
          title: "Trámites ante Distribuidoras",
          description: "Procedimientos paso a paso",
          lessons: [
            "Trámite de conexion ante EDENOR",
            "Trámite de conexion ante EDESUR",
            "Distribuidoras del interior: EPE, EPEC, etc.",
            "Tiempos y costos de cada trámite",
          ],
        },
        {
          title: "Netmetering y Facturación",
          description: "Cómo funciona el sistema de créditos",
          lessons: [
            "Qué es el netmetering y como funciona",
            "Cálculo de créditos por energía inyectada",
            "Lectura de facturas con generación solar",
            "Casos prácticos de facturación",
          ],
        },
        {
          title: "Habilitaciones y Permisos",
          description: "Requisitos municipales y técnicos",
          lessons: [
            "Permisos de obra municipales",
            "Requisitos técnicos de conexion",
            "Plantillas de trámites descargables",
            "Examen final y certificación",
          ],
        },
      ]}
    />
  )
}
