"use client"

import { useState } from "react"
import { Tag } from "lucide-react"

const categories = [
  "All Posts",
  "ERP Solutions",
  "Web Development",
  "Mobile Apps",
  "AI & ML",
  "Cloud Computing",
  "Case Studies",
]

export function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState("All Posts")

  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-2 text-muted-foreground mr-4">
            <Tag className="w-5 h-5" />
            <span className="font-semibold">Categories:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-green-bright text-navy-dark shadow-lg shadow-green-bright/30"
                  : "bg-card border border-border text-foreground hover:border-green-bright/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
