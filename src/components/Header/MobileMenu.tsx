/**
 * MobileMenu component
 * Mobile navigation menu with animations
 */

import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`lg:hidden absolute top-full left-0 right-0 bg-background/92 backdrop-blur-xl border-b border-border shadow-large transition-all duration-300 ${
        isOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <nav className="container py-8 flex flex-col gap-2" aria-label="Mobile navigation">
        {NAV_LINKS.map((link, index) => (
          <NavLink
            key={link.to}
            to={link.to}
            className="px-5 py-4 text-foreground/80 hover:text-foreground font-medium transition-all rounded-2xl hover:bg-muted/60 focus-ring text-lg"
            activeClassName="text-foreground bg-muted/60"
            onClick={onClose}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {link.label}
          </NavLink>
        ))}
        <div className="pt-4 mt-2 border-t border-border">
          <Button variant="cta" size="lg" className="w-full rounded-2xl" asChild>
            <NavLink to="/contact.html" onClick={onClose}>
              Get a Quote
            </NavLink>
          </Button>
        </div>
      </nav>
    </div>
  );
};
