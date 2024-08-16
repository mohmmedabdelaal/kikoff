import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import classes from './footer.module.css';

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.footer_container}>
        <div className={`${classes.logo} flex justify-center`}>
          <Image
            src="/assets/logo.png"
            alt="Goal Logo"
            width={400}
            height={400}
          />
        </div>
        <div className={classes.footer_links}>
          <Link href="#">Cookies</Link>
          <Link href="#">Terms of Use</Link>
          <Link href="#">Privacy</Link>
          <Link href="/teams">Team</Link>
          <Link href="#">Partnerships</Link>
          <Link href="#">Careers</Link>
          <Link href="#">AdChoices</Link>
          <Link href="#">Advertise</Link>
          <Link href="#">USA</Link>
        </div>
        <div className={classes.footer_bottom}>
          <p>
            goalStorm (goalStorm.com) is part of the goalStorm Media Group.
            Copyright © 2023. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
