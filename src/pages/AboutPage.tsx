import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CTASection from '../components/CTASection';

const teamMembers = [
  { id: 1, image: '/images/image21.webp', name: 'Eleanor Pena', role: 'CEO & Founder' },
  { id: 2, image: '/images/image22.webp', name: 'Darrell Steward', role: 'Head of Design' },
  { id: 3, image: '/images/image23.webp', name: 'Floyd Miles', role: 'Lead Engineer' },
  { id: 4, image: '/images/image24.webp', name: 'Dianne Russell', role: 'Product Manager' },
  { id: 5, image: '/images/image25.webp', name: 'Guy Hawkins', role: 'Frontend Developer' },
  { id: 6, image: '/images/image26.webp', name: 'Jerome Bell', role: 'Backend Engineer' },
  { id: 7, image: '/images/image27.webp', name: 'Courtney Henry', role: 'Marketing Director' },
  { id: 8, image: '/images/image28.webp', name: 'Albert Flores', role: 'Sales Executive' },
  { id: 9, image: '/images/image29.webp', name: 'Arlene McCoy', role: 'Customer Success' }
];

export const AboutPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const cards = [
    { id: 1, image: "/images/image38.webp", title: "Digital Flow", description: "Streamline your digital processes with intuitive design." },
    { id: 2, image: "/images/image39.webp", title: "Automated Ops", description: "Scale faster with AI-driven automated operations." },
    { id: 3, image: "/images/image40.webp", title: "Data Intelligence", description: "Turn raw data into actionable insights instantly." },
    { id: 4, image: "/images/image41.webp", title: "Secure Infrastructure", description: "Enterprise-grade security embedded into every layer." },
    { id: 5, image: "/images/image42.webp", title: "Creative Solutions", description: "Push boundaries with out-of-the-box creative AI." }
  ];

  return (
    <div className="pt-24 sm:pt-32 pb-0 w-full min-h-screen flex flex-col items-center bg-[#F4F5F7] overflow-x-hidden">
      
      {/* Hero Header Section */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full pt-6 sm:pt-8 pb-8 sm:pb-12 flex flex-col items-center justify-center text-center px-4"
      >
        <div className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#f0f4f9] border border-slate-200/60 shadow-sm mb-4 sm:mb-6 transition-transform hover:scale-105 cursor-default">
          <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#0d1322] flex items-center justify-center shrink-0">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white"></span>
          </span>
          <span className="text-xs sm:text-sm font-medium text-[#111827] tracking-tight">About Us</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#0f172a] tracking-tight leading-tight mb-4 sm:mb-6 max-w-4xl">
          About Zelix
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[#64748b] max-w-2xl leading-relaxed">
          Empowering modern teams through intelligent automation and seamless digital workflows.
        </p>
      </motion.section>

      {/* Team & Mission Highlight Section */}
      <section className="w-full bg-[#F4F5F7] py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Featured Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-8 min-h-[280px] sm:min-h-[420px] lg:min-h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden relative shadow-sm group bg-slate-200"
          >
            <img 
              src="/images/image43.webp" 
              alt="Team Workspace"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200';
              }}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </motion.div>

          {/* Right Column: Quote & Leadership Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4 bg-[#0f172a] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 flex flex-col justify-between shadow-md"
          >
            <p className="text-lg sm:text-2xl lg:text-3xl font-medium leading-snug sm:leading-snug tracking-tight text-white mb-6 sm:mb-8">
              “We don’t just automate workflows; we engineer freedom. Our mission is to eliminate repetitive operational friction so ambitious teams can focus entirely on growth and innovation.”
            </p>

            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white/20 shrink-0">
                <img 
                  src="/images/image21.webp" 
                  alt="Michael Thompson"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200';
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-base sm:text-lg text-white">Michael Thompson</span>
                <span className="text-xs sm:text-sm text-slate-400 font-medium">CEO & Founder</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Design Highlight Section */}
      <section className="w-full bg-[#F4F5F7] py-6 sm:py-8 lg:py-12 px-4 sm:px-8 lg:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Quote Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4 bg-[#0f172a] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 flex flex-col justify-between shadow-md order-2 lg:order-1"
          >
            <p className="text-lg sm:text-2xl lg:text-3xl font-medium leading-snug sm:leading-snug tracking-tight text-white mb-6 sm:mb-8">
              “Automation shouldn't feel complex or robotic. We design intelligent interfaces that transform intricate backend AI workflows into intuitive, effortless everyday experiences.”
            </p>

            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white/20 shrink-0">
                <img 
                  src="/images/image22.webp" 
                  alt="Sarah Jenkins"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200';
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-base sm:text-lg text-white">Sarah Jenkins</span>
                <span className="text-xs sm:text-sm text-slate-400 font-medium">Head of Design</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Featured Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-8 min-h-[280px] sm:min-h-[420px] lg:min-h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden relative shadow-sm group bg-slate-200 order-1 lg:order-2"
          >
            <img 
              src="/images/image44.webp" 
              alt="Design Workspace"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200';
              }}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </motion.div>
        </div>
      </section>

{/* Our Purpose Section (Clean Minimalist Layout) */}
      <section className="w-full bg-[#F4F5F7] py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1300px] mx-auto flex flex-col items-center">
          
          {/* Badge Above Purpose Section */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#f0f4f9] border border-slate-200/60 shadow-sm mb-10 sm:mb-14 cursor-default"
          >
            <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#0d1322] flex items-center justify-center shrink-0">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-[#111827] tracking-tight">Our Purpose</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-14 lg:gap-16 items-start w-full">
            
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="flex flex-col items-center text-center group"
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 sm:mb-8 bg-gradient-to-r from-[#090D16] via-indigo-900 to-[#090D16] bg-clip-text text-transparent">
                Mission
              </h3>
              
              <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
                To develop <span className="text-slate-900 font-medium">intuitive, accessible</span> AI automation tools that eliminate repetitive operational tasks, enabling modern businesses and teams to thrive and focus on <span className="text-slate-900 font-semibold">meaningful growth</span>.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col items-center text-center group"
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 sm:mb-8 bg-gradient-to-r from-[#090D16] via-indigo-900 to-[#090D16] bg-clip-text text-transparent">
                Vision
              </h3>
              
              <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
                To empower every team globally with an <span className="text-slate-900 font-semibold">intelligent digital ecosystem</span> where complex workflows become seamless, driving <span className="text-slate-900 font-semibold">faster, smarter decisions</span> effortless everyday.
              </p>
            </motion.div>

            {/* Future Goals */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col items-center text-center group"
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 sm:mb-8 bg-gradient-to-r from-[#090D16] via-indigo-900 to-[#090D16] bg-clip-text text-transparent">
                Future Goals
              </h3>
              
              <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
                To continuously <span className="text-slate-900 font-semibold">innovate our AI platform</span>, expanding our global workflow footprint, setting new industry standards for <span className="text-slate-900 font-semibold">speed, security</span>, and human-centered design.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

{/* Team Preview Section */}
      <section className="w-full bg-[#F4F5F7] py-12 sm:py-16 lg:py-24 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#f0f4f9] border border-slate-200/60 shadow-sm mb-4 sm:mb-6 cursor-default">
              <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#0d1322] flex items-center justify-center shrink-0">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#111827] tracking-tight">Meet the team</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 text-center">
              The minds behind Zelix
            </h2>
            <p className="text-slate-600 text-sm sm:text-lg max-w-2xl mx-auto text-center mt-3 sm:mt-4 leading-relaxed">
              Meet the engineers, designers, and strategists building the future of Zelix. We are dedicated to creating seamless digital experiences that move your business forward.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full mb-8 sm:mb-12">
            {teamMembers.slice(0, 6).map((member, idx) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] relative group shadow-sm bg-slate-100"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 right-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-md border border-white/40 shadow-lg transition-all duration-300 ease-in-out opacity-100 sm:opacity-0 translate-y-0 sm:translate-y-4 sm:group-hover:opacity-100 sm:group-hover:translate-y-0">
                  <h3 className="text-slate-900 font-semibold text-base sm:text-lg leading-snug">{member.name}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium mt-0.5">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.a 
            href="/team"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 text-slate-900 font-semibold text-sm sm:text-base hover:text-indigo-600 transition-colors group"
          >
            View All Team Members 
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </section>

      {/* Story Accordion Showcase */}
      <section className="w-full bg-[#F4F5F7] text-[#0f172a] py-12 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-12 flex-grow">
        <div className="max-w-[1400px] mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0f172a] leading-snug max-w-5xl mb-8 sm:mb-12 lg:mb-16 text-center lg:text-left"
          >
            Want to explore our journey, team philosophy, and the AI solutions we've crafted? Dive into our story below.
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col lg:flex-row gap-3 sm:gap-4 h-auto lg:h-[540px] w-full max-w-[1400px] mx-auto"
            onMouseLeave={() => setActiveIndex(0)}
          >
            {cards.map((card, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`relative overflow-hidden cursor-pointer rounded-2xl min-h-[220px] sm:min-h-[280px] lg:min-h-0 ${
                    isActive ? 'lg:flex-[3.5]' : 'lg:flex-1'
                  } transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]`}
                >
                  {/* Background Image */}
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-5 sm:p-6 lg:p-8 flex flex-col justify-end pointer-events-none">
                    <div 
                      className={`flex flex-col gap-1.5 sm:gap-2 transition-all duration-500 ${
                        isActive ? 'opacity-100 translate-y-0' : 'opacity-90 lg:opacity-0 translate-y-0 lg:translate-y-4'
                      }`}
                    >
                      <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight whitespace-nowrap">
                        {card.title}
                      </h3>
                      <p className="text-slate-200 text-xs sm:text-sm lg:text-base font-normal max-w-sm line-clamp-2 leading-relaxed">
                        {card.description}
                      </p>
                      <div className="mt-1 sm:mt-2 inline-flex items-center gap-1.5 sm:gap-2 text-white font-medium text-xs sm:text-sm group-hover:text-indigo-300 transition-colors pointer-events-auto w-fit">
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};