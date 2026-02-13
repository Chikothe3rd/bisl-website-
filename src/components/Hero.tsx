import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle, Shield, Zap } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  const badges = [
    { icon: Shield, text: "Enterprise Security" },
    { icon: Zap, text: "Fast Deployment" },
    { icon: CheckCircle, text: "24/7 Support" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/placeholder.svg"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm text-accent px-5 py-2.5 rounded-full text-sm font-semibold mb-8 animate-fade-in border border-accent/20">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
            </span>
            Trusted Since 2014 • 500+ Projects Delivered
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-display font-bold text-foreground leading-[1.1] mb-8 animate-fade-in animation-delay-100">
            Transform Your Business With{" "}
            <span className="gradient-text-accent">Intelligent IT Solutions</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl animate-fade-in animation-delay-200">
            From structured cabling to predictive analytics, BISL delivers enterprise-grade technology solutions that power growth across Zambia's leading organizations.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in animation-delay-300">
            <Button variant="hero" size="xl" className="rounded-full group" asChild>
              <a href="#contact">
                Start Your Project
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" className="rounded-full" asChild>
              <a href="#services">
                <Play className="w-5 h-5 mr-1" />
                Explore Services
              </a>
            </Button>
          </div>

          {/* Feature badges */}
          <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 bg-card/80 backdrop-blur-sm px-4 py-2.5 rounded-full border border-border/50 shadow-soft"
              >
                <badge.icon className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats cards on the right (desktop only) */}
        <div className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 mr-8 space-y-4 animate-fade-in-right animation-delay-300">
          <div className="bg-card/90 backdrop-blur-xl rounded-2xl p-6 shadow-large border border-border/50 min-w-[200px]">
            <div className="font-display text-4xl font-bold text-accent mb-1">100+</div>
            <div className="text-sm text-muted-foreground">Enterprise Clients</div>
          </div>
          <div className="bg-card/90 backdrop-blur-xl rounded-2xl p-6 shadow-large border border-border/50 min-w-[200px]">
            <div className="font-display text-4xl font-bold text-primary mb-1">10+</div>
            <div className="text-sm text-muted-foreground">Years of Experience</div>
          </div>
          <div className="bg-card/90 backdrop-blur-xl rounded-2xl p-6 shadow-large border border-border/50 min-w-[200px]">
            <div className="font-display text-4xl font-bold text-cta mb-1">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime Guaranteed</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden lg:flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground font-medium tracking-wide">
          Discover what’s next
        </span>
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2.5 bg-accent rounded-full animate-pulse-soft" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
