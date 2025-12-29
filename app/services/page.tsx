import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServiceProcess } from "@/components/services/service-process"
import { TechnologiesSection } from "@/components/services/technologies-section"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Our Services | ERP, Web & App Development - PSPM Technologies",
  description:
    "PSPM Technologies offers ERP solutions, web development, mobile app development, and IT consulting services to help businesses grow.",
  keywords: [
    "ERP solutions",
    "web development services",
    "mobile app development",
    "IT consulting company",
    "PSPM Technologies",
  ],
  openGraph: {
    title: "Our Services - PSPM Technologies",
    description:
      "Comprehensive ERP, web, mobile application development, and IT consulting services.",
    url: "https://www.pspmtechnologies.com/services",
    siteName: "PSPM Technologies",
    images: [
      {
        url: "https://www.pspmtechnologies.com/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "PSPM Technologies Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - PSPM Technologies",
    description:
      "ERP, web development, mobile apps, and IT consulting services.",
    images: ["https://www.pspmtechnologies.com/og-services.jpg"],
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Structured Data for SEO */}
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "PSPM Technologies Services",
            "provider": {
              "@type": "Organization",
              "name": "PSPM Technologies",
              "url": "https://www.pspmtechnologies.com",
            },
            "serviceType": [
              "ERP Solutions",
              "Web Development",
              "Mobile Application Development",
              "IT Consulting",
            ],
            "areaServed": "Worldwide",
          }),
        }}
      />

      <Header />

      <main>
       
        <ServicesGrid />
        <ServiceProcess />
        <TechnologiesSection />
       
      </main>

      <Footer />
    </div>
  )
}

