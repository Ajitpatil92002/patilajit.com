import { User } from "@prisma/client";
import type { Icon } from "lucide-react";

import { Icons } from "@/components/icons";

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
    | {
      href: string;
      items?: never;
    }
    | {
      href?: string;
      items: NavLink[];
    }
  );

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
  };
  about: string[];
  technologies: string[];
  projects: {
    Title: string;
    Body: string;
    Category: string[];
    GithubLink: string;
    webLink: string;
  }[];
};

export type MarketingConfig = {
  mainNav: MainNavItem[];
};
