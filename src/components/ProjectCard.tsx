import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";

interface ProjectCardProps {
  imageSrc: string;
  size?: "default" | "large";
  className?: string;
}

const ProjectCard = ({ imageSrc, size = "default", className }: ProjectCardProps) => {
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
        y: isHovered ? 0 : 80, 
        opacity: isHovered ? 1 : 0 
      });
    }
  }, [isHovered, isMobile, controls]);

  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-md cursor-pointer project-card",
        size === "large" ? "aspect-[1/1.2]" : "aspect-square",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img 
        src={imageSrc} 
        alt="Project" 
        className="w-full h-full object-cover grayscale"
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
      
      <motion.div
        className="absolute bottom-6 left-0 right-0 flex justify-center z-10"
        initial={{ y: 80, opacity: 0 }}
        animate={controls}
        transition={{ 
          type: "spring", 
          stiffness: 500, 
          damping: 30 
        }}
      >
        <motion.a 
          href="#" 
          className="flex items-center justify-between bg-black/70 backdrop-blur-sm text-sm font-light text-white px-5 py-3 rounded-full w-auto max-w-[180px] shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>View Casestudy</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default ProjectCard; 