import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

// Register the plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const setupScrollSmoother = () => {
  // Only create ScrollSmoother on client-side
  if (typeof window !== "undefined") {
    return ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5, // Adjust smoothness (higher = slower)
      effects: true, // Enable data-speed and data-lag attributes
      normalizeScroll: true, // Prevents jittering during scroll
    });
  }
  
  return null;
};

// Card reveal animation
export const animateCardsOnScroll = (containerRef: React.RefObject<HTMLElement>) => {
  if (!containerRef.current) return;
  
  const cards = containerRef.current.querySelectorAll(".project-card, .music-card");
  
  cards.forEach((card, index) => {
    gsap.fromTo(
      card,
      { 
        y: 100, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: index * 0.1, // Stagger effect
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          end: "bottom center",
          toggleActions: "play none none none",
        }
      }
    );
    
    // Animate the image reveal
    const img = card.querySelector("img");
    if (img) {
      gsap.fromTo(
        img,
        { scale: 1.2, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          delay: index * 0.1 + 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none none",
          }
        }
      );
    }
  });
}; 