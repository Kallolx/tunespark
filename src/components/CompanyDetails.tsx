import { motion } from "framer-motion";
import RecentWorks from "./RecentWorks";
import { AvatarCircles } from "@/components/custom_ui/avaterCircles";
import {
  Globe,
  Video,
  BarChart3,
  Megaphone,
  Shield,
  Network,
} from "lucide-react";

const CompanyDetails = () => {
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

  return (
    <section className="bg-black px-8 rounded-2xl md:rounded-t-[100px] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-5xl md:text-7xl font-light mb-6 tracking-tighter leading-tight">
              Meet <span className="aurora-text">TuneSpark</span>
            </h2>

            <p className="text-gray-300 mb-8">
              We are a modern digital music distribution platform dedicated to
              helping artists and labels publish their music on leading global
              streaming services and stores. We pride ourselves on delivering
              high-quality service, fast distribution, and transparent royalty
              payments, ensuring you stay connected to your fans and revenue
              effortlessly.
            </p>

            <div className="flex items-center gap-4">
              <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
              <span className="text-gray-300">500+ Artists Trust Us</span>
              <span className="underline cursor-pointer hover:text-white transition-colors">Start Your Journey</span>
            </div>
          </motion.div>

          {/* Right Services */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <img
                        src="/icons/globe.png"
                        alt="Music Distribution"
                        className="w-10 h-10"
                      />
                    </div>
                    <div>
                      <span className="text-white font-medium">
                        Music Distribution
                      </span>
                      <p className="text-gray-400 text-sm">
                        Distribute to 150+ platforms worldwide
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <div className="h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <img
                        src="/icons/vevo.png"
                        alt="Music Distribution"
                        className="h-4"
                      />
                    </div>
                    <div>
                      <span className="text-white font-medium">
                        VEVO Distribution
                      </span>
                      <p className="text-gray-400 text-sm">
                        Distribute to premium platforms
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <img
                        src="/icons/chart.png"
                        alt="Music Distribution"
                        className="w-10 h-10"
                      />
                    </div>
                    <div>
                      <span className="text-white font-medium">
                        Analytics & Reporting
                      </span>
                      <p className="text-gray-400 text-sm">
                        Detailed insights and performance tracking
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <img
                        src="/icons/promo.png"
                        alt="Music Distribution"
                        className="w-10 h-10"
                      />
                    </div>
                    <div>
                      <span className="text-white font-medium">
                        Music Promotion
                      </span>
                      <p className="text-gray-400 text-sm">
                        Strategic campaigns to boost your reach
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <img
                        src="/icons/rights.png"
                        alt="Music Distribution"
                        className="w-10 h-10"
                      />
                    </div>
                    <div>
                      <span className="text-white font-medium">
                        Rights Management
                      </span>
                      <p className="text-gray-400 text-sm">
                        Protect and manage your intellectual property
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <img
                        src="/icons/network.png"
                        alt="Music Distribution"
                        className="w-10 h-10"
                      />
                    </div>
                    <div>
                      <span className="text-white font-medium">
                        MCN Services
                      </span>
                      <p className="text-gray-400 text-sm">
                        Multi-Channel Network optimization
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyDetails;
