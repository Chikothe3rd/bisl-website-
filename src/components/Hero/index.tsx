/**
 * Hero component
 * Clean, modern, responsive landing page hero section with video background
 */

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO_CONFIG } from "@/constants/hero";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect fill='%23f0f9ff' width='1200' height='800'/%3E%3C/svg%3E"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Gradient Overlays for Modern Look */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 z-10" />
      
      {/* Modern Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-500/10 to-transparent z-10" />

      {/* Content */}
      <div className="w-full max-w-5xl relative z-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold mb-8 hover:bg-white/20 transition-all">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" aria-hidden="true" />
            {HERO_CONFIG.badge.text}
          </div>

          {/* Main Headline - White Text on Video */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight drop-shadow-lg">
            {HERO_CONFIG.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 leading-relaxed mb-10 max-w-3xl mx-auto drop-shadow-md">
            {HERO_CONFIG.subheadline}
          </p>

          {/* CTA Buttons - Modern Style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              variant="default" 
              size="lg"
              className="rounded-full px-8 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
              className="rounded-full px-8 border-2 border-white text-white hover:bg-white/10 font-semibold backdrop-blur-sm transition-all duration-300"
              asChild
            >
              <a href="#services">Explore Services</a>
            </Button>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {HERO_CONFIG.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-all">
                <feature.icon className="w-4 h-4 text-blue-300" aria-hidden="true" />
                <span className="text-sm font-medium text-white">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Stats - Modern Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-white/20">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-blue-300">100+</div>
              <p className="text-sm md:text-base text-gray-100 mt-1">Enterprise Clients</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-blue-300">10+</div>
              <p className="text-sm md:text-base text-gray-100 mt-1">Years Experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-blue-300">99.9%</div>
              <p className="text-sm md:text-base text-gray-100 mt-1">Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
