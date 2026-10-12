"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, ArrowRight, MessageCircle, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/brand/logo"
import { whatsappUrl } from "@/lib/site"

const navLinks = [
  { href: "/#cursos", label: "Cursos" },
  { href: "/#metodo", label: "Método" },
  { href: "/#como-funciona", label: "Cómo funciona" },
  { href: "/blog", label: "Blog" },
  { href: "/#faq", label: "Preguntas" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Solo la home tiene un hero oscuro detrás del header; en el resto de las
  // páginas el header siempre es sólido para que el menú sea legible.
  const overHero = pathname === "/" && !scrolled && !mobileMenuOpen

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!mobileMenuOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("resize", onResize)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("resize", onResize)
    }
  }, [mobileMenuOpen])

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          overHero ? "bg-transparent" : "bg-paper/90 backdrop-blur-xl border-b border-ink-950/8"
        }`}
      >
        <nav
          aria-label="Principal"
          className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
            overHero ? "h-20" : "h-16 lg:h-[72px]"
          }`}
        >
          <Link href="/" className="-m-1.5 rounded-lg p-1.5" aria-label="Academia Solar - Inicio">
            <Logo tone={overHero ? "light" : "dark"} markClassName={overHero ? "h-10 w-10" : "h-9 w-9"} />
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navLinks.map((link) => {
              const active = link.href === "/blog" && pathname.startsWith("/blog")
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    overHero
                      ? "text-white/80 hover:bg-white/10 hover:text-white"
                      : active
                        ? "bg-ink-950/5 text-ink-950"
                        : "text-ink-700 hover:bg-ink-950/5 hover:text-ink-950"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-2">
            <Link
              href="https://www.solarpower.com.ar/login"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                overHero ? "text-white/80 hover:text-white" : "text-ink-700 hover:text-ink-950"
              }`}
            >
              Ingresar
            </Link>
            <Button asChild variant="sol" className="h-10 px-5">
              <Link href="/cursos/introduccion">
                Empezar gratis
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-1.5 lg:hidden">
            {!mobileMenuOpen && (
              <Button asChild variant="sol" className="h-9 px-4 text-sm">
                <Link href="/cursos/introduccion">Gratis</Link>
              </Button>
            )}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
                overHero ? "text-white hover:bg-white/10" : "text-ink-950 hover:bg-ink-950/5"
              }`}
            >
              <span className="sr-only">{mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}</span>
              {mobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Menú mobile: va fuera del header porque su backdrop-blur recortaría un hijo fixed */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto overscroll-contain bg-paper animate-in fade-in slide-in-from-top-2 duration-200 lg:hidden"
        >
          <div className="flex min-h-full flex-col px-4 pt-2 pb-safe sm:px-6">
            <ul className="divide-y divide-ink-950/8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between py-4 font-display text-2xl font-semibold tracking-tight text-ink-950 active:text-sol-600"
                  >
                    {link.label}
                    <ChevronRight className="h-5 w-5 text-ink-300" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="relative mt-6 overflow-hidden rounded-3xl bg-ink-950 p-6 text-white">
              <div className="halo-sol absolute inset-0" aria-hidden="true" />
              <div className="relative">
                <p className="font-display text-xl font-bold">Empezá hoy, sin costo</p>
                <p className="mt-1 mb-5 text-sm text-white/70">
                  Introducción a la Energía Solar: 2 horas, 100% online.
                </p>
                <Button asChild variant="sol" size="xl" className="w-full">
                  <Link href="/cursos/introduccion" onClick={closeMenu}>
                    Empezar gratis
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3 pb-6">
              <Button asChild variant="line" size="xl">
                <Link href="https://www.solarpower.com.ar/login" target="_blank" rel="noopener noreferrer">
                  Ingresar
                </Link>
              </Button>
              <Button asChild variant="verde" size="xl">
                <Link href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
