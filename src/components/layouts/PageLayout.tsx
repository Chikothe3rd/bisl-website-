/**
 * PageLayout component
 * Layout for individual pages with consistent structure
 * Provides header spacing and main content area
 */

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children, className = "" }) => {
  return (
    <div className={`min-h-screen bg-background ${className}`}>
      {children}
    </div>
  );
};
