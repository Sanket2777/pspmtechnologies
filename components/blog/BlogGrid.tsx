"use client"

import Image from "next/image"
import { Calendar, Clock } from "lucide-react"
import { blogPosts } from "@/data/blogPosts"
import LinkedInEmbed from "./LinkedInEmbed"

type BlogGridProps = {
  activeCategory: string
}

export function BlogGrid({ activeCategory }: BlogGridProps) {
  // Filter posts by category
  const filteredPosts =
    activeCategory === "All Posts"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory)

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 bg-muted">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-green-bright text-navy-dark px-3 py-1 text-xs rounded-full font-semibold">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3 group-hover:text-green-bright">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                {/* LinkedIn Embed */}
                <LinkedInEmbed url={post.embedUrl} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
