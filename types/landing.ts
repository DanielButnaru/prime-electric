export type CTAVariant = 'primary' | 'secondary' | 'ghost';

export interface CTA {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: CTAVariant;
}

export interface Feature {
  id: string;
  title: string;
  description?: string;
  icon?: string; // url or icon name
  href?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  avatarUrl?: string;
  rating?: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  ctaLabel?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
