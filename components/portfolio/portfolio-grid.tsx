"use client"
import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Filter } from "lucide-react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
const categories = ["All", "Web Development", "Mobile Apps", "E-commerce", "AI/ML"]

const projects = [
  // {
  //   id: 1,
  //   title: "Pharmaceutical ERP System",
  //   category: "ERP Systems",
  //   description:
  //     "Complete ERP solution for pharmaceutical manufacturing with inventory, production, and quality control modules.",
  //   image: "/pharmaceutical-erp-dashboard-with-inventory-manage.jpg",
  //   tags: ["React", "Node.js", "PostgreSQL"],
  // },
  {
    id: 2,
    title: "Modern Dashboard Analytics",
    category: "ERP Systems",
    description: "Real-time analytics dashboard with advanced reporting and data visualization capabilities.",
    image: "/modern-erp-dashboard-interface-with-charts-and-ana.jpg",
    tags: ["Next.js", "TypeScript", "MongoDB"],

  },
  {
    id: 3,
    title: "E-commerce Platform",
    category: "E-commerce",
    description: "Full-featured e-commerce platform with product catalog, shopping cart, and payment integration.",
    image: "/modern-ecommerce-website-with-product-catalog.jpg",
    tags: ["React", "Stripe", "AWS"],
  },
  {
    id: 4,
    title: "Mobile Banking App",
    category: "Mobile Apps",
    description: "Secure mobile banking application with transaction management and real-time notifications.",
    image: "/mobile-banking-app-interface-with-transactions.jpg",
    tags: ["React Native", "Firebase", "Node.js"],
  },
  {
    id: 5,
    title: "Healthcare Management System",
    category: "Web Development",
    description: "Comprehensive healthcare management platform for patient records, appointments, and billing.",
    image: "/healthcare-management-system-dashboard.jpg",
    tags: ["Vue.js", "Python", "MySQL"],
  },
  {
    id: 6,
    title: "AI-Powered Chatbot",
    category: "AI/ML",
    description: "Intelligent chatbot with natural language processing for customer support automation.",
    image: "/ai-chatbot-interface.png",
    tags: ["Python", "TensorFlow", "React"],
  },
  {
    id: 7,
    title: "Inventory Management System",
    category: "ERP Systems",
    description: "Cloud-based inventory management with real-time tracking and automated reordering.",
    image: "/inventory-dashboard-charts.png",
    tags: ["Angular", "Node.js", "MongoDB"],
  },
  {
    id: 8,
    title: "Food Delivery App",
    category: "Mobile Apps",
    description: "On-demand food delivery platform with real-time tracking and payment integration.",
    image: "/food-delivery-app.png",
    tags: ["Flutter", "Firebase", "Google Maps"],
  },
  {
    id: 9,
    title: "CRM Platform",
    category: "Web Development",
    description: "Customer relationship management system with sales pipeline and analytics.",
    image: "/crm-dashboard-with-sales-pipeline.jpg",
    tags: ["React", "GraphQL", "PostgreSQL"],
  },
]

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16 animate-fade-in">
          <div className="flex items-center gap-2 text-muted-foreground mr-4">
            <Filter className="w-5 h-5" />
            <span className="font-semibold">Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                  ? "bg-green-bright text-navy-dark shadow-lg shadow-green-bright/30 scale-105"
                  : "bg-card border border-border text-foreground hover:border-green-bright/50 hover:shadow-md"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-green-bright/10 transition-all duration-500 animate-fade-in hover:-translate-y-2"
              style={{ animationDelay: `${index * 50}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Overlay Content */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hoveredProject === project.id ? "opacity-100" : "opacity-0"
                    }`}
                >
                  <Link
                    href={`/projects/${project.id}`}
                    className="px-6 py-3 bg-green-bright text-navy-dark font-semibold rounded-full flex items-center gap-2 hover:bg-green-bright/90 transition-colors shadow-lg"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs font-semibold text-green-bright uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-green-bright transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-muted text-foreground rounded-full border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Accent Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-bright via-teal-bright to-green-bright transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <button className="px-8 py-4 bg-card border-2 border-green-bright text-foreground font-semibold rounded-full hover:bg-green-bright hover:text-navy-dark transition-all duration-300 shadow-lg hover:shadow-green-bright/30">
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  )
}
