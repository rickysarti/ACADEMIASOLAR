import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Check,
  ChevronDown,
  Clock,
  Cpu,
  Gift,
  FlaskConical,
  Mail,
  PlayCircle,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Eyebrow } from "@/components/brand/section"
import { LogoMark } from "@/components/brand/logo"
import { JsonLd } from "@/components/json-ld"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { CONTACT_EMAIL, SITE_URL, contactUrl, mainCourses, shortCourses } from "@/lib/site"

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
  { icon: FlaskConical, label: "Laboratorio" },
  { icon: Cpu, label: "Módulo de IA" },
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
  const consultaHref = contactUrl(slug)
  const emailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Consulta: ${title}`)}`
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
      "@type": "EducationalOrganization",
      name: "Academia Solar",
      sameAs: SITE_URL,
    },
  }

  const stats = [
    { icon: Clock, label: "Duración", value: duration },
    { icon: BookOpen, label: "Modalidad", value: modality },
    { icon: PlayCircle, label: "Contenido", value: `${modules.length} ${modules.length === 1 ? "módulo" : "módulos"} · ${totalLessons} clases` },
    { icon: Users, label: "Docentes", value: instructor },
  ]

  return (
    <div className="pt-16 lg:pt-[72px]">
      <JsonLd data={courseJsonLd} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div className="halo-sol absolute inset-0" aria-hidden="true" />
        <div className="bg-celdas absolute inset-0 text-white/[0.04]" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16 lg:px-8 lg:py-20">
          <div>
            <Link
              href="/#cursos"
              className="-ml-2 inline-flex items-center gap-2 rounded-full px-2 py-1.5 text-sm text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Todos los cursos
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {isFree && <span className="rounded-full bg-verde-500 px-3 py-1 text-xs font-bold text-ink-950">GRATIS</span>}
              <span className="rounded-full border border-white/25 px-3 py-1 text-xs font-semibold">{level}</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-sol-500/15 px-3 py-1 text-xs font-semibold text-sol-300">
                <Cpu className="h-3 w-3" />
                IA incluida
              </span>
            </div>

            <h1 className="mt-5 text-[2.1rem] font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-3 font-display text-lg font-semibold text-sol-300 sm:text-xl">{subtitle}</p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">{description}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="sol" size="xl">
                <Link href={consultaHref}>
                  {ctaLabel}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link href={emailHref}>
                  <Mail className="h-5 w-5" />
                  Escribinos un email
                </Link>
              </Button>
            </div>
            {!isFree && (
              <p className="mt-4 flex items-center gap-2 text-sm text-white/70">
                <Gift className="h-4 w-4 text-verde-400" />
                Cupos gratuitos para los primeros inscriptos de cada cohorte
              </p>
            )}
          </div>

          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-white/15">
              <Image src={image} alt={title} fill priority sizes="40vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-ink-950 shadow-2xl">
              <LogoMark className="h-9 w-9" />
              <span className="text-sm font-semibold leading-tight">
                Terreno y
                <br />
                laboratorio
              </span>
            </div>
          </div>
        </div>

        {/* Datos clave */}
        <div className="relative border-t border-white/10 bg-white/[0.03]">
          <dl className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex gap-3 px-4 py-5 sm:px-6 lg:px-8 ${index % 2 === 0 ? "border-r border-white/10" : ""} ${
                  index < 2 ? "border-b border-white/10 lg:border-b-0" : ""
                } ${index === 1 ? "lg:border-r" : ""}`}
              >
                <stat.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-sol-400" />
                <div className="min-w-0">
                  <dt className="text-xs uppercase tracking-[0.14em] text-white/50">{stat.label}</dt>
                  <dd className="mt-1 text-sm font-semibold leading-snug sm:text-base">{stat.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Mobile: imagen del curso */}
      <div className="bg-paper px-4 pt-8 sm:px-6 lg:hidden">
        <div className="relative mx-auto aspect-[16/9] max-w-3xl overflow-hidden rounded-3xl">
          <Image src={image} alt={title} fill sizes="100vw" className="object-cover" />
        </div>
      </div>

      {/* Qué vas a aprender + requisitos */}
      <section className="bg-paper py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:gap-16 lg:px-8">
          <div className="min-w-0">
            <Eyebrow>Programa</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-ink-950 sm:text-4xl">Qué vas a aprender</h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex gap-3 rounded-2xl border border-ink-950/8 bg-white p-4">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-verde-100">
                    <Check className="h-3 w-3 text-verde-700" strokeWidth={3} />
                  </span>
                  <span className="text-ink-800">{feature}</span>
                </li>
              ))}
              <li className="flex gap-3 rounded-2xl border border-sol-200 bg-sol-50 p-4">
                <Cpu className="mt-0.5 h-5 w-5 flex-shrink-0 text-sol-700" />
                <span className="font-medium text-ink-800">Cómo usar IA en el trabajo solar</span>
              </li>
            </ul>

            <div className="mt-8 grid grid-cols-2 gap-4 rounded-3xl bg-white p-5 ring-1 ring-ink-950/8 sm:flex sm:justify-between sm:p-6">
              {includes.map((item) => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sol-100">
                    <item.icon className="h-4 w-4 text-sol-700" />
                  </span>
                  <span className="text-sm font-semibold text-ink-800">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl bg-white p-6 ring-1 ring-ink-950/8 sm:p-7">
              <h2 className="text-xl font-bold text-ink-950">Requisitos</h2>
              <ol className="mt-5 grid gap-3">
                {requirements.map((req, index) => (
                  <li key={req} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-ink-950 text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="text-ink-700">{req}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-6 border-t border-ink-950/8 pt-6">
                <h3 className="font-bold text-ink-950">Sobre el curso</h3>
                <p className="mt-2 leading-relaxed text-ink-700">{longDescription}</p>
              </div>
              <Button asChild variant="sol" size="xl" className="mt-6 hidden w-full lg:inline-flex">
                <Link href={consultaHref}>
                  {ctaLabel}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {/* Módulos */}
      <section className="bg-arena py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Eyebrow>Contenido</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-ink-950 sm:text-4xl">Módulo por módulo</h2>
            <p className="mt-2 text-ink-700">
              {modules.length} {modules.length === 1 ? "módulo" : "módulos"} · {totalLessons} clases
            </p>
          </div>

          <div className="mt-10 grid gap-3">
            {modules.map((module, index) => (
              <details
                key={module.title}
                open={index === 0}
                className="group overflow-hidden rounded-3xl bg-white ring-1 ring-ink-950/8 open:shadow-lg open:shadow-ink-950/5"
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-ink-950 font-display text-lg font-bold text-sol-400 group-open:bg-sol-500 group-open:text-ink-950">
                    {index + 1}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-lg font-bold leading-snug text-ink-950">{module.title}</span>
                    <span className="mt-0.5 block text-sm text-ink-500">
                      {module.description} · {module.lessons.length} clases
                    </span>
                  </span>
                  <ChevronDown className="h-5 w-5 flex-shrink-0 text-ink-500 transition-transform group-open:rotate-180" />
                </summary>
                <ul className="grid gap-3 border-t border-ink-950/8 px-5 py-5 sm:px-6">
                  {module.lessons.map((lesson) => (
                    <li key={lesson} className="flex items-start gap-3 text-[15px]">
                      <PlayCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-sol-600" />
                      <span className="text-ink-700">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Otros programas */}
      <section className="bg-paper py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ink-950">Otros programas</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-5">
            {otherCourses.map((course) => (
              <Link
                key={course.href}
                href={course.href}
                className="group flex items-center gap-4 rounded-3xl bg-white p-3 ring-1 ring-ink-950/8 transition-all hover:shadow-xl hover:shadow-ink-950/5 sm:flex-col sm:items-stretch sm:overflow-hidden sm:p-0"
              >
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl sm:aspect-[16/10] sm:h-auto sm:w-full sm:rounded-none">
                  <Image
                    src={course.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 80px, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0 flex-1 sm:p-5">
                  <p className="font-display text-lg font-bold leading-snug text-ink-950">{course.title}</p>
                  <p className="mt-1 text-sm text-ink-500">
                    {course.duration} · {course.modality}
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-ink-300 sm:hidden" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink-950 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
          <div className="halo-sol absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold sm:text-5xl">
              {isFree ? (
                <>
                  Empezá ahora, <span className="text-amanecer">es gratis</span>
                </>
              ) : (
                <>
                  Consultá tu <span className="text-amanecer">cupo gratuito</span>
                </>
              )}
            </h2>
            <p className="mt-4 text-lg text-white/75">
              {isFree
                ? "Este curso es completamente gratuito. Empezá hoy y descubrí tu potencial en la energía solar."
                : "Todos nuestros programas tienen cupos gratuitos. Escribinos y te contamos si podés acceder."}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="sol" size="xl">
                <Link href={consultaHref}>
                  {isFree ? "Empezar gratis" : "Solicitar cupo gratuito"}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link href="/#cursos">Ver otros cursos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <MobileCtaBar label={ctaLabel} href={consultaHref} contactHref={consultaHref} />
    </div>
  )
}
