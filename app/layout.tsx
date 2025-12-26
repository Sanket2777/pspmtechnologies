import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "PSPM Technologies - AI & IT Services",
  description:
    "Leading provider of web development, application development, and IT consulting services for businesses across industries.",
  generator: "PSPM Technologies Pvt Ltd",
  keywords: [
    "AI Services",
    "Web Development",
    "Application Development",
    "IT Consulting",
    "Business Solutions",
  ],
  icons: {
    icon: "/fevicon.ico",                 
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
