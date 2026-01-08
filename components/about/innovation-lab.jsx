import { Dna, Bot, Sparkles, ArrowRight, Activity, Database, Microscope, Cpu, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "AI Drug Discovery",
    category: "BioInformatics",
    status: "R&D Phase",
    description: "Accelerating pharmaceutical breakthroughs. We utilize Python & TensorFlow to model molecular structures, reducing drug development timelines by 40%.",
    techStack: ["BioPython", "TensorFlow", "React", "AWS"],
    icon: Dna,
    color: "text-rose-500",
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
    border: "hover:border-rose-500/50"
  },
  {
    title: "Autonomous AI Agents",
    category: "Enterprise AI",
    status: "Live Beta",
    description: "Self-learning digital workers that handle complex customer support workflows autonomously, reducing human workload by 70%.",
    techStack: ["OpenAI GPT-4", "LangChain", "Vector DB", "FastAPI"],
    icon: Bot,
    color: "text-blue-500",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    border: "hover:border-blue-500/50"
  },
  {
    title: "Predictive Maintenance",
    category: "Industrial IoT",
    status: "In Development",
    description: "A real-time dashboard for manufacturing plants. Uses IoT sensors to predict machine failures days before they happen.",
    techStack: ["IoT Hub", "Time-Series DB", "Angular", "Edge Computing"],
    icon: Activity,
    color: "text-amber-500",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    border: "hover:border-amber-500/50"
  }
]

export function InnovationLab() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      
      {/* 1. BACKGROUND EFFECTS (The "Radar" Look) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>
      
      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4 animate-fade-in">
              <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20">
                <Microscope className="w-3 h-3" /> Labs & Research
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Next Generation</span> <br />
              of Software.
            </h2>
            
            <p className="text-lg text-slate-400 leading-relaxed border-l-2 border-slate-700 pl-4">
              We don't just use APIs; we build them. Explore our active research in 
              <span className="text-slate-200 font-medium"> Generative AI</span>, 
              <span className="text-slate-200 font-medium"> Computational Biology</span>, and 
              <span className="text-slate-200 font-medium"> Smart Manufacturing</span>.
            </p>
          </div>
          
          <Button variant="outline" className="hidden md:flex gap-2 border-slate-700 text-slate-300 hover:text-white hover:border-white hover:bg-white/5 transition-all">
            View Research Papers <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* CARDS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group relative rounded-3xl border border-white/5 bg-slate-900/50 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)] ${project.border}`}
            >
              {/* Internal Glow Gradient */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Top Right "Scanner" decoration */}
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <Cpu className="w-24 h-24 text-white rotate-12" />
              </div>

              <div className="relative z-10">
                {/* Icon Header */}
                <div className="flex justify-between items-start mb-8">
                  <div className={`p-4 rounded-2xl bg-slate-950 border border-slate-800 ${project.color} shadow-lg group-hover:scale-110 transition-transform`}>
                    <project.icon className="w-8 h-8" />
                  </div>
                  <Badge className="bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-900">
                    {project.status}
                  </Badge>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                    {project.techStack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border border-white/5 bg-white/5 text-slate-400 group-hover:border-white/10 group-hover:text-white transition-colors"
                      >
                         {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}