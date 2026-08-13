import React from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronRight, Play } from 'lucide-react';
import CTASection from '../components/CTASection';

const articles = [
  {
    id: 1,
    title: 'Streamline Multi-Agent Workflows in Minutes vs. Manual Operations',
    category: 'Workflow Automation',
    author: 'Zelix Team',
    date: 'August 4, 2026',
    comments: '0 Comments',
    image: '/images/image31.webp',
    isVideo: true,
    excerpt: 'Discover how automated trigger pipelines and autonomous AI agents eliminate repetitive tasks, cut human error, and accelerate core business processing time by up to 10x.'
  },
  {
    id: 2,
    title: 'Top 2026 Enterprise Automation Trends & Infrastructure Best Practices',
    category: 'AI Integration',
    author: 'Zelix Team',
    date: 'July 28, 2026',
    comments: '3 Comments',
    image: '/images/image32.webp',
    isVideo: false,
    excerpt: 'Explore the latest advancements in modern cloud automation, event-driven webhook architectures, and custom API connectors built for modern engineering teams.'
  },
  {
    id: 3,
    title: 'Why High-Growth Teams Rely on Secure, End-to-End Orchestration',
    category: 'Security & Scale',
    author: 'Zelix Team',
    date: 'July 18, 2026',
    comments: '0 Comments',
    image: '/images/image33.webp',
    isVideo: false,
    excerpt: 'Learn how SOC-2 compliant encryption and granular permission controls allow scaling enterprises to automate sensitive financial and customer workflows safely.'
  }
];

const latestNews = [
  { id: 1, title: 'Streamline Multi-Agent Workflows in Minutes', date: 'August 4, 2026', image: '/images/image31.webp' },
  { id: 2, title: 'Top 2026 Enterprise Automation Trends', date: 'July 28, 2026', image: '/images/image32.webp' },
  { id: 3, title: 'Why Teams Rely on Secure Orchestration', date: 'July 18, 2026', image: '/images/image33.webp' }
];

const categories = [
  'AI Workflow Automation',
  'Custom API Integrations',
  'No-Code & Low-Code Pipelines',
  'Enterprise Cloud Security',
  'Data Extraction & Webhooks',
  'Developer Tooling'
];

const tags = ['Automation', 'AI Agents', 'Workflows', 'SaaS', 'Webhooks', 'APIs', 'DevOps'];

export const BlogPage: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-32 pb-0 w-full min-h-screen flex flex-col items-center bg-[#F4F5F7] overflow-x-hidden">
      
      {/* Hero Header Section */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full pt-6 md:pt-8 pb-8 sm:pb-12 flex flex-col items-center justify-center text-center px-4"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#f0f4f9] border border-slate-200/60 shadow-sm mb-4 sm:mb-6 transition-transform hover:scale-105 cursor-default"
        >
          <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#0d1322] flex items-center justify-center">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white"></span>
          </span>
          <span className="text-xs sm:text-sm font-medium text-[#111827] tracking-tight">Blog</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#0f172a] tracking-tight leading-tight mb-4 sm:mb-6 max-w-4xl"
        >
          Stay ahead with automation insights
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-[#64748b] max-w-2xl leading-relaxed px-2"
        >
          Practical guides on workflows, integrations, operations, and AI-powered execution for modern teams.
        </motion.p>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Feed Column */}
          <div className="lg:col-span-8 space-y-10 sm:space-y-16">
            {articles.map((article, index) => (
              <motion.article 
                key={article.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              >
                {/* Image Frame */}
                <div className="relative overflow-hidden rounded-[20px] sm:rounded-[28px] aspect-[16/9] mb-5 sm:mb-6 shadow-sm border border-slate-200/60 group cursor-pointer">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {article.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg"
                      >
                        <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-1" fill="currentColor" />
                      </motion.div>
                    </div>
                  )}
                </div>

                {/* Metadata Pill - Fixed Responsiveness */}
                <div className="inline-flex flex-wrap items-center gap-x-2.5 gap-y-1.5 px-4 sm:px-5 py-2 bg-[#0F172A] text-white text-xs sm:text-sm font-medium rounded-2xl sm:rounded-full mb-4 shadow-sm max-w-full">
                  <span className="text-violet-400 font-semibold">{article.category}</span>
                  <span className="hidden sm:inline w-1 h-1 rounded-full bg-slate-500"></span>
                  <span className="text-slate-300">{article.author}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  <span className="text-slate-300">{article.date}</span>
                  <span className="hidden xs:inline w-1 h-1 rounded-full bg-slate-500"></span>
                  <span className="text-slate-400 hidden xs:inline">{article.comments}</span>
                </div>

                {/* Title & Excerpt */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 leading-snug hover:text-violet-600 transition-colors cursor-pointer mb-3">
                  {article.title}
                </h2>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 max-w-2xl">
                  {article.excerpt}
                </p>

                {/* Read More Button */}
                <button className="group relative flex items-center h-[42px] sm:h-[46px] w-[150px] sm:w-[160px] bg-[#0F172A] rounded-full text-white font-medium text-xs sm:text-sm shadow-sm hover:bg-slate-800 transition-colors overflow-hidden cursor-pointer">
                  <div className="absolute left-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-violet-600 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-[104px] sm:group-hover:translate-x-[112px]">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                  <span className="w-full text-center pl-7 sm:pl-8 pr-2 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-x-4">
                    Read More
                  </span>
                </button>
              </motion.article>
            ))}
          </div>

          {/* Right Sidebar Column */}
          <div className="lg:col-span-4 space-y-6 sm:space-y-8 lg:sticky lg:top-24 w-full">
            
            {/* Search Widget */}
            <motion.div 
              className="bg-white rounded-[20px] sm:rounded-[24px] p-5 sm:p-8 border border-slate-200/60 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="relative flex items-center">
                <input 
                  type="text" 
                  placeholder="Enter keywords..."
                  className="w-full h-11 sm:h-12 pl-4 pr-10 rounded-full bg-[#F4F5F7] border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all"
                />
                <Search className="absolute right-4 w-4 h-4 text-slate-400" />
              </div>
            </motion.div>

            {/* Categories Widget */}
            <motion.div 
              className="bg-white rounded-[20px] sm:rounded-[24px] p-5 sm:p-8 border border-slate-200/60 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">Categories</h3>
              <div className="h-0.5 w-8 bg-violet-600 mb-4"></div>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index} className="flex items-center gap-3 group cursor-pointer">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-violet-600 transition-colors"></span>
                    <span className="text-xs sm:text-sm font-medium text-slate-600 group-hover:text-violet-600 transition-colors">{category}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Latest News Widget */}
            <motion.div 
              className="bg-white rounded-[20px] sm:rounded-[24px] p-5 sm:p-8 border border-slate-200/60 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">Latest News</h3>
              <div className="h-0.5 w-8 bg-violet-600 mb-4"></div>
              <div className="space-y-4">
                {latestNews.map((news) => (
                  <div key={news.id} className="flex gap-3.5 sm:gap-4 items-center group cursor-pointer">
                    <div className="overflow-hidden rounded-xl w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0">
                      <img 
                        src={news.image} 
                        alt={news.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] sm:text-xs text-slate-400 mb-0.5">{news.date}</p>
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-800 line-clamp-2 group-hover:text-violet-600 transition-colors leading-snug">
                        {news.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tags Widget */}
            <motion.div 
              className="bg-white rounded-[20px] sm:rounded-[24px] p-5 sm:p-8 border border-slate-200/60 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">Tags</h3>
              <div className="h-0.5 w-8 bg-violet-600 mb-4"></div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 sm:px-4 py-1.5 rounded-full bg-[#F4F5F7] border border-slate-200/80 text-xs font-medium text-slate-700 hover:bg-[#0F172A] hover:text-white transition-all cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Newsletter Widget */}
            <motion.div 
              className="bg-white rounded-[20px] sm:rounded-[24px] p-5 sm:p-8 border border-slate-200/60 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">Stay ahead with insights</h3>
              <div className="h-0.5 w-8 bg-violet-600 mb-4"></div>
              <p className="text-xs sm:text-sm text-slate-500 mb-5 leading-relaxed">
                Get expert workflow breakdown guides and updates delivered straight to your inbox.
              </p>
              <form className="space-y-3 sm:space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full h-11 sm:h-12 px-4 rounded-full bg-[#F4F5F7] border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all"
                />
                <button className="group relative flex items-center h-[42px] sm:h-[46px] w-full bg-[#0F172A] rounded-full text-white font-medium text-xs sm:text-sm shadow-sm hover:bg-slate-800 transition-colors overflow-hidden cursor-pointer">
                  <div className="absolute left-1.5 group-hover:left-[calc(100%-36px)] sm:group-hover:left-[calc(100%-40px)] w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-violet-600 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                  <span className="w-full text-center transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-x-3">
                    Subscribe Now
                  </span>
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
      
      <CTASection />
    </div>
  );
};