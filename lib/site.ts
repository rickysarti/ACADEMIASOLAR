export const SITE_URL = "https://www.academiasolar.com.ar"

// Todos los contactos de la academia pasan por el formulario propio (/contacto)
// o por email.
export const CONTACT_URL = "/contacto"
export const CONTACT_EMAIL = "info@solarpower.com.ar"

/** Link al formulario con el curso preseleccionado (slug de /cursos/[slug]). */
export function contactUrl(cursoSlug?: string) {
  return cursoSlug ? `${CONTACT_URL}?curso=${cursoSlug}` : CONTACT_URL
}

export const PROVINCIAS = [
  "Buenos Aires",
  "Ciudad Autónoma de Buenos Aires",
  "Catamarca",
  "Chaco",
  "Chubut",
  "Córdoba",
  "Corrientes",
  "Entre Ríos",
  "Formosa",
  "Jujuy",
  "La Pampa",
  "La Rioja",
  "Mendoza",
  "Misiones",
  "Neuquén",
  "Río Negro",
  "Salta",
  "San Juan",
  "San Luis",
  "Santa Cruz",
  "Santa Fe",
  "Santiago del Estero",
  "Tierra del Fuego",
  "Tucumán",
] as const

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
      "Dominá la instalación de sistemas fotovoltaicos residenciales y comerciales con práctica en terreno y laboratorio.",
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

/** Opciones del campo "curso de interés" del formulario de contacto. */
export const CONTACT_TOPICS = [
  ...mainCourses.map((c) => ({ slug: c.href.replace("/cursos/", ""), label: c.title })),
  ...shortCourses.map((c) => ({ slug: c.href.replace("/cursos/", ""), label: c.title })),
  { slug: "empresas", label: "Capacitación para empresas" },
  { slug: "general", label: "Consulta general" },
]
