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
    <div className="hidden lg:flex items-center gap-3 xl:gap-4">
      <a
        href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
        className="hidden md:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-lg px-3 py-2"
        aria-label={`Call us at ${CONTACT_INFO.phone}`}
      >
        <Phone className="w-4 h-4" aria-hidden="true" />
        <span>{CONTACT_INFO.phone}</span>
      </a>
      <Button 
        variant="cta" 
        size="default" 
        className="rounded-full px-6 touch-target font-semibold"
        asChild
      >
        <NavLink to="/contact.html" aria-label="Get a quote from BISL">Get a Quote</NavLink>
      </Button>
    </div>
  );
};
