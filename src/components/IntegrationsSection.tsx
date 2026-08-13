import React, { useRef } from 'react';
import { ChevronRight, Database, Workflow, Cloud, Zap, Layers, Cpu, Server, Share2, Command, Box } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const topNodes = [
  { icon: <Database className="w-5 h-5 sm:w-7 sm:h-7 text-white" />, color: "bg-green-500 shadow-green-500/40" },
  { icon: <Workflow className="w-5 h-5 sm:w-7 sm:h-7 text-white" />, color: "bg-blue-600 shadow-blue-600/40" },
  { icon: <Cloud className="w-5 h-5 sm:w-7 sm:h-7 text-white" />, color: "bg-orange-500 shadow-orange-500/40" },
  { icon: <Zap className="w-5 h-5 sm:w-7 sm:h-7 text-white" />, color: "bg-purple-600 shadow-purple-600/40" },
  { icon: <Layers className="w-5 h-5 sm:w-7 sm:h-7 text-white" />, color: "bg-cyan-500 shadow-cyan-500/40" },
];

const bottomNodes = [
  { icon: <Cpu className="w-5 h-5 sm:w-7 sm:h-7 text-white" />, color: "bg-fuchsia-500 shadow-fuchsia-500/40" },
  { icon: <Server className="w-5 h-5 sm:w-7 sm:h-7 text-white" />, color: "bg-lime-500 shadow-lime-500/40" },
  { icon: <Share2 className="w-5 h-5 sm:w-7 sm:h-7 text-white" />, color: "bg-indigo-500 shadow-indigo-500/40" },
  { icon: <Command className="w-5 h-5 sm:w-7 sm:h-7 text-white" />, color: "bg-teal-500 shadow-teal-500/40" },
  { icon: <Box className="w-5 h-5 sm:w-7 sm:h-7 text-white" />, color: "bg-blue-500 shadow-blue-500/40" },
];

export const IntegrationsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    });

    // 1. Header elements Fade-Up
    tl.fromTo(
      '.header-fade-item',
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

    // 2. Entire Circuit/Icons Container Fade-Up
    tl.fromTo(
      trackRef.current,
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
    <section ref={sectionRef} className="w-full pt-10 sm:pt-16 pb-16 sm:pb-28 bg-[#F4F5F7] relative overflow-hidden flex flex-col items-center">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center px-4 mb-4 sm:mb-8 max-w-2xl mx-auto z-10">
        
        <div className="header-fade-item bg-[#F0F4F8] rounded-full px-3.5 py-1 sm:px-4 sm:py-1.5 border border-slate-200/50 flex items-center gap-2 shadow-sm mb-4 sm:mb-6">
          <div className="bg-[#0F172A] text-white rounded-full p-1 w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
          <span className="text-slate-800 font-medium text-xs sm:text-sm">Integration & Tools</span>
        </div>

        <h2 className="header-fade-item text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-3 sm:mb-6">
          Integrate Top Tools
        </h2>

        <p className="header-fade-item text-slate-500 text-xs sm:text-base max-w-xl mb-6 sm:mb-8 leading-relaxed">
          Seamlessly connect your workflow with the industry's leading tools. Whether it's CRM platforms, communication apps, or analytics software, our system is designed to scale.
        </p>

        <a href="/blog" className="header-fade-item group relative flex items-center h-[48px] sm:h-[52px] w-[220px] sm:w-[240px] bg-[#0F172A] rounded-full text-white font-medium text-sm sm:text-[15.5px] shadow-sm hover:bg-slate-800 transition-colors overflow-hidden mx-auto cursor-pointer">
          <div className="absolute left-1.5 sm:left-2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-violet-600 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:left-[calc(100%-2.35rem)] sm:group-hover:left-[calc(100%-2.6rem)]">
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <span className="w-full text-center pl-8 sm:pl-10 pr-2 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-x-6 sm:group-hover:-translate-x-8">
            Explore All Integration
          </span>
        </a>

      </div>

      {/* Circuit Board Layout */}
      <div ref={trackRef} className="w-full px-2 sm:px-6 flex justify-center mt-8 sm:mt-12 md:mt-16">
        <div className="relative w-full max-w-5xl h-36 sm:h-48 md:h-56 z-0">
          
          {/* Outer Track */}
          <div className="absolute top-[28px] bottom-[28px] sm:top-[40px] sm:bottom-[40px] md:top-[48px] md:bottom-[48px] left-[2%] right-[2%] sm:left-[4%] sm:right-[4%] border-[1.5px] sm:border-[2px] border-slate-200 rounded-[1.5rem] sm:rounded-[2.5rem] md:rounded-[3rem] shadow-[inset_0_0_20px_rgba(0,0,0,0.02)]">
            {/* Horizontal animated particles */}
            <div className="absolute top-[-2px] left-6 right-6 sm:left-10 sm:right-10 h-[2px] overflow-hidden rounded-full">
              <div className="w-20 sm:w-32 h-full bg-gradient-to-r from-transparent via-[#0F172A] to-transparent opacity-40 animate-[slide-right_4s_linear_infinite]"></div>
            </div>
            <div className="absolute bottom-[-2px] left-6 right-6 sm:left-10 sm:right-10 h-[2px] overflow-hidden rounded-full">
              <div className="w-20 sm:w-32 h-full bg-gradient-to-r from-transparent via-[#0F172A] to-transparent opacity-40 animate-[slide-left_5s_linear_infinite]"></div>
            </div>
          </div>

          {/* Vertical Lines */}
          {[10, 30, 50, 70, 90].map((pos, i) => (
            <div key={i} className="absolute top-[28px] bottom-[28px] sm:top-[40px] sm:bottom-[40px] md:top-[48px] md:bottom-[48px] w-[1.5px] sm:w-[2px] bg-slate-200 -translate-x-1/2" style={{ left: `${pos}%` }}>
              {/* Vertical animated particle */}
              <div className="w-full h-full overflow-hidden absolute inset-0">
                 <div className="w-full h-12 sm:h-20 bg-gradient-to-b from-transparent via-[#0F172A] to-transparent opacity-40 absolute top-0" style={{ animation: `slide-down ${3 + i * 0.5}s linear infinite` }}></div>
              </div>
            </div>
          ))}

          {/* Top Nodes */}
          {topNodes.map((node, i) => (
            <div 
              key={`top-${i}`} 
              className={`absolute top-[28px] sm:top-[40px] md:top-[48px] -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-md sm:shadow-xl hover:scale-110 transition-transform duration-300 z-10 cursor-pointer ${node.color}`}
              style={{ left: `${10 + i * 20}%` }}
            >
              {node.icon}
            </div>
          ))}

          {/* Bottom Nodes */}
          {bottomNodes.map((node, i) => (
            <div 
              key={`bottom-${i}`} 
              className={`absolute bottom-[28px] sm:bottom-[40px] md:bottom-[48px] -translate-x-1/2 translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-md sm:shadow-xl hover:scale-110 transition-transform duration-300 z-10 cursor-pointer ${node.color}`}
              style={{ left: `${10 + i * 20}%` }}
            >
              {node.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};