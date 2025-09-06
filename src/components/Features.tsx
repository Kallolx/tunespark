import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import MagicBento from './MagicBento';
import { animateMagicBentoOnScroll, isMobile } from '@/lib/gsap';

const Features = () => {
  const magicBentoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Apply GSAP animations to MagicBento
    if (magicBentoRef.current) {
      animateMagicBentoOnScroll(magicBentoRef);
    }
  }, []);

  const features = [
    {
      title: "AI Composition",
      description: "Generate melodies, harmonies, and full arrangements with advanced AI that understands musical theory and your style.",
      icon: "/icons/1.png",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Mastering",
      description: "Professional-quality mastering powered by AI that analyzes your track and applies the perfect sonic enhancement.",
      icon: "/icons/2.png",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Global Distribution",
      description: "Distribute to 150+ platforms worldwide with automated royalty collection and detailed analytics.",
      icon: "/icons/3.png",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "MCN Services",
      description: "Multi-Channel Network services to maximize your content reach and monetization across digital platforms.",
      icon: "/icons/4.png",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Music Promotion",
      description: "Strategic promotion campaigns to boost your music's visibility and reach your target audience effectively.",
      icon: "/icons/5.png",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Rights Management",
      description: "Comprehensive rights protection and management to secure your intellectual property and maximize earnings.",
      icon: "/icons/6.png",
      gradient: "from-red-500 to-rose-500"
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-8"
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter leading-tight">
            Choose <span className="aurora-text">TuneSpark</span> <br /> for Your Distribution?
          </h2>
        </motion.div>

        {/* MagicBento Features Grid */}
        <div ref={magicBentoRef} className="w-full pt-28 md:pt-16 pb-8 md:pb-0 flex justify-center">
          <div className="scale-125 origin-center">
            <MagicBento 
              textAutoHide={true}
              enableStars={!isMobile()}
              enableSpotlight={!isMobile()}
              enableBorderGlow={!isMobile()}
              enableTilt={false}
              enableMagnetism={false}
              clickEffect={!isMobile()}
              spotlightRadius={300}
              particleCount={isMobile() ? 6 : 12}
              glowColor="132, 0, 255"
              customData={features.map((feature, index) => ({
                color: '#060010',
                title: feature.title,
                description: feature.description,
                label: feature.icon,
                isLargeCard: index === 2 || index === 3 // Global Distribution and MCN Services
              }))}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
