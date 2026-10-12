import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cpu, Zap, Users } from "lucide-react"

const points = [
  {
    icon: Zap,
    color: "bg-primary/10 text-primary",
    title: "Practicas en obras reales",
    text: "Trabajas en instalaciones activas de SolarPower con supervision de expertos.",
  },
  {
    icon: Cpu,
    color: "bg-secondary/10 text-secondary",
    title: "Capacitacion en IA incluida",
    text: "Todos los cursos incluyen modulos de inteligencia artificial aplicada al sector solar.",
  },
  {
    icon: Users,
    color: "bg-primary/10 text-primary",
    title: "La mejor salida laboral",
    text: "Acceso a la red de instaladores y vendedores de SolarPower Argentina.",
  },
]

export function WhyChoose() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative mr-3 sm:mr-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero-solar-installation.jpg"
                alt="Instalacion solar real"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-slate-900 text-white rounded-2xl px-5 py-4 sm:p-6 shadow-xl max-w-[16rem] sm:max-w-xs">
              <p className="text-xs sm:text-sm text-slate-400 mb-1">Equipo docente</p>
              <p className="font-bold text-base sm:text-lg">SolarPower Argentina</p>
              <p className="text-xs sm:text-sm text-slate-400">Profesionales del sector</p>
            </div>
          </div>

          {/* Content side */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 sm:mb-6 text-balance">
              No aprendes en un aula.
              <br />
              <span className="text-primary">Aprendes en el techo.</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
              La diferencia entre Academia Solar y cualquier otro curso es simple: nosotros te llevamos
              a instalar paneles de verdad. Con clientes reales. En obras reales.
            </p>

            <div className="space-y-5 sm:space-y-6 mb-10">
              {points.map((point) => (
                <div key={point.title} className="flex items-start gap-4">
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${point.color}`}>
                    <point.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{point.title}</h3>
                    <p className="text-muted-foreground">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              asChild
              className="btn-electric w-full sm:w-auto h-12 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold transition-all duration-200 hover:scale-[1.03] hover:shadow-lg hover:shadow-amber-400/40"
            >
              <Link href="#cursos">
                Ver programas disponibles
                <ArrowRight className="ml-1 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
