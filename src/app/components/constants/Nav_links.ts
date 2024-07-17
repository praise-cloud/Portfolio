
// // navigation links
// export const NAV_LINKS = [
//     {href: '/', name: 'home', tag: 'Home'},
//     {href: '/', name: 'profile', tag: 'Profile'},
//     {href: '/', name: 'project', tag: 'Project'},
//     {href: '/', name: 'pricing', tag: 'Pricing'},
//     {href: '/', name: 'contact', tag: 'Contact'},
// ]
// NAV_LINKS.ts
import { JSX } from 'react';

interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

export const NAV_LINKS: NavItem[] = [
  {
    name: "Home",
    link: "/",
    // icon?: <HomeIcon />,
  },
  {
    name: "About",
    link: "/about",
    // icon?: <AboutIcon />,
  },
  {
    name: "Project",
    link: "/contact",
    // icon?: <ContactIcon />, 
  },
  {
    name: "Pricing",
    link: "/contact",
    // icon?: <ContactIcon />, 
  },
  {
    name: "Contact",
    link: "/contact",
    // icon?: <ContactIcon />, 
  },
 
];
