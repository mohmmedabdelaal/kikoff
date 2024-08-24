import { NavItem } from './types';

export const navItems: NavItem[] = [
  { href: '/news', label: 'News' },
  { href: '/competitions', label: 'Competitions' },
  {
    label: 'Teams',
    dropdown: [
      { href: '/leagues', label: 'Leagues' },
      { href: '/players', label: 'Players' },
      { href: '/teams', label: 'Teams' },
    ],
  },
  { href: '/about', label: 'About Us' },
];
