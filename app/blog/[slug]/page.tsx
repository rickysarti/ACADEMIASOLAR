import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Clock, ArrowLeft, ArrowRight, Calendar, User } from "lucide-react"
import {
  getPostBySlug,
  getPublishedPosts,
  getPublishedPostSlugs,
  formatPostDate,
} from "@/lib/blog"
import { JsonLd } from "@/components/json-ld"

// Revalida esta pagina como maximo cada hora (ISR) para reflejar posts nuevos sin rebuild.
export const revalidate = 3600
export const dynamicParams = true

const SITE_URL = "https://academiasolar.solarpower.com.ar"

export async function generateStaticParams() {
  const posts = await getPublishedPostSlugs()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return { title: "Articulo no encontrado | Academia Solar" }
  }

  const description = post.resumen || post.subtitulo || post.titulo
  const url = `${SITE_URL}/blog/${post.slug}`

  return {
    title: `${post.titulo} | Blog Academia Solar`,
    description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    authors: [{ name: post.autor }],
    openGraph: {
      title: post.titulo,
      description,
      url,
      type: "article",
      publishedTime: post.fecha_publicacion ?? undefined,
      modifiedTime: post.updated_at,
      authors: [post.autor],
      images: post.imagen_destacada_url ? [{ url: post.imagen_destacada_url }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.titulo,
      description,
      images: post.imagen_destacada_url ? [post.imagen_destacada_url] : undefined,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const allPosts = await getPublishedPosts()
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  const postUrl = `${SITE_URL}/blog/${post.slug}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.titulo,
    description: post.resumen || post.subtitulo || undefined,
    image: post.imagen_destacada_url ? [post.imagen_destacada_url] : undefined,
    datePublished: post.fecha_publicacion ?? post.created_at,
    dateModified: post.updated_at,
    author: {
      "@type": "Person",
      name: post.autor,
    },
    publisher: {
      "@type": "Organization",
      name: "Academia Solar",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/academia-solar-logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.titulo, item: postUrl },
    ],
  }

  return (
    <article className="pb-24">
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      {/* Header */}
      <header className="bg-foreground text-background py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <Breadcrumb className="mb-6">
            <BreadcrumbList className="text-background/60">
              <BreadcrumbItem>
                <BreadcrumbLink asChild className="hover:text-background">
                  <Link href="/">Inicio</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild className="hover:text-background">
                  <Link href="/blog">Blog</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-background/80 line-clamp-1">
                  {post.titulo}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {post.categoria && (
            <Badge className="bg-secondary text-secondary-foreground mb-4">
              {post.categoria}
            </Badge>
          )}

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            {post.titulo}
          </h1>

          {post.subtitulo && (
            <p className="text-background/70 text-lg mb-6 text-pretty">{post.subtitulo}</p>
          )}

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-background/60">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.autor}
            </span>
            {post.fecha_publicacion && (
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formatPostDate(post.fecha_publicacion)}
              </span>
            )}
            {post.tiempo_lectura && (
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.tiempo_lectura} min de lectura
              </span>
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        {post.imagen_destacada_url && (
          <div className="relative aspect-[16/9] -mt-10 lg:-mt-14 mb-10 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={post.imagen_destacada_url}
              alt={post.titulo}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        )}

        {/* Contenido */}
        <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-heading prose-a:text-primary">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.contenido}</ReactMarkdown>
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-2xl bg-muted/50 border border-border px-6 py-10 text-center">
          <h2 className="font-heading text-2xl font-bold mb-3 text-balance">
            Te interesa formarte en energia solar?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6 text-pretty">
            Conoce nuestros cursos con practicas reales en instalaciones de SolarPower Argentina.
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

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="font-heading text-xl font-bold mb-6">Mas articulos</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link key={related.id} href={`/blog/${related.slug}`} className="group">
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-muted mb-3">
                    {related.imagen_destacada_url && (
                      <Image
                        src={related.imagen_destacada_url}
                        alt={related.titulo}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    )}
                  </div>
                  <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors text-balance">
                    {related.titulo}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}

        <Link
          href="/blog"
          className="mt-14 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al blog
        </Link>
      </div>
    </article>
  )
}
