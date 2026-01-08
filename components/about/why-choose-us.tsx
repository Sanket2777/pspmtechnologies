import { Check, Star, Trophy, Users } from "lucide-react"

const reasons = [
  {
    title: "Global Reach, Local Roots",
    desc: "We combine the cost advantages of **Pune, India** with the quality standards of **USA & UK** markets.",
    icon: GlobeIcon // Helper component below
  },
  {
    title: "5+ Years of Mastery",
    desc: "Proven expertise in delivering complex **AI Models** and **Scaleable Web Apps** for 500+ clients.",
    icon: Trophy
  },
  {
    title: "Timezone Aligned Support",
    desc: "Our **24/7 Support Team** works when you work, ensuring zero lag in communication.",
    icon: Users
  },
  {
    title: "Transparent & Agile",
    desc: "No hidden costs. We use **Agile Methodologies** to deliver updates every sprint, keeping you in control.",
    icon: Check
  }
]

// Helper Icon for the array
function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT SIDE: CONTENT --- */}
          <div className="space-y-8 animate-slide-in-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider">
              <Star className="w-3 h-3 fill-current" /> Why Leaders Choose Us
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              Partner with a Team that <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500 dark:from-green-400 dark:to-teal-300">
                Delivers Certainty.
              </span>
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              In a world of freelancers, we are an **Institution**. From startups in **Pune** to enterprises in **New York**, clients trust PSPM Technologies because we 
              don't just write code—we guarantee outcomes.
            </p>

            {/* FEATURE LIST - Redesigned as Interactive Rows */}
            <div className="space-y-4 pt-4">
              {reasons.map((item, index) => (
                <div 
                  key={index}
                  className="group flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-green-500/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center text-green-700 dark:text-green-400 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">
                      {item.title}
                    </h4>
                    {/* Render description with Markdown-like bolding */}
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mt-1">
                      {item.desc.split("**").map((part, i) => 
                        i % 2 === 1 ? <strong key={i} className="text-slate-900 dark:text-slate-200 font-semibold">{part}</strong> : part
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* --- RIGHT SIDE: IMAGE WITH "TRUST BADGE" --- */}
          <div className="relative animate-slide-in-right lg:pl-10">
            
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-green-200/30 to-blue-200/30 dark:from-green-500/10 dark:to-blue-500/10 rounded-full blur-3xl -z-10"></div>

            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden border-8 border-white dark:border-white/5 shadow-2xl group">
              <img
                src="/ab2.png"
                alt="PSPM Team Meeting - Strategizing AI Solutions for Global Clients"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* FLOATING TRUST BADGE (The "Hook") */}
            <div className="absolute -bottom-8 -left-6 md:-left-12 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-white/10 animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-100 dark:bg-yellow-500/20 p-3 rounded-full text-yellow-600 dark:text-yellow-400">
                  <Star className="w-8 h-8 fill-current" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white">98%</p>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">Client Retention Rate</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}