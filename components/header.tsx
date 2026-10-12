"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, ArrowRight, MessageCircle, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { whatsappUrl } from "@/lib/site"

const navLinks = [
  { href: "/#cursos", label: "Cursos" },
  { href: "/#beneficios", label: "Beneficios" },
  { href: "/blog", label: "Blog" },
  { href: "/#testimonios", label: "Testimonios" },
  { href: "/#faq", label: "FAQ" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Solo la home tiene un hero oscuro detras del header; en el resto de las
  // paginas el header siempre es solido para que el menu sea legible.
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
          overHero
            ? "bg-gradient-to-b from-black/50 to-transparent"
            : "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
        }`}
      >
        <nav
          aria-label="Principal"
          className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
            overHero ? "h-20" : "h-16 lg:h-[72px]"
          }`}
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center" aria-label="Academia Solar - Inicio">
              <Image
                src={overHero ? "/images/academia-solar-logo-light.png" : "/images/academia-solar-logo-sm.png"}
                alt="Academia Solar"
                width={439}
                height={160}
                className={`w-auto transition-all duration-300 ${overHero ? "h-11 sm:h-12" : "h-9 sm:h-10"}`}
                priority
              />
            </Link>
          </div>

          <div className="hidden lg:flex lg:gap-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  overHero
                    ? "text-white/85 hover:text-white"
                    : pathname.startsWith(link.href) && link.href !== "/"
                      ? "text-foreground"
                      : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://www.solarpower.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-medium transition-colors ${
                overHero ? "text-white/85 hover:text-white" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              SolarPower
            </Link>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3">
            <Button
              variant="ghost"
              asChild
              className={
                overHero
                  ? "text-white bg-white/15 hover:bg-white/25 hover:text-white border border-white/30"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              }
            >
              <Link href="https://www.solarpower.com.ar/login" target="_blank" rel="noopener noreferrer">
                Iniciar Sesion
              </Link>
            </Button>
            <Button
              asChild
              className="btn-electric bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold transition-all duration-200 hover:scale-[1.03] hover:shadow-lg hover:shadow-amber-400/40"
            >
              <Link href="/cursos/introduccion">Empezar Gratis</Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            {!mobileMenuOpen && (
              <Button
                asChild
                size="sm"
                className="h-9 rounded-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-4"
              >
                <Link href="/cursos/introduccion">Gratis</Link>
              </Button>
            )}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
                overHero ? "text-white hover:bg-white/15" : "text-foreground hover:bg-muted"
              }`}
            >
              <span className="sr-only">{mobileMenuOpen ? "Cerrar menu" : "Abrir menu"}</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu: va fuera del header porque su backdrop-blur recortaria un hijo fixed */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-background overflow-y-auto overscroll-contain animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex min-h-full flex-col px-4 sm:px-6 pt-4 pb-safe">
            <ul className="divide-y divide-border">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between py-4 text-lg font-semibold text-foreground active:text-amber-600"
                  >
                    {link.label}
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="https://www.solarpower.com.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-4 text-lg font-semibold text-foreground"
                >
                  SolarPower
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </Link>
              </li>
            </ul>

            <div className="mt-6 rounded-2xl bg-gradient-to-br from-amber-50 to-green-50 border border-amber-200/60 p-5">
              <p className="font-semibold text-slate-900">Empeza hoy, sin costo</p>
              <p className="text-sm text-slate-600 mt-1 mb-4">
                Curso de Introduccion a la Energia Solar: 2 horas, 100% online.
              </p>
              <Button
                asChild
                size="lg"
                className="w-full h-12 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold"
              >
                <Link href="/cursos/introduccion" onClick={closeMenu}>
                  Empezar Gratis
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 pb-6">
              <Button variant="outline" asChild className="h-12 rounded-xl border-slate-300 text-slate-700">
                <Link href="https://www.solarpower.com.ar/login" target="_blank" rel="noopener noreferrer">
                  Iniciar Sesion
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="h-12 rounded-xl border-green-300 text-green-700 hover:bg-green-50 hover:text-green-800"
              >
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
