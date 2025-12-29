import Image from "next/image"

const technologies = [
  {
    name: "React",
    color: "from-cyan-400 to-blue-500",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    color: "from-gray-700 to-black",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    color: "from-green-400 to-emerald-600",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Python",
    color: "from-yellow-400 to-orange-500",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "MongoDB",
    color: "from-green-500 to-lime-600",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    color: "from-blue-600 to-indigo-700",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
  name: "AWS",
  color: "from-orange-400 to-amber-600",
  logo: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Amazon_Web_Services_Logo.svg",
},
  {
    name: "Docker",
    color: "from-sky-400 to-blue-600",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
]

export function TechnologiesSection() {
  return (
    <section
      className="relative py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30 overflow-hidden"
      aria-labelledby="technologies-heading"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-green-bright/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-bright/5 rounded-full blur-2xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <header className="text-center max-w-3xl mx-auto mb-20">
          <h2
            id="technologies-heading"
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Technologies <span className="text-green-bright">We Use</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We use modern, industry-standard technologies to build fast,
            secure, scalable, and SEO-optimized digital products.
          </p>
        </header>

        {/* Technology Grid */}
        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          role="list"
        >
          {technologies.map((tech, index) => (
            <article
              key={index}
              role="listitem"
              className="group relative rounded-3xl bg-card border border-border
                         hover:border-green-bright/50 transition-all duration-500
                         hover:-translate-y-2 hover:shadow-2xl"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                animation: "fadeInUp 0.8s ease forwards",
                animationDelay: `${index * 120}ms`,
              }}
            >
              {/* Gradient Top Bar */}
              <div
                className={`h-1 w-full rounded-t-3xl bg-gradient-to-r ${tech.color}`}
              />

              <div className="p-8 flex flex-col items-center text-center">
                {/* Logo */}
                <div className="relative w-16 h-16 mb-6 transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={tech.logo}
                    alt={`${tech.name} official logo`}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold group-hover:text-green-bright transition-colors">
                  {tech.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Inline animation (safe) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `,
        }}
      />
    </section>
  )
}
