import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cpu, Zap, Users } from "lucide-react"

export function WhyChoose() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src="/images/hero-solar-installation.jpg"
                alt="Instalacion solar real"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white rounded-2xl p-6 shadow-xl max-w-xs">
              <p className="text-sm text-slate-400 mb-1">Equipo docente</p>
              <p className="font-bold text-lg">SolarPower Argentina</p>
              <p className="text-sm text-slate-400">Profesionales del sector</p>
            </div>
          </div>

          {/* Content side */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              No aprendes en un aula.
              <br />
              <span className="text-primary">Aprendes en el techo.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              La diferencia entre Academia Solar y cualquier otro curso es simple: nosotros te llevamos a instalar paneles de verdad. Con clientes reales. En obras reales.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Practicas en obras reales</h3>
                  <p className="text-muted-foreground">Trabajas en instalaciones activas de SolarPower con supervision de expertos.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Capacitacion en IA incluida</h3>
                  <p className="text-muted-foreground">Todos los cursos incluyen modulos de inteligencia artificial aplicada al sector solar.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">La mejor salida laboral</h3>
                  <p className="text-muted-foreground">Acceso a la red de instaladores y vendedores de SolarPower Argentina.</p>
                </div>
              </div>
            </div>

            <Button size="lg" asChild className="btn-electric bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold transition-all duration-200 hover:scale-[1.03] hover:shadow-lg hover:shadow-amber-400/40">
              <Link href="#cursos">
                Ver programas disponibles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
