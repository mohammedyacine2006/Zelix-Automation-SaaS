import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin, Dribbble } from 'lucide-react';

const BehanceIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.829 5.364 5.05h-7.77c.226 2.04 2.388 2.04 3.22 2.04 1.149 0 2.534-.376 3.079-1.033l1.306.538zm-1.89-3.707c-.059-1.304-1.149-1.942-2.336-1.942-1.382 0-2.316.638-2.613 1.942h4.949zM5.31 4h-5.31v14h5.31c2.114 0 3.325-1.041 3.325-2.674 0-1.879-1.121-2.454-2.222-2.731 1.226-.214 2.008-1.134 2.008-2.378 0-1.632-1.226-2.217-3.111-2.217zm0 10.439h-2.128v-3.738h2.128c.928 0 1.545.342 1.545 1.869 0 1.528-.617 1.869-1.545 1.869zm-.437-5.466h-1.691v-3.149h1.691c.71 0 1.341.258 1.341 1.575 0 1.316-.631 1.574-1.341 1.574z"/>
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer 
      className="pt-12 sm:pt-20 pb-8 sm:pb-10 text-slate-600 relative overflow-hidden"
      style={{
        backgroundColor: '#FAFAFD',
        backgroundImage: `
          radial-gradient(ellipse 60% 50% at 10% 20%, rgba(99, 102, 241, 0.35), transparent 70%),
          radial-gradient(ellipse 55% 45% at 90% 15%, rgba(244, 114, 182, 0.4), transparent 70%),
          radial-gradient(ellipse 40% 40% at 50% 30%, rgba(192, 132, 252, 0.2), transparent 70%)
        `
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 lg:gap-8 mb-12 sm:mb-16">
          
          {/* Brand Col */}
          <div className="col-span-2 md:col-span-12 lg:col-span-4 flex flex-col items-start lg:pr-8 mb-4 lg:mb-0">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="font-black text-3xl sm:text-4xl leading-none tracking-tighter">
                <span className="text-slate-900">Zel</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-violet-500">ix</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm mb-6 mt-1">
              Zelix helps teams automate workflows, connect the apps they already use, and ship faster—without piling on complexity.
            </p>
            <div className="flex items-center flex-wrap gap-2.5 sm:gap-3">
              <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-slate-200/50 text-slate-500 hover:text-white hover:bg-slate-900 transition-all duration-200">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-slate-200/50 text-slate-500 hover:text-white hover:bg-slate-900 transition-all duration-200">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Youtube" className="p-2 rounded-full bg-slate-200/50 text-slate-500 hover:text-white hover:bg-slate-900 transition-all duration-200">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Linkedin" className="p-2 rounded-full bg-slate-200/50 text-slate-500 hover:text-white hover:bg-slate-900 transition-all duration-200">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Dribbble" className="p-2 rounded-full bg-slate-200/50 text-slate-500 hover:text-white hover:bg-slate-900 transition-all duration-200">
                <Dribbble className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Behance" className="p-2 rounded-full bg-slate-200/50 text-slate-500 hover:text-white hover:bg-slate-900 transition-all duration-200">
                <BehanceIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Company */}
          <div className="col-span-1 md:col-span-4 lg:col-span-3">
            <h4 className="font-semibold text-slate-900 text-sm sm:text-base mb-4 sm:mb-6">
              Company
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-slate-500">
              <li><a href="/about" className="hover:text-slate-900 transition-colors">About Us</a></li>
              <li><a href="/team" className="hover:text-slate-900 transition-colors">Career & Team</a></li>
              <li><a href="/features" className="hover:text-slate-900 transition-colors">Why Choose Us</a></li>
              <li><a href="/about" className="hover:text-slate-900 transition-colors">Our Manifesto</a></li>
              <li><a href="/contact" className="hover:text-slate-900 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Support */}
          <div className="col-span-1 md:col-span-4 lg:col-span-2">
            <h4 className="font-semibold text-slate-900 text-sm sm:text-base mb-4 sm:mb-6">
              Support
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-slate-500">
              <li><a href="/#faqs" className="hover:text-slate-900 transition-colors">FAQ</a></li>
              <li><a href="/features" className="hover:text-slate-900 transition-colors">Documentation</a></li>
              <li><a href="/blog" className="hover:text-slate-900 transition-colors">Tutorials & Blog</a></li>
              <li><a href="/contact" className="hover:text-slate-900 transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Col 4: Legal Policies */}
          <div className="col-span-2 md:col-span-4 lg:col-span-3">
            <h4 className="font-semibold text-slate-900 text-sm sm:text-base mb-4 sm:mb-6">
              Legal Policies
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-slate-500">
              <li><a href="/contact" className="hover:text-slate-900 transition-colors">Terms & Conditions</a></li>
              <li><a href="/contact" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
              <li><a href="/#pricing" className="hover:text-slate-900 transition-colors">Refund Policy</a></li>
              <li><a href="/about" className="hover:text-slate-900 transition-colors">GDPR Compliance</a></li>
              <li><a href="/contact" className="hover:text-slate-900 transition-colors">Affiliate Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="border-t border-slate-200/80 mt-8 sm:mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-medium gap-3 sm:gap-0">
          <p>© 2026 Zelix. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/contact" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="/contact" className="hover:text-slate-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};