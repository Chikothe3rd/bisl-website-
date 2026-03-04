/**
 * Hero component (refactored)
 * Main hero section with composed subcomponents
 * Mobile-first responsive design
 */

import { HERO_CONFIG } from "@/constants/hero";
import { HeroBackground } from "./HeroBackground";
import { HeroBadge } from "./HeroBadge";
import { HeroCTA } from "./HeroCTA";
import { HeroFeatures } from "./HeroFeatures";
import { HeroStats } from "./HeroStats";
import { ScrollIndicator } from "./ScrollIndicator";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 lg:pt-32 px-4 sm:px-6 bg-gradient-to-b from-blue-900 to-blue-600 text-white"
      aria-label="Hero section"
    >
      <HeroBackground />

      {/* Content */}
      <div className="container relative z-10 max-w-5xl">
        <div className="text-center sm:text-left">
          <HeroBadge />

          {/* Headline - Improved alignment and responsiveness */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 sm:mb-8 lg:mb-10 animate-fade-in animation-delay-100">
            {HERO_CONFIG.headline.split(" ").slice(0, 4).join(" ")} {" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
              {HERO_CONFIG.headline.split(" ").slice(4).join(" ")}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto sm:mx-0 animate-fade-in animation-delay-200">
            {HERO_CONFIG.subheadline}
          </p>

          <HeroCTA />
          <HeroFeatures features={HERO_CONFIG.features} />
        </div>

        <HeroStats />
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;
