import { cache } from "react"
import { supabase } from "@/lib/supabase/client"

export type BlogPost = {
  id: string
  slug: string
  titulo: string
  subtitulo: string | null
  autor: string
  imagen_destacada_url: string | null
  contenido: string
  resumen: string | null
  categoria: string | null
  estado: "borrador" | "publicado" | "archivado"
  fecha_publicacion: string | null
  created_at: string
  updated_at: string
  tiempo_lectura: number | null
}

export type BlogPostSummary = Omit<BlogPost, "contenido">

const SUMMARY_COLUMNS =
  "id, slug, titulo, subtitulo, autor, imagen_destacada_url, resumen, categoria, estado, fecha_publicacion, created_at, updated_at, tiempo_lectura"

export const getPublishedPosts = cache(async (): Promise<BlogPostSummary[]> => {
  const { data, error } = await supabase
    .from("blog_posts")
    .select(SUMMARY_COLUMNS)
    .eq("estado", "publicado")
    .order("fecha_publicacion", { ascending: false, nullsFirst: false })

  if (error) {
    console.error("Error fetching blog posts:", error.message)
    return []
  }

  return data ?? []
})

export async function getPublishedPostSlugs(): Promise<
  Pick<BlogPost, "slug" | "updated_at" | "fecha_publicacion">[]
> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("slug, updated_at, fecha_publicacion")
    .eq("estado", "publicado")

  if (error) {
    console.error("Error fetching blog post slugs:", error.message)
    return []
  }

  return data ?? []
}

export const getPostBySlug = cache(async (slug: string): Promise<BlogPost | null> => {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("estado", "publicado")
    .maybeSingle()

  if (error) {
    console.error(`Error fetching blog post "${slug}":`, error.message)
    return null
  }

  return data
})

export function getCategories(posts: BlogPostSummary[]): string[] {
  const categories = new Set<string>()
  for (const post of posts) {
    if (post.categoria) categories.add(post.categoria)
  }
  return Array.from(categories).sort()
}

export function formatPostDate(dateString: string | null) {
  if (!dateString) return null
  return new Date(dateString).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}
