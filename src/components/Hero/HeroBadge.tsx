/**
 * HeroBadge component
 * Displays the hero section badge with pulsing indicator
 */

import { COMPANY_INFO } from "@/constants/navigation";

export const HeroBadge: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm text-accent px-5 py-2.5 rounded-full text-sm font-semibold mb-8 animate-fade-in border border-accent/20">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
      </span>
      {COMPANY_INFO.trustStatement}
    </div>
  );
};
