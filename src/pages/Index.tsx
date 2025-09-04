import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import CompanyDetails from "@/components/CompanyDetails";
import DesignProcess from "@/components/DesignProcess";
import Services from "@/components/Services";
import ClientReviews from "@/components/ClientReviews";
import { setupScrollSmoother } from "@/lib/gsap";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Aurora from "@/components/custom_ui/aurora";
import MusicFeatures from "@/components/MusicFeatures";
import Pricing from "@/components/Pricing";

const Index = () => {
  const smootherInstance = useRef(null);

  useEffect(() => {
    // Initialize ScrollSmoother
    smootherInstance.current = setupScrollSmoother();

    // Cleanup on unmount
    return () => {
      if (smootherInstance.current) {
        smootherInstance.current.kill();
      }
    };
  }, []);

  return (
    <div
      id="smooth-wrapper"
      className="min-h-screen bg-black text-white overflow-x-hidden font-sans"
    >
      {/* Full-viewport aurora background (fixed) so it sits behind the floating navbar */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Aurora
          colorStops={["#102E50", "#F5C45E", "#BE3D2A"]}
          blend={0.2}
          amplitude={1.0}
        />
      </div>
      <Navbar />
      <div id="smooth-content">
        <div className="relative w-full">
          <div className="relative z-20">
            <Hero />
          </div>
        </div>
        <div className="relative z-10">
          <ProjectShowcase />
          <CompanyDetails />
          <MusicFeatures />
          <Pricing />
        </div>   
        <div className="relative z-20">
          <Footer />
        </div>    
      </div>
    </div>
  );
};

export default Index;
