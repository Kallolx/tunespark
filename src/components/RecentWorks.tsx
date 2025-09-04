import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";

interface WorkCardProps {
  title: string;
  imageSrc: string;
}

const WorkCard = ({ title, imageSrc }: WorkCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
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

  return (
    <div 
      className="relative overflow-hidden rounded-md cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-full aspect-square object-cover grayscale"
        initial={{ scale: 1 }}
        animate={{ scale: isHovered ? 1.05 : 1 }}
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
        animate={{ 
          y: isHovered || isMobile ? 0 : 80, 
          opacity: isHovered || isMobile ? 1 : 0 
        }}
        transition={{ 
          type: "spring", 
          stiffness: 500, 
          damping: 30 
        }}
      >
        <motion.a 
          href="#" 
          className="flex items-center justify-between bg-black/70 backdrop-blur-sm text-sm font-light text-white px-5 py-2.5 rounded-full w-auto max-w-[160px] shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>View Casestudy</span>          
        </motion.a>
      </motion.div>
    </div>
  );
};

// Sample data for the recent works
const recentWorks = [
  {
    id: 1,
    title: "Brand Identity Project",
    imageSrc: "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    title: "Packaging Design",
    imageSrc: "https://images.pexels.com/photos/4041279/pexels-photo-4041279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    title: "Tote Bag Design",
    imageSrc: "https://images.pexels.com/photos/4046718/pexels-photo-4046718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    title: "Product Design",
    imageSrc: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    title: "Product Design",
    imageSrc: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 6,
    title: "Product Design",
    imageSrc: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 7,
    title: "Product Design",
    imageSrc: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const RecentWorks = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability);
      // Initial check
      checkScrollability();
      
      // On resize
      window.addEventListener('resize', checkScrollability);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollability);
      }
      window.removeEventListener('resize', checkScrollability);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.75; // Scroll 75% of the visible width
      const newScrollLeft = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-black text-white py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <motion.h2 
            className="text-3xl font-light tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Recent Works
          </motion.h2>
          
          <div className="flex gap-3">
            <button 
              className={cn(
                "w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center",
                canScrollLeft ? "opacity-100 hover:bg-white hover:text-black transition-colors" : "opacity-40 cursor-not-allowed"
              )}
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
            >
              <ChevronRightIcon className="w-4 h-4 rotate-180" />
            </button>
            <button 
              className={cn(
                "w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center",
                canScrollRight ? "opacity-100 hover:bg-white hover:text-black transition-colors" : "opacity-40 cursor-not-allowed"
              )}
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar"
        >
          {recentWorks.map((work) => (
            <div 
              key={work.id} 
              className="flex-none w-[260px] md:w-[300px]"
            >
              <WorkCard 
                title={work.title}
                imageSrc={work.imageSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWorks; 