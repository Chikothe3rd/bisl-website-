import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const projects = [
  {
    title: "University Network Upgrade",
    category: "Education",
    description: "Complete network infrastructure overhaul for a major Zambian university, including fiber optic backbone and campus-wide Wi-Fi coverage.",
    stats: ["50+ Buildings", "10,000+ Users", "99.9% Uptime"],
    gradient: "from-accent/80 to-accent/40",
  },
  {
    title: "Hospital Security System",
    category: "Healthcare",
    description: "Comprehensive surveillance system for a regional hospital with 200+ IP cameras, AI-powered analytics, and centralized monitoring.",
    stats: ["200+ Cameras", "24/7 Monitoring", "AI Analytics"],
    gradient: "from-cta/80 to-cta/40",
  },
  {
    title: "Bank Call Center",
    category: "Finance",
    description: "Enterprise IP PBX implementation for a commercial bank's call center with advanced routing, IVR, and comprehensive reporting.",
    stats: ["100+ Agents", "50% Cost Savings", "Cloud Backup"],
    gradient: "from-primary/80 to-primary/40",
  },
  {
    title: "Government BI Platform",
    category: "Government",
    description: "Custom business intelligence platform for real-time tracking of public service delivery metrics across multiple departments.",
    stats: ["Real-time Data", "20+ Dashboards", "Mobile Access"],
    gradient: "from-accent/80 to-primary/40",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-muted/40 relative overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-widest mb-6">
            <span className="w-8 h-px bg-accent" />
            Case Highlights
            <span className="w-8 h-px bg-accent" />
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-display-sm font-bold text-foreground mb-6 text-balance">
            Projects That Make an Impact
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore how we've helped organizations across Zambia transform their operations 
            with innovative, tailored technology solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group card-premium overflow-hidden hover:-translate-y-2 cursor-pointer"
            >
              {/* Gradient header */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '24px 24px'
                }} />
                
                {/* Category badge */}
                <div className="absolute top-5 left-5">
                  <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-foreground text-xs font-semibold px-4 py-2 rounded-full shadow-soft">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    {project.category}
                  </span>
                </div>

                {/* Arrow */}
                <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/40 transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-7 lg:p-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-2">
                  {project.stats.map((stat, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold px-4 py-2 bg-accent/10 text-accent rounded-full"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
