"use client"

import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import { motion } from "framer-motion"
import { Bot, MessageSquare, Cpu, Rocket } from "lucide-react"

export default function ChatbotClient() {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Chatbots",
      desc: "Smart conversational bots trained on your business data.",
    },
    {
      icon: MessageSquare,
      title: "24/7 Customer Support",
      desc: "Automated responses to customer queries anytime.",
    },
    {
      icon: Cpu,
      title: "Multiplatform Integration",
      desc: "Website, WhatsApp, mobile apps, and CRM integration.",
    },
    {
      icon: Rocket,
      title: "Scalable & Secure",
      desc: "High-performance chatbots that grow with your business.",
    },
  ]

  const processSteps = [
    {
      title: "1. Requirement Analysis",
      desc: "We understand your business goals, audience, and chatbot use cases.",
    },
    {
      title: "2. Conversation Design",
      desc: "Designing intelligent conversation flows and user journeys.",
    },
    {
      title: "3. AI Training & Development",
      desc: "Training chatbot models using NLP and integrating business data.",
    },
    {
      title: "4. Deployment & Optimization",
      desc: "Launching chatbots with continuous monitoring and performance improvements.",
    },
  ]

  return (
    <>
      {/* SEO */}
      <Head>
        <title>AI Chatbot Development Services | Smart Chatbot Solutions</title>
        <meta
          name="description"
          content="Build AI-powered chatbots for customer support, automation, and engagement. We develop scalable, secure chatbots for websites, WhatsApp, and apps."
        />
        <meta
          name="keywords"
          content="AI Chatbot, Chatbot Development, AI Customer Support, WhatsApp Chatbot, NLP Chatbots"
        />

        {/* Open Graph */}
        <meta property="og:title" content="AI Chatbot Development Services" />
        <meta
          property="og:description"
          content="Smart AI chatbots that automate conversations and improve customer experience."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1674027444485-cec3da58eef4"
        />
      </Head>

      <main className="overflow-hidden bg-background text-foreground">

        {/* HERO */}
        <section className="pt-32 pb-24 bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#020617] text-white">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                AI <span className="text-green-400">Chatbot</span> Solutions
              </h1>

              <p className="text-white/80 mb-8">
                Build intelligent AI chatbots that automate conversations,
                enhance customer experience, and increase conversions.
              </p>

              <Link
                href="/contact"
                className="inline-block bg-green-400 text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
              >
                Build Your Chatbot
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a"
                alt="AI Chatbot Development"
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
            Our <span className="text-green-400">Chatbot Services</span>
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
            Our <span className="text-green-400">Chatbot Development Process</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 px-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-black/10 rounded-xl p-6 shadow-md"
              >
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-black text-white text-center">
          <Rocket className="w-12 h-12 text-green-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            Launch Your AI Chatbot Today
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-green-400 text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            Talk to Experts
          </Link>
        </section>

      </main>
    </>
  )
}
