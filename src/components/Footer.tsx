import React, { useState } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import {
  Star,
  Instagram,
  Twitter,
  Github,
  Mail,
  Phone,
  Music,
  Play,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="relative w-full">
      <div className="relative z-10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-8">
              <img
                src="/logo.png"
                alt="Launch Your Music Career"
                className="h-12"
              />
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tighter leading-tight">
              Launch Your <span className="aurora-text">Music Career</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Join thousands of artists who trust TuneSpark to distribute their
              music worldwide and maximize their revenue.
            </p>

            {/* CTA Buttons + Newsletter */}
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="text-center">
                <Button variant="default" className="rounded-full px-8 py-3">
                  Start Your Journey
                </Button>
                <div className="mt-4">
                  <NewsletterInline />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 text-center md:text-left">
            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Our Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing Plans
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    AI Tools
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Why Choose Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Copyright Notice
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:hello@tunespark.io"
                    className="hover:text-white transition-colors"
                  >
                    hello@tunespark.io
                  </a>
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <Music className="w-4 h-4" />
                  <span>24/7 Support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center gap-6 mb-16"
          >
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <div className="p-3 flex items-center justify-center bg-gray-900/50 border border-gray-800 p-3 rounded-full hover:bg-gray-800/50 transition-colors">
                <img src="/social/instagram.svg" alt="Instagram" className="h-8 w-8" />
              </div>
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <div className="p-3 flex items-center justify-center bg-gray-900/50 border border-gray-800 p-3 rounded-full hover:bg-gray-800/50 transition-colors">
                <img src="/social/facebook.svg" alt="Facebook" className="h-8 w-8" />
              </div>
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <div className="p-3 flex items-center justify-center bg-gray-900/50 border border-gray-800 p-3 rounded-full hover:bg-gray-800/50 transition-colors">
                <img src="/social/tiktok.svg" alt="TikTok" className="h-8 w-8" />
              </div>
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <div className="p-3 flex items-center justify-center bg-gray-900/50 border border-gray-800 p-3 rounded-full hover:bg-gray-800/50 transition-colors">
                <img src="/social/x.svg" alt="x" className="h-8 w-8" />
              </div>
            </a>
          </motion.div>

          {/* Footer Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center w-full text-sm text-gray-400 border-t border-gray-800 pt-8 text-center md:text-left justify-center md:justify-between gap-4"
          >
            <div className="flex flex-col md:flex-row items-center gap-2 mb-4 md:mb-0">
              <Music className="w-4 h-4" />
              <span className="font-semibold text-white">TuneSpark</span>
              <span>© 2025 All rights reserved</span>
            </div>

            <div className="flex items-center gap-6 justify-center md:justify-end">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// Inline newsletter form used in the Footer
function NewsletterInline() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const validateEmail = (value: string) =>
    /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) return setStatus("error");
    setStatus("sending");
    // Placeholder: integrate with real newsletter API
    setTimeout(() => {
      setStatus("sent");
      setEmail("");
      setTimeout(() => setStatus("idle"), 2000);
    }, 900);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm">
      <div className="relative">
        <label htmlFor="newsletter-email" className="sr-only">
          Email
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="Enter your email"
          className="w-full bg-gray-900/30 border border-gray-800 text-white placeholder-gray-400 rounded-full px-4 py-3 pr-32 focus:outline-none focus:ring-2 focus:ring-white"
        />

        <Button
          variant="secondary"
          type="submit"
          className="absolute right-1 top-1/2 -translate-y-1/2"
          aria-label="Subscribe to newsletter"
        >
          {status === "sending"
            ? "Sending..."
            : status === "sent"
            ? "Subscribed"
            : "Subscribe"}
        </Button>
      </div>

      <div className="mt-2 h-5">
        {status === "error" && (
          <span className="text-xs text-pink-400">
            Please enter a valid email.
          </span>
        )}
        {status === "sent" && (
          <span className="text-xs text-green-400">
            Thanks — check your inbox!
          </span>
        )}
      </div>
    </form>
  );
}
