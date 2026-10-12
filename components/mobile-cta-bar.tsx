"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowRight, MessageCircle } from "lucide-react"
import { whatsappUrl } from "@/lib/site"

interface MobileCtaBarProps {
  label?: string
  href?: string
  external?: boolean
  whatsappMessage?: string
}

// Barra de accion fija en telefonos: aparece al bajar del primer pantallazo
// y deja siempre a mano la inscripcion y el contacto por WhatsApp.
// El footer reserva espacio extra abajo en mobile para que la barra no lo tape.
export function MobileCtaBar({
  label = "Empezar Gratis",
  href = "/cursos/introduccion",
  external = false,
  whatsappMessage,
}: MobileCtaBarProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 lg:hidden border-t border-border bg-background/95 backdrop-blur-md shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.25)] pb-safe transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <Link
          href={whatsappUrl(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Consultar por WhatsApp"
          tabIndex={visible ? 0 : -1}
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-green-300 bg-green-50 text-green-700 active:bg-green-100"
        >
          <MessageCircle className="h-6 w-6" />
        </Link>
        <Link
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          tabIndex={visible ? 0 : -1}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 font-semibold text-slate-900 shadow-lg shadow-amber-500/25 active:from-amber-600 active:to-yellow-600"
        >
          {label}
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}
