import { useRef } from "react";
import { Button } from "./ui/button";
import { Star } from "lucide-react";

interface TestimonialProps {
  image: string;
  name: string;
  title: string;
  review: string;
  rating: number;
}

const testimonials: TestimonialProps[] = [
  {
    image: "//images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Richards Johnson",
    title: "Creative Director & Lead Designer",
    review: "Working with Meily was a seamless experience. Her ability to merge creativity with functionality resulted in designs that not only looked stunning but also drove meaningful engagement. Highly recommended!",
    rating: 5
  },
  {
    image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "June Lee",
    title: "CEO of GreenRoots",
    review: "Meily's strategic approach to design brought our brand vision to life. The packaging and brand elements she developed elevated our aesthetic and aligned perfectly with our sustainability values.",
    rating: 5
  },
  {
    image: "https://images.unsplash.com/photo-1563237023-b1e970526dcb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Alex Morgan",
    title: "Marketing Director at Pulse",
    review: "The branding package exceeded all expectations. From concept to execution, every detail was meticulously crafted. Our product launch was a success largely due to the compelling visual identity.",
    rating: 5
  }
];

// Testimonial Card Component
const TestimonialCard = ({ testimonial }: { testimonial: TestimonialProps }) => (
  <div className="bg-[#0d0d0d] p-6 rounded-lg flex-1">
    <div className="flex items-center mb-5">
      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-full h-full object-cover grayscale"
        />
      </div>
      <div>
        <h4 className="font-medium text-white">{testimonial.name}</h4>
        <p className="text-xs text-gray-400">{testimonial.title}</p>
      </div>
    </div>
    
    <p className="text-gray-300 text-sm mb-5 line-clamp-4">"{testimonial.review}"</p>
    
    <div className="flex items-center">
      <div className="text-sm font-medium mr-2">{testimonial.rating.toFixed(1)}</div>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className="w-4 h-4 text-yellow-400 fill-yellow-400" 
          />
        ))}
      </div>
    </div>
  </div>
);

const ClientReviews = () => {
  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-4">
        {/* First row - Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left side - Image */}
          <div className="rounded-lg overflow-hidden h-[400px]">
            <img 
              src="/reviews.jpg" 
              alt="Client at work" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
          
          {/* Right side - Content */}
          <div>
            <span className="inline-block py-1 px-3 bg-black border border-gray-700 rounded-full text-xs mb-4">
              Reviews
            </span>
            <h2 className="text-5xl md:text-7xl font-light mb-4 tracking-tighter">Client Reviews</h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Real feedback from clients who trusted my design expertise to elevate their brands successfully.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex gap-4">
              <Button className="bg-white text-black hover:bg-white/80">Book a Free Call</Button>
              <Button className="text-white hover:bg-black/80 border border-gray-700">See Services</Button>
            </div>
          </div>
        </div>
        
        {/* Second row - Testimonials */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard 
                key={`${testimonial.name}-${index}`} 
                testimonial={testimonial} 
              />
            ))}
          </div>
        </div>
        
        {/* Third row - Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 bg-[#0d0d0d] rounded-2xl overflow-hidden">
          <div className="flex flex-col items-center justify-center py-10 border-b md:border-b-0 md:border-r border-gray-800">
            <div className="text-4xl font-light mb-2">180+</div>
            <div className="text-gray-400 text-sm">design projects completed.</div>
          </div>
          
          <div className="flex flex-col items-center justify-center py-10 border-b md:border-b-0 md:border-r border-gray-800">
            <div className="text-4xl font-light mb-2">96%</div>
            <div className="text-gray-400 text-sm">Client satisfaction rate.</div>
          </div>
          
          <div className="flex flex-col items-center justify-center py-10">
            <div className="text-4xl font-light mb-2">15+</div>
            <div className="text-gray-400 text-sm">Years of experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews; 