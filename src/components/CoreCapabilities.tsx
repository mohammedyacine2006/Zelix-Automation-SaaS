import React, { useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function CoreCapabilities() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerBadgeRef = useRef<HTMLDivElement>(null);
  const headerTitleRef = useRef<HTMLHeadingElement>(null);
  const headerSubRef = useRef<HTMLParagraphElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. HEADER BLOCK REVEAL
    gsap.fromTo(
      [headerBadgeRef.current, headerTitleRef.current, headerSubRef.current],
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.0,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerBadgeRef.current,
          start: 'top 85%',
        }
      }
    );

    // 2. INDIVIDUAL BENTO CARDS REVEAL
    if (cardsContainerRef.current) {
      const cards = gsap.utils.toArray<HTMLElement>(cardsContainerRef.current.children);
      
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.1,
            ease: 'power3.out',
            force3D: true,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="w-full py-16 sm:py-24 lg:py-32 bg-[#F4F5F7] relative overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <div ref={headerBadgeRef} className="bg-[#F0F4F8] rounded-full px-4 py-1.5 border border-slate-200/50 flex items-center gap-2 shadow-sm mb-6 inline-flex">
            <div className="bg-[#0F172A] text-white rounded-full p-1 w-5 h-5 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <span className="text-slate-800 font-medium text-sm">Core Capabilities</span>
          </div>
          
          <h2 ref={headerTitleRef} className="text-3xl sm:text-5xl font-semibold text-slate-900 tracking-tight mb-4 sm:mb-6 leading-tight">
            Leading teams around the globe rely on our AI Automation.
          </h2>
          
          <p ref={headerSubRef} className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Streamline operations, connect your tools, and deploy intelligent autonomous workflows in seconds.
          </p>
        </div>

        {/* Bento Grid */}
        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Top Showcase Card (Hero Card 1) */}
          <div className="md:col-span-2 bg-gradient-to-br lg:bg-gradient-to-r from-[#F8FAFC] via-[#F1F3F9] to-[#ECE9F8] border border-slate-200/60 shadow-sm rounded-3xl flex flex-col lg:grid lg:grid-cols-2 overflow-hidden min-h-[420px] relative" style={{ willChange: 'transform, opacity' }}>
            <div className="w-full flex flex-col justify-between z-20 relative p-6 sm:p-8 lg:p-12 h-full">
              <div className="mb-6 lg:mb-0 max-w-xl">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-3 sm:mb-6 tracking-tight leading-snug">
                  Multi-Agent Workflow Orchestration
                </h3>
                <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Design complex, multi-step processes where specialized AI agents collaborate to complete tasks across your entire tool stack seamlessly.
                </p>
              </div>
              <a href="/services" className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-900 text-white rounded-full flex items-center justify-center cursor-pointer flex-shrink-0 mt-6 lg:mt-auto shadow-md">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
            
            <div className="w-full relative h-[220px] sm:h-[280px] lg:h-full min-h-[220px] flex items-center justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_100%)] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_100%)]">
              <img 
                src="/images/image15.webp" 
                alt="Multi-Agent Workflow Orchestration 3D Visual" 
                className="w-full h-full object-cover object-center relative z-10 bento-3d-img" 
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-200 rounded-full blur-[80px] opacity-20 pointer-events-none z-0"></div>
            </div>
          </div>

          {/* Card 1: Data Extraction */}
          <div className="relative overflow-hidden min-h-[420px] rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200/60 shadow-sm before:absolute before:inset-x-0 before:top-0 before:h-2/3 before:bg-gradient-to-b before:from-slate-50/95 before:via-slate-50/70 before:to-transparent before:z-10" style={{ willChange: 'transform, opacity' }}>
            <div className="relative z-20 max-w-sm flex flex-col space-y-2 sm:space-y-3">
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight">Automated Data Extraction</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Instantly extract structured data from unstructured documents and PDFs with perfect accuracy.</p>
            </div>
            
            <img src="/images/image16.webp" alt="Automated Data Extraction 3D Visual" className="absolute inset-0 w-full h-full object-cover object-center z-0 bento-3d-img" />

            <div className="relative z-20 mt-auto pt-6">
              <a href="/services" className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center cursor-pointer shadow-md">
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: API Triggers */}
          <div className="relative overflow-hidden min-h-[420px] rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200/60 shadow-sm before:absolute before:inset-x-0 before:top-0 before:h-2/3 before:bg-gradient-to-b before:from-slate-50/95 before:via-slate-50/70 before:to-transparent before:z-10" style={{ willChange: 'transform, opacity' }}>
            <div className="relative z-20 max-w-sm flex flex-col space-y-2 sm:space-y-3">
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight">Real-Time API Triggers</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Execute complex tasks instantly based on real-time webhooks and external platform events.</p>
            </div>
            
            <img src="/images/image17.webp" alt="Real-Time API Triggers 3D Visual" className="absolute inset-0 w-full h-full object-cover object-center z-0 bento-3d-img" />

            <div className="relative z-20 mt-auto pt-6">
              <a href="/services" className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center cursor-pointer shadow-md">
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 3: Intent Analysis */}
          <div className="relative overflow-hidden min-h-[420px] rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200/60 shadow-sm before:absolute before:inset-x-0 before:top-0 before:h-2/3 before:bg-gradient-to-b before:from-slate-50/95 before:via-slate-50/70 before:to-transparent before:z-10" style={{ willChange: 'transform, opacity' }}>
            <div className="relative z-20 max-w-sm flex flex-col space-y-2 sm:space-y-3">
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight">Intent & Sentiment Analysis</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Automatically categorize inbound support tickets, emails, and chat messages by sentiment.</p>
            </div>
            
            <img src="/images/image18.webp" alt="Smart Intent & Sentiment Analysis 3D Visual" className="absolute inset-0 w-full h-full object-cover object-center z-0 bento-3d-img" />

            <div className="relative z-20 mt-auto pt-6">
              <a href="/services" className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center cursor-pointer shadow-md">
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 4: Batch Processing */}
          <div className="relative overflow-hidden min-h-[420px] rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200/60 shadow-sm before:absolute before:inset-x-0 before:top-0 before:h-2/3 before:bg-gradient-to-b before:from-slate-50/95 before:via-slate-50/70 before:to-transparent before:z-10" style={{ willChange: 'transform, opacity' }}>
            <div className="relative z-20 max-w-sm flex flex-col space-y-2 sm:space-y-3">
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight">Batch Processing Engine</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Handle massive datasets and bulk operations seamlessly without hitting rate limits.</p>
            </div>
            
            <img src="/images/image19.webp" alt="Batch Processing Engine 3D Visual" className="absolute inset-0 w-full h-full object-cover object-center z-0 bento-3d-img" />

            <div className="relative z-20 mt-auto pt-6">
              <a href="/services" className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center cursor-pointer shadow-md">
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bottom Showcase Card (Hero Card 2) */}
          <div className="md:col-span-2 bg-gradient-to-br lg:bg-gradient-to-r from-[#F8FAFC] via-[#F0F4F9] to-[#E3EFF9] border border-slate-200/60 shadow-sm rounded-3xl flex flex-col lg:grid lg:grid-cols-2 overflow-hidden min-h-[420px] relative" style={{ willChange: 'transform, opacity' }}>
            <div className="w-full flex flex-col justify-between z-20 relative p-6 sm:p-8 lg:p-12 h-full">
              <div className="mb-6 lg:mb-0 max-w-xl">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-3 sm:mb-6 tracking-tight leading-snug">
                  Global Multi-Language Workflows
                </h3>
                <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Deploy agents that understand and communicate natively in over 40+ languages, automatically adapting tone and response style to local markets.
                </p>
              </div>
              <a href="/services" className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-900 text-white rounded-full flex items-center justify-center cursor-pointer flex-shrink-0 mt-6 lg:mt-auto shadow-md">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
            
            <div className="w-full relative h-[220px] sm:h-[280px] lg:h-full min-h-[220px] flex items-center justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_100%)] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_100%)]">
              <img 
                src="/images/image20.webp" 
                alt="Global Multi-Language Workflows 3D Visual" 
                className="w-full h-full object-cover object-center relative z-10 bento-3d-img" 
              />
              <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-emerald-200 rounded-full blur-[80px] opacity-20 pointer-events-none z-0"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}