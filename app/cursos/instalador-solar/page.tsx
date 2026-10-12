import { CoursePage } from "@/components/course-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Curso Instalador Solar Certificado Argentina | Academia Solar - SolarPower",
  description: "Convertite en instalador solar profesional con el curso más completo de Argentina. Práctica en terreno y en laboratorio, certificación CAIM incluida. Cupos gratuitos disponibles. 12 semanas híbrido.",
  keywords: "curso instalador solar, instalador paneles solares argentina, certificacion CAIM, capacitacion instalacion solar, curso energia solar presencial",
  openGraph: {
    title: "Curso Instalador Solar Certificado | Academia Solar",
    description: "12 semanas de formación con práctica en terreno y laboratorio. Certificación CAIM incluida.",
    images: ["/images/course-installer.jpg"],
  },
}

export default function InstaladorSolarPage() {
  return (
    <CoursePage
      slug="instalador-solar"
      title="Instalador Solar Certificado"
      subtitle="El programa más completo del mercado argentino"
      description="Convertite en instalador solar profesional con práctica en terreno y en nuestros laboratorios de pruebas. Salí con experiencia práctica y acceso directo a la red de instaladores más grande de Argentina."
      longDescription="El programa de Instalador Solar Certificado combina clases online con prácticas presenciales en terreno y en nuestros laboratorios de pruebas. A diferencia de cursos puramente teóricos, nuestros alumnos salen con experiencia práctica y acceso directo a la red de instaladores más grande de Argentina. Incluye certificación ante CAIM, comunidad privada de graduados y material descargable."
      duration="12 semanas"
      modality="Híbrido (online + presencial)"
      level="Principiante"
      image="/images/course-installer.jpg"
      features={[
        "Instalar sistemas On-Grid, Híbridos y Off-Grid",
        "Conectar y configurar inversores Deye y Enphase",
        "Leer planos eléctricos solares",
        "Gestionar trámites ante distribuidoras",
        "Certificarte ante CAIM",
        "Calcular y dimensionar sistemas fotovoltaicos",
        "Realizar mantenimiento preventivo y correctivo",
        "2 jornadas de práctica presencial en terreno y laboratorio",
      ]}
      requirements={[
        "Conocimientos básicos de electricidad",
        "Ganas de trabajar en el sector solar",
        "Disponibilidad para jornadas presenciales en Buenos Aires",
      ]}
      modules={[
        {
          title: "Fundamentos de Energía Solar",
          description: "Bases físicas y conceptuales de la energía fotovoltaica",
          lessons: [
            "Bienvenida al programa y metodología (15 min) - GRATIS",
            "Cómo funciona la energía solar fotovoltaica (25 min) - GRATIS",
            "Tipos de sistemas: On-Grid, Off-Grid e Híbrido (30 min)",
            "Componentes de un sistema solar completo (40 min)",
            "Radiación solar en Argentina: mapas y datos clave (20 min)",
            "Quiz: Fundamentos de energía solar (15 min)",
          ],
        },
        {
          title: "Equipos y Tecnología",
          description: "Paneles, inversores, baterías y materiales",
          lessons: [
            "Paneles solares: tecnologías monocristalino y policristalino (35 min)",
            "Inversores: string, microinversores y central (40 min)",
            "Inversores Deye: instalación y configuración paso a paso (50 min)",
            "Inversores Enphase: microinversores y Envoy (45 min)",
            "Baterías de litio LFP: selección e instalación segura (40 min)",
            "Estructuras de montaje: techos y suelo (35 min)",
            "Materiales eléctricos: cables, conectores y protecciones (20 min)",
            "Quiz: Equipos y tecnología (15 min)",
          ],
        },
        {
          title: "Instalación Práctica",
          description: "Procedimientos, seguridad y trabajo en terreno",
          lessons: [
            "Seguridad eléctrica en instalaciones fotovoltaicas (35 min)",
            "Lectura de planos y diagramas unifilares (40 min)",
            "Instalación de paneles en techo inclinado (55 min)",
            "Instalación en techo plano y en suelo (45 min)",
            "Cableado DC: strings y tirada de cable solar (40 min)",
            "Cableado AC y conexion al tablero eléctrico (45 min)",
            "Jornada presencial 1: simulación de instalación completa (120 min)",
            "Quiz: Instalación práctica (20 min)",
          ],
        },
        {
          title: "Normativa, Trámites y Certificación",
          description: "Regulación argentina y examen final",
          lessons: [
            "Ley 27.424 de Generación Distribuida en Argentina (30 min)",
            "Trámites ante EDENOR, EDESUR y distribuidoras del interior (40 min)",
            "Habilitaciones municipales y permisos de obra (25 min)",
            "Certificación CAIM: requisitos y proceso (35 min)",
            "Jornada presencial 2: instalación real en cliente SolarPower (180 min)",
            "Proyecto final: instalación completa documentada",
            "Examen de certificación final (45 min)",
          ],
        },
      ]}
    />
  )
}
