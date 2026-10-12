import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[70svh] items-center bg-slate-900 px-4 pt-16 text-white sm:px-6 lg:pt-[72px]">
        <div className="mx-auto max-w-xl py-20 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-400">Error 404</p>
          <h1 className="mb-4 text-3xl font-bold text-balance sm:text-5xl">Esta pagina no existe</h1>
          <p className="mb-8 text-white/70 text-pretty">
            Puede que el enlace este mal escrito o que el contenido se haya movido. Te dejamos algunos atajos.
          </p>
          <div className="mx-auto flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="h-12 bg-amber-500 font-semibold text-slate-900 hover:bg-amber-600">
              <Link href="/#cursos">
                Ver cursos
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white"
            >
              <Link href="/">
                <ArrowLeft className="h-5 w-5" />
                Volver al inicio
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
