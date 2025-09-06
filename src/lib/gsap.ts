import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

// Register the plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Mobile detection utility
export const isMobile = () => {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Mobile-optimized GSAP settings
export const getMobileOptimizedSettings = () => {
  const mobile = isMobile();
  return {
    smooth: mobile ? 0.8 : 1.5, // Less smooth on mobile for better performance
    effects: !mobile, // Disable effects on mobile
    normalizeScroll: !mobile, // Disable on mobile to prevent conflicts
    duration: mobile ? 0.4 : 0.8, // Shorter animations on mobile
    ease: mobile ? "power1.out" : "power2.out", // Simpler easing on mobile
    stagger: mobile ? 0.05 : 0.1, // Less stagger on mobile
  };
};

export const setupScrollSmoother = () => {
  // Only create ScrollSmoother on client-side
  if (typeof window !== "undefined") {
    const settings = getMobileOptimizedSettings();
    
    // Skip ScrollSmoother on mobile for better performance
    if (isMobile()) {
      return null;
    }
    
    return ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: settings.smooth,
      effects: settings.effects,
      normalizeScroll: settings.normalizeScroll,
    });
  }
  
  return null;
};

// Card reveal animation
export const animateCardsOnScroll = (containerRef: React.RefObject<HTMLElement>) => {
  if (!containerRef.current) return;
  
  const settings = getMobileOptimizedSettings();
  const cards = containerRef.current.querySelectorAll(".project-card, .music-card");
  
  // Skip complex animations on mobile
  if (isMobile()) {
    // Simple fade-in for mobile
    gsap.fromTo(
      cards,
      { opacity: 0 },
      {
        opacity: 1,
        duration: settings.duration,
        stagger: settings.stagger,
        ease: settings.ease,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        }
      }
    );
    return;
  }
  
  // Desktop animations
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
        duration: settings.duration,
        delay: index * settings.stagger,
        ease: settings.ease,
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
          duration: settings.duration * 1.25,
          delay: index * settings.stagger + 0.2,
          ease: settings.ease,
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

// Mobile-optimized MagicBento animations
export const animateMagicBentoOnScroll = (containerRef: React.RefObject<HTMLElement>) => {
  if (!containerRef.current) return;
  
  const settings = getMobileOptimizedSettings();
  const cards = containerRef.current.querySelectorAll(".card");
  
  if (isMobile()) {
    // Simple fade-in for mobile with minimal stagger
    gsap.fromTo(
      cards,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: settings.duration,
        stagger: settings.stagger * 2, // Even less stagger on mobile
        ease: settings.ease,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        }
      }
    );
  } else {
    // Desktop animations with more complex effects
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { 
          y: 60, 
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: settings.duration,
          delay: index * settings.stagger,
          ease: settings.ease,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=50",
            end: "bottom center",
            toggleActions: "play none none none",
          }
        }
      );
    });
  }
}; 