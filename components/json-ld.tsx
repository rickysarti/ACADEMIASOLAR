export function JsonLd({ data }: { data: object }) {
  // Escapa '<' para que contenido con "</script>" no pueda cerrar la etiqueta e inyectar HTML/JS.
  const json = JSON.stringify(data).replace(/</g, "\\u003c")

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
}
