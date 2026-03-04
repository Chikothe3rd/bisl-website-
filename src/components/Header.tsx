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
            ? "bg-blue-600/95 backdrop-blur-xl shadow-lg border-b border-blue-500 py-3"
            : "bg-blue-500/80 backdrop-blur-md border-b border-blue-400 py-5"
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/index.html"
            className="flex items-center gap-3 focus-ring rounded-lg group"
          >
            <img 
              src="/BroadMlogo.png" 
              alt="BISL Logo" 
              className="w-11 h-11 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-white leading-none">BISL</span>
              <span className="text-[10px] text-white/70 font-medium tracking-wider uppercase">Solutions</span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="relative px-5 py-2.5 text-white/90 hover:text-white font-medium transition-all duration-300 rounded-full hover:bg-white/20 hover:shadow-lg focus-ring group"
                activeClassName="text-white bg-white/25 shadow-lg"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+260976219920" 
              className="text-sm font-semibold text-white hover:text-white/80 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-1 group"
            >
              <span className="group-hover:drop-shadow-lg transition-all">📞</span>
              +260976219920
            </a>
            <Button 
              size="default" 
              className="rounded-full px-6 bg-white text-blue-600 hover:bg-white hover:text-blue-700 font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
              asChild
            >
              <a href="tel:+260976219920">Get a Quote</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2.5 rounded-xl bg-white/20 hover:bg-white/30 focus-ring transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-blue-600/95 backdrop-blur-xl border-b border-blue-500 shadow-lg transition-all duration-300 ${
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
                className="px-5 py-4 text-white/90 hover:text-white font-medium transition-all duration-300 rounded-2xl hover:bg-white/20 hover:scale-105 active:scale-95 focus-ring text-lg"
                activeClassName="text-white bg-white/25"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-4 mt-2 border-t border-white/20">
              <Button size="lg" className="w-full rounded-2xl bg-white text-blue-600 hover:bg-white hover:text-blue-700 font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300" asChild>
                <a href="tel:+260976219920" onClick={() => setIsMobileMenuOpen(false)}>
                  Get a Quote
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
