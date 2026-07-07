import type { MetadataRoute } from "next"
import { getPublishedPosts } from "@/lib/blog"

const SITE_URL = "https://academiasolar.solarpower.com.ar"

const STATIC_ROUTES: MetadataRoute.Sitemap = [
  {
    url: `${SITE_URL}/`,
    changeFrequency: "weekly",
    priority: 1.0,
    images: [`${SITE_URL}/images/hero-solar-installation.jpg`],
  },
  {
    url: `${SITE_URL}/blog`,
    changeFrequency: "daily",
    priority: 0.9,
  },
  {
    url: `${SITE_URL}/cursos/introduccion`,
    changeFrequency: "monthly",
    priority: 0.95,
    images: [`${SITE_URL}/images/hero-solar-installation.jpg`],
  },
  {
    url: `${SITE_URL}/cursos/instalador-solar`,
    changeFrequency: "monthly",
    priority: 0.9,
    images: [`${SITE_URL}/images/course-installer.jpg`],
  },
  {
    url: `${SITE_URL}/cursos/analista-solar`,
    changeFrequency: "monthly",
    priority: 0.9,
    images: [`${SITE_URL}/images/course-analyst.jpg`],
  },
  {
    url: `${SITE_URL}/cursos/vendedor-solar`,
    changeFrequency: "monthly",
    priority: 0.9,
    images: [`${SITE_URL}/images/course-sales.jpg`],
  },
  {
    url: `${SITE_URL}/cursos/diplomatura-integral`,
    changeFrequency: "monthly",
    priority: 0.95,
    images: [`${SITE_URL}/images/course-diploma.jpg`],
  },
  {
    url: `${SITE_URL}/cursos/electricidad-basica`,
    changeFrequency: "monthly",
    priority: 0.8,
    images: [`${SITE_URL}/images/course-installer.jpg`],
  },
  {
    url: `${SITE_URL}/cursos/baterias-almacenamiento`,
    changeFrequency: "monthly",
    priority: 0.8,
    images: [`${SITE_URL}/images/course-installer.jpg`],
  },
  {
    url: `${SITE_URL}/cursos/normativa-solar`,
    changeFrequency: "monthly",
    priority: 0.8,
    images: [`${SITE_URL}/images/course-analyst.jpg`],
  },
  {
    url: `${SITE_URL}/cursos/solar-agro`,
    changeFrequency: "monthly",
    priority: 0.8,
    images: [`${SITE_URL}/images/hero-solar-installation.jpg`],
  },
  {
    url: `${SITE_URL}/cursos/climatizacion-piscinas`,
    changeFrequency: "monthly",
    priority: 0.8,
    images: [`${SITE_URL}/images/course-installer.jpg`],
  },
  {
    url: `${SITE_URL}/llms.txt`,
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: `${SITE_URL}/llms-full.txt`,
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: `${SITE_URL}/AGENTS.md`,
    changeFrequency: "monthly",
    priority: 0.5,
  },
  {
    url: `${SITE_URL}/README.md`,
    changeFrequency: "monthly",
    priority: 0.5,
  },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPublishedPosts()

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.updated_at ? new Date(post.updated_at) : undefined,
    changeFrequency: "monthly",
    priority: 0.7,
    images: post.imagen_destacada_url ? [post.imagen_destacada_url] : undefined,
  }))

  return [...STATIC_ROUTES, ...postEntries]
}
