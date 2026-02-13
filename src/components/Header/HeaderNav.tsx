/**
 * HeaderNav component
 * Desktop navigation menu
 */

import { NavLink } from "@/components/NavLink";
import { NAV_LINKS } from "@/constants/navigation";

export const HeaderNav: React.FC = () => {
  return (
    <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
      {NAV_LINKS.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className="relative px-5 py-2.5 text-foreground/70 hover:text-foreground font-medium transition-all rounded-full hover:bg-muted/60 hover:shadow-soft focus-ring group"
          activeClassName="text-foreground bg-muted/60 shadow-soft"
        >
          {link.label}
          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </NavLink>
      ))}
    </nav>
  );
};
