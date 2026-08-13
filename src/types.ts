export type ThemeMode = 'dark' | 'light';

export interface NavItem {
  id: string;
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: {
    title: string;
    description: string;
    iconName: string;
    badge?: string;
    href: string;
  }[];
}

export interface BentoCardItem {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  colSpan: string;
  type: 'latency' | 'agents' | 'fine-tuning' | 'security' | 'vector-db' | 'multi-modal';
}

export interface WorkflowNode {
  id: string;
  label: string;
  type: 'trigger' | 'agent' | 'rag' | 'action';
  icon: string;
  status: 'idle' | 'running' | 'success' | 'error';
  config: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  description: string;
  priceMonthly: number;
  priceAnnual: number;
  features: string[];
  ctaText: string;
  accentColor: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  metrics: string;
  category: 'enterprise' | 'startups' | 'fintech' | 'growth';
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}
