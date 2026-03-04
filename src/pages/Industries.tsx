import { AppLayout } from "@/components/layouts";
import Industries from "@/components/Industries";
import PageHero from "@/components/PageHero";

const IndustriesPage = () => (
  <AppLayout>
    <PageHero
      title="Industries"
      subtitle="Proven solutions tailored to banking, retail, healthcare, education, and mission-critical operations."
      currentLabel="Industries"
    />
    <Industries />
  </AppLayout>
);

export default IndustriesPage;
