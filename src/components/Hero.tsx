import { Button } from "@/components/ui/button";
import { LogoLoop } from "./custom_ui/LogoLoop";
import { motion } from "framer-motion";
import { Music, Bot, Sparkles, SkipBack, Play, SkipForward } from "lucide-react";

const Hero = () => {
  return (
    <div className="container pt-16 md:pt-12 mx-auto px-4 min-h-screen flex flex-col items-center justify-center relative">
      {/* Background Music Cards */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Left Music Card */}
        <motion.div
          className="absolute left-28 top-1/4 -translate-y-1/4 w-56 h-52 bg-white rounded-2xl backdrop-blur-sm transform -rotate-12 blur-sm hover:blur-none transition-all duration-300 hidden md:block cursor-pointer"
          initial={{ opacity: 0, x: -100, rotate: -12 }}
          animate={{ opacity: 1, x: 0, rotate: -12 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <div className="p-1 h-full flex flex-col">
            {/* Album Image */}
            <div className="w-full h-36 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
             <img src="/music/3.png" alt="Album Image" className="w-full h-full rounded-xl object-cover" />
            </div>
            
            {/* Bottom Section - Two columns */}
            <div className="flex-1 px-2 flex items-center justify-between">
              {/* Left side - Music Info */}
              <div className="flex-1">
                <h3 className="text-black text-md font-bold">Too Late</h3>
                <p className="text-gray-500 text-xs">Nicky Binny</p>
              </div>
              
              {/* Right side - Player Controls */}
              <div className="flex items-center gap-1">
                <button className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <SkipBack className="w-4 h-4 text-white fill-white" />
                </button>
                <button className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 text-white fill-white" />
                </button>
                <button className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <SkipForward className="w-4 h-4 text-white fill-white" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Music Card */}
        <motion.div
          className="absolute right-28 top-1/4 -translate-y-1/4 w-56 h-52 bg-white rounded-2xl backdrop-blur-sm transform -rotate-12 blur-sm hover:blur-none transition-all duration-300 hidden md:block cursor-pointer"
          initial={{ opacity: 0, x: 100, rotate: 12 }}
          animate={{ opacity: 1, x: 0, rotate: 12 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <div className="p-1 h-full flex flex-col">
            {/* Album Image */}
            <div className="w-full h-32 rounded-xl mb-2 flex items-center justify-center">
              <img src="/music/2.png" alt="Album Image" className="w-full h-full rounded-xl object-cover" />
            </div>
            
            {/* Bottom Section - Two columns */}
            <div className="flex-1 px-2 flex items-center justify-between">
              {/* Left side - Music Info */}
              <div className="flex-1">
                <h3 className="text-black text-md font-bold">Too Late</h3>
                <p className="text-gray-500 text-xs">Nicky Binny</p>
              </div>
              
              {/* Right side - Player Controls */}
              <div className="flex items-center gap-1">
                <button className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <SkipBack className="w-4 h-4 text-white fill-white" />
                </button>
                <button className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 text-white fill-white" />
                </button>
                <button className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <SkipForward className="w-4 h-4 text-white fill-white" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-normal text-center mb-6 leading-tight tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Distribute Your
          <br />
         <span className="aurora-text">Music</span> Worldwide
        </motion.h1>

        <motion.p
          className="text-gray-300 text-center max-w-2xl mb-6 tracking-normal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Easily release your songs to 150+ platforms including Spotify, Apple
          Music, YouTube, and TikTok. Keep 100% royalties, track performance with
          real-time analytics
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="w-full max-w-md px-4">
            {/* Input with pinned right button */}
            <div className="relative bg-white/10 border border-white/10 rounded-full px-12 py-3 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center">
                <Sparkles className="w-4 h-4 text-white fill-white" />
              </div>
              <input
                type="text"
                id="hero-input"
                placeholder="Type any idea you have"
                className="w-full pr-32 bg-transparent text-white placeholder-gray-300 outline-none text-sm md:text-base"
              />

              <button
                type="button"
                className="absolute right-1 top-1/2 -translate-y-1/2  flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-4 py-2 text-white text-sm md:text-base shadow-md"
              >
                <Music className="w-4 h-4" />
                <span>Create</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Brand Logos - replaced with LogoLoop */}
      <div className="w-full pt-32 max-w-5xl">
        <LogoLoop
          logos={[
            { src: "/brands/1.svg", alt: "Brand 1" },
            { src: "/brands/2.svg", alt: "Brand 2" },
            { src: "/brands/3.svg", alt: "Brand 3" },
            { src: "/brands/4.svg", alt: "Brand 4" },
            { src: "/brands/5.svg", alt: "Brand 5" },
          ]}
          speed={20}
          logoHeight={32}
          gap={48}
          pauseOnHover={true}
          fadeOut={true}
          fadeOutColor="transparent"
        />

        <div className="flex justify-center items-center mt-16">
          <div className="flex items-center justify-center gap-4 text-gray-400 text-xs tracking-wider">
            <span>Scroll down</span>
            <div className="w-6 h-10 border border-gray-500 rounded-full flex items-center justify-center">
              <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
