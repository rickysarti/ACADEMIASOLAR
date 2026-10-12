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
    <section id="testimonios" className="py-16 sm:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Lo que dicen nuestros egresados
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto text-pretty">
            Historias reales de personas que transformaron su carrera con Academia Solar.
          </p>
        </div>

        {/* En telefonos: carrusel deslizable; en pantallas grandes: grilla */}
        <div className="-mx-4 sm:mx-0">
          <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="flex w-[85%] flex-shrink-0 snap-start flex-col rounded-2xl border border-slate-700 bg-slate-800/50 p-6 sm:w-auto"
              >
                <div className="mb-4 flex items-center justify-between">
                  <Quote className="h-8 w-8 text-amber-500/30" />
                  <div className="flex gap-0.5" aria-label={`${testimonial.rating} de 5 estrellas`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <blockquote className="mb-6 flex-1 leading-relaxed text-slate-300">
                  {`"${testimonial.text}"`}
                </blockquote>
                <figcaption className="flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-green-500 font-bold text-white">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-400">
                      {testimonial.role} · {testimonial.location}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-slate-500 sm:hidden">Desliza para ver mas →</p>

        {/* Stats Bar - SIN alumnos proyectados 18M ni NPS objetivo */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-8 sm:py-8 border-t border-slate-700">
          {[
            { value: "500+", label: "Egresados" },
            { value: "95%", label: "Tasa de Empleo" },
            { value: "4.9/5", label: "Satisfaccion" },
            { value: "50+", label: "Empresas Aliadas" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
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
