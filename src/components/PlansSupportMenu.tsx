import React from 'react';
import { 
  LogIn, UserPlus, Share2, Gem, FileText, 
  File, Shield, DollarSign, UserCheck, Scale
} from 'lucide-react';

export const PlansSupportMenu: React.FC = () => {
  return (
    <div className="
      lg:fixed lg:top-[60px] lg:pt-[20px] lg:left-1/2 lg:-translate-x-1/2 lg:w-full lg:max-w-[1000px] 
      lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible 
      lg:transition-all lg:duration-300 lg:transform lg:translate-y-4 lg:group-hover:translate-y-0 
      lg:z-50 w-full
    ">
      <div className="
        bg-transparent lg:bg-white 
        border-0 lg:border lg:border-slate-200/80 
        rounded-2xl lg:rounded-[2rem] 
        shadow-none lg:shadow-2xl lg:shadow-slate-900/10 
        p-0 lg:p-8
      ">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left Section (Links) */}
          <div className="col-span-1 lg:col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-2 lg:gap-y-2">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-1 lg:gap-1 border-b lg:border-b-0 border-slate-100 pb-2 lg:pb-0 mb-2 lg:mb-0">
              <a href="/login" className="group/item flex items-start gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
                <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
                  <LogIn className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
                </div>
                <div className="mt-0.5">
                  <div className="font-semibold text-slate-800 group-hover/item:text-slate-900 mb-0.5 text-xs lg:text-sm">Login</div>
                  <div className="text-[12px] lg:text-[13px] text-slate-500 leading-snug">Log into your dashboard</div>
                </div>
              </a>
              
              <a href="/register" className="group/item flex items-start gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
                <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
                  <UserPlus className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
                </div>
                <div className="mt-0.5">
                  <div className="font-semibold text-slate-800 group-hover/item:text-slate-900 mb-0.5 text-xs lg:text-sm">Create Account</div>
                  <div className="text-[12px] lg:text-[13px] text-slate-500 leading-snug">Create your free account</div>
                </div>
              </a>
              
              <a href="/#pricing" className="group/item flex items-start gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
                <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
                  <Share2 className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
                </div>
                <div className="mt-0.5">
                  <div className="font-semibold text-slate-800 group-hover/item:text-slate-900 mb-0.5 text-xs lg:text-sm">Referral Program</div>
                  <div className="text-[12px] lg:text-[13px] text-slate-500 leading-snug">Share and earn together</div>
                </div>
              </a>
              
              <a href="/contact" className="group/item flex items-start gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
                <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
                  <Gem className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
                </div>
                <div className="mt-0.5">
                  <div className="font-semibold text-slate-800 group-hover/item:text-slate-900 mb-0.5 text-xs lg:text-sm">Affiliate Program</div>
                  <div className="text-[12px] lg:text-[13px] text-slate-500 leading-snug">Earn commissions as partner</div>
                </div>
              </a>
              
              <a href="/contact" className="group/item flex items-start gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
                <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
                  <FileText className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
                </div>
                <div className="mt-0.5">
                  <div className="font-semibold text-slate-800 group-hover/item:text-slate-900 mb-0.5 text-xs lg:text-sm">Affiliate Policy</div>
                  <div className="text-[12px] lg:text-[13px] text-slate-500 leading-snug">Understand our policies</div>
                </div>
              </a>
            </div>
            
            {/* Column 2 */}
            <div className="flex flex-col gap-1 lg:gap-1">
              <a href="/contact" className="group/item flex items-start gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
                <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
                  <File className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
                </div>
                <div className="mt-0.5">
                  <div className="font-semibold text-slate-800 group-hover/item:text-slate-900 mb-0.5 text-xs lg:text-sm">Terms & Conditions</div>
                  <div className="text-[12px] lg:text-[13px] text-slate-500 leading-snug">Understand our terms</div>
                </div>
              </a>
              
              <a href="/contact" className="group/item flex items-start gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
                <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
                  <Shield className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
                </div>
                <div className="mt-0.5">
                  <div className="font-semibold text-slate-800 group-hover/item:text-slate-900 mb-0.5 text-xs lg:text-sm">Privacy Policy</div>
                  <div className="text-[12px] lg:text-[13px] text-slate-500 leading-snug">Understand data protection</div>
                </div>
              </a>
              
              <a href="/#pricing" className="group/item flex items-start gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
                <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
                  <DollarSign className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
                </div>
                <div className="mt-0.5">
                  <div className="font-semibold text-slate-800 group-hover/item:text-slate-900 mb-0.5 text-xs lg:text-sm">Refund Policy</div>
                  <div className="text-[12px] lg:text-[13px] text-slate-500 leading-snug">Review refund terms</div>
                </div>
              </a>
              
              <a href="/about" className="group/item flex items-start gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
                <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
                  <UserCheck className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
                </div>
                <div className="mt-0.5">
                  <div className="font-semibold text-slate-800 group-hover/item:text-slate-900 mb-0.5 text-xs lg:text-sm">GDPR</div>
                  <div className="text-[12px] lg:text-[13px] text-slate-500 leading-snug">Review GDPR information</div>
                </div>
              </a>
              
              <a href="/contact" className="group/item flex items-start gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
                <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
                  <Scale className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
                </div>
                <div className="mt-0.5">
                  <div className="font-semibold text-slate-800 group-hover/item:text-slate-900 mb-0.5 text-xs lg:text-sm">Legal</div>
                  <div className="text-[12px] lg:text-[13px] text-slate-500 leading-snug">Read legal policies</div>
                </div>
              </a>
            </div>

          </div>

          {/* Right Section (Card) */}
          <div className="col-span-1 lg:col-span-4 flex flex-col pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-100">
            <span className="text-xs text-slate-400 font-medium mb-2.5 block">What's New</span>
            
            <a href="/blog" className="relative overflow-hidden rounded-2xl p-5 lg:p-6 min-h-[180px] lg:min-h-[220px] flex flex-col justify-end group cursor-pointer border border-slate-800/80 block">
              <div className="absolute inset-0 bg-[url('/images/image5.webp')] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
              
              <h4 className="relative z-10 text-white font-bold text-sm lg:text-[15px] mb-1">Automation SaaS Changelog</h4>
              <p className="relative z-10 text-slate-300 text-[11px] lg:text-xs leading-relaxed">
                Access all your workflows, analytics, and integrations in one smart dashboard.
              </p>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};