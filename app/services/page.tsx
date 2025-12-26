import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServiceProcess } from "@/components/services/service-process"
import { TechnologiesSection } from "@/components/services/technologies-section"

export const metadata = {
  title: "Our Services - PSPM Technologies",
  description: "Comprehensive ERP solutions, web development, application development, and IT consulting services.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServicesHero />
        <ServicesGrid />
        <ServiceProcess />
        <TechnologiesSection />
      </main>
      <Footer />
    </div>
  )
}
