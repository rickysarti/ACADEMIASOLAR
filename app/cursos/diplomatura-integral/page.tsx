import { CoursePage } from "@/components/course-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Diplomatura Integral Energía Solar Argentina | Academia Solar - SolarPower",
  description: "El programa más completo del mercado argentino. Formación 360 en instalación, diseño y ventas de energía solar. 6 meses, 4 jornadas presenciales, proyecto final en terreno. Cupos gratuitos disponibles.",
  keywords: "diplomatura energia solar, formacion completa energia solar argentina, carrera energia solar, profesional solar certificado, mejor curso energia solar",
  openGraph: {
    title: "Diplomatura Integral en Energía Solar | Academia Solar",
    description: "6 meses de formación 360. Instalación + Diseño + Ventas. El perfil más cotizado del sector.",
    images: ["/images/course-diploma.jpg"],
  },
}

export default function DiplomaturaIntegralPage() {
  return (
    <CoursePage
      slug="diplomatura-integral"
      title="Diplomatura Integral en Energía Solar"
      subtitle="El perfil más completo y cotizado del sector"
      description="El programa más completo de Academia Solar. Formación 360 grados que combina instalación, diseño y ventas para convertirte en el profesional más cotizado del mercado solar argentino."
      longDescription="La Diplomatura Integral está diseñada para quienes quieren dominar todos los aspectos de la industria solar: desde la instalación física hasta el diseño técnico y la comercialización. Al completarla, sos el perfil más completo y cotizado del sector. Incluye los 3 tracks completos, 4 jornadas presenciales, proyecto final en terreno, y mentoria 1:1 con el equipo directivo de SolarPower."
      duration="6 meses"
      modality="Híbrido (online + presencial)"
      level="Intermedio"
      image="/images/course-diploma.jpg"
      features={[
        "Dominar instalación, diseño y ventas de sistemas solares",
        "Gestionar proyectos de punta a punta",
        "Liderar equipos de instalación",
        "Desarrollar proyectos comerciales y residenciales a gran escala",
        "Acceder a los proyectos más grandes de SolarPower",
        "Convertirte en referente técnico del sector en tu zona",
        "Mentoria 1:1 con el equipo SolarPower",
        "Diploma de Honor Academia Solar",
      ]}
      requirements={[
        "Haber cursado al menos un Track de Academia Solar, o experiencia equivalente en el sector",
        "Conocimientos básicos de electricidad",
        "Compromiso de 6 meses de formación intensiva",
        "Disponibilidad para jornadas presenciales en Buenos Aires",
      ]}
      modules={[
        {
          title: "Track Instalador Solar Certificado",
          description: "Formación completa en instalación (12 semanas)",
          lessons: [
            "Módulo 1: Fundamentos de Energía Solar",
            "Módulo 2: Equipos y Tecnología",
            "Módulo 3: Instalación Práctica + 2 jornadas presenciales",
            "Módulo 4: Normativa, Trámites y Certificación CAIM",
          ],
        },
        {
          title: "Track Analista Solar - Diseñador",
          description: "Formación completa en diseño y simulación (8 semanas)",
          lessons: [
            "Módulo 1: Fundamentos del Análisis Solar",
            "Módulo 2: Software de Diseño (PVSyst, Aurora, Helioscope)",
            "Módulo 3: Análisis Financiero de Proyectos",
            "Módulo 4: Proyectos Prácticos y Certificación",
          ],
        },
        {
          title: "Track Vendedor Solar Experto",
          description: "Formación completa en ventas solares (6 semanas)",
          lessons: [
            "Módulo 1: Conocé el Producto Solar",
            "Módulo 2: El Proceso de Venta Solar",
            "Módulo 3: Manejo de Objeciones",
            "Módulo 4: Certificación e Incorporación a SolarPower",
          ],
        },
        {
          title: "Proyecto Final Integrador",
          description: "Aplicación práctica de todo lo aprendido",
          lessons: [
            "Selección de proyecto real con cliente SolarPower",
            "Diseño técnico completo del sistema",
            "Propuesta comercial profesional",
            "Instalación supervisada en terreno",
            "Presentación final y defensa ante jurado",
            "Entrega de Diploma de Honor Academia Solar",
          ],
        },
      ]}
    />
  )
}
