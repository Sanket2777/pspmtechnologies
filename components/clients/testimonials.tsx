"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "pankaj narwade",
    position: "CEO, pspmtechnology",
    content:
      "PSPM ERP transformed our business operations completely. The custom ERP solution they developed has increased our efficiency by 40% and reduced operational costs significantly.",
    rating: 5,
  },
  {
    id: 2,
    name: "Dr. Anjali Desai",
    position: "Director, Global Pharma",
    content:
      "The pharmaceutical ERP system is exactly what we needed. It handles everything from inventory to compliance seamlessly. The team's expertise in our industry is remarkable.",
    rating: 5,
  },
  {
    id: 3,
    name: "Suresh Kumar",
    position: "CTO, FinanceHub",
    content:
      "Outstanding work on our mobile banking application. The security features and user experience are top-notch. PSPM delivered beyond our expectations.",
    rating: 5,
  },
  {
    id: 4,
    name: "Priya Nair",
    position: "Operations Manager, RetailMax",
    content:
      "The e-commerce platform they built for us has been a game-changer. Sales have increased by 60% since launch. Highly recommend their services!",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-navy-dark via-teal-dark to-navy-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-green-bright">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12 shadow-2xl">
            <Quote className="w-16 h-16 text-green-bright/20 absolute top-8 left-8" />

            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                "{currentTestimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-bright to-teal-bright rounded-full flex items-center justify-center text-navy-dark font-bold text-xl">
                  {currentTestimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">{currentTestimonial.name}</h4>
                  <p className="text-muted-foreground">{currentTestimonial.position}</p>
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mt-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-green-bright fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-muted border border-border rounded-full hover:bg-green-bright hover:border-green-bright hover:text-navy-dark transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-green-bright w-8" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 bg-muted border border-border rounded-full hover:bg-green-bright hover:border-green-bright hover:text-navy-dark transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
