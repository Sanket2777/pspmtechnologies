"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import emailjs from "emailjs-com";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("Sending...");

    emailjs
      .send(
        "YOUR_SERVICE_ID", // 🔹 replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // 🔹 replace with your EmailJS Template ID
        formData,
        "YOUR_PUBLIC_KEY" // 🔹 replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("Failed to send message ❌ Please try again later.");
        }
      );
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
        Send Us a <span className="text-green-bright">Message</span>
      </h2>
      <p className="text-muted-foreground mb-8 leading-relaxed">
        Fill out the form below and we'll get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-green-bright transition-colors text-foreground"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-green-bright transition-colors text-foreground"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-green-bright transition-colors text-foreground"
              placeholder="+91 98765 43210"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-green-bright transition-colors text-foreground"
              placeholder="Your Company"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-green-bright transition-colors text-foreground"
          >
            <option value="">Select a subject</option>
            <option value="web">Web Development</option>
            <option value="mobile">Mobile App Development</option>
            <option value="consulting">IT Consulting</option>
            <option value="support">Technical Support</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-green-bright transition-colors text-foreground resize-none"
            placeholder="Tell us about your project..."
          />
        </div>

        <button
          type="submit"
          className="group w-full md:w-auto px-8 py-4 bg-green-bright text-navy-dark font-semibold rounded-full hover:bg-green-bright/90 transition-all duration-300 shadow-lg hover:shadow-green-bright/30 flex items-center justify-center gap-2"
        >
          Send Message
          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        {status && (
          <p className="mt-4 text-center text-sm font-medium text-green-bright">{status}</p>
        )}
      </form>
    </div>
  );
}
