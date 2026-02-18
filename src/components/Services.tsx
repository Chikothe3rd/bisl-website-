import { 
  Network, 
  Camera, 
  Phone, 
  BatteryCharging, 
  BarChart3, 
  Brain,
  ArrowUpRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Network,
    title: "Structured Cabling",
    description: "We build networks that don't fail. CAT6, fiber optics, or custom designs - proven to work.",
    features: ["CAT6/CAT6A", "Fiber Optics", "Network Design"],
    color: "accent",
  },
  {
    icon: Camera,
    title: "CCTV Installations",
    description: "HD cameras. Remote monitoring. See what's happening anytime, anywhere.",
    features: ["IP Cameras", "Remote Access", "AI Analytics"],
    color: "primary",
  },
  {
    icon: Phone,
    title: "IP PBX Systems",
    description: "Modern phone systems that save money and make team communication better.",
    features: ["VoIP Solutions", "Call Center", "Unified Comms"],
    color: "cta",
  },
  {
    icon: BatteryCharging,
    title: "Backup Power",
    description: "When power goes out, your systems stay up. UPS and generator solutions you can trust.",
    features: ["UPS Systems", "Generators", "Power Mgmt"],
    color: "accent",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Turn your data into real insights. Custom dashboards show you what matters.",
    features: ["Dashboards", "Data Viz", "Reports"],
    color: "primary",
  },
  {
    icon: Brain,
    title: "Predictive Analytics",
    description: "Use data and AI to see what's coming next. Make smarter decisions.",
    features: ["ML Models", "Forecasting", "Automation"],
    color: "cta",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="container relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-widest mb-6">
            <span className="w-8 h-px bg-accent" />
            Our Services
            <span className="w-8 h-px bg-accent" />
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-display-sm font-bold text-foreground mb-6">
            Technology Services That Fit Your Business
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Networks. Security. Phones. Data. We handle the infrastructure and intelligence your business needs to grow.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group card-premium p-7 lg:p-8 hover:-translate-y-2 cursor-pointer"
            >
              {/* Icon */}
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7 transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow-accent"
                style={{ backgroundColor: `hsl(var(--${service.color}) / 0.1)` }}
              >
                <service.icon className="w-7 h-7" style={{ color: `hsl(var(--${service.color}))` }} />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1.5 bg-muted rounded-full text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-accent font-semibold text-sm group/link"
              >
                Learn More
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="cta" size="lg" className="rounded-full px-8" asChild>
            <a href="#contact">
              Discuss Your Project
              <ArrowUpRight className="w-5 h-5 ml-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
