"use client"

import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of ERP Systems: AI and Automation",
    excerpt:
      "Explore how artificial intelligence and automation are transforming enterprise resource planning systems and business operations.",
    image: "/blog-ai-erp-future.jpg",
    category: "ERP Solutions",
    author: "Rajesh Kumar",
    date: "March 15, 2024",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Building Scalable Web Applications with Next.js",
    excerpt:
      "Learn best practices for developing high-performance, scalable web applications using Next.js and modern React patterns.",
    image: "/blog-nextjs-development.jpg",
    category: "Web Development",
    author: "Amit Patel",
    date: "March 12, 2024",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Mobile-First Design: Why It Matters in 2024",
    excerpt:
      "Understanding the importance of mobile-first approach in modern application development and user experience design.",
    image: "/blog-mobile-first-design.jpg",
    category: "Mobile Apps",
    author: "Sneha Reddy",
    date: "March 10, 2024",
    readTime: "5 min read",
  },
  {
    id: 4,
    title: "Cloud Migration Strategies for Enterprises",
    excerpt:
      "A comprehensive guide to planning and executing successful cloud migration projects for large organizations.",
    image: "/blog-cloud-migration.jpg",
    category: "Cloud Computing",
    author: "Priya Sharma",
    date: "March 8, 2024",
    readTime: "10 min read",
  },
  {
    id: 5,
    title: "Machine Learning in Business: Real-World Applications",
    excerpt:
      "Discover practical applications of machine learning in business operations, from predictive analytics to automation.",
    image: "/blog-ml-business.jpg",
    category: "AI & ML",
    author: "Karthik Menon",
    date: "March 5, 2024",
    readTime: "7 min read",
  },
  {
    id: 6,
    title: "Case Study: Transforming Pharmaceutical Manufacturing",
    excerpt:
      "How we helped a leading pharmaceutical company streamline operations with a custom ERP solution, achieving 40% efficiency gains.",
    image: "/blog-pharma-case-study.jpg",
    category: "Case Studies",
    author: "Vikram Singh",
    date: "March 1, 2024",
    readTime: "12 min read",
  },
]

export function BlogGrid() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-green-bright/10 transition-all duration-500 animate-fade-in hover:-translate-y-2"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-muted">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-green-bright text-navy-dark text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-green-bright transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Author & Read More */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-medium text-foreground">{post.author}</span>
                  <button className="group/btn flex items-center gap-2 text-green-bright font-semibold hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Accent Border */}
              <div className="h-1 bg-gradient-to-r from-green-bright via-teal-bright to-green-bright transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-card border-2 border-green-bright text-foreground font-semibold rounded-full hover:bg-green-bright hover:text-navy-dark transition-all duration-300 shadow-lg hover:shadow-green-bright/30">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  )
}
