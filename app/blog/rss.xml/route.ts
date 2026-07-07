import { getPublishedPosts } from "@/lib/blog"

// Revalida este feed como maximo cada hora (ISR) para reflejar posts nuevos sin rebuild.
export const revalidate = 3600

const SITE_URL = "https://academiasolar.solarpower.com.ar"

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

export async function GET() {
  const posts = await getPublishedPosts()

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`
      const pubDate = post.fecha_publicacion
        ? new Date(post.fecha_publicacion).toUTCString()
        : new Date(post.created_at).toUTCString()

      return `
    <item>
      <title>${escapeXml(post.titulo)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <author>${escapeXml(post.autor)}</author>
      ${post.categoria ? `<category>${escapeXml(post.categoria)}</category>` : ""}
      <description>${escapeXml(post.resumen || post.subtitulo || post.titulo)}</description>
    </item>`
    })
    .join("")

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog Academia Solar</title>
    <link>${SITE_URL}/blog</link>
    <atom:link href="${SITE_URL}/blog/rss.xml" rel="self" type="application/rss+xml" />
    <description>Guias, precios y noticias sobre energia solar en Argentina.</description>
    <language>es-AR</language>${items}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  })
}
