import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhyChoose } from "@/components/why-choose"
import { Courses } from "@/components/courses"
import { HowItWorks } from "@/components/how-it-works"
import { Benefits } from "@/components/benefits"
import { Backing } from "@/components/backing"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { MobileCtaBar } from "@/components/mobile-cta-bar"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyChoose />
        <Courses />
        <HowItWorks />
        <Benefits />
        <Backing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  )
}
