import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { MissionVision } from "@/components/about/mission-vision"
import { WhyChooseUs } from "@/components/about/why-choose-us"
import { CompanyValues } from "@/components/about/company-values"

export const metadata = {
  title: "About Us - PSPM Technologies",
  description:
    "Learn about PSPM Technologies, our mission, vision, and commitment to delivering exceptional ERP solutions and IT services.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <MissionVision />
        <WhyChooseUs />
        <CompanyValues />
      </main>
      <Footer />
    </div>
  )
}
