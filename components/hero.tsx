"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const roles = ["Instalador", "Diseñador", "Vendedor", "Experto"]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length)
        setIsAnimating(false)
      }, 500)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-solar-installation.jpg"
          alt="Instalacion solar profesional"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-8">
          <Sparkles className="h-4 w-4 text-amber-400" />
          <span>Capacitacion con IA incluida en todos los cursos</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          <span className="block mb-2">Convertite en</span>
          <span className="flex items-baseline justify-center gap-4">
            <span className="inline-block w-[280px] md:w-[420px] lg:w-[500px] text-right">
              <span 
                className={`inline-block bg-gradient-to-r from-amber-400 via-yellow-400 to-green-400 bg-clip-text text-transparent transition-all duration-500 ${
                  isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}
              >
                {roles[currentRole]}
              </span>
            </span>
            <span className="text-white">Solar</span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-4 leading-relaxed">
          Argentina necesita miles de profesionales solares.
        </p>
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12">
          Formamos a los expertos del futuro con practicas reales en instalaciones de SolarPower 
          y la mejor salida laboral del mercado.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="btn-electric bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-900 font-semibold text-lg px-8 py-6 rounded-full shadow-2xl shadow-amber-500/40 transition-all duration-200 hover:scale-[1.03] hover:shadow-amber-400/60"
            asChild
          >
            <Link href="/cursos/introduccion">
              Curso Gratuito
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button 
            size="lg" 
            className="btn-electric-ghost bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/30 font-semibold text-lg px-8 py-6 rounded-full transition-all duration-200 hover:scale-[1.03]"
            asChild
          >
            <Link href="#cursos">
              <Play className="mr-2 h-5 w-5" />
              Ver Programas
            </Link>
          </Button>
        </div>

        {/* Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { label: "Practicas Reales", desc: "En instalaciones de SolarPower" },
            { label: "Cupos Gratuitos", desc: "Disponibles en todos los cursos" },
            { label: "Red Profesional", desc: "Acceso a la red de SolarPower" },
          ].map((item, i) => (
            <div 
              key={i}
              className="px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <p className="text-white font-semibold text-lg">{item.label}</p>
              <p className="text-white/60 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
