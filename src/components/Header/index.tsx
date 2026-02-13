/**
 * Header component (refactored)
 * Main header with composed subcomponents
 * Mobile-responsive with skip link and proper ARIA labels
 */

import { useScroll, useMobileMenu } from "@/hooks";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNav } from "./HeaderNav";
import { HeaderCTA } from "./HeaderCTA";
import { MobileMenuButton } from "./MobileMenuButton";
import { MobileMenu } from "./MobileMenu";

const Header = () => {
  const { isScrolled } = useScroll();
  const { isOpen, toggle, close } = useMobileMenu();

  return (
    <>
      {/* Skip to content for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 safe-top ${
          isScrolled
            ? "bg-background/75 backdrop-blur-xl shadow-soft border-b border-border/60 py-2 sm:py-3"
            : "bg-background/20 backdrop-blur-md border-b border-border/20 py-3 sm:py-5"
        }`}
        role="banner"
        aria-label="Main navigation"
      >
        <div className="container flex items-center justify-between gap-2 sm:gap-4">
          <HeaderLogo />
          <HeaderNav />
          <HeaderCTA />
          <MobileMenuButton isOpen={isOpen} onToggle={toggle} />
        </div>

        <MobileMenu isOpen={isOpen} onClose={close} />
      </header>
    </>
  );
};

export default Header;
