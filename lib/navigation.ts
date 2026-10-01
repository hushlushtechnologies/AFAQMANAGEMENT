export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Our Services",
    href: "/services",
    children: [
      { label: "Investment Services", href: "/services/investment-services" },
      { label: "Business Consultancy", href: "/services/business-consultancy" },
      { label: "PRO & Government Services", href: "/services/pro-government-services" },
      { label: "Company Formation", href: "/services/company-formation" },
      { label: "Feasibility Studies", href: "/services/feasibility-studies" },
      { label: "Digital Business Solutions", href: "/services/digital-business-solutions" },
      { label: "Finance Management", href: "/services/finance-management" },
    ],
  },
  { label: "Investment Opportunities", href: "/investment-opportunities" },
];