import { ClientsHero } from "@/components/clients/clients-hero"
import { ClientsGrid } from "@/components/clients/clients-grid"
import { Testimonials } from "@/components/clients/testimonials"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ClientsPage() {
  return (
    <main className="min-h-screen">
      <Header></Header>
      <ClientsHero />
      <ClientsGrid />
      <Testimonials />
      <Footer/>
    </main>
  )
}
