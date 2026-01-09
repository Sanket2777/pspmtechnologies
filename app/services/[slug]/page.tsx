import type { Metadata } from "next"
import ServiceUI from "./ServiceUI"

/* =======================
   SERVICES DATA
======================= */
export const servicesData = {
  "ai-powered-solutions": {
    title: "AI-Powered Solutions",
    description: "AI chatbots, NLP, automation, and predictive analytics.",
    longDescription:
      "Our AI-powered solutions help businesses automate workflows, gain insights, and scale efficiently.",
    features: ["AI Chatbots", "NLP", "Predictive Analytics", "Automation"],
    benefits: [
      "Faster decisions",
      "Better customer experience",
      "Lower costs",
      "Scalable AI systems",
    ],
    useCases: ["Customer Support", "Sales Forecasting", "Fraud Detection", "Analytics"],
    image: "/AI Solutions.jpg",
    seo: {
      title: "AI-Powered Solutions | PSPM Technologies",
      description: "AI chatbots, NLP, predictive analytics, and automation services.",
    },
  },

  "mobile-app-development": {
    title: "Mobile App Development",
    description: "Android, iOS & cross-platform apps.",
    longDescription:
      "We build secure, scalable mobile applications with modern UI/UX.",
    features: ["Android", "iOS", "Flutter", "APIs"],
    benefits: ["High performance", "Secure architecture", "Modern UI", "Scalable backend"],
    useCases: ["E-commerce", "Healthcare", "On-demand apps", "Enterprise mobility"],
    image: "/ab2.png",
    seo: {
      title: "Mobile App Development | PSPM Technologies",
      description: "Android, iOS & Flutter app development services.",
    },
  },

  "custom-software": {
    title: "Custom Software",
    description: "Secure and scalable custom software tailored to enterprise needs.",
    longDescription:
      "We deliver secure, scalable custom software solutions designed specifically for enterprise requirements.",
    features: ["Enterprise Apps", "Security", "Scalability"],
    benefits: ["Tailored solutions", "Enterprise-grade security", "High scalability"],
    useCases: ["Enterprise Software", "Workflow Automation", "Internal Tools"],
    image: "/custom.jpg",
    seo: {
      title: "Custom Software | PSPM Technologies",
      description: "Secure and scalable custom software tailored to enterprise needs.",
    },
  },

  "cloud-devops": {
    title: "Cloud & DevOps",
    description: "Cloud migration and DevOps automation for speed, reliability, and scalability.",
    longDescription:
      "We help businesses migrate to the cloud and automate DevOps pipelines for faster delivery and higher reliability.",
    features: ["AWS", "Azure", "CI/CD", "DevOps"],
    benefits: ["Faster deployments", "Reliable infrastructure", "Scalable operations"],
    useCases: ["Cloud Migration", "CI/CD Pipelines", "Infrastructure Automation"],
    image: "/cloud.jpg",
    seo: {
      title: "Cloud & DevOps | PSPM Technologies",
      description: "Cloud migration and DevOps automation for speed, reliability, and scalability.",
    },
  },
}


/* =======================
   STATIC EXPORT
======================= */
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }))
}

/* =======================
   SEO
======================= */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const service = servicesData[slug]

  if (!service) return {}

  return {
    title: service.seo.title,
    description: service.seo.description,
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      images: [{ url: service.image }],
    },
  }
}

/* =======================
   PAGE
======================= */
export default async function ServiceDetailPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const service = servicesData[slug]

  if (!service) {
    return <div className="p-20 text-center">Service not found</div>
  }

  // Related services logic
  const relatedServices = Object.entries(servicesData)
    .filter(([key]) => key !== slug)
    .slice(0, 3)
    .map(([key, value]) => ({
      slug: key,
      title: value.title,
      description: value.description,
    }))

  return (
    <ServiceUI
      service={service}
      relatedServices={relatedServices}
    />
  )
}
