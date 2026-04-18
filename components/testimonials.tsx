import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Martin Rodriguez",
    role: "Instalador Solar",
    location: "Buenos Aires",
    image: "MR",
    rating: 5,
    text: "Empece sin saber nada de electricidad y hoy trabajo instalando paneles todos los dias. Las practicas en obras reales fueron clave para conseguir laburo rapido.",
  },
  {
    name: "Carolina Mendez",
    role: "Analista Solar",
    location: "Buenos Aires",
    image: "CM",
    rating: 5,
    text: "El modulo de IA me cambio la forma de trabajar. Ahora diseno propuestas en la mitad del tiempo y con mejor precision. Muy recomendable.",
  },
  {
    name: "Lucas Fernandez",
    role: "Vendedor Solar",
    location: "Buenos Aires",
    image: "LF",
    rating: 5,
    text: "Venia de ventas tradicionales y el curso me dio todas las herramientas tecnicas para hablar con confianza sobre solar. Ya cerre mis primeros proyectos.",
  },
  {
    name: "Valentina Torres",
    role: "Diplomatura Integral",
    location: "Buenos Aires",
    image: "VT",
    rating: 5,
    text: "La diplomatura es intensiva pero vale cada minuto. Sali preparada para cualquier rol en una empresa solar. Hoy coordino proyectos.",
  },
  {
    name: "Diego Alvarez",
    role: "Instalador Solar",
    location: "Buenos Aires",
    image: "DA",
    rating: 5,
    text: "Lo mejor es que no te ensenan solo teoria. Desde el primer mes ya estas arriba de un techo aprendiendo con los equipos de SolarPower.",
  },
  {
    name: "Florencia Ruiz",
    role: "Analista Solar",
    location: "Buenos Aires",
    image: "FR",
    rating: 5,
    text: "Consegui el cupo gratuito y fue la mejor decision. La calidad del contenido y los profesores son excelentes. Ahora trabajo remoto disenando sistemas.",
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lo que dicen nuestros egresados
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Historias reales de personas que transformaron su carrera con Academia Solar.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-amber-500/30 mb-4" />
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {`"${testimonial.text}"`}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-green-500 flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                    <p className="text-xs text-slate-500">{testimonial.location}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Bar - SIN alumnos proyectados 18M ni NPS objetivo */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-slate-700">
          {[
            { value: "500+", label: "Egresados" },
            { value: "95%", label: "Tasa de Empleo" },
            { value: "4.9/5", label: "Satisfaccion" },
            { value: "50+", label: "Empresas Aliadas" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-green-400">
                {stat.value}
              </p>
              <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
