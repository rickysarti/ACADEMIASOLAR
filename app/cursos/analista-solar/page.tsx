import { CoursePage } from "@/components/course-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Curso Analista y Disenador Solar Argentina | Academia Solar - SolarPower",
  description: "Aprende a disenar sistemas solares con PVSyst, Aurora Solar y Helioscope. Curso 100% online de 8 semanas. Licencia educativa PVSyst incluida. Cupos gratuitos disponibles.",
  keywords: "curso disenador solar, pvsyst argentina, aurora solar curso, analista energia solar, diseno sistemas fotovoltaicos, curso online energia solar",
  openGraph: {
    title: "Curso Analista Solar - Disenador de Sistemas | Academia Solar",
    description: "8 semanas 100% online. PVSyst, Aurora Solar y Helioscope. Licencia educativa incluida.",
    images: ["/images/course-analyst.jpg"],
  },
}

export default function AnalistaSolarPage() {
  return (
    <CoursePage
      title="Analista Solar - Disenador de Sistemas"
      subtitle="El experto tecnico-comercial que toda empresa necesita"
      description="Aprende a disenar y simular sistemas solares con PVSyst, Aurora Solar y Helioscope. El curso 100% online mas completo para analistas solares en Argentina."
      longDescription="El curso de Analista Solar te forma como el experto tecnico-comercial que toda empresa solar necesita. Aprendes a usar las herramientas de simulacion mas importantes del mercado para disenar sistemas, elaborar informes tecnicos y justificar inversiones ante clientes. Incluye licencia educativa de PVSyst."
      duration="8 semanas"
      modality="100% Online"
      level="Principiante"
      image="/images/course-analyst.jpg"
      features={[
        "Usar PVSyst para simular sistemas solares",
        "Disenar proyectos en Aurora Solar",
        "Calcular el ROI y TIR de una instalacion",
        "Elaborar informes tecnico-comerciales",
        "Analizar tarifas electricas argentinas",
        "Evaluar viabilidad de proyectos fotovoltaicos",
        "Presentar propuestas profesionales a clientes",
        "Licencia educativa PVSyst incluida",
      ]}
      requirements={[
        "Manejo basico de computadora",
        "No se requiere experiencia previa en solar",
        "Ganas de aprender herramientas profesionales",
      ]}
      modules={[
        {
          title: "Fundamentos del Analisis Solar",
          description: "Bases para disenar sistemas solares correctamente",
          lessons: [
            "Introduccion al analisis y diseno solar (20 min) - GRATIS",
            "Recursos solares: radiacion global e inclinada en Argentina (30 min) - GRATIS",
            "Como analizar una factura electrica para dimensionar (25 min)",
            "Dimensionado basico de sistemas fotovoltaicos (35 min)",
            "Orientacion e inclinacion optima de paneles (15 min)",
            "Quiz: Fundamentos del analisis solar (15 min)",
          ],
        },
        {
          title: "Software de Diseno Solar",
          description: "PVSyst, Aurora Solar y Helioscope en profundidad",
          lessons: [
            "Introduccion a PVSyst: interfaz y flujo de trabajo (30 min)",
            "Simulacion completa en PVSyst paso a paso (60 min)",
            "Aurora Solar: diseno 3D sobre imagen satelital (45 min)",
            "Helioscope: diseno rapido en la nube (35 min)",
            "Comparativa de herramientas: cuando usar cada una (20 min)",
            "Quiz: Software de diseno solar (15 min)",
          ],
        },
        {
          title: "Analisis Financiero de Proyectos",
          description: "ROI, TIR y propuestas comerciales",
          lessons: [
            "Analisis de rentabilidad de proyectos solares (35 min)",
            "Calculo de TIR y VAN para inversiones fotovoltaicas (40 min)",
            "Tarifas electricas argentinas 2026: analisis completo (30 min)",
            "Elaboracion de propuestas tecnico-comerciales profesionales (45 min)",
            "Plantilla de propuesta descargable y editable (15 min)",
            "Quiz: Analisis financiero (15 min)",
          ],
        },
        {
          title: "Proyectos Practicos y Certificacion",
          description: "Casos reales y examen final",
          lessons: [
            "Caso practico 1: Residencia 5kW On-Grid (50 min)",
            "Caso practico 2: Comercio 15kW con bateria Deye (55 min)",
            "Caso practico 3: Agro bombeo solar 8kW Off-Grid (45 min)",
            "Proyecto final: disena y presupuesta tu primer sistema",
            "Examen de certificacion Analista Solar (45 min)",
          ],
        },
      ]}
    />
  )
}
