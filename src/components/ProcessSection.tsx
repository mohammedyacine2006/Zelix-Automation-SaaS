import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Slack } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    id: 1,
    title: "Connect Apps",
    description: "Launch automation across your team while keeping speed, reliability, and security under control.",
    features: [
      { title: "Team Collaboration", desc: "Share workflows and permissions with clear ownership." },
      { title: "Enterprise Ready", desc: "Keep every process compliant and secure as you grow." }
    ],
    image: "/images/image6.webp"
  },
  {
    id: 2,
    title: "Build Flows",
    description: "Integrate seamlessly with the tools you already use every day. No complex setup required.",
    features: [
      { title: "One-Click Apps", desc: "Native integrations with Slack, Salesforce, and more." },
      { title: "Custom Webhooks", desc: "Build tailored connections for your internal tools." }
    ],
    image: "/images/image7.webp"
  },
  {
    id: 3,
    title: "Test and Optimize",
    description: "Gain full visibility into your automated processes with our comprehensive dashboard.",
    features: [
      { title: "Live Analytics", desc: "Track execution times and success rates instantly." },
      { title: "Smart Alerts", desc: "Get notified immediately if any workflow requires attention." }
    ],
    image: "/images/image8.webp"
  },
  {
    id: 4,
    title: "Scale with Confidence",
    description: "Use AI-driven insights to find bottlenecks and improve your automation efficiency.",
    features: [
      { title: "Performance Reports", desc: "Weekly summaries of hours saved and tasks automated." },
      { title: "AI Suggestions", desc: "Smart recommendations to streamline your workflows." }
    ],
    image: "/images/image9.webp"
  }
];

const textVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? 30 : -30,
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    y: direction > 0 ? -30 : 30,
    opacity: 0,
  })
};

const ConnectAppsOverlay = () => {
  const apps = [
    { name: "Shopify", color: "#95BF47", path: "M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z" },
    { name: "Snapchat", color: "#FFFC00", path: "M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z", hasStroke: true },
    { name: "Figma", color: "#F24E1E", path: "M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" },
    { name: "Slack", isLucide: true, color: "#4A154B" },
    { name: "Chrome", color: "#4285F4", path: "M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728Z" },
  ];
  return (
    <div className="flex flex-col gap-2">
      <svg className="w-full h-6 sm:h-8" viewBox="0 0 400 40" preserveAspectRatio="none">
        <motion.path 
          d="M0 20 C 50 -10, 150 50, 250 20 C 320 0, 380 30, 400 20" 
          fill="none" 
          stroke="rgba(255,255,255,0.8)" 
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        <motion.path 
          d="M0 20 C 80 40, 180 -10, 280 30 C 350 40, 390 10, 400 20" 
          fill="none" 
          stroke="rgba(255,255,255,0.4)" 
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
        />
      </svg>
      <div className="flex justify-between items-center px-1">
        {apps.map((app, i) => (
          <div key={i} className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
            {app.isLucide ? (
              <Slack className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: app.color, fill: app.color }} />
            ) : (
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill={app.color} xmlns="http://www.w3.org/2000/svg">
                {app.hasStroke && app.name === 'Snapchat' ? (
                  <path d={app.path} fill={app.color} stroke="#000" strokeWidth="0.5" />
                ) : (
                  <path d={app.path} />
                )}
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// **تصحيح مشكلة ارتفاع الكارت رقم 2**
const BuildFlowsOverlay = () => {
  return (
    <div className="flex flex-col gap-1 relative py-1 sm:py-2">
      <div className="text-white/80 text-[10px] sm:text-xs font-medium uppercase tracking-wider">Profit</div>
      <div className="text-white text-xl sm:text-2xl font-bold leading-none">85.4%</div>
      <div className="h-8 sm:h-12 w-full mt-1 relative">
        <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
          <motion.path 
            d="M0 80 C 50 80, 80 20, 120 40 C 160 60, 200 80, 250 50 C 300 20, 350 60, 400 30" 
            fill="none" 
            stroke="white" 
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </svg>
      </div>
      <div className="flex -space-x-2 mt-1">
        {[1,2,3,4].map((id) => (
          <img key={id} src={`https://i.pravatar.cc/100?img=${id+10}`} alt="User" className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-[1.5px] border-white/60 shadow-md object-cover" />
        ))}
      </div>
    </div>
  );
};

const TestOptimizeOverlay = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-0.5">
        <span className="text-[9px] sm:text-[10px] text-white/80 uppercase tracking-wider font-semibold">25 March, 2026</span>
        <h4 className="text-white font-medium text-sm sm:text-base leading-none">Visitors analytics</h4>
      </div>
      <div className="h-12 sm:h-16 w-full flex items-end justify-between mt-1">
        {Array.from({ length: 18 }).map((_, i) => {
          const height = 20 + Math.random() * 80;
          return (
            <motion.div 
              key={i}
              className="w-1 sm:w-1.5 bg-gradient-to-t from-violet-900 via-purple-500 to-orange-400"
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 0.6, delay: i * 0.03, ease: "easeOut" }}
            />
          );
        })}
      </div>
    </div>
  );
};

const ScaleOverlay = () => {
  return (
    <div className="flex flex-col gap-2 sm:gap-3">
      <div>
        <div className="text-white/80 text-[10px] font-medium uppercase tracking-wider mb-0.5">Balance</div>
        <div className="text-white text-xl sm:text-2xl font-bold tracking-tight leading-none">$45,324</div>
      </div>
      <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
        {[
          { label: "Income", amount: "$18,000", color: "bg-emerald-400" },
          { label: "Expenses", amount: "$2,321", color: "bg-rose-400" },
          { label: "Savings", amount: "$10,000", color: "bg-emerald-400" },
        ].map((stat, i) => (
          <div key={i} className="bg-white/90 backdrop-blur-md rounded-lg p-1.5 sm:p-2 flex flex-col gap-0.5 shadow-md">
            <div className="flex items-center gap-1">
              <div className={`w-1 h-1 rounded-full ${stat.color}`} />
              <span className="text-[8px] sm:text-[9px] text-slate-600 font-semibold uppercase">{stat.label}</span>
            </div>
            <span className="text-xs font-bold text-slate-900 leading-none">{stat.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ProcessSection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        once: true
      },
      defaults: { duration: 0.8, ease: 'power2.out' }
    });

    tl.fromTo(
      '.process-header-item',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.08, clearProps: 'transform, opacity' }
    );

    tl.fromTo(
      '.process-main-card',
      { opacity: 0, y: 40, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, clearProps: 'transform, opacity' },
      '<0.2'
    );

    tl.fromTo(
      '.step-indicator',
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, stagger: 0.1, clearProps: 'transform, opacity' },
      '<0.2'
    );
  }, { scope: sectionRef });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isInView) {
      timer = setInterval(() => {
        setDirection(1);
        setCurrentStep((prev) => (prev + 1) % processSteps.length);
      }, 3500);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isInView, currentStep]);

  const handleStepClick = (index: number) => {
    if (index === currentStep) return;
    setDirection(index > currentStep ? 1 : -1);
    setCurrentStep(index);
  };

  return (
    <section ref={sectionRef} className="w-full py-16 sm:py-24 lg:py-32 bg-[#F4F5F7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6 md:gap-8">
          <div className="max-w-2xl">
            <div className="process-header-item bg-[#F0F4F8] rounded-full px-4 py-1.5 border border-slate-200/50 flex items-center gap-2 shadow-sm mb-4 inline-flex">
              <div className="bg-[#0F172A] text-white rounded-full p-1 w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
              <span className="text-slate-800 font-medium text-xs sm:text-sm">How It Works</span>
            </div>
            <h2 className="process-header-item text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-tight">
              From setup to scale — in 4 simple steps
            </h2>
          </div>
          <p className="process-header-item text-slate-500 text-sm sm:text-base md:text-lg max-w-md">
            Follow a guided, step-by-step flow that keeps everything clear and organized from the beginning.
          </p>
        </div>

        {/* Main Container Card */}
        <div className="process-main-card bg-white rounded-2xl sm:rounded-[2rem] border border-slate-200 p-4 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-stretch">
            
            {/* Left: Synchronized Image & Overlays */}
            <div className="lg:col-span-6 relative h-[280px] sm:h-[380px] md:h-[420px] lg:h-auto min-h-[300px] lg:min-h-[460px] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100">
              {processSteps.map((step, index) => {
                const isActive = currentStep === index;
                return (
                  <div
                    key={step.id}
                    className={`absolute inset-0 w-full h-full rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-700 ease-in-out ${
                      isActive ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105 pointer-events-none"
                    }`}
                  >
                    <img
                      src={step.image}
                      loading="eager"
                      className="absolute inset-0 w-full h-full object-cover"
                      alt={step.title}
                    />
                    
                    {/* Glassmorphic Overlay */}
                    <div
                      className={`absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 backdrop-blur-xl bg-white/30 border border-white/40 shadow-2xl rounded-xl sm:rounded-2xl p-3 sm:p-4 transition-all duration-500 ease-in-out ${
                        isActive ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-4"
                      }`}
                    >
                      {index === 0 && <ConnectAppsOverlay />}
                      {index === 1 && <BuildFlowsOverlay />}
                      {index === 2 && <TestOptimizeOverlay />}
                      {index === 3 && <ScaleOverlay />}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Text & Stepper */}
            <div className="lg:col-span-6 flex gap-3 sm:gap-6 lg:gap-8 min-h-[360px] sm:min-h-[400px] lg:min-h-[460px] flex-row">
              
              {/* Vertical Animated Text Container */}
              <div className="flex-1 relative overflow-hidden h-full flex flex-col justify-between py-2 sm:py-4">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentStep}
                    custom={direction}
                    variants={textVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
                    className="w-full flex flex-col justify-center bg-white h-full"
                  >
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-2 sm:mb-3 tracking-tight">
                      {processSteps[currentStep].title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-base mb-4 sm:mb-8 leading-relaxed max-w-md">
                      {processSteps[currentStep].description}
                    </p>
                    <div className="space-y-4 sm:space-y-6">
                      {processSteps[currentStep].features.map((feat, i) => (
                        <div key={i} className="flex gap-3 sm:gap-4">
                          <div className="mt-0.5 flex-shrink-0">
                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />
                          </div>
                          <div>
                            <h4 className="text-slate-900 font-semibold text-sm sm:text-base leading-snug">{feat.title}</h4>
                            <p className="text-slate-500 text-xs sm:text-sm mt-0.5 sm:mt-1">{feat.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Vertical Stepper with Circular Progress Ring */}
              <div className="w-10 sm:w-12 flex flex-col justify-between items-center relative py-2 sm:py-6 z-20 bg-white">
                <div className="absolute top-6 bottom-6 w-[1px] bg-slate-100 left-1/2 -translate-x-1/2" />
                
                {processSteps.map((step, idx) => {
                  const isActive = idx === currentStep;
                  return (
                    <div 
                      key={step.id}
                      className="step-indicator relative z-10 cursor-pointer group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12"
                      onClick={() => handleStepClick(idx)}
                    >
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-semibold transition-all duration-500 ${
                        isActive 
                          ? 'bg-[#0F172A] text-white scale-110 shadow-md' 
                          : 'bg-white text-slate-400 border border-slate-200 group-hover:border-slate-400 group-hover:text-slate-600'
                      }`}>
                        0{step.id}
                      </div>
                      
                      {isActive && (
                        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 48 48">
                          <motion.circle 
                            key={`circle-${step.id}-${currentStep}`}
                            cx="24" 
                            cy="24" 
                            r="21" 
                            fill="none" 
                            stroke="#0F172A" 
                            strokeWidth="2"
                            strokeDasharray="131.9"
                            initial={{ strokeDashoffset: 131.9 }}
                            animate={{ strokeDashoffset: 0 }}
                            transition={{ duration: 3.5, ease: "linear" }}
                          />
                        </svg>
                      )}
                    </div>
                  );
                })}
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};