import React from 'react';
import { Info, Star, Settings, Users, Edit3, Phone } from 'lucide-react';

export const InnerPagesMenu: React.FC = () => {
  return (
    <div className="
      lg:absolute lg:top-[43px] lg:pt-[20px] lg:left-1/2 lg:-translate-x-1/2 lg:w-64 
      lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible 
      lg:transition-all lg:duration-300 lg:transform lg:translate-y-4 lg:group-hover:translate-y-0 
      lg:z-50 w-full
    ">
      <div className="
        bg-transparent lg:bg-white 
        border-0 lg:border lg:border-slate-200/80 
        rounded-2xl lg:rounded-[2rem] 
        shadow-none lg:shadow-2xl lg:shadow-slate-900/10 
        p-0 lg:p-4 
        flex flex-col gap-1
      ">
        
        <a href="/about" className="group/item flex items-center gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
          <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
            <Info className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
          </div>
          <span className="font-semibold text-slate-800 group-hover/item:text-slate-900 text-sm">About us</span>
        </a>

        <a href="/features" className="group/item flex items-center gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
          <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
            <Star className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
          </div>
          <span className="font-semibold text-slate-800 group-hover/item:text-slate-900 text-sm">Features</span>
        </a>

        <a href="/services" className="group/item flex items-center gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
          <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
            <Settings className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
          </div>
          <span className="font-semibold text-slate-800 group-hover/item:text-slate-900 text-sm">Services</span>
        </a>

        <a href="/team" className="group/item flex items-center gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
          <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
            <Users className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
          </div>
          <span className="font-semibold text-slate-800 group-hover/item:text-slate-900 text-sm">Team</span>
        </a>

        <a href="/blog" className="group/item flex items-center gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
          <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
            <Edit3 className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
          </div>
          <span className="font-semibold text-slate-800 group-hover/item:text-slate-900 text-sm">Blog</span>
        </a>

        <a href="/contact" className="group/item flex items-center gap-3.5 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-100/80 lg:hover:bg-slate-50/80 transition-all cursor-pointer">
          <div className="border border-slate-200 rounded-lg p-2 text-slate-500 group-hover/item:text-slate-900 bg-white transition-colors shrink-0 shadow-sm lg:shadow-none">
            <Phone className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
          </div>
          <span className="font-semibold text-slate-800 group-hover/item:text-slate-900 text-sm">Contact</span>
        </a>

      </div>
    </div>
  );
};