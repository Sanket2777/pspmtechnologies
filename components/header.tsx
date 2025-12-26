"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Team", href: "/team" },
  // { name: "Clients", href: "/clients" },
  // { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-navy-dark/95 backdrop-blur-md shadow-lg" : "bg",
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
      <Link href="/" className="flex items-center space-x-2 group">
  <Image
    src="/logos.png"
    alt="PSPM Logo"
    width={180}
    height={100}
    className="h-20 w-auto object-contain rounded-2xl mix-blend-lighten 
               group-hover:scale-105 transition-transform duration-500"
    priority
    style={{
      backgroundColor: "transparent",
      marginLeft: "70px",
      filter: "drop-shadow(0 0 25px rgba(0, 255, 200, 0.25))",
      borderRadius: "20px",
    }}
  />
</Link>



          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  pathname === item.href
                    ? "text-green-bright bg-white/10"
                    : "text-white/80 hover:text-green-bright hover:bg-white/5",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-green-bright text-navy-dark hover:bg-green-bright/90 font-semibold px-6">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-green-bright transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 animate-fade-in bg-navy-dark/95 backdrop-blur-md border-t border-white/10">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
                    pathname === item.href
                      ? "text-green-bright bg-white/10"
                      : "text-white/80 hover:text-green-bright hover:bg-white/5",
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="bg-green-bright text-navy-dark hover:bg-green-bright/90 font-semibold mt-4">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}