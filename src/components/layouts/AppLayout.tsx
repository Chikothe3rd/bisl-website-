/**
 * AppLayout component
 * Main layout wrapper for the entire application
 * Provides consistent structure with header and footer
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};
