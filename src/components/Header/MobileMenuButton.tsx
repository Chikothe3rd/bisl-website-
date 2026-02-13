/**
 * MobileMenuButton component
 * Modern hamburger menu toggle with smooth animations
 * Features: Visual feedback, ARIA labels, smooth transitions
 */

import { Menu, X } from "lucide-react";

interface MobileMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  isOpen,
  onToggle,
}) => {
  return (
    <button
      type="button"
      className={`lg:hidden relative inline-flex items-center justify-center p-2.5 rounded-xl transition-all duration-300 touch-target ${
        isOpen
          ? "bg-accent text-accent-foreground shadow-soft"
          : "bg-muted/50 hover:bg-muted text-foreground"
      }`}
      onClick={onToggle}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      {/* Hamburger Menu Icon with smooth rotation */}
      <div className="relative w-6 h-6 flex items-center justify-center">
        {isOpen ? (
          <X
            className="absolute w-5 h-5 transition-all duration-300 rotate-0 scale-100"
            aria-hidden="true"
            strokeWidth={2.5}
          />
        ) : (
          <Menu
            className="absolute w-5 h-5 transition-all duration-300 rotate-0 scale-100"
            aria-hidden="true"
            strokeWidth={2.5}
          />
        )}
      </div>

      {/* Visual pulse on open */}
      {isOpen && (
        <div
          className="absolute inset-0 rounded-xl bg-accent/20 animate-pulse"
          aria-hidden="true"
        />
      )}
    </button>
  );
};
