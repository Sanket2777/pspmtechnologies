"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Code2, LayoutDashboard, Server, Monitor, Rocket } from "lucide-react"
import Head from "next/head"

export default function WebDevelopmentPage() {
  const features = [
    {
      icon: LayoutDashboard,
      title: "Frontend Development",
      desc: "Responsive and interactive UI using React, Next.js, and modern frameworks.",
    },
    {
      icon: Server,
      title: "Backend Development",
      desc: "Secure, scalable server-side logic with Node.js, Express, and databases.",
    },
    {
      icon: Code2,
      title: "Fullstack Solutions",
      desc: "Complete end-to-end solutions combining frontend and backend expertise.",
    },
    {
      icon: Monitor,
      title: "Web Optimization",
      desc: "SEO-friendly, fast, and fully optimized web applications.",
    },
  ]

  const discoverySteps = [
    {
      title: "1. Requirements Analysis",
      desc: "Understanding client needs, target audience, and project goals.",
    },
    {
      title: "2. Wireframing & UI/UX Design",
      desc: "Creating prototypes and design layouts for a seamless user experience.",
    },
    {
      title: "3. Development & Coding",
      desc: "Building scalable, secure, and responsive web applications.",
    },
    {
      title: "4. Testing & QA",
      desc: "Rigorous testing to ensure performance, security, and responsiveness.",
    },
    {
      title: "5. Deployment & Launch",
      desc: "Deploying the website with monitoring, analytics, and SEO optimization.",
    },
    {
      title: "6. Maintenance & Support",
      desc: "Ongoing support and feature updates based on client feedback.",
    },
  ]

  return (
    <>
      <Head>
        <title>Web Development Services | PSPM Technologies</title>
        <meta
          name="description"
          content="Professional Web Development services including frontend, backend, fullstack, and optimized web solutions tailored to your business."
        />
      </Head>

      <main className="overflow-hidden bg-background text-foreground">

        {/* HERO */}
        <section className="pt-32 pb-24 bg-gradient-to-br from-[#061a2f] via-[#0b2d4d] to-[#06243b] text-white">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                <span className="text-green-bright">Web Development</span> Services
              </h1>

              <p className="text-white/80 mb-8">
                We create fast, secure, and scalable web applications tailored to your business.
                Our fullstack expertise ensures seamless user experiences and optimized performance.
              </p>

              <a
                href="/contact"
                className="inline-block bg-green-bright text-navy-dark px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
              >
                Get Web Consultation
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
                alt="Web Development Technology"
                width={600}
                height={400}
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 bg-background">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-green-bright">Web Development Services</span>
          </h2>

          <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border rounded-2xl p-6 text-center hover:shadow-xl transition"
              >
                <item.icon className="w-10 h-10 text-green-bright mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* DISCOVERY / PROCESS */}
        <section className="py-20 bg-muted/10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-green-bright">Development Process</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {discoverySteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-navy-dark/10 rounded-xl p-6 shadow-md"
              >
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-navy-dark text-white text-center">
          <Rocket className="w-12 h-12 text-green-bright mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            Launch Your Web Project Today
          </h2>
          <a
            href="/contact"
            className="inline-block bg-green-bright text-navy-dark px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            Talk to Experts
          </a>
        </section>
      </main>
    </>
  )
}
