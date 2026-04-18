import { CoursePage } from "@/components/course-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Diplomatura Integral Energia Solar Argentina | Academia Solar - SolarPower",
  description: "El programa mas completo del mercado argentino. Formacion 360 en instalacion, diseno y ventas de energia solar. 6 meses, 4 jornadas presenciales, proyecto en obra real. Cupos gratuitos disponibles.",
  keywords: "diplomatura energia solar, formacion completa energia solar argentina, carrera energia solar, profesional solar certificado, mejor curso energia solar",
  openGraph: {
    title: "Diplomatura Integral en Energia Solar | Academia Solar",
    description: "6 meses de formacion 360. Instalacion + Diseno + Ventas. El perfil mas cotizado del sector.",
    images: ["/images/course-diploma.jpg"],
  },
}

export default function DiplomaturaIntegralPage() {
  return (
    <CoursePage
      title="Diplomatura Integral en Energia Solar"
      subtitle="El perfil mas completo y cotizado del sector"
      description="El programa mas completo de Academia Solar. Formacion 360 grados que combina instalacion, diseno y ventas para convertirte en el profesional mas cotizado del mercado solar argentino."
      longDescription="La Diplomatura Integral esta disenada para quienes quieren dominar todos los aspectos de la industria solar: desde la instalacion fisica hasta el diseno tecnico y la comercializacion. Al completarla, sos el perfil mas completo y cotizado del sector. Incluye los 3 tracks completos, 4 jornadas presenciales, proyecto final en obra real, y mentoria 1:1 con el equipo directivo de SolarPower."
      duration="6 meses"
      modality="Hibrido (online + presencial)"
      level="Intermedio"
      image="/images/course-diploma.jpg"
      features={[
        "Dominar instalacion, diseno y ventas de sistemas solares",
        "Gestionar proyectos de punta a punta",
        "Liderar equipos de instalacion",
        "Desarrollar proyectos comerciales y residenciales a gran escala",
        "Acceder a los proyectos mas grandes de SolarPower",
        "Convertirte en referente tecnico del sector en tu zona",
        "Mentoria 1:1 con el equipo SolarPower",
        "Diploma de Honor Academia Solar",
      ]}
      requirements={[
        "Haber cursado al menos un Track de Academia Solar, o experiencia equivalente en el sector",
        "Conocimientos basicos de electricidad",
        "Compromiso de 6 meses de formacion intensiva",
        "Disponibilidad para jornadas presenciales en Buenos Aires",
      ]}
      modules={[
        {
          title: "Track Instalador Solar Certificado",
          description: "Formacion completa en instalacion (12 semanas)",
          lessons: [
            "Modulo 1: Fundamentos de Energia Solar",
            "Modulo 2: Equipos y Tecnologia",
            "Modulo 3: Instalacion Practica + 2 jornadas presenciales",
            "Modulo 4: Normativa, Tramites y Certificacion CAIM",
          ],
        },
        {
          title: "Track Analista Solar - Disenador",
          description: "Formacion completa en diseno y simulacion (8 semanas)",
          lessons: [
            "Modulo 1: Fundamentos del Analisis Solar",
            "Modulo 2: Software de Diseno (PVSyst, Aurora, Helioscope)",
            "Modulo 3: Analisis Financiero de Proyectos",
            "Modulo 4: Proyectos Practicos y Certificacion",
          ],
        },
        {
          title: "Track Vendedor Solar Experto",
          description: "Formacion completa en ventas solares (6 semanas)",
          lessons: [
            "Modulo 1: Conoce el Producto Solar",
            "Modulo 2: El Proceso de Venta Solar",
            "Modulo 3: Manejo de Objeciones",
            "Modulo 4: Certificacion e Incorporacion a SolarPower",
          ],
        },
        {
          title: "Proyecto Final Integrador",
          description: "Aplicacion practica de todo lo aprendido",
          lessons: [
            "Seleccion de proyecto real con cliente SolarPower",
            "Diseno tecnico completo del sistema",
            "Propuesta comercial profesional",
            "Instalacion supervisada en obra",
            "Presentacion final y defensa ante jurado",
            "Entrega de Diploma de Honor Academia Solar",
          ],
        },
      ]}
    />
  )
}
