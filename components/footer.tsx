import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const services = [
  { name: "AI/ML Services", href: "/services#ai" },
  { name: "Web Development", href: "/services#web" },
  { name: "App Development", href: "/services#app" },
  { name: "IT Consulting", href: "/services#consulting" },
]

const company =[
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Team", href: "/team" },
  // { name: "Clients", href: "/clients" },
  // { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "instagram", icon:Instagram, href: "https://www.instagram.com/pspm_tech/"},
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/pspm-technologlies-pvt-ltd/posts/?feedView=all" },
] 

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-white">PSPM</span>
              <span className="text-green-bright">.</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
             Providing innovative AI and ML applications and IT services to help businesses grow and succeed in the digital age..
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-bright hover:text-navy-dark transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-bright">Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/70 hover:text-green-bright transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-bright">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/70 hover:text-green-bright transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-bright">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="h-5 w-5 text-green-bright flex-shrink-0 mt-0.5" />
                <span className="text-white/70">Pawar Nagar, Samarth Colony, Wakad, Pimpri-Chinchwad, Maharashtra 411033</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="h-5 w-5 text-green-bright flex-shrink-0" />
                <a href="tel:+1234567890" className="text-white/70 hover:text-green-bright transition-colors">
                  +91 86007 55476
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="h-5 w-5 text-green-bright flex-shrink-0" />
                <a href="mailto:info@pspm.in" className="text-white/70 hover:text-green-bright transition-colors">
                  info@pspmerp.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} PSPM Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-white/60 hover:text-green-bright text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-green-bright text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
