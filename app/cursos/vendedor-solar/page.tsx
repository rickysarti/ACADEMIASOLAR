import { CoursePage } from "@/components/course-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Curso Vendedor Solar Argentina | Academia Solar - SolarPower",
  description: "Convertite en vendedor solar experto con acceso al pipeline real de SolarPower. Tecnicas de venta especificas, CRM incluido, comisiones desde el primer mes. Cupos gratuitos disponibles. 6 semanas.",
  keywords: "curso vendedor solar, ventas energia solar argentina, trabajo energia solar, comercial paneles solares, empleo sector solar",
  openGraph: {
    title: "Curso Vendedor Solar Experto | Academia Solar",
    description: "6 semanas de formacion. Acceso a CRM y pipeline real de SolarPower. Comisiones desde el primer cierre.",
    images: ["/images/course-sales.jpg"],
  },
}

export default function VendedorSolarPage() {
  return (
    <CoursePage
      title="Vendedor Solar Experto"
      subtitle="El mejor vendedor de energia solar de Argentina"
      description="Convertite en el mejor vendedor de energia solar. Tecnicas de venta especificas para el sector y acceso al pipeline real de SolarPower desde el primer mes."
      longDescription="El curso de Vendedor Solar te da todas las herramientas comerciales para cerrar ventas de sistemas solares, manejar objeciones, hacer seguimiento y empezar a ganar comisiones desde el primer mes. Incluye acceso al CRM de SolarPower, script de ventas probado con cientos de clientes, y pipeline de leads reales."
      duration="6 semanas"
      modality="Online + Campo"
      level="Principiante"
      image="/images/course-sales.jpg"
      features={[
        "Explicar sistemas solares a cualquier perfil de cliente",
        "Calcular el ahorro y ROI para el cliente",
        "Manejar las 10 objeciones mas comunes",
        "Usar el CRM de SolarPower para gestionar leads",
        "Crear propuestas comerciales persuasivas",
        "Hacer seguimiento efectivo del pipeline",
        "Cerrar ventas de USD 5.000 o mas",
        "Comisiones desde el primer cierre",
      ]}
      requirements={[
        "No se requiere experiencia previa en ventas ni solar",
        "Ganas de aprender y cerrar ventas",
        "Disponibilidad para contactar clientes",
      ]}
      modules={[
        {
          title: "Conoce el Producto Solar",
          description: "Lo esencial para vender con confianza y credibilidad",
          lessons: [
            "Bienvenida: el vendedor solar del siglo XXI (15 min) - GRATIS",
            "Solar 101 para vendedores: lo que necesitas saber (25 min) - GRATIS",
            "Portafolio de productos SolarPower Argentina (30 min)",
            "Como explicar solar en 3 minutos a cualquier cliente (25 min)",
            "El mercado solar argentino: oportunidades y cifras (15 min)",
            "Quiz: Conocimiento del producto (10 min)",
          ],
        },
        {
          title: "El Proceso de Venta Solar",
          description: "Del lead calificado al contrato firmado",
          lessons: [
            "El funnel de ventas solar de SolarPower (30 min)",
            "Calificacion de leads: quien vale tu tiempo (25 min)",
            "La reunion de diagnostico perfecta: preguntas y escucha (35 min)",
            "Como usar el CRM de SolarPower (30 min)",
            "Tecnicas de cierre especificas para solar (30 min)",
            "Seguimiento post-visita: el 80% de las ventas se cierran aca (20 min)",
            "Quiz: Proceso de venta (15 min)",
          ],
        },
        {
          title: "Manejo de Objeciones",
          description: "Las 10 objeciones mas comunes y como superarlas",
          lessons: [
            "Es muy caro - Objecion de precio (20 min)",
            "No confio en la tecnologia - Objecion tecnica (20 min)",
            "Voy a esperar a que baje - Objecion de timing (20 min)",
            "Tengo que consultarlo - Objecion de autoridad (20 min)",
            "Mi vecino tuvo problemas - Objecion de confianza (20 min)",
            "Roleplay de ventas: practica con casos reales",
            "Quiz: Manejo de objeciones (15 min)",
          ],
        },
        {
          title: "Certificacion e Incorporacion a SolarPower",
          description: "Examen final y onboarding",
          lessons: [
            "El modelo de comisiones SolarPower explicado (20 min)",
            "Como gestionar tu pipeline de 20+ leads (25 min)",
            "Tu primer mes como vendedor SP: que esperar (20 min)",
            "Proyecto final: cerra una venta simulada completa",
            "Examen de certificacion Vendedor Solar (30 min)",
          ],
        },
      ]}
    />
  )
}
