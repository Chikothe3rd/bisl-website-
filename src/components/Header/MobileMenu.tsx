/**
 * MobileMenu component
 * Mobile navigation menu with smooth animations and overlay
 * Features: Overlay backdrop, smooth transitions, accessibility
 */

import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuRef?: React.RefObject<HTMLDivElement>;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, menuRef }) => {
  return (
    <>
      {/* Overlay Background - Click to close */}
      <div
        className={`lg:hidden fixed inset-0 top-[var(--header-height,64px)] z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
        role="presentation"
      />

      {/* Mobile Menu Panel */}
      <div
        ref={menuRef}
        className={`lg:hidden fixed top-[var(--header-height,64px)] left-0 right-0 z-40 bg-background border-b border-border/30 shadow-large transition-all duration-300 transform origin-top ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-full invisible"
        }`}
        role="navigation"
        aria-label="Mobile menu"
        aria-hidden={!isOpen}
      >
        <nav className="container py-6 flex flex-col gap-1 max-h-[calc(100vh-var(--header-height,64px))] overflow-y-auto">
          {/* Navigation Links */}
          {NAV_LINKS.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="px-4 py-3 text-foreground/80 hover:text-foreground font-medium transition-all rounded-lg hover:bg-muted/60 focus-ring active:bg-muted/80"
              activeClassName="text-foreground bg-muted/60 font-semibold"
              onClick={onClose}
              style={{
                animation: isOpen ? `slideInUp 0.3s ease-out forwards` : "none",
                animationDelay: `${index * 40}ms`,
              }}
            >
              {link.label}
            </NavLink>
          ))}

          {/* Divider */}
          <div className="my-4 h-px bg-border/50" />

          {/* CTA Button */}
          <div className="px-4">
            <Button
              variant="cta"
              size="lg"
              className="w-full rounded-lg font-semibold touch-target"
              asChild
            >
              <NavLink
                to="/contact.html"
                onClick={onClose}
                className="flex items-center justify-center"
              >
                Get a Quote
              </NavLink>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-6 px-4 py-4 bg-muted/40 rounded-lg border border-border/30">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
              Quick Contact
            </p>
            <a
              href="tel:+260211123456"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              +260 211 123 456
            </a>
          </div>
        </nav>
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};
