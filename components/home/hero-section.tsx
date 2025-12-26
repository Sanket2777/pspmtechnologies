"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image"; // ✅ Next.js Image Optimization
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  // ✅ Keywords Optimized for Global + India Search Intent
  const sliderImages = [
    {
      src: "/Powerful Web Presence.jpg",
      title: "Enterprise Web Development", // ✅ Better Keyword than "Powerful Web Presence"
      description:
        "Scalable, secure, and visually stunning websites tailored for global business growth.",
    },
    {
      src: "/E-commerce Platform.jpg",
      title: "Global E-commerce Platforms",
      description:
        "High-performance stores with multi-currency support and seamless payment integration.",
    },
    {
      src: "/Mobile Applications.jpg",
      title: "Custom Mobile App Development",
      description:
        "Native and cross-platform mobile apps designed for performance and worldwide scalability.",
    },
    {
      src: "/AI Solutions.jpg",
      title: "AI & Automation Solutions",
      description:
        "Next-gen Artificial Intelligence and machine learning solutions for modern enterprises.",
    },
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => handleNextSlide(), 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
      setFade(true);
      setIsAnimating(false);
    }, 800);
  };

  const handlePrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setFade(false);
    setTimeout(() => {
      setCurrentSlide(
        (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
      );
      setFade(true);
      setIsAnimating(false);
    }, 800);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-dark via-navy-medium to-teal-dark">
      
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-bright/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-accent/10 rounded-full blur-3xl animate-float-slow delay-1000" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            
            {/* ✅ Visible Tagline with Location Keyword (Good for Trust) */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-bright/10 border border-green-bright/20 rounded-full text-green-bright text-sm font-medium">
              <div className="w-2 h-2 bg-green-bright rounded-full animate-pulse" />
              Leading IT Company in India Serving Globally
            </div>

            <div
              key={sliderImages[currentSlide].title}
              className={`transition-opacity duration-700 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* ✅ Main H1: Dynamic & Visible (Google likes this) */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {sliderImages[currentSlide].title}
              </h1>

              <p className="text-2xl text-green-bright mt-2 font-medium">
                {sliderImages[currentSlide].description}
              </p>
            </div>

            {/* ✅ Description mixing "India" (Cost/Talent hub) and "Global" (Quality) */}
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
              We are a top-rated software development company based in India, 
              delivering world-class <strong>web applications, AI solutions, and digital marketing strategies</strong> to 
              clients in the USA, UK, Dubai, and across the globe.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-green-bright text-navy-dark hover:bg-green-bright/90 font-semibold text-lg px-8 py-6 group"
              >
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-gray hover:bg-white/10 font-semibold text-lg px-8 py-6"
              >
                <Link href="/portfolio">
                  <Play className="mr-2 h-5 w-5" />
                  View Global Portfolio
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Image Section */}
          <div
            className={`relative h-[400px] sm:h-[500px] lg:h-[550px] w-full transition-opacity duration-700 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* ✅ Performance Optimized Image (Crucial for Core Web Vitals) */}
            <Image
              src={sliderImages[currentSlide].src}
              alt={`${sliderImages[currentSlide].title} - IT Services India & Global`}
              fill
              priority={true} // Load ASAP
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-1000"
            />

            {/* Controls */}
            <button
              onClick={handlePrevSlide}
              aria-label="Previous Slide"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full z-20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNextSlide}
              aria-label="Next Slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full z-20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}