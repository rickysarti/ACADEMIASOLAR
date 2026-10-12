import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { LogoMark } from "@/components/brand/logo"

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="relative flex min-h-[75svh] items-center overflow-hidden bg-ink-950 px-4 pt-16 text-white sm:px-6 lg:pt-[72px]">
        <div className="halo-sol absolute inset-0" aria-hidden="true" />
        <div className="bg-celdas absolute inset-0 text-white/[0.04]" aria-hidden="true" />
        <div className="relative mx-auto max-w-xl py-20 text-center">
          <LogoMark tone="light" className="mx-auto h-16 w-16" />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-sol-300">Error 404</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-6xl">
            Acá no da <span className="text-amanecer">el sol</span>
          </h1>
          <p className="mt-5 text-white/70">
            La página que buscás no existe o se movió. Te dejamos algunos atajos para seguir.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild variant="sol" size="xl">
              <Link href="/#cursos">
                Ver cursos
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
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
