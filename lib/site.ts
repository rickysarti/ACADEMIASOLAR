export const SITE_URL = "https://www.academiasolar.com.ar"

export const CONTACT_URL = "https://www.solarpower.com.ar/contacto"
export const CONTACT_EMAIL = "info@solarpower.com.ar"
export const WHATSAPP_NUMBER = "5491134583958"
export const WHATSAPP_DISPLAY = "+54 9 11 3458-3958"

export function whatsappUrl(message = "¡Hola! Quiero información sobre los cursos de Academia Solar.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export type CourseSummary = {
  title: string
  subtitle?: string
  description?: string
  duration: string
  modality: string
  image: string
  href: string
  featured?: boolean
  free?: boolean
  modules?: string[]
}

// Datos alineados con el detalle de cada curso en app/cursos/*
export const mainCourses: CourseSummary[] = [
  {
    title: "Instalador Solar",
    subtitle: "Certificación profesional",
    description:
      "Dominá la instalación de sistemas fotovoltaicos residenciales y comerciales con prácticas en obras reales.",
    duration: "12 semanas",
    modality: "Híbrido",
    image: "/images/course-installer.jpg",
    href: "/cursos/instalador-solar",
    featured: true,
    modules: ["Fundamentos FV", "Montaje y estructura", "Conexiones eléctricas", "Puesta en marcha"],
  },
  {
    title: "Analista Solar",
    subtitle: "Diseño y dimensionamiento",
    description:
      "Aprendé a diseñar sistemas solares optimizados con software profesional y herramientas de IA.",
    duration: "8 semanas",
    modality: "Online",
    image: "/images/course-analyst.jpg",
    href: "/cursos/analista-solar",
    modules: ["Análisis de consumo", "Diseño con software", "Propuestas técnicas", "IA para solar"],
  },
  {
    title: "Vendedor Solar",
    subtitle: "Ventas consultivas",
    description:
      "Convertite en asesor comercial especializado en energía solar con técnicas de venta consultiva.",
    duration: "6 semanas",
    modality: "Híbrido",
    image: "/images/course-sales.jpg",
    href: "/cursos/vendedor-solar",
    modules: ["Producto solar", "Proceso de venta", "Financiamiento", "Cierre efectivo"],
  },
  {
    title: "Diplomatura Integral",
    subtitle: "Formación completa",
    description:
      "El programa más completo: instalación, diseño, ventas y gestión. Salí preparado para cualquier rol.",
    duration: "6 meses",
    modality: "Híbrido",
    image: "/images/course-diploma.jpg",
    href: "/cursos/diplomatura-integral",
    featured: true,
    modules: ["Instalador + Analista + Vendedor", "Gestión de proyectos", "Práctica intensiva"],
  },
]

export const shortCourses: CourseSummary[] = [
  { title: "Introducción a la Energía Solar", duration: "2 hs", modality: "Online", free: true, href: "/cursos/introduccion", image: "/images/hero-solar-installation.jpg" },
  { title: "Electricidad Básica para Solar", duration: "4 semanas", modality: "Online", href: "/cursos/electricidad-basica", image: "/images/course-installer.jpg" },
  { title: "Baterías y Almacenamiento", duration: "3 semanas", modality: "Online", href: "/cursos/baterias-almacenamiento", image: "/images/course-installer.jpg" },
  { title: "Normativa Solar Argentina", duration: "2 semanas", modality: "Online", href: "/cursos/normativa-solar", image: "/images/course-analyst.jpg" },
  { title: "Solar para el Agro", duration: "4 semanas", modality: "Online", href: "/cursos/solar-agro", image: "/images/hero-solar-installation.jpg" },
  { title: "Climatización de Piscinas", duration: "3 semanas", modality: "Online", href: "/cursos/climatizacion-piscinas", image: "/images/course-installer.jpg" },
]
