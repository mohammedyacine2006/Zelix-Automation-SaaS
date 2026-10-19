import React from 'react';
import { Home, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import CTASection from '../components/CTASection';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-32 pb-0 w-full min-h-screen flex flex-col items-center bg-[#F4F5F7] overflow-x-hidden">

      {/* Hero Header Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full pt-4 sm:pt-8 pb-6 sm:pb-12 flex flex-col items-center justify-center text-center px-4"
      >
        {/* Badge matching 'About Us' pill design */}
        <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#f0f4f9] border border-slate-200/60 shadow-sm mb-4 sm:mb-6 transition-transform hover:scale-105 cursor-default">
          <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#0d1322] flex items-center justify-center">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white"></span>
          </span>
          <span className="text-xs sm:text-sm font-medium text-[#111827] tracking-tight">Contact</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#0f172a] tracking-tight leading-tight mb-4 sm:mb-6 max-w-4xl">
          Get in touch with our team
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-[#64748b] max-w-2xl leading-relaxed px-2">
          Whether you have a question about features, trials, pricing, or need a demo, our team is ready to answer all your questions.
        </p>
      </motion.section>

      {/* Main Content Area */}
      <div className="flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12">

          {/* Left Column: Contact Info Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-6">

            {/* Card 1: Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
              className="bg-[#111319] text-white py-8 sm:py-12 px-6 sm:px-8 rounded-2xl sm:rounded-3xl relative overflow-hidden flex flex-col items-center text-center justify-center min-h-[180px] sm:min-h-[240px] border border-slate-800/50 group gap-3.5 sm:gap-5"
            >
              <div className="bg-gradient-to-bl from-fuchsia-500/70 via-purple-600/40 to-transparent blur-xl absolute -top-8 -right-8 w-44 sm:w-52 h-44 sm:h-52 rounded-full pointer-events-none transition-opacity duration-500 group-hover:opacity-100 mix-blend-screen opacity-90"></div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl border border-white/20 flex items-center justify-center bg-white/5 relative z-10 shrink-0">
                <Home className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[1.5]" />
              </div>
              <div className="relative z-10 flex flex-col gap-1.5 sm:gap-2">
                <h3 className="text-base sm:text-lg font-semibold tracking-wide">Our Headquarters</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">Tech District, Innovation Hub 101, San Francisco, CA</p>
              </div>
            </motion.div>

            {/* Card 2: Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              className="bg-[#111319] text-white py-8 sm:py-12 px-6 sm:px-8 rounded-2xl sm:rounded-3xl relative overflow-hidden flex flex-col items-center text-center justify-center min-h-[180px] sm:min-h-[240px] border border-slate-800/50 group gap-3.5 sm:gap-5"
            >
              <div className="bg-gradient-to-bl from-amber-400/70 via-orange-500/35 to-transparent blur-xl absolute -top-8 -right-8 w-44 sm:w-52 h-44 sm:h-52 rounded-full pointer-events-none transition-opacity duration-500 group-hover:opacity-100 mix-blend-screen opacity-90"></div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl border border-white/20 flex items-center justify-center bg-white/5 relative z-10 shrink-0">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[1.5]" />
              </div>
              <div className="relative z-10 flex flex-col gap-1.5 sm:gap-2">
                <h3 className="text-base sm:text-lg font-semibold tracking-wide">Email Us</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">support@zelix.ai</p>
              </div>
            </motion.div>

            {/* Card 3: Call */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="bg-[#111319] text-white py-8 sm:py-12 px-6 sm:px-8 rounded-2xl sm:rounded-3xl relative overflow-hidden flex flex-col items-center text-center justify-center min-h-[180px] sm:min-h-[240px] border border-slate-800/50 group gap-3.5 sm:gap-5"
            >
              <div className="bg-gradient-to-tr from-yellow-400/70 via-amber-500/35 to-transparent blur-xl absolute -bottom-8 -left-8 w-48 sm:w-56 h-48 sm:h-56 rounded-full pointer-events-none transition-opacity duration-500 group-hover:opacity-100 mix-blend-screen opacity-90"></div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl border border-white/20 flex items-center justify-center bg-white/5 relative z-10 shrink-0">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[1.5]" />
              </div>
              <div className="relative z-10 flex flex-col gap-1.5 sm:gap-2">
                <h3 className="text-base sm:text-lg font-semibold tracking-wide">Schedule a Call</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">+1 (800) 555-ZELIX</p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-8"
          >
            <div className="bg-white p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-5 sm:gap-6">
              <form className="flex flex-col gap-4 sm:gap-6" onSubmit={(e) => e.preventDefault()}>

                {/* Row 1: Name & Number */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    <label htmlFor="name" className="text-xs sm:text-sm font-medium text-slate-700">Your name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="e.g. Alex Morgan"
                      className="bg-white border border-slate-200 text-xs sm:text-sm px-4 sm:px-5 py-3 sm:py-3.5 rounded-full placeholder:text-slate-400 focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 outline-none w-full transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    <label htmlFor="number" className="text-xs sm:text-sm font-medium text-slate-700">Your phone number</label>
                    <input
                      type="tel"
                      id="number"
                      placeholder="e.g. +1 (555) 000-0000"
                      className="bg-white border border-slate-200 text-xs sm:text-sm px-4 sm:px-5 py-3 sm:py-3.5 rounded-full placeholder:text-slate-400 focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 outline-none w-full transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Email */}
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <label htmlFor="email" className="text-xs sm:text-sm font-medium text-slate-700">Work email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="e.g. alex@company.com"
                    className="bg-white border border-slate-200 text-xs sm:text-sm px-4 sm:px-5 py-3 sm:py-3.5 rounded-full placeholder:text-slate-400 focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 outline-none w-full transition-all"
                  />
                </div>

                {/* Row 3: Subject */}
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <label htmlFor="subject" className="text-xs sm:text-sm font-medium text-slate-700">How can we help?</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="e.g. Custom AI Workflow Integration"
                    className="bg-white border border-slate-200 text-xs sm:text-sm px-4 sm:px-5 py-3 sm:py-3.5 rounded-full placeholder:text-slate-400 focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 outline-none w-full transition-all"
                  />
                </div>

                {/* Row 4: Message */}
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <label htmlFor="message" className="text-xs sm:text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    id="message"
                    placeholder="Tell us about your current processes and automation goals..."
                    className="bg-white border border-slate-200 text-xs sm:text-sm p-4 sm:p-5 rounded-xl sm:rounded-2xl placeholder:text-slate-400 focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 outline-none w-full min-h-[130px] sm:min-h-[160px] resize-y transition-all"
                  ></textarea>
                </div>

                {/* Row 5: Terms */}
                <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 mt-1 sm:mt-2">
                  <div className="relative flex items-center shrink-0 mt-0.5 sm:mt-0">
                    <input
                      type="checkbox"
                      id="terms"
                      className="peer h-4 w-4 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-900 checked:bg-slate-900 transition-all"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <label htmlFor="terms" className="text-xs sm:text-sm text-slate-500 cursor-pointer leading-snug">
                    I agree with the <a href="/contact" className="text-[#6366f1] hover:text-[#4f46e5] underline underline-offset-2 transition-colors">terms and conditions and privacy policy</a>
                  </label>
                </div>

                {/* Row 6: Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#111827] hover:bg-black text-white font-medium py-3.5 sm:py-4 rounded-full transition-all duration-300 text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg mt-1 sm:mt-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 mt-8 sm:mt-12 md:mt-16 mb-12 sm:mb-16"
        >
          <div className="bg-white p-2.5 sm:p-3 md:p-4 rounded-2xl sm:rounded-3xl shadow-sm border border-slate-100 h-[320px] sm:h-[400px] md:h-[480px]">
            <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/60 relative">
              <iframe
                title="Zelix Location Map"
                src="https://maps.google.com/maps?q=37.774929,-122.419416&z=12&output=embed"
                className="w-full h-full border-0 grayscale-[20%] contrast-[105%]"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full pb-12 sm:pb-20"
        >
          <CTASection />
        </motion.div>
      </div>
    </div>
  );
};