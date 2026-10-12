import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Sparkles, Gift, Monitor, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { CONTACT_URL, mainCourses, shortCourses } from "@/lib/site"

export function Courses() {
  return (
    <section id="cursos" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <Badge variant="outline" className="mb-4 text-amber-700 border-amber-300 bg-amber-50">
            <Gift className="h-3 w-3 mr-1" />
            Cupos gratuitos disponibles
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">Elegi tu camino</h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto text-pretty">
            Todos nuestros programas incluyen capacitacion en IA aplicada al sector solar y cupos
            gratuitos para los primeros inscriptos.
          </p>
        </div>

        {/* Pricing Notice */}
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl px-5 py-4 sm:p-6 mb-10 sm:mb-12 text-center text-sm sm:text-base">
          <p className="text-slate-700">
            <span className="font-semibold text-amber-700">Precios disponibles proximamente</span> para
            quienes no accedan al cupo gratuito.{" "}
            <Link
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-700 hover:text-amber-800 underline underline-offset-2 whitespace-nowrap"
            >
              Consultanos para mas info
            </Link>
          </p>
        </div>

        {/* Main Courses Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {mainCourses.map((course) => (
            <article
              key={course.href}
              className={`relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 group ${
                course.featured ? "ring-2 ring-amber-400" : "ring-1 ring-slate-200"
              }`}
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 sm:left-5">
                  <p className="text-amber-400 text-sm font-medium mb-1">{course.subtitle}</p>
                  <h3 className="text-2xl font-bold text-white">{course.title}</h3>
                </div>
                {course.featured && (
                  <Badge className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-amber-500 text-slate-900">
                    Mas Popular
                  </Badge>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-slate-600 mb-4">{course.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {course.modules?.map((mod) => (
                    <span key={mod} className="text-xs px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">
                      {mod}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500 mb-5 sm:mb-6">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    {course.modality === "Online" ? <Monitor className="h-4 w-4" /> : <MapPin className="h-4 w-4" />}
                    {course.modality}
                  </span>
                  <span className="flex items-center gap-1.5 text-amber-600">
                    <Sparkles className="h-4 w-4" />
                    +IA
                  </span>
                  <span className="flex items-center gap-1.5 text-green-700">
                    <Gift className="h-4 w-4" />
                    Cupo gratuito
                  </span>
                </div>

                <Button
                  asChild
                  className="btn-electric mt-auto h-12 w-full sm:w-auto sm:self-start bg-slate-900 hover:bg-slate-800 text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
                >
                  <Link href={course.href}>
                    Ver programa
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Short Courses */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Cursos Cortos y Especializaciones</h3>
            <p className="text-slate-600">Sumá conocimientos puntuales en pocas semanas, 100% online.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {shortCourses.map((course) => (
              <Link
                key={course.href}
                href={course.href}
                className="flex items-center gap-4 p-4 sm:p-5 bg-white rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-lg active:bg-amber-50/50 transition-all group"
              >
                <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg">
                  <Image src={course.image} alt="" fill sizes="56px" className="object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start gap-2 mb-1">
                    <h4 className="font-semibold leading-snug text-slate-900 group-hover:text-amber-600 transition-colors">
                      {course.title}
                    </h4>
                    {course.free && <Badge className="bg-green-600 text-white text-xs flex-shrink-0">Gratis</Badge>}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {course.duration}
                    </span>
                    <span>{course.modality}</span>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
