import React, { useEffect, useRef } from 'react';
import { Clock, ShieldCheck, Zap, Target, TrendingUp, ArrowUpRight, ArrowRight, Check, ChevronRight } from 'lucide-react';
import CTASection from '../components/CTASection';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

const SlotDigit: React.FC<{ value: string, delay: number }> = ({ value, delay }) => {
  if (!/^\d$/.test(value)) {
    return <span className="inline-block">{value}</span>;
  }
  
  const numValue = parseInt(value);
  
  return (
    <div className="inline-flex relative overflow-hidden align-bottom h-[1em] items-center">
      <span className="invisible block leading-none h-[1em]">{value}</span>
      <motion.div
        initial={{ y: "0%" }}
        whileInView={{ y: `-${numValue * 10}%` }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 33, damping: 8, delay }}
        className="absolute top-0 left-0 right-0 flex flex-col"
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <span key={num} className="flex items-center justify-center text-center leading-none h-[1em]">{num}</span>
        ))}
      </motion.div>
    </div>
  );
};

const SlotCounter = ({ value, delay = 0 }: { value: string, delay?: number }) => {
  return (
    <div className="inline-flex">
      {value.split('').map((char, index) => (
        <SlotDigit key={index} value={char} delay={delay + index * 0.15} />
      ))}
    </div>
  );
};

export const ServicesPage: React.FC = () => {
  return (
    <div className="pt-32 pb-0 w-full min-h-screen flex flex-col items-center bg-[#F4F5F7]">
      {/* Hero Header Section */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full pt-8 pb-12 flex flex-col items-center justify-center text-center px-4"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#f0f4f9] border border-slate-200/60 shadow-sm mb-6 transition-transform hover:scale-105 cursor-default">
          <span className="w-5 h-5 rounded-full bg-[#0d1322] flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-white"></span>
          </span>
          <span className="text-sm font-medium text-[#111827] tracking-tight">Services</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0f172a] tracking-tight leading-tight mb-6 max-w-4xl">
          Our Services
        </h1>

        <p className="text-lg md:text-xl text-[#64748b] max-w-2xl leading-relaxed">
          Comprehensive AI automation services tailored for modern enterprises.
        </p>
      </motion.section>

      {/* Main Content Area */}
      <div className="flex-1 w-full pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden min-h-[300px] shadow-sm border border-slate-100 flex flex-col justify-end p-6 w-full h-full"
          >
            <img src="/images/image36.webp" alt="Time Savings Automation" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="relative z-10 flex flex-col mt-auto">
              <div className="bg-white/20 backdrop-blur-md p-2.5 rounded-xl border border-white/30 text-white w-fit mb-3">
                <Clock className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-medium text-white relative z-10 leading-tight">Save 10–20 Hours Weekly</h3>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="group relative overflow-hidden rounded-3xl cursor-pointer bg-white border border-slate-100 min-h-[300px] w-full h-full"
          >
            {/* Layer A: Default White State */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between items-start bg-white z-10 transition-transform duration-[850ms] ease-in-out group-hover:-translate-y-full">
              <div className="bg-slate-100/80 p-3 rounded-xl text-slate-700">
                <ShieldCheck className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-medium text-[#111827] tracking-tight text-left">Eliminate Manual Workflow Errors</h3>
            </div>
            
            {/* Layer B: Dark Hover Curtain State */}
            <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center bg-black text-white z-20 transition-transform duration-[850ms] ease-in-out -translate-y-full group-hover:translate-y-0">
              <div className="bg-white/10 border border-white/20 p-3 rounded-xl text-white mb-4">
                <ShieldCheck className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-medium text-white tracking-tight text-center max-w-[85%]">Eliminate Manual Workflow Errors</h3>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden min-h-[300px] shadow-sm border border-slate-100 flex flex-col justify-end p-6 w-full h-full"
          >
            <img src="/images/image37.webp" alt="Team Collaboration and Productivity" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="relative z-10 flex flex-col mt-auto">
              <div className="bg-white/20 backdrop-blur-md p-2.5 rounded-xl border border-white/30 text-white w-fit mb-3">
                <Zap className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-medium text-white relative z-10 leading-tight">Accelerate Team Productivity</h3>
            </div>
          </motion.div>

          {/* Right Tall Feature Card (Image Card 2) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-start-4 lg:col-span-1 lg:row-start-1 lg:row-span-2 rounded-3xl overflow-hidden relative shadow-sm min-h-[628px] flex flex-col justify-end p-6 border border-slate-100 w-full h-full"
          >
            <img src="/images/image35.webp" alt="Zelix Client ROI Experience" className="absolute inset-0 w-full h-full object-cover" />
            {/* Glassmorphism ROI Badge Overlay */}
            <div className="relative z-10 backdrop-blur-md bg-white/25 border border-white/40 p-6 rounded-2xl text-white shadow-xl flex flex-col justify-between gap-4">
              <h4 className="text-2xl font-extrabold text-white tracking-tight">9.2x Average Client ROI</h4>
              <div className="flex items-center justify-between text-xs font-semibold text-white/90 pt-2 border-t border-white/20">
                <span>+224% Efficiency</span>
                <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-md">
                  <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                </div>
                <span>88% Time Saved</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="group relative overflow-hidden rounded-3xl cursor-pointer bg-white border border-slate-100 min-h-[300px] w-full h-full"
          >
            {/* Layer A: Default White State */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between items-start bg-white z-10 transition-transform duration-[850ms] ease-in-out group-hover:-translate-y-full">
              <div className="bg-slate-100/80 p-3 rounded-xl text-slate-700">
                <Target className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-medium text-[#111827] tracking-tight text-left">Focus on High-Impact Strategic Work</h3>
            </div>
            
            {/* Layer B: Dark Hover Curtain State */}
            <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center bg-black text-white z-20 transition-transform duration-[850ms] ease-in-out -translate-y-full group-hover:translate-y-0">
              <div className="bg-white/10 border border-white/20 p-3 rounded-xl text-white mb-4">
                <Target className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-medium text-white tracking-tight text-center max-w-[85%]">Focus on High-Impact Strategic Work</h3>
            </div>
          </motion.div>

          {/* Card 5 (Image Card 1) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="rounded-3xl overflow-hidden min-h-[300px] shadow-sm relative border border-slate-100 w-full h-full"
          >
            <img src="/images/image34.webp" alt="Data Analytics Mesh" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-10" />
          </motion.div>

          {/* Card 6 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="group relative overflow-hidden rounded-3xl cursor-pointer bg-white border border-slate-100 min-h-[300px] w-full h-full"
          >
            {/* Layer A: Default White State */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between items-start bg-white z-10 transition-transform duration-[850ms] ease-in-out group-hover:-translate-y-full">
              <div className="bg-slate-100/80 p-3 rounded-xl text-slate-700">
                <TrendingUp className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-medium text-[#111827] tracking-tight text-left">Scale Operations Without Bloating Headcount</h3>
            </div>
            
            {/* Layer B: Dark Hover Curtain State */}
            <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center bg-black text-white z-20 transition-transform duration-[850ms] ease-in-out -translate-y-full group-hover:translate-y-0">
              <div className="bg-white/10 border border-white/20 p-3 rounded-xl text-white mb-4">
                <TrendingUp className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-medium text-white tracking-tight text-center max-w-[85%]">Scale Operations Without Bloating Headcount</h3>
            </div>
          </motion.div>

        </div>

        {/* Feature Showcase Section */}
        <section className="w-full py-16 lg:py-28 bg-[#F4F5F7] text-[#0f172a]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT COLUMN: DASHBOARD COMPOSITE */}
            <div className="lg:col-span-6 w-full flex justify-center lg:justify-start">
              
              <div className="relative w-full max-w-md sm:max-w-xl lg:max-w-none grid grid-cols-1 md:grid-cols-2 lg:block gap-4 sm:gap-6">
                
                {/* Base Card (Balances & Profile) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 w-full md:col-span-1 lg:max-w-md z-10"
                >
                  <p className="text-slate-400 text-sm font-normal">Balances - Dollar</p>
                  <div className="text-3xl sm:text-4xl font-medium text-[#7c3aed] tracking-tight mt-2 mb-6">
                    <SlotCounter value="$ 9,784.79" />
                  </div>
                  
                  <div className="flex items-center gap-4 mt-6 mb-6 border-b border-slate-100 pb-6">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Robert Foster" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <p className="font-medium text-slate-800 text-base">Robert Foster</p>
                      <p className="text-xs text-slate-400 font-normal">UI Designer</p>
                    </div>
                  </div>

                  <div className="flex gap-2 mb-6">
                    {['0%', '5.5%', '10%', '20%'].map((tag, i) => (
                      <span key={i} className={`px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-lg flex-1 text-center ${tag === '10%' ? 'bg-[#7c3aed] text-white shadow-sm' : 'bg-slate-100/80 text-slate-500'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="w-full py-3 bg-[#7c3aed] hover:bg-violet-700 text-white font-medium rounded-2xl transition-all mt-4 sm:mt-6 shadow-md shadow-violet-200">
                    Pay by transfer
                  </button>
                </motion.div>

                {/* Right Container for Overlay Cards in Tablet view */}
                <div className="flex flex-col gap-4 sm:gap-6 md:col-span-1 lg:contents">
                  
                  {/* Floating Overlay Card 1 (Transaction Stats Card) */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative lg:absolute lg:-top-8 lg:left-[260px] xl:left-[280px] z-20 bg-[#0d1322] text-white p-6 rounded-3xl shadow-2xl border border-slate-800/80 w-full sm:w-72"
                  >
                    {/* Top Badge */}
                    <div className="absolute -top-3 right-4 bg-[#facc15] text-slate-950 font-bold text-xs px-3 py-1 rounded-full shadow-md transform rotate-6">
                      20%
                    </div>

                    {/* Header */}
                    <div className="mb-4">
                      <p className="text-xs text-slate-400 font-medium">Transaction statistics</p>
                      <div className="text-xl font-semibold text-white tracking-tight mt-0.5">
                        <SlotCounter value="$ 41,379" delay={0.2} />
                      </div>
                    </div>

                    {/* BAR CHART SECTION */}
                    <div className="flex items-end justify-between h-16 pt-2 pb-1 px-1 gap-1.5">
                      {[
                        { day: 'S', height: '40%' },
                        { day: 'M', height: '65%' },
                        { day: 'T', height: '85%' },
                        { day: 'W', height: '50%' },
                        { day: 'T', height: '95%' },
                        { day: 'F', height: '75%' },
                        { day: 'S', height: '30%' },
                      ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-2 h-full justify-end flex-1">
                          <motion.div 
                            className="w-2.5 rounded-full bg-gradient-to-t from-emerald-400 to-cyan-400 origin-bottom"
                            initial={{ height: "0%", scaleY: 0 }}
                            whileInView={{ height: item.height, scaleY: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.08 + 0.3, ease: "easeOut" }}
                          />
                          <span className="text-[11px] text-slate-400 font-medium">{item.day}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Floating Overlay Card 2 (Target Reached Semi-Circle Card) */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative lg:absolute lg:-bottom-8 lg:left-[220px] xl:left-[240px] z-20 bg-white p-6 pb-7 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 w-full sm:w-64 flex flex-col"
                  >
                    <div className="text-center mb-1">
                      <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Target Reached</p>
                    </div>
                    <div className="relative w-full h-28 flex flex-col items-center justify-end overflow-hidden mb-4">
                       <svg viewBox="0 0 100 50" className="w-40 h-20 absolute bottom-0">
                         <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#f1f5f9" strokeWidth="8" strokeLinecap="round" />
                         <motion.path 
                           d="M 10 50 A 40 40 0 0 1 90 50" 
                           fill="none" 
                           stroke="url(#purpleGradient)" 
                           strokeWidth="8" 
                           strokeLinecap="round" 
                           strokeDasharray="125" 
                           initial={{ strokeDashoffset: 125 }}
                           whileInView={{ strokeDashoffset: 31.25 }}
                           viewport={{ once: true, margin: "-50px" }}
                           transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
                         />
                         <defs>
                           <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                             <stop offset="0%" stopColor="#9333ea" />
                             <stop offset="100%" stopColor="#818cf8" />
                           </linearGradient>
                         </defs>
                       </svg>
                       <div className="absolute bottom-1 flex flex-col items-center">
                         <div className="text-3xl font-bold text-slate-900 leading-none">
                           <SlotCounter value="75%" delay={0.4} />
                         </div>
                       </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="bg-[#fef08a] py-2.5 rounded-xl text-center w-full">
                        <p className="text-sm text-slate-800 font-medium">Daily payment</p>
                      </div>
                      <div className="flex items-center justify-center gap-1.5 mt-0.5">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-[11px] text-slate-500 font-medium">+12% increase from yesterday</span>
                      </div>
                    </div>
                  </motion.div>

                </div>

              </div>
            </div>

            {/* RIGHT COLUMN: CONTENT & FEATURES */}
            <div className="lg:col-span-6 flex flex-col items-start pt-6 lg:pt-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200/60 mb-6 w-fit">
                <div className="w-5 h-5 rounded-full bg-[#111827] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
                <span className="text-sm font-medium text-[#111827]">Data Integrations</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 leading-[1.15] tracking-tight mb-6">
                A clear vision is essential for understanding wealth dynamics.
              </h2>
              
              <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-xl">
                A clear vision is essential for understanding wealth dynamics because it provides direction, purpose, and clarity in navigating financial growth and sustainability.
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-700 font-medium mb-10">
                <div className="flex items-center gap-3">
                  <div className="text-slate-900 flex items-center justify-center">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <span className="text-[15px]">On demand support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-slate-900 flex items-center justify-center">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <span className="text-[15px]">Information Sharing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-slate-900 flex items-center justify-center">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <span className="text-[15px]">Cloud Technology</span>
                </div>
              </div>

              <button className="group relative flex items-center h-[52px] w-[220px] bg-[#0F172A] rounded-full text-white font-medium text-[15.5px] shadow-sm hover:bg-slate-800 transition-colors overflow-hidden cursor-pointer">
                <div className="absolute left-2 w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-[168px]">
                  <ChevronRight className="w-5 h-5 text-white"/>
                </div>
                <span className="w-full text-center pl-10 pr-2 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-x-6">
                  Start your journey
                </span>
              </button>
            </div>
            
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full mt-8"
        >
          <CTASection />
        </motion.div>
      </div>
    </div>
  );
};