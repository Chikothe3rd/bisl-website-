/**
 * HeroStats component
 * Stats cards displayed on desktop
 */

interface StatCard {
  value: string;
  label: string;
  variant?: "accent" | "primary" | "cta";
}

const STAT_CARDS: StatCard[] = [
  { value: "100+", label: "Enterprise Clients", variant: "accent" },
  { value: "10+", label: "Years of Experience", variant: "primary" },
  { value: "99.9%", label: "Uptime Guaranteed", variant: "cta" },
];

const getVariantColor = (variant: "accent" | "primary" | "cta" = "accent") => {
  const colors = {
    accent: "text-accent",
    primary: "text-primary",
    cta: "text-cta",
  };
  return colors[variant];
};

export const HeroStats: React.FC = () => {
  return (
    <div className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 mr-8 space-y-4 animate-fade-in-right animation-delay-300">
      {STAT_CARDS.map((stat, index) => (
        <div
          key={index}
          className="bg-card/90 backdrop-blur-xl rounded-2xl p-6 shadow-large border border-border/50 min-w-[200px]"
        >
          <div className={`font-display text-4xl font-bold ${getVariantColor(stat.variant)} mb-1`}>
            {stat.value}
          </div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};
