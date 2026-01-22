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
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
              Stay Updated with Tech Insights
            </h3>
            <p className="text-primary-foreground/60 mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter for the latest in IT solutions, industry trends, and company updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-5 py-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm"
              />
              <Button
                type="submit"
                variant="accent"
                size="lg"
                className="rounded-xl px-8"
              >
                {isSubscribed ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send className="w-4 h-4 ml-1" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a href="/index.html" className="inline-flex items-center gap-3 mb-6">
              <div className="relative w-11 h-11">
                <div className="absolute inset-0 bg-accent rounded-xl rotate-6" />
                <div className="absolute inset-0 bg-primary-foreground rounded-xl flex items-center justify-center">
                  <span className="text-primary font-display font-bold text-xl">B</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-none">BISL</span>
                <span className="text-[10px] text-primary-foreground/60 font-medium tracking-wider uppercase">Solutions</span>
              </div>
            </a>
            <p className="text-primary-foreground/60 mb-8 leading-relaxed text-sm max-w-sm">
              Broad Image Solutions Limited - Your trusted partner for innovative, 
              enterprise-grade IT solutions in Zambia since 2014.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Plot 123, Cairo Road, Lusaka</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="w-4 h-4 text-accent" />
                <span>+260 211 123 456</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="w-4 h-4 text-accent" />
                <span>info@bisl.co.zm</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold text-base mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-sm inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-base mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-sm inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold text-base mb-6">Legal</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-sm inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <h4 className="font-display font-semibold text-base mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 focus-ring"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Broad Image Solutions Limited. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-primary-foreground/50 hover:text-accent transition-colors text-sm"
          >
            Back to top
            <span className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all">
              <ArrowUp className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
