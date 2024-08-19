'use client';
// components/Navbar.tsx
import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';
import SearchBar from '../share/SearchBar';
import { SignedOut, useAuth, UserButton } from '@clerk/nextjs';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';
import { SignedIn } from '@clerk/clerk-react';
const navItems = [
  { href: '/news', label: 'News' },
  { href: '/competitions', label: 'Competitions' },
  {
    label: 'Teams', // No href for dropdown parent
    dropdown: [
      { href: '/teams/leagues', label: 'Leagues' },
      { href: '/teams/players', label: 'Players' },
      { href: '/teams/teams', label: 'Teams' },
    ],
  },
  { href: '/about', label: 'About Us' },
];

const Navbar = () => {
  const { userId, signOut } = useAuth();
  const pathName = usePathname();

  const handleSignOut = () => {
    signOut();
  };
  return (
    <nav className={`${styles.navbar} fixed z-50 w-full gap-5 p-3`}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="Website logo"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <div>
        <SearchBar />
      </div>
      <ul className={styles.navList}>
        {navItems.map((item, index) => (
          <li key={index} className={styles.navItem}>
            {item.href ? (
              <Link className={styles.navLink} href={item.href}>
                {item.label}
              </Link>
            ) : (
              <div className={styles.dropdown}>
                <Link className={styles.navLink} href="#">
                  {item.label}
                </Link>
                <div className={styles.dropdown_content}>
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link key={subIndex} href={subItem.href}>
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
        <li className={`${styles.navItem} pl-10 flex`}>
          <SignedOut>
            <Link href="/sign-in">
              <Image
                src="/assets/icons/user.svg"
                alt="login"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient max-lg:hidden">
                Log In
              </span>
            </Link>
          </SignedOut>
          <SignedIn>
            <Button
              className="small-medium  min-h-[41px] w-full rounded-lg
                     px-4 py-3 text-light-850 shadow-none"
              onClick={handleSignOut}
            >
              <span className="primary-text-gradient max-lg:hidden">
                Log out
              </span>
            </Button>
            <UserButton
              signInUrl="/"
              appearance={{
                elements: {
                  avatarBox: 'h-10 w-10',
                },
                variables: {
                  colorPrimary: '#ff7000',
                },
              }}
            />
          </SignedIn>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
