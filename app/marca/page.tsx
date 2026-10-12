import type { Metadata } from "next"
import Link from "next/link"
import { Download } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Logo, LogoMark } from "@/components/brand/logo"
import { Eyebrow } from "@/components/brand/section"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Identidad de marca | Academia Solar",
  description: "Logo, colores, tipografía y criterios de uso de la marca Academia Solar.",
  alternates: { canonical: "/marca" },
  robots: { index: false, follow: true },
}

const colors = [
  { name: "Sol", hex: "#F59E0B", use: "Acción principal, botones y acentos", className: "bg-sol-500 text-ink-950" },
  { name: "Rayo", hex: "#FACC15", use: "Brillo del degradé amanecer", className: "bg-rayo text-ink-950" },
  { name: "Verde", hex: "#16A34A", use: "Gratuito, confirmaciones, WhatsApp", className: "bg-verde-600 text-white" },
  { name: "Ink", hex: "#0B1324", use: "Texto y superficies oscuras", className: "bg-ink-950 text-white" },
  { name: "Paper", hex: "#FAF8F3", use: "Fondo general cálido", className: "bg-paper text-ink-950 ring-1 ring-inset ring-ink-950/10" },
  { name: "Arena", hex: "#F1EDE4", use: "Fondos de sección alternos", className: "bg-arena text-ink-950" },
]

const principles = [
  {
    title: "Práctico antes que pretencioso",
    text: "Hablamos como alguien que está arriba del techo: claro, directo y con voseo argentino.",
  },
  {
    title: "Honesto siempre",
    text: "Nada de reseñas inventadas ni cifras que no podamos respaldar. Mostramos obras, programas y personas reales.",
  },
  {
    title: "Optimista y concreto",
    text: "La energía solar es futuro, pero lo contamos con pasos, plazos y resultados tangibles.",
  },
]

const downloads = [
  { label: "Logo para fondo claro (PNG)", href: "/brand/academia-solar-logo.png" },
  { label: "Logo para fondo oscuro (PNG)", href: "/brand/academia-solar-logo-blanco.png" },
  { label: "Isotipo (SVG)", href: "/brand/academia-solar-isotipo.svg" },
]

export default function MarcaPage() {
  return (
    <>
      <Header />
      <main className="bg-paper pt-16 lg:pt-[72px]">
        {/* Intro */}
        <section className="relative overflow-hidden bg-ink-950 text-white">
          <div className="halo-sol absolute inset-0" aria-hidden="true" />
          <div className="bg-celdas absolute inset-0 text-white/[0.04]" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8">
            <div>
              <Eyebrow tone="light">Identidad de marca</Eyebrow>
              <h1 className="mt-4 text-[2.25rem] font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
                Ascenso: <span className="text-amanecer">la marca de Academia Solar</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg text-white/75">
                Una identidad propia, independiente del logo de SolarPower, que comparte su paleta de colores
                para mostrar que somos parte de la misma familia.
              </p>
            </div>
            <div className="flex items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 sm:p-16">
              <LogoMark tone="light" className="h-40 w-40 sm:h-52 sm:w-52" />
            </div>
          </div>
        </section>

        {/* Isotipo */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>El isotipo</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold text-ink-950 sm:text-4xl">Una A que sube hacia el sol</h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-700">
                <p>
                  Dos trazos firmes forman una <strong className="text-ink-950">A de Academia</strong> que asciende hacia
                  un <strong className="text-sol-700">sol</strong>. El travesaño es una línea de{" "}
                  <strong className="text-verde-700">horizonte verde</strong>: energía limpia y crecimiento.
                </p>
                <p>
                  Leída de otra forma, es una persona con los brazos abiertos y el sol como cabeza: el estudiante que
                  se forma en el oficio y se proyecta hacia arriba.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex aspect-square items-center justify-center rounded-3xl bg-white ring-1 ring-ink-950/8">
                <LogoMark className="h-24 w-24" />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-3xl bg-ink-950">
                <LogoMark tone="light" className="h-24 w-24" />
              </div>
              <div className="col-span-2 flex items-center justify-center rounded-3xl bg-white px-6 py-10 ring-1 ring-ink-950/8">
                <Logo markClassName="h-12 w-12 sm:h-14 sm:w-14" className="[&>span:last-child]:text-3xl sm:[&>span:last-child]:text-4xl" />
              </div>
              <div className="col-span-2 flex items-center justify-center rounded-3xl bg-ink-950 px-6 py-10">
                <Logo tone="light" markClassName="h-12 w-12 sm:h-14 sm:w-14" className="[&>span:last-child]:text-3xl sm:[&>span:last-child]:text-4xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Color */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Eyebrow>Color</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-ink-950 sm:text-4xl">La paleta de SolarPower, con voz propia</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {colors.map((color) => (
                <div key={color.name} className="overflow-hidden rounded-3xl ring-1 ring-ink-950/8">
                  <div className={`flex h-32 items-end p-5 ${color.className}`}>
                    <span className="font-display text-2xl font-bold">{color.name}</span>
                  </div>
                  <div className="bg-white p-5">
                    <p className="font-mono text-sm font-semibold text-ink-950">{color.hex}</p>
                    <p className="mt-1 text-sm text-ink-700">{color.use}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 overflow-hidden rounded-3xl ring-1 ring-ink-950/8">
              <div className="bg-amanecer h-24" />
              <div className="bg-white p-5">
                <p className="font-display text-lg font-bold text-ink-950">Degradé “amanecer”</p>
                <p className="mt-1 text-sm text-ink-700">
                  Sol → Rayo → Verde. Solo para palabras clave en titulares y detalles; nunca como fondo de texto largo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tipografía */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Eyebrow>Tipografía</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-ink-950 sm:text-4xl">Dos familias, roles claros</h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-7 ring-1 ring-ink-950/8">
              <p className="text-sm font-semibold text-sol-700">Títulos y logo</p>
              <p className="mt-3 font-display text-5xl font-extrabold tracking-tight text-ink-950">Bricolage Grotesque</p>
              <p className="mt-4 font-display text-2xl text-ink-700">Aa Bb Cc 0123 — Aprendé en el techo.</p>
            </div>
            <div className="rounded-3xl bg-white p-7 ring-1 ring-ink-950/8">
              <p className="text-sm font-semibold text-sol-700">Textos e interfaz</p>
              <p className="mt-3 text-5xl font-semibold tracking-tight text-ink-950">Inter</p>
              <p className="mt-4 text-lg text-ink-700">
                Legible en pantallas chicas, ideal para párrafos, botones y formularios.
              </p>
            </div>
          </div>
        </section>

        {/* Voz */}
        <section className="bg-arena py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Eyebrow>Voz y tono</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-ink-950 sm:text-4xl">Cómo hablamos</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {principles.map((p, i) => (
                <div key={p.title} className="rounded-3xl bg-white p-7 ring-1 ring-ink-950/8">
                  <span className="font-display text-4xl font-extrabold text-amanecer">0{i + 1}</span>
                  <h3 className="mt-4 text-xl font-bold text-ink-950">{p.title}</h3>
                  <p className="mt-2 text-ink-700">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Descargas */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Eyebrow>Descargas</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-ink-950 sm:text-4xl">Archivos de marca</h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {downloads.map((d) => (
              <Button key={d.href} asChild variant="line" size="xl">
                <Link href={d.href} download>
                  <Download className="h-5 w-5" />
                  {d.label}
                </Link>
              </Button>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
