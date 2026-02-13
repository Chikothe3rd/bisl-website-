/**
 * MobileMenuButton component
 * Toggle button for mobile menu
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
      className="lg:hidden p-2.5 rounded-xl bg-muted/50 hover:bg-muted focus-ring"
      onClick={onToggle}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen ? "true" : "false"}
    >
      {isOpen ? (
        <X className="w-5 h-5" />
      ) : (
        <Menu className="w-5 h-5" />
      )}
    </button>
  );
};
