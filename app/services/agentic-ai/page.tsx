"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Brain, Cpu, Workflow, ShieldCheck, Rocket } from "lucide-react"

export default function AgenticAIClient() {
  const features = [
    {
      icon: Brain,
      title: "Autonomous AI Agents",
      desc: "Self-directed AI agents that plan, reason, and execute tasks independently.",
    },
    {
      icon: Workflow,
      title: "Multi-Agent Collaboration",
      desc: "Multiple AI agents working together to solve complex workflows.",
    },
    {
      icon: Cpu,
      title: "Tool & API Integration",
      desc: "Agents that interact with APIs, databases, and enterprise tools.",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Scalable",
      desc: "Enterprise-grade AI agents built with safety and scalability in mind.",
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
              <span className="text-green-400">Agentic AI</span> Solutions
            </h1>

            <p className="text-white/80 mb-8">
              Build autonomous AI agents that can reason, plan, and act on your
              behalf. Agentic AI transforms workflows by enabling AI systems
              to make intelligent decisions with minimal human intervention.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-green-400 text-navy-dark px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              Build Agentic AI
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
              alt="Agentic AI Systems"
              width={600}
              height={400}
              className="rounded-3xl shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-background">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our <span className="text-green-400">Agentic AI Capabilities</span>
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
              <item.icon className="w-10 h-10 text-green-400 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-dark text-white text-center">
        <Rocket className="w-12 h-12 text-green-400 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">
          Launch Autonomous AI Agents Today
        </h2>
        <Link
          href="/contact"
          className="inline-block bg-green-400 text-navy-dark px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
        >
          Talk to AI Experts
        </Link>
      </section>

    </main>
  )
}
