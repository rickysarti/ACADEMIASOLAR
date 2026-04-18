import { CoursePage } from "@/components/course-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Curso Instalador Solar Certificado Argentina | Academia Solar - SolarPower",
  description: "Convertite en instalador solar profesional con el curso mas completo de Argentina. Practicas reales en instalaciones de SolarPower, certificacion CAIM incluida. Cupos gratuitos disponibles. 12 semanas hibrido.",
  keywords: "curso instalador solar, instalador paneles solares argentina, certificacion CAIM, capacitacion instalacion solar, curso energia solar presencial",
  openGraph: {
    title: "Curso Instalador Solar Certificado | Academia Solar",
    description: "12 semanas de formacion con practicas reales en obra. Certificacion CAIM incluida.",
    images: ["/images/course-installer.jpg"],
  },
}

export default function InstaladorSolarPage() {
  return (
    <CoursePage
      title="Instalador Solar Certificado"
      subtitle="El programa mas completo del mercado argentino"
      description="Convertite en instalador solar profesional con practicas en instalaciones reales de SolarPower. Sali con experiencia en obra real y acceso directo a la red de instaladores mas grande de Argentina."
      longDescription="El programa de Instalador Solar Certificado combina clases online con practicas presenciales en instalaciones reales de SolarPower. A diferencia de cursos puramente teoricos, nuestros alumnos salen con experiencia en obra real y acceso directo a la red de instaladores mas grande de Argentina. Incluye certificacion ante CAIM, comunidad privada de graduados y material descargable."
      duration="12 semanas"
      modality="Hibrido (online + presencial)"
      level="Principiante"
      image="/images/course-installer.jpg"
      features={[
        "Instalar sistemas On-Grid, Hibridos y Off-Grid",
        "Conectar y configurar inversores Deye y Enphase",
        "Leer planos electricos solares",
        "Gestionar tramites ante distribuidoras",
        "Certificarte ante CAIM",
        "Calcular y dimensionar sistemas fotovoltaicos",
        "Realizar mantenimiento preventivo y correctivo",
        "2 jornadas de practica presencial en instalaciones reales",
      ]}
      requirements={[
        "Conocimientos basicos de electricidad",
        "Ganas de trabajar en el sector solar",
        "Disponibilidad para jornadas presenciales en Buenos Aires",
      ]}
      modules={[
        {
          title: "Fundamentos de Energia Solar",
          description: "Bases fisicas y conceptuales de la energia fotovoltaica",
          lessons: [
            "Bienvenida al programa y metodologia (15 min) - GRATIS",
            "Como funciona la energia solar fotovoltaica (25 min) - GRATIS",
            "Tipos de sistemas: On-Grid, Off-Grid e Hibrido (30 min)",
            "Componentes de un sistema solar completo (40 min)",
            "Radiacion solar en Argentina: mapas y datos clave (20 min)",
            "Quiz: Fundamentos de energia solar (15 min)",
          ],
        },
        {
          title: "Equipos y Tecnologia",
          description: "Paneles, inversores, baterias y materiales",
          lessons: [
            "Paneles solares: tecnologias monocristalino y policristalino (35 min)",
            "Inversores: string, microinversores y central (40 min)",
            "Inversores Deye: instalacion y configuracion paso a paso (50 min)",
            "Inversores Enphase: microinversores y Envoy (45 min)",
            "Baterias de litio LFP: seleccion e instalacion segura (40 min)",
            "Estructuras de montaje: techos y suelo (35 min)",
            "Materiales electricos: cables, conectores y protecciones (20 min)",
            "Quiz: Equipos y tecnologia (15 min)",
          ],
        },
        {
          title: "Instalacion Practica",
          description: "Procedimientos, seguridad y trabajo en obra",
          lessons: [
            "Seguridad electrica en instalaciones fotovoltaicas (35 min)",
            "Lectura de planos y diagramas unifilares (40 min)",
            "Instalacion de paneles en techo inclinado (55 min)",
            "Instalacion en techo plano y en suelo (45 min)",
            "Cableado DC: strings y tirada de cable solar (40 min)",
            "Cableado AC y conexion al tablero electrico (45 min)",
            "Jornada presencial 1: simulacion de instalacion completa (120 min)",
            "Quiz: Instalacion practica (20 min)",
          ],
        },
        {
          title: "Normativa, Tramites y Certificacion",
          description: "Regulacion argentina y examen final",
          lessons: [
            "Ley 27.424 de Generacion Distribuida en Argentina (30 min)",
            "Tramites ante EDENOR, EDESUR y distribuidoras del interior (40 min)",
            "Habilitaciones municipales y permisos de obra (25 min)",
            "Certificacion CAIM: requisitos y proceso (35 min)",
            "Jornada presencial 2: instalacion real en cliente SolarPower (180 min)",
            "Proyecto final: instalacion completa documentada",
            "Examen de certificacion final (45 min)",
          ],
        },
      ]}
    />
  )
}
