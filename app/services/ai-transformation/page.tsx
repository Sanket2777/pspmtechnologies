"use client"

import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import { motion } from "framer-motion"
import { Cpu, Settings, BarChart3, Cloud, Rocket } from "lucide-react"

export default function AITransformationClient() {
  const features = [
    {
      icon: Cpu,
      title: "Legacy Software Modernization",
      desc: "Transform outdated applications into modern, scalable, AI-ready systems.",
    },
    {
      icon: Settings,
      title: "AI-Driven Automation",
      desc: "Automate business workflows using intelligent AI-powered systems.",
    },
    {
      icon: Cloud,
      title: "Cloud & Data Transformation",
      desc: "Migrate applications and data to secure, cloud-native architectures.",
    },
    {
      icon: BarChart3,
      title: "Intelligent Analytics",
      desc: "Leverage AI-powered insights for smarter business decisions.",
    },
  ]

  const processSteps = [
    {
      title: "1. Assessment & Discovery",
      desc: "We evaluate your existing systems, data, and business goals to identify transformation opportunities.",
    },
    {
      title: "2. AI Strategy & Architecture",
      desc: "Designing a scalable AI transformation roadmap aligned with your business needs.",
    },
    {
      title: "3. Modernization & Automation",
      desc: "Upgrading legacy systems and introducing AI-driven automation.",
    },
    {
      title: "4. Cloud Migration & Integration",
      desc: "Migrating applications and data to cloud platforms with seamless integrations.",
    },
  ]

  return (
    <>
      {/* SEO */}
      <Head>
        <title>AI Transformation Services | Modernize & Automate with AI</title>
        <meta
          name="description"
          content="AI Transformation services to modernize legacy systems, automate workflows, and migrate to cloud-native, AI-powered architectures."
        />
        <meta
          name="keywords"
          content="AI Transformation, Legacy Modernization, AI Automation, Cloud Transformation, Digital Transformation Services"
        />

        {/* Open Graph */}
        <meta property="og:title" content="AI Transformation Services" />
        <meta
          property="og:description"
          content="Transform legacy systems into intelligent, scalable, AI-powered platforms."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/ai-transformation.jpg" />
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
                AI <span className="text-green-400">Transformation</span>
              </h1>

              <p className="text-white/80 mb-8">
                Modernize legacy systems and transform your business with
                intelligent, AI-powered, future-ready solutions.
              </p>

              <Link
                href="/contact"
                className="inline-block bg-green-400 text-navy-dark px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
              >
                Start AI Transformation
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
  src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1600&auto=format&fit=crop"
  alt="AI Transformation and Digital Modernization"
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
            Our <span className="text-green-400">AI Transformation Capabilities</span>
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
            Our <span className="text-green-400">AI Transformation Process</span>
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
            Transform Your Business with AI Today
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
