import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ChevronRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

// Official Google Icon SVG
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleAuthMode = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen bg-[#F4F5F7] flex flex-col font-sans overflow-x-hidden">
      <Navbar />

      <div className="flex-1 flex flex-col items-center p-3 sm:p-6 lg:p-8 pt-24 sm:pt-28 lg:pt-32 pb-12 w-full mx-auto max-w-[1100px]">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-8 sm:mb-12 gap-3 sm:gap-5 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-100/80 border border-slate-200/60 px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm"
          >
            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#0F172A] rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-slate-900 font-medium text-xs sm:text-base">{isLogin ? 'Sign In' : 'Sign Up'}</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight text-center px-2"
          >
            {isLogin ? 'Welcome back' : 'Create an account'}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 text-xs sm:text-base max-w-xl mx-auto text-center px-2"
          >
            {isLogin ? 'Enter your details to sign in.' : 'Start automating your workflows in minutes.'}
          </motion.p>
        </div>

        {/* Main Split Container with Background Image (No Overlay) */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="w-full h-auto lg:min-h-[640px] bg-[#0B0F19] bg-[url('/images/sign.webp')] bg-cover bg-center bg-no-repeat rounded-[1.8rem] sm:rounded-[2.5rem] shadow-[0_8px_40px_rgb(0,0,0,0.12)] border border-slate-800/80 overflow-hidden flex flex-col lg:flex-row relative z-10"
        >
          {/* Left Side: Floating Auth Form Card */}
          <div className="w-full lg:w-[50%] p-3 sm:p-6 xl:p-12 flex flex-col justify-center relative z-10 my-auto">
            <div className="max-w-[420px] w-full mx-auto bg-[#F4F5F7] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl border border-white/20">

              {/* Form Elements */}
              <form className="flex flex-col gap-3.5 sm:gap-4" onSubmit={(e) => e.preventDefault()}>
                
                <AnimatePresence mode="popLayout">
                  {!isLogin && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex flex-col gap-1 sm:gap-1.5 overflow-hidden"
                    >
                      <label className="text-xs sm:text-sm font-medium text-slate-700">Username</label>
                      <input 
                        type="text" 
                        placeholder="johndoe"
                        className="bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all placeholder:text-slate-400"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex flex-col gap-1 sm:gap-1.5">
                  <label className="text-xs sm:text-sm font-medium text-slate-700">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div className="flex flex-col gap-1 sm:gap-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs sm:text-sm font-medium text-slate-700">Password</label>
                    {isLogin && (
                      <a href="#" className="text-[11px] sm:text-xs font-semibold text-violet-600 hover:text-violet-700 transition-colors">Forgot password?</a>
                    )}
                  </div>
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all placeholder:text-slate-400"
                  />
                </div>

                <AnimatePresence mode="popLayout">
                  {!isLogin && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex flex-col gap-1 sm:gap-1.5 overflow-hidden"
                    >
                      <label className="text-xs sm:text-sm font-medium text-slate-700">Confirm Password</label>
                      <input 
                        type="password" 
                        placeholder="••••••••"
                        className="bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all placeholder:text-slate-400"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Primary Action Button - Animated & Compact */}
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex items-center justify-center h-[46px] sm:h-[52px] w-full max-w-[220px] bg-[#0F172A] rounded-full text-white font-medium text-xs sm:text-[15.5px] shadow-sm hover:bg-slate-800 transition-colors overflow-hidden mx-auto mt-2 sm:mt-4 cursor-pointer"
                >
                  <div className="absolute left-2 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-violet-600 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:left-[calc(100%-36px)] sm:group-hover:left-[calc(100%-44px)]">
                    <ChevronRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-x-3 sm:group-hover:-translate-x-4">
                    {isLogin ? 'Sign in' : 'Sign up'}
                  </span>
                </motion.button>
              </form>

              {/* Divider */}
              <div className="relative flex items-center my-4 sm:my-6">
                <div className="flex-grow border-t border-slate-200"></div>
                <span className="flex-shrink-0 mx-3 sm:mx-4 text-slate-400 text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold">Or continue with</span>
                <div className="flex-grow border-t border-slate-200"></div>
              </div>

              {/* Social Logins */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 border border-slate-200 rounded-xl py-2 sm:py-2.5 hover:bg-slate-50 transition-colors shadow-sm cursor-pointer">
                  <GoogleIcon />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">Google</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 border border-slate-200 rounded-xl py-2 sm:py-2.5 hover:bg-slate-50 transition-colors shadow-sm cursor-pointer">
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 text-slate-800" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">GitHub</span>
                </button>
              </div>

              {/* Bottom Toggle Link */}
              <p className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-slate-500 font-medium">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button onClick={toggleAuthMode} className="font-semibold text-[#7c3aed] hover:text-violet-700 transition-colors cursor-pointer">
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>
          </div>

          {/* Right Side: Clean Modern Typography Showcase */}
          <div className="w-full lg:w-[50%] hidden lg:flex flex-col relative overflow-hidden p-12 xl:p-16 text-white justify-center z-10">
            <div className="relative z-10 flex flex-col h-full justify-center max-w-md mx-auto">
              
              {/* Social Proof Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-slate-100 shadow-xl self-start mb-8"
              >
                <div className="flex gap-0.5 text-[#FACC15]">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                Trusted by 2,500+ teams worldwide
              </motion.div>

              {/* Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl xl:text-5xl font-bold tracking-tight leading-[1.15] mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-300"
              >
                Build & Scale AI<br/>Workflows 10x Faster
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-slate-300 text-[17px] leading-relaxed"
              >
                Join the enterprise platform designed for autonomous agents, secure integrations, and endless scalability. Unify your team's potential today.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};