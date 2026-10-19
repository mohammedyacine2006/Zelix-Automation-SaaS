import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import { MegaMenu } from './MegaMenu';
import { InnerPagesMenu } from './InnerPagesMenu';
import { PlatformMenu } from './PlatformMenu';
import { PlansSupportMenu } from './PlansSupportMenu';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileAccordion, setActiveMobileAccordion] = useState<string | null>(null);

  useEffect(() => {
    gsap.fromTo(
      '.main-nav',
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.1 }
    );
  }, []);

  const toggleAccordion = (name: string) => {
    setActiveMobileAccordion(prev => (prev === name ? null : name));
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-3 sm:pt-4 will-change-transform transform-gpu">
      <nav className="main-nav max-w-7xl mx-auto px-3 sm:px-4 py-2.5 sm:py-3.5 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-sm flex items-center justify-between relative">
        
        {/* Left: Logo */}
        <div className="flex items-center pl-1 sm:pl-3">
          <a href="/" className="font-black text-3xl sm:text-4xl tracking-tighter leading-none">
            <span className="text-slate-900">Zel</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-violet-500">ix</span>
          </a>
        </div>

        {/* Center: Desktop Links (lg screens and up) */}
        <div className="hidden lg:flex items-center gap-8 h-full">
          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors py-2 cursor-pointer">
              About
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <MegaMenu />
          </div>

          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors py-2 cursor-pointer">
              Pages
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <InnerPagesMenu />
          </div>

          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors py-2 cursor-pointer">
              Solutions
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <PlatformMenu />
          </div>

          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors py-2 cursor-pointer">
              Resources
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <PlansSupportMenu />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* CTA Button */}
          <a 
            href="/auth"
            className="flex items-center gap-2 sm:gap-3 pl-1 sm:pl-1.5 pr-3 sm:pr-4 py-1.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-all duration-500 group shadow-md overflow-hidden select-none cursor-pointer"
          >
            <div className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-violet-600 flex items-center justify-center shrink-0 transition-transform duration-500 ease-in-out group-hover:translate-x-[84px] sm:group-hover:translate-x-[96px] group-hover:bg-violet-700">
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </div>
            <span className="text-xs sm:text-sm font-semibold whitespace-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-x-[28px] sm:group-hover:-translate-x-[34px]">
              Get started
            </span>
          </a>

          {/* Mobile / Tablet Menu Button Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-slate-100/80 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="lg:hidden mt-2 max-w-7xl mx-auto bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-5 shadow-2xl overflow-hidden text-slate-900"
          >
            <div 
              className="flex flex-col gap-3"
              onClick={(e) => {
                if ((e.target as HTMLElement).closest('a')) {
                  setMobileMenuOpen(false);
                }
              }}
            >
              
              {/* About Section */}
              <div className="border-b border-slate-100 pb-2">
                <button
                  onClick={() => toggleAccordion('about')}
                  className="w-full flex items-center justify-between py-2 text-base font-semibold text-slate-800"
                >
                  <span>About</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMobileAccordion === 'about' ? 'rotate-180' : ''}`} />
                </button>
                {activeMobileAccordion === 'about' && (
                  <div className="pt-2 pb-3 px-2">
                    <MegaMenu />
                  </div>
                )}
              </div>

              {/* Pages Section */}
              <div className="border-b border-slate-100 pb-2">
                <button
                  onClick={() => toggleAccordion('pages')}
                  className="w-full flex items-center justify-between py-2 text-base font-semibold text-slate-800"
                >
                  <span>Pages</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMobileAccordion === 'pages' ? 'rotate-180' : ''}`} />
                </button>
                {activeMobileAccordion === 'pages' && (
                  <div className="pt-2 pb-3 px-2">
                    <InnerPagesMenu />
                  </div>
                )}
              </div>

              {/* Solutions Section */}
              <div className="border-b border-slate-100 pb-2">
                <button
                  onClick={() => toggleAccordion('solutions')}
                  className="w-full flex items-center justify-between py-2 text-base font-semibold text-slate-800"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMobileAccordion === 'solutions' ? 'rotate-180' : ''}`} />
                </button>
                {activeMobileAccordion === 'solutions' && (
                  <div className="pt-2 pb-3 px-2">
                    <PlatformMenu />
                  </div>
                )}
              </div>

              {/* Resources Section */}
              <div className="border-b border-slate-100 pb-2">
                <button
                  onClick={() => toggleAccordion('resources')}
                  className="w-full flex items-center justify-between py-2 text-base font-semibold text-slate-800"
                >
                  <span>Resources</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMobileAccordion === 'resources' ? 'rotate-180' : ''}`} />
                </button>
                {activeMobileAccordion === 'resources' && (
                  <div className="pt-2 pb-3 px-2">
                    <PlansSupportMenu />
                  </div>
                )}
              </div>

              {/* Secondary CTA */}
              <div className="pt-2">
                <a
                  href="/#pricing"
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-3 rounded-2xl bg-slate-100 text-slate-800 text-sm font-semibold hover:bg-slate-200 transition-colors block text-center cursor-pointer"
                >
                  Book a Demo
                </a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};