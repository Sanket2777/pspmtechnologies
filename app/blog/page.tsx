import { Metadata } from "next"
import { BlogHero } from "../../components/blog/BlogHero"
import { BlogCategories } from "../../components/blog/BlogCategories"

export const metadata: Metadata = {
  title: "Technology Blog | PSPM Technologies",
  description:
    "Read latest insights, ERP solutions, AI trends, and technology updates from PSPM Technologies.",
}

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogCategories />
    </>
  )
}
