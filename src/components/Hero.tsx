import React, { useRef } from 'react';
import {
  ChevronRight,
  Paperclip,
  Sparkles,
  ArrowUp
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export interface HeroProps {
  onBookDemo?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookDemo }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroBadgeRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubRef = useRef<HTMLParagraphElement>(null);
  const heroCtaRef = useRef<HTMLDivElement>(null);
  const heroMockupRef = useRef<HTMLDivElement>(null);
  const aiPromptBarRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // 1. Reveal Header Sequence
    tl.from([heroBadgeRef.current, heroTitleRef.current, heroSubRef.current, heroCtaRef.current], {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.1,
    })
      // 2. Smooth Glassy Fade-Up for Dashboard Mockup
      .from(heroMockupRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.1,
      }, "-=0.6");

    // 3. Floating Prompt Bar ScrollTrigger Animation
    gsap.fromTo(
      aiPromptBarRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroMockupRef.current,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-20 sm:pt-24 pb-16 sm:pb-20 overflow-hidden"
      style={{
        // Primary canvas background
        backgroundColor: '#F4F5F7',
        // Ambient mesh gradient effects
        backgroundImage: `
          radial-gradient(ellipse 60% 50% at 10% 20%, rgba(99, 102, 241, 0.35), transparent 70%),
          radial-gradient(ellipse 55% 45% at 90% 15%, rgba(244, 114, 182, 0.4), transparent 70%),
          radial-gradient(ellipse 40% 40% at 50% 30%, rgba(192, 132, 252, 0.2), transparent 70%)
        `
      }}
    >

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 sm:mt-6">

        {/* Badge */}
        <div className="flex justify-center">
          <div ref={heroBadgeRef} className="hero-badge max-w-full inline-flex items-center gap-2 sm:gap-3 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm mb-6 sm:mb-8">
            <div className="flex -space-x-1.5 sm:-space-x-2 shrink-0">
              <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover" />
              <img src="https://i.pravatar.cc/100?img=2" alt="User" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover" />
              <img src="https://i.pravatar.cc/100?img=3" alt="User" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover" />
            </div>
            <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-slate-900 tracking-tight truncate">
              ⚡ Join 2,500+ high-growth teams shipping 10x faster
            </span>
          </div>
        </div>

        {/* Hero Typography */}
        <div className="overflow-hidden py-1 block w-full">
          <h1 ref={heroTitleRef} className="hero-title text-3xl min-[400px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#090D16] max-w-4xl mx-auto text-center leading-[1.15] sm:leading-[1.1]">
            Automate your workflows <br className="hidden min-[480px]:inline" />
            <span className="bg-gradient-to-r from-[#090D16] via-indigo-900 to-[#090D16] bg-clip-text text-transparent">
              scale on autopilot.
            </span>
          </h1>
        </div>

        <div className="overflow-hidden py-1 block w-full max-w-xl sm:max-w-2xl mx-auto mt-4 sm:mt-6 mb-8 sm:mb-10 px-2">
          <p ref={heroSubRef} className="hero-subtitle text-center text-[#475569] text-xs sm:text-sm md:text-base font-normal leading-relaxed">
            Engineered for modern teams. Build, test, and deploy intelligent multi-agent AI workflows in seconds — no complex code required.
          </p>
        </div>

        {/* Dual CTAs - Fixed Width & Original Animations Restored */}
        <div ref={heroCtaRef} className="hero-ctas flex flex-col sm:flex-row items-center justify-center gap-3 w-full mx-auto px-4 sm:px-0">

          {/* Start Free Trial */}
          <a
            href="/auth"
            className="w-full max-w-[175px] sm:w-auto min-w-[175px] group flex items-center justify-center gap-3 px-5 py-2.5 sm:py-3 rounded-full bg-[#0F172A] text-white hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md overflow-hidden cursor-pointer"
          >
            <div className="shrink-0 relative z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-violet-600 flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:translate-x-[7rem] group-hover:bg-violet-700">
              <ChevronRight className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-xs sm:text-sm transition-transform duration-500 ease-in-out group-hover:-translate-x-8 whitespace-nowrap">Start free trial</span>
          </a>

          {/* Book Demo */}
          <button
            onClick={onBookDemo}
            className="w-full max-w-[150px] sm:w-auto min-w-[160px] group flex items-center justify-center gap-3 px-5 py-2.5 sm:py-3 rounded-full bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-sm overflow-hidden cursor-pointer"
          >
            <div className="shrink-0 relative z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-900 flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:translate-x-[6rem] group-hover:bg-black">
              <ChevronRight className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-xs sm:text-sm transition-transform duration-500 ease-in-out group-hover:-translate-x-8 whitespace-nowrap">Book demo</span>
          </button>

        </div>

        {/* Dashboard Image Display (Responsive Container) */}
        <div className="w-full flex justify-center mt-8 sm:mt-12 md:mt-14 px-1 sm:px-2">
          <div
            ref={heroMockupRef}
            style={{ willChange: 'transform, opacity' }}
            className="dashboard-mockup max-w-[1150px] w-full rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-white/80 bg-white/60 backdrop-blur-md p-1.5 sm:p-2.5 relative z-10"
          >
            <img
              src="/images/hero.webp"
              alt="Zelix Dashboard Interface"
              className="w-full h-auto object-cover rounded-xl sm:rounded-2xl block shadow-sm border border-slate-100"
            />
          </div>
        </div>

      </div>

      {/* Floating AI Prompt Bar */}
      <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 w-[92%] sm:w-11/12 max-w-lg pointer-events-none">
        <div ref={aiPromptBarRef} className="ai-prompt-bar w-full">
          <div className="p-[1px] sm:p-[1.5px] rounded-full bg-gradient-to-r from-violet-500 via-lime-400 to-cyan-500 shadow-xl">
            <div className="bg-white/95 backdrop-blur-md rounded-full px-3 sm:px-4 py-1 sm:py-1.5 flex items-center gap-1.5 sm:gap-2 pointer-events-auto">
              <button className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors shrink-0 text-slate-400 hover:text-slate-600">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-500" />
              </button>
              <button className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors shrink-0 text-slate-400 hover:text-slate-600">
                <Paperclip className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              <input
                type="text"
                placeholder="Describe your product or service..."
                className="flex-1 min-w-0 bg-transparent border-none outline-none text-[11px] sm:text-xs md:text-sm text-slate-800 placeholder:text-slate-400"
              />
              <button className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0F172A] hover:bg-black transition-colors flex items-center justify-center shrink-0 shadow-md">
                <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};