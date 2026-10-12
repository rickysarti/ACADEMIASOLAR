import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/brand/section"
import { JsonLd } from "@/components/json-ld"
import { whatsappUrl } from "@/lib/site"

const faqs = [
  {
    question: "¿Qué diferencia a Academia Solar de otros cursos de energía solar?",
    answer:
      "Tres cosas: prácticas en instalaciones reales de SolarPower con clientes finales (no simulaciones), acceso a la red de instaladores y vendedores de SolarPower, y módulos de inteligencia artificial aplicada al trabajo solar en todos los cursos.",
  },
  {
    question: "¿Necesito conocimientos previos?",
    answer:
      "Para Instalador Solar recomendamos tener nociones básicas de electricidad. Si no las tenés, podés hacer antes el curso de Electricidad Básica para Solar (4 semanas, online). Analista Solar y Vendedor Solar no requieren conocimientos técnicos previos.",
  },
  {
    question: "¿Cómo funcionan las prácticas en instalaciones reales?",
    answer:
      "Se realizan en obras activas de SolarPower, con supervisión de instaladores experimentados. Participás en proyectos residenciales y comerciales reales, desde el relevamiento hasta la puesta en marcha, y sumás experiencia comprobable para tu CV.",
  },
  {
    question: "¿Qué pasa si no apruebo el examen de certificación?",
    answer:
      "Tenés hasta 3 intentos para aprobar sin costo adicional. Además ofrecemos tutorías y clases de repaso para que llegues bien preparado.",
  },
  {
    question: "¿Cómo es la salida laboral?",
    answer:
      "Los egresados acceden a la red de SolarPower y a empresas del sector que buscan perfiles formados. No prometemos empleo garantizado, pero sí te conectamos con quienes contratan.",
  },
  {
    question: "¿Cómo funcionan los cupos gratuitos?",
    answer:
      "Todos los cursos tienen cupos gratuitos para los primeros inscriptos de cada cohorte. Si no accedés al cupo, los precios se publicarán próximamente. Escribinos para conocer la disponibilidad actual.",
  },
  {
    question: "¿Los cursos son online o presenciales?",
    answer:
      "Introducción, Analista Solar y los cursos cortos son 100% online. Instalador Solar, Vendedor Solar y la Diplomatura Integral son híbridos: teoría online y jornadas presenciales de práctica.",
  },
  {
    question: "¿Los cursos incluyen capacitación en IA?",
    answer:
      "Sí. Todos incluyen módulos de inteligencia artificial aplicada al sector solar: diseñar sistemas, armar propuestas, analizar datos y optimizar el trabajo diario.",
  },
  {
    question: "¿Ofrecen capacitación para empresas?",
    answer:
      "Sí, armamos programas a medida para distribuidores, constructoras y empresas de servicios eléctricos. Escribinos y te enviamos una propuesta según las necesidades de tu equipo.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-paper py-20 sm:py-28">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            eyebrow="Preguntas frecuentes"
            title="Resolvemos tus dudas"
            lead="Todo lo que necesitás saber antes de anotarte. ¿No encontrás tu respuesta? Escribinos."
          />
          <Button asChild variant="verde" size="xl" className="mt-6">
            <Link href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Consultar por WhatsApp
            </Link>
          </Button>
        </div>

        <Accordion type="single" collapsible className="rounded-3xl border border-ink-950/8 bg-white px-5 sm:px-7">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`} className="border-ink-950/8">
              <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-ink-950 hover:text-sol-700 hover:no-underline sm:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-ink-700">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
