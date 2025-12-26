import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["PSPM Technologies Pvt. Ltd.", "Pawar Nagar, Samarth Colony, Wakad, Pimpri-Chinchwad Pune", "Maharashtra 411033, India"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 8600 755476", "Mon-Fri: 9:00 AM - 6:00 PM"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@pspmtechnologies.com", "support@pspmtechnologies.com", "sales@pspmtechnologies.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
  },
]

export function ContactInfo() {
  return (
    <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
        Contact <span className="text-green-bright">Information</span>
      </h2>
      <p className="text-muted-foreground mb-8 leading-relaxed">
        Reach out to us through any of the following channels. We're here to help!
      </p>

      <div className="space-y-6">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className="group p-6 bg-card border border-border rounded-xl hover:shadow-lg hover:shadow-green-bright/10 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-bright/10 rounded-lg group-hover:bg-green-bright/20 transition-colors">
                <item.icon className="w-6 h-6 text-green-bright" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-green-bright transition-colors">
                  {item.title}
                </h3>
                {item.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-muted-foreground leading-relaxed">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div className="mt-8 p-6 bg-gradient-to-br from-green-bright/10 to-teal-bright/10 border border-green-bright/20 rounded-xl">
        <h3 className="text-lg font-bold text-foreground mb-4">Follow Us</h3>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/company/pspm-technologies"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-card border border-border rounded-lg hover:border-green-bright hover:shadow-md transition-all duration-300 text-sm font-medium text-foreground hover:text-green-bright"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/pspm_technologies"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-card border border-border rounded-lg hover:border-green-bright hover:shadow-md transition-all duration-300 text-sm font-medium text-foreground hover:text-green-bright"
          >
            Twitter
          </a>
          <a
            href="https://www.facebook.com/pspmtechnologies"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-card border border-border rounded-lg hover:border-green-bright hover:shadow-md transition-all duration-300 text-sm font-medium text-foreground hover:text-green-bright"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/pspm_technologies"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-card border border-border rounded-lg hover:border-green-bright hover:shadow-md transition-all duration-300 text-sm font-medium text-foreground hover:text-green-bright"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  )
}