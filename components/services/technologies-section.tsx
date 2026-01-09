import Image from "next/image"

const technologies = [
  {
    name: "GPT-4 / GPT-4o",
    color: "from-purple-500 to-indigo-600",
    logo: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
  },
  {
    name: "Google Gemini",
    color: "from-blue-400 to-cyan-600",
    logo: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
  },
  {
    name: "Claude AI",
    color: "from-orange-400 to-amber-600",
    logo: "https://cdn-icons-png.flaticon.com/512/4712/4712153.png",
  },
  {
    name: "LLaMA (Meta AI)",
    color: "from-sky-500 to-blue-700",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png",
  },
  {
    name: "Stable Diffusion",
    color: "from-fuchsia-500 to-pink-600",
    logo: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
  },
  {
    name: "Machine Learning",
    color: "from-yellow-400 to-orange-600",
    logo: "https://cdn-icons-png.flaticon.com/512/2103/2103658.png",
  },
  {
    name: "Computer Vision",
    color: "from-emerald-500 to-green-700",
    logo: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
  },
  {
    name: "Agile Methodology",
    color: "from-red-400 to-rose-600",
    logo: "https://cdn-icons-png.flaticon.com/512/3050/3050525.png",
  },
]

export function TechnologiesSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

        <header className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            AI & Innovation <span className="text-green-bright">Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We leverage advanced AI models and Agile methodologies to build
            intelligent, scalable, and future-ready solutions.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <article
              key={index}
              className="group rounded-3xl bg-card border border-border
                         hover:border-green-bright/50 transition-all duration-500
                         hover:-translate-y-2 hover:shadow-2xl"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                animation: "fadeInUp 0.8s ease forwards",
                animationDelay: `${index * 120}ms`,
              }}
            >
              <div className={`h-1 w-full rounded-t-3xl bg-gradient-to-r ${tech.color}`} />

              <div className="p-8 flex flex-col items-center text-center">
                <div className="relative w-16 h-16 mb-6 group-hover:scale-110 transition-transform">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="text-xl font-bold group-hover:text-green-bright transition-colors">
                  {tech.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `,
        }}
      />
    </section>
  )
}

