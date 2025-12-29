"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Cpu, Settings, BarChart3, Rocket } from "lucide-react"

export default function AITransformationPage() {
  const features = [
    {
      icon: Cpu,
      title: "Legacy Software Modernization",
      desc: "Upgrade outdated systems into modern, scalable platforms.",
    },
    {
      icon: Settings,
      title: "AI-Driven Automation",
      desc: "Automate workflows using intelligent AI systems.",
    },
    {
      icon: BarChart3,
      title: "Cloud & Data Transformation",
      desc: "Migrate services to cloud-native architectures.",
    },
  ]

  return (
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
              AI <span className="text-green-bright">Transformation</span>
            </h1>

            <p className="text-white/80 mb-8">
              Transform legacy software and services into intelligent,
              future-ready systems powered by AI.
            </p>

            <a
              href="/contact"
              className="inline-block bg-green-bright text-navy-dark px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              Start Transformation
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
              alt="AI Transformation"
              width={600}
              height={400}
              className="rounded-3xl shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our <span className="text-green-bright">Capabilities</span>
        </h2>

        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* CTA */}
      <section className="py-20 bg-navy-dark text-white text-center">
        <Rocket className="w-12 h-12 text-green-bright mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">
          Begin Your AI Transformation Today
        </h2>
        <a
          href="/contact"
          className="inline-block bg-green-bright text-navy-dark px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
        >
          Talk to Experts
        </a>
      </section>
    </main>
  )
}


