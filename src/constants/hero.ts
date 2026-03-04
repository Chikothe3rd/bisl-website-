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
    text: "Trusted Since 2016 • 100+ Projects Delivered",
  },
  headline: "Enterprise IT Built for Zambia",
  subheadline:
    "Networks that don't fail. Security systems that work. IT infrastructure you can count on. We've built technology for Zambia's biggest banks, hospitals, and organizations.",
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
