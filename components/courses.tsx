"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Clock, Sparkles, Gift, Monitor, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const mainCourses = [
  {
    title: "Instalador Solar",
    subtitle: "Certificacion Profesional",
    description: "Domina la instalacion de sistemas fotovoltaicos residenciales y comerciales con practicas en obras reales.",
    duration: "3 meses",
    modality: "Hibrido",
    image: "/images/course-installer.jpg",
    href: "/cursos/instalador-solar",
    featured: true,
    modules: ["Fundamentos FV", "Montaje y Estructura", "Conexiones Electricas", "Puesta en Marcha"],
  },
  {
    title: "Analista Solar",
    subtitle: "Diseno y Dimensionamiento",
    description: "Aprende a disenar sistemas solares optimizados usando software profesional y herramientas de IA.",
    duration: "3 meses",
    modality: "Online",
    image: "/images/course-analyst.jpg",
    href: "/cursos/analista-solar",
    modules: ["Analisis de Consumo", "Diseno con Software", "Propuestas Tecnicas", "IA para Solar"],
  },
  {
    title: "Vendedor Solar",
    subtitle: "Ventas Consultivas",
    description: "Convertite en asesor comercial especializado en energia solar con tecnicas de venta consultiva.",
    duration: "2 meses",
    modality: "Online",
    image: "/images/course-sales.jpg",
    href: "/cursos/vendedor-solar",
    modules: ["Producto Solar", "Proceso de Venta", "Financiamiento", "Cierre Efectivo"],
  },
  {
    title: "Diplomatura Integral",
    subtitle: "Formacion Completa",
    description: "El programa mas completo: instalacion, diseno, ventas y gestion. Sali preparado para cualquier rol.",
    duration: "8 meses",
    modality: "Hibrido",
    image: "/images/course-diploma.jpg",
    href: "/cursos/diplomatura-integral",
    featured: true,
    modules: ["Instalador + Analista + Vendedor", "Gestion de Proyectos", "Practica Intensiva"],
  },
]

const shortCourses = [
  { title: "Introduccion a la Energia Solar", duration: "2 hs", modality: "Online", free: true, href: "/cursos/introduccion" },
  { title: "Electricidad Basica para Solar", duration: "1 mes", modality: "Online", href: "/cursos/electricidad-basica" },
  { title: "Baterias y Almacenamiento", duration: "1 mes", modality: "Online", href: "/cursos/baterias-almacenamiento" },
  { title: "Normativa Solar Argentina", duration: "2 semanas", modality: "Online", href: "/cursos/normativa-solar" },
  { title: "Solar para el Agro", duration: "1 mes", modality: "Hibrido", href: "/cursos/solar-agro" },
  { title: "Climatizacion de Piscinas", duration: "2 semanas", modality: "Online", href: "/cursos/climatizacion-piscinas" },
]

export function Courses() {
  return (
    <section id="cursos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-amber-600 border-amber-300 bg-amber-50">
            <Gift className="h-3 w-3 mr-1" />
            Cupos gratuitos disponibles
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Elegi tu camino
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Todos nuestros programas incluyen capacitacion en IA aplicada al sector solar 
            y cupos gratuitos para los primeros inscriptos.
          </p>
        </div>

        {/* Pricing Notice */}
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-6 mb-12 text-center">
          <p className="text-slate-700">
            <span className="font-semibold text-amber-700">Precios disponibles proximamente</span> para quienes no accedan al cupo gratuito.
            <Link href="https://www.solarpower.com.ar/contacto" className="text-amber-600 hover:text-amber-700 ml-2 underline underline-offset-2">
              Consultanos para mas info
            </Link>
          </p>
        </div>

        {/* Main Courses Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {mainCourses.map((course, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group ${
                course.featured ? "ring-2 ring-amber-400" : ""
              }`}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-amber-400 text-sm font-medium mb-1">{course.subtitle}</p>
                  <h3 className="text-2xl font-bold text-white">{course.title}</h3>
                </div>
                {course.featured && (
                  <Badge className="absolute top-4 right-4 bg-amber-500 text-slate-900">
                    Mas Popular
                  </Badge>
                )}
              </div>
              <CardContent className="p-6">
                <p className="text-slate-600 mb-4">{course.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.modules.map((mod, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full">
                      {mod}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    {course.modality === "Online" ? <Monitor className="h-4 w-4" /> : <MapPin className="h-4 w-4" />}
                    {course.modality}
                  </span>
                  <span className="flex items-center gap-1 text-amber-600">
                    <Sparkles className="h-4 w-4" />
                    +IA
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-green-600 border-green-300 bg-green-50">
                    <Gift className="h-3 w-3 mr-1" />
                    Cupo gratuito
                  </Badge>
                  <Button asChild className="btn-electric bg-slate-900 hover:bg-slate-800 text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-lg">
                    <Link href={course.href}>
                      Ver programa
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Short Courses */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Cursos Cortos y Especializaciones
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {shortCourses.map((course, index) => (
              <Link 
                key={index} 
                href={course.href}
                className="flex items-center justify-between p-5 bg-white rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all group"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {course.title}
                    </h4>
                    {course.free && (
                      <Badge className="bg-green-500 text-white text-xs">Gratis</Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {course.duration}
                    </span>
                    <span>{course.modality}</span>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
