"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Mail, Crown, Users, Star } from "lucide-react";

const team = [
  {
    name: "Devidas Yadav",
    role: "Founder & CEO",
    badge: "Visionary Leader",
    icon: Crown,
    image: "/founder.png",
    linkedin: "https://www.linkedin.com/in/poonam-yadav-a01a7a185/",
    email: "poonam@pspmerp.in",
  },
  {
    name: "Poonam Yadav",
    role: "Co-Founder & Team Leader",
    badge: "Execution Expert",
    icon: Star,
    image: "/poonam.png",
    linkedin: "#",
    email: "AjayNaikude@pspmerp.in",
  },
  {
    name: "Ajay Naikude",
    role: "Technical Lead",
    badge: "Innovation Driver",
    icon: Users,
    image: "/ajay.png",
    linkedin: "#",
    email: "team@pspmerp.in",
  },
];

export function TeamShowcase() {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-navy-dark via-background to-background">

      {/* Floating Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-bright/20 blur-[140px]" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            Our <span className="text-green-bright">Leadership</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Passionate leaders driving innovation, technology, and growth.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-12 md:grid-cols-3">
          {team.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                className="group relative rounded-3xl bg-card/80 backdrop-blur border border-white/10
                           hover:border-green-bright/40 hover:shadow-2xl hover:shadow-green-bright/10
                           transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden rounded-t-3xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-xl bg-green-bright/15 text-green-bright">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-green-bright font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    {member.badge}
                  </p>

                  {/* Social */}
                  <div className="flex justify-center gap-5">
                    <a
                      href={member.linkedin}
                      className="p-3 rounded-full bg-muted hover:bg-green-bright hover:text-navy-dark transition"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="p-3 rounded-full bg-muted hover:bg-green-bright hover:text-navy-dark transition"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Bottom Glow Line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px]
                                bg-gradient-to-r from-transparent via-green-bright to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
