/**
 * HeaderCTA component
 * Call-to-action section (phone and quote button)
 */

import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { CONTACT_INFO } from "@/constants/navigation";
import { Phone } from "lucide-react";

export const HeaderCTA: React.FC = () => {
  return (
    <div className="hidden lg:flex items-center gap-4">
      <a
        href={`tel:+260976219920`}
        className="hidden md:flex items-center gap-2 text-sm font-semibold text-white hover:text-white/80 transition-all duration-300 hover:scale-105 active:scale-95 focus-ring rounded-lg px-3 py-2"
        aria-label="Call us at +260976219920"
      >
        <span>+260976219920</span>
      </a>
      <Button 
        size="default" 
        className="rounded-full px-6 bg-white text-blue-600 hover:bg-white hover:text-blue-700 font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 touch-target"
        asChild
      >
        <a href="tel:+260976219920" aria-label="Get a quote from BISL">Get a Quote</a>
      </Button>
    </div>
  );
};
