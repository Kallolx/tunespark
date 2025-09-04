import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem = ({ question, answer, isOpen, toggleOpen }: FAQItemProps) => {
  return (
    <div className="bg-[#0d0d0d] rounded-lg mb-4 overflow-hidden">
      <button 
        className="flex items-center justify-between w-full p-5 text-left"
        onClick={toggleOpen}
      >
        <span className="text-white text-base">{question}</span>
        <Plus className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-45' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 text-gray-400 pr-8 text-sm">
              <p>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqData = [
    {
      question: "What services do you provide?",
      answer: "I specialize in brand identity and package design, with experience in web design, UI/UX, and to create brand experiences."
    },
    {
      question: "How do I start working with you?",
      answer: "The process starts with a discovery call where we discuss your project needs. After that, I'll send you a detailed proposal outlining the scope, timeline, and pricing. Once approved, we'll begin with a strategy session to dive deeper into your brand goals."
    },
    {
      question: "What design tools do you use?",
      answer: "I primarily work with industry-standard design tools including Adobe Creative Suite (Photoshop, Illustrator, InDesign), Figma for UI/UX design, and Blender for 3D elements when needed."
    },
    {
      question: "How long does a project take?",
      answer: "Project timelines vary based on scope and complexity. A typical brand identity project takes 4-6 weeks, while a comprehensive package design might take 6-8 weeks. Website design projects usually require 6-12 weeks depending on the requirements."
    },
    {
      question: "Do you provide revisions?",
      answer: "Yes, all project packages include multiple revision rounds. The standard package includes 2-3 revision cycles, but we can discuss additional revisions if needed for more complex projects."
    },
    {
      question: "What industries do you work with?",
      answer: "I've worked with clients across various industries including food & beverage, beauty & cosmetics, technology, healthcare, and lifestyle brands. I'm always open to exploring new industries and bringing fresh perspectives."
    },
    {
      question: "Do you offer development services?",
      answer: "While my primary focus is design, I collaborate with trusted development partners who can bring your website or digital product to life. This ensures you receive high-quality execution throughout the entire process."
    },
    {
      question: "What is your pricing structure?",
      answer: "I offer both project-based and retainer pricing models. Project-based pricing depends on scope, timeline, and deliverables. For ongoing design needs, I provide monthly retainer packages at different service levels."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Absolutely! Website redesign projects begin with a comprehensive audit of your current site to identify opportunities for improvement in both design and user experience. I'll then create a strategic plan to elevate your online presence."
    },
    {
      question: "What is your payment process?",
      answer: "I require a 50% deposit upfront to secure your project. The remaining balance is due upon completion of the project. Payment is made through secure online platforms."
    }
  ];
  
  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  
  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block py-1 px-3 bg-black border border-gray-700 rounded-full text-xs mb-4">
              FAQ'S
            </span>
            <h2 className="text-5xl md:text-7xl font-light mb-4 tracking-tighter">Answers</h2>
            <p className="text-gray-400 mb-8 text-lg max-w-md">
              Find answers to common questions about my design process, services etc...
            </p>
            
            <div className="aspect-square max-w-[600px] bg-neutral-800 rounded-lg overflow-hidden relative">
              <img 
                src="/faq.jpg" 
                alt="Design element" 
                className="w-full h-full object-cover grayscale"
              />
            </div>

          </motion.div>
          
          {/* Right Column - FAQ Items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {faqData.map((item, index) => (
              <FAQItem 
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                toggleOpen={() => toggleItem(index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 