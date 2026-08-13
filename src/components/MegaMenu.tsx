import React from 'react';
import { 
  Info, Users, Briefcase, HelpCircle, 
  Edit3, Clipboard, MessageSquare, Search, 
  Settings, Lightbulb, Code
} from 'lucide-react';

export const MegaMenu: React.FC = () => {
  return (
    <div className="
      lg:fixed lg:top-[60px] lg:pt-[20px] lg:left-1/2 lg:-translate-x-1/2 lg:w-full lg:max-w-[850px] 
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
        
        {/* Links Grid (Stack on mobile, 3 cols on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-2 lg:gap-y-2">
          
          {/* Col 1 */}
          <div className="flex flex-col gap-1 lg:gap-1 border-b lg:border-b-0 border-slate-100 pb-2 lg:pb-0 mb-2 lg:mb-0">
            <a href="/vision" className="group/item flex items-start gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
              <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
                <Edit3 className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
              </div>
              <div className="mt-0.5">
                <div className="font-semibold text-slate-800 group-hover/item:text-slate-900 mb-0.5 text-xs lg:text-sm">Our Vision</div>
                <div className="text-[12px] lg:text-[13px] text-slate-500 leading-snug">Our values and principles</div>
              </div>
            </a>
            
            <a href="/leadership" className="group/item flex items-start gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
              <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
                <Users className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
              </div>
              <div className="mt-0.5">
                <div className="font-semibold text-slate-800 group-hover/item:text-slate-900 mb-0.5 text-xs lg:text-sm">Leadership</div>
                <div className="text-[12px] lg:text-[13px] text-slate-500 leading-snug">Dynamic content solutions</div>
              </div>
            </a>
            
            <a href="/offerings" className="group/item flex items-start gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
              <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
                <Settings className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
              </div>
              <div className="mt-0.5">
                <div className="font-semibold text-slate-800 group-hover/item:text-slate-900 mb-0.5 text-xs lg:text-sm">Offerings</div>
                <div className="text-[12px] lg:text-[13px] text-slate-500 leading-snug">Our services and offerings</div>
              </div>
            </a>
            
            <a href="/company" className="group/item flex items-start gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
              <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
                <Info className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
              </div>
              <div className="mt-0.5">
                <div className="font-semibold text-slate-800 group-hover/item:text-slate-900 mb-0.5 text-xs lg:text-sm">The Company</div>
                <div className="text-[12px] lg:text-[13px] text-slate-500 leading-snug">See how others are using our platform</div>
              </div>
            </a>
          </div>
          
          {/* Col 2 */}
          <div className="flex flex-col gap-1 lg:gap-1 border-b lg:border-b-0 border-slate-100 pb-2 lg:pb-0 mb-2 lg:mb-0">
            <a href="/why-zelix" className="group/item flex items-start gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
              <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
                <HelpCircle className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
              </div>
              <div className="mt-0.5">
                <div className="font-semibold text-slate-800 group-hover/item:text-slate-900 mb-0.5 text-xs lg:text-sm">Why Zelix</div>
                <div className="text-[12px] lg:text-[13px] text-slate-500 leading-snug">Unique points and competitive advantages</div>
              </div>
            </a>
            
            <a href="/careers" className="group/item flex items-start gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
              <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
                <Briefcase className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
              </div>
              <div className="mt-0.5">
                <div className="font-semibold text-slate-800 group-hover/item:text-slate-900 mb-0.5 text-xs lg:text-sm">Careers</div>
                <div className="text-[12px] lg:text-[13px] text-slate-500 leading-snug">Join our dynamic team</div>
              </div>
            </a>
            
            <a href="/stories" className="group/item flex items-start gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
              <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
                <Clipboard className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
              </div>
              <div className="mt-0.5">
                <div className="font-semibold text-slate-800 group-hover/item:text-slate-900 mb-0.5 text-xs lg:text-sm">Success Stories</div>
                <div className="text-[12px] lg:text-[13px] text-slate-500 leading-snug">Success stories and testimonials</div>
              </div>
            </a>
            
            <a href="/uses" className="group/item flex items-start gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
              <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
                <Lightbulb className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
              </div>
              <div className="mt-0.5">
                <div className="font-semibold text-slate-800 group-hover/item:text-slate-900 mb-0.5 text-xs lg:text-sm">Real-world Uses</div>
                <div className="text-[12px] lg:text-[13px] text-slate-500 leading-snug">Real-world examples of our solutions</div>
              </div>
            </a>
          </div>
          
          {/* Col 3 */}
          <div className="flex flex-col gap-1 lg:gap-1">
            <a href="/success" className="group/item flex items-start gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
              <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
                <MessageSquare className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
              </div>
              <div className="mt-0.5">
                <div className="font-semibold text-slate-800 group-hover/item:text-slate-900 mb-0.5 text-xs lg:text-sm">Client Success</div>
                <div className="text-[12px] lg:text-[13px] text-slate-500 leading-snug">What our customers say about us</div>
              </div>
            </a>
            
            <a href="/use-cases" className="group/item flex items-start gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
              <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
                <Search className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
              </div>
              <div className="mt-0.5">
                <div className="font-semibold text-slate-800 group-hover/item:text-slate-900 mb-0.5 text-xs lg:text-sm">Use Cases</div>
                <div className="text-[12px] lg:text-[13px] text-slate-500 leading-snug">Real-world examples of our solutions</div>
              </div>
            </a>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};