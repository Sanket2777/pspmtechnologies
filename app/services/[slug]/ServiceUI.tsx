"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Footer } from "@/components/footer"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
}

export default function ServiceUI({ service, relatedServices }) {
  return (
    <>
      {/* ================= BREADCRUMB ================= */}
      <nav className="bg-gray-100 py-4">
        <div className="container mx-auto px-6 text-sm text-gray-600">
          <Link href="/">Home</Link> /{" "}
          <Link href="/services">Services</Link> /{" "}
          <span className="text-black font-medium">{service.title}</span>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="py-32 bg-gradient-to-b from-slate-950 to-slate-900 text-white text-center"
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-gray-300">{service.longDescription}</p>
        </div>
      </motion.section>

      {/* ================= SPLIT IMAGE & INFO ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
            <p className="mb-6 text-gray-700">{service.description}</p>

            <h3 className="text-2xl font-semibold mb-4">Features</h3>
            <ul className="mb-6 space-y-2">
              {service.features.map((f, i) => (
                <li key={i} className="flex items-center">
                  <span className="text-green-600 mr-2">✔</span> {f}
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Benefits</h3>
            <ul className="space-y-2">
              {service.benefits.map((b, i) => (
                <li key={i} className="flex items-center">
                  <span className="text-green-600 mr-2">✔</span> {b}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-[380px] rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12">Our Process</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Requirement Analysis",
              "Solution Design",
              "Development & Testing",
              "Deployment & Support",
            ].map((step, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 text-center bg-gray-50 rounded-2xl"
              >
                <div className="text-4xl font-extrabold text-green-600 mb-4">
                  {i + 1}
                </div>
                <p className="font-semibold">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RELATED SERVICES ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-10">Related Services</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link
                  href={`/services/${item.slug}`}
                  className="text-green-600 font-semibold"
                >
                  View Details →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-black text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold mb-4">Let’s Build Something Powerful</h2>
          <p className="text-gray-300 mb-10">
            Talk to our experts and transform your idea into a scalable solution.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-white text-black px-10 py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
