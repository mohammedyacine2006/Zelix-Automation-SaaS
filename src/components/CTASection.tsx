import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full pt-10 sm:pt-16 pb-16 sm:pb-28 md:pb-32 bg-[#F4F5F7] relative overflow-hidden flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
      {/* Background Animated Subtle Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.6, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[450px] md:w-[600px] h-[200px] sm:h-[300px] bg-gradient-to-r from-indigo-200/40 via-purple-200/40 to-slate-200/40 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none z-0"
      />

      <div className="max-w-4xl mx-auto relative z-10 w-full">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-4 sm:mb-6 leading-tight"
        >
          Ready to{" "}
          <span className="bg-gradient-to-r from-[#090D16] via-indigo-900 to-[#090D16] bg-clip-text text-transparent">
            scale and automate
          </span>
          <br className="hidden sm:block" /> your entire workflow?
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-sm sm:text-base md:text-xl text-slate-500 mb-8 sm:mb-10 max-w-xl sm:max-w-2xl mx-auto leading-relaxed"
        >
          Join thousands of teams saving 20+ hours a week with our AI agents. No
          credit card required.
        </motion.p>

        {/* Buttons Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto"
        >
          {/* Primary Button */}
          <motion.a
            href="/auth"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex items-center h-[48px] sm:h-[52px] w-full sm:w-[220px] bg-[#0F172A] rounded-full text-white font-medium text-sm sm:text-[15.5px] shadow-sm hover:bg-slate-800 transition-colors overflow-hidden cursor-pointer"
          >
            <div className="absolute left-1.5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-violet-600 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:left-[calc(100%-2.35rem)] sm:group-hover:left-[calc(100%-2.6rem)]">
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="w-full text-center pl-8 sm:pl-10 pr-2 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-x-4 sm:group-hover:-translate-x-6">
              Get Started Free
            </span>
          </motion.a>

          {/* Secondary Button */}
          <motion.button
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex items-center h-[48px] sm:h-[52px] w-full sm:w-[180px] bg-white border border-slate-200/90 rounded-full text-slate-900 font-medium text-sm sm:text-[15.5px] shadow-sm hover:bg-slate-50 transition-colors overflow-hidden cursor-pointer"
          >
            <div className="absolute left-1.5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-900 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:left-[calc(100%-2.35rem)] sm:group-hover:left-[calc(100%-2.6rem)] group-hover:bg-black">
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="w-full text-center pl-8 sm:pl-10 pr-2 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-x-4 sm:group-hover:-translate-x-6">
              Book Demo
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
