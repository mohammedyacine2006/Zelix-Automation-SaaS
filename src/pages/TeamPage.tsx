import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
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

export const TeamPage: React.FC = () => {
  return (
    <div className="pt-32 pb-0 w-full min-h-screen flex flex-col items-center bg-[#F4F5F7]">
      {/* Hero Header Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full pt-8 pb-12 flex flex-col items-center justify-center text-center px-4"
      >
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#f0f4f9] border border-slate-200/60 shadow-sm mb-6 transition-transform hover:scale-105 cursor-default">
          <span className="w-5 h-5 rounded-full bg-[#0d1322] flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-white"></span>
          </span>
          <span className="text-sm font-medium text-[#111827] tracking-tight">Meet the team</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0f172a] tracking-tight leading-tight mb-6 max-w-4xl">
          The minds behind Zelix
        </h1>

        <p className="text-lg md:text-xl text-[#64748b] max-w-2xl leading-relaxed">
          Meet the engineers, designers, and strategists building the future of Zelix. We are dedicated to creating seamless digital experiences that move your business forward.
        </p>
      </motion.section>

      {/* Team Grid */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 mb-20 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 my-10">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="relative group cursor-pointer overflow-hidden rounded-[32px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="aspect-square w-full object-cover shadow-sm transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 right-3 p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 shadow-lg transition-all duration-300 ease-in-out opacity-100 translate-y-0 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0">
                <h3 className="text-slate-900 font-semibold text-lg leading-snug">{member.name}</h3>
                <p className="text-slate-600 text-sm font-medium mt-0.5">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Feature Banner Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content Block */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-slate-200/60 shadow-sm mb-6">
              <div className="w-5 h-5 rounded-full bg-[#090D16] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </div>
              <span className="text-slate-800 text-sm font-medium">Analytics & Automation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-tight mb-6 max-w-xl">
              Automate Workflows & Scale Results Effortlessly
            </h2>
            <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
              Connect your tech stack, eliminate repetitive manual tasks, and optimize end-to-end operational performance with AI-driven analytics and automated triggers.
            </p>
            <button className="group relative flex items-center h-[52px] w-[230px] bg-[#0F172A] rounded-full text-white font-medium text-[15.5px] shadow-sm hover:bg-slate-800 transition-colors overflow-hidden cursor-pointer">
              <div className="absolute left-2 w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-[178px]">
                <ChevronRight className="w-5 h-5 text-white" />
              </div>
              <span className="w-full text-center pl-10 pr-2 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-x-6">
                Explore Features
              </span>
            </button>
          </motion.div>

          {/* Right Image Block */}
          <motion.div
            className="lg:col-span-7 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/image30.webp"
              alt="Workflow Automation"
              className="w-full h-[280px] sm:h-[380px] md:h-[460px] lg:h-[540px] object-cover object-center rounded-[28px] sm:rounded-[32px] shadow-lg border border-slate-200/60"
            />
          </motion.div>
        </div>
      </div>

      <CTASection />
    </div>
  );
};