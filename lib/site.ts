export const SITE_URL = "https://www.academiasolar.com.ar"

export const CONTACT_URL = "https://www.solarpower.com.ar/contacto"
export const CONTACT_EMAIL = "info@solarpower.com.ar"
export const WHATSAPP_NUMBER = "5491134583958"
export const WHATSAPP_DISPLAY = "+54 9 11 3458-3958"

export function whatsappUrl(message = "Hola! Quiero informacion sobre los cursos de Academia Solar.") {
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
    subtitle: "Certificacion Profesional",
    description:
      "Domina la instalacion de sistemas fotovoltaicos residenciales y comerciales con practicas en obras reales.",
    duration: "12 semanas",
    modality: "Hibrido",
    image: "/images/course-installer.jpg",
    href: "/cursos/instalador-solar",
    featured: true,
    modules: ["Fundamentos FV", "Montaje y Estructura", "Conexiones Electricas", "Puesta en Marcha"],
  },
  {
    title: "Analista Solar",
    subtitle: "Diseno y Dimensionamiento",
    description:
      "Aprende a disenar sistemas solares optimizados usando software profesional y herramientas de IA.",
    duration: "8 semanas",
    modality: "Online",
    image: "/images/course-analyst.jpg",
    href: "/cursos/analista-solar",
    modules: ["Analisis de Consumo", "Diseno con Software", "Propuestas Tecnicas", "IA para Solar"],
  },
  {
    title: "Vendedor Solar",
    subtitle: "Ventas Consultivas",
    description:
      "Convertite en asesor comercial especializado en energia solar con tecnicas de venta consultiva.",
    duration: "6 semanas",
    modality: "Hibrido",
    image: "/images/course-sales.jpg",
    href: "/cursos/vendedor-solar",
    modules: ["Producto Solar", "Proceso de Venta", "Financiamiento", "Cierre Efectivo"],
  },
  {
    title: "Diplomatura Integral",
    subtitle: "Formacion Completa",
    description:
      "El programa mas completo: instalacion, diseno, ventas y gestion. Sali preparado para cualquier rol.",
    duration: "6 meses",
    modality: "Hibrido",
    image: "/images/course-diploma.jpg",
    href: "/cursos/diplomatura-integral",
    featured: true,
    modules: ["Instalador + Analista + Vendedor", "Gestion de Proyectos", "Practica Intensiva"],
  },
]

export const shortCourses: CourseSummary[] = [
  { title: "Introduccion a la Energia Solar", duration: "2 hs", modality: "Online", free: true, href: "/cursos/introduccion", image: "/images/hero-solar-installation.jpg" },
  { title: "Electricidad Basica para Solar", duration: "4 semanas", modality: "Online", href: "/cursos/electricidad-basica", image: "/images/course-installer.jpg" },
  { title: "Baterias y Almacenamiento", duration: "3 semanas", modality: "Online", href: "/cursos/baterias-almacenamiento", image: "/images/course-installer.jpg" },
  { title: "Normativa Solar Argentina", duration: "2 semanas", modality: "Online", href: "/cursos/normativa-solar", image: "/images/course-analyst.jpg" },
  { title: "Solar para el Agro", duration: "4 semanas", modality: "Online", href: "/cursos/solar-agro", image: "/images/hero-solar-installation.jpg" },
  { title: "Climatizacion de Piscinas", duration: "3 semanas", modality: "Online", href: "/cursos/climatizacion-piscinas", image: "/images/course-installer.jpg" },
]
