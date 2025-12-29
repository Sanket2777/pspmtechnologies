"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Brain, Bot, Cpu, BarChart3, Rocket } from "lucide-react"

export default function AIMLPage() {
  const features = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      desc: "Smart AI systems that automate decisions and reduce manual effort.",
    },
    {
      icon: Cpu,
      title: "Machine Learning Models",
      desc: "Predictive models trained on real business data.",
    },
    {
      icon: Bot,
      title: "AI Chatbots",
      desc: "24/7 virtual assistants for customer engagement.",
    },
    {
      icon: BarChart3,
      title: "AI Analytics",
      desc: "Business intelligence using AI-driven insights.",
    },
  ]

  const discoverySteps = [
    {
      title: "1. Understanding Your Business",
      desc: "We analyze your business objectives, target audience, and current challenges.",
    },
    {
      title: "2. Data Collection & Analysis",
      desc: "Gathering and preparing data for AI model training and insights.",
    },
    {
      title: "3. Solution Blueprint",
      desc: "Designing a scalable AI/ML solution that aligns with your goals.",
    },
    {
      title: "4. Prototype & Validation",
      desc: "Testing early prototypes and refining algorithms for accuracy.",
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
              AI & <span className="text-green-bright">Machine Learning</span>
            </h1>

            <p className="text-white/80 mb-8">
              We build intelligent AI-powered systems that automate, predict,
              and transform business operations. Our AI solutions are tailored
              to meet your business needs and drive growth.
            </p>

            <a
              href="/contact"
              className="inline-block bg-green-bright text-navy-dark px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              Get AI Consultation
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
              alt="AI and Machine Learning Technology"
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
          Our <span className="text-green-bright">AI & ML Services</span>
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
          Our <span className="text-green-bright">Discovery Process</span>
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
          Start Your AI Journey Today
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





