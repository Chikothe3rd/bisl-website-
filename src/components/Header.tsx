import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/index.html", label: "Home" },
    { to: "/about.html", label: "About Us" },
    { to: "/services.html", label: "Services" },
    { to: "/industries.html", label: "Industries" },
    { to: "/projects.html", label: "Projects" },
    { to: "/contact.html", label: "Contact" },
  ];

  return (
    <>
      {/* Skip to content for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/75 backdrop-blur-xl shadow-soft border-b border-border/60 py-3"
            : "bg-background/20 backdrop-blur-md border-b border-border/20 py-5"
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/index.html"
            className="flex items-center gap-3 focus-ring rounded-lg group"
          >
            <div className="relative w-11 h-11">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/80 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/90 rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">B</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-foreground leading-none">BISL</span>
              <span className="text-[10px] text-muted-foreground font-medium tracking-wider uppercase">Solutions</span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
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

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+260211123456" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              +260 211 123 456
            </a>
            <Button variant="cta" size="default" className="rounded-full px-6" asChild>
              <NavLink to="/contact.html">Get a Quote</NavLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2.5 rounded-xl bg-muted/50 hover:bg-muted focus-ring"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-background/92 backdrop-blur-xl border-b border-border shadow-large transition-all duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <nav className="container py-8 flex flex-col gap-2" aria-label="Mobile navigation">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="px-5 py-4 text-foreground/80 hover:text-foreground font-medium transition-all rounded-2xl hover:bg-muted/60 focus-ring text-lg"
                activeClassName="text-foreground bg-muted/60"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-4 mt-2 border-t border-border">
              <Button variant="cta" size="lg" className="w-full rounded-2xl" asChild>
                <NavLink to="/contact.html" onClick={() => setIsMobileMenuOpen(false)}>
                  Get a Quote
                </NavLink>
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
