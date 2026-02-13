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
      className="relative min-h-screen flex items-center overflow-hidden pt-20 sm:pt-24 lg:pt-32 px-4 sm:px-6"
      aria-label="Hero section"
    >
      <HeroBackground />

      {/* Content */}
      <div className="container relative z-10 max-w-5xl">
        <div className="text-center sm:text-left">
          <HeroBadge />

          {/* Headline - Responsive alignment: center on mobile, left on desktop */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-display font-bold text-foreground leading-[1.1] mb-6 sm:mb-8 lg:mb-10 animate-fade-in animation-delay-100 text-balance max-w-3xl">
            {HERO_CONFIG.headline.split(" ").slice(0, 4).join(" ")}{" "}
            <span className="gradient-text-accent">
              {HERO_CONFIG.headline.split(" ").slice(4).join(" ")}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-muted-foreground leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-2xl animate-fade-in animation-delay-200 text-balance">
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
