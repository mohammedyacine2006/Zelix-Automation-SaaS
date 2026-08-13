import React from 'react';
import { 
  Star, Layers, ShieldCheck, Layout,
  DollarSign, Users, MessageSquare, BarChart3,
  ArrowRight
} from 'lucide-react';

export const PlatformMenu: React.FC = () => {
  return (
    <div className="
      lg:fixed lg:top-[60px] lg:pt-[20px] lg:left-1/2 lg:-translate-x-1/2 lg:w-full lg:max-w-[1200px] 
      lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible 
      lg:transition-all lg:duration-300 lg:transform lg:translate-y-4 lg:group-hover:translate-y-0 
      lg:z-50 w-full
    ">
      <div className="
        bg-transparent lg:bg-white 
        border-0 lg:border lg:border-slate-200/80 
        rounded-2xl lg:rounded-3xl 
        shadow-none lg:shadow-2xl 
        p-0 lg:p-10 
        grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8
      ">
        
        {/* Left Section (Spans 6 cols on desktop) */}
        <div className="col-span-1 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
          
          {/* Column 1: Overview */}
          <div className="flex flex-col gap-1 lg:gap-2 border-b sm:border-b-0 border-slate-100 pb-3 sm:pb-0">
            <span className="text-xs text-slate-400 font-semibold mb-2 lg:mb-4 block px-1">Overview</span>
            
            <a href="/features" className="group/item flex items-center gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
              <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
                <Star className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
              </div>
              <span className="font-semibold text-slate-800 group-hover/item:text-slate-900 text-xs lg:text-sm">Features & Capabilities</span>
            </a>
            
            <a href="/process" className="group/item flex items-center gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
              <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
                <Layers className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
              </div>
              <span className="font-semibold text-slate-800 group-hover/item:text-slate-900 text-xs lg:text-sm">Process & Workflow</span>
            </a>
            
            <a href="/security" className="group/item flex items-center gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
              <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
                <ShieldCheck className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
              </div>
              <span className="font-semibold text-slate-800 group-hover/item:text-slate-900 text-xs lg:text-sm">Security & Compliance</span>
            </a>
            
            <a href="/brandkit" className="group/item flex items-center gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
              <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
                <Layout className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
              </div>
              <span className="font-semibold text-slate-800 group-hover/item:text-slate-900 text-xs lg:text-sm">Our Brandkit</span>
            </a>
          </div>

          {/* Column 2: Integrations */}
          <div className="flex flex-col gap-1 lg:gap-2">
            <span className="text-xs text-slate-400 font-semibold mb-2 lg:mb-4 block px-1">Integrations</span>
            
            <a href="/pricing" className="group/item flex items-center gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
              <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
                <DollarSign className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
              </div>
              <span className="font-semibold text-slate-800 group-hover/item:text-slate-900 text-xs lg:text-sm">Pricing</span>
            </a>
            
            <a href="/hr-payroll" className="group/item flex items-center gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
              <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
                <Users className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
              </div>
              <span className="font-semibold text-slate-800 group-hover/item:text-slate-900 text-xs lg:text-sm">HR & Payroll</span>
            </a>
            
            <a href="/support" className="group/item flex items-center gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
              <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
                <MessageSquare className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
              </div>
              <span className="font-semibold text-slate-800 group-hover/item:text-slate-900 text-xs lg:text-sm">Customer Support</span>
            </a>
            
            <a href="/analytics" className="group/item flex items-center gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
              <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
                <BarChart3 className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
              </div>
              <span className="font-semibold text-slate-800 group-hover/item:text-slate-900 text-xs lg:text-sm">Analytics & Reporting</span>
            </a>
          </div>

        </div>
        
        {/* Right Section (Cards - Spans 6 cols on desktop) */}
        <div className="col-span-1 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-100">
          
          {/* Card 1 */}
          <div className="flex flex-col p-3.5 lg:p-4 bg-white border border-slate-200/80 lg:border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer">
            <img src="/images/image3.webp" alt="Merge Unified" className="w-full h-32 lg:h-40 object-cover rounded-xl lg:rounded-2xl block" />
            <h4 className="text-xs lg:text-sm font-bold text-slate-900 mb-1 mt-3 lg:mt-4">Merge Unified</h4>
            <p className="text-[11px] lg:text-xs text-slate-500 mb-3 lg:mb-4">
              One API. Countless product integrations.
            </p>
            <div className="bg-slate-900 text-white w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center mt-auto">
              <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col p-3.5 lg:p-4 bg-white border border-slate-200/80 lg:border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer">
            <img src="/images/image4.webp" alt="Combine Unified" className="w-full h-32 lg:h-40 object-cover rounded-xl lg:rounded-2xl block" />
            <h4 className="text-xs lg:text-sm font-bold text-slate-900 mb-1 mt-3 lg:mt-4">Combine Unified</h4>
            <p className="text-[11px] lg:text-xs text-slate-500 mb-3 lg:mb-4">
              One API. Countless product integrations.
            </p>
            <div className="bg-slate-900 text-white w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center mt-auto">
              <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};