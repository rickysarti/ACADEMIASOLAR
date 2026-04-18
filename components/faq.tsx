import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Que diferencia a Academia Solar de otros cursos de energia solar?",
    answer: "Academia Solar ofrece tres diferenciadores unicos: (1) practicas en instalaciones reales de SolarPower con clientes finales, no simulaciones, (2) pipeline directo al empleo via nuestra red de instaladores y vendedores, y (3) acceso al modelo de negocio de alquiler solar exclusivo de SolarPower, que ningun otro curso puede ensenar.",
  },
  {
    question: "Necesito conocimientos previos para tomar los cursos?",
    answer: "Para el curso de Instalador Solar recomendamos tener conocimientos basicos de electricidad. Ofrecemos un curso preparatorio de 'Electricidad Basica para Solar' de 1 mes como pre-requisito opcional. Los cursos de Analista Solar y Vendedor Solar no requieren conocimientos tecnicos previos.",
  },
  {
    question: "Como funcionan las practicas en instalaciones reales?",
    answer: "Las practicas se realizan en instalaciones activas de SolarPower con supervision de instaladores certificados. Participaras en proyectos residenciales y comerciales reales, desde el relevamiento hasta la puesta en marcha. Esto te da experiencia comprobable que puedes incluir en tu CV.",
  },
  {
    question: "Que pasa si no apruebo el examen de certificacion?",
    answer: "Tenes hasta 3 intentos para aprobar el examen de certificacion sin costo adicional. Ademas, ofrecemos tutoria personalizada y clases de repaso para asegurar que estes preparado. Nuestra tasa de aprobacion objetivo es del 75%.",
  },
  {
    question: "Como es la salida laboral?",
    answer: "Academia Solar ofrece la mejor salida laboral del mercado. Los egresados destacados acceden a nuestra bolsa de trabajo exclusiva y a la red de SolarPower. Conectamos egresados con empresas del sector que buscan talento certificado.",
  },
  {
    question: "Como funcionan los cupos gratuitos?",
    answer: "Todos nuestros cursos tienen cupos gratuitos disponibles para los primeros inscriptos de cada cohorte. Si no accedes al cupo gratuito, los precios estaran disponibles proximamente. Contactanos para conocer la disponibilidad actual de cupos.",
  },
  {
    question: "Los cursos son 100% online o tienen parte presencial?",
    answer: "Depende del programa: el curso de Analista Solar es 100% online. El curso de Instalador Solar y la Diplomatura Integral son hibridos, con teoria online y practicas presenciales en instalaciones. El curso de Vendedor Solar combina modulos online con jornadas de campo.",
  },
  {
    question: "Los cursos incluyen capacitacion en IA?",
    answer: "Si, todos nuestros cursos incluyen modulos especiales de Inteligencia Artificial aplicada al sector solar. Aprenderas a usar herramientas de IA para disenar sistemas, generar propuestas, analizar datos y optimizar tu trabajo diario.",
  },
  {
    question: "Ofrecen capacitacion para empresas?",
    answer: "Si, tenemos programas B2B a medida para distribuidores de equipos, constructoras y empresas de servicios electricos. Contactanos para una propuesta personalizada segun las necesidades de tu equipo.",
  },
  {
    question: "Donde puedo ver el temario completo de cada curso?",
    answer: "El temario detallado de cada curso esta disponible en nuestra plataforma. Tambien podes solicitar una llamada informativa gratuita donde te explicamos el contenido, metodologia y salida laboral de cada programa.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4">Preguntas Frecuentes</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Resolvemos tus dudas
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Todo lo que necesitas saber sobre Academia Solar y nuestros programas de formacion.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
