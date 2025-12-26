export function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-teal-dark to-navy-dark opacity-90" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-slide-up">
            Get In <span className="text-green-bright">Touch</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-slide-up"
            style={{ animationDelay: "100ms" }}
          >
            Have a project in mind? Let's discuss how we can help transform your business with innovative technology
            solutions.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-bright to-transparent opacity-50" />
    </section>
  )
}
