import { Cpu, Users, Briefcase, Wrench, TrendingUp, Award } from "lucide-react"
import Image from "next/image"

const benefits = [
  {
    icon: Wrench,
    title: "Practicas Reales",
    description: "Aprende instalando en obras reales de SolarPower, no en simuladores.",
  },
  {
    icon: Cpu,
    title: "Capacitacion en IA",
    description: "Todos los cursos incluyen modulos de IA aplicada al sector solar.",
  },
  {
    icon: Briefcase,
    title: "Mejor Salida Laboral",
    description: "Acceso directo a oportunidades en la red de SolarPower y partners.",
  },
  {
    icon: Users,
    title: "Red Profesional",
    description: "Conecta con instaladores, empresas y profesionales del sector.",
  },
  {
    icon: TrendingUp,
    title: "Sector en Crecimiento",
    description: "La energia solar crece 40% anual en Argentina. Hay demanda real.",
  },
  {
    icon: Award,
    title: "Certificacion Oficial",
    description: "Certificados avalados por SolarPower, lider del mercado argentino.",
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative mr-3 sm:mr-6 order-2 lg:order-1">
            <div className="relative aspect-[4/3] lg:aspect-[6/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/ai-solar-training.jpg"
                alt="Capacitacion en IA para energia solar"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-white rounded-2xl shadow-xl p-4 sm:p-6 max-w-[15rem] sm:max-w-xs border border-slate-100">
              <div className="flex items-center gap-3 sm:mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-amber-400 to-green-500 flex items-center justify-center">
                  <Cpu className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">IA + Solar</p>
                  <p className="text-sm text-slate-500">En todos los cursos</p>
                </div>
              </div>
              <p className="hidden sm:block text-sm text-slate-600">
                Aprende a usar inteligencia artificial para disenar, vender y optimizar sistemas solares.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-5 sm:mb-6">
              Por que elegir
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-green-500">
                Academia Solar
              </span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 sm:mb-10 text-pretty">
              No somos solo una academia. Somos parte de SolarPower, la empresa lider en energia solar
              de Argentina. Eso significa acceso real a obras, tecnologia y oportunidades laborales.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 sm:border-0 sm:bg-transparent sm:p-0"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-100 to-yellow-50 flex items-center justify-center">
                    <benefit.icon className="h-5 w-5 sm:h-6 sm:w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold leading-snug text-slate-900 mb-1">{benefit.title}</h3>
                    <p className="text-sm text-slate-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
