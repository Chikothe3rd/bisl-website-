/**
 * Hero section configuration
 * Centralized content for the hero component
 */

import { Shield, Zap, CheckCircle } from "lucide-react";
import { HeroConfig, Feature } from "@/types";

export const HERO_FEATURES: Feature[] = [
  { icon: Shield, text: "Enterprise Security" },
  { icon: Zap, text: "Fast Deployment" },
  { icon: CheckCircle, text: "24/7 Support" },
];

export const HERO_CONFIG: HeroConfig = {
  badge: {
    icon: "pulse",
    text: "Trusted Since 2014 • 500+ Projects Delivered",
  },
  headline: "Transform Your Business With Intelligent IT Solutions",
  subheadline:
    "From structured cabling to predictive analytics, BISL delivers enterprise-grade technology solutions that power growth across Zambia's leading organizations.",
  primaryCTA: {
    label: "Start Your Project",
    href: "#contact",
  },
  secondaryCTA: {
    label: "Explore Services",
    href: "#services",
  },
  features: HERO_FEATURES,
};
