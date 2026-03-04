/**
 * Hero component
 * Clean, simple, responsive landing page hero section
 */

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO_CONFIG } from "@/constants/hero";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-white py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Hero section"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-blue-50" />

      {/* Content */}
      <div className="w-full max-w-5xl">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500" aria-hidden="true" />
            {HERO_CONFIG.badge.text}
          </div>

          {/* Main Headline - Blue Text */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-blue-900 leading-tight mb-6 tracking-tight">
            {HERO_CONFIG.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
            {HERO_CONFIG.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              variant="default" 
              size="lg"
              className="rounded-full px-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-full px-8 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold"
              asChild
            >
              <a href="#services">Explore Services</a>
            </Button>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {HERO_CONFIG.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg border border-blue-200">
                <feature.icon className="w-4 h-4 text-blue-600" aria-hidden="true" />
                <span className="text-sm font-medium text-blue-900">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-gray-200">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600">100+</div>
              <p className="text-sm md:text-base text-gray-600 mt-1">Enterprise Clients</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600">10+</div>
              <p className="text-sm md:text-base text-gray-600 mt-1">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600">99.9%</div>
              <p className="text-sm md:text-base text-gray-600 mt-1">Uptime</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:flex flex-col items-center gap-2">
        <span className="text-xs text-gray-400 font-medium">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-blue-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
