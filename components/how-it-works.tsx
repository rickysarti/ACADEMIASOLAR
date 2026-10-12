import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/brand/section"

const steps = [
  {
    title: "Empezá gratis",
    text: "Hacé el curso de Introducción (2 horas, online) y descubrí qué rol del sector solar va con vos.",
  },
  {
    title: "Elegí tu ruta",
    text: "Instalador, Analista, Vendedor o la Diplomatura completa. Consultá por los cupos gratuitos de cada cohorte.",
  },
  {
    title: "Estudiá y practicá",
    text: "Clases online a tu ritmo, módulos de IA y jornadas de práctica en terreno y en nuestros laboratorios de pruebas.",
  },
  {
    title: "Certificate y trabajá",
    text: "Obtené tu certificado y sumate a la red de profesionales y empresas que trabajan con SolarPower.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative overflow-hidden bg-ink-950 py-20 text-white sm:py-28">
      <div className="halo-sol absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tone="light"
          eyebrow="Cómo funciona"
          title="De cero a profesional solar en cuatro pasos"
          lead="Un recorrido pensado para que avances aunque hoy no sepas nada de electricidad ni de paneles."
        />

        <ol className="relative mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
              <span className="font-display text-5xl font-extrabold leading-none text-amanecer">{index + 1}</span>
              <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-white/70">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="sol" size="xl">
            <Link href="/cursos/introduccion">
              Dar el primer paso
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
