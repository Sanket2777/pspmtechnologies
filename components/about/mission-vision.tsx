import { Brain, Globe, Rocket } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function MissionVision() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Who We Are Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-in-left">
            <img
              src="/aboutus.png"
              alt="PSPM Team"
              className="w-full h-xl rounded-2xl shadow-2xl"
            />
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Who <span className="text-green-bright">We Are</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              PSPM Technologies is a forward-thinking IT company specializing in 
              cutting-edge solutions like Artificial Intelligence, Machine Learning, 
              Web & App Development, and Digital Automation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With 5+ years of innovation and excellence, we help businesses transform 
              digitally and achieve measurable success through technology that truly works.
            </p>
          </div>
        </div>

        {/* Mission / Vision / Goal Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-border hover:border-green-bright/50 transition-all duration-300 hover:shadow-xl animate-fade-in">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-bright/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-green-bright" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create intelligent and scalable digital solutions that empower 
                organizations to innovate faster and operate smarter.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border hover:border-green-bright/50 transition-all duration-300 hover:shadow-xl animate-fade-in delay-100">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-bright/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-green-bright" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become a global leader in digital innovation, known for turning 
                complex ideas into seamless, impactful technology experiences.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border hover:border-green-bright/50 transition-all duration-300 hover:shadow-xl animate-fade-in delay-200">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-bright/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="h-8 w-8 text-green-bright" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Goal</h3>
              <p className="text-muted-foreground leading-relaxed">
                To drive continuous growth by blending creativity, technology, and 
                strategic thinking in every project we deliver.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
