import { NavItem } from './types';

export const navItems: NavItem[] = [
  { href: '/news', label: 'News' },
  { href: '/competitions', label: 'Competitions' },
  {
    label: 'Teams',
    dropdown: [
      { href: '/teams/leagues', label: 'Leagues' },
      { href: '/teams/players', label: 'Players' },
      { href: '/teams/teams', label: 'Teams' },
    ],
  },
  { href: '/about', label: 'About Us' },
];
