/**
 * HeroCTA component
 * Call-to-action buttons for hero section
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const HeroCTA: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in animation-delay-300">
      <Button variant="hero" size="xl" className="rounded-full group" asChild>
        <a href="#contact">
          Start Your Project
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </a>
      </Button>
      <Button variant="hero-outline" size="xl" className="rounded-full" asChild>
        <a href="#services">
          <Play className="w-5 h-5 mr-1" />
          Explore Services
        </a>
      </Button>
    </div>
  );
};
