// components/Navbar.tsx
import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} fixed z-50 w-full gap-5 p-6`}>
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
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/news">News</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/latest">Latest</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/competitions">Competitions</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/teams">Teams</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/players">Players</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
