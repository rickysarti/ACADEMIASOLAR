"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, CheckCircle2, ChevronDown, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CONTACT_EMAIL, CONTACT_TOPICS, PROVINCIAS } from "@/lib/site"

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent"; nombre: string }
  | { kind: "error"; message: string }

const inputClass =
  "block w-full rounded-2xl border border-ink-950/12 bg-white px-4 py-3 text-base text-ink-950 placeholder:text-ink-300 transition focus:border-sol-500 focus:outline-none focus:ring-4 focus:ring-sol-500/15"

function Field({
  label,
  htmlFor,
  optional,
  children,
}: {
  label: string
  htmlFor: string
  optional?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 flex items-baseline justify-between text-sm font-semibold text-ink-950"
      >
        {label}
        {optional && <span className="text-xs font-normal text-ink-500">Opcional</span>}
      </label>
      {children}
    </div>
  )
}

function SelectWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <ChevronDown className="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-ink-500" />
    </div>
  )
}

export function ContactForm({ initialTopic }: { initialTopic?: string }) {
  const [status, setStatus] = useState<Status>({ kind: "idle" })
  const startedAt = useRef<number>(0)
  const topic = CONTACT_TOPICS.some((t) => t.slug === initialTopic) ? initialTopic : "general"

  useEffect(() => {
    startedAt.current = Date.now()
  }, [])

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const nombre = String(form.get("nombre") ?? "").trim()
    setStatus({ kind: "sending" })

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          email: form.get("email"),
          telefono: form.get("telefono"),
          localidad: form.get("localidad"),
          provincia: form.get("provincia"),
          curso: form.get("curso"),
          mensaje: form.get("mensaje"),
          consentimiento: form.get("consentimiento") === "on",
          sitioWeb: form.get("sitio_web"),
          elapsedMs: Date.now() - startedAt.current,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.ok) {
        setStatus({ kind: "error", message: data.error ?? "No pudimos enviar tu consulta. Probá de nuevo." })
        return
      }
      setStatus({ kind: "sent", nombre: nombre.split(" ")[0] })
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch {
      setStatus({ kind: "error", message: "Revisá tu conexión e intentá de nuevo." })
    }
  }

  if (status.kind === "sent") {
    return (
      <div className="rounded-[2rem] bg-white p-8 text-center ring-1 ring-ink-950/8 sm:p-12" role="status">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-verde-100">
          <CheckCircle2 className="h-7 w-7 text-verde-700" />
        </span>
        <h2 className="mt-5 text-2xl font-bold text-ink-950 sm:text-3xl">¡Gracias, {status.nombre}!</h2>
        <p className="mx-auto mt-3 max-w-md text-ink-700">
          Recibimos tu consulta. Te enviamos un email de confirmación y el equipo de Academia Solar te va a responder a
          la brevedad.
        </p>
        <Button asChild variant="sol" size="xl" className="mt-7">
          <Link href="/cursos/introduccion">
            Mientras tanto, mirá el curso gratuito
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    )
  }

  const sending = status.kind === "sending"

  return (
    <form onSubmit={onSubmit} className="rounded-[2rem] bg-white p-6 ring-1 ring-ink-950/8 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Field label="Nombre completo" htmlFor="nombre">
            <input
              id="nombre"
              name="nombre"
              required
              minLength={3}
              maxLength={120}
              autoComplete="name"
              placeholder="Nombre y apellido"
              className={inputClass}
            />
          </Field>
        </div>

        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={160}
            autoComplete="email"
            inputMode="email"
            placeholder="tu@email.com"
            className={inputClass}
          />
        </Field>

        <Field label="Teléfono" htmlFor="telefono" optional>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            maxLength={40}
            autoComplete="tel"
            inputMode="tel"
            placeholder="11 2345 6789"
            className={inputClass}
          />
        </Field>

        <Field label="Localidad" htmlFor="localidad">
          <input
            id="localidad"
            name="localidad"
            required
            minLength={2}
            maxLength={100}
            autoComplete="address-level2"
            placeholder="Ej.: Tigre"
            className={inputClass}
          />
        </Field>

        <Field label="Provincia" htmlFor="provincia">
          <SelectWrap>
            <select
              id="provincia"
              name="provincia"
              required
              defaultValue=""
              className={`${inputClass} appearance-none pr-11`}
            >
              <option value="" disabled>
                Elegí tu provincia
              </option>
              {PROVINCIAS.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </SelectWrap>
        </Field>

        <div className="sm:col-span-2">
          <Field label="¿Qué te interesa?" htmlFor="curso">
            <SelectWrap>
              <select id="curso" name="curso" defaultValue={topic} className={`${inputClass} appearance-none pr-11`}>
                {CONTACT_TOPICS.map((t) => (
                  <option key={t.slug} value={t.slug}>
                    {t.label}
                  </option>
                ))}
              </select>
            </SelectWrap>
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field label="Mensaje" htmlFor="mensaje" optional>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              maxLength={2000}
              placeholder="Contanos qué querés saber: fechas, cupos, requisitos…"
              className={`${inputClass} resize-y`}
            />
          </Field>
        </div>

        {/* Campo trampa para bots: invisible para personas */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="sitio_web">No completar</label>
          <input id="sitio_web" name="sitio_web" tabIndex={-1} autoComplete="off" />
        </div>

        <label className="flex items-start gap-3 text-sm text-ink-700 sm:col-span-2">
          <input
            type="checkbox"
            name="consentimiento"
            required
            className="mt-0.5 h-5 w-5 flex-shrink-0 rounded border-ink-950/20 accent-sol-500"
          />
          <span>
            Acepto que Academia Solar use estos datos para responder mi consulta y enviarme información sobre sus
            cursos.
          </span>
        </label>
      </div>

      {status.kind === "error" && (
        <p role="alert" className="mt-5 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {status.message}
        </p>
      )}

      <Button type="submit" variant="sol" size="xl" disabled={sending} className="mt-6 w-full sm:w-auto">
        {sending ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Enviando…
          </>
        ) : (
          <>
            Enviar consulta
            <ArrowRight className="h-5 w-5" />
          </>
        )}
      </Button>
      <p className="mt-4 text-xs text-ink-500">
        También podés escribirnos a{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-sol-700 underline-offset-2 hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </form>
  )
}
