/**
 * HeroBackground component
 * Video background with gradient overlays
 */

import heroVideo from "@/assets/hero-video.mp4";

export const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        poster="/placeholder.svg"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
    </div>
  );
};
