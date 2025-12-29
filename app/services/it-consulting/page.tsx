"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Monitor, Cpu, BarChart3, Users, Rocket } from "lucide-react"
import Head from "next/head"

export default function ITConsultingPage() {
  const features = [
    { icon: Monitor, title: "IT Strategy", desc: "Aligning IT solutions with business goals to drive growth." },
    { icon: Cpu, title: "Infrastructure Planning", desc: "Design and optimize IT systems for efficiency." },
    { icon: BarChart3, title: "Data Analytics Consulting", desc: "Leveraging data to make informed decisions." },
    { icon: Users, title: "Security & Compliance", desc: "Ensuring secure and compliant IT operations." },
  ]

  const discoverySteps = [
    { title: "1. Business Assessment", desc: "Understanding your current IT landscape and challenges." },
    { title: "2. IT Roadmap", desc: "Developing a clear plan for technology adoption and improvement." },
    { title: "3. Solution Design", desc: "Creating tailored IT solutions for your needs." },
    { title: "4. Implementation & Support", desc: "Deploying systems and providing ongoing support." },
  ]

  return (
    <>
      <Head>
        <title>IT Consulting Services | PSPM Technologies</title>
        <meta
          name="description"
          content="Professional IT Consulting services to optimize infrastructure, strategy, security, and data-driven decision making."
        />
      </Head>

      <main className="overflow-hidden bg-background text-foreground">

        {/* HERO */}
        <section className="pt-32 pb-24 bg-gradient-to-br from-[#061a2f] via-[#0b2d4d] to-[#06243b] text-white">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6"><span className="text-green-bright">IT Consulting</span> Services</h1>
              <p className="text-white/80 mb-8">
                We help businesses optimize IT infrastructure, strategy, and processes to improve efficiency, security, and growth.
              </p>
              <a href="/contact" className="inline-block bg-green-bright text-navy-dark px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
                Get IT Consultation
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
              <Image
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="IT Consulting"
                width={600} height={400}
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 bg-background">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-green-bright">IT Consulting Services</span>
          </h2>
          <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1 }}
                className="border rounded-2xl p-6 text-center hover:shadow-xl transition">
                <item.icon className="w-10 h-10 text-green-bright mx-auto mb-4"/>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* DISCOVERY */}
        <section className="py-20 bg-muted/10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-green-bright">Consulting Process</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {discoverySteps.map((step, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx*0.2 }}
                className="bg-navy-dark/10 rounded-xl p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-navy-dark text-white text-center">
          <Rocket className="w-12 h-12 text-green-bright mx-auto mb-4"/>
          <h2 className="text-3xl font-bold mb-4">Start Your IT Project Today</h2>
          <a href="/contact" className="inline-block bg-green-bright text-navy-dark px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
            Talk to Experts
          </a>
        </section>
      </main>
    </>
  )
}
