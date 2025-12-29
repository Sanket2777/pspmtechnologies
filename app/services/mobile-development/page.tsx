"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Smartphone, Code2, Server, Monitor, Rocket } from "lucide-react"
import Head from "next/head"

export default function MobileDevelopmentPage() {
  const features = [
    { icon: Smartphone, title: "iOS Development", desc: "High-performance iOS apps with Swift and SwiftUI." },
    { icon: Smartphone, title: "Android Development", desc: "Native Android apps using Kotlin and Java." },
    { icon: Code2, title: "Cross-Platform Apps", desc: "React Native / Flutter apps for iOS and Android." },
    { icon: Monitor, title: "App Optimization", desc: "Smooth, fast, and responsive apps with great UX." },
  ]

  const discoverySteps = [
    { title: "1. Requirement Analysis", desc: "Understanding your app idea, target users, and goals." },
    { title: "2. UI/UX Design", desc: "Wireframing, prototyping, and designing a smooth experience." },
    { title: "3. Development", desc: "Building high-quality apps with modern technologies." },
    { title: "4. Testing & QA", desc: "Rigorous testing for performance and reliability." },
    { title: "5. Deployment", desc: "Publishing apps to App Store and Play Store." },
    { title: "6. Maintenance & Updates", desc: "Ongoing support and feature improvements." },
  ]

  return (
    <>
      <Head>
        <title>Mobile App Development Services | PSPM Technologies</title>
        <meta
          name="description"
          content="Professional Mobile App Development services including iOS, Android, and cross-platform apps with optimized performance."
        />
      </Head>

      <main className="overflow-hidden bg-background text-foreground">

        {/* HERO */}
        <section className="pt-32 pb-24 bg-gradient-to-br from-[#061a2f] via-[#0b2d4d] to-[#06243b] text-white">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6"><span className="text-green-bright">Mobile App</span> Development</h1>
              <p className="text-white/80 mb-8">
                We create intuitive, high-performance mobile applications tailored to your business goals.
                Our team builds both native and cross-platform apps with smooth UX.
              </p>
              <a href="/contact" className="inline-block bg-green-bright text-navy-dark px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
                Get App Consultation
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
              <Image
                src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg"
                alt="Mobile App Development"
                width={600} height={400}
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 bg-background">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-green-bright">Mobile App Services</span>
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
            Our <span className="text-green-bright">Development Process</span>
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
          <h2 className="text-3xl font-bold mb-4">Start Your App Project Today</h2>
          <a href="/contact" className="inline-block bg-green-bright text-navy-dark px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
            Talk to Experts
          </a>
        </section>
      </main>
    </>
  )
}
