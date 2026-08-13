import React, { useRef, useState } from 'react';
import { ChevronRight, Star } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftImgRef = useRef<HTMLDivElement>(null);
  const rightImgRef = useRef<HTMLDivElement>(null);
  
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  
  const statsContainerRef = useRef<HTMLDivElement>(null);

  // حالة لتتبع اكتمال التحميل المسبق للصور
  const [leftLoaded, setLeftLoaded] = useState(false);
  const [rightLoaded, setRightLoaded] = useState(false);

  useGSAP(() => {
    // 1. Top Content Fade Animation
    const topTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      defaults: { duration: 0.7, ease: 'power2.out' }
    });

    topTl
      .fromTo(leftImgRef.current, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0 }
      )
      .fromTo([badgeRef.current, headingRef.current, subRef.current, btnRef.current], 
        { opacity: 0, y: 15 }, 
        { opacity: 1, y: 0, stagger: 0.08 },
        '<0.1'
      );

    // 2. Bottom Content Fade Animation
    const bottomTl = gsap.timeline({
      scrollTrigger: {
        trigger: statsContainerRef.current,
        start: 'top 85%',
      },
      defaults: { duration: 0.7, ease: 'power2.out' }
    });

    if (statsContainerRef.current) {
      bottomTl.fromTo(statsContainerRef.current.children,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, stagger: 0.08 }
      );
    }

    bottomTl.fromTo(rightImgRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0 },
      '<0.1'
    );

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-[#F4F5F7] w-full pt-10 pb-20 relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
          
          {/* Left Column (Image 1) */}
          <div 
            ref={leftImgRef} 
            className="lg:col-span-4 relative w-full h-[500px] lg:h-full min-h-[600px] rounded-3xl overflow-hidden shadow-sm bg-slate-200 transform-gpu"
          >
            <img 
              src="/images/image1.webp" 
              alt="Diverse tech team taking a cheerful selfie outdoors" 
              width={800}
              height={1000}
              loading="eager" // حظر الـ Lazy loading باش تتيليشارجا ملول
              decoding="async" // إخراج عملية فك التشفير خارج الـ Main Thread
              onLoad={() => setLeftLoaded(true)}
              className={`w-full h-full object-cover object-center transition-opacity duration-500 ${
                leftLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-10">
            
            {/* Header Block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <div ref={badgeRef} className="px-4 py-1.5 rounded-full text-sm font-medium bg-slate-100 text-slate-800 border border-slate-200/60 w-fit flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  About Us
                </div>
                <h2 ref={headingRef} className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.15]">
                  Engineered for the future of intelligent workflows
                </h2>
              </div>
              
              <div className="flex flex-col md:pt-14">
                <p ref={subRef} className="text-lg text-slate-600 max-w-xl font-normal mt-4 leading-relaxed">
                  We created this platform to solve one simple problem — too much time is wasted on repetitive work.
                </p>
                <a href="/about" ref={btnRef as any} className="px-6 py-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 font-medium text-sm transition-transform duration-200 shadow-sm flex items-center gap-2 w-fit group mt-6">
                  Learn more
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                </a>
              </div>
            </div>

            {/* Bottom Content Split */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-8 lg:pt-16">
              
              {/* Stats Sub-grid */}
              <div ref={statsContainerRef} className="md:col-span-4 flex flex-col space-y-8 justify-center pb-4 lg:pb-0">
                <div className="self-start text-left">
                  <div className="text-4xl sm:text-5xl font-semibold text-slate-900">
                    90%
                  </div>
                  <div className="text-sm text-slate-500 font-medium mt-2">Client Satisfaction</div>
                </div>
                
                <div className="self-end text-left pr-4 md:pr-0">
                  <div className="text-4xl sm:text-5xl font-semibold text-slate-900">
                    10M+
                  </div>
                  <div className="text-sm text-slate-500 font-medium mt-2">automated workflows</div>
                </div>
                
                <div className="self-start text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-4xl sm:text-5xl font-semibold text-slate-900">
                      4.9
                    </span>
                    <Star className="w-6 h-6 text-indigo-500 fill-indigo-500 mb-2"/>
                  </div>
                  <div className="text-sm text-slate-500 font-medium mt-2">user rating</div>
                </div>
              </div>

              {/* Secondary Image Card (Image 2) */}
              <div 
                ref={rightImgRef} 
                className="md:col-span-8 h-[280px] sm:h-[320px] lg:h-[360px] w-full rounded-3xl overflow-hidden relative shadow-sm bg-slate-200 transform-gpu"
              >
                <img 
                  src="/images/image2.webp" 
                  alt="Two creative women collaborating over smartphones" 
                  width={800}
                  height={600}
                  loading="eager" // تحميل مسبق عاجل
                  decoding="async"
                  onLoad={() => setRightLoaded(true)}
                  className={`w-full h-full object-cover object-center transition-opacity duration-500 ${
                    rightLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};