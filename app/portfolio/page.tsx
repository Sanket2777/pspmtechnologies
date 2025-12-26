import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Header/>
      <PortfolioHero />
      <PortfolioGrid />
      <Footer/>
    </main>
  )
}
