"use client"

import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
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

  const processSteps = [
    {
      title: "1. Use Case Discovery",
      desc: "We analyze your business workflows to identify high-impact opportunities for agentic AI automation.",
    },
    {
      title: "2. Agent Architecture Design",
      desc: "Designing intelligent agent workflows, memory, reasoning logic, and tool integrations.",
    },
    {
      title: "3. Development & Training",
      desc: "Building and training autonomous agents using advanced AI models and frameworks.",
    },
    {
      title: "4. Deployment & Optimization",
      desc: "Deploying agents into production with continuous monitoring, optimization, and scaling.",
    },
  ]

  return (
    <>
      {/* SEO */}
      <Head>
        <title>Agentic AI Solutions | Autonomous AI Agents for Business</title>
        <meta
          name="description"
          content="Build autonomous Agentic AI solutions that can reason, plan, and act independently. We develop scalable, secure AI agents for workflow automation and intelligent decision-making."
        />
        <meta
          name="keywords"
          content="Agentic AI, Autonomous AI Agents, AI Automation, Multi-Agent Systems, Enterprise AI Solutions, AI Workflow Automation"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Agentic AI Solutions | Autonomous AI Agents" />
        <meta
          property="og:description"
          content="Enterprise-grade Agentic AI systems that automate workflows, integrate with tools, and scale intelligently."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/Ai1.jpg" />
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
                src="/Ai1.jpg"
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

        {/* PROCESS */}
        <section className="py-20 bg-muted/10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-green-400">Agentic AI Process</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 px-6">
            {processSteps.map((step, idx) => (
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
    </>
  )
}

