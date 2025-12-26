import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Pharmaceutical ERP System",
    category: "ERP Software",
    description: "Complete ERP solution for pharmaceutical manufacturing and distribution management.",
    image: "/pharmaceutical-erp-dashboard-with-inventory-manage.jpg",
  },
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Modern, scalable e-commerce platform with advanced features and seamless checkout.",
    image: "/modern-ecommerce-website-with-product-catalog.jpg",
  },
  {
    title: "Mobile Banking App",
    category: "App Development",
    description: "Secure and intuitive mobile banking application with real-time transaction tracking.",
    image: "/mobile-banking-app-interface-with-transactions.jpg",
  },
]

export function LatestProjectsSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Latest <span className="text-green-bright">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Explore our recent work and see how we've helped businesses transform digitally.
            </p>
          </div>
          <Button asChild size="lg" className="bg-green-bright text-navy-dark hover:bg-green-bright/90 font-semibold">
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-border hover:border-green-bright/50 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <div className="text-sm font-semibold text-green-bright mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-green-bright transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center text-green-bright font-semibold hover:gap-2 transition-all"
                >
                  View Project
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
