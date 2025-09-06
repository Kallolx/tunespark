import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Star, Instagram, Twitter, Github, Mail, Phone, Music, Play } from "lucide-react";

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
            <span className="inline-block py-1 px-3 bg-gray-900/50 border border-gray-800 rounded-full text-xs mb-4">
              Ready to Start?
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tighter leading-tight">
              Launch Your <span className="aurora-text">Music Career</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Join thousands of artists who trust TuneSpark to distribute their music worldwide and maximize their revenue.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="default" className="rounded-full px-8 py-3">
                Start Your Journey
              </Button>
            </div>
          </motion.div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Music Distribution</a></li>
                <li><a href="#" className="hover:text-white transition-colors">VEVO Distribution</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Promotion</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:hello@tunespark.io" className="hover:text-white transition-colors">hello@tunespark.io</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2">
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
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <div className="bg-gray-900/50 border border-gray-800 p-3 rounded-full hover:bg-gray-800/50 transition-colors">
                <Instagram className="h-5 w-5" />
              </div>
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <div className="bg-gray-900/50 border border-gray-800 p-3 rounded-full hover:bg-gray-800/50 transition-colors">
                <Twitter className="h-5 w-5" />
              </div>
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <div className="bg-gray-900/50 border border-gray-800 p-3 rounded-full hover:bg-gray-800/50 transition-colors">
                <Github className="h-5 w-5" />
              </div>
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <div className="bg-gray-900/50 border border-gray-800 p-3 rounded-full hover:bg-gray-800/50 transition-colors">
                <Play className="h-5 w-5" />
              </div>
            </a>
          </motion.div>
          
          {/* Footer Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-between w-full text-sm text-gray-400 border-t border-gray-800 pt-8"
          >
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Music className="w-4 h-4" />
              <span className="font-semibold text-white">TuneSpark</span>
              <span>© 2025 All rights reserved</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Footer;