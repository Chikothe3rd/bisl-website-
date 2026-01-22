import Header from "@/components/Header";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const IndustriesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content">
        <PageHero
          title="Industries"
          subtitle="Proven solutions tailored to banking, retail, healthcare, education, and mission-critical operations."
          currentLabel="Industries"
        />
        <Industries />
      </main>
      <Footer />
    </div>
  );
};

export default IndustriesPage;
