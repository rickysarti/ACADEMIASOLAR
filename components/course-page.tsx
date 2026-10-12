import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Clock,
  BookOpen,
  Gift,
  Cpu,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Users,
  Award,
  PlayCircle,
  ChevronDown,
  MessageCircle,
  Wrench,
} from "lucide-react"
import { JsonLd } from "@/components/json-ld"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { CONTACT_URL, SITE_URL, mainCourses, shortCourses, whatsappUrl } from "@/lib/site"

interface Module {
  title: string
  description: string
  lessons: string[]
}

interface CoursePageProps {
  slug: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  duration: string
  modality: string
  level: string
  image: string
  features: string[]
  modules: Module[]
  requirements: string[]
  instructor?: string
  isFree?: boolean
}

const includes = [
  { icon: Award, label: "Certificado" },
  { icon: Wrench, label: "Casos reales" },
  { icon: Cpu, label: "Modulo de IA" },
  { icon: Users, label: "Red SolarPower" },
]

export function CoursePage({
  slug,
  title,
  subtitle,
  description,
  longDescription,
  duration,
  modality,
  level,
  image,
  features,
  modules,
  requirements,
  instructor = "Equipo SolarPower Argentina",
  isFree = false,
}: CoursePageProps) {
  const href = `/cursos/${slug}`
  const ctaLabel = isFree ? "Empezar ahora" : "Consultar cupo gratuito"
  const whatsappMessage = `Hola! Quiero informacion sobre el curso "${title}" de Academia Solar.`
  const totalLessons = modules.reduce((sum, module) => sum + module.lessons.length, 0)
  const otherCourses = [...mainCourses, shortCourses[0]].filter((course) => course.href !== href).slice(0, 3)

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: title,
    description,
    url: `${SITE_URL}${href}`,
    image: `${SITE_URL}${image}`,
    inLanguage: "es-AR",
    educationalLevel: level,
    isAccessibleForFree: isFree,
    provider: {
      "@type": "Organization",
      name: "Academia Solar - SolarPower Argentina",
      sameAs: SITE_URL,
    },
  }

  return (
    <div className="pt-16 lg:pt-[72px]">
      <JsonLd data={courseJsonLd} />

      {/* Hero section */}
      <section className="relative overflow-hidden bg-slate-900 py-10 text-white sm:py-16 lg:py-24">
        <div className="absolute inset-0 z-0">
          <Image src={image} alt="" fill sizes="100vw" className="object-cover opacity-25" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#cursos"
            className="-ml-2 mb-6 inline-flex items-center gap-2 rounded-full px-2 py-1.5 text-sm text-white/60 transition-colors hover:text-white sm:mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a cursos
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                {isFree && <Badge className="bg-green-600 text-white">GRATIS</Badge>}
                <Badge variant="outline" className="border-white/30 text-white">
                  {level}
                </Badge>
                <Badge variant="outline" className="border-amber-400/40 bg-amber-400/10 text-amber-300">
                  <Cpu className="mr-1 h-3 w-3" />
                  +IA incluida
                </Badge>
              </div>

              <h1 className="mb-3 text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-5xl">{title}</h1>
              <p className="mb-5 text-lg text-amber-400 sm:mb-6 sm:text-xl">{subtitle}</p>
              <p className="mb-7 text-base leading-relaxed text-white/75 sm:mb-8 sm:text-lg">{description}</p>

              <dl className="mb-8 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
                <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2.5 sm:rounded-full sm:px-4 sm:py-2">
                  <Clock className="h-4 w-4 flex-shrink-0 text-amber-400" />
                  <dt className="sr-only">Duracion</dt>
                  <dd className="text-sm">{duration}</dd>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2.5 sm:rounded-full sm:px-4 sm:py-2">
                  <BookOpen className="h-4 w-4 flex-shrink-0 text-amber-400" />
                  <dt className="sr-only">Modalidad</dt>
                  <dd className="text-sm">{modality}</dd>
                </div>
                <div className="col-span-2 flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2.5 sm:rounded-full sm:px-4 sm:py-2">
                  <Users className="h-4 w-4 flex-shrink-0 text-amber-400" />
                  <dt className="sr-only">Instructor</dt>
                  <dd className="text-sm">{instructor}</dd>
                </div>
              </dl>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Button
                  size="lg"
                  asChild
                  className="btn-electric h-12 bg-amber-500 font-semibold text-slate-900 transition-all duration-200 hover:scale-[1.03] hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-400/40"
                >
                  <Link href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
                    {ctaLabel}
                    <ArrowRight className="ml-1 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="h-12 border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white"
                >
                  <Link href={whatsappUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Consultar por WhatsApp
                  </Link>
                </Button>
              </div>
              {!isFree && (
                <p className="mt-4 flex items-center gap-2 text-sm text-white/70">
                  <Gift className="h-4 w-4 text-green-400" />
                  Cupos gratuitos disponibles para los primeros inscriptos
                </p>
              )}
            </div>

            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image src={image} alt={title} fill sizes="50vw" className="object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-primary p-4">
                <div className="flex items-center gap-3">
                  <Cpu className="h-6 w-6 text-primary-foreground" />
                  <span className="text-sm font-semibold text-primary-foreground">+IA Incluida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Includes strip */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-4 divide-x divide-border px-2 sm:px-6 lg:px-8">
          {includes.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-1.5 px-1 py-4 text-center sm:flex-row sm:justify-center sm:gap-3 sm:py-5"
            >
              <item.icon className="h-5 w-5 text-amber-600" />
              <span className="text-[11px] font-medium leading-tight text-slate-700 sm:text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features section */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            {/* What you'll learn */}
            <div>
              <h2 className="mb-5 text-2xl font-bold text-foreground sm:mb-6 sm:text-3xl">Que vas a aprender</h2>
              <ul className="grid gap-3 sm:gap-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <Cpu className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-foreground">Como utilizar IA en el sector solar</span>
                </li>
              </ul>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="mb-5 text-2xl font-bold text-foreground sm:mb-6 sm:text-3xl">Requisitos</h2>
              <ol className="grid gap-3 sm:gap-4">
                {requirements.map((req, index) => (
                  <li key={req} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-8 rounded-2xl border border-border bg-muted/50 p-5 sm:p-6">
                <h3 className="mb-2 font-semibold text-foreground">Descripcion completa</h3>
                <p className="leading-relaxed text-muted-foreground">{longDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules section */}
      <section className="bg-muted/30 py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center sm:mb-12">
            <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">Contenido del curso</h2>
            <p className="text-muted-foreground">
              {modules.length} {modules.length === 1 ? "modulo" : "modulos"} · {totalLessons} clases
            </p>
          </div>

          <div className="grid gap-3 sm:gap-4">
            {modules.map((module, index) => (
              <details
                key={module.title}
                open={index === 0}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 p-4 sm:p-6 [&::-webkit-details-marker]:hidden">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-500 font-bold text-slate-900">
                    {index + 1}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold leading-snug text-foreground">{module.title}</span>
                    <span className="mt-0.5 block text-sm text-muted-foreground">{module.description}</span>
                  </span>
                  <ChevronDown className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <ul className="grid gap-3 border-t border-border px-4 py-4 sm:px-6 sm:py-5">
                  {module.lessons.map((lesson) => (
                    <li key={lesson} className="flex items-start gap-3 text-sm">
                      <PlayCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other courses */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-foreground sm:mb-8 sm:text-3xl">Otros programas</h2>
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
            {otherCourses.map((course) => (
              <Link
                key={course.href}
                href={course.href}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-3 transition-all hover:border-amber-300 hover:shadow-lg sm:flex-col sm:items-stretch sm:p-0 sm:overflow-hidden"
              >
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl sm:aspect-[16/9] sm:h-auto sm:w-full sm:rounded-none">
                  <Image
                    src={course.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 80px, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0 flex-1 sm:p-5 sm:pt-1">
                  <p className="font-semibold leading-snug text-foreground group-hover:text-amber-600">{course.title}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    {course.duration} · {course.modality}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-muted-foreground sm:hidden" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-slate-900 py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Award className="mx-auto mb-5 h-14 w-14 text-amber-400/40 sm:mb-6 sm:h-16 sm:w-16" />
          <h2 className="mb-4 text-3xl font-bold text-white text-balance lg:text-4xl">
            {isFree ? "Empeza ahora, es gratis" : "Consulta tu cupo gratuito"}
          </h2>
          <p className="mb-8 text-lg text-slate-300 text-pretty sm:text-xl">
            {isFree
              ? "Este curso es completamente gratuito. Empieza hoy y descubre tu potencial en la energia solar."
              : "Todos nuestros programas tienen cupos gratuitos disponibles. Consulta si podes acceder."}
          </p>
          <div className="mx-auto flex max-w-sm flex-col justify-center gap-3 sm:max-w-none sm:flex-row sm:gap-4">
            <Button
              size="lg"
              asChild
              className="btn-electric h-12 bg-amber-500 font-semibold text-slate-900 transition-all duration-200 hover:scale-[1.03] hover:bg-amber-600 hover:shadow-xl hover:shadow-amber-400/50"
            >
              <Link href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
                {isFree ? "Empezar gratis" : "Solicitar cupo gratuito"}
                <ArrowRight className="ml-1 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              asChild
              className="btn-electric-ghost h-12 border-2 border-white/30 bg-white/20 text-white backdrop-blur-sm transition-all duration-200 hover:scale-[1.02] hover:bg-white/30"
            >
              <Link href="/#cursos">Ver otros cursos</Link>
            </Button>
          </div>
        </div>
      </section>

      <MobileCtaBar label={ctaLabel} href={CONTACT_URL} external whatsappMessage={whatsappMessage} />
    </div>
  )
}
