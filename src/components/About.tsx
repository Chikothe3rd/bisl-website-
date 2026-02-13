import { CheckCircle2, TrendingUp, Users, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: TrendingUp, value: "10+", label: "Years Active", color: "accent" },
    { icon: Users, value: "100+", label: "Happy Clients", color: "primary" },
    { icon: Clock, value: "500+", label: "Projects Done", color: "cta" },
  ];

  const highlights = [
    "Cost-effective enterprise IT solutions",
    "Certified and experienced professionals",
    "Tailored solutions for every industry",
    "Comprehensive post-deployment support",
  ];

  return (
    <section id="about" className="section-padding bg-muted/40 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-widest mb-6">
              <span className="w-8 h-px bg-accent" />
              About Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-display-sm font-bold text-foreground mb-8">
              Powering Zambian Innovation Since 2014
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Broad Image Solutions Limited (BISL) is a Zambian technology company providing innovative, cost-effective IT solutions. We specialize in infrastructure, security, communications, and intelligent analytics.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Our expert team delivers tailored technology solutions that help organizations in education, healthcare, finance, and government achieve their digital transformation goals.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-foreground font-medium text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Visual */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Background card */}
              <div className="absolute inset-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl blur-xl" />
              
              {/* Main card */}
              <div className="relative bg-card rounded-3xl shadow-large border border-border/50 p-8 lg:p-10">
                <div className="text-center mb-10">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">Our Track Record</h3>
                  <p className="text-muted-foreground">Numbers that speak for themselves</p>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className={`w-14 h-14 mx-auto rounded-2xl bg-${stat.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                        style={{ backgroundColor: `hsl(var(--${stat.color}) / 0.1)` }}
                      >
                        <stat.icon className="w-6 h-6" style={{ color: `hsl(var(--${stat.color}))` }} />
                      </div>
                      <div className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                {/* Bottom section */}
                <div className="flex items-center justify-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-card shadow-soft"
                        style={{ 
                          background: `linear-gradient(135deg, hsl(var(--accent) / ${0.3 + i * 0.15}), hsl(var(--primary) / ${0.3 + i * 0.15}))` 
                        }}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">24/7</span> Support Team
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
