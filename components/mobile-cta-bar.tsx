"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowRight, Mail } from "lucide-react"
import { CONTACT_URL } from "@/lib/site"

interface MobileCtaBarProps {
  label?: string
  href?: string
  external?: boolean
  contactHref?: string
}

// Barra de acción fija en teléfonos: aparece al bajar del primer pantallazo
// y deja siempre a mano la inscripción y el formulario de contacto.
// El footer reserva espacio extra abajo en mobile para que la barra no lo tape.
export function MobileCtaBar({
  label = "Empezar gratis",
  href = "/cursos/introduccion",
  external = false,
  contactHref = CONTACT_URL,
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
      className={`fixed inset-x-0 bottom-0 z-40 lg:hidden border-t border-ink-950/8 bg-paper/95 backdrop-blur-xl shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.25)] pb-safe transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <Link
          href={contactHref}
          aria-label="Escribinos"
          tabIndex={visible ? 0 : -1}
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-ink-950 text-white active:bg-ink-800"
        >
          <Mail className="h-5 w-5" />
        </Link>
        <Link
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          tabIndex={visible ? 0 : -1}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-sol-500 font-semibold text-ink-950 shadow-lg shadow-sol-500/25 active:bg-sol-400"
        >
          {label}
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}
