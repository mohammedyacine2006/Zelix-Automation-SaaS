import React, { useEffect, useState, useLayoutEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ProcessSection } from './components/ProcessSection';
import { MarqueeSection } from './components/MarqueeSection';
import CoreCapabilities from './components/CoreCapabilities';
import { IntegrationsSection } from './components/IntegrationsSection';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import { Footer } from './components/Footer';

import { TeamPage } from './pages/TeamPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { AuthPage } from './pages/AuthPage';

// Register GSAP ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ScrollToTop = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
};

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleBookDemo = () => {
    setIsTransitioning(true);
    
    // Midpoint of transition (curtain is fully covering screen)
    setTimeout(() => {
      document.getElementById('pricing')?.scrollIntoView({ behavior: 'auto' });
    }, 400);

    // End of transition (curtain slides up revealing new section)
    setTimeout(() => {
      setIsTransitioning(false);
    }, 750);
  };

  // Lenis Smooth Scroll Initialization
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Baseline GSAP ScrollTrigger synchronization with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    // Sync Lenis using ONLY the GSAP Ticker pattern to avoid frame collisions
    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    
    // Disable core GSAP lag smoothing to prevent stutter with Lenis
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
    };
  }, []);

  // Client-side routing logic
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target && target.href && target.href.startsWith(window.location.origin)) {
        const url = new URL(target.href);
        if (target.getAttribute('target') === '_blank') return;
        
        if (url.pathname === window.location.pathname && url.hash) return;
        
        if (url.pathname !== window.location.pathname) {
          e.preventDefault();
          window.history.pushState(null, '', url.pathname + url.search + url.hash);
          setCurrentPath(url.pathname);
        }
      }
    };
    
    document.addEventListener('click', handleLinkClick);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  const renderContent = () => {
    if (currentPath === '/auth') {
      return <AuthPage />;
    }

    return (
      <div className="min-h-screen bg-[#F4F5F7] text-slate-900 font-sans transition-colors duration-300">
        
        {/* Sticky Glassmorphism Header Navigation */}
        <Navbar />

        {/* Main Content Layout Sections */}
        <main className="min-h-screen flex-1 flex flex-col">
          {currentPath === '/team' ? (
            <TeamPage />
          ) : currentPath === '/blog' ? (
            <BlogPage />
          ) : currentPath === '/contact' ? (
            <ContactPage />
          ) : currentPath === '/services' ? (
            <ServicesPage />
          ) : currentPath === '/about' ? (
            <AboutPage />
          ) : currentPath === '/features' ? (
            <FeaturesPage />
          ) : (
            <>
              {/* Hero Section with Live AI Playground */}
              <Hero onBookDemo={handleBookDemo} />
              <AboutSection />
              <FeaturesSection />
              <CoreCapabilities />
              <ProcessSection />
              <MarqueeSection />
              <IntegrationsSection />
              <Pricing />
              <Testimonials />
              <FAQSection />
              <CTASection />
            </>
          )}
        </main>
        
        <Footer />
      </div>
    );
  };

  return (
    <ThemeProvider>
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] pointer-events-none bg-[#F4F5F7] will-change-transform transform-gpu"
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div key={currentPath} className="flex-1 flex flex-col w-full min-h-screen">
          <ScrollToTop />
          {renderContent()}
          
          {/* Exiting Curtain: Starts below, slides up to cover */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "100%", transitionEnd: { display: "none" } }}
            exit={{ y: "0%", display: "block" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] pointer-events-none bg-[#F4F5F7] will-change-transform transform-gpu"
          />
          
          {/* Entering Curtain: Starts covering, slides up to reveal */}
          <motion.div
            initial={{ y: "0%" }}
            animate={{ y: "-100%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] pointer-events-none bg-[#F4F5F7] will-change-transform transform-gpu"
          />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}
