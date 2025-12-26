import { Database, Globe, Smartphone, Users, Code, Cloud, Shield, BarChart, Computer } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
 {
  icon: Computer, // lucide-react किंवा इतर icon वापर
  title: "AI-Powered Solutions",
  description:
    "Smart AI-driven tools and services designed to enhance business efficiency, automate workflows, and provide intelligent insights. From predictive analytics to chatbot systems, we help you integrate AI seamlessly into your operations.",
  features: [
    "AI Chatbot Development",
    "Predictive Analytics & Forecasting",
    "Computer Vision Solutions",
    "Natural Language Processing (NLP)",
    "AI-driven Business Automation"
  ],
},

  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive websites built with cutting-edge technologies. We create high-performance web applications that deliver exceptional user experiences and drive business results.",
    features: ["Responsive Design", "SEO Optimization", "E-commerce Solutions", "CMS Integration"],
  },
  {
    icon: Smartphone,
    title: "Application Development",
    description:
      "Custom mobile and desktop applications designed to meet your specific business requirements. We develop native and cross-platform apps for iOS, Android, and Windows.",
    features: ["Native & Hybrid Apps", "Cross-platform Development", "API Integration", "Offline Functionality"],
  },
  {
    icon: Users,
    title: "IT Consulting",
    description:
      "Expert guidance on technology strategy, digital transformation, and IT infrastructure optimization. We help businesses make informed decisions about their technology investments.",
    features: ["Technology Assessment", "Digital Strategy", "Process Optimization", "Change Management"],
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Bespoke software solutions designed from the ground up to address your unique business challenges and workflows. We build scalable, maintainable applications that grow with your business.",
    features: ["Agile Development", "Scalable Architecture", "Legacy System Modernization", "Third-party Integration"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Cloud migration, deployment, and management services to help you leverage the power of cloud computing. We work with AWS, Azure, and Google Cloud Platform.",
    features: ["Cloud Migration", "Infrastructure as Code", "DevOps Implementation", "Cost Optimization"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Comprehensive security solutions to protect your business data and ensure compliance with industry regulations. We implement best practices for data security and privacy.",
    features: ["Security Audits", "Compliance Management", "Data Encryption", "Access Control"],
  },
  {
    icon: BarChart,
    title: "Business Intelligence",
    description:
      "Transform your data into actionable insights with our BI solutions. We help you make data-driven decisions with advanced analytics and visualization tools.",
    features: ["Data Analytics", "Custom Dashboards", "Predictive Analytics", "Reporting Automation"],
  },
]

export function ServicesGrid() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive <span className="text-green-bright">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From ERP systems to custom applications, we provide end-to-end IT services to meet all your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-border hover:border-green-bright/50 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-green-bright/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-bright group-hover:scale-110 transition-all duration-300">
                    <service.icon className="h-8 w-8 text-green-bright group-hover:text-navy-dark transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-green-bright transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-green-bright rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      variant="outline"
                      className="border-green-bright/30 text-green-bright hover:bg-green-bright hover:text-navy-dark bg-transparent"
                    >
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
