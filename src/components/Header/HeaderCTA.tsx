/**
 * HeaderCTA component
 * Call-to-action section (phone and quote button)
 */

import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { CONTACT_INFO } from "@/constants/navigation";

export const HeaderCTA: React.FC = () => {
  return (
    <div className="hidden lg:flex items-center gap-4">
      <a
        href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        {CONTACT_INFO.phone}
      </a>
      <Button variant="cta" size="default" className="rounded-full px-6" asChild>
        <NavLink to="/contact.html">Get a Quote</NavLink>
      </Button>
    </div>
  );
};
