/**
 * HeaderLogo component
 * Displays the BISL logo and branding
 */

import { NavLink } from "@/components/NavLink";

interface HeaderLogoProps {
  to?: string;
}

export const HeaderLogo: React.FC<HeaderLogoProps> = ({ to = "/index.html" }) => {
  return (
    <NavLink
      to={to}
      className="flex items-center gap-2 sm:gap-3 focus-ring rounded-lg group shrink-0"
      aria-label="BISL - Home"
    >
      <img 
        src="/BroadMlogo.png" 
        alt="BISL Logo" 
        className="w-9 sm:w-11 h-9 sm:h-11 object-contain"
      />
      <div className="flex flex-col">
        <span className="font-display font-bold text-base sm:text-lg text-foreground leading-none">
          BISL
        </span>
        <span className="text-[9px] sm:text-[10px] text-muted-foreground font-medium tracking-wider uppercase">
          Solutions
        </span>
      </div>
    </NavLink>
  );
};
