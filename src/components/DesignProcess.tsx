import { motion } from "framer-motion";
import { LightbulbIcon, ListIcon, RocketIcon } from "lucide-react";
import { Button } from "./ui/button";

const DesignProcess = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side - Tall image */}
          <motion.div 
            className="relative overflow-hidden rounded-md"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/process.jpg"
              alt="Design Process"
              className="w-full h-full object-cover grayscale"
            />
          </motion.div>
          
          {/* Right side - Content */}
          <div className="flex flex-col justify-start">
            {/* Process tag and heading */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 bg-black border border-gray-700 rounded-full text-xs mb-4">
                Design process
              </span>
              <h2 className="text-5xl md:text-7xl font-light mb-4 tracking-tighter">Process</h2>
              <p className="text-gray-400 mb-4 max-w-md">
                crafting bold visuals that inspire and elevate brands with thoughtful process.
              </p>
              <div className="flex gap-4 mb-8">
                <Button className="bg-white text-black hover:bg-white/80">Book a Free Call</Button>
                <Button className=" text-white hover:bg-black/80 border border-gray-700">See Projects</Button>
              </div>
            </motion.div>

            {/* Process Steps Cards */}
            <div className="space-y-6">
              {/* Card 1 */}
              <motion.div 
                className="bg-[#0d0d0d] rounded-2xl p-8 min-h-[200px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex justify-between items-start mb-6">
                  <LightbulbIcon className="text-white w-6 h-6" />
                  <span className="text-base text-gray-500 font-medium">1</span>
                </div>
                <h3 className="text-2xl font-medium mb-4">Define Your Vision</h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  Find the perfect plan tailored to your needs, offering the right balance of features, flexibility, and value to help you achieve your goals efficiently.
                </p>
              </motion.div>
              
              {/* Card 2 */}
              <motion.div 
                className="bg-[#0d0d0d] rounded-2xl p-8 min-h-[200px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex justify-between items-start mb-6">
                  <ListIcon className="text-white w-6 h-6" />
                  <span className="text-base text-gray-500 font-medium">2</span>
                </div>
                <h3 className="text-2xl font-medium mb-4">Submit Your Request</h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  Easily submit your design requirements through our private client portal, ensuring a seamless process where your vision is captured, refined, and brought to life with precision and creativity.
                </p>
              </motion.div>
              
              {/* Card 3 */}
              <motion.div
                className="bg-[#0d0d0d] rounded-2xl p-8 min-h-[200px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex justify-between items-start mb-6">
                  <RocketIcon className="text-white w-6 h-6" />
                  <span className="text-base text-gray-500 font-medium">3</span>
                </div>
                <h3 className="text-2xl font-medium mb-4">Project Delivered</h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  As a dedicated freelancer, I ensure your project is completed with precision and delivered within 2-3 days. With a keen eye for detail, I provide solutions that exceed expectations, saving you time and beyond expectations.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcess; 