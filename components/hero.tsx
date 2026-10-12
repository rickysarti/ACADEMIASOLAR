"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, Wrench, Gift, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const roles = ["Instalador", "Diseñador", "Vendedor", "Experto"]

const valueProps = [
  { icon: Wrench, label: "Practicas Reales", desc: "En instalaciones de SolarPower" },
  { icon: Gift, label: "Cupos Gratuitos", desc: "Disponibles en todos los cursos" },
  { icon: Users, label: "Red Profesional", desc: "Acceso a la red de SolarPower" },
]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let timeout: ReturnType<typeof setTimeout>
    const interval = setInterval(() => {
      setIsAnimating(true)
      timeout = setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length)
        setIsAnimating(false)
      }, 400)
    }, 2800)
    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-solar-installation.jpg"
          alt="Instalacion solar profesional"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 pt-28 pb-16 sm:pt-32 sm:pb-24 text-center">
        {/* Badge */}
        <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-white/90 backdrop-blur-sm">
          <Sparkles className="h-4 w-4 flex-shrink-0 text-amber-400" />
          <span>Capacitacion con IA incluida en todos los cursos</span>
        </div>

        {/* Main Headline */}
        <h1 className="mb-5 sm:mb-6 text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white">
          <span className="block">Convertite en</span>
          <span className="flex flex-wrap items-baseline justify-center gap-x-3 sm:gap-x-4">
            {/* Todas las palabras ocupan la misma celda: el ancho no salta al rotar */}
            <span className="inline-grid" aria-live="polite">
              {roles.map((role, i) => (
                <span
                  key={role}
                  aria-hidden={i !== currentRole}
                  className={`[grid-area:1/1] bg-gradient-to-r from-amber-400 via-yellow-400 to-green-400 bg-clip-text text-transparent transition-all duration-400 ${
                    i === currentRole
                      ? isAnimating
                        ? "opacity-0 translate-y-3"
                        : "opacity-100 translate-y-0"
                      : "opacity-0 pointer-events-none select-none"
                  }`}
                >
                  {role}
                </span>
              ))}
            </span>
            <span>Solar</span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-3 max-w-3xl text-lg sm:text-xl md:text-2xl leading-relaxed text-white/85">
          Argentina necesita miles de profesionales solares.
        </p>
        <p className="mx-auto mb-8 sm:mb-12 max-w-2xl text-base sm:text-lg md:text-xl text-white/65 text-pretty">
          Formamos a los expertos del futuro con practicas reales en instalaciones de SolarPower y la
          mejor salida laboral del mercado.
        </p>

        {/* CTA Buttons */}
        <div className="mx-auto mb-10 sm:mb-16 flex max-w-sm sm:max-w-none flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Button
            size="lg"
            className="btn-electric h-14 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-8 text-lg font-semibold text-slate-900 shadow-2xl shadow-amber-500/40 transition-all duration-200 hover:scale-[1.03] hover:from-amber-600 hover:to-yellow-600 hover:shadow-amber-400/60"
            asChild
          >
            <Link href="/cursos/introduccion">
              Curso Gratuito
              <ArrowRight className="ml-1 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            className="btn-electric-ghost h-14 rounded-full border-2 border-white/40 bg-white/15 px-8 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:scale-[1.03] hover:bg-white/25"
            asChild
          >
            <Link href="#cursos">
              <Play className="mr-1 h-5 w-5" />
              Ver Programas
            </Link>
          </Button>
        </div>

        {/* Value Props */}
        <div className="mx-auto grid max-w-4xl grid-cols-3 gap-2 sm:gap-6">
          {valueProps.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 px-2 py-3 sm:px-6 sm:py-4 backdrop-blur-sm"
            >
              <item.icon className="mx-auto mb-1.5 h-5 w-5 text-amber-400 sm:hidden" />
              <p className="text-[13px] leading-tight sm:text-lg font-semibold text-white">{item.label}</p>
              <p className="hidden sm:block text-sm text-white/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce md:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-2">
          <div className="h-3 w-1 animate-pulse rounded-full bg-white/50" />
        </div>
      </div>
    </section>
  )
}
