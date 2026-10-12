import { CoursePage } from "@/components/course-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Curso Analista y Diseñador Solar Argentina | Academia Solar - SolarPower",
  description: "Aprendé a diseñar sistemas solares con PVSyst, Aurora Solar y Helioscope. Curso 100% online de 8 semanas. Licencia educativa PVSyst incluida. Cupos gratuitos disponibles.",
  keywords: "curso disenador solar, pvsyst argentina, aurora solar curso, analista energia solar, diseno sistemas fotovoltaicos, curso online energia solar",
  openGraph: {
    title: "Curso Analista Solar - Diseñador de Sistemas | Academia Solar",
    description: "8 semanas 100% online. PVSyst, Aurora Solar y Helioscope. Licencia educativa incluida.",
    images: ["/images/course-analyst.jpg"],
  },
}

export default function AnalistaSolarPage() {
  return (
    <CoursePage
      slug="analista-solar"
      title="Analista Solar - Diseñador de Sistemas"
      subtitle="El experto técnico-comercial que toda empresa necesita"
      description="Aprendé a diseñar y simular sistemas solares con PVSyst, Aurora Solar y Helioscope. El curso 100% online más completo para analistas solares en Argentina."
      longDescription="El curso de Analista Solar te forma como el experto técnico-comercial que toda empresa solar necesita. Aprendés a usar las herramientas de simulación más importantes del mercado para diseñar sistemas, elaborar informes técnicos y justificar inversiones ante clientes. Incluye licencia educativa de PVSyst."
      duration="8 semanas"
      modality="100% Online"
      level="Principiante"
      image="/images/course-analyst.jpg"
      features={[
        "Usar PVSyst para simular sistemas solares",
        "Diseñar proyectos en Aurora Solar",
        "Calcular el ROI y TIR de una instalación",
        "Elaborar informes técnico-comerciales",
        "Analizar tarifas eléctricas argentinas",
        "Evaluar viabilidad de proyectos fotovoltaicos",
        "Presentar propuestas profesionales a clientes",
        "Licencia educativa PVSyst incluida",
      ]}
      requirements={[
        "Manejo básico de computadora",
        "No se requiere experiencia previa en solar",
        "Ganas de aprender herramientas profesionales",
      ]}
      modules={[
        {
          title: "Fundamentos del Análisis Solar",
          description: "Bases para diseñar sistemas solares correctamente",
          lessons: [
            "Introducción al análisis y diseño solar (20 min) - GRATIS",
            "Recursos solares: radiación global e inclinada en Argentina (30 min) - GRATIS",
            "Cómo analizar una factura eléctrica para dimensionar (25 min)",
            "Dimensionado básico de sistemas fotovoltaicos (35 min)",
            "Orientación e inclinación óptima de paneles (15 min)",
            "Quiz: Fundamentos del análisis solar (15 min)",
          ],
        },
        {
          title: "Software de Diseño Solar",
          description: "PVSyst, Aurora Solar y Helioscope en profundidad",
          lessons: [
            "Introducción a PVSyst: interfaz y flujo de trabajo (30 min)",
            "Simulación completa en PVSyst paso a paso (60 min)",
            "Aurora Solar: diseño 3D sobre imagen satelital (45 min)",
            "Helioscope: diseño rápido en la nube (35 min)",
            "Comparativa de herramientas: cuando usar cada una (20 min)",
            "Quiz: Software de diseño solar (15 min)",
          ],
        },
        {
          title: "Análisis Financiero de Proyectos",
          description: "ROI, TIR y propuestas comerciales",
          lessons: [
            "Análisis de rentabilidad de proyectos solares (35 min)",
            "Cálculo de TIR y VAN para inversiones fotovoltaicas (40 min)",
            "Tarifas eléctricas argentinas 2026: análisis completo (30 min)",
            "Elaboración de propuestas técnico-comerciales profesionales (45 min)",
            "Plantilla de propuesta descargable y editable (15 min)",
            "Quiz: Análisis financiero (15 min)",
          ],
        },
        {
          title: "Proyectos Prácticos y Certificación",
          description: "Casos reales y examen final",
          lessons: [
            "Caso práctico 1: Residencia 5kW On-Grid (50 min)",
            "Caso práctico 2: Comercio 15kW con batería Deye (55 min)",
            "Caso práctico 3: Agro bombeo solar 8kW Off-Grid (45 min)",
            "Proyecto final: diseñá y presupuesta tu primer sistema",
            "Examen de certificación Analista Solar (45 min)",
          ],
        },
      ]}
    />
  )
}
