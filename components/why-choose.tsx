import Image from "next/image"
import { Cpu, HardHat, Network } from "lucide-react"
import { SectionHeader } from "@/components/brand/section"

const pillars = [
  {
    icon: HardHat,
    title: "Práctica en obras reales",
    text: "Trabajás en instalaciones activas de SolarPower, con clientes reales y supervisión de instaladores experimentados.",
    color: "bg-sol-100 text-sol-700",
  },
  {
    icon: Cpu,
    title: "IA aplicada al trabajo solar",
    text: "Todos los cursos incluyen módulos para diseñar, cotizar y vender más rápido con herramientas de inteligencia artificial.",
    color: "bg-verde-100 text-verde-700",
  },
  {
    icon: Network,
    title: "Conexión con el sector",
    text: "Al terminar, accedés a la red de instaladores, vendedores y empresas que trabajan con SolarPower Argentina.",
    color: "bg-ink-950/5 text-ink-950",
  },
]

export function WhyChoose() {
  return (
    <section id="metodo" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
          <SectionHeader
            eyebrow="El método Academia Solar"
            title={
              <>
                Teoría online.
                <br />
                <span className="text-sol-600">Oficio en el techo.</span>
              </>
            }
          />
          <p className="text-lg leading-relaxed text-ink-700 lg:pb-2">
            La diferencia es simple: además de estudiar, salís a instalar paneles de verdad. Aprendés el
            oficio como se aprende en serio, al lado de quienes lo hacen todos los días.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-16 lg:grid-cols-[1.15fr_1fr] lg:gap-6">
          <div className="relative min-h-[18rem] overflow-hidden rounded-[2rem] sm:min-h-[24rem]">
            <Image
              src="/images/course-installer.jpg"
              alt="Instalador fijando un panel solar"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
              <p className="max-w-sm font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                Equipo docente: profesionales activos de SolarPower Argentina.
              </p>
            </div>
          </div>

          <ol className="grid gap-4">
            {pillars.map((pillar, index) => (
              <li key={pillar.title} className="flex gap-5 rounded-3xl border border-ink-950/8 bg-white p-6 sm:p-7">
                <div className="flex flex-col items-center gap-3">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${pillar.color}`}>
                    <pillar.icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-sm font-bold text-ink-300">0{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink-950">{pillar.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-700">{pillar.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
