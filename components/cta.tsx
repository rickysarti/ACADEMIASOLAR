import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-solar-installation.jpg"
          alt="Instalacion solar"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Comenza tu carrera en{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-green-400">
                energia solar hoy
              </span>
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Unite a la revolucion solar. Inscribite en nuestro curso gratuito de introduccion 
              y descubri tu potencial en la industria de mayor crecimiento en Argentina.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="btn-electric bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-900 font-semibold rounded-full shadow-lg shadow-amber-500/30 transition-all duration-200 hover:scale-[1.03] hover:shadow-amber-400/50"
                asChild
              >
                <Link href="/cursos/introduccion">
                  Empezar Gratis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                className="btn-electric-ghost bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/30 font-semibold rounded-full transition-all duration-200 hover:scale-[1.03]"
                asChild
              >
                <Link href="https://www.solarpower.com.ar/contacto" target="_blank" rel="noopener noreferrer">
                  Solicitar Informacion
                </Link>
              </Button>
            </div>
          </div>

          {/* Right content - Contact info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-6">Contacto directo</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <a href="mailto:info@solarpower.com.ar" className="text-white hover:text-amber-400 transition-colors">
                    info@solarpower.com.ar
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">WhatsApp</p>
                  <a href="https://wa.me/5491134583958" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors">
                    +54 9 11 3458-3958
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Ubicacion</p>
                  <p className="text-white">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-sm text-slate-400 mb-2">Horario de atencion</p>
              <p className="text-white">Lunes a Viernes: 9:00 - 18:00</p>
              <p className="text-white">Sabados: 9:00 - 13:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
