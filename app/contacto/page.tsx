import type { Metadata } from "next"
import { Clock, Mail, MapPin, ShieldCheck } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Eyebrow } from "@/components/brand/section"
import { CONTACT_EMAIL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contacto | Academia Solar",
  description:
    "Escribinos para consultar por cursos, cupos gratuitos, fechas y capacitación para empresas. Te respondemos por email.",
  alternates: { canonical: "/contacto" },
}

export default async function ContactoPage({
  searchParams,
}: {
  searchParams: Promise<{ curso?: string }>
}) {
  const { curso } = await searchParams

  return (
    <>
      <Header />
      <main className="bg-paper pt-16 lg:pt-[72px]">
        <section className="relative overflow-hidden bg-ink-950 text-white">
          <div className="halo-sol absolute inset-0" aria-hidden="true" />
          <div className="bg-celdas absolute inset-0 text-white/[0.04]" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-28 sm:px-6 sm:pt-16 lg:px-8 lg:pb-32">
            <Eyebrow tone="light">Contacto</Eyebrow>
            <h1 className="mt-4 max-w-3xl text-[2.25rem] font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Hablemos de tu <span className="text-amanecer">futuro solar</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base text-white/75 sm:text-lg">
              Dejanos tus datos y contanos qué te interesa. Te respondemos por email con fechas, cupos gratuitos y
              requisitos.
            </p>
          </div>
        </section>

        <section className="relative mx-auto -mt-20 grid max-w-7xl gap-6 px-4 pb-20 sm:px-6 lg:-mt-24 lg:grid-cols-[1.6fr_1fr] lg:gap-8 lg:px-8 lg:pb-28">
          <ContactForm initialTopic={curso} />

          <aside className="space-y-4 lg:pt-4">
            <div className="rounded-[2rem] bg-white p-6 ring-1 ring-ink-950/8 sm:p-7">
              <h2 className="text-xl font-bold text-ink-950">Otros datos</h2>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-sol-100">
                    <Mail className="h-5 w-5 text-sol-700" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-ink-500">Email</span>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-ink-950 hover:text-sol-700">
                      {CONTACT_EMAIL}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-arena">
                    <MapPin className="h-5 w-5 text-ink-800" />
                  </span>
                  <span>
                    <span className="block text-sm text-ink-500">Ubicación</span>
                    <span className="font-semibold text-ink-950">Buenos Aires, Argentina</span>
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-arena">
                    <Clock className="h-5 w-5 text-ink-800" />
                  </span>
                  <span>
                    <span className="block text-sm text-ink-500">Horario de respuesta</span>
                    <span className="font-semibold text-ink-950">Lun a Vie de 9 a 18 h</span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex gap-4 rounded-[2rem] bg-verde-50 p-6 ring-1 ring-verde-100">
              <ShieldCheck className="h-6 w-6 flex-shrink-0 text-verde-700" />
              <p className="text-sm text-ink-700">
                Usamos tus datos solo para responder tu consulta y contarte sobre nuestros cursos.
              </p>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  )
}
