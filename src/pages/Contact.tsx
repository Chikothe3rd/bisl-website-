import { AppLayout } from "@/components/layouts";
import Contact from "@/components/Contact";
import PageHero from "@/components/PageHero";

const ContactPage = () => (
  <AppLayout>
    <PageHero
      title="Contact"
      subtitle="Tell us what you’re building—our team will respond with a clear plan, timeline, and next steps."
      currentLabel="Contact"
    />
    <Contact />
  </AppLayout>
);

export default ContactPage;
