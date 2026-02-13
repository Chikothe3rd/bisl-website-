/**
 * Navigation configuration
 * Centralized source of truth for navigation links across the application
 */

import { NavLink, ContactInfo } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { to: "/index.html", label: "Home" },
  { to: "/about.html", label: "About Us" },
  { to: "/services.html", label: "Services" },
  { to: "/industries.html", label: "Industries" },
  { to: "/projects.html", label: "Projects" },
  { to: "/contact.html", label: "Contact" },
];

export const CONTACT_INFO: ContactInfo = {
  phone: "+260 211 123 456",
  email: "info@bisl.zm",
  address: "Lusaka, Zambia",
};

export const COMPANY_INFO = {
  name: "BISL",
  fullName: "BISL Solutions",
  tagline: "Solutions",
  founded: 2014,
  projectsDelivered: 500,
  trustStatement: "Trusted Since 2014 • 500+ Projects Delivered",
};
