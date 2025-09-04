import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Star, Instagram, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <div className="relative w-full">      
      <div className="relative z-10 py-28">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          {/* Available for work tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1 mb-8"
          >
            <Star className="h-4 w-4 text-white" fill="white" />
            <span className="text-sm">Available For Work</span>
          </motion.div>
          
          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-light max-w-3xl mb-10 leading-tight"
          >
            Curious about what we can create together? Let's bring something extraordinary to life!
          </motion.h2>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <Button className="bg-white hover:bg-white/90 text-black">
              Book a Free Call
            </Button>
          </motion.div>
          
          {/* Social media icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center gap-8 mb-16"
          >
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <div className="bg-black/20 backdrop-blur-sm border border-gray-700 p-2 rounded-full">
                <Instagram className="h-5 w-5" />
              </div>
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <div className="bg-black/20 backdrop-blur-sm border border-gray-700 p-2 rounded-full">
                <Twitter className="h-5 w-5" />
              </div>
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <div className="bg-black/20 backdrop-blur-sm border border-gray-700 p-2 rounded-full">
                <Github className="h-5 w-5" />
              </div>
            </a>
          </motion.div>
          
          {/* Footer bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-between w-full text-sm text-gray-400"
          >
            <a href="mailto:hello@brandbase.design" className="hover:text-white transition-colors mb-4 md:mb-0">
              hello@brandbase.design
            </a>
            
            <div className="flex items-center gap-4">
              <span>Design by Kallol</span>
              <span>All rights reserved, ©2025</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Footer; 