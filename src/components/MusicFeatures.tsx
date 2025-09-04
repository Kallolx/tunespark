import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MusicFeatures = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;
    
    // Set initial state for all cards
    gsap.set(cards, { 
      opacity: 0, 
      x: -50 
    });

    // Create timeline for sequential row animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate first row (cards 0, 1, 2)
    tl.to(cards.slice(0, 3), {
      opacity: 1,
      x: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: "power2.out"
    })
    // Add delay between rows
    .to({}, { duration: 0.3 })
    // Animate second row (cards 3, 4, 5)
    .to(cards.slice(3, 6), {
      opacity: 1,
      x: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.1");

    return () => {
      tl.kill();
    };
  }, []);

  const features = [
    {
      title: "Unlimited uploads and releases",
      description: "Turn any moment into customized music instantly—from your commute to inside jokes. Express what words can't. Free forever, no subscription needed.",
      image: "/icons/1.png",
      imageSize: "h-36"
    },
    {
      title: "Free AI music generator",
      description: "Discover what's possible when anyone can make music. Access the market-leading AI song generator to explore millions of songs—remixes, jokes, and raw emotion.",
      image: "/icons/2.png",
      imageSize: "w-full h-36"
    },
    {
      title: "Share it with the world",
      description: "Make music that matters to you, then share it with people who'll feel it too. From your inner circle to millions of music fans, your next track can go far.",
      image: "/icons/3.png",
      imageSize: "w-full"
    },
    {
      title: "Experience the modern song maker",
      description: "Start, edit, remix—your way. Upload or record your own audio, rewrite lyrics, reorder sections, and reimagine your sound with powerful creative tools.",
      image: "/icons/4.png",
      imageSize: "w-full"
    },
    {
      title: "Create everyday. Keep it all.",
      description: "Make up to 500 custom songs a month, with full commercial rights on the Pro plan. Get inspired, break genre boundaries, and own what you generate—no strings attached.",
      image: "/icons/5.png",
      imageSize: "w-full"
    },
    {
      title: "Extract stems. Drop into your DAW.",
      description: "Export up to 12 time-aligned WAV stems and use them seamlessly in Ableton, Logic, or any DAW. Clean, structured, and ready for pro workflows.",
      image: "/icons/6.png",
      imageSize: "w-full"
    }
  ];

  return (
    <section ref={sectionRef} className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-tighter leading-tight">
            Everything you need <br /> to <span className="aurora-text">make music</span> your way
          </h2>
        </div>

        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-300 group"
            >
              <div className="h-full flex flex-col">
                <h3 className="text-xl font-medium tracking-tighter mb-3 text-white group-hover:text-gray-100 transition-colors text-left">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors flex-1 mb-4 text-left">
                  {feature.description}
                </p>
                <div className="mt-auto flex justify-center">
                  <img 
                    src={feature.image} 
                    alt="Feature icon" 
                    className={feature.imageSize}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicFeatures;
