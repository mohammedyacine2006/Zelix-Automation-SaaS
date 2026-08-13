import React, { useRef } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    // 1. Header Animation
    gsap.fromTo(
      [badgeRef.current, headingRef.current, subRef.current, btnRef.current],
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );

    // 2. Individual Card Animations
    const cards = gsap.utils.toArray<HTMLElement>('.feature-card');
    
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 55 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

  }, { scope: sectionRef });

  // Interactive Mouse Move Spotlight Effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section ref={sectionRef} className="w-full bg-[#F4F5F7] pt-10 pb-16 sm:pb-24 relative z-20 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-10 sm:mb-16 gap-4 sm:gap-5">
          <div ref={badgeRef} className="bg-[#F0F4F8] rounded-full px-4 py-1.5 border border-slate-200/50 flex items-center gap-2 shadow-sm">
            <div className="bg-[#0F172A] text-white rounded-full p-1 w-5 h-5 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <span className="text-slate-800 font-medium text-xs sm:text-sm">Features</span>
          </div>
          <h2 ref={headingRef} className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight text-center px-2">
            Real results teams experience
          </h2>
          <p ref={subRef} className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto text-center px-2">
            From faster workflows to improved collaboration, every feature is designed to deliver real, trackable results that teams can rely on every day.
          </p>
          
          {/* Custom Styled & Animated Button */}
          <a 
            href="/features"
            ref={btnRef} 
            className="group relative flex items-center h-[48px] sm:h-[52px] w-[190px] sm:w-[210px] bg-[#0F172A] rounded-full text-white font-medium text-sm sm:text-[15.5px] shadow-sm hover:bg-slate-800 transition-colors overflow-hidden mx-auto mt-2 cursor-pointer"
          >
            <div className="absolute left-2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-violet-600 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-[140px] sm:group-hover:translate-x-[158px]">
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="w-full text-left pl-12 sm:pl-14 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-x-6 sm:group-hover:-translate-x-7">
              View all features
            </span>
          </a>
        </div>

        {/* 4-Card Bento Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full mx-auto mt-8 sm:mt-16">
          
          {/* CARD 1: App integrations */}
          <div 
            onMouseMove={handleMouseMove}
            className="feature-card relative bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/70 shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col justify-between min-h-[440px] sm:min-h-[480px] lg:h-[520px] overflow-hidden group" 
          >
            <div 
              className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
              style={{
                background: `radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(139, 92, 246, 0.08), transparent 40%)`
              }}
            />

            <div className="z-10 relative">
              <h3 className="font-medium text-xl sm:text-2xl lg:text-3xl text-slate-900 tracking-tight">App integrations</h3>
              <p className="text-xs sm:text-[15px] text-slate-500 mt-2 mb-6 sm:mb-8 max-w-md leading-relaxed">
                Connect all your favorite tools in one place and automate workflows.
              </p>
            </div>

            <div className="relative z-10 flex-1 flex flex-col items-center justify-end pb-2 pt-6 sm:pt-10">
              {/* Responsive Container Scaling Wrapper */}
              <div className="w-full max-w-[360px] transform scale-85 min-[400px]:scale-95 sm:scale-100 origin-bottom transition-transform duration-300">
                <div className="relative w-full h-[220px] sm:h-[250px] mx-auto flex flex-col items-center">
                  <svg className="absolute top-10 sm:top-12 left-0 w-full h-[130px] sm:h-[150px]" preserveAspectRatio="none" viewBox="0 0 360 150" fill="none" stroke="currentColor">
                    <path d="M180 0 V40 H45 V150" className="stroke-slate-200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M180 0 V60 H135 V150" className="stroke-slate-200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M180 0 V60 H225 V150" className="stroke-slate-200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M180 0 V40 H315 V150" className="stroke-slate-200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-violet-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-violet-200 z-10 relative group-hover:-translate-y-1 transition-transform">
                    <div className="grid grid-cols-3 gap-0.5 w-5 h-5 sm:w-6 sm:h-6 rotate-45">
                      <div className="bg-white/80 rounded-sm"></div>
                      <div className="bg-white rounded-sm"></div>
                      <div className="bg-white/60 rounded-sm"></div>
                      <div className="bg-white/90 rounded-sm"></div>
                      <div className="bg-white/70 rounded-sm"></div>
                      <div className="bg-white rounded-sm"></div>
                    </div>
                  </div>

                  <div className="flex justify-between w-full mt-auto relative z-10 px-1 sm:px-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center p-2.5 sm:p-3">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/>
                        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/>
                        <path d="M19 0h9.5A9.5 9.5 0 0 1 38 9.5v0A9.5 9.5 0 0 1 28.5 19H19V0z" fill="#FF7262"/>
                        <path d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5z" fill="#F24E1E"/>
                        <path d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5z" fill="#A259FF"/>
                      </svg>
                    </div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center p-2.5 sm:p-3">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center p-2.5 sm:p-3">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.636 0L0 12.103h8.847L7.364 24 20 11.897h-8.847L12.636 0z" fill="#FF4A00"/>
                      </svg>
                    </div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center p-2.5 sm:p-3">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
                        <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
                        <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D"/>
                        <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.523-2.522v-2.522h2.523zM15.165 17.688a2.527 2.527 0 0 1-2.523-2.523 2.526 2.526 0 0 1 2.523-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: Smart conditions */}
          <div 
            onMouseMove={handleMouseMove}
            className="feature-card relative bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/70 shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col justify-between min-h-[440px] sm:min-h-[480px] lg:h-[520px] overflow-hidden group" 
          >
            <div 
              className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
              style={{
                background: `radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(139, 92, 246, 0.08), transparent 40%)`
              }}
            />

            <div className="z-10 relative">
              <h3 className="font-medium text-xl sm:text-2xl lg:text-3xl text-slate-900 tracking-tight">Smart conditions</h3>
              <p className="text-xs sm:text-[15px] text-slate-500 mt-2 mb-6 sm:mb-8 max-w-md leading-relaxed">
                Automatically control when and how workflows run.
              </p>
            </div>
            
            <div className="flex-1 mt-2 sm:mt-4 relative w-full pb-4 z-10 flex items-end">
              <div className="w-full h-[220px] sm:h-[260px] relative">
                {/* Horizontal Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[500, 400, 300, 200, 100].map((val) => (
                    <div key={val} className="flex items-center w-full gap-2 sm:gap-4 relative z-0">
                      <span className="text-[10px] sm:text-xs text-slate-400 font-medium w-6 sm:w-8 text-right shrink-0">{val}</span>
                      <div className="h-px bg-slate-100 flex-1"></div>
                    </div>
                  ))}
                </div>
                
                {/* Bars Container */}
                <div className="absolute inset-0 pl-8 sm:pl-[72px] pr-2 sm:pr-8 pt-2 pb-6 flex items-end justify-between z-10">
                  <div className="flex items-end gap-1 sm:gap-2 h-full relative group/bar">
                    <div className="w-2.5 min-[380px]:w-3 sm:w-4 bg-gradient-to-t from-violet-600 to-indigo-400 rounded-t-full h-[65%] shadow-sm transition-all duration-300 group-hover/bar:-translate-y-1"></div>
                    <div className="w-2.5 min-[380px]:w-3 sm:w-4 bg-violet-200 rounded-t-full h-[40%] transition-all duration-300 group-hover/bar:-translate-y-1"></div>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] sm:text-[10px] text-slate-400 font-medium truncate max-w-[40px] text-center">Jul</span>
                  </div>
                  
                  <div className="flex items-end gap-1 sm:gap-2 h-full relative group/bar">
                    <div className="w-2.5 min-[380px]:w-3 sm:w-4 bg-gradient-to-t from-violet-600 to-indigo-400 rounded-t-full h-[80%] shadow-sm transition-all duration-300 group-hover/bar:-translate-y-1"></div>
                    <div className="w-2.5 min-[380px]:w-3 sm:w-4 bg-violet-200 rounded-t-full h-[55%] transition-all duration-300 group-hover/bar:-translate-y-1"></div>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] sm:text-[10px] text-slate-400 font-medium truncate max-w-[40px] text-center">Aug</span>
                  </div>
                  
                  <div className="flex items-end gap-1 sm:gap-2 h-full relative group/bar">
                    <div className="w-2.5 min-[380px]:w-3 sm:w-4 bg-gradient-to-t from-violet-600 to-indigo-400 rounded-t-full h-[50%] shadow-sm transition-all duration-300 group-hover/bar:-translate-y-1"></div>
                    <div className="w-2.5 min-[380px]:w-3 sm:w-4 bg-violet-200 rounded-t-full h-[35%] transition-all duration-300 group-hover/bar:-translate-y-1"></div>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] sm:text-[10px] text-slate-400 font-medium truncate max-w-[40px] text-center">Sep</span>
                  </div>
                  
                  <div className="flex items-end gap-1 sm:gap-2 h-full relative group/bar">
                    <div className="w-2.5 min-[380px]:w-3 sm:w-4 bg-gradient-to-t from-violet-600 to-indigo-400 rounded-t-full h-[90%] shadow-sm transition-all duration-300 group-hover/bar:-translate-y-1"></div>
                    <div className="w-2.5 min-[380px]:w-3 sm:w-4 bg-violet-200 rounded-t-full h-[65%] transition-all duration-300 group-hover/bar:-translate-y-1"></div>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] sm:text-[10px] text-slate-400 font-medium truncate max-w-[40px] text-center">Oct</span>
                  </div>
                  
                  <div className="flex items-end gap-1 sm:gap-2 h-full relative group/bar">
                    <div className="w-2.5 min-[380px]:w-3 sm:w-4 bg-gradient-to-t from-violet-600 to-indigo-400 rounded-t-full h-[75%] shadow-sm transition-all duration-300 group-hover/bar:-translate-y-1"></div>
                    <div className="w-2.5 min-[380px]:w-3 sm:w-4 bg-violet-200 rounded-t-full h-[45%] transition-all duration-300 group-hover/bar:-translate-y-1"></div>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] sm:text-[10px] text-slate-400 font-medium truncate max-w-[40px] text-center">Nov</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3: Real-time triggers */}
          <div 
            onMouseMove={handleMouseMove}
            className="feature-card relative bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/70 shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col min-h-[440px] sm:min-h-[480px] lg:h-[520px] overflow-hidden group" 
          >
            <div 
              className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
              style={{
                background: `radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(139, 92, 246, 0.08), transparent 40%)`
              }}
            />

            <div className="z-10 relative">
              <h3 className="font-medium text-xl sm:text-2xl lg:text-3xl text-slate-900 tracking-tight">Real-time triggers</h3>
              <p className="text-xs sm:text-[15px] text-slate-500 mt-2 mb-6 sm:mb-8 max-w-md leading-relaxed">
                Real-time triggers enable your workflows to respond instantly.
              </p>
            </div>
            
            <div className="flex-1 w-full flex flex-col mt-2 sm:mt-4 z-10 relative">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm font-semibold text-slate-800">Visitors Analytics</span>
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-slate-200 text-[11px] sm:text-xs text-slate-600 font-medium cursor-pointer hover:bg-slate-50 transition-colors">
                  Monthly <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
              </div>
              
              {/* Responsive Flex Direction for Analytics */}
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-6 w-full mx-auto my-auto flex-1">
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 shrink-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#F1F5F9" strokeWidth="12" />
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="40" 
                      fill="none" 
                      stroke="#8B5CF6" 
                      strokeWidth="12"
                      strokeDasharray="251.2"
                      strokeDashoffset="87.92" 
                      strokeLinecap="round"
                      className="drop-shadow-[0_4px_6px_rgba(139,92,246,0.3)]"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">2548</span>
                    <span className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5 sm:mt-1">Visitors</span>
                  </div>
                  <div className="absolute bottom-2 left-2 sm:left-4 bg-violet-600 text-white text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded shadow-sm z-10">
                    65%
                  </div>
                </div>

                {/* Legend Grid for Mobile */}
                <div className="grid grid-cols-2 sm:flex sm:flex-col gap-3 sm:gap-4 w-full sm:w-auto">
                  <div className="flex items-center justify-between gap-3 text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-2 h-2 rounded-full bg-violet-600 shrink-0"></div>
                      <span className="text-slate-600 font-medium truncate">Desktop</span>
                    </div>
                    <span className="font-semibold text-slate-900">65%</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-2 h-2 rounded-full bg-violet-300 shrink-0"></div>
                      <span className="text-slate-600 font-medium truncate">Tablet</span>
                    </div>
                    <span className="font-semibold text-slate-900">34%</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-2 h-2 rounded-full bg-violet-200 shrink-0"></div>
                      <span className="text-slate-600 font-medium truncate">Mobile</span>
                    </div>
                    <span className="font-semibold text-slate-900">45%</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-2 h-2 rounded-full bg-slate-200 shrink-0"></div>
                      <span className="text-slate-600 font-medium truncate">Unknown</span>
                    </div>
                    <span className="font-semibold text-slate-900">12%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 4: Multi-step automation */}
          <div 
            onMouseMove={handleMouseMove}
            className="feature-card relative bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/70 shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col min-h-[440px] sm:min-h-[480px] lg:h-[520px] overflow-hidden group" 
          >
            <div 
              className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
              style={{
                background: `radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(139, 92, 246, 0.08), transparent 40%)`
              }}
            />

            <div className="z-10 relative">
              <h3 className="font-medium text-xl sm:text-2xl lg:text-3xl text-slate-900 tracking-tight">Multi-step automation</h3>
              <p className="text-xs sm:text-[15px] text-slate-500 mt-2 mb-6 sm:mb-8 max-w-md leading-relaxed">
                Lets you chain multiple actions into a single seamless workflow.
              </p>
            </div>
            
            <div className="relative z-10 flex-1 w-full bg-slate-50/50 rounded-2xl border border-slate-100 overflow-hidden min-h-[220px]">
              {/* Responsive Container Scaling for Flow Cards */}
              <div className="w-full h-full relative transform scale-90 sm:scale-100 origin-center transition-transform">
                <div className="absolute top-4 sm:top-8 left-3 sm:left-8 bg-white p-3.5 sm:p-5 rounded-2xl shadow-md border border-slate-100 w-[190px] sm:w-[230px] z-10 group-hover:-translate-y-1 transition-transform">
                  <div className="flex items-center justify-between mb-2 sm:mb-4">
                    <span className="text-xs sm:text-sm font-medium text-slate-600">Credit limit</span>
                    <span className="text-sm sm:text-base font-bold text-slate-900">$ 80,224</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex-1 h-1.5 sm:h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="w-[48%] h-full bg-[#B9FF66] rounded-full"></div>
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-slate-800">48%</span>
                  </div>
                </div>

                <div className="absolute top-16 sm:top-20 right-3 sm:right-8 z-20 group-hover:translate-x-1 transition-transform">
                  <div className="bg-violet-600 text-white font-medium text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-md flex items-center">
                    Zero fees
                  </div>
                </div>

                <div className="absolute bottom-12 sm:bottom-16 left-4 sm:left-12 z-20 group-hover:-translate-x-1 transition-transform">
                  <div className="bg-[#FDE047] text-slate-950 font-medium text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-md flex items-center">
                    Instant transfers
                  </div>
                </div>

                <div className="absolute bottom-4 sm:bottom-6 right-3 sm:right-8 bg-white p-3.5 sm:p-5 rounded-2xl shadow-md border border-slate-100 w-[130px] sm:w-[160px] z-10 group-hover:translate-y-1 transition-transform">
                  <div className="text-[10px] sm:text-xs font-medium text-slate-500 mb-1">Investment target</div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">76%</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}