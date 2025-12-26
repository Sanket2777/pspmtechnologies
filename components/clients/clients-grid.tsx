"use client"

import Image from "next/image"

const clients = [
  { id: 1, name: "TechCorp Industries", logo: "/client-techcorp-logo.jpg" },
  { id: 2, name: "Global Pharma", logo: "/client-pharma-logo.jpg" },
  { id: 3, name: "FinanceHub", logo: "/client-finance-logo.jpg" },
  { id: 4, name: "RetailMax", logo: "/client-retail-logo.jpg" },
  { id: 5, name: "HealthCare Plus", logo: "/client-healthcare-logo.jpg" },
  { id: 6, name: "EduTech Solutions", logo: "/client-edutech-logo.jpg" },
  { id: 7, name: "Manufacturing Pro", logo: "/client-manufacturing-logo.jpg" },
  { id: 8, name: "Logistics Express", logo: "/client-logistics-logo.jpg" },
  { id: 9, name: "Energy Systems", logo: "/client-energy-logo.jpg" },
  { id: 10, name: "Food & Beverage Co", logo: "/client-food-logo.jpg" },
  { id: 11, name: "Real Estate Group", logo: "/client-realestate-logo.jpg" },
  { id: 12, name: "Automotive Solutions", logo: "/client-automotive-logo.jpg" },
]

export function ClientsGrid() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by <span className="text-green-bright">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We've partnered with organizations of all sizes to deliver transformative digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={client.id}
              className="group relative bg-card border border-border rounded-xl p-8 hover:shadow-xl hover:shadow-green-bright/10 transition-all duration-500 animate-fade-in hover:-translate-y-1 flex items-center justify-center"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <div className="relative w-full h-20">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  fill
                  className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Accent Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-bright to-teal-bright transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
