"use client"

import { Globe, Smartphone, Users, Zap, Cpu } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"

const features = [
  {
    icon: Cpu,
    title: "AI & Machine Learning Solutions",
    description:
      "We deliver advanced AI and machine learning solutions to help businesses worldwide automate processes, gain intelligent insights, and scale efficiently.",
    link: "/services/ai-ml",
  },
  {
    icon: Globe,
    title: "Website & Web Application Development",
    description:
      "We build high-performance, SEO-friendly websites and web applications for startups, enterprises, and global clients using modern technologies.",
    link: "/services/web-development",
  },
  {
    icon: Smartphone,
    title: "Mobile & Application Development",
    description:
      "Custom mobile and desktop application development services designed for performance, scalability, and seamless user experience across platforms.",
    link: "/services/app-development",
  },
  {
    icon: Users,
    title: "IT Consulting & Digital Transformation",
    description:
      "Strategic IT consulting services helping businesses across India and globally with digital transformation, technology planning, and innovation.",
    link: "/services/it-consulting",
  },
  {
    icon: Globe,
    title: "SEO & Digital Marketing Services",
    description:
      "Result-driven SEO and digital marketing services including search engine optimization, content marketing, social media marketing, and online brand growth strategies for businesses in India and worldwide.",
    link: "/services/seo-digital-marketing",
  },
  {
    icon: Zap,
    title: "Performance Optimization & Automation",
    description:
      "System optimization and intelligent automation services to improve speed, efficiency, and operational performance for global businesses.",
    link: "/services/automation",
  },
]

export function FeaturesSection() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const animationRef = useRef<number | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const autoScroll = () => {
      if (!isHovered && !isDragging.current) {
        slider.scrollLeft += 0.5
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0
        }
      }
      animationRef.current = requestAnimationFrame(autoScroll)
    }

    animationRef.current = requestAnimationFrame(autoScroll)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [isHovered])

  // Drag logic
  const handleMouseDown = (e: React.MouseEvent) => {
    const slider = sliderRef.current
    if (!slider) return
    isDragging.current = true
    startX.current = e.pageX - slider.offsetLeft
    scrollLeft.current = slider.scrollLeft
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleMouseLeave = () => {
    isDragging.current = false
    setIsHovered(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    e.preventDefault()
    const slider = sliderRef.current
    if (!slider) return
    const x = e.pageX - slider.offsetLeft
    const walk = (x - startX.current) * 1.5
    slider.scrollLeft = scrollLeft.current - walk
  }

  return (
    <section className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-green-bright">IT Services & Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We provide end-to-end IT services including website development,
            application development, AI solutions, automation, SEO services and
            digital transformation for global businesses.
          </p>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-8 overflow-x-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {[...features, ...features].map((feature, index) => (
            <Card
              key={index}
              onClick={() => router.push(feature.link)}
              className="min-w-[300px] max-w-[300px] cursor-pointer hover:shadow-2xl transition-all duration-500 border-border hover:border-green-bright/50 hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-bright/10 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-green-bright" />
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground">
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
