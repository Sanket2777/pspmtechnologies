"use client"

import { Globe, Smartphone, Users, Shield, Zap, Cpu } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: Cpu,
    title: "AI & Machine Learning Solutions",
    description:
      "We deliver advanced AI and machine learning solutions to help businesses worldwide automate processes, gain intelligent insights, and scale efficiently.",
  },
  {
    icon: Globe,
    title: "Website & Web Application Development",
    description:
      "We build high-performance, SEO-friendly websites and web applications for startups, enterprises, and global clients using modern technologies.",
  },
  {
    icon: Smartphone,
    title: "Mobile & Application Development",
    description:
      "Custom mobile and desktop application development services designed for performance, scalability, and seamless user experience across platforms.",
  },
  {
    icon: Users,
    title: "IT Consulting & Digital Transformation",
    description:
      "Strategic IT consulting services helping businesses across India and globally with digital transformation, technology planning, and innovation.",
  },
  {
  icon: Globe,
  title: "SEO & Digital Marketing Services",
  description:
    "Result-driven SEO and digital marketing services including search engine optimization, content marketing, social media marketing, and online brand growth strategies for businesses in India and worldwide.",
},

  {
    icon: Zap,
    title: "Performance Optimization & Automation",
    description:
      "System optimization and intelligent automation services to improve speed, efficiency, and operational performance for global businesses.",
  },
]

export function FeaturesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 100)
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-background"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* 🔑 SEO-Friendly Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="services-heading"
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Our <span className="text-green-bright">IT Services & Solutions</span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed">
            We provide end-to-end IT services including website development,
            application development, AI solutions, automation, cybersecurity,
            SEO services, and digital transformation for businesses in India and
            across the globe.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-500 border-border hover:border-green-bright/50 ${
                visibleCards.includes(index)
                  ? "animate-scale-in"
                  : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-bright/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-bright group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-green-bright group-hover:text-navy-dark transition-colors" />
                </div>

                {/* 🔑 H3 for service-level SEO */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-green-bright transition-colors">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
