"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/#cursos", label: "Cursos" },
  { href: "/#beneficios", label: "Beneficios" },
  { href: "/#testimonios", label: "Testimonios" },
  { href: "/#faq", label: "FAQ" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <Image
              src="/images/academia-solar-logo.png"
              alt="Academia Solar"
              width={200}
              height={80}
              className={`h-12 w-auto transition-all duration-300 ${scrolled ? "opacity-100" : "opacity-90 hover:opacity-100"}`}
              priority
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors ${
              scrolled ? "text-foreground" : "text-background"
            }`}
          >
            <span className="sr-only">Abrir menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                scrolled 
                  ? "text-foreground/80 hover:text-foreground" 
                  : "text-background/80 hover:text-background"
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
              scrolled 
                ? "text-foreground/80 hover:text-foreground" 
                : "text-background/80 hover:text-background"
            }`}
          >
            SolarPower
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button 
            variant="ghost" 
            asChild 
            className={scrolled 
              ? "text-slate-700 hover:text-slate-900 hover:bg-slate-100" 
              : "text-white bg-white/20 hover:bg-white/30 border border-white/30"
            }
          >
            <Link href="https://www.solarpower.com.ar/login" target="_blank" rel="noopener noreferrer">
              Iniciar Sesion
            </Link>
          </Button>
          <Button asChild className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
            <Link href="/cursos/introduccion">
              Empezar Gratis
            </Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-base font-medium text-foreground/80 hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://www.solarpower.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg px-3 py-2 text-base font-medium text-foreground/80 hover:bg-muted hover:text-foreground"
            >
              SolarPower
            </Link>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="outline" asChild className="w-full border-slate-300 text-slate-700 hover:bg-slate-100">
                <Link href="https://www.solarpower.com.ar/login" target="_blank" rel="noopener noreferrer">
                  Iniciar Sesion
                </Link>
              </Button>
              <Button asChild className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
                <Link href="/cursos/introduccion" onClick={() => setMobileMenuOpen(false)}>
                  Empezar Gratis
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
