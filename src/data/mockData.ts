import { NavItem, BentoCardItem, PricingPlan, TestimonialItem, FaqItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  {
    id: 'features',
    label: 'Platform',
    href: '#features',
    hasDropdown: true,
    dropdownItems: [
      {
        title: 'Autonomous Agents',
        description: 'Multi-agent orchestration with self-correcting memory loops.',
        iconName: 'Bot',
        badge: 'v3.0',
        href: '#features'
      },
      {
        title: 'Vector RAG Engine',
        description: 'Sub-10ms semantic document search across multi-terabyte knowledge graphs.',
        iconName: 'Database',
        badge: 'Ultra Fast',
        href: '#features'
      },
      {
        title: 'Visual Workflow Studio',
        description: 'Drag-and-drop node graph canvas to link LLMs, webhooks, and databases.',
        iconName: 'Workflow',
        href: '#features'
      },
      {
        title: 'Enterprise Guardrails',
        description: 'SOC2 Type II compliance, PII redaction, and strict API key isolation.',
        iconName: 'ShieldCheck',
        badge: 'SOC2',
        href: '#features'
      }
    ]
  },
  { id: 'pricing', label: 'Pricing', href: '#pricing' },
  { id: 'testimonials', label: 'Case Studies', href: '#testimonials' },
  { id: 'faq', label: 'FAQ', href: '#faq' }
];

export const BENTO_CARDS: BentoCardItem[] = [
  {
    id: 'latency',
    title: 'Sub-150ms Instant Inference Engine',
    subtitle: 'Edge-distributed model caching with zero-cold-start acceleration across 32 global points of presence.',
    badge: '10x Speed',
    colSpan: 'col-span-12 lg:col-span-8',
    type: 'latency'
  },
  {
    id: 'security',
    title: 'SOC2 & HIPAA Compliant Guardrails',
    subtitle: 'Automatic PII redaction, real-time prompt injection blocking, and encrypted memory storage.',
    badge: 'Enterprise Security',
    colSpan: 'col-span-12 lg:col-span-4',
    type: 'security'
  },
  {
    id: 'agents',
    title: 'Autonomous Multi-Agent Swarms',
    subtitle: 'Deploy collaborative specialized agents (Coder, Auditor, Searcher) that self-correct and verify results before execution.',
    badge: 'Multi-Agent',
    colSpan: 'col-span-12 lg:col-span-5',
    type: 'agents'
  },
  {
    id: 'fine-tuning',
    title: '1-Click Model Fine-Tuning & Distillation',
    subtitle: 'Distill frontier model capabilities into compact 8B parameter models running at a fraction of the cost.',
    badge: 'Cost Saver',
    colSpan: 'col-span-12 lg:col-span-7',
    type: 'fine-tuning'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Developer',
    description: 'Perfect for solo founders, indie hackers, and early-stage prototypes.',
    priceMonthly: 29,
    priceAnnual: 24,
    features: [
      'Up to 250,000 AI Agent Executions / mo',
      'Gemini 2.5 Flash Inference API Access',
      '3 Autonomous Agent Workflows',
      '10 GB Vector Database RAG Storage',
      'Community Slack & Email Support',
      'Standard 99.9% Uptime SLA'
    ],
    ctaText: 'Start 14-Day Free Trial',
    accentColor: 'border-slate-800'
  },
  {
    id: 'pro',
    name: 'Growth Pro',
    badge: 'Most Popular Choice',
    popular: true,
    description: 'Designed for fast-growing SaaS startups and product engineering teams.',
    priceMonthly: 89,
    priceAnnual: 71,
    features: [
      'Up to 2,500,000 AI Agent Executions / mo',
      'Gemini 2.5 Flash & Pro Full Multi-Modal Suite',
      'Unlimited Visual Workflow Studio Pipelines',
      '100 GB Vector Database RAG Storage',
      'SOC2 Type II Security Guardrails & PII Masking',
      'Dedicated Slack Connect Channel & Priority 1h SLA',
      'Custom Model Fine-Tuning Pipelines'
    ],
    ctaText: 'Start 14-Day Free Trial',
    accentColor: 'border-lime-500/50 shadow-[0_0_30px_rgba(132,204,22,0.25)]'
  },
  {
    id: 'enterprise',
    name: 'Scale Enterprise',
    badge: 'Custom Architecture',
    description: 'For Fortune 500 enterprises requiring dedicated VPC, custom SLAs, and custom LLMs.',
    priceMonthly: 299,
    priceAnnual: 239,
    features: [
      'Unlimited AI Executions & Custom Model Endpoints',
      'Dedicated On-Premise / Hybrid Cloud VPC Deployment',
      'Sub-50ms Custom Model Latency Acceleration',
      'Unlimited Vector Database RAG Storage',
      'HIPAA, GDPR & Custom Compliance Frameworks',
      '24/7 Dedicated AI Architect & Solutions Support',
      'Custom SLA Guarantee with 99.99% Uptime'
    ],
    ctaText: 'Book Enterprise Consultation',
    accentColor: 'border-cyan-500/50'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'VP of Product Engineering',
    company: 'FinPulse Systems',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
    rating: 5,
    quote: 'Zelix.AI transformed our customer underwriting workflow. What used to take 3 days of manual document auditing is now executed autonomously in 4 seconds with 99.8% precision.',
    metrics: '99.8% Precision • 85% Cost Reduction',
    category: 'fintech'
  },
  {
    id: '2',
    name: 'Marcus Vance',
    role: 'Chief Technology Officer',
    company: 'DevFlow Cloud',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250',
    rating: 5,
    quote: 'The visual workflow builder and multi-agent orchestration are miles ahead of anything else on the market. We shipped 6 AI capabilities in 2 weeks.',
    metrics: '6x Faster Delivery • 142ms Latency',
    category: 'startups'
  },
  {
    id: '3',
    name: 'Elena Rostova',
    role: 'Head of AI Operations',
    company: 'HyperScale Health',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250',
    rating: 5,
    quote: 'The SOC2 compliance guardrails and instant PII masking gave our legal team 100% confidence to roll out AI agents to 50,000 healthcare workers.',
    metrics: '50k Active Users • Zero Compliance Breaches',
    category: 'enterprise'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'How does Zelix.AI compare to raw LLM API integrations?',
    answer: 'While raw API calls require you to build complex retry logic, vector storage, agent orchestration, prompt injection defenses, and state management from scratch, Zelix.AI gives you an end-to-end production platform. You get visual workflow builders, sub-150ms inference caching, multi-agent collaboration, and enterprise compliance out-of-the-box.'
  },
  {
    id: 'faq-2',
    category: 'Security & Privacy',
    question: 'Is my data used to train public foundation models?',
    answer: 'No, never. Your data and telemetry are isolated within your dedicated tenant vault. Zelix.AI strictly enforces zero-data-retention policies on foundation provider APIs and all RAG vector embeddings are encrypted at rest with custom KMS keys.'
  },
  {
    id: 'faq-3',
    category: 'Billing',
    question: 'Can I change my subscription plan or scale seats at any time?',
    answer: 'Yes! You can upgrade, downgrade, or adjust seat limits instantly from your account dashboard. Upgrades are prorated immediately, and unused credits roll over to subsequent months.'
  },
  {
    id: 'faq-4',
    category: 'Technical',
    question: 'How easy is it to integrate Zelix.AI with our existing stack?',
    answer: 'Integration takes less than 5 minutes. We provide standard TypeScript, Python, and REST SDKs, plus pre-built connectors for PostgreSQL, Snowflake, GitHub, Slack, Hubspot, and Salesforce.'
  },
  {
    id: 'faq-5',
    category: 'Performance',
    question: 'What happens if our API traffic spikes unexpectedly?',
    answer: 'Zelix.AI automatically scales across our multi-region global cluster with automatic rate-limit smoothing and failover routing, guaranteeing 99.99% operational uptime even during 100x traffic surges.'
  }
];

export const TRUST_LOGOS = [
  { name: 'Vercel', logo: '▲ Vercel' },
  { name: 'Stripe', logo: 'S Stripe' },
  { name: 'Supabase', logo: '⚡ Supabase' },
  { name: 'OpenAI', logo: '◎ OpenAI' },
  { name: 'Figma', logo: '❖ Figma' },
  { name: 'Linear', logo: '◈ Linear' },
  { name: 'Ramp', logo: '✦ Ramp' }
];
