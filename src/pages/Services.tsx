import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content">
        <PageHero
          title="Services"
          subtitle="End-to-end IT infrastructure, security, and analytics—designed for uptime, scale, and measurable outcomes."
          currentLabel="Services"
        />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
