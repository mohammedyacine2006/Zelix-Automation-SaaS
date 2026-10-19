import React, { useState, useRef } from 'react';
import { Check, ArrowRight, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'For early-stage teams',
    description: 'Big sound in a small package. The S1 is a sleek, portable Bluetooth speaker with rich audio and all-day battery life.',
    priceMonthly: 2500,
    priceYearly: 2000,
    features: [
      'Delaware franchise tax',
      'State income tax',
      'Foreign founders',
      'Foreign subsidiary',
      'R&D tax credits',
      'Sales tax nexus',
      'Employment tax nexus',
      'Income tax nexus'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'For growing teams',
    description: 'Advanced capabilities for growing operations. Designed to integrate seamlessly with your existing toolstack.',
    priceMonthly: 4900,
    priceYearly: 3900,
    features: [
      'Everything in Starter',
      'Dedicated account manager',
      'Priority email & chat support',
      'Custom workflows',
      'Advanced reporting',
      'Multi-state registration',
      'Compliance alerts',
      'Audit defense support'
    ]
  },
  {
    id: 'business',
    name: 'Business',
    tagline: 'For established businesses',
    description: 'Enterprise-grade controls with custom workflows, team-wide governance, and dedicated support for large-scale operations.',
    priceMonthly: 8290,
    priceYearly: 6990,
    features: [
      'Everything in Pro',
      'Custom integration API',
      'SSO & Advanced Security',
      'Dedicated legal consultation',
      'Global entity management',
      'Audit defense support',
      'Volume discounting',
      'Custom SLA guarantees'
    ]
  }
];

export const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [activePlan, setActivePlan] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    });

    // 1. Header elements Fade Up
    tl.fromTo(
      '.pricing-header-item',
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.45, 
        stagger: 0.05, 
        ease: 'power2.out',
        clearProps: 'transform' 
      }
    );

    // 2. Cards Container Fade Up
    tl.fromTo(
      cardsContainerRef.current,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.5, 
        ease: 'power2.out',
        clearProps: 'transform' 
      },
      '-=0.25'
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="pricing" className="pt-6 sm:pt-10 pb-12 sm:pb-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 flex flex-col items-center">
          <div className="pricing-header-item bg-[#F0F4F8] rounded-full px-3.5 py-1 sm:px-4 sm:py-1.5 border border-slate-200/50 flex items-center gap-2 shadow-sm mb-4 sm:mb-6 inline-flex">
            <div className="bg-[#0F172A] text-white rounded-full p-1 w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <span className="text-slate-800 font-medium text-xs sm:text-sm">Pricing</span>
          </div>
          <h2 className="pricing-header-item text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-3 sm:mb-6">
            Simple pricing that scales with you
          </h2>
          <p className="pricing-header-item text-slate-500 text-sm sm:text-base md:text-xl max-w-2xl leading-relaxed mb-6 sm:mb-8">
            Upgrade anytime as your needs evolve, and stay focused on what matters most building and expanding your product with confidence.
          </p>

          {/* Toggle */}
          <div className="pricing-header-item flex items-center gap-3 sm:gap-4">
            <span className={`text-xs sm:text-sm transition-colors ${!isYearly ? "text-slate-900 font-semibold" : "text-slate-500 font-medium"}`}>
              Monthly
            </span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-13 h-7 sm:w-16 sm:h-8 bg-slate-900 rounded-full p-1 relative flex items-center transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            >
              <motion.div 
                className="w-5 h-5 sm:w-6 sm:h-6 bg-violet-600 rounded-full shadow-sm"
                animate={{ x: isYearly ? (window.innerWidth < 640 ? 24 : 32) : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-xs sm:text-sm transition-colors ${isYearly ? "text-slate-900 font-semibold" : "text-slate-500 font-medium"}`}>
              Yearly
            </span>
          </div>
        </div>

        {/* Pricing Layout: Grid switched from md: to lg: for perfect tablet responsiveness */}
        <div ref={cardsContainerRef} className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          
          {/* Left Control Column */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2.5 sm:gap-3">
              {PLANS.map((plan, idx) => {
                const isActive = activePlan === idx;
                const isPro = plan.id === 'pro';
                return (
                  <div 
                    key={plan.id}
                    className={`relative rounded-xl sm:rounded-2xl transition-all duration-300 ${
                      isActive ? 'scale-[1.01] shadow-[0_8px_30px_rgb(0,0,0,0.04)] z-10' : 'hover:scale-[1.01] z-0'
                    } ${isPro ? 'p-[1.5px] overflow-hidden' : 'border border-slate-200/80'}`}
                  >
                    {isPro && (
                      <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0%,transparent_75%,#7c3aed_100%)] animate-[spin_3s_linear_infinite] opacity-60" />
                    )}
                    <button
                      onClick={() => setActivePlan(idx)} 
                      className={`relative w-full text-left p-3.5 sm:p-4 lg:p-5 transition-colors duration-300 flex items-center justify-between z-10 ${
                        isActive 
                          ? 'bg-white' 
                          : isPro ? 'bg-slate-50/80 hover:bg-slate-100' : 'bg-white/60 hover:bg-slate-100/60'
                      } ${isPro ? 'rounded-[calc(0.75rem-1.5px)] sm:rounded-[calc(1rem-1.5px)]' : 'rounded-xl sm:rounded-2xl'}`}
                    >
                      <div>
                        <h3 className={`text-sm sm:text-base lg:text-lg font-semibold transition-colors ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                          {plan.name}
                        </h3>
                        <p className={`text-xs sm:text-xs lg:text-sm mt-0.5 transition-colors line-clamp-1 ${isActive ? 'text-slate-500' : 'text-slate-400'}`}>
                          {plan.tagline}
                        </p>
                      </div>
                      {isActive && (
                        <motion.div 
                          layoutId="activeTabIndicator"
                          className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full bg-slate-900 flex items-center justify-center shrink-0 ml-2"
                        >
                          <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-white" />
                        </motion.div>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Custom Plan Callout */}
            <div className="mt-4 sm:mt-6 bg-white/70 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm">
              <h4 className="text-slate-900 font-bold mb-1 text-sm sm:text-base tracking-tight">Need a custom plan?</h4>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-3">
                Have specialized requirements or high-volume needs? Contact our enterprise team.
              </p>
              <a href="/contact" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-900 hover:text-slate-700 transition-colors">
                Talk to Sales <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Feature Detail Card */}
          <div className="lg:col-span-7">
             <div className={`relative rounded-2xl sm:rounded-3xl transition-shadow duration-500 shadow-lg sm:shadow-xl ${
               activePlan === 1 ? 'p-[1.5px] overflow-hidden' : 'border border-slate-200'
             }`}>
                {activePlan === 1 && (
                  <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0%,transparent_75%,#7c3aed_100%)] animate-[spin_4s_linear_infinite] opacity-70" />
                )}
                <div className={`relative z-10 bg-white h-full flex flex-col p-5 sm:p-7 lg:p-8 ${
                  activePlan === 1 ? 'rounded-[calc(1rem-1.5px)] sm:rounded-[calc(1.5rem-1.5px)]' : 'rounded-2xl sm:rounded-3xl'
                }`}>
                   <AnimatePresence mode="wait">
                      <motion.div
                         key={activePlan}
                         initial={{ opacity: 0, y: 15 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: -15 }}
                         transition={{ duration: 0.25, ease: "easeOut" }}
                         className="h-full flex flex-col"
                      >
                         <div className="inline-block px-3 py-1 sm:px-3.5 sm:py-1 rounded-full border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6 w-fit">
                            {PLANS[activePlan].name}
                         </div>

                         <div className="flex flex-wrap items-baseline justify-between mb-4 sm:mb-6 gap-2 border-b border-slate-100 pb-4 sm:pb-6">
                            <h3 className="text-base sm:text-xl text-slate-800 font-medium">Subscription</h3>
                            <div className="flex items-baseline gap-1">
                               <motion.span 
                                 key={isYearly ? "yearly" : "monthly"}
                                 initial={{ opacity: 0, y: -8 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight"
                               >
                                 ${isYearly ? PLANS[activePlan].priceYearly.toLocaleString() : PLANS[activePlan].priceMonthly.toLocaleString()}
                               </motion.span>
                               <span className="text-slate-400 font-medium text-xs sm:text-sm lg:text-base shrink-0">/month</span>
                            </div>
                         </div>

                         <p className="text-slate-500 text-xs sm:text-base leading-relaxed mb-5 sm:mb-8 max-w-xl">
                            {PLANS[activePlan].description}
                         </p>

                         <button className="group relative flex items-center h-[46px] sm:h-[52px] w-full bg-[#0F172A] rounded-full text-white font-medium text-sm sm:text-base shadow-sm hover:bg-slate-800 transition-colors overflow-hidden cursor-pointer mb-6 sm:mb-8">
                            <div className="absolute left-1.5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-violet-600 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:left-[calc(100%-2.5rem)] sm:group-hover:left-[calc(100%-2.75rem)]">
                               <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </div>
                            <span className="w-full text-center pl-8 sm:pl-10 pr-2 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-x-5 sm:group-hover:-translate-x-6">
                               Get started
                            </span>
                         </button>

                         <div className="mt-auto">
                            <h4 className="text-sm sm:text-lg text-slate-900 font-medium mb-3 sm:mb-4">What's included:</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-3">
                               {PLANS[activePlan].features.map((feature, idx) => (
                                  <div key={idx} className="flex items-center gap-2.5 sm:gap-3">
                                     <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-slate-200 flex items-center justify-center shrink-0 bg-slate-50">
                                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-500" strokeWidth={3} />
                                     </div>
                                     <span className="text-slate-600 text-xs sm:text-sm lg:text-base">{feature}</span>
                                  </div>
                               ))}
                            </div>
                         </div>
                      </motion.div>
                   </AnimatePresence>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};