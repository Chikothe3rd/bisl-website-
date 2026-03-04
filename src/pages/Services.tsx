import { AppLayout } from "@/components/layouts";
import Services from "@/components/Services";
import PageHero from "@/components/PageHero";

const ServicesPage = () => (
  <AppLayout>
    <PageHero
      title="Services"
      subtitle="End-to-end IT infrastructure, security, and analytics—designed for uptime, scale, and measurable outcomes."
      currentLabel="Services"
    />
    <Services />
  </AppLayout>
);

export default ServicesPage;
