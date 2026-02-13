import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowRight
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length > 100) {
      newErrors.name = "Name must be less than 100 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.phone && !/^[\d\s\-+()]{7,20}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Failed to send message. Please try again.");
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Plot 123, Cairo Road", "Lusaka, Zambia"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+260 211 123 456", "+260 977 123 456"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@bisl.co.zm", "support@bisl.co.zm"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 8:00 AM - 5:00 PM", "Sat: 9:00 AM - 1:00 PM"],
    },
  ];

  const inputClasses = "w-full px-5 py-4 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm";

  return (
    <section id="contact" className="section-padding bg-muted/40 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/5 to-transparent rounded-full pointer-events-none" />

      <div className="container relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-widest mb-6">
            <span className="w-8 h-px bg-accent" />
            Contact Us
            <span className="w-8 h-px bg-accent" />
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-display-sm font-bold text-foreground mb-6 text-balance">
            Let's Build Something Great Together
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to transform your business with innovative IT solutions? 
            Get in touch with our team for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="group flex gap-5 p-5 bg-card rounded-2xl shadow-soft border border-border/50 hover:shadow-medium transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-6 h-6 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Quick CTA */}
            <div className="p-6 bg-primary rounded-2xl text-primary-foreground">
              <h3 className="font-display font-semibold text-lg mb-2">Need urgent support?</h3>
              <p className="text-primary-foreground/70 text-sm mb-4">Our team is available 24/7 for critical issues.</p>
              <a 
                href="tel:+260977123456" 
                className="inline-flex items-center gap-2 text-accent font-semibold text-sm group hover:opacity-80 transition-opacity focus-ring"
                aria-label="Call us at +260 977 123 456"
              >
                Call Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-3xl shadow-large p-6 sm:p-8 lg:p-10 border border-border/50"
              noValidate
              aria-label="Contact form"
            >
              {/* Success Alert */}
              {isSuccess && (
                <div 
                  className="flex items-start gap-3 p-4 sm:p-5 mb-8 bg-success/10 text-success rounded-xl border border-success/20"
                  role="status"
                  aria-live="polite"
                  aria-label="Message sent successfully"
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="font-medium text-sm">
                    Thank you! Your message has been sent. We'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              {/* Error Alert */}
              {submitError && (
                <div 
                  className="flex items-start gap-3 p-4 sm:p-5 mb-8 bg-destructive/10 text-destructive rounded-xl border border-destructive/20"
                  role="alert"
                  aria-live="assertive"
                  aria-label="Form submission error"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="font-medium text-sm">{submitError}</p>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-5 mb-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Full Name <span className="text-destructive" aria-label="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`${inputClasses} ${errors.name ? "border-destructive/50 ring-destructive/20" : "border-input"}`}
                    placeholder="John Doe"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    required
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-2 text-xs text-destructive flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address <span className="text-destructive" aria-label="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${inputClasses} ${errors.email ? "border-destructive/50 ring-destructive/20" : "border-input"}`}
                    placeholder="john@company.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    required
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-2 text-xs text-destructive flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`${inputClasses} ${errors.phone ? "border-destructive/50 ring-destructive/20" : "border-input"}`}
                    placeholder="+260 977 123 456"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-2 text-xs text-destructive flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Your Company"
                  />
                </div>

                {/* Service */}
                <div className="sm:col-span-2">
                  <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="">Select a service</option>
                    <option value="cabling">Structured Cabling</option>
                    <option value="cctv">CCTV Installations</option>
                    <option value="pbx">IP PBX Systems</option>
                    <option value="power">Backup Power Solutions</option>
                    <option value="bi">Business Intelligence</option>
                    <option value="analytics">Predictive Analytics</option>
                    <option value="other">Other / Multiple Services</option>
                  </select>
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Your Message <span className="text-destructive" aria-label="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClasses} resize-none ${errors.message ? "border-destructive/50 ring-destructive/20" : "border-input"}`}
                    placeholder="Tell us about your project requirements..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    required
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-2 text-xs text-destructive flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                variant="cta"
                size="lg"
                className="w-full rounded-xl h-14 touch-target font-semibold"
                disabled={isSubmitting}
                aria-label={isSubmitting ? "Sending message" : "Send message"}
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinner size="sm" className="text-current" aria-hidden="true" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" aria-hidden="true" />
                    <span>Send Message</span>
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-6">
                By submitting, you agree to our privacy policy. We'll respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

