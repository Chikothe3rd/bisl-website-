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
  phone: "+260976219920",
  email: "danny.phiri@broadimagessolutions.com",
  address: "Lusaka, Zambia",
};

export const COMPANY_INFO = {
  name: "Broad Image Solutions Limited",
  fullName: "Broad Image Solutions",
  tagline: "THINK IT, DELIVER IT",
  founded: 2016,
  projectsDelivered: 100,
  trustStatement: "Trusted Since 2016 • 100+ Projects Delivered",
};
