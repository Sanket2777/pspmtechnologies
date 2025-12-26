"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 250, suffix: "+", label: "Happy Clients" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
]

export function StatsSection() {
  const [counts, setCounts] = useState(stats.map(() => 0))
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            stats.forEach((stat, index) => {
              const duration = 2000
              const steps = 60
              const increment = stat.value / steps
              let current = 0

              const timer = setInterval(() => {
                current += increment
                if (current >= stat.value) {
                  setCounts((prev) => {
                    const newCounts = [...prev]
                    newCounts[index] = stat.value
                    return newCounts
                  })
                  clearInterval(timer)
                } else {
                  setCounts((prev) => {
                    const newCounts = [...prev]
                    newCounts[index] = Math.floor(current)
                    return newCounts
                  })
                }
              }, duration / steps)
            })
          }
        })
      },
      { threshold: 0.5 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 gradient-navy-teal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-5xl md:text-6xl font-bold text-green-bright mb-2">
                {counts[index]}
                {stat.suffix}
              </div>
              <div className="text-white/80 text-lg font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
