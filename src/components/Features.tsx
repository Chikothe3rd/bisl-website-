import { 
  Shield, 
  Clock, 
  Users, 
  HeadphonesIcon, 
  Award, 
  Zap 
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Industry-leading security protocols protect your data and infrastructure from evolving threats.",
  },
  {
    icon: Clock,
    title: "Fast Deployment",
    description: "Rapid implementation with minimal disruption to your day-to-day operations.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified professionals with deep expertise across all technology domains.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock technical support to keep your systems running smoothly.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Rigorous testing and quality control for every project we deliver.",
  },
  {
    icon: Zap,
    title: "Scalable Solutions",
    description: "Future-proof technology that grows seamlessly with your business needs.",
  },
];

const Features = () => {
  return (
    <section 
      id="features" 
      className="section-padding bg-background relative overflow-hidden"
      aria-label="Our advantages and features"
    >
      {/* Background decoration */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-muted/50 via-transparent to-muted/50 pointer-events-none" 
        aria-hidden="true"
      />

      <div className="container relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest mb-6">
            <span className="w-6 sm:w-8 h-px bg-accent" aria-hidden="true" />
            Why Choose Us
            <span className="w-6 sm:w-8 h-px bg-accent" aria-hidden="true" />
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-display-sm font-bold text-foreground mb-4 sm:mb-6">
            The BISL Advantage
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            We combine technical excellence with exceptional service to deliver results that consistently exceed expectations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-4 sm:p-6 rounded-2xl transition-all duration-300 hover:shadow-medium"
            >
              {/* Icon */}
              <div className="relative w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-6 sm:mb-8">
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl sm:rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500" 
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-card rounded-xl sm:rounded-2xl shadow-soft flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <feature.icon 
                    className="w-8 sm:w-9 h-8 sm:h-9 text-accent" 
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm max-w-xs mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
