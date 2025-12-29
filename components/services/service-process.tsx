"use client"

import { Search, Lightbulb, Code2, Rocket } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    icon: Search,
    title: "Discovery & Business Analysis",
    description:
      "We analyze your business requirements, target audience, and technical goals to build a solid foundation.",
  },
  {
    icon: Lightbulb,
    title: "Planning & UI/UX Design",
    description:
      "User-focused UI/UX design and scalable architecture aligned with your vision.",
  },
  {
    icon: Code2,
    title: "Development & Quality Testing",
    description:
      "Secure, fast, and SEO-optimized development using modern frameworks.",
  },
  {
    icon: Rocket,
    title: "Deployment, SEO & Support",
    description:
      "Seamless deployment, search engine optimization, and long-term support.",
  },
]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

export function ServiceProcess() {
  return (
    <section
      aria-labelledby="service-process-heading"
      className="relative py-24 lg:py-32 bg-gradient-to-br from-[#061a2f] via-[#0b2d4d] to-[#06243b] overflow-hidden"
    >
      {/* Green Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.15),transparent_60%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* SEO Heading */}
        <header className="text-center max-w-3xl mx-auto mb-20">
          <h2
            id="service-process-heading"
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Our <span className="text-green-bright">Development Process</span>
          </h2>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            A proven, transparent, and SEO-friendly development process that
            delivers scalable digital solutions.
          </p>
        </header>

        {/* Process Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
          role="list"
        >
          {steps.map((step, index) => (
            <motion.article
              key={index}
              variants={item}
              role="listitem"
              className="relative"
            >
              <div className="text-center h-full group">

                {/* Icon */}
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-green-bright/40 group-hover:bg-green-bright/10 transition-all duration-500 group-hover:scale-110">
                    <step.icon className="h-10 w-10 text-green-bright" />
                  </div>

                  {/* Step Number */}
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-green-bright rounded-full flex items-center justify-center text-[#061a2f] font-bold text-sm shadow-lg">
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-green-bright/50 to-transparent -translate-x-1/2"
                  aria-hidden="true"
                />
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
