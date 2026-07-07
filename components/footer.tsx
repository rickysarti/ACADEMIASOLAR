import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  programas: [
    { label: "Instalador Solar Certificado", href: "/cursos/instalador-solar" },
    { label: "Analista Solar", href: "/cursos/analista-solar" },
    { label: "Vendedor Solar", href: "/cursos/vendedor-solar" },
    { label: "Diplomatura Integral", href: "/cursos/diplomatura-integral" },
    { label: "Curso Gratuito", href: "/cursos/introduccion" },
  ],
  empresa: [
    { label: "Sobre SolarPower", href: "https://www.solarpower.com.ar/solarpower", external: true },
    { label: "Nuestros Valores", href: "https://www.solarpower.com.ar/solarpower/nuestros-valores", external: true },
    { label: "Mapa de Instalaciones", href: "https://www.solarpower.com.ar/mapa-instalaciones", external: true },
    { label: "Blog", href: "/blog" },
    { label: "Sos Instalador?", href: "https://www.solarpower.com.ar/solarpower/sos-instalador", external: true },
  ],
  recursos: [
    { label: "Preguntas frecuentes", href: "https://www.solarpower.com.ar/solarpower/faqs", external: true },
    { label: "Contacto", href: "https://www.solarpower.com.ar/contacto", external: true },
    { label: "Planes y Precios", href: "https://www.solarpower.com.ar/planes-y-precios", external: true },
    { label: "Productos", href: "https://www.solarpower.com.ar/productos", external: true },
    { label: "Privacidad", href: "https://www.solarpower.com.ar/privacidad", external: true },
  ],
  soluciones: [
    { label: "Hogares", href: "https://www.solarpower.com.ar/planes-y-precios/plan-solarpower", external: true },
    { label: "PyMEs", href: "https://www.solarpower.com.ar/pyme", external: true },
    { label: "Agro", href: "https://www.solarpower.com.ar/agro", external: true },
    { label: "Baterias", href: "https://www.solarpower.com.ar/productos/baterias", external: true },
  ],
}

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/academia-solar-logo.png"
                alt="Academia Solar"
                width={140}
                height={45}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              La plataforma educativa de SolarPower Argentina. Formacion en energia solar con practicas reales y pipeline al empleo.
            </p>
            <p className="text-sm text-muted-foreground">
              Una unidad de{" "}
              <Link 
                href="https://www.solarpower.com.ar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                SolarPower Argentina
              </Link>
            </p>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Programas</h4>
            <ul className="space-y-3">
              {footerLinks.programas.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Soluciones</h4>
            <ul className="space-y-3">
              {footerLinks.soluciones.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Academia Solar - SolarPower Argentina. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="https://www.solarpower.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Politica de privacidad
              </Link>
              <Link
                href="https://www.solarpower.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terminos de uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
