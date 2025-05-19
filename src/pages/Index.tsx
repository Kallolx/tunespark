
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-16 flex flex-col items-center">
        <div className="py-2 px-4 bg-black/40 rounded-full border border-gray-700 backdrop-blur-sm mb-10">
          <p className="text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white inline-block"></span>
            Crafting Unique Brand Identities
          </p>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 leading-tight">
          Branding that you<br />need Indeed
        </h1>
        
        <p className="text-gray-300 text-center max-w-2xl mb-12">
          Elevate your brand with custom identity and package design. Showcase your
          story through bold visuals and strategic design solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-24">
          <Button className="px-8 py-6">Get Started Now</Button>
          <Button 
            variant="outline" 
            className="px-8 py-6 border-gray-600 hover:bg-gray-800"
          >
            See Projects
          </Button>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <p>Scroll down</p>
          <div className="w-16 h-[1px] bg-gray-700"></div>
          <ChevronDown className="animate-bounce" size={16} />
          <p>to see projects</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
