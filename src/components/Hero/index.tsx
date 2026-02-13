/**
 * Hero component (refactored)
 * Main hero section with composed subcomponents
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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <HeroBackground />

      {/* Content */}
      <div className="container relative z-10 pt-28 pb-20">
        <div className="max-w-3xl">
          <HeroBadge />

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-display font-bold text-foreground leading-[1.1] mb-8 animate-fade-in animation-delay-100">
            {HERO_CONFIG.headline.split(" ").slice(0, 4).join(" ")}{" "}
            <span className="gradient-text-accent">
              {HERO_CONFIG.headline.split(" ").slice(4).join(" ")}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl animate-fade-in animation-delay-200 text-balance">
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
