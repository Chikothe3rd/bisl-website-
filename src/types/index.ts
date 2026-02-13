/**
 * Global type definitions for the application
 */

export interface NavLink {
  to: string;
  label: string;
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

export interface PageConfig {
  path: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  phone: string;
  email?: string;
  address?: string;
}

export interface HeroConfig {
  badge: {
    icon: string;
    text: string;
  };
  headline: string;
  subheadline: string;
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA: {
    label: string;
    href: string;
  };
  features: Feature[];
}
