import { AppLayout } from "@/components/layouts";
import About from "@/components/About";
import PageHero from "@/components/PageHero";

const AboutPage = () => (
  <AppLayout>
    <PageHero
      title="About BISL"
      subtitle="A decade of enterprise IT delivery—built on reliability, security, and long-term partnerships across Zambia."
      currentLabel="About Us"
    />
    <About />
  </AppLayout>
);

export default AboutPage;
