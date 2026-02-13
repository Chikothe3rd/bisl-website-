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
      className="flex items-center gap-3 focus-ring rounded-lg group"
    >
      <div className="relative w-11 h-11">
        <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/80 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/90 rounded-xl flex items-center justify-center">
          <span className="text-primary-foreground font-display font-bold text-xl">B</span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-display font-bold text-lg text-foreground leading-none">
          BISL
        </span>
        <span className="text-[10px] text-muted-foreground font-medium tracking-wider uppercase">
          Solutions
        </span>
      </div>
    </NavLink>
  );
};
