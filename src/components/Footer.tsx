import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Send,
  ArrowUp,
  CheckCircle2,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    services: [
      { label: "Structured Cabling", href: "/services.html" },
      { label: "CCTV Installations", href: "/services.html" },
      { label: "IP PBX Systems", href: "/services.html" },
      { label: "Backup Power", href: "/services.html" },
      { label: "Business Intelligence", href: "/services.html" },
      { label: "Predictive Analytics", href: "/services.html" },
    ],
    company: [
      { label: "About Us", href: "/about.html" },
      { label: "Our Projects", href: "/projects.html" },
      { label: "Industries", href: "/industries.html" },
      { label: "Careers", href: "/contact.html" },
      { label: "Contact", href: "/contact.html" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer 
      className="bg-primary text-primary-foreground relative overflow-hidden"
      role="contentinfo"
    >
      {/* Background decorations */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container section-padding-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-balance">
              Stay Updated with Tech Insights
            </h2>
            <p className="text-primary-foreground/60 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">
              Subscribe to our newsletter for the latest in IT solutions, industry trends, and company updates.
            </p>
            <form 
              onSubmit={handleNewsletterSubmit} 
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-md mx-auto"
              aria-label="Newsletter subscription"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm touch-target"
                aria-label="Email address for newsletter"
              />
              <Button
                type="submit"
                variant="accent"
                size="lg"
                className="rounded-lg sm:rounded-xl px-6 sm:px-8 touch-target font-semibold"
                aria-label={isSubscribed ? "Already subscribed" : "Subscribe to newsletter"}
              >
                {isSubscribed ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <Send className="w-4 h-4 ml-1" aria-hidden="true" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container section-padding-sm">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-1">
            <a 
              href="/index.html" 
              className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 focus-ring rounded-lg"
              aria-label="BISL Solutions - Home"
            >
              <img 
                src="/BroadMlogo.png" 
                alt="BISL Logo" 
                className="w-9 sm:w-11 h-9 sm:h-11 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-base sm:text-lg">BISL</span>
                <span className="text-[9px] sm:text-[10px] text-primary-foreground/60 font-medium uppercase tracking-wider">Solutions</span>
              </div>
            </a>
            <p className="text-primary-foreground/60 text-xs sm:text-sm leading-relaxed max-w-xs">
              Transforming businesses through innovative IT solutions and technical excellence.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-display font-semibold text-sm sm:text-base mb-4 sm:mb-6 text-primary-foreground">
              Services
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-xs sm:text-sm inline-block focus-ring rounded px-2 py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display font-semibold text-sm sm:text-base mb-4 sm:mb-6 text-primary-foreground">
              Company
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-xs sm:text-sm inline-block focus-ring rounded px-2 py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="font-display font-semibold text-sm sm:text-base mb-4 sm:mb-6 text-primary-foreground">
              Legal
            </h3>
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-xs sm:text-sm inline-block focus-ring rounded px-2 py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <h3 className="font-display font-semibold text-sm sm:text-base mb-3 sm:mb-4 text-primary-foreground">
              Follow Us
            </h3>
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={`Visit our ${social.label}`}
                  title={social.label}
                  className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 focus-ring touch-target"
                >
                  <social.icon className="w-4 sm:w-5 h-4 sm:h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-primary-foreground/50 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Broad Image Solutions Limited. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-primary-foreground/50 hover:text-accent transition-colors text-xs sm:text-sm focus-ring rounded-lg px-3 py-2 touch-target"
            aria-label="Back to top"
          >
            Back to top
            <span className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all">
              <ArrowUp className="w-3.5 sm:w-4 h-3.5 sm:h-4" aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
