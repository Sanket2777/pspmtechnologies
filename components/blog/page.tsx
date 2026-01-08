"use client";

import Script from "next/script";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        {/*<title>My Blog | Insights & LinkedIn Feed</title>*/}
        <meta
          name="description"
          content="Read my latest updates, insights, and professional thoughts on my LinkedIn feed."
        />
        <meta name="keywords" content="Blog, LinkedIn, Professional, Updates, Insights" />
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
        <meta name="twitter:title" content="My Blog | Insights & LinkedIn Feed" />
        <meta
          name="twitter:description"
          content="Read my latest updates, insights, and professional thoughts on my LinkedIn feed."
        />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>

      {/* Hero Section */}
      <motion.section
        className="hero-section bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-32 px-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Welcome to My Blog
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Insights, updates, and professional thoughts shared through my
          LinkedIn feed.
        </motion.p>
        <motion.a
          href="#blog"
          className="bg-white text-indigo-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          Explore Blog
        </motion.a>
      </motion.section>

      {/* Blog / LinkedIn Feed Section */}
      <motion.section
        id="blog"
        className="blog-section py-20 px-6 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-12"> */}
          {/* Blog / LinkedIn Feed */}
        {/* </h2> */}

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
