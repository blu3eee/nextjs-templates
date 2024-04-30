import type { MainNavItem, SiteConfig } from "@/types";

export const mainNavItems: MainNavItem[] = [
  {
    title: "Learn more",
    items: [
      {
        title: "Github",
        href: "https://github.com",
        description: "My Github",
      },
      {
        title: "About Us",
        href: "/about-us",
      },
    ],
  },
  {
    title: "Development",
    items: [
      {
        title: "Playground",
        href: "/development",
      },
    ],
  },
];

export const siteConfig: SiteConfig = {
  name: "Webapp",
  description: "Place your webapp description here",
  href: "/",
  mainNav: mainNavItems,
  footerNav: [
    {
      title: "Github",
      href: "https://github.com",
    },
    {
      title: "About Us",
      href: "/About us",
    },
  ],
};
