/**
 * HeroFeatures component
 * Displays feature badges with icons
 */

import { Feature } from "@/types";

interface HeroFeaturesProps {
  features: Feature[];
}

export const HeroFeatures: React.FC<HeroFeaturesProps> = ({ features }) => {
  return (
    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex items-center gap-2.5 bg-card/80 backdrop-blur-sm px-4 py-2.5 rounded-full border border-border/50 shadow-soft"
        >
          <feature.icon className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-foreground">{feature.text}</span>
        </div>
      ))}
    </div>
  );
};
