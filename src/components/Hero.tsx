import { Button } from "@/components/ui/button";
import { LogoLoop } from "./custom_ui/LogoLoop";
import { motion } from "framer-motion";
import {
  Music,
  Bot,
  Sparkles,
  SkipBack,
  Play,
  SkipForward,
} from "lucide-react";

const Hero = () => {
  return (
    <div className="container pt-8 sm:pt-12 md:pt-16 lg:pt-20 mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center relative">
      {/* Background Music Cards */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Left Music Card */}
        <motion.div
          className="absolute left-4 sm:left-8 md:left-16 lg:left-28 top-1/4 -translate-y-1/4 w-40 sm:w-48 md:w-56 h-36 sm:h-44 md:h-52 bg-white rounded-2xl backdrop-blur-sm transform -rotate-12 blur-sm hover:blur-none transition-all duration-300 hidden sm:block cursor-pointer"
          initial={{ opacity: 0, x: -100, rotate: -12 }}
          animate={{ opacity: 1, x: 0, rotate: -12 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <div className="p-1 h-full flex flex-col">
            {/* Album Image */}
            <div className="w-full h-20 sm:h-28 md:h-36 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
              <img
                src="/music/3.png"
                alt="Album Image"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>

            {/* Bottom Section - Two columns */}
            <div className="flex-1 px-1 sm:px-2 flex items-center justify-between">
              {/* Left side - Music Info */}
              <div className="flex-1">
                <h3 className="text-black text-xs sm:text-sm md:text-md font-bold">Too Late</h3>
                <p className="text-gray-500 text-xs">Nicky Binny</p>
              </div>

              {/* Right side - Player Controls */}
              <div className="flex items-center gap-0.5 sm:gap-1">
                <button className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-black rounded-full flex items-center justify-center">
                  <SkipBack className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white fill-white" />
                </button>
                <button className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-black rounded-full flex items-center justify-center">
                  <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white fill-white" />
                </button>
                <button className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-black rounded-full flex items-center justify-center">
                  <SkipForward className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white fill-white" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Music Card */}
        <motion.div
          className="absolute right-4 sm:right-8 md:right-16 lg:right-28 top-1/4 -translate-y-1/4 w-40 sm:w-48 md:w-56 h-36 sm:h-44 md:h-52 bg-white rounded-2xl backdrop-blur-sm transform -rotate-12 blur-sm hover:blur-none transition-all duration-300 hidden sm:block cursor-pointer"
          initial={{ opacity: 0, x: 100, rotate: 12 }}
          animate={{ opacity: 1, x: 0, rotate: 12 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <div className="p-1 h-full flex flex-col">
            {/* Album Image */}
            <div className="w-full h-20 sm:h-28 md:h-32 rounded-xl mb-1 sm:mb-2 flex items-center justify-center">
              <img
                src="/music/2.png"
                alt="Album Image"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>

            {/* Bottom Section - Two columns */}
            <div className="flex-1 px-1 sm:px-2 flex items-center justify-between">
              {/* Left side - Music Info */}
              <div className="flex-1">
                <h3 className="text-black text-xs sm:text-sm md:text-md font-bold">Too Late</h3>
                <p className="text-gray-500 text-xs">Nicky Binny</p>
              </div>

              {/* Right side - Player Controls */}
              <div className="flex items-center gap-0.5 sm:gap-1">
                <button className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-black rounded-full flex items-center justify-center">
                  <SkipBack className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white fill-white" />
                </button>
                <button className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-black rounded-full flex items-center justify-center">
                  <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white fill-white" />
                </button>
                <button className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-black rounded-full flex items-center justify-center">
                  <SkipForward className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white fill-white" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-center mb-4 sm:mb-6 leading-tight tracking-tighter px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Distribute Your
          <br />
          <span className="aurora-text">Music</span> Worldwide
        </motion.h1>

        <motion.p
          className="text-gray-300 text-center max-w-2xl mb-4 sm:mb-6 tracking-normal text-sm sm:text-base px-4 mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Easily release your songs to 150+ platforms including Spotify, Apple
          Music, YouTube, and TikTok. Keep 100% royalties, track performance
          with real-time analytics
        </motion.p>

        <motion.div
          className="flex justify-center w-full"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="w-full max-w-lg px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <Button
                variant="default"
                className="w-full sm:flex-1 px-4 sm:px-6 py-2.5 sm:py-3 shadow-md text-sm sm:text-base"
              >
                Start Distributing Free
              </Button>

              <Button
                variant="outline"
                className="w-full sm:w-auto items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-2 rounded-full border border-white/20 text-white bg-transparent text-sm sm:text-base"
              >
                Upload Your Track
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Brand Logos - replaced with LogoLoop */}
      <div className="w-full pt-16 sm:pt-12 md:pt-16 max-w-5xl px-4">
        <LogoLoop
          logos={[
            { src: "/brands/1.svg", alt: "Brand 1" },
            { src: "/brands/2.svg", alt: "Brand 2" },
            { src: "/brands/3.svg", alt: "Brand 3" },
            { src: "/brands/4.svg", alt: "Brand 4" },
            { src: "/brands/5.svg", alt: "Brand 5" },
            { src: "/brands/6.svg", alt: "Brand 6" },
            { src: "/brands/7.svg", alt: "Brand 7" },
            { src: "/brands/8.svg", alt: "Brand 8" },
            { src: "/brands/9.svg", alt: "Brand 9" },
            { src: "/brands/10.svg", alt: "Brand 10" },
            { src: "/brands/11.svg", alt: "Brand 11" },
            { src: "/brands/12.svg", alt: "Brand 12" },
            { src: "/brands/13.svg", alt: "Brand 13" },
            { src: "/brands/14.svg", alt: "Brand 14" },
            { src: "/brands/15.svg", alt: "Brand 15" },
            { src: "/brands/16.svg", alt: "Brand 16" },
            { src: "/brands/17.svg", alt: "Brand 17" },
            { src: "/brands/18.svg", alt: "Brand 18" },
            { src: "/brands/19.svg", alt: "Brand 19" },
            { src: "/brands/20.svg", alt: "Brand 20" },
          ]}
          speed={20}
          logoHeight={30}
          gap={32}
          pauseOnHover={true}
          fadeOut={true}
          fadeOutColor="transparent"
        />

        <div className="flex justify-center items-center mt-8 sm:mt-12 md:mt-16">
          <div className="flex items-center justify-center gap-3 sm:gap-4 text-gray-400 text-xs tracking-wider">
            <span>Scroll down</span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border border-gray-500 rounded-full flex items-center justify-center">
              <div className="w-1 h-1.5 sm:h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
