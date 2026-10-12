// Formulario de contacto de Academia Solar.
//
// Recibe la consulta desde la ruta /api/contacto del sitio (server-side),
// la guarda en contact_messages (bandeja "academia", así aparece en el panel
// y dispara el aviso a administradores) y en crm_leads (con localidad y
// provincia), y envía dos emails por Amazon SES usando la configuración SMTP
// que ya existe en email_service.config:
//   1. aviso al equipo de la academia (ACADEMIA_NOTIFY_TO)
//   2. confirmación a la persona que escribió
//
// Supabase bloquea las conexiones salientes al puerto 587, por eso el envío
// usa SMTP con TLS implícito en el 465.
import postgres from "npm:postgres@3.4.5"
import nodemailer from "npm:nodemailer@6.9.16"

const DB_URL = Deno.env.get("SUPABASE_DB_URL")!
const NOTIFY_TO = Deno.env.get("ACADEMIA_NOTIFY_TO") ?? "info@solarpower.com.ar"
const SITE_URL = "https://www.academiasolar.com.ar"

const sql = postgres(DB_URL, { max: 1, prepare: false })

const PROVINCIAS = [
  "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba",
  "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones",
  "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe",
  "Santiago del Estero", "Tierra del Fuego", "Tucumán",
]

type Payload = {
  nombre: string
  email: string
  telefono: string | null
  localidad: string
  provincia: string
  curso: string
  mensaje: string
  consentimiento: boolean
  pagina: string | null
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  })
}

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.replace(/\s+/g, " ").trim().slice(0, max) : ""
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function parse(raw: Record<string, unknown>): { data?: Payload; error?: string } {
  const nombre = clean(raw.nombre, 120)
  const email = clean(raw.email, 160).toLowerCase()
  const telefono = clean(raw.telefono, 40).replace(/[^\d+\s()-]/g, "")
  const localidad = clean(raw.localidad, 100)
  const provincia = clean(raw.provincia, 60)
  const curso = clean(raw.curso, 120) || "Consulta general"
  const mensaje = typeof raw.mensaje === "string" ? raw.mensaje.trim().slice(0, 2000) : ""
  const pagina = clean(raw.pagina, 200) || null

  if (nombre.length < 3 || !nombre.includes(" ")) return { error: "Ingresá tu nombre y apellido." }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return { error: "Ingresá un email válido." }
  if (telefono && telefono.replace(/\D/g, "").length < 8) return { error: "Revisá el número de teléfono." }
  if (localidad.length < 2) return { error: "Ingresá tu localidad." }
  if (!PROVINCIAS.includes(provincia)) return { error: "Elegí tu provincia." }
  if (raw.consentimiento !== true) return { error: "Necesitamos tu autorización para contactarte." }

  return {
    data: { nombre, email, telefono: telefono || null, localidad, provincia, curso, mensaje, consentimiento: true, pagina },
  }
}

function row(label: string, value: string) {
  return `<tr><td style="padding:10px 12px;border-bottom:1px solid #eee;color:#5b6b88;font-size:13px;width:140px;vertical-align:top">${label}</td><td style="padding:10px 12px;border-bottom:1px solid #eee;color:#0b1324;font-size:15px">${value}</td></tr>`
}

function layout(title: string, body: string) {
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>${title}</title></head>
<body style="margin:0;background:#faf8f3;font-family:Arial,Helvetica,sans-serif">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#faf8f3;padding:24px 12px"><tr><td align="center">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden">
<tr><td style="background:#0b1324;padding:24px 28px">
<span style="font-size:22px;color:#ffffff;letter-spacing:-0.5px">academia</span><span style="font-size:22px;color:#fbbf24;font-weight:bold;letter-spacing:-0.5px">solar</span>
</td></tr>
<tr><td style="height:4px;background:linear-gradient(90deg,#f59e0b,#facc15,#22c55e);background-color:#f59e0b"></td></tr>
<tr><td style="padding:28px">${body}</td></tr>
<tr><td style="padding:18px 28px;background:#f1ede4;color:#5b6b88;font-size:12px">Academia Solar · Una iniciativa de SolarPower Argentina · <a href="${SITE_URL}" style="color:#b45309">academiasolar.com.ar</a></td></tr>
</table></td></tr></table></body></html>`
}

function internalEmail(d: Payload, id: number) {
  const mensaje = d.mensaje ? escapeHtml(d.mensaje).replace(/\n/g, "<br>") : "<em>Sin mensaje</em>"
  const body = `<h1 style="margin:0 0 6px;font-size:22px;color:#0b1324">Nuevo contacto desde la web</h1>
<p style="margin:0 0 18px;color:#5b6b88;font-size:14px">Bandeja Academia · contacto #${id}</p>
<table role="presentation" width="100%" cellspacing="0" cellpadding="0">
${row("Nombre", escapeHtml(d.nombre))}
${row("Email", `<a href="mailto:${escapeHtml(d.email)}" style="color:#b45309">${escapeHtml(d.email)}</a>`)}
${row("Teléfono", d.telefono ? escapeHtml(d.telefono) : "—")}
${row("Localidad", escapeHtml(d.localidad))}
${row("Provincia", escapeHtml(d.provincia))}
${row("Curso de interés", escapeHtml(d.curso))}
${row("Mensaje", mensaje)}
${row("Página", d.pagina ? escapeHtml(d.pagina) : "—")}
</table>
<p style="margin:18px 0 0;color:#5b6b88;font-size:13px">Respondé este email para contestarle directamente.</p>`
  const text = [
    `Nuevo contacto desde academiasolar.com.ar (#${id})`,
    `Nombre: ${d.nombre}`,
    `Email: ${d.email}`,
    `Teléfono: ${d.telefono ?? "-"}`,
    `Localidad: ${d.localidad}`,
    `Provincia: ${d.provincia}`,
    `Curso de interés: ${d.curso}`,
    `Mensaje: ${d.mensaje || "-"}`,
  ].join("\n")
  return { html: layout("Nuevo contacto Academia Solar", body), text }
}

function confirmationEmail(d: Payload) {
  const firstName = escapeHtml(d.nombre.split(" ")[0])
  const body = `<h1 style="margin:0 0 12px;font-size:24px;color:#0b1324">¡Gracias por escribirnos, ${firstName}!</h1>
<p style="margin:0 0 14px;color:#2a3a5a;font-size:16px;line-height:1.6">Recibimos tu consulta sobre <strong>${escapeHtml(d.curso)}</strong>. Un integrante del equipo de Academia Solar te va a responder por email a la brevedad.</p>
<p style="margin:0 0 22px;color:#2a3a5a;font-size:16px;line-height:1.6">Mientras tanto, podés empezar con el curso gratuito de Introducción a la Energía Solar.</p>
<a href="${SITE_URL}/cursos/introduccion" style="display:inline-block;background:#f59e0b;color:#0b1324;text-decoration:none;font-weight:bold;padding:13px 22px;border-radius:999px">Ver el curso gratuito</a>
<p style="margin:26px 0 8px;color:#5b6b88;font-size:13px">Estos son los datos que nos dejaste:</p>
<table role="presentation" width="100%" cellspacing="0" cellpadding="0">
${row("Email", escapeHtml(d.email))}
${row("Teléfono", d.telefono ? escapeHtml(d.telefono) : "—")}
${row("Localidad", `${escapeHtml(d.localidad)}, ${escapeHtml(d.provincia)}`)}
</table>`
  const text = `¡Gracias por escribirnos, ${d.nombre.split(" ")[0]}!\n\nRecibimos tu consulta sobre ${d.curso}. Un integrante del equipo de Academia Solar te va a responder por email a la brevedad.\n\nCurso gratuito: ${SITE_URL}/cursos/introduccion`
  return { html: layout("Recibimos tu consulta", body), text }
}

async function sendEmails(d: Payload, id: number) {
  const [config] = await sql`select smtp_host, smtp_user, smtp_password, smtp_from from email_service.config limit 1`
  if (!config) throw new Error("Falta email_service.config")

  const transporter = nodemailer.createTransport({
    host: config.smtp_host,
    port: 465,
    secure: true,
    auth: { user: config.smtp_user, pass: config.smtp_password },
  })
  const from = `"Academia Solar" <${config.smtp_from}>`

  const internal = internalEmail(d, id)
  const confirmation = confirmationEmail(d)
  const results = await Promise.allSettled([
    transporter.sendMail({
      from,
      to: NOTIFY_TO,
      replyTo: d.email,
      subject: `Nuevo contacto Academia Solar: ${d.nombre} · ${d.curso}`,
      html: internal.html,
      text: internal.text,
    }),
    transporter.sendMail({
      from,
      to: d.email,
      replyTo: NOTIFY_TO,
      subject: "Recibimos tu consulta · Academia Solar",
      html: confirmation.html,
      text: confirmation.text,
    }),
  ])
  results.forEach((r, i) => {
    if (r.status === "rejected") console.error(`email ${i === 0 ? "interno" : "confirmación"} falló:`, r.reason)
  })
  return results.map((r) => r.status === "fulfilled")
}

Deno.serve(async (req) => {
  if (req.method !== "POST") return json({ ok: false, error: "Método no permitido" }, 405)

  let raw: Record<string, unknown>
  try {
    raw = await req.json()
  } catch {
    return json({ ok: false, error: "Solicitud inválida." }, 400)
  }

  const { data, error } = parse(raw)
  if (!data) return json({ ok: false, error }, 422)

  // Límite simple contra envíos repetidos: 3 por email cada 10 minutos.
  const [{ recientes }] = await sql`
    select count(*)::int as recientes from public.contact_messages
    where email = ${data.email} and bandeja = 'academia' and created_at > now() - interval '10 minutes'`
  if (recientes >= 3) {
    return json({ ok: false, error: "Ya recibimos tus consultas. Te vamos a responder a la brevedad." }, 429)
  }

  const direccion = `${data.localidad}, ${data.provincia}`
  const mensaje = data.mensaje || `Consulta sobre ${data.curso} desde academiasolar.com.ar`

  const id = await sql.begin(async (tx) => {
    const [cm] = await tx`
      insert into public.contact_messages
        (name, email, phone, message, type, status, created_at, updated_at, bandeja, bandeja_source,
         category, subcategory, interest, address, consent, external_id, last_activity_at)
      values
        (${data.nombre}, ${data.email}, ${data.telefono}, ${mensaje}, 'CONTACT', 'NEW', now(), now(), 'academia', 'form',
         'academia', ${data.curso}, 'informacion', ${direccion}, ${data.consentimiento}, 'academiasolar.com.ar', now())
      returning id`
    await tx`
      insert into public.crm_leads
        (name, email, phone, status, source, product_category, priority, contact_message_id, city, province, notes,
         last_interaction_date, last_interaction_type)
      values
        (${data.nombre}, ${data.email}, ${data.telefono}, 'nuevo', 'academiasolar.com.ar', 'academia', 'media', ${cm.id},
         ${data.localidad}, ${data.provincia}, ${`Curso: ${data.curso}\n${data.mensaje}`.trim()}, now(), 'formulario_web')`
    return cm.id as number
  })

  let emails = [false, false]
  try {
    emails = await sendEmails(data, id)
  } catch (err) {
    // El contacto ya quedó guardado: un fallo de email no debe perder la consulta.
    console.error("envío de emails falló:", err)
  }

  return json({ ok: true, id, emails: { equipo: emails[0], confirmacion: emails[1] } })
})
