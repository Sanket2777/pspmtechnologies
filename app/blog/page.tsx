import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogCategories } from "@/components/blog/blog-categories"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header/>
      <BlogHero />
      <BlogCategories />
      <BlogGrid />
      <Footer></Footer>
    </main>
  )
}
