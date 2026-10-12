import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
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
import { LogoMark } from "@/components/brand/logo"

// El editor del blog está en otro proyecto y no invalida este sitio al guardar.
// Seis horas reducen regeneraciones sin demorar un día los cambios de artículos.
// El listado y el feed mantienen su actualización horaria para descubrir posts nuevos.
export const revalidate = 21600
export const dynamicParams = true

const SITE_URL = "https://www.academiasolar.com.ar"

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
    return { title: "Artículo no encontrado | Academia Solar" }
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
        url: `${SITE_URL}/brand/academia-solar-logo.png`,
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
    <article>
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      {/* Header */}
      <header className="relative overflow-hidden bg-ink-950 pt-8 pb-20 text-white sm:pt-12 lg:pb-28">
        <div className="halo-sol absolute inset-0" aria-hidden="true" />
        <div className="bg-celdas absolute inset-0 text-white/[0.04]" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb className="mb-6">
            <BreadcrumbList className="flex-nowrap text-white/55">
              <BreadcrumbItem>
                <BreadcrumbLink asChild className="hover:text-white">
                  <Link href="/">Inicio</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild className="hover:text-white">
                  <Link href="/blog">Blog</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="min-w-0">
                <BreadcrumbPage className="line-clamp-1 min-w-0 text-white/80">{post.titulo}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {post.categoria && (
            <span className="inline-block rounded-full bg-sol-500/15 px-3 py-1 text-xs font-semibold text-sol-300">
              {post.categoria}
            </span>
          )}

          <h1 className="mt-4 text-[1.9rem] font-extrabold leading-[1.08] sm:text-5xl">{post.titulo}</h1>

          {post.subtitulo && <p className="mt-4 text-base text-white/70 sm:text-xl">{post.subtitulo}</p>}

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {post.autor}
            </span>
            {post.fecha_publicacion && (
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatPostDate(post.fecha_publicacion)}
              </span>
            )}
            {post.tiempo_lectura && (
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.tiempo_lectura} min de lectura
              </span>
            )}
          </div>
        </div>
      </header>

      <div className="bg-paper pb-16 sm:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {post.imagen_destacada_url ? (
            <div className="relative -mt-12 mb-10 aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl shadow-ink-950/20 lg:-mt-16">
              <Image
                src={post.imagen_destacada_url}
                alt={post.titulo}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          ) : (
            <div className="h-10 sm:h-14" />
          )}

          {/* Contenido */}
          <div className="prose prose-base max-w-none break-words text-ink-800 sm:prose-lg prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-ink-950 prose-headings:scroll-mt-24 prose-a:font-semibold prose-a:text-sol-700 prose-a:underline-offset-2 prose-strong:text-ink-950 prose-blockquote:border-sol-500 prose-blockquote:text-ink-700 prose-img:rounded-2xl prose-table:block prose-table:overflow-x-auto prose-table:whitespace-nowrap sm:prose-table:whitespace-normal prose-th:text-ink-950 marker:text-sol-600">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.contenido}</ReactMarkdown>
          </div>

          {/* CTA */}
          <div className="relative mt-14 overflow-hidden rounded-3xl bg-ink-950 px-6 py-10 text-center text-white sm:px-10">
            <div className="halo-sol absolute inset-0" aria-hidden="true" />
            <div className="relative">
              <LogoMark tone="light" className="mx-auto h-12 w-12" />
              <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">¿Te interesa formarte en energía solar?</h2>
              <p className="mx-auto mt-3 max-w-xl text-white/75">
                Conocé nuestros cursos con prácticas reales en instalaciones de SolarPower Argentina.
              </p>
              <Button asChild variant="sol" size="xl" className="mt-6 w-full sm:w-auto">
                <Link href="/cursos/introduccion">
                  Empezar gratis
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Más artículos */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-ink-950">Más artículos</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3 sm:gap-5">
                {relatedPosts.map((related) => (
                  <Link key={related.id} href={`/blog/${related.slug}`} className="group flex items-center gap-4 sm:block">
                    <div className="relative aspect-[16/10] w-28 flex-shrink-0 overflow-hidden rounded-2xl bg-ink-950 sm:mb-3 sm:w-auto">
                      {related.imagen_destacada_url ? (
                        <Image
                          src={related.imagen_destacada_url}
                          alt={related.titulo}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 112px, 33vw"
                        />
                      ) : (
                        <div className="halo-sol absolute inset-0 flex items-center justify-center">
                          <LogoMark tone="light" className="h-8 w-8 opacity-80" />
                        </div>
                      )}
                    </div>
                    <h3 className="text-sm font-bold leading-snug text-ink-950 transition-colors group-hover:text-sol-700 sm:text-base">
                      {related.titulo}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <Link
            href="/blog"
            className="mt-14 inline-flex items-center gap-2 text-sm font-semibold text-ink-700 transition-colors hover:text-ink-950"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al blog
          </Link>
        </div>
      </div>
    </article>
  )
}
