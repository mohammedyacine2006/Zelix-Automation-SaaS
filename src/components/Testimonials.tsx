import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS_DATA = [
  {
    id: 1,
    quote: "Usage spikes used to mean overnight pager rotations whenever a batch job failed silently.\n\nRetries, dead-letter queues, and dashboards in the automation layer mean our SaaS backend keeps pace with growth without heroic manual babysitting.",
    image: "/images/image10.webp"
  },
  {
    id: 2,
    quote: "The visual workflow builder and multi-agent orchestration are miles ahead of anything else on the market.\n\nWe shipped six core AI capabilities in two weeks without writing any complex boilerplate code.",
    image: "/images/image11.webp"
  },
  {
    id: 3,
    quote: "The SOC2 compliance guardrails and instant PII masking gave our legal team absolute confidence.\n\nWe successfully rolled out autonomous AI agents to 50,000 healthcare workers across the entire organization.",
    image: "/images/image12.webp"
  },
  {
    id: 4,
    quote: "We were able to migrate our entire complex data pipeline into Zelix in a matter of days.\n\nThe speed and reliability improvements have been immediately noticeable to our enterprise clients.",
    image: "/images/image13.webp"
  },
  {
    id: 5,
    quote: "Customer support resolution times dropped by 68% within the first month of integration.\n\nThe autonomous agents handle all our tier-1 queries with incredible accuracy and conversational fluency.",
    image: "/images/image14.webp"
  }
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      }
    });

    // Animate Left Column elements
    if (leftColRef.current) {
      const leftElements = leftColRef.current.children;
      tl.fromTo(leftElements, 
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.5, 
          stagger: 0.08, 
          ease: 'power2.out',
          clearProps: 'all'
        }
      );
    }

    // Animate Right Column
    if (rightColRef.current) {
      tl.fromTo(rightColRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          clearProps: 'all'
        },
        '<0.2'
      );
    }

    // Number Counter Animation
    const stats = gsap.utils.toArray('.stat-num');
    stats.forEach((stat: any) => {
      const target = parseInt(stat.getAttribute('data-target') || '0', 10);
      gsap.fromTo(stat, 
        { innerText: 0 },
        {
          innerText: target,
          duration: 1.5,
          ease: 'power2.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: stat,
            start: 'top 85%'
          }
        }
      );
    });
  }, { scope: sectionRef });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isInView) {
      intervalId = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
      }, 5000);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isInView]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const activeTestimonial = TESTIMONIALS_DATA[activeIndex];

  return (
    <section ref={sectionRef} id="testimonials" className="pt-16 sm:pt-28 pb-12 sm:pb-16 bg-[#F4F5F7] relative overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Social Proof & Metrics */}
          <div ref={leftColRef} className="lg:col-span-4 flex flex-col justify-center gap-6 sm:gap-8">
            
            {/* Avatar Stack & Stars */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
              <div className="flex -space-x-3">
                <img className="w-[3.25rem] h-[3.25rem] rounded-full border-[3px] border-[#F4F5F7] object-cover relative z-30" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150" alt="Avatar" />
                <img className="w-[3.25rem] h-[3.25rem] rounded-full border-[3px] border-[#F4F5F7] object-cover relative z-20" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150" alt="Avatar" />
                <img className="w-[3.25rem] h-[3.25rem] rounded-full border-[3px] border-[#F4F5F7] object-cover relative z-10" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" alt="Avatar" />
                <div className="w-[3.25rem] h-[3.25rem] rounded-full border-[3px] border-[#F4F5F7] bg-white flex items-center justify-center text-xs font-semibold text-slate-700 relative z-0">+243</div>
              </div>
              <div>
                <div className="flex items-center gap-[2px] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-[18px] h-[18px] fill-[#8B5CF6] text-[#8B5CF6]" />
                  ))}
                </div>
                <div className="text-[15px] text-slate-500 font-medium">Happy by 20k+ clients</div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-[1.25rem] p-6 sm:p-7 flex flex-col items-center justify-center text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-100">
                <div className="text-[13px] text-slate-400 font-medium mb-2">Top Customer Ratings</div>
                <div className="text-3xl font-bold text-slate-900 tracking-tight flex items-center">
                  <span className="stat-num" data-target="91">0</span>%
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-[1.25rem] p-5 sm:p-6 flex flex-col items-center justify-center text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-100">
                  <div className="text-[12px] sm:text-[13px] text-slate-400 font-medium mb-2 leading-tight">On-Time Deliveries</div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center">
                    <span className="stat-num" data-target="100">0</span>%
                  </div>
                </div>
                <div className="bg-white rounded-[1.25rem] p-5 sm:p-6 flex flex-col items-center justify-center text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-100">
                  <div className="text-[12px] sm:text-[13px] text-slate-400 font-medium mb-2 leading-tight">Logistics Optimization</div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center">
                    <span className="stat-num" data-target="87">0</span>%
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Carousel Card */}
          <div ref={rightColRef} className="lg:col-span-8 h-full">
            <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] p-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 h-full flex flex-col md:flex-row items-stretch">
              
              {/* Image Side - Increased height/aspect for portrait view on mobile */}
              <div className="w-full md:w-[45%] lg:w-[42%] relative overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem] bg-slate-100 aspect-[3/4] sm:aspect-[4/3] md:aspect-auto md:min-h-[440px] shrink-0">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeTestimonial.id}
                    src={activeTestimonial.image} 
                    alt="Client Testimonial" 
                    loading="eager"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 w-full h-full object-cover object-top sm:object-center"
                  />
                </AnimatePresence>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-[55%] lg:w-[58%] flex flex-col justify-between py-6 sm:py-8 px-4 sm:px-8 md:px-10 lg:px-12">
                
                {/* Responsive container for quote to prevent overlapping & layout shifts */}
                <div className="relative min-h-[140px] sm:min-h-[200px] md:min-h-[240px] flex items-center my-auto">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTestimonial.id}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.3 }}
                      className="relative md:absolute md:inset-0 flex items-center w-full py-2 md:py-0"
                    >
                      <div className="text-[1rem] sm:text-lg lg:text-[1.3rem] text-slate-800 leading-[1.6] font-normal whitespace-pre-line">
                        "{activeTestimonial.quote}"
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                {/* Navigation & Counter */}
                <div className="mt-6 md:mt-8 flex items-center justify-between pt-2">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={handlePrev}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors focus:outline-none active:scale-95"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={handleNext}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors focus:outline-none active:scale-95"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="text-slate-400 font-medium text-base sm:text-lg flex items-center gap-1 select-none">
                    <span className="text-slate-900">{activeIndex + 1}</span> 
                    <span className="text-slate-300 text-xl font-light">/</span> 
                    <span>{TESTIMONIALS_DATA.length}</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};