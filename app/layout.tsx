import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pspmerp.in"), // ✅ Your domain

  title: {
    default: "PSPM Technologies | AI & IT Services",
    template: "%s | PSPM Technologies",
  },

  description:
    "PSPM Technologies is a leading provider of AI solutions, web development, application development, and IT consulting services.",

  keywords: [
    "PSPM Technologies",
    "AI Services",
    "Web Development Company",
    "Application Development",
    "IT Consulting",
    "Software Company in India",
  ],

  authors: [{ name: "PSPM Technologies Pvt Ltd" }],
  generator: "Next.js",

  icons: {
    icon: "/fevicon.ico",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "PSPM Technologies | AI & IT Services",
    description:
      "Innovative AI, Web, App & IT Consulting services by PSPM Technologies.",
    url: "https://pspmerp.in",
    siteName: "PSPM Technologies",
    images: [
      {
        url: "/aboutus.png", // must be in /public
        width: 1200,
        height: 630,
        alt: "PSPM Technologies",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
