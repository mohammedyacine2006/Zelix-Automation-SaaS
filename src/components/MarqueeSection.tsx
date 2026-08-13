import React from 'react';
import { Cpu, Zap, GitMerge, Layers, ShieldCheck, Activity, Workflow, Globe } from 'lucide-react';

const row1Items = [
  { text: "AI Workflows", icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-violet-500 shrink-0" /> },
  { text: "Instant Triggering", icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-violet-500 shrink-0" /> },
  { text: "Multi-Agent Auto-Pilot", icon: <GitMerge className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-violet-500 shrink-0" /> },
  { text: "100+ App Integrations", icon: <Layers className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-violet-500 shrink-0" /> },
  { text: "Zero-Code Automation", icon: <Workflow className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-violet-500 shrink-0" /> },
  { text: "Real-Time Telemetry", icon: <Activity className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-violet-500 shrink-0" /> }
];

const row2Items = [
  { text: "Scalable Pipelines", icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-indigo-600 shrink-0" /> },
  { text: "Enterprise Security", icon: <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-indigo-600 shrink-0" /> },
  { text: "Smart Webhooks", icon: <Workflow className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-indigo-600 shrink-0" /> },
  { text: "LLM Orchestration", icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-indigo-600 shrink-0" /> },
  { text: "99.9% Uptime", icon: <Activity className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-indigo-600 shrink-0" /> },
  { text: "10x Faster Deploy", icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-indigo-600 shrink-0" /> }
];

// We need exactly two identical sets to translate -50% for a seamless loop
const Row1Set = () => (
  <div className="flex items-center shrink-0">
    {row1Items.map((item, i) => (
      <div key={i} className="flex items-center px-4 sm:px-8 md:px-14">
        <span className="flex items-center gap-2.5 sm:gap-4 md:gap-5 text-lg sm:text-2xl md:text-[32px] font-semibold tracking-tight whitespace-nowrap">
          {item.icon}
          {item.text}
        </span>
        <span className="text-violet-500 opacity-30 ml-8 sm:ml-16 md:ml-28 text-xl sm:text-3xl md:text-4xl tracking-widest font-semibold flex gap-1.5 sm:gap-2">
          •••
        </span>
      </div>
    ))}
  </div>
);

const Row2Set = () => (
  <div className="flex items-center shrink-0">
    {row2Items.map((item, i) => (
      <div key={i} className="flex items-center px-4 sm:px-8 md:px-14">
        <span className="flex items-center gap-2.5 sm:gap-4 md:gap-5 text-lg sm:text-2xl md:text-[32px] font-semibold tracking-tight whitespace-nowrap">
          {item.icon}
          {item.text}
        </span>
        <span className="text-indigo-600 opacity-30 ml-8 sm:ml-16 md:ml-28 text-xl sm:text-3xl md:text-4xl tracking-widest font-semibold flex gap-1.5 sm:gap-2">
          •••
        </span>
      </div>
    ))}
  </div>
);

export const MarqueeSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col mt-8 sm:mt-12 pt-6 sm:pt-10 pb-20 sm:pb-32 md:pb-40 overflow-hidden bg-[#F4F5F7]">
      <div className="w-[120vw] sm:w-[110vw] -ml-[10vw] sm:-ml-[5vw] -rotate-2 flex flex-col shadow-2xl overflow-hidden">
        {/* Row 1 - Gradient Background, Right to Left */}
        <div className="relative w-full bg-[#0B0F17] flex items-center py-4 sm:py-6 md:py-7 border-b border-slate-800 overflow-hidden">
          {/* Edge Fade Masks */}
          <div className="absolute inset-0 z-10 pointer-events-none" 
               style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}></div>
          
          <div className="flex w-max animate-marquee text-white">
            <Row1Set />
            <Row1Set />
          </div>
        </div>

        {/* Row 2 - Light Background, Left to Right */}
        <div className="relative w-full bg-slate-100 flex items-center py-4 sm:py-6 md:py-7 border-b border-slate-200 overflow-hidden">
          {/* Edge Fade Masks */}
          <div className="absolute inset-0 z-10 pointer-events-none" 
               style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}></div>
          
          <div className="flex w-max animate-marquee-reverse text-slate-900">
            <Row2Set />
            <Row2Set />
          </div>
        </div>
      </div>
    </section>
  );
};