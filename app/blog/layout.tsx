import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCtaBar } from "@/components/mobile-cta-bar"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-[72px]">{children}</main>
      <Footer />
      <MobileCtaBar />
    </>
  )
}
