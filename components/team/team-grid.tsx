"use client"

import { useState } from "react"
import Image from "next/image"
import { Linkedin, Mail, Github } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "Poonam Yadav ",
    role: "CEO & Founder",
    image: "/team-ceo-professional-portrait.jpg",
    bio: "5 years of experience in enterprise software development and business strategy.",
    linkedin: "https://www.linkedin.com/in/poonam-yadav-a01a7a185/",
    email: "poonam@pspmerp.in",
  },
  {
    id: 2,
    name: "Ajay Naikude",
    role: "Team Leader",
    image: "/ajay.png",
    bio: "Experienced in guiding teams, managing projects, and achieving organizational goals efficiently Strong in mentoring, collaboration, and ensuring timely delivery.",
    linkedin: "#",
    email: "AjayNaikude@pspmerp.in",
  },
  {
    id: 3,
    name: "Ratndeep Randive",
    role: "Human Resource",
    image: "/ratndeep.jpeg",
    bio: "Skilled in talent acquisition, employee engagement, and organizational development Focused on building positive work culture and optimizing HR processes.",
    linkedin: "#",
    email: "RatndeepRandive@pspmerp.in",
    github: "#",
  },
  {
    id: 4,
    name: "Aniket yadav",
    role: "Backend Developer",
    image: "/aniket.jpeg",
    bio: "Experienced in designing robust server-side applications, APIs, and database management Ensures secure, scalable, and high-performance backend solutions for modern applications",
    linkedin: "https://www.linkedin.com/in/aniket-anil-yadav-72a484292/",
    email: "aniketyadav@pspmerp.in",
  },
     {
    id: 5,
    name: "Shivani Patil",
    role: "Business Development",
    image: "shivani.png",
    bio: "Proficient in identifying growth opportunities, building client relationships, and driving revenue Focused on strategic planning and expanding business reach.",
    linkedin: "https://www.linkedin.com/in/er-shivani-pralhad-patil-5a9aa3208/",
    email: "Shivani Patil@pspmerp.in",
  },
  {
    id: 6,
    name: "Sanket Bhandare",
    role: "Frontend Developer",
    image: "/sanket.png",
    bio: "Skilled in creating responsive, user-friendly web interfaces using modern frameworks Focused on enhancing user experience with clean, interactive, and efficient designs.",
    linkedin: "https://www.linkedin.com/in/sanket-bhandare-0bb79122a/",
    email: "sanketbhandare@pspmerp.in",
  },
  {
    id: 7,
    name: "Rohit Tapse",
    role: "Business Analyst",
    image: "/rohit.jpeg",
    bio: "Skilled in analyzing business processes, gathering requirements, and providing actionable insights Experienced in bridging gaps between stakeholders and technical teams for effective solutions.",
    linkedin: "https://www.linkedin.com/in/rohit-tapse-400718260/",
    email: "rohittapse@pspmerp.in",
  },
  {
    id: 8,
    name: "Rohan Yadav",
    role: "Backend developer",
    image: "r1.png",
    bio: "Experienced in designing robust server-side applications, APIs, and database management Ensures secure, scalable, and high-performance backend solutions for modern applications",
    linkedin: "https://www.linkedin.com/in/rohan-yadav-ab877a200/",
    email: "rohanyadv@pspmerp.in",
    github: "#",
  },
  {
    id: 9,
    name: "Anjalikumari Singh",
    role: "Backend Developer",
    image: "/anjali.jpeg",
    bio: "Experienced in designing robust server-side applications, APIs, and database management Ensures secure, scalable, and high-performance backend solutions for modern applications",
    linkedin: "https://www.linkedin.com/in/anjali-kumari-singh-5a673227a/",
    email: "meera@pspmerp.in",
  },
   {
    id: 10,
    name: "Pankaj Narwade",
    role: "Frontend Developer",
    image: "/pankaj.jpeg",
    bio: "Skilled in creating responsive, user-friendly web interfaces using modern frameworks Focused on enhancing user experience with clean, interactive, and efficient designs.",
    linkedin: "https://www.linkedin.com/in/pankajnarwaden90/",
    email: "Pankaj Narwade@pspmerp.in",
  },
  {
    id: 11,
    name: "Parth Yadav",
    role: "Frontend Developer",
    image: "/parth.jpeg",
    bio: "Skilled in creating responsive, user-friendly web interfaces using modern frameworks Focused on enhancing user experience with clean, interactive, and efficient designs.",
    linkedin: "https://www.linkedin.com/in/parth-yadav-606531201/",
    email: "Parthyadav@pspmerp.in",
  },
  {
    id: 12,
    name: "Tejas Tekale ",
    role: "Sales Head and Marketing Manager",
    image: "/tejas.png",
    bio: "Skilled in creating responsive, user-friendly web interfaces using modern frameworks Focused on enhancing user experience with clean, interactive, and efficient designs.",
    linkedin: "https://www.linkedin.com/in/tejas-tekale-0429ba235/",
    email: "tejastekale@pspmerp.in",
  },
]

export function TeamGrid() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-green-bright/10 transition-all duration-500 animate-fade-in hover:-translate-y-2"
              style={{ animationDelay: `${index * 50}ms` }}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden bg-muted">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Social Links Overlay */}
                <div
                  className={`absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                    hoveredMember === member.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <a
                    href={member.linkedin}
                    className="p-3 bg-green-bright text-navy-dark rounded-full hover:bg-green-bright/90 transition-colors shadow-lg"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="p-3 bg-green-bright text-navy-dark rounded-full hover:bg-green-bright/90 transition-colors shadow-lg"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  {member.github && (
                    <a
                      href={member.github}
                      className="p-3 bg-green-bright text-navy-dark rounded-full hover:bg-green-bright/90 transition-colors shadow-lg"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-green-bright transition-colors">
                  {member.name}
                </h3>
                <p className="text-green-bright font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>

              {/* Accent Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-bright via-teal-bright to-green-bright transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
