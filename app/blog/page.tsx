import Blog from "@/components/blog/page"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Technology Blog | PSPM Technologies",
  description:
    "Read latest insights, ERP solutions, AI trends, and technology updates from PSPM Technologies.",
}

export default function BlogPage() {
  return (
    <>
     <Blog/>
     <Footer />

    </>
  )
}
