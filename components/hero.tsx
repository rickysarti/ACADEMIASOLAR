"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Cpu, FlaskConical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Eyebrow } from "@/components/brand/section"

const roles = ["Instalador", "Diseñador", "Vendedor", "Analista"]

const proofs = ["Cupos gratuitos", "Práctica en terreno y laboratorio", "IA en todos los cursos"]

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
      }, 350)
    }, 2600)
    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div className="halo-sol absolute inset-0" aria-hidden="true" />
      <div className="bg-celdas absolute inset-0 text-white/[0.04]" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pt-28 pb-16 sm:px-6 sm:pt-32 lg:min-h-[100svh] lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-8 lg:pb-24">
        {/* Texto */}
        <div>
          <Eyebrow tone="light">Escuela de energía solar · Argentina</Eyebrow>

          <h1 className="mt-5 text-[2.65rem] font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
            Convertite en{" "}
            <span className="inline-grid align-bottom" aria-live="polite">
              {roles.map((role, i) => (
                <span
                  key={role}
                  aria-hidden={i !== currentRole}
                  className={`text-amanecer [grid-area:1/1] transition-all duration-300 ${
                    i === currentRole
                      ? isAnimating
                        ? "translate-y-3 opacity-0"
                        : "translate-y-0 opacity-100"
                      : "pointer-events-none select-none opacity-0"
                  }`}
                >
                  {role}
                </span>
              ))}
            </span>{" "}
            solar.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Argentina necesita miles de profesionales solares. Te formamos con práctica en terreno y en nuestros
            laboratorios de pruebas, herramientas de IA y acceso a la red de trabajo del sector.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="sol" size="xl">
              <Link href="/cursos/introduccion">
                Empezar el curso gratis
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link href="#cursos">Ver programas</Link>
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2.5">
            {proofs.map((proof) => (
              <li key={proof} className="flex items-center gap-2 text-sm text-white/80">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-verde-500/20">
                  <Check className="h-3 w-3 text-verde-400" strokeWidth={3} />
                </span>
                {proof}
              </li>
            ))}
          </ul>
        </div>

        {/* Imagen */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="bg-amanecer absolute -top-8 -right-8 h-48 w-48 rounded-full opacity-40 blur-3xl sm:h-64 sm:w-64" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-white/15 sm:aspect-[5/6]">
            <Image
              src="/images/hero-solar-installation.jpg"
              alt="Equipo de SolarPower instalando paneles solares en Buenos Aires"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
            <div className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5">
              <p className="font-display text-lg font-bold leading-tight sm:text-xl">No aprendés solo en un aula.</p>
              <p className="font-display text-lg font-bold leading-tight text-sol-300 sm:text-xl">Practicás en terreno.</p>
            </div>
          </div>

          <div className="absolute -left-3 top-8 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-ink-950 shadow-2xl sm:-left-8">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sol-100">
              <FlaskConical className="h-5 w-5 text-sol-700" />
            </span>
            <span className="text-sm font-semibold leading-tight">
              Laboratorio
              <br />
              de pruebas
            </span>
          </div>
          <div className="absolute -right-3 top-1/2 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-ink-950 shadow-2xl sm:-right-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-verde-100">
              <Cpu className="h-5 w-5 text-verde-700" />
            </span>
            <span className="text-sm font-semibold leading-tight">
              IA aplicada
              <br />
              al sector
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
