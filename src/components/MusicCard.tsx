import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { Play, Pause } from "lucide-react";

interface MusicCardProps {
  imageSrc: string;
  songName: string;
  artistName: string;
  userImage?: string;
  size?: "default" | "large";
  className?: string;
  onPlay?: () => void;
  isPlaying?: boolean;
}

const MusicCard = ({ 
  imageSrc, 
  songName, 
  artistName, 
  userImage,
  size = "default", 
  className,
  onPlay,
  isPlaying = false
}: MusicCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Update button visibility based on hover state and mobile
  useEffect(() => {
    if (isMobile) {
      controls.start({ y: 0, opacity: 1 });
    } else {
      controls.start({ 
        y: (isHovered || isPlaying) ? 0 : 80, 
        opacity: (isHovered || isPlaying) ? 1 : 0 
      });
    }
  }, [isHovered, isMobile, isPlaying, controls]);

  const handlePlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onPlay?.();
  };

  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-md cursor-pointer music-card",
        size === "large" ? "aspect-[1/1.2]" : "aspect-square",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img 
        src={imageSrc} 
        alt={`${songName} by ${artistName}`} 
        className="w-full h-full object-cover"
        initial={{ scale: 1 }}
        animate={{ scale: isHovered ? 1.08 : 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      
      <motion.div 
        className="absolute inset-0 bg-black/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered || isMobile ? 0.3 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Music Info Container */}
      <motion.div
        className="absolute bottom-6 left-4 right-4 z-10"
        initial={{ y: 80, opacity: 0 }}
        animate={controls}
        transition={{ 
          type: "spring", 
          stiffness: 500, 
          damping: 30 
        }}
      >
        <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 flex items-center justify-between">
          {/* Left Side - Song Info */}
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-medium text-sm mb-1 truncate">
              {songName}
            </h3>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full flex items-center justify-center text-white text-xs font-medium flex-shrink-0" 
                   style={{ backgroundColor: `hsl(${(artistName.charCodeAt(0) * 137.5) % 360}, 70%, 50%)` }}>
                {artistName.charAt(0).toUpperCase()}
              </div>
              <p className="text-gray-300 text-xs truncate">
                {artistName}
              </p>
            </div>
          </div>
          
          {/* Right Side - Play Button with Visualizer */}
          <motion.button
            onClick={handlePlayClick}
            className="flex items-center justify-center w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200 relative overflow-hidden ml-3 flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Audio Visualizer Bars */}
            {isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-0.5 bg-white rounded-full"
                    animate={{
                      height: ["4px", "12px", "4px"],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            )}
            
            {/* Play/Pause Icon */}
            <div className={`${isPlaying ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}>
              {isPlaying ? (
                <Pause className="w-4 h-4 text-white fill-white" />
              ) : (
                <Play className="w-4 h-4 text-white fill-white ml-0.5" />
              )}
            </div>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default MusicCard;
