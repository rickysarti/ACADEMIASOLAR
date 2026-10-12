import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Building2, HardHat, MapPinned } from "lucide-react"
import { Eyebrow } from "@/components/brand/section"

const facts = [
  {
    icon: HardHat,
    title: "Obras activas para practicar",
    text: "Las prácticas se hacen en instalaciones reales de SolarPower, no en maquetas ni simuladores.",
  },
  {
    icon: Building2,
    title: "Docentes que trabajan en el sector",
    text: "Las clases las da el equipo de SolarPower Argentina: gente que diseña, vende e instala todos los días.",
  },
  {
    icon: MapPinned,
    title: "Instalaciones que podés ver",
    text: "Conocé dónde trabaja SolarPower en el mapa público de instalaciones.",
    href: "https://www.solarpower.com.ar/mapa-instalaciones",
    cta: "Ver mapa de instalaciones",
  },
]

// Reemplaza la antigua sección de testimonios: solo información verificable,
// sin reseñas ni cifras que no podamos respaldar.
export function Backing() {
  return (
    <section id="respaldo" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/course-diploma.jpg"
                alt="Profesional certificado en energía solar frente a una instalación"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-5 right-5 rounded-2xl bg-ink-950 p-5 text-white shadow-2xl sm:left-auto sm:right-6 sm:max-w-xs">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sol-300">Una iniciativa de</p>
              <p className="mt-1 font-display text-xl font-bold">SolarPower Argentina</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Eyebrow>Respaldo real</Eyebrow>
            <h2 className="mt-3 text-[2rem] font-bold leading-[1.08] text-ink-950 sm:text-4xl lg:text-[3.25rem]">
              Detrás de la academia hay una empresa que instala todos los días
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-700">
              Academia Solar es la unidad de formación de SolarPower Argentina. Lo que enseñamos es lo que
              hacemos en cada obra.
            </p>

            <ul className="mt-8 grid gap-5">
              {facts.map((fact) => (
                <li key={fact.title} className="flex gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-verde-100">
                    <fact.icon className="h-5 w-5 text-verde-700" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-ink-950">{fact.title}</h3>
                    <p className="mt-1 text-ink-700">{fact.text}</p>
                    {fact.href && (
                      <Link
                        href={fact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 font-semibold text-verde-700 underline-offset-4 hover:underline"
                      >
                        {fact.cta}
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
