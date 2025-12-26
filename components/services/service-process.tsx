import { Search, Lightbulb, Code2, Rocket } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Discovery & Analysis",
    description: "We start by understanding your business needs, challenges, and goals through detailed consultation.",
  },
  {
    icon: Lightbulb,
    title: "Planning & Design",
    description: "Our team creates a comprehensive plan and design that aligns with your requirements and budget.",
  },
  {
    icon: Code2,
    title: "Development & Testing",
    description: "We build your solution using agile methodology with continuous testing and quality assurance.",
  },
  {
    icon: Rocket,
    title: "Deployment & Support",
    description: "We deploy your solution and provide ongoing support, training, and maintenance services.",
  },
]

export function ServiceProcess() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-green-bright">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A proven methodology that ensures successful project delivery every time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-green-bright/10 rounded-2xl flex items-center justify-center group-hover:bg-green-bright transition-colors duration-300">
                    <step.icon className="h-10 w-10 text-green-bright" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-bright rounded-full flex items-center justify-center text-navy-dark font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-green-bright/50 to-transparent -translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
