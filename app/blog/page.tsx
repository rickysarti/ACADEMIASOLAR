import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight } from "lucide-react"
import { getPublishedPosts, formatPostDate, type BlogPostSummary } from "@/lib/blog"
import { JsonLd } from "@/components/json-ld"
import { Eyebrow } from "@/components/brand/section"
import { LogoMark } from "@/components/brand/logo"

// Revalida esta pagina como maximo cada hora (ISR) para reflejar posts nuevos sin rebuild.
export const revalidate = 3600

export const metadata: Metadata = {
  title: "Blog de Energía Solar Argentina | Academia Solar",
  description:
    "Guias, precios y noticias sobre energia solar en Argentina: paneles solares, inversores, baterias, financiacion y casos reales de instalaciones.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog de Energía Solar Argentina | Academia Solar",
    description:
      "Guias, precios y noticias sobre energia solar en Argentina: paneles solares, inversores, baterias, financiacion y casos reales de instalaciones.",
    url: "https://www.academiasolar.com.ar/blog",
    type: "website",
  },
}

export default async function BlogPage() {
  const posts = await getPublishedPosts()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog de Energia Solar Argentina",
    url: "https://www.academiasolar.com.ar/blog",
    isPartOf: {
      "@type": "WebSite",
      name: "Academia Solar",
      url: "https://www.academiasolar.com.ar",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://www.academiasolar.com.ar/blog/${post.slug}`,
        name: post.titulo,
      })),
    },
  }

  const [featured, ...rest] = posts

  return (
    <div>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div className="halo-sol absolute inset-0" aria-hidden="true" />
        <div className="bg-celdas absolute inset-0 text-white/[0.04]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <Eyebrow tone="light">Blog Academia Solar</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-[2.25rem] font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Guías y noticias de energía solar en <span className="text-amanecer">Argentina</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-white/70 sm:text-lg">
            Precios actualizados, comparativas de equipos y casos reales de instalaciones para tomar
            mejores decisiones sobre energía solar.
          </p>
        </div>
      </section>

      <section className="bg-paper py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {!featured ? (
            <div className="mx-auto flex max-w-md flex-col items-center rounded-3xl bg-white px-6 py-14 text-center ring-1 ring-ink-950/8">
              <LogoMark className="h-14 w-14" />
              <p className="mt-5 font-display text-xl font-bold text-ink-950">Todavía no hay artículos publicados</p>
              <p className="mt-2 text-ink-700">Volvé pronto: estamos preparando guías sobre energía solar.</p>
            </div>
          ) : (
            <>
              {/* Artículo destacado */}
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid overflow-hidden rounded-[2rem] bg-white ring-1 ring-ink-950/8 transition-shadow hover:shadow-2xl hover:shadow-ink-950/10 lg:grid-cols-2"
              >
                <PostImage post={featured} priority className="aspect-[16/10] lg:aspect-auto lg:min-h-[22rem]" />
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
                  <PostMeta post={featured} />
                  <h2 className="mt-3 text-2xl font-bold leading-tight text-ink-950 transition-colors group-hover:text-sol-700 sm:text-3xl lg:text-4xl">
                    {featured.titulo}
                  </h2>
                  {featured.resumen && <p className="mt-4 text-ink-700 line-clamp-3 sm:text-lg">{featured.resumen}</p>}
                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-ink-950">
                    Leer artículo
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>

              {rest.length > 0 && (
                <div className="mt-6 grid gap-5 sm:mt-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                  {rest.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-ink-950/8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-950/10"
                    >
                      <PostImage post={post} className="aspect-[16/10]" />
                      <div className="flex flex-1 flex-col p-5 sm:p-6">
                        <PostMeta post={post} />
                        <h2 className="mt-2.5 text-lg font-bold leading-snug text-ink-950 transition-colors group-hover:text-sol-700 sm:text-xl">
                          {post.titulo}
                        </h2>
                        {post.resumen && <p className="mt-2 text-sm text-ink-700 line-clamp-3">{post.resumen}</p>}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink-950 px-6 py-12 text-center text-white sm:py-16">
          <div className="halo-sol absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto max-w-xl">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              ¿Querés pasar de leer <span className="text-amanecer">a instalar?</span>
            </h2>
            <p className="mt-4 text-white/75">
              Empezá con el curso gratuito de introducción a la energía solar y descubrí tu salida laboral en el sector.
            </p>
            <Button asChild variant="sol" size="xl" className="mt-7 w-full sm:w-auto">
              <Link href="/cursos/introduccion">
                Empezar gratis
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function PostImage({
  post,
  className,
  priority = false,
}: {
  post: BlogPostSummary
  className?: string
  priority?: boolean
}) {
  return (
    <div className={`relative overflow-hidden bg-ink-950 ${className ?? ""}`}>
      {post.imagen_destacada_url ? (
        <Image
          src={post.imagen_destacada_url}
          alt={post.titulo}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="halo-sol absolute inset-0 flex items-center justify-center">
          <LogoMark tone="light" className="h-16 w-16 opacity-80" />
        </div>
      )}
    </div>
  )
}

function PostMeta({ post }: { post: BlogPostSummary }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-500">
      {post.categoria && (
        <span className="rounded-full bg-sol-100 px-2.5 py-0.5 text-xs font-semibold text-sol-700">{post.categoria}</span>
      )}
      <span>{formatPostDate(post.fecha_publicacion)}</span>
      {post.tiempo_lectura && (
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {post.tiempo_lectura} min
        </span>
      )}
    </div>
  )
}
