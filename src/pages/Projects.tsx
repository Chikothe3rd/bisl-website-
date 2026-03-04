import { AppLayout } from "@/components/layouts";
import Projects from "@/components/Projects";
import PageHero from "@/components/PageHero";

const ProjectsPage = () => (
  <AppLayout>
    <PageHero
      title="Projects & Case Studies"
      subtitle="A selection of delivered work—focused on reliability, security, and business impact across Zambia."
      currentLabel="Projects"
    />
    <Projects />
  </AppLayout>
);

export default ProjectsPage;
