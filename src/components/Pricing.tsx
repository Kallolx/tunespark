import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Skip GSAP animations on mobile

    const cards = cardsRef.current;

    // Set initial state for all cards
    gsap.set(cards, {
      opacity: 0,
      y: 50,
      scale: 0.9
    });

    // Create timeline for staggered animations
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
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.7)"
    })
    // Add delay between rows
    .to({}, { duration: 0.3 })
    // Animate second row (cards 3, 4) - centered
    .to(cards.slice(3, 5), {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.7)"
    }, "-=0.1");

    return () => {
      tl.kill();
    };
  }, [isMobile]);

  const plans = [
    {
      name: "Musician",
      subtitle: "Perfect for individual artists.",
      monthlyPrice: 2.99,
      yearlyPrice: 22.99,
      features: [
        { text: "Unlimited uploads for 1 artist", included: true },
        { text: "100% royalties", included: true },
        { text: "Fast delivery", included: true },
        { text: "Spotify pre-save", included: true },
        { text: "Payment splitting", included: true },
      ],
      buttonText: "Choose Musician",
      buttonStyle:
        "bg-gray-700 text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600",
      badge: null,
      priceColor: "text-blue-400",
    },
    {
      name: "Musician Plus",
      subtitle: "Enhanced features for growing artists.",
      monthlyPrice: 4.99,
      yearlyPrice: 35,
      features: [
        { text: "All Musician features", included: true },
        { text: "2 artists supported", included: true },
        { text: "Enhanced statistics", included: true },
        { text: "Additional promotional tools", included: true },
        { text: "Priority support", included: true },
      ],
      buttonText: "Choose Musician Plus",
      buttonStyle:
        "bg-gray-700 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-yellow-500",
      badge: { text: "MOST POPULAR", color: "bg-pink-500" },
      priceColor: "text-yellow-400",
    },
    {
      name: "Label",
      subtitle: "Complete solution for music labels.",
      monthlyPrice: 9.99,
      yearlyPrice: 50,
      features: [
        { text: "All Musician Plus features", included: true },
        { text: "Multiple artists (5-20)", included: true },
        { text: "Label branding", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Dedicated account manager", included: true },
      ],
      buttonText: "Choose Label",
      buttonStyle:
        "bg-gray-700 text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-600",
      badge: null,
      priceColor: "text-orange-400",
    },
    {
      name: "Single Release",
      subtitle: "Perfect for one-time releases.",
      monthlyPrice: 9.99,
      yearlyPrice: 9.99,
      features: [
        { text: "One-time fee per single", included: true },
        { text: "100% royalties", included: true },
        { text: "Distribution to major platforms", included: true },
      ],
      buttonText: "Choose Single Release",
      buttonStyle:
        "bg-gray-700 text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-600",
      badge: null,
      priceColor: "text-green-400",
    },
    {
      name: "Album Release",
      subtitle: "Complete album distribution.",
      monthlyPrice: 29.99,
      yearlyPrice: 29.99,
      features: [
        { text: "One-time fee per album", included: true },
        { text: "100% royalties", included: true },
        { text: "Distribution to major platforms", included: true },
      ],
      buttonText: "Choose Album Release",
      buttonStyle:
        "bg-gray-700 text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600",
      badge: null,
      priceColor: "text-indigo-400",
    },
  ];

  const getSavings = (plan: (typeof plans)[0]) => {
    if (plan.monthlyPrice === plan.yearlyPrice) return null;
    const monthlyTotal = plan.monthlyPrice * 12;
    const yearlyTotal = plan.yearlyPrice;
    const savings = monthlyTotal - yearlyTotal;
  };

  const getPriceDisplay = (plan: (typeof plans)[0]) => {
    if (plan.name === "Label") {
      return isYearly
        ? `$${plan.yearlyPrice}-$${plan.yearlyPrice * 2}`
        : `$${plan.monthlyPrice}-$${plan.monthlyPrice * 2}`;
    }
    return `$${isYearly ? plan.yearlyPrice : plan.monthlyPrice}`;
  };

  const getPriceUnit = (plan: (typeof plans)[0]) => {
    // One-time fee plans don't show /month or /year
    if (plan.monthlyPrice === plan.yearlyPrice) {
      return "one-time fee";
    }
    return isYearly ? "/year" : "/month";
  };

  return (
    <section ref={sectionRef} className="text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-tighter leading-tight">
            Choose the <span className="aurora-text">perfect plan</span> <br />{" "}
            for your music career
          </h2>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span
              className={`text-sm ${
                !isYearly ? "text-white" : "text-gray-400"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <span
                className={`text-sm ${
                  isYearly ? "text-white" : "text-gray-400"
                }`}
              >
                Yearly
              </span>
              {isYearly && (
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  SAVE 20%
                </span>
              )}
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        {isMobile ? (
          // Mobile slider
          <div className="overflow-x-auto pb-4 hide-scrollbar">
            <div className="flex gap-6 px-4" style={{ width: `${plans.length * 280}px` }}>
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:bg-gray-800/50 transition-all duration-300 flex-shrink-0 w-64"
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div
                      className={`absolute -top-3 left-1/2 -translate-x-1/2 ${plan.badge.color} text-white text-xs px-3 py-1 rounded-full`}
                    >
                      {plan.badge.text}
                    </div>
                  )}

                  {/* Plan Info */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-medium tracking-tighter mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{plan.subtitle}</p>
                    <div className="mb-4">
                      <span
                        className={`text-4xl font-medium tracking-tighter ${plan.priceColor}`}
                      >
                        {getPriceDisplay(plan)}
                      </span>
                      <span className="text-gray-400">{getPriceUnit(plan)}</span>
                    </div>
                    {isYearly && getSavings(plan) && (
                      <p className="text-green-400 text-sm mb-2">
                        {getSavings(plan)}
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="p-1 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-green-500" />
                        </div>
                        <span className="text-sm text-gray-300">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <button
                    className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-300 ${plan.buttonStyle}`}
                  >
                    {plan.buttonText}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          // Desktop grid - 3 columns with 5 cards (2 rows: 3 + 2 centered)
          <div className="max-w-7xl mx-auto">
            {/* First row - 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {plans.slice(0, 3).map((plan, index) => (
                <div
                  key={plan.name}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="relative bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:bg-gray-800/50 transition-all duration-300"
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div
                      className={`absolute -top-3 left-1/2 -translate-x-1/2 ${plan.badge.color} text-white text-xs px-3 py-1 rounded-full`}
                    >
                      {plan.badge.text}
                    </div>
                  )}

                  {/* Plan Info */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-medium tracking-tighter mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{plan.subtitle}</p>
                    <div className="mb-4">
                      <span
                        className={`text-4xl font-medium tracking-tighter ${plan.priceColor}`}
                      >
                        {getPriceDisplay(plan)}
                      </span>
                      <span className="text-gray-400">{getPriceUnit(plan)}</span>
                    </div>
                    {isYearly && getSavings(plan) && (
                      <p className="text-green-400 text-sm mb-2">
                        {getSavings(plan)}
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="p-1 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-green-500" />
                        </div>
                        <span className="text-sm text-gray-300">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <button
                    className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-300 ${plan.buttonStyle}`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              ))}
            </div>

            {/* Second row - 2 cards centered */}
            <div className="flex justify-center gap-8">
              {plans.slice(3, 5).map((plan, index) => (
                <div
                  key={plan.name}
                  ref={(el) => (cardsRef.current[index + 3] = el)}
                  className="relative bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:bg-gray-800/50 transition-all duration-300 w-full max-w-sm"
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div
                      className={`absolute -top-3 left-1/2 -translate-x-1/2 ${plan.badge.color} text-white text-xs px-3 py-1 rounded-full`}
                    >
                      {plan.badge.text}
                    </div>
                  )}

                  {/* Plan Info */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-medium tracking-tighter mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{plan.subtitle}</p>
                    <div className="mb-4">
                      <span
                        className={`text-4xl font-medium tracking-tighter ${plan.priceColor}`}
                      >
                        {getPriceDisplay(plan)}
                      </span>
                      <span className="text-gray-400">/{getPriceUnit(plan)}</span>
                    </div>
                    {isYearly && getSavings(plan) && (
                      <p className="text-green-400 text-sm mb-2">
                        {getSavings(plan)}
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="p-1 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-green-500" />
                        </div>
                        <span className="text-sm text-gray-300">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <button
                    className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-300 ${plan.buttonStyle}`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Pricing;
