import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight, BookOpen } from "lucide-react"
import { getPublishedPosts, formatPostDate } from "@/lib/blog"
import { JsonLd } from "@/components/json-ld"

// Revalida esta pagina como maximo cada hora (ISR) para reflejar posts nuevos sin rebuild.
export const revalidate = 3600

export const metadata: Metadata = {
  title: "Blog de Energia Solar Argentina | Academia Solar",
  description:
    "Guias, precios y noticias sobre energia solar en Argentina: paneles solares, inversores, baterias, financiacion y casos reales de instalaciones.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog de Energia Solar Argentina | Academia Solar",
    description:
      "Guias, precios y noticias sobre energia solar en Argentina: paneles solares, inversores, baterias, financiacion y casos reales de instalaciones.",
    url: "https://academiasolar.solarpower.com.ar/blog",
    type: "website",
  },
}

export default async function BlogPage() {
  const posts = await getPublishedPosts()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog de Energia Solar Argentina",
    url: "https://academiasolar.solarpower.com.ar/blog",
    isPartOf: {
      "@type": "WebSite",
      name: "Academia Solar",
      url: "https://academiasolar.solarpower.com.ar",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://academiasolar.solarpower.com.ar/blog/${post.slug}`,
        name: post.titulo,
      })),
    },
  }

  return (
    <div className="pb-24">
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="bg-foreground text-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-center gap-2 text-background/60 text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            Blog Academia Solar
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Guias y noticias de energia solar en Argentina
          </h1>
          <p className="text-background/70 text-lg max-w-2xl text-pretty">
            Precios actualizados, comparativas de equipos y casos reales de instalaciones para
            tomar mejores decisiones sobre energia solar.
          </p>
        </div>
      </section>

      {/* Grid de posts */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-16">
        {posts.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">
            Todavia no hay articulos publicados. Vuelve pronto.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <Card className="h-full overflow-hidden pt-0 transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    {post.imagen_destacada_url && (
                      <Image
                        src={post.imagen_destacada_url}
                        alt={post.titulo}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
                  </div>
                  <CardContent className="flex flex-col gap-3">
                    {post.categoria && (
                      <Badge variant="secondary" className="w-fit">
                        {post.categoria}
                      </Badge>
                    )}
                    <h2 className="font-heading text-lg font-semibold leading-snug text-balance group-hover:text-primary transition-colors">
                      {post.titulo}
                    </h2>
                    {post.resumen && (
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {post.resumen}
                      </p>
                    )}
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 mt-auto border-t border-border">
                      <span>{formatPostDate(post.fecha_publicacion)}</span>
                      {post.tiempo_lectura && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.tiempo_lectura} min
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="rounded-2xl bg-muted/50 border border-border px-6 py-10 lg:px-12 lg:py-14 text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-3 text-balance">
            Queres pasar de leer a instalar?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6 text-pretty">
            Empeza con nuestro curso gratuito de introduccion a la energia solar y descubri tu
            salida laboral en el sector.
          </p>
          <Button
            asChild
            className="btn-electric bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold transition-all duration-200 hover:scale-[1.03] hover:shadow-lg hover:shadow-amber-400/40"
          >
            <Link href="/cursos/introduccion">
              Empezar Gratis
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
