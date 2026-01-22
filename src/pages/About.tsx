import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content">
        <PageHero
          title="About BISL"
          subtitle="A decade of enterprise IT delivery—built on reliability, security, and long-term partnerships across Zambia."
          currentLabel="About Us"
        />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
