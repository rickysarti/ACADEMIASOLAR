import Image from "next/image"
import { Award, Briefcase, Cpu, Gift, Users } from "lucide-react"
import { SectionHeader } from "@/components/brand/section"

const benefits = [
  {
    icon: Gift,
    title: "Cupos gratuitos",
    description: "Todos los programas reservan cupos sin costo para los primeros inscriptos de cada cohorte.",
  },
  {
    icon: Briefcase,
    title: "Salida laboral",
    description: "Acceso a oportunidades en la red de SolarPower y empresas aliadas del sector.",
  },
  {
    icon: Users,
    title: "Comunidad profesional",
    description: "Conectá con instaladores, vendedores y técnicos que ya trabajan en solar.",
  },
  {
    icon: Award,
    title: "Certificación",
    description: "Certificados de Academia Solar y, en Instalador, preparación para la certificación CAIM.",
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Beneficios"
          title={
            <>
              Más que un curso: <span className="text-sol-600">una puerta al sector</span>
            </>
          }
          lead="Somos parte de SolarPower Argentina. Eso se traduce en obras reales para practicar, tecnología actual y contactos de trabajo."
        />

        <div className="mt-12 grid gap-4 lg:auto-rows-fr sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {/* Tarjeta destacada con imagen */}
          <div className="relative min-h-[20rem] lg:row-span-2 overflow-hidden rounded-3xl bg-ink-950 sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/ai-solar-training.jpg"
              alt="Clase de diseño solar asistido por inteligencia artificial"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 text-white">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amanecer">
                <Cpu className="h-6 w-6 text-ink-950" />
              </span>
              <h3 className="mt-4 text-2xl font-bold">IA + Solar en todos los cursos</h3>
              <p className="mt-2 text-white/75">
                Aprendé a usar inteligencia artificial para diseñar, cotizar, vender y optimizar sistemas solares.
              </p>
            </div>
          </div>

          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-3xl border border-ink-950/8 bg-white p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sol-100">
                <benefit.icon className="h-5 w-5 text-sol-700" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink-950">{benefit.title}</h3>
              <p className="mt-1.5 text-ink-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
