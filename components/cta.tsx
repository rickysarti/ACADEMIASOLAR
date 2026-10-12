import Link from "next/link"
import { ArrowRight, Clock, Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LogoMark } from "@/components/brand/logo"
import { CONTACT_EMAIL, CONTACT_URL } from "@/lib/site"

export function CTA() {
  return (
    <section className="bg-paper px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink-950 text-white sm:rounded-[2.5rem]">
        <div className="halo-sol absolute inset-0" aria-hidden="true" />
        <div className="bg-celdas absolute inset-0 text-white/[0.05]" aria-hidden="true" />
        <LogoMark tone="light" className="absolute -right-16 -bottom-16 h-80 w-80 opacity-[0.06]" />

        <div className="relative grid gap-10 p-7 sm:p-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16 lg:p-16">
          <div>
            <h2 className="text-[2.1rem] font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Tu carrera en energía solar <span className="text-amanecer">empieza hoy.</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg text-white/75">
              Anotate en el curso gratuito de introducción y descubrí tu lugar en uno de los sectores con más
              futuro de Argentina.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="sol" size="xl">
                <Link href="/cursos/introduccion">
                  Empezar gratis
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link href={CONTACT_URL}>
                  Solicitar información
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm sm:p-7">
            <h3 className="text-lg font-bold">Hablemos</h3>
            <ul className="mt-5 space-y-4">
              <li>
                <Link href={CONTACT_URL} className="group flex items-center gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-verde-500/20">
                    <Send className="h-5 w-5 text-verde-400" />
                  </span>
                  <span>
                    <span className="block text-sm text-white/60">Formulario</span>
                    <span className="font-medium group-hover:text-verde-400">Dejanos tu consulta</span>
                  </span>
                </Link>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="group flex items-center gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-sol-500/20">
                    <Mail className="h-5 w-5 text-sol-300" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-white/60">Email</span>
                    <span className="text-sm font-medium group-hover:text-sol-300 sm:text-base">{CONTACT_EMAIL}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10">
                  <MapPin className="h-5 w-5 text-white/80" />
                </span>
                <span>
                  <span className="block text-sm text-white/60">Ubicación</span>
                  <span className="font-medium">Buenos Aires, Argentina</span>
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10">
                  <Clock className="h-5 w-5 text-white/80" />
                </span>
                <span>
                  <span className="block text-sm text-white/60">Horario</span>
                  <span className="font-medium">Lun a Vie 9 a 18 h · Sáb 9 a 13 h</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
