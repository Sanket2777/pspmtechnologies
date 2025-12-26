const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "React Native", category: "Mobile" },
  { name: "Flutter", category: "Mobile" },
]

export function TechnologiesSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technologies <span className="text-green-bright">We Use</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We leverage the latest technologies and frameworks to build robust, scalable solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group px-6 py-3 bg-card border border-border rounded-full hover:border-green-bright/50 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <div className="flex items-center gap-2">
                <span className="text-foreground font-semibold group-hover:text-green-bright transition-colors">
                  {tech.name}
                </span>
                <span className="text-xs text-muted-foreground px-2 py-1 bg-muted rounded-full">{tech.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
