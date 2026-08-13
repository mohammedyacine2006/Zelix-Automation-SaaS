import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is Zelix and how does it work?",
    answer: "Zelix is a unified SaaS platform that streamlines operations by connecting all your essential tools into one real-time dashboard."
  },
  {
    question: "Can I try it for free before subscribing?",
    answer: "Yes, we offer a full-featured 14-day free trial on all plans—no credit card required."
  },
  {
    question: "How secure is my data and integration?",
    answer: "We use enterprise-grade 256-bit AES encryption and TLS 1.2+. We are SOC 2 Type II compliant with regular security audits."
  },
  {
    question: "Can I upgrade or cancel my plan anytime?",
    answer: "Yes, billing is entirely flexible. Upgrade, downgrade, or cancel anytime from your account settings."
  },
  {
    question: "Do you offer custom solutions for larger enterprises?",
    answer: "Yes, our Enterprise plan includes custom integrations, SSO, volume pricing, and dedicated support."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="w-full py-10 sm:py-16 md:py-20 bg-[#F4F5F7] relative overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 md:mb-16 flex flex-col items-center"
        >
          <div className="bg-[#F0F4F8] rounded-full px-3.5 py-1 sm:px-4 sm:py-1.5 border border-slate-200/50 flex items-center gap-2 shadow-sm mb-4 sm:mb-6 inline-flex transition-transform hover:scale-105 cursor-default">
            <div className="bg-[#0F172A] text-white rounded-full p-1 w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <span className="text-slate-800 font-medium text-xs sm:text-sm">Got Questions?</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-3 sm:mb-6">
            Frequently asked questions
          </h2>
          
          <p className="text-sm sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
            Everything you need to know about the product, billing, and integration.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto flex flex-col gap-3 sm:gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                className={`bg-white border transition-all duration-300 rounded-xl sm:rounded-2xl overflow-hidden ${
                  isOpen ? 'border-slate-300 shadow-md' : 'border-slate-200/80 shadow-sm hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 md:px-6 md:py-5 text-left focus:outline-none cursor-pointer gap-3 sm:gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base md:text-lg font-medium text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    isOpen ? 'bg-[#0F172A] text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                  }`}>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="flex items-center justify-center"
                    >
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.div>
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 md:px-6 md:pb-6 text-slate-600 leading-relaxed text-xs sm:text-sm md:text-base border-t border-slate-50 pt-2 sm:pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}