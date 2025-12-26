import { ArrowRight } from "lucide-react"

export function JoinTeam() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-navy-dark via-teal-dark to-navy-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold  mb-6 animate-fade-in text-white">
            Join Our <span className="text-green-bright">Team</span>
          </h2>
          <p
            className="text-xl text-muted-foreground leading-relaxed mb-10 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            We're always looking for talented individuals who are passionate about technology and innovation. Explore
            career opportunities with us.
          </p>
          <button
            className="group px-8 py-4 bg-green-bright text-navy-dark font-semibold rounded-full hover:bg-green-bright/90 transition-all duration-300 shadow-lg hover:shadow-green-bright/30 flex items-center gap-2 mx-auto animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
             View Open Positions
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
