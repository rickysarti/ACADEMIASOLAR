import { CoursePage } from "@/components/course-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Curso Baterias y Almacenamiento Solar Argentina | Academia Solar - SolarPower",
  description: "Especializate en baterias de litio, inversores hibridos Deye y sistemas de almacenamiento solar. 3 semanas 100% online. Cupos gratuitos disponibles.",
  keywords: "curso baterias solares, almacenamiento energia solar, inversores deye argentina, baterias litio solar, sistemas hibridos solar",
  openGraph: {
    title: "Baterias y Almacenamiento Solar | Academia Solar",
    description: "3 semanas 100% online. Especializacion en sistemas con almacenamiento de energia.",
    images: ["/images/course-installer.jpg"],
  },
}

export default function BateriasAlmacenamientoPage() {
  return (
    <CoursePage
      title="Baterias y Almacenamiento Solar"
      subtitle="Especializacion en sistemas con almacenamiento"
      description="Todo sobre baterias de litio, AGM y flujo para sistemas solares residenciales y comerciales. Incluye configuracion de inversores hibridos Deye."
      longDescription="Este curso de especializacion te convierte en experto en sistemas con almacenamiento de energia. Aprenderas a seleccionar, dimensionar, instalar y mantener bancos de baterias para sistemas solares de todo tipo. Incluye practica con inversores hibridos Deye."
      duration="3 semanas"
      modality="100% Online"
      level="Intermedio"
      image="/images/course-installer.jpg"
      features={[
        "Tipos de baterias: litio LFP, NMC, AGM, GEL y de flujo",
        "Dimensionado de bancos de baterias para sistemas reales",
        "Instalacion segura de baterias y sistemas de gestion (BMS)",
        "Integracion con inversores hibridos Deye",
        "Monitoreo y mantenimiento de sistemas con bateria",
        "Diagnostico de fallas y troubleshooting",
        "Calculo del ROI de sistemas con almacenamiento",
      ]}
      requirements={[
        "Conocimientos basicos de electricidad o haber cursado Electricidad Basica para Solar",
        "Conocimientos basicos de sistemas solares fotovoltaicos",
      ]}
      modules={[
        {
          title: "Tecnologias de Almacenamiento",
          description: "Tipos de baterias y sus caracteristicas",
          lessons: [
            "Baterias de litio LFP: la tecnologia lider",
            "Baterias NMC: aplicaciones y precauciones",
            "Baterias de plomo-acido: AGM y GEL",
            "Baterias de flujo: el futuro del almacenamiento",
          ],
        },
        {
          title: "Dimensionamiento y Seleccion",
          description: "Como elegir la bateria correcta",
          lessons: [
            "Calculo de autonomia y capacidad",
            "Profundidad de descarga y ciclos de vida",
            "Dimensionado para sistemas residenciales",
            "Dimensionado para sistemas comerciales",
          ],
        },
        {
          title: "Instalacion y Configuracion",
          description: "Practica con inversores Deye",
          lessons: [
            "Instalacion segura de bancos de baterias",
            "Sistema de gestion de bateria (BMS)",
            "Configuracion de inversores hibridos Deye",
            "Modos de operacion: backup, autoconsumo, peak shaving",
          ],
        },
        {
          title: "Mantenimiento y Troubleshooting",
          description: "Diagnostico y solucion de problemas",
          lessons: [
            "Monitoreo remoto de sistemas con bateria",
            "Mantenimiento preventivo",
            "Diagnostico de fallas comunes",
            "Examen final y certificacion",
          ],
        },
      ]}
    />
  )
}
