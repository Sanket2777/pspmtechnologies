import { Brain, Globe, Rocket, Dna, ArrowUpRight, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function MissionVision() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 dark:bg-navy-dark transition-colors">
      
      {/* 1. BACKGROUND DECOR (Subtle Tech Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] opacity-70"></div>
      
      {/* Glowing Orbs for "Lab" feel */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-bright/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- PART 1: WHO WE ARE (The Narrative) --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Image Side with "Tech Frame" */}
          <div className="relative group animate-slide-in-left">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-green-bright rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transition duration-700"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-navy-dark">
              <img
                src="/aboutus.png"
                // SEO: Contextual Alt Text
                alt="PSPM Technologies R&D Lab - AI Drug Discovery and Software Development Team"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                 <div className="flex items-center gap-3">
                   <div className="h-2 w-2 bg-green-bright rounded-full animate-ping"></div>
                   <p className="text-white text-sm font-medium">Powering 50+ Global AI Projects</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Target className="w-3 h-3" /> The Innovation Hub
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Redefining IT with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-bright">
                Scientific Intelligence
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-green-bright/30 pl-6">
              PSPM Technologies is not just a coding shop; we are a 
              <strong className="text-foreground"> Research-First Technology Partner</strong>. 
              We moved beyond basic web design to master the future: 
              <span className="text-foreground font-semibold"> Artificial Intelligence & Deep Learning</span>.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              From engineering **Generative AI Chatbots** that automate support to developing complex 
              **AI Drug Discovery Models** for healthcare, we turn "Science Fiction" into "Business Reality."
            </p>
          </div>
        </div>

        {/* --- PART 2: THE TRINITY (Mission, Vision, Goal) --- */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* CARD 1: MISSION */}
          <div className="group relative bg-white dark:bg-card border border-slate-200 dark:border-white/5 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            {/* Background Number */}
            <span className="absolute -right-4 -top-4 text-9xl font-bold text-slate-100 dark:text-white/5 z-0 group-hover:scale-110 transition-transform">01</span>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mb-6 text-green-600 dark:text-green-bright group-hover:rotate-6 transition-transform">
                <Dna className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
                Our Mission <ArrowUpRight className="w-4 h-4 opacity-50" />
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To solve the unsolvable. We are dedicated to accelerating 
                <strong className="text-green-600 dark:text-green-bright"> Medical Research (Drug Discovery)</strong> 
                and automating enterprises with self-learning AI agents.
              </p>
            </div>
          </div>

          {/* CARD 2: VISION */}
          <div className="group relative bg-white dark:bg-card border border-slate-200 dark:border-white/5 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <span className="absolute -right-4 -top-4 text-9xl font-bold text-slate-100 dark:text-white/5 z-0 group-hover:scale-110 transition-transform">02</span>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-500 group-hover:rotate-6 transition-transform">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
                Our Vision <ArrowUpRight className="w-4 h-4 opacity-50" />
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the bridge between **Pune and the World**. We envision a future where 
                Indian developers set the global standard for 
                <strong className="text-blue-600 dark:text-blue-500"> Scientific AI & Enterprise SaaS</strong>.
              </p>
            </div>
          </div>

          {/* CARD 3: GOAL */}
          <div className="group relative bg-white dark:bg-card border border-slate-200 dark:border-white/5 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <span className="absolute -right-4 -top-4 text-9xl font-bold text-slate-100 dark:text-white/5 z-0 group-hover:scale-110 transition-transform">03</span>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-500 group-hover:rotate-6 transition-transform">
                <Rocket className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
                Our Goal <ArrowUpRight className="w-4 h-4 opacity-50" />
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Speed and Stability. Whether it's a high-scale **React Platform** or a 
                **Python Neural Network**, our goal is to deliver bug-free software that drives 
                <strong className="text-purple-600 dark:text-purple-500"> Measurable ROI</strong>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}