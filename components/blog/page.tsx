"use client";

import Script from "next/script";
import Head from "next/head";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Blog() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* ================= SEO META TAGS ================= */}
      <Head>
        <title>My Blog | Insights & LinkedIn Feed</title>
        <meta
          name="description"
          content="Read my latest updates, insights, and professional thoughts on my LinkedIn feed."
        />
        <meta
          name="keywords"
          content="Blog, LinkedIn, Professional, Updates, Insights"
        />
        <meta name="author" content="Your Name" />

        <meta property="og:title" content="My Blog | Insights & LinkedIn Feed" />
        <meta
          property="og:description"
          content="Read my latest updates, insights, and professional thoughts on my LinkedIn feed."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://yourwebsite.com/blog" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="My Blog | Insights & LinkedIn Feed"
        />
        <meta
          name="twitter:description"
          content="Read my latest updates, insights, and professional thoughts on my LinkedIn feed."
        />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden gradient-navy-teal">
        {/* Background animated circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-bright/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-pink-bright/10 rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Hero content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20">
          <motion.div
            className={`text-center max-w-4xl mx-auto ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Stay Updated with <span className="text-purple-bright">PSPM</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8">
              Insights, updates, and professional thoughts shared through my
              LinkedIn feed.
            </p>
            <a
              href="#blog"
              className="inline-block bg-white text-purple-bright font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Explore Our People
            </a>
          </motion.div>
        </div>
      </section>

      {/* ================= BLOG / LINKEDIN FEED ================= */}
      <motion.section
        id="blog"
        className="blog-section py-20 px-6 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Load Elfsight script safely */}
        <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="lazyOnload"
        />

        {/* Elfsight LinkedIn Feed */}
        <div
          className="elfsight-app-56522349-7355-47c2-9f3c-944f758755f6 mx-auto"
          data-elfsight-app-lazy
        ></div>
      </motion.section>
    </>
  );
}
