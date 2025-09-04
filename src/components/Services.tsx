import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { PaintBucket, Layers, Package, Monitor } from "lucide-react";

// Service category pill component
const ServicePill = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-block py-2 px-4 bg-black/40 border border-gray-800 rounded-full text-sm mr-2 mb-2">
    {children}
  </div>
);

// Service tag component 
const ServiceTag = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center py-2 px-4 bg-black/40 border border-gray-800 rounded-full text-sm text-gray-300">
    {children}
  </div>
);

// Service card component
const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  imageSrc 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  imageSrc: string
}) => (
  <motion.div 
    className="bg-[#0d0d0d] rounded-lg p-6 flex gap-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="flex-1">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
    <div className="w-32 h-32 shrink-0">
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-full object-cover rounded-lg grayscale"
      />
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-4">
        {/* First row - Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-block py-1 px-3 bg-black border border-gray-700 rounded-full text-xs mb-4">
              Design services
            </span>
            <h2 className="text-5xl md:text-7xl font-light mb-4 tracking-tighter">Services</h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Helping businesses standout with brand identity packaging that captivates and converts effectively.
            </p>
            
            {/* Service categories */}
            <div className="flex flex-wrap mb-8">
              <ServicePill>Product Design</ServicePill>
              <ServicePill>Brand Identity Design</ServicePill>
              <ServicePill>Branding</ServicePill>
              <ServicePill>Packaging Design</ServicePill>
              <ServicePill>Email Campaigns</ServicePill>
              <ServicePill>Graphic Design</ServicePill>
              <ServicePill>Video Production</ServicePill>
              <ServicePill>UI/UX Design</ServicePill>
              
            </div>
            
            {/* CTA Buttons */}
            <div className="flex gap-4">
              <Button className="bg-white text-black hover:bg-white/80">Book a Free Call</Button>
              <Button className="text-white hover:bg-black/80 border border-gray-700">See Projects</Button>
            </div>
          </motion.div>
          
          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden h-[400px]"
          >
            <img 
              src="/service.jpg" 
              alt="Design Services" 
              className="w-full h-full object-cover grayscale"
            />
          </motion.div>
        </div>
        
        {/* Second row - Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <ServiceCard 
            icon={<PaintBucket className="w-6 h-6" />}
            title="Brand Identity"
            description="Crafting unique, memorable brand identities that resonate with your audience — from logos to visual systems."
            imageSrc="/projects/brand-identity.jpg"
          />
          
          <ServiceCard 
            icon={<Layers className="w-6 h-6" />}
            title="Brand Design"
            description="Designing sleek, impactful packaging that not only looks stunning but also connects with your ideal customers."
            imageSrc="/projects/social-media-marketing.jpg"
          />
          
          <ServiceCard 
            icon={<Package className="w-6 h-6" />}
            title="Package Design"
            description="Bringing your brand to life through high-fidelity product mockups, giving you a clear, realistic preview of the real world."
            imageSrc="/projects/ppc-advertising.jpg"
          />
          
          <ServiceCard 
            icon={<Monitor className="w-6 h-6" />}
            title="Mockup Design"
            description="Tailored design mockups that align perfectly with your brand's aesthetic, because every detail matters."
            imageSrc="/projects/video-production.jpg"
          />
        </div>
        
        {/* Third row - Service tags */}
        <motion.div 
          className="flex flex-wrap gap-3 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap gap-3 justify-center mb-4 w-full">
            <ServiceTag>Slide Decks</ServiceTag>
            <ServiceTag>Copywriting</ServiceTag>
            <ServiceTag>Brand Graphics</ServiceTag>
            <ServiceTag>Brand Migration</ServiceTag>
            <ServiceTag>Package Design</ServiceTag>
            <ServiceTag>Branding</ServiceTag>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center w-full">
            <ServiceTag>Optimization</ServiceTag>
            <ServiceTag>Brand Landing Pages</ServiceTag>
            <ServiceTag>Social Media</ServiceTag>
            <ServiceTag>Icons</ServiceTag>
            <ServiceTag>Brand Visibility</ServiceTag>
            <ServiceTag>Brand Integration</ServiceTag>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 