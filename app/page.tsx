import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhyChoose } from "@/components/why-choose"
import { Courses } from "@/components/courses"
import { Benefits } from "@/components/benefits"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhyChoose />
      <Courses />
      <Benefits />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
