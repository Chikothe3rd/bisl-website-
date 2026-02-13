import { GraduationCap, HeartPulse, Landmark, Building2, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Smart campus solutions, e-learning platforms, and secure network infrastructure for schools and universities.",
    projects: "50+ Institutions",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Compliant systems, patient data management, and telemedicine solutions for clinics and hospitals.",
    projects: "30+ Facilities",
  },
  {
    icon: Landmark,
    title: "Finance",
    description: "Secure banking infrastructure, fraud detection systems, and real-time analytics for financial institutions.",
    projects: "20+ Banks",
  },
  {
    icon: Building2,
    title: "Government",
    description: "E-government solutions, citizen service portals, and secure communication systems for public sector.",
    projects: "15+ Agencies",
  },
];

const Industries = () => {
  return (
    <section id="industries" className="section-padding bg-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-widest mb-6">
            <span className="w-8 h-px bg-accent" />
            Industries We Serve
            <span className="w-8 h-px bg-accent" />
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-display-sm font-bold text-primary-foreground mb-6 text-balance">
            Trusted Across Key Sectors
          </h2>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            We understand the unique challenges of each industry and deliver specialized 
            solutions that meet regulatory requirements and operational needs.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-primary-foreground/5 backdrop-blur-sm rounded-3xl p-8 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/30 transition-all duration-300">
                  <industry.icon className="w-8 h-8 text-accent" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">
                  {industry.title}
                </h3>
                <p className="text-primary-foreground/60 leading-relaxed text-sm mb-6">
                  {industry.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1.5 rounded-full">
                    {industry.projects}
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary-foreground/40 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
