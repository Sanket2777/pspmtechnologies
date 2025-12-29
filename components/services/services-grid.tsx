"use client"

import {
  Globe,
  Smartphone,
  Users,
  Code,
  Cloud,
  Computer,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

const services = [
  {
    icon: Computer,
    title: "AI-Powered Solutions",
    description:
      "Advanced AI chatbots, predictive analytics, and automation to scale business intelligence.",
    features: ["AI Chatbots", "Predictive Analytics", "NLP", "Automation"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "High-performance, SEO-optimized websites using Next.js & React.",
    features: ["Responsive UI", "SEO", "E-commerce", "CMS"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Custom Android, iOS & cross-platform mobile applications.",
    features: ["Android", "iOS", "Cross-platform", "APIs"],
  },
  {
    icon: Users,
    title: "IT Consulting",
    description:
      "Digital transformation strategies tailored to your business.",
    features: ["Strategy", "Consulting", "Optimization"],
  },
  {
    icon: Code,
    title: "Custom Software",
    description:
      "Secure, scalable software solutions designed for growth.",
    features: ["Agile", "Scalable", "Secure"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Cloud migration & DevOps automation using AWS & Azure.",
    features: ["Cloud", "DevOps", "CI/CD", "IaC"],
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

export function ServicesGrid() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative py-24 lg:py-32 bg-gradient-to-br from-[#061a2f] via-[#0b2d4d] to-[#06243b] overflow-hidden"
    >
      {/* Green glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.15),transparent_60%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <header className="text-center max-w-3xl mx-auto mb-20">
          <h2
            id="services-heading"
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Our <span className="text-green-bright">IT Services</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80">
            End-to-end IT, AI, cloud & software solutions built for modern
            businesses.
          </p>
        </header>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-10"
          role="list"
        >
          {services.map((service, index) => (
            <motion.article key={index} variants={item} role="listitem">
              <Card className="group h-full bg-white/5 backdrop-blur-xl border border-white/10 hover:border-green-bright/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-bright/10">
                <CardContent className="p-8 flex flex-col h-full text-white">

                  {/* Icon */}
                  <div className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-green-bright/30 to-green-bright/5 group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-green-bright" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-white/70 mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-white/80"
                      >
                        <span className="w-2 h-2 bg-green-bright rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    asChild
                    variant="outline"
                    className="mt-auto border-green-bright/40 text-green-bright hover:bg-green-bright hover:text-[#061a2f] transition-all"
                    aria-label={`Get started with ${service.title}`}
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>

                </CardContent>
              </Card>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

