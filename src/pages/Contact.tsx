import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content">
        <PageHero
          title="Contact"
          subtitle="Tell us what you’re building—our team will respond with a clear plan, timeline, and next steps."
          currentLabel="Contact"
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
