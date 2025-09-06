import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { AvatarCircles } from "@/components/custom_ui/avaterCircles";
import { animateCardsOnScroll } from "@/lib/gsap";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import CountUp from "./CountUp";

const CompanyDetails = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      animateCardsOnScroll(containerRef);
    }
  }, []);

  const avatarUrls = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profileUrl: "https://www.example.com",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profileUrl: "https://www.example.com",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profileUrl: "https://www.example.com",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1563237023-b1e970526dcb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profileUrl: "https://www.example.com",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1672843192615-5913ef88bf17?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profileUrl: "https://www.example.com",
    },
  ];

  const services = [
    {
      title: "Music Distribution",
      description: "Distribute to 150+ platforms worldwide",
      gradient: "from-blue-500 to-cyan-500",
      url: "/services/music-distribution",
    },
    {
      title: "VEVO Distribution",
      description: "Distribute to premium platforms",
      gradient: "from-purple-500 to-pink-500",
      url: "/services/vevo-distribution",
    },
    {
      title: "Analytics & Reporting",
      description: "Detailed insights and performance tracking",
      gradient: "from-green-500 to-emerald-500",
      url: "/services/analytics",
    },
    {
      title: "Music Promotion",
      description: "Strategic campaigns to boost your reach",
      gradient: "from-yellow-500 to-orange-500",
      url: "/services/music-promotion",
    },
    {
      title: "Rights Management",
      description: "Protect and manage your intellectual property",
      gradient: "from-red-500 to-rose-500",
      url: "/services/rights-management",
    },
    {
      title: "MCN Services",
      description: "Multi-Channel Network optimization",
      gradient: "from-indigo-500 to-purple-500",
      url: "/services/mcn-services",
    },
  ];

  return (
    <section className="bg-black md:rounded-t-[200px] rounded-t-[50px] text-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tighter leading-tight">
            Meet <span className="aurora-text">TuneSpark</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            TuneSpark.io is a forward-thinking digital music platform built for
            the modern artist and label. Founded with the mission to simplify
            music distribution and maximize revenue, we combine technology,
            industry expertise, and personalized service.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
            <span className="text-gray-300 text-sm md:text-base">
              10,000+ Artists Trust Us
            </span>
            <Button variant="default" className="rounded-full">
              Start Free
            </Button>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div ref={containerRef} className="max-w-6xl mx-auto -mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <motion.a
                key={service.title}
                href={service.url}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl p-4 hover:bg-gray-800/40 hover:border-gray-700 transition-all duration-300 cursor-pointer block hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-white font-medium text-sm md:text-base group-hover:text-white transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-xs md:text-sm mt-1 group-hover:text-gray-400 transition-colors duration-200">
                      {service.description}
                    </p>
                  </div>
                  <div className="ml-3">
                    <ArrowRight className="w-4 h-4 text-white group-hover:text-gray-400 group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-white">
                <CountUp to={150} duration={2} delay={0.2} />+
              </div>
              <div className="text-gray-400 text-md md:text-base">
                Global React
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl aurora-text font-bold text-white">
                <CountUp to={10000} duration={2.5} delay={0.4} separator="," />+
              </div>
              <div className="text-gray-400 text-md md:text-base">
                Artists Served
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl aurora-text md:text-4xl font-bold text-white">
                $<CountUp to={50} duration={3} delay={0.6} />
                M+
              </div>
              <div className="text-gray-400 text-md md:text-base">
                Revenue Generated
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-white">
                #<CountUp to={1} duration={1} delay={0.8} />
              </div>
              <div className="text-gray-400 text-md md:text-base">
                Industry Recognition
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyDetails;
