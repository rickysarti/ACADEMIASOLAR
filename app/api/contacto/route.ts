import { NextResponse } from "next/server"
import { FunctionsHttpError } from "@supabase/supabase-js"
import { supabase } from "@/lib/supabase/client"
import { CONTACT_TOPICS } from "@/lib/site"

// El guardado (contact_messages + crm_leads) y los emails los hace la Edge
// Function "academia-contact" (supabase/functions/academia-contact), que usa
// la configuración SMTP ya cargada en Supabase. Esta ruta solo filtra bots y
// reenvía la consulta desde el servidor.

const MIN_FILL_MS = 2500

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: "Solicitud inválida." }, { status: 400 })
  }

  // Campo trampa invisible y tiempo mínimo de llenado: si parece un bot,
  // respondemos OK sin guardar nada para no darle pistas.
  const elapsed = Number(body.elapsedMs)
  if (body.sitioWeb || !Number.isFinite(elapsed) || elapsed < MIN_FILL_MS) {
    return NextResponse.json({ ok: true })
  }

  const topic = CONTACT_TOPICS.find((t) => t.slug === body.curso) ?? CONTACT_TOPICS[CONTACT_TOPICS.length - 1]

  const { data, error } = await supabase.functions.invoke("academia-contact", {
    body: {
      nombre: body.nombre,
      email: body.email,
      telefono: body.telefono,
      localidad: body.localidad,
      provincia: body.provincia,
      curso: topic.label,
      mensaje: body.mensaje,
      consentimiento: body.consentimiento === true,
      pagina: request.headers.get("referer"),
    },
  })

  if (error) {
    if (error instanceof FunctionsHttpError) {
      const status = error.context.status
      const detail = await error.context.json().catch(() => null)
      if (status === 422 || status === 429) {
        return NextResponse.json({ ok: false, error: detail?.error ?? "Revisá los datos." }, { status })
      }
    }
    console.error("academia-contact falló:", error)
    return NextResponse.json(
      { ok: false, error: "No pudimos enviar tu consulta. Probá de nuevo en unos minutos." },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: Boolean(data?.ok) })
}
