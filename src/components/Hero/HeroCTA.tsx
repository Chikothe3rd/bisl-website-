/**
 * HeroCTA component
 * Call-to-action buttons for hero section
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const HeroCTA: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12 animate-fade-in animation-delay-300">
      <Button 
        variant="hero" 
        size="xl" 
        className="rounded-full group touch-target font-semibold"
        asChild
      >
        <a href="#contact" aria-label="Start your project with BISL">
          Start Your Project
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </a>
      </Button>
      <Button 
        variant="hero-outline" 
        size="xl" 
        className="rounded-full touch-target font-semibold"
        asChild
      >
        <a href="#services" aria-label="Explore our services">
          <Play className="w-5 h-5 mr-2" aria-hidden="true" />
          Explore Services
        </a>
      </Button>
    </div>
  );
};
