import { CoursePage } from "@/components/course-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Curso Baterías y Almacenamiento Solar Argentina | Academia Solar - SolarPower",
  description: "Especializate en baterías de litio, inversores híbridos Deye y sistemas de almacenamiento solar. 3 semanas 100% online. Cupos gratuitos disponibles.",
  keywords: "curso baterias solares, almacenamiento energia solar, inversores deye argentina, baterias litio solar, sistemas hibridos solar",
  openGraph: {
    title: "Baterías y Almacenamiento Solar | Academia Solar",
    description: "3 semanas 100% online. Especialización en sistemas con almacenamiento de energía.",
    images: ["/images/course-installer.jpg"],
  },
}

export default function BateriasAlmacenamientoPage() {
  return (
    <CoursePage
      slug="baterias-almacenamiento"
      title="Baterías y Almacenamiento Solar"
      subtitle="Especialización en sistemas con almacenamiento"
      description="Todo sobre baterías de litio, AGM y flujo para sistemas solares residenciales y comerciales. Incluye configuración de inversores híbridos Deye."
      longDescription="Este curso de especialización te convierte en experto en sistemas con almacenamiento de energía. Aprenderas a seleccionar, dimensionar, instalar y mantener bancos de baterías para sistemas solares de todo tipo. Incluye práctica con inversores híbridos Deye."
      duration="3 semanas"
      modality="100% Online"
      level="Intermedio"
      image="/images/course-installer.jpg"
      features={[
        "Tipos de baterías: litio LFP, NMC, AGM, GEL y de flujo",
        "Dimensionado de bancos de baterías para sistemas reales",
        "Instalación segura de baterías y sistemas de gestion (BMS)",
        "Integración con inversores híbridos Deye",
        "Monitoreo y mantenimiento de sistemas con batería",
        "Diagnóstico de fallas y troubleshooting",
        "Cálculo del ROI de sistemas con almacenamiento",
      ]}
      requirements={[
        "Conocimientos básicos de electricidad o haber cursado Electricidad Básica para Solar",
        "Conocimientos básicos de sistemas solares fotovoltaicos",
      ]}
      modules={[
        {
          title: "Tecnologías de Almacenamiento",
          description: "Tipos de baterías y sus características",
          lessons: [
            "Baterías de litio LFP: la tecnología líder",
            "Baterías NMC: aplicaciones y precauciones",
            "Baterías de plomo-acido: AGM y GEL",
            "Baterías de flujo: el futuro del almacenamiento",
          ],
        },
        {
          title: "Dimensionamiento y Selección",
          description: "Cómo elegir la batería correcta",
          lessons: [
            "Cálculo de autonomia y capacidad",
            "Profundidad de descarga y ciclos de vida",
            "Dimensionado para sistemas residenciales",
            "Dimensionado para sistemas comerciales",
          ],
        },
        {
          title: "Instalación y Configuración",
          description: "Práctica con inversores Deye",
          lessons: [
            "Instalación segura de bancos de baterías",
            "Sistema de gestion de batería (BMS)",
            "Configuración de inversores híbridos Deye",
            "Modos de operación: backup, autoconsumo, peak shaving",
          ],
        },
        {
          title: "Mantenimiento y Troubleshooting",
          description: "Diagnóstico y solución de problemas",
          lessons: [
            "Monitoreo remoto de sistemas con batería",
            "Mantenimiento preventivo",
            "Diagnóstico de fallas comunes",
            "Examen final y certificación",
          ],
        },
      ]}
    />
  )
}
