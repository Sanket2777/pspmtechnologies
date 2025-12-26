"use client"

import { useEffect, useState } from "react"

export function ServicesHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden gradient-navy-teal">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-bright/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20">
        <div className={`text-center max-w-4xl mx-auto ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Our <span className="text-green-bright">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
            Comprehensive IT solutions designed to transform your business and drive sustainable growth.
          </p>
        </div>
      </div>
    </section>
  )
}
