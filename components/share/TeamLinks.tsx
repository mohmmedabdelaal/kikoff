'use client';
import Link from 'next/link';
import { useState } from 'react';

const TeamLinks = () => {
  const [activeLink, setActiveLink] = useState('Overview');

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
  };
  return (
    <nav className="flex justify-start p-2 text-center">
      <ul className="list-none m-0 p-0">
        <li className="inline mr-4">
          <Link
            href="#"
            className={`no-underline text-white text-lg p-1 ${
              activeLink === 'Overview' ? 'active' : ''
            }`}
            onClick={() => handleLinkClick('Overview')}
          >
            Overview
          </Link>
        </li>
        {['News', 'Videos', 'Matches', 'Standing'].map((linkName) => (
          <li key={linkName} className="inline mr-4">
            <Link
              href="#"
              className={`no-underline text-white text-lg p-1 ${
                activeLink === linkName ? 'active' : ''
              } `}
              onClick={() => handleLinkClick(linkName)}
            >
              {linkName}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TeamLinks;
