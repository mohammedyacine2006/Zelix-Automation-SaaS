import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Bot, CheckCircle, ChevronRight } from 'lucide-react';
import CTASection from '../components/CTASection';

export const FeaturesPage: React.FC = () => {
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
          <span className="text-sm font-medium text-[#111827] tracking-tight">Features</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0f172a] tracking-tight leading-tight mb-6 max-w-4xl">
          Powerful features to automate & scale
        </h1>

        <p className="text-lg md:text-xl text-[#64748b] max-w-2xl leading-relaxed">
          Explore the next generation of AI-driven workflow automation tools designed for modern teams.
        </p>
      </motion.section>

      {/* Features Grid Section */}
      <section className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 - Trusted Users */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-[32px] border border-slate-100 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="bg-[#111319] w-full h-[200px] p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between text-white">
              <div className="flex justify-between items-start">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((imgId, idx) => (
                    <motion.img 
                      key={imgId}
                      initial={{ opacity: 0, scale: 0.5, x: -10 }}
                      whileInView={{ opacity: 1, scale: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + idx * 0.15 }}
                      src={`https://i.pravatar.cc/100?img=${imgId}`} 
                      className="w-10 h-10 rounded-full border-2 border-[#111319] relative z-30" 
                      alt="User" 
                    />
                  ))}
                </div>
                <div className="w-10 h-10 rounded-full bg-[#8B5CF6] flex items-center justify-center text-white cursor-pointer hover:bg-purple-500 transition-colors">
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <div className="text-[#8B5CF6] font-medium text-lg mb-0.5">Trusted by 2,500+</div>
                <div className="text-slate-400 text-xs">Teams scaling with Zelix</div>
              </motion.div>
            </div>
            <h3 className="text-[22px] font-medium tracking-normal text-[#0F172A] mt-6 mb-2">Automated Trigger Workflows</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-normal">
              Eliminate repetitive tasks with event-driven triggers that execute multi-app workflows in milliseconds without human intervention.
            </p>
          </motion.div>

          {/* Card 2 - Multi-App Connectors */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-[32px] border border-slate-100 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="bg-[#111319] w-full h-[200px] p-6 rounded-2xl relative overflow-hidden flex flex-col justify-center gap-3 text-white">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[#8B5CF6] rounded-xl p-3 flex items-center gap-3 shadow-lg"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium">Slack Webhook</div>
                  <div className="text-xs text-white/80">Triggered at 10:20 AM</div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="bg-[#2A2D3A] rounded-xl p-3 flex items-center justify-between"
              >
                <div className="text-sm font-medium text-slate-300">Data Synced</div>
                <div className="px-3 py-1 rounded-full bg-[#111319] text-xs font-medium text-slate-400">
                  Success
                </div>
              </motion.div>
            </div>
            <h3 className="text-[22px] font-medium tracking-normal text-[#0F172A] mt-6 mb-2">Seamless Multi-App Connectors</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-normal">
              Connect CRM, Slack, and cloud databases with pre-built zero-code integrations designed for high-scale enterprise operations.
            </p>
          </motion.div>

          {/* Card 3 - Real-time Analytics (Bar Chart Animation) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-[32px] border border-slate-100 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="bg-[#111319] w-full h-[200px] p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between text-white">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-slate-400 text-[11px] mb-1 font-medium">Task execution time</div>
                  <div className="text-xl font-medium">124.5 ms</div>
                </div>
                <div className="px-2 py-1 rounded bg-[#8B5CF6]/20 text-[#8B5CF6] text-xs font-semibold">
                  +340%
                </div>
              </div>
              <div className="flex items-end justify-between gap-1 h-16 mt-2">
                {[40, 25, 60, 30, 45, 80, 50, 90].map((h, i) => (
                  <div key={i} className="w-full bg-[#2A2D3A] rounded-t-sm relative flex flex-col justify-end h-full">
                    <motion.div 
                      initial={{ height: "0%" }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                      className="w-full bg-gradient-to-t from-[#8B5CF6]/10 to-[#8B5CF6] rounded-t-sm"
                    />
                  </div>
                ))}
              </div>
            </div>
            <h3 className="text-[22px] font-medium tracking-normal text-[#0F172A] mt-6 mb-2">Real-time AI Task Analytics</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-normal">
              Monitor process latency, success rates, and compute usage across all active automation pipelines in one unified dashboard.
            </p>
          </motion.div>

          {/* Card 4 - Cost Scaling */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-[32px] border border-slate-100 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="bg-[#111319] w-full h-[200px] p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between text-white">
              <div className="flex justify-between items-start">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="text-3xl font-medium mb-1">99.9%</div>
                  <div className="text-slate-400 text-xs font-medium">Uptime SLA guaranteed</div>
                </motion.div>
                <div className="w-10 h-10 rounded-full bg-[#8B5CF6] flex items-center justify-center text-white cursor-pointer hover:bg-purple-500 transition-colors">
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="text-[#8B5CF6] font-medium text-3xl">$12.4k</div>
                <div className="text-slate-400 text-xs mt-1 font-medium">Saved per month</div>
              </motion.div>
            </div>
            <h3 className="text-[22px] font-medium tracking-normal text-[#0F172A] mt-6 mb-2">Predictive Cost Scaling</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-normal">
              Optimize cloud infrastructure compute consumption automatically based on real-time task queues and batch demand.
            </p>
          </motion.div>

          {/* Card 5 - AI Node */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-[32px] border border-slate-100 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="bg-[#111319] w-full h-[200px] p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between text-white">
              <div className="flex items-center gap-4">
                <motion.div 
                  initial={{ scale: 0.8, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="w-12 h-12 rounded-full bg-[#2A2D3A] border-2 border-[#8B5CF6] p-0.5 overflow-hidden flex items-center justify-center shrink-0"
                >
                  <Bot className="w-6 h-6 text-[#8B5CF6]" />
                </motion.div>
                <div>
                  <div className="font-medium text-sm">AI Assistant Node</div>
                  <div className="text-xs text-slate-400">Data Processing</div>
                </div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.45 }}
                className="flex justify-between items-center border-t border-white/10 pt-4"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#8B5CF6]" />
                  <span className="text-xs font-medium text-slate-300">120 Tasks/hr</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span className="text-[10px] font-medium text-emerald-400 uppercase tracking-wider">Active</span>
                </div>
              </motion.div>
            </div>
            <h3 className="text-[22px] font-medium tracking-normal text-[#0F172A] mt-6 mb-2">Autonomous Agent Delegation</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-normal">
              Deploy specialized LLM agents to summarize documents, route customer tickets, and format complex data streams.
            </p>
          </motion.div>

          {/* Card 6 - SOC2 Guardrails */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-[32px] border border-slate-100 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="bg-[#111319] w-full h-[200px] p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between text-white">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-slate-400 text-xs mb-1">Security Target</div>
                  <div className="text-sm font-medium">100% Compliant</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#8B5CF6] flex items-center justify-center text-white cursor-pointer hover:bg-purple-500 transition-colors">
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-end gap-3"
              >
                <div className="text-5xl font-medium text-[#8B5CF6] tracking-tighter">SOC2</div>
                <div className="text-sm text-slate-400 mb-2 font-medium">Certified</div>
              </motion.div>
            </div>
            <h3 className="text-[22px] font-medium tracking-normal text-[#0F172A] mt-6 mb-2">Enterprise Guardrails & Logs</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-normal">
              Maintain full auditability with end-to-end encryption, automated compliance checks, and granular user access controls.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Use-Case / Workflow Fit Section */}
      <section className="w-full max-w-[1380px] mx-auto px-6 py-12 lg:py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0F172A] tracking-tight mb-4">
            Features that fit your workflow
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Zelix is built to streamline complex multi-app pipelines and automate manual workflows for every team size.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column - Stacked Cards */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-[32px] p-8 md:p-10 border border-slate-100 shadow-sm flex-1"
            >
              <h3 className="text-2xl font-medium text-[#0F172A] mb-6">For SaaS & Tech Companies</h3>
              <ul className="space-y-4">
                {[
                  "Automated user onboarding sequences & event-driven triggers",
                  "Self-healing API Webhooks and real-time database sync",
                  "In-app AI copilot integrations and automated ticket routing"
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#8B5CF6] shrink-0"></span>
                    <span className="text-slate-600 text-sm md:text-base leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-[32px] p-8 md:p-10 border border-slate-100 shadow-sm flex-1"
            >
              <h3 className="text-2xl font-medium text-[#0F172A] mb-6">For Operations & Growth Teams</h3>
              <ul className="space-y-4">
                {[
                  "Multi-channel campaign automation & instant lead scoring",
                  "Cross-platform data sync between CRM, Slack, and cloud storage",
                  "Automated report generation and real-time operational alerts"
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#8B5CF6] shrink-0"></span>
                    <span className="text-slate-600 text-sm md:text-base leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column - Tall Card */}
          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-[32px] p-8 md:p-10 border border-slate-100 shadow-sm flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="text-2xl font-medium text-[#0F172A] mb-6">For Agencies & Automation Studios</h3>
                <ul className="space-y-4">
                  {[
                    "Client multi-tenant workspace management from a single console",
                    "Custom AI workflow blueprints, automated client reporting, and instant white-label exports"
                  ].map((item, idx) => (
                    <motion.li 
                      key={idx} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#8B5CF6] shrink-0"></span>
                      <span className="text-slate-600 text-sm md:text-base leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="rounded-2xl overflow-hidden mt-8 relative h-[280px] w-full bg-slate-100 border border-slate-200/50 shadow-sm"
              >
                <img 
                  src="/images/image32.webp" 
                  alt="AI processing workflow and actionable insights pipeline architecture" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Bottom CTA Pill Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <button className="group relative flex items-center h-[52px] w-[230px] bg-[#0F172A] rounded-full text-white font-medium text-[15.5px] shadow-sm hover:bg-slate-800 transition-colors overflow-hidden cursor-pointer">
            <div className="absolute left-2 w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-[178px]">
              <ChevronRight className="w-5 h-5 text-white"/>
            </div>
            <span className="w-full text-center pl-10 pr-2 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-x-6">
              Get a strategy call
            </span>
          </button>
        </motion.div>
      </section>

      {/* Call to Action */}
      <CTASection />
    </div>
  );
};