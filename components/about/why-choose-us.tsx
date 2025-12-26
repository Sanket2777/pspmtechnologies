import { CheckCircle2 } from "lucide-react"

const reasons = [
  "5+ years of industry experience and expertise",
  "Customized solutions tailored to your business needs",
  "Proven track record with 500+ successful projects",
  "Dedicated support team available 24/7",
  "Cutting-edge technology and best practices",
  "Competitive pricing with transparent billing",
  "Agile development methodology for faster delivery",
  "Comprehensive training and documentation",
]

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Why Choose <span className="text-green-bright">PSPM?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We combine technical excellence with deep industry knowledge to deliver solutions that truly make a
              difference for your business.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CheckCircle2 className="h-6 w-6 text-green-bright flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{reason}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-slide-in-right">
            <img
              src="/ab2.png"
              alt="Why Choose PSPM"
              className="w-full h-200px rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
