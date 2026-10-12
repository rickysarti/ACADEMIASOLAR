import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Logo } from "@/components/brand/logo"
import { CONTACT_EMAIL, CONTACT_URL } from "@/lib/site"

type FooterLink = { label: string; href: string; external?: boolean }

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Programas",
    links: [
      { label: "Instalador Solar", href: "/cursos/instalador-solar" },
      { label: "Analista Solar", href: "/cursos/analista-solar" },
      { label: "Vendedor Solar", href: "/cursos/vendedor-solar" },
      { label: "Diplomatura Integral", href: "/cursos/diplomatura-integral" },
      { label: "Curso gratuito", href: "/cursos/introduccion" },
    ],
  },
  {
    title: "Academia",
    links: [
      { label: "Método", href: "/#metodo" },
      { label: "Cómo funciona", href: "/#como-funciona" },
      { label: "Blog", href: "/blog" },
      { label: "Preguntas frecuentes", href: "/#faq" },
      { label: "Contacto", href: CONTACT_URL },
      { label: "Identidad de marca", href: "/marca" },
    ],
  },
  {
    title: "SolarPower",
    links: [
      { label: "Sobre SolarPower", href: "https://www.solarpower.com.ar/solarpower", external: true },
      { label: "Mapa de instalaciones", href: "https://www.solarpower.com.ar/mapa-instalaciones", external: true },
      { label: "¿Sos instalador?", href: "https://www.solarpower.com.ar/solarpower/sos-instalador", external: true },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white">
      <div className="bg-celdas absolute inset-0 text-white/[0.03]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-28 sm:px-6 lg:px-8 lg:pb-12">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link href="/" aria-label="Academia Solar - Inicio" className="inline-block">
              <Logo tone="light" />
            </Link>
            <p className="mt-5 max-w-sm text-white/65">
              Escuela de energía solar de SolarPower Argentina. Formación con práctica en terreno y laboratorio, IA
              aplicada y conexión con el sector.
            </p>
            <div className="mt-6 space-y-1.5 text-sm">
              <Link href={CONTACT_URL} className="block text-white/80 hover:text-sol-300">
                Formulario de contacto
              </Link>
              <a href={`mailto:${CONTACT_EMAIL}`} className="block text-white/80 hover:text-sol-300">
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-sol-300">{column.title}</h4>
                <ul className="mt-4 space-y-1">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1 py-1.5 text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {link.label}
                        {link.external && <ArrowUpRight className="h-3.5 w-3.5 text-white/40" />}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Academia Solar · Una iniciativa de SolarPower Argentina.</p>
          <div className="flex gap-6">
            <Link
              href="https://www.solarpower.com.ar/privacidad"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
