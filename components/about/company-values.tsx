import { Heart, Users, Lightbulb, Shield, Lock, Zap, RefreshCw, Handshake } from "lucide-react"

const values = [
  {
    icon: Handshake, // Changed to Handshake for "Partnership" feel
    title: "Client Obsession", 
    number: "01",
    // SEO: Mentioning "Global Delivery" targets outsourcing keywords
    description: "We don't just deliver projects; we own outcomes. Our **Global Delivery Model** ensures seamless support for clients in Pune, USA, and beyond.",
    color: "group-hover:text-blue-500",
    bg: "group-hover:bg-blue-500/10",
    border: "group-hover:border-blue-500/50"
  },
  {
    icon: RefreshCw, // Icon for Agile/Cycles
    title: "Agile & DevOps Culture",
    number: "02",
    // SEO: Keywords like "CI/CD" and "Sprints" attract technical CTOs
    description: "Speed matters. We use **Agile Sprints** and **CI/CD Pipelines** to deploy features faster, ensuring your software is always market-ready.",
    color: "group-hover:text-green-bright",
    bg: "group-hover:bg-green-bright/10",
    border: "group-hover:border-green-bright/50"
  },
  {
    icon: Zap, // Icon for Innovation/Energy
    title: "AI-First Innovation",
    number: "03",
    // SEO: Connecting "R&D" and "Future-proof"
    description: "We refuse to be stagnant. Our dedicated **R&D Labs** constantly explore **Generative AI** and Python frameworks to future-proof your business.",
    color: "group-hover:text-purple-500",
    bg: "group-hover:bg-purple-500/10",
    border: "group-hover:border-purple-500/50"
  },
  {
    icon: Lock, // Icon for Security
    title: "Data Privacy & Security",
    number: "04",
    // SEO: HUGE trust signal. "NDA" and "IP Protection" are what clients search for.
    description: "Your code is your asset. We sign strict **NDAs** and follow global **IP Protection Standards** to keep your data 100% secure.",
    color: "group-hover:text-rose-500",
    bg: "group-hover:bg-rose-500/10",
    border: "group-hover:border-rose-500/50"
  },
]

export function CompanyValues() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-dashed border-slate-200 dark:border-white/5 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">The PSPM Code</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Culture, Your <span className="text-green-bright">Advantage</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We operate on four non-negotiable pillars that guarantee the success of your digital product.
          </p>
        </div>

        {/* The 4 Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-card border border-border rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${value.border}`}
            >
              {/* Large Background Number */}
              <span className="absolute top-4 right-6 text-6xl font-black text-slate-100 dark:text-white/5 select-none transition-colors group-hover:text-slate-200/50 dark:group-hover:text-white/10">
                {value.number}
              </span>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${value.bg}`}>
                <value.icon className={`h-7 w-7 transition-colors duration-300 text-muted-foreground ${value.color}`} />
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-green-bright transition-colors">
                  {value.title}
                </h3>
                
                {/* Markdown-style bolding for description */}
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {value.description.split("**").map((part, i) => 
                    i % 2 === 1 ? <span key={i} className="font-semibold text-foreground">{part}</span> : part
                  )}
                </p>
              </div>

              {/* Bottom colored line on hover */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-transparent via-current to-transparent transition-all duration-500 group-hover:w-full opacity-50 ${value.color.replace('text', 'bg')}`}></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}