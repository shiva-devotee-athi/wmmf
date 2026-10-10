export type NavChild = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "The Sport",
    href: "/history-of-the-sport",
    children: [
      { label: "The Sport", href: "/history-of-the-sport" },
      { label: "Statutes", href: "/statutes" },
      { label: "Competition Rules", href: "/rules-regulations" },
      { label: "Referee Guidelines", href: "/wmmf-referee-rules-guidlines" },
    ],
  },
  {
    label: "Gallery",
    href: "/media",
    // children: [
    //   {
    //     label: "Pune, India",
    //     href: "/media?event=pune-india",
    //     description: "Photos and highlights from the Pune tournament",
    //   },
    // ],
  },
  { label: "News", href: "/news" },
  {
    label: "Members",
    href: "/members",
    // children: [
    //   {
    //     label: "Member Countries",
    //     href: "/members?view=countries",
    //     description: "All national federations affiliated with WMMF",
    //   },
    // ],
  },
  { label: "Contact", href: "/contact" },
];

export const ctaLink = {
  label: "Join the Federation",
  href: "/contact?intent=join",
};
