"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Agentic AI Solutions", href: "/services/agentic-ai" },
      { name: "AI Transformation (Transform legacy software and services)", href: "/services/ai-transformation" },
      { name: "Chatbot", href: "/services/chatbot" },
      { name: "Web Development", href: "/services/web-development" },
      { name: "Mobile App Development", href: "/services/mobile-development" },
      { name: "IT Consulting", href: "/services/it-consulting" },
      { name: "SEO & Digital Marketing", href: "/services/seo-digital-marketing" },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
  //{ name: "Team", href: "/team" },
    { name: "Social Feed", href: "/Social Feed" },
  { name: "Contact", href: "/contact" },
  
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white"
          : "bg-transparent"
      )}
    >
     <nav className="bg-white border-b border-gray-200">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-20">

      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo2.png"
          alt="PSPM Logo"
          width={170}
          height={80}
          priority
          className="h-16 w-auto object-contain"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-1">
        {navigation.map((item) =>
          item.dropdown ? (
            <div key={item.name} className="relative group">

              {/* Services Link */}
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition",
                  pathname.startsWith("/services")
                    ? "text-green-bright bg-gray-100"
                    : "text-black hover:text-green-bright hover:bg-gray-100"
                )}
              >
                {item.name}
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </Link>

              {/* Dropdown */}
              <div
                className="absolute left-0 top-full mt-3 w-72 rounded-xl
                           bg-white border border-gray-200 shadow-xl
                           opacity-0 invisible group-hover:opacity-100 group-hover:visible
                           translate-y-2 group-hover:translate-y-0
                           transition-all duration-300"
              >
                {item.dropdown.map((sub) => (
                  <Link
                    key={sub.name}
                    href={sub.href}
                    className="block px-5 py-3 text-sm text-black
                               hover:text-green-bright hover:bg-gray-100 transition"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition",
                pathname === item.href
                  ? "text-green-bright bg-gray-100"
                  : "text-black hover:text-green-bright hover:bg-gray-100"
              )}
            >
              {item.name}
            </Link>
          )
        )}
      </div>

      {/* CTA */}
      <div className="hidden lg:block">
        <Button
          asChild
          className="bg-green-bright text-navy-dark font-semibold px-6 hover:scale-105 transition"
        >
          <Link href="/contact">Get Started</Link>
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden p-2 text-black hover:text-green-bright"
      >
        {isMobileMenuOpen ? <X /> : <Menu />}
      </button>
    </div>

    {/* Mobile Menu */}
    {isMobileMenuOpen && (
      <div className="lg:hidden mt-2 rounded-xl bg-white border border-gray-200 p-4 shadow-md animate-fade-in">
        {navigation.map((item) =>
          item.dropdown ? (
            <div key={item.name}>
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === item.name ? null : item.name
                  )
                }
                className="flex justify-between w-full px-3 py-3 text-black hover:text-green-bright"
              >
                {item.name}
                <ChevronDown
                  className={cn(
                    "transition-transform",
                    openDropdown === item.name && "rotate-180"
                  )}
                />
              </button>

              {openDropdown === item.name && (
                <div className="pl-4 space-y-2">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-sm text-gray-700 hover:text-green-bright"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-3 text-black hover:text-green-bright"
            >
              {item.name}
            </Link>
          )
        )}
      </div>
    )}
  </div>
</nav>

    </header>
  )
}
