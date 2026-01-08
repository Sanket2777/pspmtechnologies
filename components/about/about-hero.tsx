"use client"

import { useEffect, useState } from "react"
import { Sparkles } from "lucide-react" // Ensure you have lucide-react installed

export function AboutHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-navy-dark">
      
      {/* 1. BACKGROUND EFFECTS (Modern & Attractive) */}
      {/* Subtle Grid Pattern for "Tech" feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Glowing Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-green-bright/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] animate-pulse delay-700" />
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-dark/50 to-navy-dark"></div>

      {/* 2. MAIN CONTENT */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20">
        <div className={`text-center max-w-5xl mx-auto flex flex-col items-center ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          
          {/* SEO & BRANDING KICKER (The "Pill Badge") */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-slide-up">
            <Sparkles className="w-4 h-4 text-green-bright" />
            <span className="text-sm font-semibold tracking-wider uppercase text-green-bright">
              Global IT & AI Solutions Provider
            </span>
          </div>

          {/* MAIN HEADLINE (Big & Bold) */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight animate-slide-up" style={{ animationDelay: "100ms" }}>
            The Story of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-bright via-teal-400 to-blue-500">
              PSPM Technologies
            </span>
          </h1>

          {/* SEO DESCRIPTION (Readable & Impactful) */}
          <p 
            className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            We are more than just developers; we are your strategic partners. 
            Empowering businesses globally with 
            <strong className="text-white font-medium"> Advanced AI Services</strong> and 
            <strong className="text-white font-medium"> Custom App Development</strong>. 
            Proudly engineering excellence from 
            <span className="inline-block border-b-2 border-green-bright/50 pb-0.5 text-white font-medium mx-1">
              Pune, India
            </span> 
            since 2020.
          </p>

        </div>
      </div>
    </section>
  )
}