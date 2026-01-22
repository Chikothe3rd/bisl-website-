import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content">
        <PageHero
          title="Projects & Case Studies"
          subtitle="A selection of delivered work—focused on reliability, security, and business impact across Zambia."
          currentLabel="Projects"
        />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
