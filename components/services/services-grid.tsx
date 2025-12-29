"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

/* =======================
   SERVICES DATA
======================= */
const services = [
  {
    title: "AI-Powered Solutions",
    description:
      "Intelligent AI systems including chatbots, automation, and predictive analytics to accelerate business growth.",
    features: ["AI Chatbots", "NLP", "Predictive Analytics", "Automation"],
    image: "/AI Solutions.jpg",
  },
  {
    title: "Web Development",
    description:
      "High-performance, scalable, and SEO-optimized web applications using modern frameworks.",
    features: ["Next.js", "React", "SEO", "Responsive UI"],
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
  },
  {
    title: "Mobile App Development",
    description:
      "Custom Android, iOS, and cross-platform mobile applications with seamless UX.",
    features: ["Android", "iOS", "Flutter", "APIs"],
    image: "/ab2.png",
  },
  {
    title: "IT Consulting",
    description:
      "Strategic IT consulting to optimize operations and enable digital transformation.",
    features: ["Strategy", "Architecture", "Optimization"],
    image: "/aboutus.png",
  },
  {
    title: "Custom Software",
    description:
      "Secure and scalable custom software tailored to enterprise needs.",
    features: ["Enterprise Apps", "Security", "Scalability"],
    image: "/custom.jpg",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Cloud migration and DevOps automation for speed, reliability, and scalability.",
    features: ["AWS", "Azure", "CI/CD", "DevOps"],
    image: "/cloud.jpg",
  },
]

/* =======================
   ANIMATIONS
======================= */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

/* =======================
   COMPONENT
======================= */
export function ServicesGrid() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section
        aria-labelledby="services-hero-heading"
        className="relative pt-36 pb-28 bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.18),transparent_55%)]" />

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.h1
            id="services-hero-heading"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6"
          >
            Powerful <span className="text-green-bright">IT & AI Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 mb-10"
          >
            End-to-end digital solutions designed to innovate, scale, and transform your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-green-bright text-[#020617] hover:scale-105 transition">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section
        id="services"
        aria-labelledby="services-heading"
        className="py-24 bg-[rgb(241,241,243)]"
      >
        <header className="text-center max-w-3xl mx-auto mb-20">
  <h2
    id="services-heading"
    className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
  >
    Our <span className="text-green-600">Services</span>
  </h2>
  <p className="text-lg text-gray-700">
    Technology-driven solutions built for performance, security, and scalability.
  </p>
</header>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="container mx-auto px-6 grid md:grid-cols-2 xl:grid-cols-3 gap-12"
          role="list"
        >
          {services.map((service, index) => (
  <motion.article key={index} variants={item} role="listitem">
    <Card className="h-full bg-white border border-gray-200 hover:border-green-600 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-green-100">
      <CardContent className="p-8 flex flex-col h-full text-gray-900">

        {/* Image */}
        <div className="relative h-40 mb-6 rounded-xl overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>

        <h3 className="text-2xl font-bold mb-3 text-gray-900">
          {service.title}
        </h3>

        <p className="text-gray-700 mb-6">
          {service.description}
        </p>

        <ul className="space-y-2 mb-8">
          {service.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2 text-sm text-gray-600"
            >
              <span className="w-2 h-2 bg-green-600 rounded-full" />
              {feature}
            </li>
          ))}
        </ul>

        <Button
  asChild
  className="mt-auto bg-gradient-to-r from-green-500 to-blue-500 text-white hover:scale-105 hover:from-green-600 hover:to-blue-600 transition-all"
  aria-label={`Learn more about ${service.title}`}
>
  <Link href="/contact">Get Started</Link>
</Button>


      </CardContent>
    </Card>
  </motion.article>
))}

          
        </motion.div>
      </section>
    </main>
  )
}
