import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Star, Play, Music, Headphones } from "lucide-react";
import { animateCardsOnScroll } from "@/lib/gsap";

interface TestimonialProps {
  image: string;
  name: string;
  title: string;
  review: string;
  rating: number;
  genre: string;
  streams: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Marcus Johnson",
    title: "Independent Hip-Hop Artist",
    review: "TuneSpark transformed my music career. Their distribution network got my tracks on every major platform, and the analytics helped me understand my audience better. My streams increased by 300% in just 6 months!",
    rating: 5,
    genre: "Hip-Hop",
    streams: "2.5M+"
  },
  {
    image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sarah Chen",
    title: "Electronic Music Producer",
    review: "The VEVO distribution through TuneSpark was a game-changer. My music videos now reach millions on premium platforms, and the revenue sharing is transparent. Best decision I made for my electronic music career.",
    rating: 5,
    genre: "Electronic",
    streams: "8.7M+"
  },
  {
    image: "https://images.unsplash.com/photo-1563237023-b1e970526dcb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Alex Rodriguez",
    title: "Record Label Owner",
    review: "Managing 15+ artists became effortless with TuneSpark. The bulk distribution, detailed reporting, and rights management features saved us countless hours. Our label's revenue grew 150% since switching.",
    rating: 5,
    genre: "Pop/Rock",
    streams: "15.2M+"
  }
];

// Testimonial Card Component
const TestimonialCard = ({ testimonial }: { testimonial: TestimonialProps }) => (
  <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:bg-gray-800/40 hover:border-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] flex-1 group">
    <div className="flex items-center mb-5">
      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-gray-700 group-hover:ring-gray-600 transition-colors duration-300">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-white group-hover:text-white transition-colors duration-300">{testimonial.name}</h4>
        <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{testimonial.title}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs bg-gray-800 px-2 py-1 rounded-full text-gray-300">{testimonial.genre}</span>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <Play className="w-3 h-3" />
            <span>{testimonial.streams}</span>
          </div>
        </div>
      </div>
    </div>
    
    <p className="text-gray-300 text-sm mb-5 line-clamp-4 group-hover:text-gray-200 transition-colors duration-300">"{testimonial.review}"</p>
    
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="text-sm font-medium mr-2 text-white">{testimonial.rating.toFixed(1)}</div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className="w-4 h-4 text-yellow-400 fill-yellow-400" 
            />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
        <Music className="w-4 h-4" />
        <Headphones className="w-4 h-4" />
      </div>
    </div>
  </div>
);

const ClientReviews = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      animateCardsOnScroll(containerRef);
    }
  }, []);

  return (
    <section className="text-white py-16 md:py-24">
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
            Artists <span className="aurora-text">Love</span> TuneSpark
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Join thousands of successful artists and labels who have transformed their music careers with our platform.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div ref={containerRef} className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-gradient-to-r from-purple-700 to-orange-600 text-white hover:from-purple-800 hover:to-orange-700 rounded-full px-8 py-3">
              Start Your Journey
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientReviews; 