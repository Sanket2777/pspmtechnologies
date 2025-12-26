import { Heart, Users, Lightbulb, Shield } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "We prioritize our clients' success and build lasting relationships based on trust and mutual growth.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "We believe in collaboration and leverage diverse perspectives to deliver exceptional results.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously explore new technologies and methodologies to stay ahead of industry trends.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We maintain the highest standards of honesty, transparency, and ethical business practices.",
  },
]

export function CompanyValues() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-green-bright">Values</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The principles that guide everything we do and shape our company culture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 bg-green-bright/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-bright transition-colors duration-300">
                <value.icon className="h-10 w-10 text-green-bright group-hover:text-navy-dark transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
