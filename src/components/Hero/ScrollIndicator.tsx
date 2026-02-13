/**
 * ScrollIndicator component
 * Animated scroll indicator for hero section
 */

export const ScrollIndicator: React.FC = () => {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden lg:flex flex-col items-center gap-2">
      <span className="text-xs text-muted-foreground font-medium tracking-wide">
        Discover what's next
      </span>
      <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1.5">
        <div className="w-1.5 h-2.5 bg-accent rounded-full animate-pulse-soft" />
      </div>
    </div>
  );
};
