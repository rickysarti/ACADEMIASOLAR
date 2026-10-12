import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, Clock, Gift, MapPin, Monitor, Sparkles } from "lucide-react"
import { SectionHeader } from "@/components/brand/section"
import { CONTACT_URL, mainCourses, shortCourses } from "@/lib/site"

export function Courses() {
  return (
    <section id="cursos" className="bg-arena py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Programas"
            title="Elegí tu ruta profesional"
            lead="Cuatro programas para los roles que más demanda el sector, todos con módulos de IA y cupos gratuitos para los primeros inscriptos de cada cohorte."
          />
          <div className="flex items-start gap-3 rounded-2xl border border-sol-200 bg-sol-50 px-4 py-3 text-sm text-ink-800 lg:max-w-xs">
            <Gift className="mt-0.5 h-4 w-4 flex-shrink-0 text-sol-700" />
            <p>
              Precios disponibles próximamente para quienes no accedan al cupo gratuito.{" "}
              <Link
                href={CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sol-700 underline underline-offset-2"
              >
                Consultanos
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 lg:gap-6">
          {mainCourses.map((course) => (
            <Link
              key={course.href}
              href={course.href}
              className="group flex flex-col overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-ink-950/8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-ink-950/10"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={course.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent" />
                {course.featured && (
                  <span className="absolute top-4 left-4 rounded-full bg-sol-500 px-3 py-1 text-xs font-bold text-ink-950">
                    Más elegido
                  </span>
                )}
                <span className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink-950 transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="text-sm font-semibold text-sol-700">{course.subtitle}</p>
                <h3 className="mt-1 text-2xl font-bold text-ink-950 sm:text-[1.75rem]">{course.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-700">{course.description}</p>

                <ul className="mt-5 mb-6 flex flex-wrap gap-2">
                  {course.modules?.map((mod) => (
                    <li key={mod} className="rounded-full bg-arena px-3 py-1 text-xs font-medium text-ink-700">
                      {mod}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-ink-950/8 pt-5 text-sm text-ink-700">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-ink-500" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    {course.modality === "Online" ? (
                      <Monitor className="h-4 w-4 text-ink-500" />
                    ) : (
                      <MapPin className="h-4 w-4 text-ink-500" />
                    )}
                    {course.modality}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4 text-sol-600" />
                    IA incluida
                  </span>
                  <span className="flex items-center gap-1.5 font-medium text-verde-700">
                    <Gift className="h-4 w-4" />
                    Cupo gratuito
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Especializaciones */}
        <div className="mt-16 sm:mt-20">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <h3 className="text-2xl font-bold text-ink-950 sm:text-3xl">Cursos cortos y especializaciones</h3>
            <p className="text-ink-700">Conocimientos puntuales en pocas semanas, 100% online.</p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {shortCourses.map((course) => (
              <Link
                key={course.href}
                href={course.href}
                className="group flex items-center gap-4 rounded-2xl bg-white p-4 ring-1 ring-ink-950/8 transition-all hover:ring-sol-400 active:bg-sol-50"
              >
                <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl">
                  <Image src={course.image} alt="" fill sizes="56px" className="object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold leading-snug text-ink-950">{course.title}</p>
                  <p className="mt-1 flex items-center gap-2 text-sm text-ink-500">
                    {course.free ? (
                      <span className="rounded-full bg-verde-100 px-2 py-0.5 text-xs font-bold text-verde-700">Gratis</span>
                    ) : null}
                    {course.duration} · {course.modality}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-ink-300 transition-all group-hover:translate-x-1 group-hover:text-sol-600" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
