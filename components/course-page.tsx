import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Clock, 
  BookOpen, 
  Gift, 
  Cpu, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  Users,
  Award,
  PlayCircle
} from "lucide-react"

interface Module {
  title: string
  description: string
  lessons: string[]
}

interface CoursePageProps {
  title: string
  subtitle: string
  description: string
  longDescription: string
  duration: string
  modality: string
  level: string
  image: string
  features: string[]
  modules: Module[]
  requirements: string[]
  instructor?: string
  isFree?: boolean
}

export function CoursePage({
  title,
  subtitle,
  description,
  longDescription,
  duration,
  modality,
  level,
  image,
  features,
  modules,
  requirements,
  instructor = "Equipo SolarPower Argentina",
  isFree = false,
}: CoursePageProps) {
  return (
    <div className="pt-20">
      {/* Hero section */}
      <section className="relative py-16 lg:py-24 bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/95 to-foreground/80" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <Link 
            href="/#cursos" 
            className="inline-flex items-center gap-2 text-background/60 hover:text-background mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a cursos
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                {isFree && (
                  <Badge className="bg-secondary text-secondary-foreground">
                    GRATIS
                  </Badge>
                )}
                <Badge variant="outline" className="border-background/30 text-background">
                  {level}
                </Badge>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
              <p className="text-xl text-primary mb-6">{subtitle}</p>
              <p className="text-lg text-background/70 mb-8 leading-relaxed">{description}</p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-background/10 rounded-full">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm">{duration}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-background/10 rounded-full">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-sm">{modality}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-background/10 rounded-full">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm">Instructor: {instructor}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
                  <Link href="https://www.solarpower.com.ar/contacto" target="_blank" rel="noopener noreferrer">
                    {isFree ? "Empezar ahora" : "Consultar cupo gratuito"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                {!isFree && (
                  <div className="flex items-center gap-2 px-4 py-2">
                    <Gift className="w-5 h-5 text-secondary" />
                    <span className="text-sm text-background/70">Cupos gratuitos disponibles</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Cpu className="w-6 h-6 text-primary-foreground" />
                  <span className="font-semibold text-primary-foreground text-sm">+IA Incluida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* What you'll learn */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Que vas a aprender</h2>
              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
                <div className="flex items-start gap-3">
                  <Cpu className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Como utilizar IA en el sector solar</span>
                </div>
              </div>
            </div>
            
            {/* Requirements */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Requisitos</h2>
              <div className="grid gap-4">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-muted-foreground">{index + 1}</span>
                    </div>
                    <span className="text-muted-foreground">{req}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-muted/50 rounded-xl">
                <h3 className="font-semibold text-foreground mb-2">Descripcion completa</h3>
                <p className="text-muted-foreground leading-relaxed">{longDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Modules section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Contenido del curso</h2>
          
          <div className="grid gap-6 max-w-4xl mx-auto">
            {modules.map((module, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 bg-foreground/5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                        <span className="font-bold text-slate-900">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{module.title}</h3>
                        <p className="text-sm text-muted-foreground">{module.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="grid gap-3">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <li key={lessonIndex} className="flex items-center gap-3 text-sm">
                          <PlayCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 lg:py-24 bg-slate-900">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <Award className="w-16 h-16 text-amber-400/40 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {isFree ? "Empeza ahora, es gratis" : "Consulta tu cupo gratuito"}
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            {isFree 
              ? "Este curso es completamente gratuito. Empieza hoy y descubre tu potencial en la energia solar."
              : "Todos nuestros programas tienen cupos gratuitos disponibles. Consulta si podes acceder."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
              <Link href="https://www.solarpower.com.ar/contacto" target="_blank" rel="noopener noreferrer">
                {isFree ? "Empezar gratis" : "Solicitar cupo gratuito"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" asChild className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/30">
              <Link href="/#cursos">
                Ver otros cursos
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
